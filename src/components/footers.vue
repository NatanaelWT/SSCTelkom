<template>
  <div class="w-full bg-dark text-white py-5">
    <div
      class="container grid grid-cols-1 mx-auto py-10 space-y-10 md:grid-cols-3 md:space-y-0"
    >
      <div class="px-10">
        <h3 class="font-semibold text-3xl">Student Service Center</h3>
        <h4 class="text-[#90908e] mt-2 mb-2 font-semibold">Contact</h4>
        <p class="font-semibold">
          Address: Jl. Ketintang No.156, Gayungan, Surabaya, Jawa Timur 60231
        </p>
        <p class="font-semibold">Phone: (+6231) 8280800</p>
        <p class="font-semibold">Email: humas@ittelkom-sby.ac.id</p>
      </div>
      <div class="px-10">
        <h3 class="font-semibold text-xl">Aplikasi Student Service Center</h3>
        <p class="italic mt-4 text-[#6c757d]">
          Ditunjukkan untuk mempermudah perangkat kerja serta mahasiswa Institut
          Teknologi Telkom Surabaya untuk melakukan pelaporan pemintaan bantuan,
          demi terciptanya lingkungan kerja serta perkuliahan yang lebih baik
          dan efisien.
        </p>
      </div>
      <div class="px-10">
        <h3 class="font-semibold text-2xl">My Account</h3>
        <p class="mt-4 hover:text-brand hover:ml-2">
          <a href="#"> My History</a>
        </p>
        <p class="mt-4 hover:text-brand hover:ml-2">
          <a href="#"> Services List</a>
        </p>
        <p class="mt-4 hover:text-brand hover:ml-2">
          <a href="#"> Sign Out</a>
        </p>
      </div>
    </div>
  </div>
  <div class="h-16 flex pl-10">
    <div class="w-6/12 my-auto">
      <p class="text-[#8e8e90] font-normal text-sm">
        © 2023,
        <span class="text-brand font-semibold">IT Telkom Surabaya</span> Student
        Service Center
      </p>
    </div>
    <div class="w-6/12 text-right my-auto pr-10">
      <p class="text-[#8e8e90] font-normal text-sm">
        <span class="text-brand font-semibold">IT Telkom Surabaya.</span> All
        rights reserved
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "footers",
};
</script>
