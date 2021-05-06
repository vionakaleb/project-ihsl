<template>
  <b-modal
    v-model="registermodal"
    size="lg"
    title="Info Penting"
    header-bg-variant="dark"
    header-text-variant="white"
    body-bg-variant="dark"
    body-text-variant="white"
    footer-bg-variant="dark"
    footer-text-variant="white"
  >
    <div class="w-100 text-14 text-white pt-3">
      <h4 class="text-center text-white">
        <strong>Selamat datang di High School League Season 2.</strong>
      </h4>
      <div class="text-left">
        Untuk Mengikuti High School League, Pastikan Sekolah kalian sudah membuat Team di Yamisok (
        <a
          href="http://yamisok.com/"
          target="_blank"
        >
          <u class="text-red font-italic">yamisok.com</u>
        </a>)
        <br />Berikut Langkah-langkah membuat Team di Yamisok.
        <br />
        <ol type="1">
          <li>
            Daftar di Yamisok sekarang.
            <a href="http://yamisok.com/register" target="_blank">
              <u class="text-red font-italic">www.yamisok.com/register</u>
            </a>
          </li>
          <li>Pastikan kalian memasukan data yang Valid.</li>
          <li>Kemudian Cek email kalian untuk melakukan verifikasi.</li>
          <li>
            Connect Game kalian. Step-stepnya dapat dilihat di :
            <a
              class="text-red"
              href="https://yamisok.com/info/faq?id=cara-binding-game-account"
            >https://yamisok.com/info/faq?id=cara-binding-game-account</a>
          </li>
          <li>Pada Menu di sebelah kanan, Pilih Team Lalu Create Team.</li>
          <li>Pilih Game, (Dota 2 atau PUBG M) kemudian Masukkan Nama Sekolah Kalian sebagai Nama Teamnya, Tag / Singkatan Sekolah kalian. Setelah itu klik Create Team.</li>
          <li>Invite ke 5 Anggota kalian.</li>
          <li>
            Apabila ada yang tidak jelas, kalian dapat membaca FAQ :
            <a
              href="http://bit.ly/how-to-create-or-join-team"
              target="_blank"
            >
              <u class="text-red font-italic">bit.ly/how-to-create-or-join-team</u>
            </a>
          </li>
        </ol>Silahkan Isi Data-data dengan baik dan benar, Setelah memasukan Team Yamisok, pastikan anggota-anggota kalian benar.
        <br />Pastikan kalian sudah mengetahui RULES yang berlaku di Tournament ini.
        <br />Tunggu Konfirmasi dari Tim High School League melakukan konfirmasi !
        <br />
        <br />
        <img src="/static/img/float-facebook.jpg" height="20" /> :
        <a
          href="https://www.facebook.com/groups/399549897279120"
          target="_blank"
          class="text-white"
        >Join DOTA 2 Official Group</a>
        <br />
        <img src="/static/img/float-facebook.jpg" height="20" /> :
        <a
          href="https://www.facebook.com/groups/484113345497737"
          target="_blank"
          class="text-white"
        >Join PUBG Mobile Official Group</a>
        <br />
      </div>
    </div>
    <div slot="modal-footer" class="w-100">
      <!-- <p class="float-left">&nbsp;</p> -->
      <b-btn size="sm" class="float-right" variant="primary" @click="registermodal=false">Close</b-btn>
    </div>
  </b-modal>
</template>

<style lang="scss">
.modal-title {
  color: white !important;
}
.modal-header {
  border-radius: 10px 10px 0 0;
}
.modal-footer {
  border-radius: 0 0 10px 10px;
}
.modal-content {
  border-radius: 10px;
  background-color: #181a1e !important;
}
</style>


<script>
export default {
  props: ['registermodal']
}
</script>