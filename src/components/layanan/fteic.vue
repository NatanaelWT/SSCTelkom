<template>
  <div class="container mx-auto">
    <div class="flex mt-10">
      <div class="bg-brand w-16 rounded-md h-5 my-auto"></div>
      <h3 class="ml-10 text-brand -mt-2 flex font-semibold text-3xl space-x-3">
        Layanan FTEIC
      </h3>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-4 w-full mt-12 mb-16 space-x-4 max-md:space-x-0 max-md:space-y-4"
    >
      <div class="col-span-1">
        <ul class="border divide-y rounded-md cursor-pointer">
          <li
            id="suratKeteranganAktif2"
            v-on:click="suratKeteranganAktif2"
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
            Surat Keterangan Aktif Mahasiswa di Fakultas
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="suratPengantarKampus2"
            v-on:click="suratPengantarKampus2"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Surat Pengantar dari Kampus untuk Tugas MK dan TA
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="suratDispensasi2"
            v-on:click="suratDispensasi2"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Surat Dispensasi
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="suratRekomendasi2"
            v-on:click="suratRekomendasi2"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Surat Rekomendasi
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="suratPeminjaman2"
            v-on:click="suratPeminjaman2"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Surat Peminjaman Lab dan Perlengkapannya
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand text-sm"
            id="residensi2"
            v-on:click="residensi2"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Residensi TA (menginap di kampus)
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="proposalDana2"
            v-on:click="proposalDana2"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Proposal Dana Kegiatan
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="legalisir2"
            v-on:click="legalisir2"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Legalisir KHS & Transkrip
          </li>
        </ul>
      </div>

      <div class="border ml-auto divide-y rounded-lg md:col-span-3 h-fit">
        <div class="h-9">
          <h1 class="mt-2.5 ml-2.5 font-semibold" id="judul7">
            Surat Keterangan Aktif Mahasiswa di Fakultas
          </h1>
        </div>
        <div class="pb-4">
          <img
            id="gambar7"
            class="mx-auto"
            src="/img/Permintaan_Bukti.png"
            alt=""
            width="30%"
          />
          <h1
            class="text-[#465b52] font-semibold text-sm ml-2.5"
            id="deskripsi7"
          >
            Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa
            sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti
            perkuliahan di semester tertentu
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="flex mt-10">
      <div class="bg-brand w-16 rounded-md h-5 my-auto"></div>
      <h3 class="ml-10 text-brand -mt-2 flex font-semibold text-3xl space-x-3">
        Informasi FTEIC
      </h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-4 mb-16">
      <div class="">
        <p>
          Merupakan unit yang bertugas mengelola administrasi fteic yang
          mencakup kegiatan layanan administrasi fteic, pusat bahasa, dan
          perpustakaan. Informasi lengkap mengenai Unit FTEIC, silakan kunjungi:
        </p>
        <a href="#" class="flex hover:text-brand mt-4">
          <svg viewBox="0 0 448 512" class="w-4 mr-3">
            <path
              fill="#AA0000"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
          fteic.ittelkomsby
        </a>
        <a href="#" class="flex hover:text-brand mt-4"
          ><svg viewBox="0 0 512 512" class="w-4 mr-3">
            <path
              fill="#AA0000"
              d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"
            ></path>
          </svg>
          https://fteic.ittelkom-sby.ac.id
        </a>
      </div>

      <div class="text-center">
        <img src="img/device-fteic.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fteic",
  methods: {
    clear() {
      document
        .getElementById("suratKeteranganAktif2")
        .classList.remove("bg-brand");
      document
        .getElementById("suratKeteranganAktif2")
        .classList.remove("text-white");
      document
        .getElementById("suratPengantarKampus2")
        .classList.remove("bg-brand");
      document
        .getElementById("suratPengantarKampus2")
        .classList.remove("text-white");
      document.getElementById("suratDispensasi2").classList.remove("bg-brand");
      document
        .getElementById("suratDispensasi2")
        .classList.remove("text-white");
      document.getElementById("suratRekomendasi2").classList.remove("bg-brand");
      document
        .getElementById("suratRekomendasi2")
        .classList.remove("text-white");
      document.getElementById("suratPeminjaman2").classList.remove("bg-brand");
      document
        .getElementById("suratPeminjaman2")
        .classList.remove("text-white");
      document.getElementById("residensi2").classList.remove("bg-brand");
      document.getElementById("residensi2").classList.remove("text-white");
      document.getElementById("proposalDana2").classList.remove("bg-brand");
      document.getElementById("proposalDana2").classList.remove("text-white");
      document.getElementById("legalisir2").classList.remove("bg-brand");
      document.getElementById("legalisir2").classList.remove("text-white");
    },
    text(judul7, deskripsi7) {
      document.getElementById("judul7").innerText = judul7;
      document.getElementById("deskripsi7").innerText = deskripsi7;
    },
    suratKeteranganAktif2() {
      this.clear();
      document.getElementById("suratKeteranganAktif2").className += " bg-brand";
      document.getElementById("suratKeteranganAktif2").className +=
        " text-white";
      document.getElementById("gambar7").src = "/img/Permintaan_Bukti.png";
      this.text(
        this.judul7suratKeteranganAktif2,
        this.deskripsi7suratKeteranganAktif2
      );
    },
    suratPengantarKampus2() {
      this.clear();
      document.getElementById("suratPengantarKampus2").className += " bg-brand";
      document.getElementById("suratPengantarKampus2").className +=
        " text-white";
      document.getElementById("gambar7").src = "/img/Permintaan_Bukti.png";
      this.text(
        this.judul7suratPengantarKampus2,
        this.deskripsi7suratPengantarKampus2
      );
    },
    suratDispensasi2() {
      this.clear();
      document.getElementById("suratDispensasi2").className += " bg-brand";
      document.getElementById("suratDispensasi2").className += " text-white";
      document.getElementById("gambar7").src = "/img/Permintaan_Bukti.png";
      this.text(this.judul7suratDispensasi2, this.deskripsi7suratDispensasi2);
    },
    suratRekomendasi2() {
      this.clear();
      document.getElementById("suratRekomendasi2").className += " bg-brand";
      document.getElementById("suratRekomendasi2").className += " text-white";
      document.getElementById("gambar7").src = "/img/Permintaan_Bukti.png";
      this.text(this.judul7suratRekomendasi2, this.deskripsi7suratRekomendasi2);
    },
    suratPeminjaman2() {
      this.clear();
      document.getElementById("suratPeminjaman2").className += " bg-brand";
      document.getElementById("suratPeminjaman2").className += " text-white";
      document.getElementById("gambar7").src = "/img/Permintaan_Bukti.png";
      this.text(this.judul7suratPeminjaman2, this.deskripsi7suratPeminjaman2);
    },
    residensi2() {
      this.clear();
      document.getElementById("residensi2").className += " bg-brand";
      document.getElementById("residensi2").className += " text-white";
      document.getElementById("gambar7").src = "/img/Permintaan_Bukti.png";
      this.text(this.judul7residensi2, this.deskripsi7residensi2);
    },
    proposalDana2() {
      this.clear();
      document.getElementById("proposalDana2").className += " bg-brand";
      document.getElementById("proposalDana2").className += " text-white";
      document.getElementById("gambar7").src =
        "/img/Proposal_Dana_Kegiatan.png";
      this.text(this.judul7proposalDana2, this.deskripsi7proposalDana2);
    },
    legalisir2() {
      this.clear();
      document.getElementById("legalisir2").className += " bg-brand";
      document.getElementById("legalisir2").className += " text-white";
      document.getElementById("gambar7").src = "/img/Legalisir_KHS.png";
      this.text(this.judul7legalisir2, this.deskripsi7legalisir2);
    },
  },
  data() {
    return {
      judul7suratKeteranganAktif2:
        "Surat Keterangan Aktif Mahasiswa di Fakultas",
      deskripsi7suratKeteranganAktif2:
        "Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu",
      judul7suratPengantarKampus2:
        "Surat Pengantar dari Kampus untuk Tugas MK dan TA",
      deskripsi7suratPengantarKampus2:
        "Surat pengantar yang dikeluarkan untuk Tugas Mata Kuliah dan Tugas Akhir untuk observasi ke suatu Instansi/perusahaan",
      judul7suratDispensasi2: "Surat Dispensasi",
      deskripsi7suratDispensasi2:
        "Surat resmi untuk keperluan meminta keringanan atau pemakluman dari suatu hal",
      judul7suratRekomendasi2: "Surat Rekomendasi",
      deskripsi7suratRekomendasi2:
        "Surat yang merekomendasikan mahasiswa atau disebut juga sebagai surat referensi yang membantu pihak ketiga mengetahui dan memahami lebih lanjut tentang mahasiswa tersebut",
      judul7suratPeminjaman2: "Surat Peminjaman Lab dan Perlengkapannya",
      deskripsi7suratPeminjaman2:
        "Surat peminjaman ruangan atau inventaris laboratorium",
      judul7residensi2: "Residensi TA (menginap di kampus)",
      deskripsi7residensi2:
        "Surat keterangan dengan kepentingan menginap di kampus untuk keperluan Tugas Akhir",
      judul7proposalDana2: "Proposal Dana Kegiatan",
      deskripsi7proposalDana2:
        "Sebuah dokumen rencana acara yang ditulis dengan tujuan permohonan izin dan dukungan berupa dana atau sponsor",
      judul7legalisir2: "Legalisir KHS & Transkrip",
      deskripsi7legalisir2:
        "Pembubuhan cap stempel dan tanda tangan asli oleh pihak yang berwenang pada lembar fotokopi Kartu Hasil Studi & Transkrip",
    };
  },
};
</script>
