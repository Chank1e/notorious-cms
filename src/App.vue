<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'App',
  data:()=>({
    dt:[]
  }),
  methods:{
    ph(item){
      this.Notorious.select('users').push(item)
    }
  },
  mounted(){
    this.ph({
        name:'Pavel',
        surname:'Pashkevich'
      })
  }
}
</script>
