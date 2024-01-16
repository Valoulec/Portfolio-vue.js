<template class="template">
  <div ref="parentElement">
    <HeaderPF @scrollToParent="scrollToElement"/>
    <div ref="moi">
      <MoiPF />
    </div>
    <div ref="projet">
      <MesProjets />
    </div>
    <div ref="exp">
      <MesExperiences />
    </div>
    <div ref="contact">
      <ContactPF />
    </div>
  </div>
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

    methods:{
      scrollToElement(elementId) {
      this.$refs[elementId].scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
</script>
  
<style lang="scss">
  @import '../src/style/style.css';
</style>
