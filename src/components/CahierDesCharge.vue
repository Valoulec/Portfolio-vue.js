<template>
    <div class=" block-modal" v-if="ouvrircdc">
    
        <div class="overlay" v-on:click="fermercdc"></div>
    
        <div class="modal">
            <button class="btn-modal-fermer" v-on:click="fermercdc"><img src="../img/icons8-multiplier-52.png" class="img" alt="fermer"></button>
            <div>
                <div class="title-modal">
                    <h2 class="titre-modal">Cahier des charges</h2>
                    <p class="date">23-11-2023</p>
                </div>
                <div>
                    <p class="text-modal">Pour répondre au besoin du client je devais créer un cahier des charges pour faire un site internet selon l’image de son entreprise. </p>
                </div>
                <div>
                 <a href="/src/cahier-des-charges-site-e-commerce.pdf" class="lien-modal" target="_blank"> Ouvrir le PDF</a>
                </div>
            </div>
        </div>
    </div>
    
    </template>
    
    <script>
    
    export default {
        props:['ouvrircdc', 'fermercdc'],

}
    
    // Maintenant que le PDF est chargé, vous pouvez afficher le contenu dans votre application
    // Par exemple, vous pourriez utiliser une bibliothèque d'affichage de PDF comme vue-pdf ou pdfvuer pour afficher le PDF dans votre application.
  
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
        background-color: #33255B;;
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
        .lien-modal{
            color: #0BD8B6;
          }
          .lien-modal:hover{
            color: #BAA7FF;
          }
    }
}
    
    </style>