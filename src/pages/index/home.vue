<template>
  <div>
    <!-- BANNER -->
    <div class="sec-banner">
      <img class="img-banner" src="../../assets/img/home/banner.jpg" />
    </div>
    <!-- BANNER -->

    <!-- JOIN TOURNAMENT -->
    <div class="bg-join-tournament">
      <div class="pad-x-30 pad-y-30 wrap-1300">
        <div class="row sec-join-tournament">
          <div class="for-mobile">
            <router-link to="/register">
              <button
                class="d-btn--white size-btn-join-tournament boldProx"
                style="font-size: 25px;"
                v-bind:disabled="btnJoinDisable"
              >Join Tournament</button>
            </router-link>
            <div class="d-flex flex-row justify-content-center align-content-center">
              <a href="/static/Proposal JDID HSL 2019 Season2.pptx" target="_blank">
                <button
                  class="d-btn--red size-btn-join-proposal boldProx"
                  style="font-size: 13px; color: white; margin-right: 20px;"
                >Download Proposal</button>
              </a>
              <a href="/static/Surat Izin Sekolah Season 2.pdf" target="_blank">
                <button
                  class="d-btn--red size-btn-join-proposal boldProx"
                  style="font-size: 13px; color: white;"
                >Download Surat Izin</button>
              </a>
            </div>
          </div>
          <div>
            <iframe
              class="thumbnail-img"
              width="690"
              height="370"
              src="https://www.youtube.com/embed/videoseries?list=PL48Sj3Y4lVH8XtEmr2Il1R9P-CMJjVyf1"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <!-- <img class="thumbnail-img" src="../../assets/video/introducing.png" width="686px" /> -->
          </div>
          <div class="col-md-5 text-center mar-auto">
            <div class="d-flex flex-column justify-content-center">
              <span class="boldProx" style="color: white; font-size: 40px;">Total Hadiah 1.2 Miliar</span>
              <span style="font-size: 20px;">
                Bergabunglah dalam Liga Esports antar
                <br />SMA terbesar di Indonesia
              </span>
              <div class="for-desktop">
                <router-link to="/register">
                  <button
                    class="d-btn--white size-btn-join-tournament boldProx"
                    style="font-size: 25px;"
                    v-bind:disabled="btnJoinDisable"
                  >Join Tournament</button>
                </router-link>
                <div class="d-flex flex-row justify-content-center align-content-center">
                  <a href="/static/Proposal JDID HSL 2019 Season2.pptx" target="_blank">
                    <button
                      class="d-btn--red size-btn-join-proposal boldProx"
                      style="font-size: 13px; color: white; margin-right: 20px;"
                    >Download Proposal</button>
                  </a>
                  <a href="/static/Surat Izin Sekolah Season 2.pdf" target="_blank">
                    <button
                      class="d-btn--red size-btn-join-proposal boldProx"
                      style="font-size: 13px; color: white;"
                    >Download Surat Izin</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- JOIN TOURNAMENT -->

    <!-- SCHEDULE -->
    <div class="bg-schedule">
      <div class="pad-y-60 pad-x-30 wrap-1300">
        <div class="row mar-bot-30">
          <div class="col-md-12 text-center">
            <span class="title-all" style="color: white;">Jadwal&nbsp;</span>
            <span class="boldProx title-all" style="color: #c6232e;">Acara</span>
          </div>
        </div>
        <div style="border-bottom: 5px solid #c6232e; width: 85%; margin: auto;"></div>
        <div class="row mar-auto mar-top-20">
          <div class="col-md-12 text-center">
            <div class="for-desktop">
              <img
                style="max-width: 100%; height: auto;"
                src="../../assets/img/home/schedule-desktop.png"
              />
            </div>
            <div class="bg-schedule-mobile">
              <img
                style="max-width: 100%; height: auto;"
                src="../../assets/img/home/schedule-mobile.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SCHEDULE -->

    <!-- SEARCH HERE -->
    <div class="bg-search-here">
      <a href="http://www.jd.id/campaign/one-stop-gaming-gear21169.html" target="_blank">
        <img src="../../assets/img/home/bg-search.jpg" alt="banne-diskon" class="img-banner" />
      </a>
      <!-- <div class="pad-y-60 pad-x-30 wrap-1300">
        <div class="d-flex flex-column">
          <span
            class="mar-auto mar-bot-40 boldProx for-desktop"
            style="font-size: 42px; color: white;"
          >Biar menang, pake equip gaming ORI Doong.</span>
          <span
            class="mar-auto mar-bot-40 boldProx for-mobile"
            style="font-size: 25px; color: white; text-align: center; line-height: 10vmin;"
          >Biar menang, pake equip gaming ORI Doong.</span>
          <span
            class="mar-auto mar-bot-20 text-center for-desktop"
            style="font-size: 21px; color: white;"
          >
            Cari handphone dan equip ORI yang
            <br />ngedukung kamu buat ngegame yang lebih oke ?
          </span>
          <span
            class="mar-auto mar-bot-20 text-center for-mobile"
            style="font-size: 13px; color: white;"
          >
            Cari handphone dan equip ORI yang
            <br />ngedukung kamu buat ngegame yang lebih oke ?
          </span>
          <button
            class="d-btn--cari size-btn-join-tournament mar-auto boldProx"
            style="font-size: 25px;"
            onclick="window.location.href='https://www.jd.id/campaign/one-stop-gaming-shop.html'"
          >Cari Disini</button>
        </div>
      </div>-->
    </div>
    <!-- SEARCH HERE -->

    <!-- BENEFIT -->
    <div class="bg-gray">
      <div class="pad-y-60 pad-x-30 wrap-1300">
        <div class="row mar-bot-30">
          <div class="col-md-12 text-center">
            <span class="title-all" style="color: white;">School & Player&nbsp;</span>
            <span class="boldProx title-all" style="color: #c6232e;">Benefit</span>
          </div>
        </div>
        <div style="border-bottom: 5px solid #c6232e; width: 85%; margin: auto;"></div>
        <div class="row mar-auto mar-top-60">
          <div class="col-md-6 sec-img-benefit-right margin-mobile">
            <img class="img-size" src="../../assets/img/home/benefit-school.png" />
          </div>
          <div class="col-md-6 sec-img-benefit-left margin-mobile">
            <img class="img-size" src="../../assets/img/home/benefit-student.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- BENEFIT -->

    <!-- PRIZE POOL -->
    <div class="bg-gray">
      <div class="pad-y-60 pad-x-30 wrap-1300">
        <div class="row mar-bot-40">
          <div class="col-md-12 text-center">
            <span class="title-all" style="color: white;">Prize&nbsp;</span>
            <span class="boldProx title-all" style="color: #c6232e;">Pool</span>
            <br />
            <span class="for-desktop" style="font-size: 42px; line-height: 0.5">Season 2 Seri A 2019</span>
            <span class="for-mobile" style="font-size: 25px; line-height: 0.5">Season 2 Seri A 2019</span>
          </div>
        </div>
        <div style="border-bottom: 5px solid #c6232e; width: 85%; margin: auto;"></div>
        <div class="row mar-auto mar-top-60 for-flex">
          <div class="col-md-6 text-right">
            <img style="max-width: 100%; height: auto;" src="../../assets/img/home/prize-dota2.png" />
          </div>
          <div class="col-md-6 text-left">
            <img style="max-width: 100%; height: auto;" src="../../assets/img/home/prize-pubg.png" />
          </div>
        </div>
        <div class="row mar-auto mar-top-60 for-mobile">
          <div class="col-md-6 text-center">
            <img style="max-width: 100%; height: auto;" src="../../assets/img/home/prize-dota2.png" />
          </div>
          <div class="col-md-6 text-center">
            <img style="max-width: 100%; height: auto;" src="../../assets/img/home/prize-pubg.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- PRIZE POOL -->

    <!-- I-CAFE MEMBERSHIP -->
    <div class="bg-gray">
      <div class="pad-y-60 pad-x-30 wrap-1300">
        <div class="row mar-bot-40">
          <div class="col-md-12 text-center mar-bot-20">
            <span class="title-all" style="color: white;">iCafe&nbsp;</span>
            <span class="boldProx title-all" style="color: #c6232e;">Partner</span>
          </div>
          <div class="col-md-12 text-center">
            <img class="tnc-img" src="../../assets/img/home/tnc-indo.png" />
          </div>
        </div>
        <div style="border-bottom: 5px solid #c6232e; width: 85%; margin: auto;"></div>
        <div class="row mar-auto mar-top-60 for-flex">
          <div class="col-md-12 text-center">
            <img
              style="max-width: 800px; height: auto;"
              src="../../assets/img/home/icafe-desktop.png"
            />
          </div>
        </div>
        <div class="row mar-auto mar-top-60 for-mobile">
          <div class="col-md-6 text-right">
            <img
              style="max-width: 100%; height: auto;"
              src="../../assets/img/home/icafe-mobile.png"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- I-CAFE MEMBERSHIP -->

    <!-- GAMERS UNITE -->
    <div class="bg-gamer-unite">
      <div class="pad-x-30 pad-y-60 wrap-1300">
        <div class="row sec-gamer-unite">
          <div class="col-md-5 text-center mar-auto">
            <!-- SLOT EMPTY -->
          </div>
          <div class="col-md-7 text-center mar-auto">
            <div class="d-flex flex-column justify-content-center">
              <div class="for-desktop">
                <span class="boldProx" style="color: white; font-size: 62px;">
                  Gamers
                  <span class="boldProx" style="color: #c6232e; font-size: 62px;">Unite</span>
                </span>
              </div>
              <div class="for-mobile">
                <span class="boldProx" style="color: white; font-size: 32px;">
                  Gamers
                  <span class="boldProx" style="color: #c6232e; font-size: 32px;">Unite</span>
                </span>
              </div>
              <span
                class="for-desktop"
                style="font-size: 20px; color: #ccc;"
              >Ayo daftarkan sekolahmu. Pendaftaran paling lambat tanggal</span>
              <span
                class="for-mobile"
                style="font-size: 18px; color: #ccc;"
              >Ayo daftarkan sekolahmu. Pendaftaran paling lambat tanggal</span>
              <span style="font-size: 27px; color: white;">14 September 2019</span>
              <div>
                <router-link to="/register">
                  <button
                    class="d-btn--white size-btn-gamer-unite boldProx"
                    style="font-size: 25px;"
                    v-bind:disabled="btnJoinDisable"
                  >Join Tournament</button>
                </router-link>
                <div class="d-flex flex-row justify-content-center align-content-center">
                  <a href="/static/Proposal JDID HSL 2019 Season2.pptx" target="_blank">
                    <button
                      class="d-btn--red size-btn-join-download boldProx"
                      style="color: white; margin-right: 20px;"
                    >Download Proposal</button>
                  </a>
                  <a href="/static/Surat Izin Sekolah Season 2.pdf" target="_blank">
                    <button
                      class="d-btn--red size-btn-join-download boldProx"
                      style="color: white;"
                    >Download Surat Izin</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- GAMERS UNITE -->

    <!-- SPONSORED -->
    <div class="bg-gray">
      <div class="pad-y-80 pad-x-30 wrap-1300">
        <div class="row">
          <div class="sec-sponsored">
            <img class="sponsored" src="../../assets/img/home/sponsored.png" />
            <img class="sponsored" src="../../assets/img/home/media-partner.png" />
            <img class="sponsored" src="../../assets/img/home/organizedby.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- SPONSORED -->
  </div>
</template>

<style lang="scss">
// GENERAL
.for-flex {
  display: flex;
  @media only screen and (max-width: 960px) {
    display: none;
  }
}

.for-desktop {
  display: block;
  @media only screen and (max-width: 960px) {
    display: none;
  }
}

.for-mobile {
  display: none;
  @media only screen and (max-width: 960px) {
    display: block;
  }
}

p {
  @media only screen and (max-width: 1024px) {
    margin-left: 10px;
    margin-block-end: 0;
    font-size: 2.4vmin;
    margin-block-start: 0;
  }
}

.wrap-1300 {
  max-width: 1300px;
  margin: auto;
}
// GENERAL

// SECTION BANNER
.sec-banner {
  width: 100%;
}

.img-banner {
  object-fit: cover;
  width: 100%;
  height: auto;
}
// SECTION BANNER

// SECTION JOIN TOURNAMENT
.bg-join-tournament {
  background: url("../../assets/img/home/bg-join-tournament.png");
  background-color: #141a20;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: top;
  @media only screen and (max-width: 960px) {
    background-position-x: center;
  }
}

.thumbnail-img {
  border-radius: 20px;
  box-shadow: #808080 0px 0px 12px 0px;
  @media only screen and (max-width: 960px) {
    width: 75vmin;
  }
}

.sec-join-tournament {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  margin-bottom: 10px;
}

.size-btn-join-tournament {
  font-size: 20px;
  width: 378px;
  height: 80px;
  margin-top: 20px;
}

.size-btn-join-proposal {
  width: 180px;
  height: 38px;
  margin-top: 20px;
  @media only screen and (max-width: 960px) {
    width: 125px;
    font-size: 9px !important;
    margin-bottom: 30px !important;
  }
}

@media only screen and (max-width: 1300px) {
  .sec-join-tournament {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}

@media only screen and (max-width: 950px) {
  .size-btn-join-tournament {
    font-size: 20px;
    width: 265px;
    height: 50px;
    margin-top: 20px;
  }
}
// SECTION JOIN TOURNAMENT

// SECTION SCHEDULE
.bg-schedule {
  background: url("../../assets/img/home/bg-schedule.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
}

.bg-schedule-mobile {
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
}
// SECTION SCHEDULE

// SECTION SEARCH HERE
.bg-search-here {
  // background-image: url("");
}
.img-banner {
  width: 100%;
}
// SECTION SEARCH HERE

// SECTION BENEFIT
.bg-gray {
  background-color: #0b0f13;
}

.sec-img-benefit-right {
  text-align: right;

  @media only screen and (max-width: 960px) {
    text-align: center;
  }
}

.sec-img-benefit-left {
  text-align: left;

  @media only screen and (max-width: 960px) {
    text-align: center;
  }
}

.img-size {
  width: 380px;
  height: auto;

  @media only screen and (max-width: 480px) {
    width: 270px;
    height: auto;
  }
  @media only screen and (max-width: 320px) {
    width: 240px;
  }
}

.margin-mobile {
  @media only screen and (max-width: 950px) {
    margin-bottom: 30px;
  }
}
// SECTION BENEFIT

// SECTION ICAFE
.tnc-img {
  width: 378px;

  @media only screen and (max-width: 480px) {
    width: 200px;
  }
}
// SECTION ICAFE

// SECTION UNITE
.bg-gamer-unite {
  background: url("../../assets/img/home/bg-gamers-unite.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
  @media only screen and (max-width: 960px) {
    background-position-x: center;
  }
}

.sec-gamer-unite {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  margin-bottom: 10px;
}

.size-btn-gamer-unite {
  font-size: 20px;
  width: 580px;
  height: 80px;
  margin-top: 20px;
}

.size-btn-join-download {
  font-size: 20px;
  width: 280px;
  height: 60px;
  margin-top: 20px;
  @media only screen and (max-width: 950px) {
    font-size: 9px;
    width: 37vmin;
    height: 35px;
  }
}

@media only screen and (max-width: 1300px) {
  .sec-gamer-unite {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}

@media only screen and (max-width: 950px) {
  .size-btn-gamer-unite {
    font-size: 20px !important;
    width: 78vmin;
    height: 50px;
    margin-top: 20px;
  }
}
// SECTION UNITE

// SPONSORED
.sec-sponsored {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: auto;

  @media only screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: auto;
  }
}

.sponsored {
  @media only screen and (max-width: 960px) {
    width: 45vmin;
  }
}
// SPONSORED
</style>

<script>
import HomeBanner from '@/components/Home.Banner'
import HomeModal from '@/components/Home.Modal'
import Vue from 'vue'
import VueBus from 'vue-bus'

import bContainer from 'bootstrap-vue/es/components/layout/container'

import { Layout } from 'bootstrap-vue/es/components'
Vue.use(VueBus)
Vue.component('b-container', bContainer)
Vue.use(Layout)

export default {
  name: 'home',
  data () {
    return {
      modal: false,
      btnJoinDisable: true
    }
  },
  components: {
    HomeBanner,
    HomeModal
  },
  mounted () {
    this.openModal()
    this.btnJoinDisable = false

    if (new Date().getTime() > 1568480401000) {
      this.btnJoinDisable = true
    } else {
      this.btnJoinDisable = false
    }
  },
  methods: {
    openModal () {
      this.modal = true
    }
  }
}
</script>