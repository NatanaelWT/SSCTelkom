<template>
  <navbar />
  <headers />
  <timeline />
  <kategoriLayanan />

  <!-- <akademik /> -->
  <!-- <puti /> -->
  <!-- <kemahasiswaan /> -->
  <!-- <logistik /> -->
  <!-- <keuangan /> -->
  <!-- <pusatBP /> -->
  <!-- <ftib /> -->
  <!-- <fteic /> -->

  <footers />
  <toTop />
</template>

<script setup>
import navbar from "./components/navbar.vue";
import headers from "./components/headers.vue";
import timeline from "./components/timeline.vue";
import kategoriLayanan from "./components/kategoriLayanan.vue";
import footers from "./components/footers.vue";
import toTop from "./components/toTop.vue";
import akademik from "./components/layanan/akademik.vue";
import puti from "./components/layanan/puti.vue";
import kemahasiswaan from "./components/layanan/kemahasiswaan.vue";
import logistik from "./components/layanan/logistik.vue";
import keuangan from "./components/layanan/keuangan.vue";
import pusatBP from "./components/layanan/pusatBP.vue";
import ftib from "./components/layanan/ftib.vue";
import fteic from "./components/layanan/fteic.vue";
</script>
