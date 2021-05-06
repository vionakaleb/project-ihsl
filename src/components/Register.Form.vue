<template>
  <div
    class="px-lg-5 px-md-5 pt-lg-4 pt-md-4 register-w bg-gray center-content"
    style="margin:0 auto; margin-top:-8px; border-radius: 10px; padding: 35px 25px 20px 25px;"
  >
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" align="left" class="px-2 py-4">
      <b-row>
        <div class="col-md-12">
          <div class="mar-bot-30">
            <span style="font-size: 24px; color: white;">Game yang dimainkan</span>
          </div>
          <div class="mar-bot-10">
            <span style="font-size: 16px; color: #ccc;">Silahkan pilih game yang akan didaftarkan</span>
          </div>

          <div class="d-flex flex-row mar-bot-20">
            <div
              v-bind:class="'img-dota2 border-gray mar-rig-10' + isActiveDota2"
              v-on:click="onChangeGames('dota')"
            ></div>
            <div
              v-bind:class="'img-pubg border-gray mar-left-10' + isActivePubg"
              v-on:click="onChangeGames('pubg')"
            ></div>
          </div>

          <b-form-group
            class="text-16 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="I-Cafe yang dituju"
            v-if="games == 'dota'"
          >
            <b-form-select
              v-model="icafe"
              class="text-white text-16 bg-textbox border-radius mar-top-5 col-md-12"
              :label-cols="4"
              breakpoint="sm"
              size="sm"
            >
              <option :value="null" disabled>Silahkan pilih I-Cafe</option>
              <optgroup v-for="(group, name) in icafePilihan" :label="name" :key="name">
                <option
                  v-for="option in group"
                  :value="option.value"
                  :key="option.id"
                >{{ option.text }}</option>
              </optgroup>
            </b-form-select>
          </b-form-group>

          <b-form-group label="Team Member" class="text-24 text-white" v-if="games != null">
            <form-autocomplete
              :reqUrl="'/api/v1/teams?game_id='+selectedGameId"
              v-model="searchTeam"
            ></form-autocomplete>
            <p
              class="text-justify text-grey text-16 pt-2"
              style="color: #868686;"
            >*Untuk Mengikuti High School League, Pastikan Sekolah kalian sudah memiliki Team di Yamisok</p>
          </b-form-group>

          <b-form-group label="Team Member" class="text-22 text-white" v-if="searchTeam != null">
            <div class="row col-md-12 mar-auto">
              <div
                class="list-group-item col-md-5 mar-auto d-flex flex-row"
                style="margin-bottom: 5px; border-radius: 10px; width: 90%"
                v-for="(member,index) in searchTeam.team_member"
                :key="index"
              >
                <div class="list-group-item--avatar">
                  <img class="img-circle" :src="member.player.avatar_url" />
                </div>
                <div class="list-group-item--title d-flex" style="font-size: 14px;">
                  <p>{{member.player.username}}</p>
                  <p>
                    <span
                      :class="member.player.in_game_id ? 'badge-primary' : 'badge-danger'"
                      class="badge"
                    >{{member.player.in_game_id ? 'Connected' : 'Not connected yet'}}</span>
                  </p>
                </div>
              </div>
            </div>
          </b-form-group>

          <b-form-group
            class="text-16 pt-4 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nomor Telepon Captain"
            label-for="Input11"
            v-if="searchTeam != null"
          >
            <b-form-input
              id="Input11"
              class="text-white bg-textbox border-radius"
              type="text"
              size="sm"
              v-model="form.teleponCaptain"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="text-16"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nomor Telepon Vice-Captain"
            label-for="Input12"
            v-if="searchTeam != null"
          >
            <b-form-input
              id="Input12"
              class="text-white bg-textbox border-radius"
              type="text"
              size="sm"
              v-model="form.teleponViceCaptain"
            ></b-form-input>
          </b-form-group>

          <h4 class="size-24 text-white light-bold pt-3 pb-3">DATA SEKOLAH</h4>
          <b-form-group
            id="InputGroup1"
            class="text-16 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nama Sekolah"
            label-for="Input1"
          >
            <b-form-input
              id="Input1"
              class="text-white bg-textbox border-radius mar-top-5"
              type="text"
              size="sm"
              v-model="form.namaSekolah"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup2"
            class="text-16 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Alamat Sekolah"
            label-for="Input2"
          >
            <b-form-input
              id="Input2"
              class="text-white bg-textbox border-radius mar-top-5"
              type="text"
              size="sm"
              v-model="form.alamatSekolah"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup3"
            class="text-16 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Daftar Kota"
            label-for="Input3"
          >
            <b-form-select
              v-model="kotaSekolah"
              class="text-white text-16 bg-textbox border-radius mar-top-5 col-md-12"
              :options="optionKota"
              :label-cols="4"
              breakpoint="sm"
              size="sm"
            />
          </b-form-group>

          <b-form-group
            id="InputGroup3"
            class="text-16 m-input"
            horizontal
            :label-cols="4"
            breakpoint="sm"
            label="Kota Pilihan"
            label-for="Input3"
            v-if="kotaSekolah != 99"
            style="display: none;"
          >
            <b-form-input
              id="Input3"
              class="text-white bg-textbox border-radius mar-top-5 text-16"
              type="text"
              size="sm"
            ></b-form-input>
          </b-form-group>

          <!-- SEKOLAH LAINNYA -->
          <b-form-group
            id="InputGroupLainnya"
            class="text-16 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Kota yang Diajukan <a class='text-white'>*</a>:"
            label-for="InputLainnya"
            v-else
          >
            <b-form-input
              id="Input44"
              class="text-white bg-textbox border-radius mar-top-5"
              type="text"
              size="sm"
              v-model="form.kotaLainnya"
            ></b-form-input>
          </b-form-group>
          <!-- END SEKOLAH LAINNYA -->

          <b-form-group
            id="InputGroup4"
            class="text-16 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="No. Telepon Sekolah"
            label-for="Input4"
          >
            <b-form-input
              id="Input4"
              class="text-white bg-textbox border-radius mar-top-5"
              type="text"
              size="sm"
              v-model="form.teleponSekolah"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup5"
            class="Download Surat Izin text-16 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Email Sekolah"
            label-for="Input5"
          >
            <b-form-input
              id="Input5"
              class="text-white bg-textbox border-radius mar-top-5"
              type="email"
              size="sm"
              v-model="form.emailSekolah"
            ></b-form-input>
          </b-form-group>

          <!-- <b-form-group id="InputGroupDrop"
                  horizontal
                  :label-cols="3"
                  breakpoint="md"
                  label="dropdown:"
                  label-for="InputDrop">
            <b-form-select id="InputDrop"
              :options="dropdown"
              v-model="form.dropdown">
            </b-form-select>
          </b-form-group>-->
          <!-- <p class="text-justify text-white text-12">*I-cafe di kota yang diajukan akan di proses oleh pihak penyelenggara terlebih dahulu.</p> -->
        </div>

        <div class="col-md-12 mt-md-3">
          <div class="d-flex flex-row">
            <div class="flex-column mar-rig-50">
              <label class="text-16 mt-upload" style="color: #ccc">Foto surat izin sekolah</label>
              <div class="container mb-5">
                <input-image :index="1" @setSelectedImage="setSelectedImage"></input-image>
              </div>
            </div>

            <div class="flex-column">
              <label class="text-16 mt-upload" style="color: #ccc">Logo sekolah</label>
              <div class="container mb-5">
                <input-image :index="2" @setSelectedImage="setSelectedImage"></input-image>
              </div>
            </div>
          </div>

          <span
            class="text-justify text-16"
            style="color: #868686;"
          >*Ukuran foto tidak boleh melebihi 2MB.</span>
          <br />
          <span class="text-justify text-16 mb-5" style="color: #868686;">
            Silahkan mengunduh contoh surat izin sekolah
            <a
              href="/static/Surat Izin Sekolah Season 2.pdf"
              target="_blank"
              class="font-italic"
            >
              <u class="text-red font-italic">disini</u>
            </a>.
          </span>

          <!-- DATA PEMBINA -->
          <h4 class="size-24 light-bold text-white pb-3 pt-5">Data Pembina</h4>
          <b-form-group
            id="InputGroup6"
            class="Download Surat Izin text-16 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nama PIC/Pembina"
            label-for="Input6"
          >
            <b-form-input
              id="Input6"
              class="text-white bg-textbox border-radius"
              type="text"
              size="sm"
              v-model="form.namaGuru"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup7"
            class="Download Surat Izin text-16 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nomor Telepon PIC/Pembina"
            label-for="Input7"
          >
            <b-form-input
              id="Input7"
              class="text-white bg-textbox border-radius"
              type="text"
              size="sm"
              v-model="form.teleponGuru"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup8"
            class="Download Surat Izin text-16 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Email PIC/Pembina"
            label-for="Input8"
          >
            <b-form-input
              id="Input8"
              class="text-white bg-textbox border-radius"
              type="email"
              size="sm"
              v-model="form.emailGuru"
            ></b-form-input>
          </b-form-group>
          <!-- DATA PEMBINA -->

          <div class="pt-0">
            <div class="my-5">
              <b-form-group id="GroupChecks" class="text-gray">
                <b-form-checkbox-group v-model="form.isAgree" id="Checks">
                  <b-form-checkbox value="true" class="text-gray text-16">
                    &nbsp;Dengan ini saya menyetujui
                    <a
                      v-b-modal="'myModal'"
                      style="cursor:pointer;"
                    >
                      <u class="text-red font-italic">syarat & ketentuan</u>
                    </a> yang berlaku di Indonesia High School League.
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </div>

            <div class="mb-2">
              <b-button
                type="submit"
                class="button-send"
                style="border-radius: 10px;"
                v-if="!btnSubmit && form.isAgree && form.isAgree.length > 0"
              >
                <b class="px-1 text-white text-16">Submit Form</b>
              </b-button>
              <b-button
                type="submit"
                class="button-send"
                style="border-radius: 10px; background-color: #303539 !important;"
                v-else-if="!btnSubmit && (!form.isAgree || form.isAgree.length === 0)"
                disabled
              >
                <b class="px-1 text-white text-16">Submit Form</b>
              </b-button>
              <b-button
                type="submit"
                class="button-send"
                style="border-radius: 10px;"
                v-else
                disabled
              >
                <b class="px-1 text-white text-16">loading..</b>
              </b-button>
              <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
            </div>
          </div>
        </div>

        <div class="col-md-12 fixed-top p-alert my-5 px-5">
          <b-modal
            id="myModal"
            size="lg"
            title="Syarat dan Ketentuan"
            header-bg-variant="dark"
            header-text-variant="light"
            body-bg-variant="dark"
            body-text-variant="light"
            footer-bg-variant="dark"
            footer-text-variant="dark"
          >
            <div class="w-100 text-11 text-gray">
              <h5 class="text-white">Tentang Turnamen</h5>
              <p
                class="text-justify"
              >Peserta dari liga ini adalah seluruh sekolah di Indonesia. Setiap tim harus mendapatkan ijin untuk mendaftar dan bertanding dari pihak sekolah. Tim akan merepresentasikan sekolah mereka, dan setiap sekolah hanya dapat mengirimkan 1 tim. Liga akan dibagi menjadi 2 divisi, Kualifikasi dan Liga Seri A (Pos 1-16). Pertandingan akan diadakan setiap sabtu dan minggu sepanjang semester.</p>

              <h5 class="text-white">Linimasa</h5>
              <ul class="ul.square">
                <li>Pendaftaran peserta secara online di www.ihsl.id dari 1 Agustus 2019 hingga 14 September 2019.</li>
                <li>21 September 2019 – pengumuman bracket turnamen Kualifikasi</li>
                <li>12 Oktober 2019 – babak Liga dan Exibition Match dimulai. Setiap tim dari sekolah yang terdaftar akan bersaing secara nasional di icafe terdekat. Setiap - sekolah hanya dapat mengirim 1 tim. Jika ada lebih dari 1 tim, sekolah harus memilih satu tim dengan kualifikasi internal. Kualifikasi akan diadakan setiap hari Sabtu dan Minggu pukul 11.00 s/d Selesai. Kualifikasi ini akan disiarkan online oleh ESID & Yamisok.</li>
              </ul>

              <h5 class="text-white">Syarat dan Ketentuan</h5>
              <b class="text-16">Peserta</b>
              <ul class="ul.square">
                <li>Pihak Sekolah yang berpartisipasi WAJIB untuk mendaftarkan peserta sebelum batas waktu yang ditentukan oleh pihak penyelenggara.</li>
                <li>Berikut ini persyaratan peserta yang berhak mengikuti High School League:</li>
                <ul class="ul.circle">
                  <li>Usia 15-18 tahun dan merupakan pelajar Sekolah Menengah Atas (SMA), Sekolah Menengah Kejuruan (SMK)</li>
                  <li>Peserta harus mendapatkan ijin dari orang tua dan sekolah (dapat diwakili oleh guru).</li>
                  <li>Peserta dibatasi untuk pelajar dengan nilai akademis memadai yang ditentukan oleh sekolah.</li>
                  <li>Sekolah wajib menyediakan 1 (satu) guru pendamping yang dipersiapkan untuk menjadi pembimbing peserta.</li>
                  <li>Sekolah hanya dapat mendaftarkan maksimal 10 orang (pemain inti dan cadangan) dalam satu tim dan tidak dapat diganti selama liga pada musim tersebut.</li>
                  <li>Peserta harus terdaftar di dalam satu sekolah yang sama.</li>
                  <li>Peserta yang telah lulus tidak dapat mengikuti pertandingan.</li>
                  <li>Sekolah (yang dapat diwakili oleh guru pembimbing) WAJIB mengirimkan data pemain kepada panitia.</li>
                  <li>Peserta bersedia menyetujui aturan dalam pertandingan yang disediakan oleh penyelenggara.</li>
                  <li>Peserta tidak terdaftar dalam satu organisasi team profesional baik di dalam maupun luar negeri.</li>
                </ul>
              </ul>

              <b class="text-16">Penyelenggara</b>
              <ul class="ul.square">
                <li>Sistem pertandingan akan dibagi menjadi 2 fase (a) Sistem turnamen untuk kualifikasi dan (b) Sistem Liga (per musim).</li>
                <li>
                  <b class="text-16">Kualifikasi:</b>
                </li>
                <ul class="ul.circle">
                  <li>Pendaftaran kualifikasi berakhir pada tanggal 14 September 2019 dan bracket akan diumumkan pada tanggal 21 September 2019 melalui website www.yamisok.com</li>
                  <li>Sistem turnamen Kualifikasi yang digunakan adalah single eliminations. Sedangkan Turnament Liga menggunakan Sistem Liga Single Elimination dimana menang = 3 poin, kalah = 0 poin</li>
                  <li>Turnamen Kualifikasi akan diadakan setiap hari sabtu dan minggu menyesuaikan kegiatan regular sekolah dimulai dari tanggal 28 September 2019.</li>
                  <li>Turnament Liga akan dimulai dari tanggal 12 Oktober 2019</li>
                  <li>Pemenang 16 besar dari Liga Seri A BERHAK untuk mengikuti babak Liga musim Kedua dan mendapatkan subsidi bimbingan guru bertahap (ketentuan terdapat di penjelasan sistem hadiah). dan 4 Pemenang dari Kualifikasi dapat mengikuti liga Seri A di musim berikutnya.</li>
                  <li>Hadiah Liga Seri A akan diberikan untuk 3 pemenang utama berupa beasiswa (Syarat dan ketentuan disebutkan kemudian).</li>
                </ul>
              </ul>

              <h5 class="text-white">Liga (Musim)</h5>
              <ul class="ul.square">
                <li>Peserta berasal dari sekolah pemenang 20 besar babak kualifikasi.</li>
                <li>Liga akan diadakan setiap sabtu dan minggu untuk menyesuaikan dengan kegiatan regular sekolah.</li>
                <li>Sekolah yang berpartisipasi dalam 'High School League' tidak diperkenankan mengikuti liga serupa.</li>
                <li>Detail sistem liga akan diberikan dalam aturan pertandingan yang disediakan oleh penyelenggara.</li>
                <li>Sekolah tidak dapat mengundurkan diri selama dalam masa kontrak liga musim tersebut.</li>
                <li>Biaya subsidi untuk guru pembimbing kegiatan ekstrakurikuler esports yang akan diberikan kepada sekolah peserta liga adalah sebagai berikut:</li>
                <ul class="ul.circle">
                  <li>Pertandingan ke-1 sampai ke-11 akan diberikan Rp. 500.000,- per pertandingan</li>
                  <li>Pertandingan ke-12 sampai ke 16 akan diberikan Rp. 1.000.000,- per pertandingan</li>
                  <li>Pertandingan ke-17 sampai ke 19 akan diberikan Rp.1.500.000,- per pertandingan</li>
                  <li>Biaya subsidi dapat diterima paling lama 3-5 hari setelah pertandingan.</li>
                </ul>
                <li>Sekolah dapat mengajukan perubahan/penyesuaian jadwal tanding dengan ketentuan sebagai berikut:</li>
                <ul class="ul.circle">
                  <li>Perubahan jadwal disepakati oleh kedua belah pihak (dengan team lawan) paling lambat 2 hari sebelum jadwal terdaftar.</li>
                  <li>Pertandingan wajib dilaksanakan selambatnya 2 hari sebelum pertandingan minggu depannya dimulai.</li>
                </ul>
                <li>Sekolah hanya diperkenankan WO sebanyak maksimal 2 kali dalam satu musim, sekolah akan di degradasi setelah WO ke-3 dan WAJIB mengembalikan subsidi pertandingan.</li>
                <li>Hadiah dari babak Liga akan diberikan berupa beasiswa.</li>
                <li>Peserta pemenang liga (3 besar) yang berasal dari luar Jakarta bersedia diterbangkan untuk menghadiri acara pemberian hadiah (jika diadakan).</li>
                <li>Pemenang 16 besar dalam liga ini BERHAK untuk mengikuti liga di musim berikutnya.</li>
              </ul>

              <h5 class="text-white">Tentang High School League</h5>
              <p
                class="text-justify"
              >High School league (HSL) adalah sebuah liga eSports dengan Dota 2 sebagai game utama. Namun akan selalu ada kemungkinan bertambahnya cabang game di musim berikutnya. Liga akan berlangsung selama 1 semester dan akan diadakan pertandingan setiap Sabtu dan Minggu. Tujuan liga ini adalah menjadi pencetus liga pelajar di Indonesia, memperkenalkan industri digital melalui eSports, memperkenalkan karir yang ada di industri digital, mencari bibit-bibit atlit esports, membentuk mental dan attitude atlet eSports.</p>
              <p
                class="text-justify"
              >Tahun ini, babak kualifikasi HSL digelar di 8 kota yaitu Jakarta, Bandung, Bogor, Solo, Surabaya, Malang, Makassar, dan Medan. Dan tidak ada kemungkinan untuk Daerah lainnya yang ingin berpartisipasi dipertandingan High School League dengan cara menghubungi panitia.</p>

              <p
                class="text-justify"
              >Pertandingan akan dibagi menjadi 2 divisi; yaitu Kualifikasi dan Liga. 4 tim terbawah dari Seri A akan terdegradasi ke Seri B. Sementara 4 tim terbawah dari Seri A akan keluar dari Liga HSL. Akan ada qualifier sebelum Liga berlangsung untuk mencari 4 tim terbaik untuk masuk ke dalam Seri A.</p>
            </div>
          </b-modal>
        </div>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import InputImage from '@/components/Register.InputImage'
import FormAutoComplete from '@/components/Register.FormAutoComplete'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import Vue from 'vue'

Vue.use(VueSweetalert2)

export default {
  components: {
    'input-image': InputImage,
    'form-autocomplete': FormAutoComplete
  },
  data () {
    return {
      MAX_TEAM_MEMBER: 5,
      isActiveDota2: '',
      isActivePubg: '',
      btnSubmit: false,
      form: {
        namaSekolah: '',
        alamatSekolah: '',
        teleponSekolah: '',
        emailSekolah: '',
        websiteSekolah: '',
        sosmedSekolah: '',
        namaGuru: '',
        teleponGuru: '',
        emailGuru: '',
        kotaLainnya: '',
        isAgree: false,
        selectedImages: {
          legal: '',
          schoolLogo: ''
        }
      },
      show: true,
      kotaSekolah: null,
      optionKota: [
        { value: null, text: 'Silahkan pilih kota', disabled: true },
        { value: 'Jabodetabek', text: 'Jabodetabek' },
        { value: 'Bandung', text: 'Bandung' },
        { value: 'Malang', text: 'Malang' },
        { value: 'Makassar', text: 'Makassar' },
        { value: 'Medan', text: 'Medan' },
        { value: 'Solo', text: 'Solo' },
        { value: 'Surabaya', text: 'Surabaya' },
        { value: 'Balikpapan', text: 'Balikpapan' },
        { value: 'Denpasar', text: 'Denpasar' },
        { value: 'Blitar', text: 'Blitar' },
        { value: 'Jambi', text: 'Jambi' },
        { value: 'Jember', text: 'Jember' },
        { value: 'Palembang', text: 'Palembang' },
        { value: 'Purwokerto', text: 'Purwokerto' },
        { value: 'Samarinda', text: 'Samarinda' },
        { value: 'Lampung', text: 'Lampung' },
        { value: 'Semarang', text: 'Semarang' },
        { value: 'Yogyakarta', text: 'Yogyakarta' },
        { value: 99, text: 'Lainnya - Ajukan kotamu' }
      ],
      optionKotaLainnya: [
        { value: null, text: 'Kota yang diajukan', disabled: true },
        { value: 'Bengkalis', text: 'Bengkalis' },
        { value: 'Dumai', text: 'Dumai' },
        { value: 'Garut', text: 'Malang' },
        { value: 'Indramayu', text: 'Indramayu' },
        { value: 'Jambi', text: 'Jambi' },
        { value: 'Karawang', text: 'Karawang' },
        { value: 'Mataram', text: 'Mataram' },
        { value: 'Muara Bungo', text: 'Muara Bungo' },
        { value: 'Padang', text: 'Padang' },
        { value: 'Pemalang', text: 'Pemalang' },
        { value: 'Tanjung Pinang', text: 'Tanjung Pinang' }
      ],
      optioniCafe: [
        { value: null, text: 'Silahkan pilih i-Cafe', disabled: true },
        { value: 'Jabodetabek', text: 'Jabodetabek' },
        { value: 'Bandung', text: 'Bandung' },
        { value: 'Malang', text: 'Malang' },
        { value: 'Makassar', text: 'Makassar' },
        { value: 'Medan', text: 'Medan' },
        { value: 'Solo', text: 'Solo' },
        { value: 'Surabaya', text: 'Surabaya' },
        { value: 99, text: 'Lainnya - Ajukan kotamu' }
      ],
      games: null,
      icafe: null,
      icafePilihan: {
        DKI_Jakarta: [
          { text: 'Ibisa', value: 'Ibisa' },
          { text: 'Barol Gaming', value: 'Barol Gaming' },
          { text: 'Dota Cafe', value: 'Dota Cafe' },
          { text: 'HIghGrounds', value: 'HIghGrounds' }
        ],
        BALIKPAPAN: [{ text: 'Cunz37 E-Sports', value: 'Cunz37 E-Sports' }],
        BALI: [
          { text: 'De Throne 3 Ultimate', value: 'De Throne 3 Ultimate' },
          { text: 'De Throne Ultimate', value: 'De Throne Ultimate' }
        ],
        MALANG: [{ text: 'Hardcore Malang', value: 'Hardcore Malang' }],
        JEMBER: [{ text: 'Level 99 Jember', value: 'Level 99 Jember' }],
        PALEMBANG: [{ text: 'Hans Pro Gaming', value: 'Hans Pro Gaming' }],
        PURWOKERTO: [{ text: 'D.Net', value: 'D.Net' }],
        SEMARANG: [
          { text: 'TNC Pedurungan', value: 'TNC Pedurungan' },
          { text: 'TNC Sampangan', value: 'TNC Sampangan' },
          { text: 'TNC Banyumanik', value: 'TNC Banyumanik' }
        ],
        SAMARINDA: [
          { text: 'MAGNET CYBERSPORTS', value: 'MAGNET CYBERSPORTS' }
        ],
        BANDUNG: [
          {
            text: 'Chronos Bandung Batununggal',
            value: 'Chronos Bandung Batununggal'
          }
        ],
        SURABAYA: [
          {
            text: 'Chronos Bandung Batununggal',
            value: 'Chronos Bandung Batununggal'
          },
          { text: 'Xgate surabaya', value: 'Xgate surabaya' },
          { text: 'Army Gaming', value: 'Army Gaming' },
          { text: 'Playhouse Surabaya', value: 'Playhouse Surabaya' },
          { text: 'Gunzie', value: 'Gunzie' },
          { text: '3Kingdom', value: '3Kingdom' },
          {
            text: 'Warlock Aghanim Surabaya',
            value: 'Warlock Aghanim Surabaya'
          },
          {
            text: 'TNC Pucang',
            value: 'TNC Pucang'
          }
        ],
        BLITAR: [{ text: 'MansCave', value: 'MansCave' }],
        BOGOR: [{ text: 'RedFox', value: 'RedFox' }],
        MEDAN: [{ text: 'iCAFE MEDAN', value: 'iCAFE MEDAN' }],
        JAMBI: [{ text: 'RESPAWN GAMING', value: 'RESPAWN GAMING' }],
        MAKASSAR: [{ text: 'TNC Makassar', value: 'TNC Makassar' }],
        YOGYAKARTA: [
          { text: 'Supernova Cybercafe', value: 'Supernova Cybercafe' },
          { text: 'TNC Gondomanan', value: 'TNC Gondomanan' }
        ],
        SOLO: [{ text: 'Poseidon Game Center', value: 'Poseidon Game Center' }],
        BANDAR_LAMPUNG: [
          { text: 'EmpireZ 3 I-cafe', value: 'EmpireZ 3 I-cafe' }
        ]
      },
      searchTeam: null,
      searchTeamUrl: ''
    }
  },
  computed: {
    selectedGameId () {
      return this.games === 'dota' ? 1 : 3
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.btnSubmit = true
      let isAgree = 0
      if (this.form.isAgree.length > 0) {
        isAgree = 1
      }

      if (isAgree === 1) {
        let data = {
          icafePilihan: this.icafe,
          gamePilihan: this.games,

          teleponCaptain: this.form.teleponCaptain,
          teleponViceCaptain: this.form.teleponViceCaptain,

          namaSekolah: this.form.namaSekolah,
          alamatSekolah: this.form.alamatSekolah,
          kotaSekolah: this.kotaSekolah,
          kotaLainnya: this.form.kotaLainnya,
          teleponSekolah: this.form.teleponSekolah,
          emailSekolah: this.form.emailSekolah,

          namaGuru: this.form.namaGuru,
          teleponGuru: this.form.teleponGuru,
          emailGuru: this.form.emailGuru,

          isAgree: isAgree,

          legal: this.form.selectedImages.legal,
          schoolLogo: this.form.selectedImages.schoolLogo,

          teamId: this.searchTeam ? this.searchTeam.id : null,
          teamName: this.searchTeam ? this.searchTeam.title : null,
          teamMembers:
            this.searchTeam && this.searchTeam.team_member
              ? this.searchTeam.team_member
              : null
        }

        console.log(data)
        if (
          (!this.icafe && this.games === 'dota') ||
          !this.games ||
          !this.form.teleponCaptain ||
          !this.form.teleponViceCaptain ||
          !this.form.namaSekolah ||
          !this.form.alamatSekolah ||
          !this.kotaSekolah ||
          (!this.kotaSekolah === 99 && !this.form.kotaLainnya) ||
          !this.form.teleponSekolah ||
          !this.form.emailSekolah ||
          !this.form.namaGuru ||
          !this.form.teleponGuru ||
          !this.form.emailGuru ||
          !this.form.selectedImages.legal ||
          !this.form.selectedImages.schoolLogo
        ) {
          this.btnSubmit = false
          this.$swal({
            type: 'error',
            title: 'Registrasi Gagal',
            html: 'Mohon isi data dengan lengkap'
          })
        } else {
          let isValidate = this.isValidate(data)
          if (isValidate.code) {
            axios.post(process.env.API_URL + '/api/v1/register', data).then(
              response => {
                if (response.data.status === 200) {
                  this.$swal('Register Successfull', '', 'success')
                  this.$router.push('/home')
                  this.form = []
                } else if (response.data.status === 201) {
                  this.btnSubmit = false
                  this.$swal({
                    type: 'error',
                    title: 'Registrasi Gagal',
                    html: response.data.message
                  })
                }
              },
              response => {
                this.$swal({
                  type: 'error',
                  title: 'Registrasi Gagal',
                  text: response
                })
                this.btnSubmit = false
              }
            )
          } else {
            this.$swal({
              type: 'error',
              title: 'Registrasi Gagal',
              text: isValidate.text
            })
            this.btnSubmit = false
          }
        }
      }
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    setSelectedImage (imageUrl, key) {
      if (key === 1) {
        this.form.selectedImages.legal = imageUrl
      } else if (key === 2) {
        this.form.selectedImages.schoolLogo = imageUrl
      }
    },
    onChangeGames (event) {
      this.searchTeam = null
      if (event === 'dota') {
        this.selectedGame = 1
        this.games = 'dota'
        this.isActiveDota2 = ' img-dota2-active'
        this.isActivePubg = ''
      } else if (event === 'pubg') {
        this.selectedGame = 3
        this.games = 'pubg'
        this.isActiveDota2 = ''
        this.isActivePubg = ' img-pubg-active'
      }
    },
    isValidate (data) {
      for (let index in data) {
        if (index === 'teamMembers' && data[index] !== null) {
          if (data['teamMembers'].length !== this.MAX_TEAM_MEMBER) {
            return {
              code: false,
              text:
                'Jumlah anggota tim kamu harus ' +
                this.MAX_TEAM_MEMBER +
                ' orang'
            }
          } else {
            for (let i in data['teamMembers']) {
              if (data['teamMembers'][i].in_game_id === null) {
                return {
                  code: false,
                  text: 'Anggota tim kamu ada yang belum memasukkan in game id'
                }
              }
            }
          }
        }
      }
      return {
        code: true,
        message: 'Registrasi valid'
      }
    }
  }
}
</script>
<style lang="scss">
legend {
  color: #ccc;
}

label {
  color: #ccc;
}

.img-dota2 {
  width: 100%;
  height: 150px;
  background-image: url("../../static/img/register/dota2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200px;
  border: 1px solid #828282;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    background-size: 100px;
  }
}

.img-pubg {
  width: 100%;
  height: 150px;
  background-image: url("../../static/img/register/pubg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200px;
  border: 1px solid #828282;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    background-size: 100px;
  }
}

.img-dota2:hover {
  width: 100%;
  height: 150px;
  background-image: url("../../static/img/register/dota2-active.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200px;
  border: 2px solid #c6232e;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    background-size: 100px;
  }
}

.img-pubg:hover {
  width: 100%;
  height: 150px;
  background-image: url("../../static/img/register/pubg-active.png");
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #ecb63e;
  border-radius: 5px;
  background-size: 200px;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    background-size: 100px;
  }
}

.img-dota2-active {
  width: 100%;
  height: 150px;
  background-image: url("../../static/img/register/dota2-active.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200px;
  border: 2px solid #c6232e;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    background-size: 100px;
  }
}

.img-pubg-active {
  width: 100%;
  height: 150px;
  background-image: url("../../static/img/register/pubg-active.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200px;
  border: 2px solid #ecb63e;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    background-size: 100px;
  }
}

.button-send {
  background-color: #c6232e !important;
  color: white !important;
  border-radius: 30px;
}
.list-group-item {
  background: #303539;
  color: white;
  margin-bottom: 5px;
  border-radius: 10px;
}
.list-group-item--avatar {
  align-items: center;
}
.list-group-item--avatar img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}
.list-group-item--title {
  flex-direction: column;
  margin-left: 15px;
}
.list-group-item--title p {
  margin-bottom: 0;
}
.bg-textbox {
  background-color: #303539 !important;
  border: 1px solid #303539 !important;
}

/* Small devices (landscape phones, 320px and up) */
@media (min-width: 320px) {
  .p-register {
    padding: 5px;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 450px) {
  .p-register {
    padding: 5px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .p-register {
    padding: 10px 20px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .p-register {
    padding: 20px 40px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1264px) {
  .p-register {
    padding: 20px 60px;
  }
}

/* Extra large devices (large desktops, 1600px and up) */
@media (min-width: 1600px) {
  .p-register {
    padding: 20px 60px;
  }
}
</style>