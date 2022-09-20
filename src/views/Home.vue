<template>
  <div class="text-center">
    <p><AcademicCapIcon class="h-6 w-6 mx-auto text-blue-500"/></p>
    <h1 class="text-3xl font-bold mb-4">
      Homepage
    </h1>
    <p>This data comes from the store.</p>
    <default-button v-if="!store.storage.active" :on-click="store.setLocalStorage">Activate LocalStorage</default-button>
    <default-button v-else :on-click="removeStorage">Remove LocalStorage</default-button>

    <div v-if="!store.storage.active" class="mt-5">
      <p>Counter: {{ store.counter }}</p>
      <default-button :on-click="store.increment">Increase</default-button>
      <div class="mt-2">
        <span tabindex="0" class="underline underline-offset-4 hover:no-underline font-medium cursor-pointer" @click="storeReset" @keydown.enter="storeReset">Reset</span>
      </div>
    </div>

    <div v-else class="mt-5">
      <p>Saved Counter: {{ store.storage.counter }}</p>
      <default-button :on-click="store.incrementStorage">Increment</default-button>
    </div>
  </div>
</template>

<script setup>
// Import modules
import { useHead } from '@vueuse/head';
import { useDefaultStore } from '@/stores/default';
import DefaultButton from '@/components/DefaultButton.vue';
import { AcademicCapIcon } from '@heroicons/vue/24/outline'

// Use the store
const store = useDefaultStore();

function storeReset() {
  store.$reset();
}

function removeStorage() {
  localStorage.clear();
  store.storage.active = false;
}

// Add Meta's to the app
useHead({
  title: 'Vue Vite Startup Project - by Nomad Ventures',
  meta: [
    { name: 'description', content: 'Meta Description' },
    { property: 'og:title', content: 'Vue Vite Startup Project - by Nomad Ventures'},
    { property: 'og:site_name', content: 'Vue Vite Startup'},
    { property: 'og:description', content: 'go description'},
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.nomadventrs.com'},
    { property: 'og:image', content: 'url to img' },
    { property: 'twitter:card', content: 'card type' },
    { property: 'twitter:title', content: 'Vue Vite Startup Project - by Nomad Ventures' },
    { property: 'twitter:url', content: 'URL of page' },
    { property: 'twitter:description', content: 'Brief description in less than 200 characters' },
    { property: 'twitter:image', content: 'URL of unique image, recommended minimum dimensions of 440×220 pixels' }
  ]
});
</script>

<style lang="scss" scoped>
.small {
  font-size: 10px;
}
</style>