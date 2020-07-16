<template>
  <div id="app"> 
    <Header />
         <router-view></router-view>
    <Sidebar />
    <Footer />
  </div>
</template>

<script>
import Header from './components/shared/Header'
import Sidebar from './components/shared/Sidebar'
import Footer from './components/shared/Footer' 
export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script> 
<style> 
</style>
