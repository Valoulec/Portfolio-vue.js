<template>
    <div class=" block-modal" v-if="ouvrirec">
      <div class="overlay" v-on:click="fermerec"></div>
      <div class="modal">
          <button class="btn-modal-fermer" v-on:click="fermerec"><img src="../img/icons8-multiplier-52.png" class="img" alt=""></button>
          <div>
              <div class="title-modal">
                  <h2 class="titre-modal">Espace commentaire</h2>
                  <p class="date">08-12-2023</p>
              </div>
              <div>
                  <p class="text-modal">Je devais dynamiser un espace commentaire dans lequel je devais récupérer les données de l’utilisateur pour l’afficher dans une liste de commentaire.</p>
              </div>
              <div>
                  <a href="https://github.com/Valoulec/dynamiser-un-espace-commentaire-" class="lien-modal" target="_blank">GitHub</a>
              </div>
              <div>
                 <img src="../img/icons8-html5.svg" class="img-modal" alt="HTML5">
                 <img src="../img/icons8-javascript.svg" class="img-modal" alt="JavaScript">
              </div>
          </div>
      </div>
  </div>
</template>
      
<script>
    export default {
        props:['ouvrirec', 'fermerec'],
    }
</script>
      
<style lang="scss">
    .block-modal{
        position: absolute;
        .overlay{
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: rgba(0,0, 0, 0.5) ;
        }
        .modal{
            position: fixed;
            top: 25%;
            left: 25%;
            transform: translate(-50, -50);
            width: 600px;
            height: 400px;
            background-color: #33255B;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 10px;
            z-index: 500;
            .btn-modal-fermer{
                position: absolute;
                right: 10px;
                top: 10px;
                background-color: rgb(0, 0, 0,0);
                border: none;
               .img{
                    width: 20px;
                    height: 20px;
                    background-color: rgb(0, 0, 0,0);
                }
                .img:hover{
                    transform: rotate(150deg);
                    transition: transform 0.5s ease;
                }
            }
        }
        .lien-modal{
            color: #0BD8B6;
        }
        .lien-modal:hover{
            color: #BAA7FF;
        }
    }
</style>