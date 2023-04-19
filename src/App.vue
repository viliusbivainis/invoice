<template>
  <header>
    <div class="container mx-auto">
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-2">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <h2 class="text-xl font-bold">
            Logo
          </h2>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

            <RouterLink class="flex align-items-center mx-2 px-2" :to="{ name: 'home' }">
              Home
            </RouterLink>
          
            <RouterLink :to="{ name: 'register' }" class="flex align-items-center ml-auto mx-2 px-2">Register</RouterLink>

        </div>
      </nav>
    </div>
  </header>
 
  <div class="container md:px-2 px-4 pt-8 md:pt-16 mx-auto">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
 
<style>
.header{
  width:100%;
  
}
</style>