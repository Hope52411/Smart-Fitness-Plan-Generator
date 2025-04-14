<template>
    <div class="page-container">
      <router-view />
      <!-- Home Page -->
      <div class="muscle-map-container">
        <svg class="svg-front" viewBox="-100 0 1000 1250" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet">
          <path
            d="..."
            class='body-part' fill="#fdd" stroke="#000" stroke-width="1" @click="selectPart('front-forearm')">
          </path>
          
        </svg>
        <svg class="svg-back" viewBox="-150 0 1000 1250" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet">
  
        </svg>
      </div>
      <p v-if="selected" class="result">
        👉 你选择了：<strong>{{ selected }}</strong>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MuscleMap',
    data() {
      return {
        selectedPart: null
      };
    }
  };
  </script>
  
  
  <style>
  .svg-front,
  .svg-back {
    width: 50%;
    height: auto;
    max-height: 700px;
    display: block;
  }
  
  .result {
    margin-top: 10px;
    font-size: 16px;
  }
  
  svg path {
    cursor: pointer;
    transition: transform 2s;
  }
  
  .body-part:hover {
    fill: #ff0000;
    cursor: pointer;
  }
  
  .muscle-map-container {
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 1100px;
    height: 700px;
    margin: 40px auto 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  
  .svg-wrapper {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  </style>
  