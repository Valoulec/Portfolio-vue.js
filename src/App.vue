<template class="template">
  <HeaderPF/>
  <MoiPF/>
  <MesProjets/>
  <MesExperiences/>
  <ContactPF/>
  <FooterPF/>

  
  
  </template>
  
  <script>
import HeaderPF from './components/HeaderPF.vue';
import MoiPF from './components/MoiPF.vue';
import MesProjets from './components/MesProjets.vue';
import MesExperiences from './components/MesExperiences.vue';
import ContactPF from './components/ContactPF.vue';
import FooterPF from './components/FooterPF.vue';

  export default {
    name: 'App',
  
    components:{
   
      HeaderPF,
  
      MoiPF,
  
      MesProjets,
  
      MesExperiences,
  
      ContactPF,
  
      FooterPF,
    },
  }
  
  </script>
  
  <style lang="scss">
  @import '../src/style/style.css';
  
  </style>
