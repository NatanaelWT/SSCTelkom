<template>
  <div
    id="toTop"
    v-on:click="toTop"
    class="hidden fixed right-6 bottom-6 hover:bottom-7 group z-50"
  >
    <button
      class="flex items-center justify-center text-white bg-brand rounded-lg w-10 h-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
      <span class="sr-only">Open actions menu</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "toTop",
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
