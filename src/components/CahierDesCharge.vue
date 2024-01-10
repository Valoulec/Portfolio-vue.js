<template>
    <div class=" block-modal" v-if="ouvrircv">
    
        <div class="overlay" v-on:click="fermercv"></div>
    
        <div class="modal">
            <button class="btn-modal-fermer" v-on:click="fermercv"></button>
            <div>
                <div class="title-modal">
                    <h2 class="titre-modal">CV</h2>
                    <p class="date">07-11-2023</p>
                </div>
                <div>
                    <p class="text-modal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, culpa, eligendi cupiditate itaque sequi unde distinctio, repellendus ab qui molestiae animi? Corporis aliquid consectetur provident laudantium nostrum earum quasi. Inventore!</p>
                </div>
                <div>
                    <a href="../projet/cahier-des-charges-site-e-commerce.pdf" class="lien-modal">PDF du projet</a>
                </div>
                <div>
                   <img src="../img/icons8-html5.svg" class="img-modal" alt="">
                   <img src="../img/icons8-css3.svg" class="img-modal" alt="">
                </div>
            </div>
        </div>
    </div>
    
    </template>
    
    <script>
    export default {
        props:['ouvrircv', 'fermercv'],
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
        background-color: #33255B;;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 10px;
        z-index: 500;
        }
    }
    
    </style>