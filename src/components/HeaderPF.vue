<template>
    <div class="header">
        <div class="top-barre">
          <div class="nom">
            <h1 class="np">LECLERC Valentin</h1>
          </div>
          <div class="groupe">
            <div class="barre">
              <router-link to="/main" class="color-groupe"> A propos</router-link>
              <a href="../components/MainPortfolio.vue" class="color-groupe" target="_blank" @click.prevent="Apropos">A propos</a>
            </div>
            <div class="barre">
              <a href="../components/MainPortfolio.vue" class="color-groupe" target="_blank" @click.prevent=" Sosial">Social</a>
            </div>
            <div class="barre">
              <router-link to="/MyProjet.vue" class="color-groupe"> projet</router-link>
              <a href="../components/MyProjet.vue" class="color-groupe" target="_blank" @click.prevent="Projet">Projet</a>
            </div>
            <div class="barre">
              <a href="../components/ExperiencePortfolio.vue" class="color-groupe" target="_blank" @click.prevent="Expérience">Expérience</a>
            </div>
            <div class="barre">
              <a href="../components/ContactPortfolio.vue" class="color-groupe" target="_blank" @click.prevent="Contact">Contact</a>
            </div>
            <div class="barre">
            <button @click="scrollToTop" class="btn"><img src="../img/icons8-flèche-haut-96.png" class="img" alt=""/></button>
          </div>
          </div>
        </div>
    </div>
    <router-view></router-view>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Pour un défilement fluide
        });
      }
    }
  }
  </script>
  
  <style lang="scss">
  .header{ 
    background-color:100%;
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 1000;
    .btn{
      background: 100%;
      width: 30px;
      height: 30px;
      border: 0;
      border-radius: 50% ;
      padding: 0;
    }
   .img{
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0;
    width: 30px ;
    height: 30px;
   }
      .top-barre{
        display: flex;
      
      .nom{
  
      .np{
        color:#0BD8B6;
        padding-left: 25px;
      }
      }
      .groupe{
        display: flex;
        position: absolute;
        right: 0;
        font-size: 10px;
        .barre{
          padding: 20px;
          font-size: 25px;
          padding-top: 20px; 
          .color-groupe{
            color: #0BD8B6;
            text-decoration: none;}
            .color-groupe:hover{
      color: #BAA7FF;
      text-decoration: underline;
  }
      }
  
      }
      }
    }
   </style>