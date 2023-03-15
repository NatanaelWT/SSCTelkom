<template>
  <div id="indicators-carousel" class="w-full" data-carousel="static">
    <div class="mt-10 container mx-auto">
      <h3 class="flex font-semibold text-2xl space-x-3">
        <svg class="text-brand w-6" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M432 64H208C199.2 64 192 71.16 192 80V96H128V80C128 35.82 163.8 0 208 0H432C476.2 0 512 35.82 512 80V304C512 348.2 476.2 384 432 384H416V320H432C440.8 320 448 312.8 448 304V80C448 71.16 440.8 64 432 64zM0 192C0 156.7 28.65 128 64 128H320C355.3 128 384 156.7 384 192V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V192zM96 256H288C305.7 256 320 241.7 320 224C320 206.3 305.7 192 288 192H96C78.33 192 64 206.3 64 224C64 241.7 78.33 256 96 256z"
          ></path>
        </svg>
        <span class="text-brand">Kategori&nbsp</span> Layanan
      </h3>

      <div
        id="kategori"
        class="flex max-md:overflow-x-auto md:grid md:grid-cols-4"
      >
        <div
          data-carousel-slide-to="0"
          v-on:click="akademik"
          class="box-border p-5"
        >
          <div
            id="akademik"
            class="h-full text-center border rounded-lg cursor-pointer font-bold bg-brand text-white"
          >
            <lord-icon
              id="akademikIcon"
              src="https://cdn.lordicon.com/wxnxiano.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              style="width: 100px; height: 100px"
            >
            </lord-icon>
            <h1 class="pb-5">Akademik</h1>
          </div>
        </div>
        <div
          data-carousel-slide-to="1"
          v-on:click="puti"
          class="box-border p-5"
        >
          <div
            id="puti"
            class="h-full font-bold text-center cursor-pointer border rounded-lg"
          >
            <lord-icon
              id="putiIcon"
              src="https://cdn.lordicon.com/qhgmphtg.json"
              trigger="hover"
              colors="primary:#121331,secondary:#AA0000"
              style="width: 100px; height: 100px"
            >
            </lord-icon>
            <h1 class="pb-5">PuTi</h1>
          </div>
        </div>
        <div
          data-carousel-slide-to="2"
          v-on:click="kemahasiswaan"
          class="box-border p-5"
        >
          <div
            id="kemahasiswaan"
            class="h-full font-bold text-center cursor-pointer border rounded-lg"
          >
            <lord-icon
              id="kemahasiswaanIcon"
              src="https://cdn.lordicon.com/uukerzzv.json"
              trigger="hover"
              colors="primary:#121331,secondary:#AA0000"
              style="width: 100px; height: 100px"
            >
            </lord-icon>
            <h1 class="pb-5">Kemahasiswaan</h1>
          </div>
        </div>
        <div
          data-carousel-slide-to="1"
          v-on:click="logistik"
          class="box-border p-5"
        >
          <div
            id="logistik"
            class="h-full font-bold text-center cursor-pointer border rounded-lg"
          >
            <lord-icon
              id="logistikIcon"
              src="https://cdn.lordicon.com/sbiheqdr.json"
              trigger="hover"
              colors="primary:#121331,secondary:#AA0000"
              style="width: 100px; height: 100px"
            >
            </lord-icon>
            <h1 class="pb-5">Logistik</h1>
          </div>
        </div>
        <div
          data-carousel-slide-to="1"
          v-on:click="keuangan"
          class="box-border p-5"
        >
          <div
            id="keuangan"
            class="h-full font-bold text-center cursor-pointer border rounded-lg"
          >
            <lord-icon
              id="keuanganIcon"
              src="https://cdn.lordicon.com/vaeagfzc.json"
              trigger="hover"
              colors="primary:#121331,secondary:#AA0000"
              style="width: 100px; height: 100px"
            >
            </lord-icon>
            <h1 class="pb-5">Keuangan</h1>
          </div>
        </div>
        <div
          data-carousel-slide-to="1"
          v-on:click="pusatBP"
          class="box-border p-5"
        >
          <div
            id="pusatBP"
            class="h-full font-bold text-center cursor-pointer border rounded-lg"
          >
            <lord-icon
              id="pusatBPIcon"
              src="https://cdn.lordicon.com/gdjyhaga.json"
              trigger="hover"
              colors="primary:#121331,secondary:#AA0000"
              style="width: 100px; height: 100px"
            >
            </lord-icon>
            <h1 class="pb-5">Pusat Bahasa & Perpustakaan</h1>
          </div>
        </div>
        <div
          data-carousel-slide-to="1"
          v-on:click="ftib"
          class="box-border p-5"
        >
          <div
            id="ftib"
            class="h-full font-bold text-center cursor-pointer border rounded-lg"
          >
            <lord-icon
              id="ftibIcon"
              src="https://cdn.lordicon.com/nobciafz.json"
              trigger="hover"
              colors="primary:#121331,secondary:#AA0000"
              style="width: 100px; height: 100px"
            >
            </lord-icon>
            <h1 class="pb-5">FTIB</h1>
          </div>
        </div>
        <div
          data-carousel-slide-to="1"
          v-on:click="fteic"
          class="box-border p-5"
        >
          <div
            id="fteic"
            class="h-full font-bold text-center cursor-pointer border rounded-lg"
          >
            <lord-icon
              id="fteicIcon"
              src="https://cdn.lordicon.com/ckuogwdx.json"
              trigger="hover"
              colors="primary:#121331,secondary:#AA0000"
              style="width: 100px; height: 100px"
            >
            </lord-icon>
            <h1 class="pb-5">FTEIC</h1>
          </div>
        </div>
        <div class=""></div>
        <div class=""></div>
      </div>
    </div>

    <!-- Carousel wrapper -->
    <div
      id="tab"
      class="relative h-[1400px] md:h-[1100px] overflow-hidden rounded-lg"
    >
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
        <akademik />
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <puti />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <kemahasiswaan />
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <logistik />
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <keuangan />
      </div>
      <!-- Item 6 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <pusatBP />
      </div>
      <!-- Item 7 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <ftib />
      </div>
      <!-- Item 8 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <fteic />
      </div>
    </div>
  </div>

  <!-- ----------------------------------------------------------------------------------- -->
</template>
<script>
import akademik from "./layanan/akademik.vue";
import puti from "./layanan/puti.vue";
import kemahasiswaan from "./layanan/kemahasiswaan.vue";
import logistik from "./layanan/logistik.vue";
import keuangan from "./layanan/keuangan.vue";
import pusatBP from "./layanan/pusatBP.vue";
import ftib from "./layanan/ftib.vue";
import fteic from "./layanan/fteic.vue";
export default {
  name: "kategoriLayanan",
  methods: {
    clear() {
      document.getElementById("akademik").classList.remove("bg-brand");
      document.getElementById("akademik").classList.remove("text-white");

      document.getElementById("akademikIcon").colors =
        "primary:#AA0000,secondary:#121331";
      document.getElementById("puti").classList.remove("bg-brand");
      document.getElementById("puti").classList.remove("text-white");
      document.getElementById("putiIcon").colors =
        "primary:#121331,secondary:#AA0000";
      document.getElementById("kemahasiswaan").classList.remove("bg-brand");
      document.getElementById("kemahasiswaan").classList.remove("text-white");
      document.getElementById("kemahasiswaanIcon").colors =
        "primary:#121331,secondary:#AA0000";
      document.getElementById("logistik").classList.remove("bg-brand");
      document.getElementById("logistik").classList.remove("text-white");
      document.getElementById("logistikIcon").colors =
        "primary:#121331,secondary:#AA0000";
      document.getElementById("keuangan").classList.remove("bg-brand");
      document.getElementById("keuangan").classList.remove("text-white");
      document.getElementById("keuanganIcon").colors =
        "primary:#121331,secondary:#AA0000";
      document.getElementById("pusatBP").classList.remove("bg-brand");
      document.getElementById("pusatBP").classList.remove("text-white");
      document.getElementById("pusatBPIcon").colors =
        "primary:#121331,secondary:#AA0000";
      document.getElementById("ftib").classList.remove("bg-brand");
      document.getElementById("ftib").classList.remove("text-white");
      document.getElementById("ftibIcon").colors =
        "primary:#121331,secondary:#AA0000";
      document.getElementById("fteic").classList.remove("bg-brand");
      document.getElementById("fteic").classList.remove("text-white");
      document.getElementById("fteicIcon").colors =
        "primary:#121331,secondary:#AA0000";
      document.getElementById("tab").classList.remove("h-[1400px]");
      document.getElementById("tab").classList.remove("md:h-[1100px]");
      document.getElementById("tab").classList.remove("h-[1500px]");
      document.getElementById("tab").classList.remove("md:h-[1150px]");
      document.getElementById("tab").classList.remove("md:h-[850px]");
      document.getElementById("tab").classList.remove("lg:h-[1100px]");
      document.getElementById("tab").classList.remove("h-[1200px]");
      document.getElementById("tab").classList.remove("md:h-[500px]");
      document.getElementById("tab").classList.remove("h-[700px]");
    },
    akademik() {
      this.clear();
      document.getElementById("tab").className += " md:h-[1100px]";
      document.getElementById("tab").className += " h-[1400px]";
      document.getElementById("akademik").className += " bg-brand";
      document.getElementById("akademik").className += " text-white";
      document.getElementById("akademikIcon").colors =
        "primary:#ffffff,secondary:#ffffff";
    },
    puti() {
      this.clear();
      document.getElementById("tab").className += " md:h-[1100px]";
      document.getElementById("tab").className += " h-[1400px]";
      document.getElementById("puti").className += " bg-brand";
      document.getElementById("puti").className += " text-white";
      document.getElementById("putiIcon").colors =
        "primary:#ffffff,secondary:#ffffff";
    },
    kemahasiswaan() {
      this.clear();
      document.getElementById("tab").className += " md:h-[1150px]";
      document.getElementById("tab").className += " h-[1500px]";
      document.getElementById("kemahasiswaan").className += " bg-brand";
      document.getElementById("kemahasiswaan").className += " text-white";
      document.getElementById("kemahasiswaanIcon").colors =
        "primary:#ffffff,secondary:#ffffff";
    },
    logistik() {
      this.clear();
      document.getElementById("tab").className += " md:h-[850px]";
      document.getElementById("tab").className += " h-[1200px]";
      document.getElementById("tab").className += " lg:h-[1100px]";
      document.getElementById("logistik").className += " bg-brand";
      document.getElementById("logistik").className += " text-white";
      document.getElementById("logistikIcon").colors =
        "primary:#ffffff,secondary:#ffffff";
    },
    keuangan() {
      this.clear();
      document.getElementById("tab").className += " md:h-[1100px]";
      document.getElementById("tab").className += " h-[1400px]";
      document.getElementById("keuangan").className += " bg-brand";
      document.getElementById("keuangan").className += " text-white";
      document.getElementById("keuanganIcon").colors =
        "primary:#ffffff,secondary:#ffffff";
    },
    pusatBP() {
      this.clear();
      document.getElementById("tab").className += " md:h-[500px]";
      document.getElementById("tab").className += " h-[700px]";
      document.getElementById("pusatBP").className += " bg-brand";
      document.getElementById("pusatBP").className += " text-white";
      document.getElementById("pusatBPIcon").colors =
        "primary:#ffffff,secondary:#ffffff";
    },
    ftib() {
      this.clear();
      document.getElementById("tab").className += " md:h-[1150px]";
      document.getElementById("tab").className += " h-[1500px]";
      document.getElementById("ftib").className += " bg-brand";
      document.getElementById("ftib").className += " text-white";
      document.getElementById("ftibIcon").colors =
        "primary:#ffffff,secondary:#ffffff";
    },
    fteic() {
      this.clear();
      document.getElementById("tab").className += " md:h-[1150px]";
      document.getElementById("tab").className += " h-[1500px]";
      document.getElementById("fteic").className += " bg-brand";
      document.getElementById("fteic").className += " text-white";
      document.getElementById("fteicIcon").colors =
        "primary:#ffffff,secondary:#ffffff";
    },
  },
  components: {
    akademik,
    puti,
    kemahasiswaan,
    logistik,
    keuangan,
    pusatBP,
    ftib,
    fteic,
  },
};
</script>
