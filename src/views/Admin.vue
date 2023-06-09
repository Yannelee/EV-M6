<template>
  <div class="">
    <!-- users sign in -->
    <div class="userIn text-center mt-5" v-show="!user">
      <h1>Para ver la información Ingresa tus datos</h1>
      <button class="btn btn-outline-dark" @click="datoPrompt">Ingresar Datos</button>
    </div>
    <!-- Dashboard -->
    <div class="userInfo" v-show="user">
      <div class="userInfo__name bg-dark text-white px-3 text-center">
        <i class="bi bi-person-circle"></i>
        <h1 class="mb-2">Bienvenid@</h1>
        <h4 class="text-center">{{fullName}}</h4>
      </div>
      <div class="userInfo__resumen flex-fill px-3">
        <h1>Resumen de tu cuenta</h1>
        <p>Le diste me gusta al juego <span class="fw-bold">{{game}}</span></p>
        <!-- add coins -->
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title"> ¿Deseas comprar coins para este juego?</h5>
            <button class="btn btn-warning" @click="addCoins"><i class="bi bi-currency-exchange"></i> ++</button>
          </div>
          <div class="card-footer text-end">
            <p v-if="coins==50" class="text-center">Llegaste al máximo de Coins</p>
            <div class="progress" role="progressbar" aria-label="coins" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-bar-striped text-dark" :style="{width:(coins*2)+'%', backgroundColor: color}"><b>{{coins*2}}%</b></div>
            </div>
            {{coins}} Coins Compradas
          </div>
        </div>
        <!-- cards about the game -->
        <h4 class="text-center mt-3">Resumen de {{game}}</h4>
        <div class="row row-cols-3 row-cols-md-3 g-2 my-3 text-center">
          <div class="col">
            <div class="card h-100 text-bg-warning">
              <div class="card-header ">% Finalización</div>
              <div class="card-body">
                <p class="card-text fw-bold" v-show="finaliz>=0 && finaliz<33">
                  <i class="bi bi-star"> {{finaliz}}</i>
                </p>
                <p class="card-text fw-bold" v-show="finaliz>34 && finaliz<66">
                  <i class="bi bi-star-half"> {{finaliz}}</i>
                </p>
                <p class="card-text fw-bold" v-show="finaliz>66">
                  <i class="bi bi-star-fill"> {{finaliz}}</i>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 text-bg-success">
              <div class="card-header text-center">Logros</div>
              <div class="card-body">
                <p class="card-text fw-bold">
                  <i class="bi bi-trophy"> {{logros}}</i>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 text-bg-info">
              <div class="card-header text-center">Recompensas</div>
              <div class="card-body">
                <p class="card-text fw-bold">
                  <i class="bi bi-award"> {{recomp}}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-comp',
  props:['game'],
  data:function(){
    return{
      nombre:'',
      apellido:'',
      user: false,
      coins: 0,
      color: '',
      finaliz: 0,
      recomp: 0,
      logros: 0,
      re: new RegExp(/^(?=.{1,40}$)[A-zÀ-ú]+(?:[-'\s][A-zÀ-ú]+)*$/)
    }
  },
  computed:{
    fullName(){
      return `${this.nombre} ${this.apellido}`
    }
  },
  methods:{
    datoPrompt(){
      this.nombre = prompt('Ingresa tu nombre')
      this.apellido = prompt('Ingresa tu apellido')
      if(this.re.test(this.nombre) && this.re.test(this.nombre)) this.user = true
    },
    randomNum(){
      return Math.round(Math.random()*10)
    },
    backgroundChange(){
      if(this.coins<=20){
        this.color = 'green'
      }else{
        this.coins>20 && this.coins<31 ?this.color = 'gold' :this.color = 'red'
      }
    },
    addCoins(){
      if (this.coins<50) {
        this.coins++
        this.backgroundChange()
      }
    }
  },
  created(){
    this.coins = this.randomNum() * 5
    this.finaliz = this.randomNum() * 10
    this.logros = this.randomNum() * 10
    this.recomp = this.randomNum() * this.randomNum()
    this.backgroundChange()
  }
}
</script>

<style>
.userInfo{
  display: flex;
  justify-content: space-between;
}
.userInfo__name{
  height: 93vh;
}
.bi-person-circle{
  font-size: 5rem;
}
.card-text{
  margin: 0 !important;
}
</style>