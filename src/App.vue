<template>
  <router-view/>
</template>
<script>
import db from "./firebase";

export default {
  mounted() {
    db.user.get().then((docs)=>{
      docs.forEach(doc => {
        window.localStorage.setItem(doc.id,doc.data().name)        
      });
    })
     db.product.get().then((docs)=>{
      docs.forEach(doc => {
        window.localStorage.setItem(doc.id,doc.data().name)        
      });
    })
    if(window.localStorage.getItem('urs')===null){
    this.$router.replace('/login')}
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
