<template>
  <div class="mt-12 ppl container mx-auto px-2">
    <h3 class="flex font-semibold text-2xl space-x-3">
      <svg class="text-brand w-6" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M432 64H208C199.2 64 192 71.16 192 80V96H128V80C128 35.82 163.8 0 208 0H432C476.2 0 512 35.82 512 80V304C512 348.2 476.2 384 432 384H416V320H432C440.8 320 448 312.8 448 304V80C448 71.16 440.8 64 432 64zM0 192C0 156.7 28.65 128 64 128H320C355.3 128 384 156.7 384 192V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V192zM96 256H288C305.7 256 320 241.7 320 224C320 206.3 305.7 192 288 192H96C78.33 192 64 206.3 64 224C64 241.7 78.33 256 96 256z"
        ></path>
      </svg>
      <span class="text-brand">Panduan&nbsp</span>Pengajuan Layanan
    </h3>
    <div class="overflow-x-auto">
      <div class="min-w-[800px] h-[320px]">
        <ol class="flex mt-16 justify-center">
          <li class="bg-brand rounded-full w-8 h-8 text-white leading-8">
            <p class="text-center">1</p>
            <p class="text-black mt-3 w-20 -ml-6 leading-5 text-center">
              Mahasiswa Datang Ke SSC.
            </p>
          </li>
          <div class="my-auto border-b-2 border-brand w-1/12"></div>
          <li class="bg-brand rounded-full w-8 h-8 text-white leading-8">
            <p class="text-center">2</p>
            <p class="text-black mt-3 w-20 -ml-6 leading-5 text-center">
              Mahasiswa menaruh KTM ke tempat yang telah disediakan untuk
              antrian.
            </p>
          </li>
          <div class="my-auto border-b-2 border-brand w-1/12"></div>
          <li class="bg-brand rounded-full w-8 h-8 text-white leading-8">
            <p class="text-center">3</p>
            <p class="text-black mt-3 w-20 -ml-6 leading-5 text-center">
              Operator memanggil mahasiswa sesuai urutan antrian kedatangan.
            </p>
          </li>
          <div class="my-auto border-b-2 border-brand w-1/12"></div>
          <li class="bg-brand rounded-full w-8 h-8 text-white leading-8">
            <p class="text-center">4</p>
            <p class="text-black mt-3 w-20 -ml-6 leading-5 text-center">
              Mahasiswa berkonsultasi tentang layanan ke operator.
            </p>
          </li>
          <div class="my-auto border-b-2 border-brand w-1/12"></div>
          <li class="bg-brand rounded-full w-8 h-8 text-white leading-8">
            <p class="text-center">5</p>
            <p class="text-black mt-3 w-20 -ml-6 leading-5 text-center">
              Operator membantu mahasiswa terkait layanan SSC melalui ticketing
              aplikasi.
            </p>
          </li>
          <div class="my-auto border-b-2 border-brand w-1/12"></div>
          <li class="bg-brand rounded-full w-8 h-8 text-white leading-8">
            <p class="text-center">6</p>
            <p class="text-black mt-3 w-20 -ml-6 leading-5 text-center">
              Mahasiswa akan mendapatkan informasi terkait tindak lanjut layanan
              berdasarkan jenis layanan (1-3 hari).
            </p>
          </li>
          <div class="my-auto border-b-2 border-brand w-1/12"></div>
          <li class="bg-brand rounded-full w-8 h-8 text-white leading-8">
            <p class="text-center">7</p>
            <p class="text-black mt-3 w-20 -ml-6 leading-5 text-center">
              Selesai.
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "timeline",
};
</script>
