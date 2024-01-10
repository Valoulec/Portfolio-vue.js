<template>
  <div class>
    <div class="image"><img src="img/erreur.svg" class="imga" alt=""></div>
    <div class="mes">
        <div class="oups">OUPS !!!</div>
        <div class="message">il y a rien à voir ici!</div>
    </div>
    <a href="index.html" class="but"><button class="button">revenir a la pages d'accueil</button></a>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mina&display=swap');

.body{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#291F43; ;
    flex-direction: column;
    font-family: "mina";
}
.image{
    display: flex;
    justify-content: center;
    align-items: center;
}
.imga{
    padding-top: 50px;
width: 30%;
height: 30%;
}
.mes{
display: flex;
flex-direction: row; 
padding-top: 50px;
}
.oups{
    font-size: 70px;
    color: #0BD8B6 ;
    
}
.message{
font-size: 50px;
color: #0BD8B6 ;
padding-top: 50px;
padding-left: 10px;
}
.but{
    padding-top: 50px;
}
.button{
    border-radius: 15px;
    background: linear-gradient(200deg,#0BD8B6, #BAA7FF);
    color: #291F43;
    font-size: 30px;
}
</style>