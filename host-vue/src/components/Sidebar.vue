<template>
  <!-- logo -->
  <div
    class="w-full py-4 flex items-center px-8 text-slate-100 space-x-3 border-b border-slate-300/10"
  >
    <div class="size-8 bg-slate-500 rounded-full"></div>
    <span>LOGO</span>
  </div>
  <!-- menus -->
  <div
    class="flex flex-col text-slate-100 text-sm divide-y divide-slate-300/10"
  >
    <RouterLink class="px-8 py-4" to="/">Dashboard</RouterLink>
    <RouterLink class="px-8 py-4" to="/remote-vue">Vue App</RouterLink>
    <RouterLink class="px-8 py-4" to="/remote-react">React App</RouterLink>
  </div>
</template>
