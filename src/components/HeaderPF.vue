<template>
    <div class="header">
        <div class="top-barre">
          <div class="nom">
            <h1 class="np">LECLERC Valentin</h1>
          </div>
          <div class="groupe">
            <div class="barre">
              <button  @click="scrollToParent('moi')"  class="color-groupe"  >A propos</button>
            </div>
            <div class="barre">
              <button  @click="scrollToParent('moi')" class="color-groupe">Social</button>
            </div>
            <div class="barre">
              <button  @click="scrollToParent('projet')" class="color-groupe" >Projet</button>
            </div>
            <div class="barre">
              <button  @click="scrollToParent('exp')" class="color-groupe">Expérience</button>
            </div>
            <div class="barre">
              <button  @click="scrollToParent('contact')" class="color-groupe">Contact</button>
            </div>
            <div class="barre">
            <button @click="scrollToTop" class="btn" id="btn"><img src="../img/icons8-flèche-haut-96.png" class="img" alt="flèche du haut "/></button>
          </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>

  export default {

  methods: {
    scrollToParent(elementId) {
      this.$emit('scrollToParent',elementId);
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
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
  position: fixed;
  bottom: 20px;
  right: 30px;
  border: none;
  padding: 10px;
  border-radius: 40%;
  background-color: #291F43;
    }
.btn:hover{
  background-color:  #BAA7FF;
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
            border: none;
            background-color: rgba(0, 0, 0,0);
            color: #0BD8B6;
            text-decoration: none;
          font-size: 25px;
          }
            .color-groupe:hover{
              background-color: rgba(0, 0, 0,0);
              border: none;
      color: #BAA7FF;
      text-decoration: underline;
  }
      }
  
      }
      }
    }
   </style>