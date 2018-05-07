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
    // this.$nt.select('users').push({
    //   name:'alex',
    //   surname:'pashkevich'
    // })
    this.Notorious.select('users').getAll().then(res=>{
      console.log(res)
    })
  }
}
</script>
