<template>
  <h1>Host side app</h1>
  <remote-vue-app />
  <remote-react-component />
</template>

<script setup>
import { applyPureReactInVue } from "veaury";
import { defineAsyncComponent } from "vue";
import remoteReactHello from "remote-react/hello";
// remote vue project component
const remoteVueApp = defineAsyncComponent(() => import("remote-vue"));
// remote react project component
const remoteReactComponent = applyPureReactInVue(remoteReactHello);
</script>
