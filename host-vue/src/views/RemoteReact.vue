<template>
  <div class="remote-react-app-container">
    <remote-react-app />
  </div>
</template>

<script setup>
import { applyPureReactInVue } from "veaury";
import remoteReact from "remote-react";
const remoteReactApp = applyPureReactInVue(remoteReact);
</script>
