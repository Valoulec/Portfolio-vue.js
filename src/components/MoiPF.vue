<template>
    <div>
        <div class="divtitle">
          <h1 class="title">Développeur web <br /> et web mobile </h1>
        </div>
        <div class="propos-social" id="[apropos-social](index.html)">
          <div class="apropos">
            <div class="">
              <h2 class="title-propos" id="A propos">A Propos</h2>
              <article class="texte">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                velit quasi est fugiat? Distinctio enim voluptates qui nam ullam
                veniam? Soluta aliquam rem quam! Iste, repellendus fuga?
                Repudiandae, eaque unde! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Autem quod corrupti facere quo tempore nihil
                officia perspiciatis totam, voluptatibus quam, eius porro ducimus
                non dolorem et tenetur eum sequi earum! Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Id blanditiis soluta assumenda
                ullam magnam, maxime distinctio odio cumque dignissimos, dolorum
                rerum unde voluptates! Accusantium tempora enim praesentium ipsam
                obcaecati dolore.
              </article>
            </div>
          </div>
          <div class="social">
            <div class="">
              <h2 class="title-social" id="social">Social</h2>
              <div class="logo-sociaux">
                <div class="logo-espace">
                  <a href="https://github.com/Valoulec" class="" target="_blank"><img src="../img/icons8-github-144.png" class="sociaux"/></a>
                </div>
                <div class="logo-espace">
                  <a href="https://www.linkedin.com/in/valentin-leclerc-87b67b1b5/" target="_blank" class=""><img src="../img/icons8-logo-linkedin-144.png" class="sociaux" alt=""/></a>
                </div>
                <div class="logo-espace">
                  <a href="https://discord.com/channels/@me" class="" target="_blank"><img src="../img/icons8-nouveau-logo-discord-144.png" class="sociaux" alt=""/></a>
                </div>
              </div>
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
  .divtitle{
    position: relative;
      width: 100%;
      height: 150px;
      .title{
    position: absolute;
      display: flex;
      justify-content: left;
      text-align: left;
      font-size: 50px;
      margin-top: 150px;
      padding-left: 150px;
      animation: textColor 7s ease infinite;
      
      }
  @keyframes textColor {
    0% { transform: scale(1);; color: #BAA7FF;}
    50% { transform:  scale(1.5);; color: #0BD8B6;}
    100% { transform:  scale(1);; color: #BAA7FF; }
  
  }
  }
  .propos-social{
      width: 100%;
      display: flex;
      flex-direction: row; 
      padding-top: 200px;
      padding-bottom: 100px;
      margin-top: 100px;
    .apropos{
      width: 70%;
      padding: 30px;
      background-color: #33255B;
      border-radius: 15px;
      margin-left: 50px;
      .title-propos{
      font-size:25px;
      padding-bottom: 20px;
      margin-top: 0;
      }
    .texte{
      font-family: "Anek+Odia";
      color: white;
      font-size: 15px;
      }
      }
    .social{
      width: 30%;
      .sociaux{
      width: 40px ;
      height: 40px;
      padding: 10px;
      }
      .sociaux:hover{
        background: linear-gradient(200deg,#0BD8B6, #BAA7FF);
        border-radius: 15px;
      }
      .logo-espace{
        margin-left: 20px;
        margin-right: 20px;
      }
      .title-social{
        text-align: center;
        font-size: 25px;
      }
      .soustitle{
        font-size: 25px;
        text-align: center;
      }
      .logo-sociaux{
        display: flex;
        justify-content: center
      }
    }
  }
  </style>