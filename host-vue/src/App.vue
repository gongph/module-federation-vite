<template>
  <h1>Host side app</h1>
  <remote-app />
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const remoteApp = defineAsyncComponent(() => import("remote"));
</script>
