<template>
  <div
    class="bg-white w-full h-12 shadow-sm flex justify-between items-center px-4 z-10"
  >
    <!-- Toggle menu -->
    <div class="toggle-expand flex flex-col space-y-1 hover:cursor-pointer">
      <div class="line w-6 h-0.5 bg-slate-500 rounded-lg"></div>
      <div class="line w-6 h-0.5 bg-slate-500 rounded-lg"></div>
      <div class="line w-6 h-0.5 bg-slate-500 rounded-lg"></div>
    </div>
    <nav class="flex items-center space-x-2 text-xs text-slate-500">
      <div class="size-6 bg-slate-200 rounded-full"></div>
      <a href="#">Sign out</a>
    </nav>
  </div>
</template>
