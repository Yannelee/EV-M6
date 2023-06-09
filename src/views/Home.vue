<template>
  <div class="container">
      <h1 class="text-center m-3">Lista de Juegos Disponibles</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 mb-4">
        <div class="col" v-for="game in games" :key="game.name">
          <!-- cards games -->
          <div class="card h-100">
            <img :src="game.background_image" class="card-img-top" alt="">
            <div class="card-body card-body__name">
              <h5 class="card-title">{{game.name}}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Rating:</b> {{game.rating}} ⭐️</li>
              <li class="list-group-item"><b>Lanzamiento:</b> <br> <small><i class="bi bi-calendar3"></i></small> {{game.released}}</li>
              <li class="list-group-item"><b>Actualización:</b> <br><small><i class="bi bi-calendar-plus"></i></small> {{game.updated}}</li>
            </ul>
            <div class="card-footer d-flex justify-content-around">
              <i class="bi bi-pencil-square mx-1 click" @click="toReviews(game.name)"> Opinar</i> |
              <i class="bi bi-chat-square-heart mx-1 click" @click="toAdmin(game.name)"></i>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: "home-comp",
  data:function(){
    return{
      games:[],
    }
  },
  methods:{
    getData(){
      let page = Math.round(Math.random()*100) /* Random number for different games everytime, limited to 100 pages */
      let apiKey = 'key=de294bb09054413cb1d75970171acf08'
      if(page === 0) page = 1
      axios.get(`https://api.rawg.io/api/games?${apiKey}&page=${page}`)
      .then(json => {
        let {results} = json.data
        results.forEach(game => this.games.push(game))
        this.games.forEach(game => {
          game.released = this.dateReleased(game.released)
          game.updated = this.dateUpdated(game.updated)
        });
      })
    },
    toReviews(name){
      this.$router.push(`/opiniones/${name}`)
    },
    toAdmin(name){
      this.$router.push(`/admin/${name}`)
    },
    dateUpdated(date){
      return new Date(date).toLocaleString('es-CL')
    },
    dateReleased(date){
      return new Date(date).toLocaleDateString('es-CL')
    },
  },
  created(){
    this.getData()
  }
}
</script>

<style>
.card:hover{
  box-shadow: 0 0.3rem .5rem gray;
}
.card-img-top{
  height: 10rem;
  object-fit: cover;
}
.card-body__name{
  height: 6rem;
  text-align: center;
}
.bi-calendar3, .bi-calendar-plus{
  color: steelblue;
}
.click:hover{
  cursor: pointer;
  text-shadow: 0 0 .1rem gray;
}
a{
  text-decoration: none;
  color: #000;
}
</style>