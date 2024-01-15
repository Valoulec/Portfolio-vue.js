<template>
    <div class="image-container" :style="{backgroundImage: 'url(' + currentImage + ')'}"></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: ['../img/', 'image2.jpg', 'image3.jpg'],
        currentIndex: 0
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex];
      }
    },
    mounted() {
      setInterval(this.scrollImages, 3000);
    },
    methods: {
      scrollImages() {
        this.currentIndex++;
        if (this.currentIndex >= this.images.length) {
          this.currentIndex = 0;
        }
      }
    }
  };
  </script>
  
  <style>
  .image-container {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
  }
  </style>