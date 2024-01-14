<template>
    <div class="projet">
  
  <div class="mesprojet">
    <h2 class="title-projet" id="[projet](index.html)">Projets</h2>
    <div class="img-projet">
      <div class="img">
        <img src="../img/CV.jpeg" class="imgdim" alt="Projet CV" />
        <button v-on:click="fermercv" class="btn-modal">Détail du CV</button>
      </div>
      <div class="img">
        <img src="../img/Cahier-des-charges-.jpeg" class="imgdim" alt="Porjet Cahier des charges" />
        <button v-on:click="fermercdc" class="btn-modal">Détail du Cahier des Charges</button>
      </div>
      <div class="img">
        <img src="../img/Espace-commentaire.jpeg" class="imgdim" alt="Projet Espace commentaire" />
        <button v-on:click="fermerec" class="btn-modal">Détail de l'espace commentaire </button>
      </div>
    </div>
    <div class="modal">
    <CV v-bind:ouvrircv="ouvrircv" v-bind:fermercv="fermercv" ></CV>
    <CahierDesCharge v-bind:ouvrircdc="ouvrircdc" v-bind:fermercdc="fermercdc"></CahierDesCharge>
    <EspaceCommentaire  v-bind:ouvrirec="ouvrirec" v-bind:fermerec="fermerec"></EspaceCommentaire>
    
  </div>
  </div>
  </div>
  </template>
  
  <script>
import CV from './CV.vue'
import CahierDesCharge from './CahierDesCharge.vue'
import EspaceCommentaire from './EspaceCommentaire.vue'
  export default {
      components:{
    CV,
    CahierDesCharge,
    EspaceCommentaire,
  },
  data(){
    return{
      ouvrircv : false,
      ouvrircdc : false,
      ouvrirec : false
    }
  },
  methods: {
    fermercv: function(){
      this.ouvrircv = !this.ouvrircv
    },
    fermercdc: function(){
      this.ouvrircdc = !this.ouvrircdc
    },
    fermerec: function(){
      this.ouvrirec = !this.ouvrirec
    }
  }
  }
  </script>
  
  <style lang="scss">
  .projet{
    display: flex;
    justify-content: center;
    width: 100%;
  
  
    .mesprojet{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
  
      padding-top: 100px;
      padding-bottom: 40px;
      margin-top: 20px;
  
    }
    .title-projet{
    display: flex;
    justify-content: center;
    font-size: 25px;
    padding-bottom: 20px;
  }
      .img-projet{
      display: flex;
      justify-content:space-around;
  
      .img{
        display: flex;
        flex-direction: column;
        align-items: center;
  
        .btn-modal{
        margin-top: 30px;
        background: linear-gradient(200deg,#0BD8B6, #BAA7FF);
        border-radius: 15px;
        padding: 0px 10px;
        }
        .imgdim{
          width: 300px;
          height: 400px;
        }
        .imgdim:hover{
          box-shadow: 10px 10px 10px #888888;
        }
      } 
      }
    }
  </style>