<template>
  <button class="bg-blue-600 font-medium text-white rounded-full px-4 py-2 mt-2 hover:bg-black hover:text-white" :class="styling" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    styling: String,
    onClick: {
      type: Function,
      default: () => {
        console.log('You have not added any function');
      }
    },
  }
};
</script>