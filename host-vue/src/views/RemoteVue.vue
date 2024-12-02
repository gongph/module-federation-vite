<template>
  <div class="remote-vue-app-container">
    <remote-vue-app></remote-vue-app>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const remoteVueApp = defineAsyncComponent(() => import("remote-vue"));
</script>
