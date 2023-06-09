<template>
  <div class="container">
    <!-- Add Reviews -->
    <div class="addReview my-3">
      <h1 class="text-center">Escribe tu opinión para el juego: <b>{{game}}</b></h1>
      <form action="">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Nombre">
        </div>
        <div class="mb-3">
          <label for="opinion" class="form-label">Opinión</label>
          <textarea class="form-control" id="opinion" rows="3" v-model="opinion" placeholder="Ingresa tu opinión aquí"></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-outline-dark" @click.prevent="modReview" v-show="actualizar">Actualizar</button>
          <button type="submit" class="btn btn-outline-dark" @click.prevent="addReview" v-show="agregar">Agregar</button>
        </div>
      </form>
    </div>
    <!-- Alert -->
    <div class="alert alert-dark" role="alert" v-if="reviews.length==0">
      No existen opiniones para mostrar.
    </div>
    <!-- Reviews List -->
    <div class="listReviews my-5" v-if="reviews.length>0">
      <div class="accordion" id="reviewList">
        <div class="accordion-item" v-for="(review, index) in reviews" :key="index">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="review.id" aria-expanded="true" :aria-controls="review.control">
              Comentario Escrito por: {{review.nombre}}
            </button>
          </h2>
          <div :id="review.control" class="accordion-collapse collapse show" data-bs-parent="#reviewList">
            <div class="accordion-body d-flex justify-content-between align-items-center p-3 ">
              <p class="flex-grow-2 pe-2 text-justify mb-0">{{review.opinion}}</p>
              <div class="buttons flex-grow-1 text-end">
                <button class="btn btn-danger btnOpinion" @click="reviews.splice(index, 1)">Eliminar</button>
                <button class="btn btn-warning btnOpinion" @click="revId(index)">Editar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

//-AÑADIR PETICION ID CON ID DE JUEGO PROPS

<script>
export default {
  name: 'game-comp',
  props:{
    game:{
      type: String,
      required: true
    }
  },
  data:function(){
    return{
      nombre:'',
      opinion:'',
      actualizar: false,
      agregar: true,
      reviewIndex:'',
      reviews:[],
      gameData:[]
    }
  },
  methods:{
    addReview(){
      this.reviews.push({nombre: this.nombre, opinion:this.opinion, control:'', id:''})
      for (let i = 0; i < this.reviews.length; i++) {
        this.reviews[i].control=`review${i}`
        this.reviews[i].id=`#review${i}`
      }
      this.nombre = ''
      this.opinion = ''
    },
    revId(id){
      this.actualizar= true
      this.agregar = false
      this.reviewIndex = id
      this.opinion = this.reviews[id].opinion
      this.nombre = this.reviews[id].nombre
    },
    modReview(){
      this.reviews[this.reviewIndex].opinion = this.opinion
      this.actualizar = false
      this.agregar = true
      this.nombre = ''
      this.opinion = ''
    }
  },
}

</script>

<style>
.btnOpinion{
  width: 5rem;
  margin: .2rem;
}
</style>