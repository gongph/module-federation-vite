<template>
  <div class="w-full h-full flex">
    <div class="h-screen bg-blue-950">
      <Sidebar />
    </div>
    <div class="flex-1 h-screen flex flex-col">
      <Header />
      <Main />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";
</script>
