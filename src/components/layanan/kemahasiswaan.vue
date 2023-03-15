<template>
  <div class="container mx-auto">
    <div class="flex mt-10">
      <div class="bg-brand w-16 rounded-md h-5 my-auto"></div>
      <h3 class="ml-10 text-brand -mt-2 flex font-semibold text-3xl space-x-3">
        Layanan Kemahasiswaan
      </h3>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-4 w-full mt-12 mb-16 space-x-4 max-md:space-x-0 max-md:space-y-4"
    >
      <div class="col-span-1">
        <ul class="border divide-y rounded-md cursor-pointer">
          <li
            id="transkipAktivitas"
            v-on:click="transkipAktivitas"
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
            transkip Aktivitas Kemahasiswaan (TAK)
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="suratTugas"
            v-on:click="suratTugas"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Surat Tugas / Dispensasi
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="suratRekomendasi"
            v-on:click="suratRekomendasi"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Surat Rekomendasi / Delegasi Lomba
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="suratKeterangan"
            v-on:click="suratKeterangan"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Surat Keterangan Beasiswa
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="ktm"
            v-on:click="ktm"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            KTM, Jas Almamater dan Vest
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand text-sm"
            id="proposal"
            v-on:click="proposal"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Proposal Pengajuan Dana dan LPJ Kegiatan Ormawa dan UKM
          </li>
          <li
            class="min-h-12 py-3 pl-5 flex hover:text-white hover:bg-brand"
            id="asuransi"
            v-on:click="asuransi"
          >
            <div>
              <svg class="w-3 h-fit my-auto mt-1.5 mr-2" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                ></path>
              </svg>
            </div>
            Asuransi dan Layanan Kesehatan Telkomedika
          </li>
        </ul>
      </div>

      <div class="border ml-auto divide-y rounded-lg md:col-span-3 h-fit">
        <div class="h-9">
          <h1 class="mt-2.5 ml-2.5 font-semibold" id="judul3">
            Transkrip aktivitas kemahasiswaan (TAK)
          </h1>
        </div>
        <div class="pb-4">
          <img
            id="gambar3"
            class="mx-auto"
            src="/img/tak.png"
            alt=""
            width="30%"
          />
          <h1
            class="text-[#465b52] font-semibold text-sm ml-2.5"
            id="deskripsi3"
          >
            Layanan approval sertifikat TAK sebagai syarat untuk mengikuti
            sidang tugas akhir/skripsi/proyek akhir, mendapatkan beasiswa, dan
            mengikuti seleksi mahasiswa berprestasi.
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="flex mt-10">
      <div class="bg-brand w-16 rounded-md h-5 my-auto"></div>
      <h3 class="ml-10 text-brand -mt-2 flex font-semibold text-3xl space-x-3">
        Informasi Kemahasiswaan
      </h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-4 mb-16">
      <div class="">
        <p>
          Merupakan unit yang bertugas mengelola administrasi kemahasiswaan yang
          mencakup kegiatan layanan administrasi kemahasiswaan, pusat bahasa,
          dan perpustakaan. Informasi lengkap mengenai Unit Kemahasiswaan,
          silakan kunjungi:
        </p>
        <a href="#" class="flex hover:text-brand mt-4">
          <svg viewBox="0 0 448 512" class="w-4 mr-3">
            <path
              fill="#AA0000"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
          kemahasiswaanitts
        </a>
        <a href="#" class="flex hover:text-brand mt-4"
          ><svg viewBox="0 0 512 512" class="w-4 mr-3">
            <path
              fill="#AA0000"
              d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"
            ></path>
          </svg>
          https://kemahasiswaan.ittelkom-sby.ac.id
        </a>
      </div>

      <div class="text-center">
        <img src="img/device-kemahasiswaan.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "kemahasiswaan",
  methods: {
    clear() {
      document.getElementById("transkipAktivitas").classList.remove("bg-brand");
      document
        .getElementById("transkipAktivitas")
        .classList.remove("text-white");
      document.getElementById("suratTugas").classList.remove("bg-brand");
      document.getElementById("suratTugas").classList.remove("text-white");
      document.getElementById("suratRekomendasi").classList.remove("bg-brand");
      document
        .getElementById("suratRekomendasi")
        .classList.remove("text-white");
      document.getElementById("suratKeterangan").classList.remove("bg-brand");
      document.getElementById("suratKeterangan").classList.remove("text-white");
      document.getElementById("ktm").classList.remove("bg-brand");
      document.getElementById("ktm").classList.remove("text-white");
      document.getElementById("proposal").classList.remove("bg-brand");
      document.getElementById("proposal").classList.remove("text-white");
      document.getElementById("asuransi").classList.remove("bg-brand");
      document.getElementById("asuransi").classList.remove("text-white");
    },
    text(judul3, deskripsi3) {
      document.getElementById("judul3").innerText = judul3;
      document.getElementById("deskripsi3").innerText = deskripsi3;
    },
    transkipAktivitas() {
      this.clear();
      document.getElementById("transkipAktivitas").className += " bg-brand";
      document.getElementById("transkipAktivitas").className += " text-white";
      document.getElementById("gambar3").src = "/img/tak.png";
      this.text(this.judul3transkipAktivitas, this.deskripsi3transkipAktivitas);
    },
    suratTugas() {
      this.clear();
      document.getElementById("suratTugas").className += " bg-brand";
      document.getElementById("suratTugas").className += " text-white";
      document.getElementById("gambar3").src = "/img/surat-dispen.png";
      this.text(this.judul3suratTugas, this.deskripsi3suratTugas);
    },
    suratRekomendasi() {
      this.clear();
      document.getElementById("suratRekomendasi").className += " bg-brand";
      document.getElementById("suratRekomendasi").className += " text-white";
      document.getElementById("gambar3").src = "/img/surat-lomba.png";
      this.text(this.judul3suratRekomendasi, this.deskripsi3suratRekomendasi);
    },
    suratKeterangan() {
      this.clear();
      document.getElementById("suratKeterangan").className += " bg-brand";
      document.getElementById("suratKeterangan").className += " text-white";
      document.getElementById("gambar3").src = "/img/surat-beasiswa.png";
      this.text(this.judul3suratKeterangan, this.deskripsi3suratKeterangan);
    },
    ktm() {
      this.clear();
      document.getElementById("ktm").className += " bg-brand";
      document.getElementById("ktm").className += " text-white";
      document.getElementById("gambar3").src = "/img/ktm.png";
      this.text(this.judul3ktm, this.deskripsi3ktm);
    },
    proposal() {
      this.clear();
      document.getElementById("proposal").className += " bg-brand";
      document.getElementById("proposal").className += " text-white";
      document.getElementById("gambar3").src = "/img/proposal-pengajuan.png";
      this.text(this.judul3proposal, this.deskripsi3proposal);
    },
    asuransi() {
      this.clear();
      document.getElementById("asuransi").className += " bg-brand";
      document.getElementById("asuransi").className += " text-white";
      document.getElementById("gambar3").src = "/img/asuransi.png";
      this.text(this.judul3asuransi, this.deskripsi3asuransi);
    },
  },
  data() {
    return {
      judul3transkipAktivitas: "Transkrip aktivitas kemahasiswaan (TAK)",
      deskripsi3transkipAktivitas:
        "Layanan approval sertifikat TAK sebagai syarat untuk mengikuti sidang tugas akhir/skripsi/proyek akhir, mendapatkan beasiswa, dan mengikuti seleksi mahasiswa berprestasi.",
      judul3suratTugas: "Surat Tugas / Dispensasi",
      deskripsi3suratTugas:
        "Layanan pembuatan surat tugas atau dispensasi untuk kebutuhan presensi.",
      judul3suratRekomendasi: "Surat Rekomendasi / Delegasi Lomba",
      deskripsi3suratRekomendasi:
        "Layanan pengajuan surat rekomendasi atau surat pengantar lomba.",
      judul3suratKeterangan:
        "Surat Keterangan Tidak Menerima Beasiswa Dari Kampus",
      deskripsi3suratKeterangan:
        "Layanan pembuatan surat keterangan tidak menerima beasiswa dari kampus untuk keperluan tertentu.",
      judul3ktm: "KTM, Jas Almamater dan Vest",
      deskripsi3ktm:
        "Layanan pendataan, penerimaan jas almamater & vest serta KTM mahasiswa Institut Teknologi Telkom Surabaya.",
      judul3proposal: "Proposal Pengajuan Dana dan LPJ Kegiatan Ormawa dan UKM",
      deskripsi3proposal:
        "Layanan terkait pelaksanaan pengusulan & pendanaan program kegiatan ormawa dan UKM.",
      judul3asuransi: "Asuransi dan Layanan Kesehatan Telkomedika",
      deskripsi3asuransi:
        "Layanan terkait pelaksanaan pengajuan klaim & asuransi kesehatan mahasiswa.",
    };
  },
};
</script>
