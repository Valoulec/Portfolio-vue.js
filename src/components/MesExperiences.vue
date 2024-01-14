<template>
    <div class="experience">
           <h2 class="title-exp" id="[Expérience](index.html)">Expérience</h2>
           <div class="mesexperience">
             <div class="border">
               <h3 class="soustitle">front-end</h3>
               <div class="exp">
                 <div class="front-end">
                   <img src="../img/icons8-html5.svg" class="img-lang" alt="HTML15" />
                 </div>
                 <div class="front-end">
                   <img src="../img/icons8-css3.svg" class="img-lang" alt="CSS3" />
                 </div>
                 <div class="front-end">
                   <img src="../img/icons8-javascript.svg" class="img-lang" alt="JavaScript"/>
                 </div>
               </div>
             </div>
             <div class="border">
               <h3 class="soustitle">back-end</h3>
               <div class="exp">
               <div class="back-end">
                 <img src="../img/icons8-nœud-js.svg" class="img-lang" alt="Node.js" />
               </div>
              <div class="back-end">
               <img src="../img/icons8-vue-js.svg" class="img-lang" alt="Vue.js" />
              </div>
             </div>
             </div>
             <div class="">
               <h3 class="soustitle">design</h3>
               <div class="design">
                 <img src="../img/icons8-figma.svg" class="img-lang" alt="Figma" />
               </div>
             </div>
             <div class="">
               <h3 class="soustitle">Autre</h3>
               <div class="autre">
                 <img src="../img/icons8-github-144.png" class="img-lang" alt="GitHub" />
               </div>
             </div>
           </div>
         </div>
   </template>
   
   <script>
   export default {
   
   }
   </script>
   
   <style lang="scss">
   .experience{
   
     display: flex;
     flex-direction: column;
     justify-content: center;
     width: 100%;
     .title-exp{
     display: flex;
     justify-content: center;
     font-size: 25px;
     padding-bottom: 20px;
   }
   
   .mesexperience{
       width: 100%;
       display: flex;
       justify-content: space-around;
       padding-top: 50px;
       padding-bottom: 100px;
       
   }
   .exp{
       display: flex;
       justify-content: space-around;
       
   }
   .front-end{
       width: 100px;
       height: 100px;
       border-radius: 50%;
   
       text-align: center;
       display: flex;
       align-items: center; 
       justify-content: center;
       margin: 5px;
   }
   .back-end{
       width: 100px;
       height: 100px;
   
       text-align: center;
       display: flex;
       align-items: center; 
       justify-content: center;
       margin: 5px;
   }
   .img-lang:hover{
       width: 80px;
       height:80px;
   
   }
   .design{
       width: 100px;
       height: 100px;
       border-radius: 50%;
   
       text-align: center;
       display: flex;
       align-items: center; 
       justify-content: center;
       margin: 5px;
   }
   .autre{
       width: 100px;
       height: 100px;
       border-radius: 50%;
       text-align: center;
       display: flex;
       align-items: center; 
       justify-content: center;
       margin: 5px;
   }
   .img-lang{
       width: 60px;
       height: 60px;
   }
   .soustitle{
     display: flex;
     justify-content: center;
   }
   }
   </style>