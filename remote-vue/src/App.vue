<template>
  <div class="remote-vue-app">
    <h2>Remote side vue app</h2>

    <div class="grid">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>

    <h2>Counter</h2>
    <button class="primary" @click="counter++">{{ counter }}</button>
    <button @click="counter = 0">Reset counter</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>

<style lang="less" scoped>
.remote-vue-app {
  h2 {
    margin-bottom: 16px;
    font-size: 16px;
    color: #1a1a1a;
  }
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #dedbdb;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button + button {
    margin-left: 16px;
  }
  button.primary {
    background-color: #646cff;
    color: #fff;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    .item {
      height: 150px;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 9px;
    }
  }
}
</style>
