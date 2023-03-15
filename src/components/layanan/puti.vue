<template>
  <div class="container mx-auto">
    <div class="flex mt-10">
      <div class="bg-brand w-16 rounded-md h-5 my-auto"></div>
      <h3 class="ml-10 text-brand -mt-2 flex font-semibold text-3xl space-x-3">
        Layanan PuTi
      </h3>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-4 w-full mt-12 mb-16 space-x-4 max-md:space-x-0 max-md:space-y-4"
    >
      <div class="col-span-1">
        <ul class="border divide-y rounded-md cursor-pointer">
          <li
            id="manajemenAkun"
            v-on:click="manajemenAkun"
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand rounded-t-md bg-brand text-white"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Manajemen Akun
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="aksesInternet"
            v-on:click="aksesInternet"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Akses Internet
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="layananAplikasi"
            v-on:click="layananAplikasi"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Layanan Aplikasi
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="layananHosting"
            v-on:click="layananHosting"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Layanan Hosting
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="pengembanganAplikasi"
            v-on:click="pengembanganAplikasi"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Pengembangan Aplikasi
          </li>
        </ul>
      </div>

      <div class="border ml-auto divide-y rounded-lg md:col-span-3 h-fit">
        <div class="h-9">
          <h1 class="mt-2.5 ml-2.5 font-semibold" id="judul2">
            Manajemen Akun (iGracias, eLearning, WiFi)
          </h1>
        </div>
        <div class="pb-4">
          <img
            id="gambar2"
            class="mx-auto"
            src="/img/manajemen-akun.png"
            alt=""
            width="30%"
          />
          <h1
            class="text-[#465b52] font-semibold text-sm ml-2.5"
            id="deskripsi2"
          >
            Layanan untuk permintaan akun Email, iGracias, e-Learning, WiFi,
            Office365 untuk menunjang keberlangsungan kegiatan akademik.
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="flex mt-10">
      <div class="bg-brand w-16 rounded-md h-5 my-auto"></div>
      <h3 class="ml-10 text-brand -mt-2 flex font-semibold text-3xl space-x-3">
        Informasi PuTi
      </h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-4 mb-16">
      <div class="">
        <p>
          Merupakan unit yang bertugas mengelola administrasi puti yang mencakup
          kegiatan layanan administrasi puti, pusat bahasa, dan perpustakaan.
          Informasi lengkap mengenai Unit PuTi, silakan kunjungi:
        </p>
        <a href="#" class="flex hover:text-brand mt-4">
          <svg viewBox="0 0 448 512" class="w-4 mr-3">
            <path
              fill="#AA0000"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
          puti.ittelkomsby
        </a>
        <a href="#" class="flex hover:text-brand mt-4"
          ><svg viewBox="0 0 512 512" class="w-4 mr-3">
            <path
              fill="#AA0000"
              d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"
            ></path>
          </svg>
          https://puti.ittelkom-sby.ac.id
        </a>
      </div>

      <div class="text-center">
        <img src="img/device-puti.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "puti",
  methods: {
    clear() {
      document.getElementById("manajemenAkun").classList.remove("bg-brand");
      document.getElementById("manajemenAkun").classList.remove("text-white");
      document.getElementById("aksesInternet").classList.remove("bg-brand");
      document.getElementById("aksesInternet").classList.remove("text-white");
      document.getElementById("layananAplikasi").classList.remove("bg-brand");
      document.getElementById("layananAplikasi").classList.remove("text-white");
      document.getElementById("layananHosting").classList.remove("bg-brand");
      document.getElementById("layananHosting").classList.remove("text-white");
      document
        .getElementById("pengembanganAplikasi")
        .classList.remove("bg-brand");
      document
        .getElementById("pengembanganAplikasi")
        .classList.remove("text-white");
    },
    text(judul2, deskripsi2) {
      document.getElementById("judul2").innerText = judul2;
      document.getElementById("deskripsi2").innerText = deskripsi2;
    },
    manajemenAkun() {
      this.clear();
      document.getElementById("manajemenAkun").className += " bg-brand";
      document.getElementById("manajemenAkun").className += " text-white";
      document.getElementById("gambar2").src = "/img/manajemen-akun.png";
      this.text(this.judul2manajemenAkun, this.deskripsi2manajemenAkun);
    },
    aksesInternet() {
      this.clear();
      document.getElementById("aksesInternet").className += " bg-brand";
      document.getElementById("aksesInternet").className += " text-white";
      document.getElementById("gambar2").src = "/img/internet.png";
      this.text(this.judul2aksesInternet, this.deskripsi2aksesInternet);
    },
    layananAplikasi() {
      this.clear();
      document.getElementById("layananAplikasi").className += " bg-brand";
      document.getElementById("layananAplikasi").className += " text-white";
      document.getElementById("gambar2").src = "/img/layanan-aplikasi.png";
      this.text(this.judul2layananAplikasi, this.deskripsi2layananAplikasi);
    },
    layananHosting() {
      this.clear();
      document.getElementById("layananHosting").className += " bg-brand";
      document.getElementById("layananHosting").className += " text-white";
      document.getElementById("gambar2").src = "/img/layanan-hosting.png";
      this.text(this.judul2layananHosting, this.deskripsi2layananHosting);
    },
    pengembanganAplikasi() {
      this.clear();
      document.getElementById("pengembanganAplikasi").className += " bg-brand";
      document.getElementById("pengembanganAplikasi").className +=
        " text-white";
      document.getElementById("gambar2").src = "/img/pengembangan-app.png";
      this.text(
        this.judul2pengembanganAplikasi,
        this.deskripsi2pengembanganAplikasi
      );
    },
  },
  data() {
    return {
      judul2manajemenAkun: "Manajemen Akun (iGracias, eLearning, WiFi)",
      deskripsi2manajemenAkun:
        "Layanan untuk permintaan akun Email, iGracias, e-Learning, WiFi, Office365 untuk menunjang keberlangsungan kegiatan akademik.",
      judul2aksesInternet: "Akses Internet",
      deskripsi2aksesInternet:
        "Layanan untuk pengaduan mengenai akses internet yang putus nyambung (Blind Spot) dan login wifi undefined, serta peminjaman Orbit atau kebutuhan internet untuk event",
      judul2layananAplikasi: "Layanan aplikasi",
      deskripsi2layananAplikasi:
        "Layanan untuk mengatasi aplikasi (iGracias, Elearning dsb) yang terkena masalah seperti bug dan error yang berdampak terhadap keberlangsungan kegiatan akademik.",
      judul2layananHosting: "Layanan Hosting",
      deskripsi2layananHosting:
        "Layanan untuk memenuhi permintaan domain dan VPS untuk keperluan hosting aplikasi atau website.",
      judul2pengembanganAplikasi: "Pengembangan aplikasi",
      deskripsi2pengembanganAplikasi:
        "Layanan pembuatan solusi sistem informasi untuk memenuhi kebutuhan proses bisnis.",
    };
  },
};
</script>
