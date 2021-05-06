<template>
  <div class="bg-img responsive img-responsive pt-3 pb-5">
    <b-container fluid class="pb-5">
      <div class="row mt-5" style="margin-bottom: 30px;">
        <div class="col-md-12 text-center title-all">
          <span style="font-size: 62px; color: white;" class="mobile-white">Verified</span>
          <span class="boldProx mobile-yellow" style="font-size: 62px; color: #c6232e;">&nbsp;School</span>
        </div>
      </div>
      <div class="terms-width participants-p center-content d-flex flex-row text-center">
        <div
          class="col-md-6 text-center"
          style="font-family: proximaBold; font-size: 26px; color: white;"
        >
          <a href="#" class="actived">2019</a>
        </div>
        <div
          class="col-md-6 text-center"
          style="font-family: proximaBold; font-size: 26px; color: white"
        >
          <router-link to="/participants/season1">
            <a href="#">2018</a>
          </router-link>
        </div>
      </div>
      <div class="terms-width participants-p center-content my-3 pt-2">
        <!-- <div class="terms-width participants-p center-content my-3 pt-2" v-if="table_data.length > 0" >  -->
        <b-tabs v-model="tabParticipants" pills class="w-100 mt-3 mb-3">
          <b-tab no-body active title-item-class="w-50 text-center">
            <template slot="title">
              <div class="nav-button py-1 text-white font-weight-bold">SEASON 2 QUALIFIER</div>
            </template>
            <ParticipantsTable :season="3" class="w-100 mt-3 mb-3"></ParticipantsTable>
          </b-tab>
          <b-tab no-body title-item-class="w-50 text-center">
            <template slot="title">
              <div class="nav-button bg-tab-active py-1 text-white font-weight-bold">SEASON 1</div>
            </template>
            <ParticipantsTable :season="2" class="w-100 mt-3 mb-3"></ParticipantsTable>
          </b-tab>
        </b-tabs>
      </div>
    </b-container>
  </div>
</template>

<style>
.actived {
  border-bottom: 4px solid rgb(198, 35, 46);
}

.col01 {
  width: 10%;
}
.col02 {
  width: 50%;
  overflow: hidden;
}
.col03 {
  width: 20%;
}
.col04 {
  width: 20%;
}

.nav-pills .nav-link.active,
.nav-pills .show {
  background-color: #c6232e;
  color: #fff;
  border-radius: 0px;
}

.nav-pills .nav-link {
  background-color: #242424;
  color: #757575;
  border-radius: 0px;
}
</style>

<script>
import ParticipantsTable from '../../components/Participants.Table.vue'
import Vue from 'vue'
import VueBus from 'vue-bus'
Vue.use(VueBus)
export default {
  components: {
    ParticipantsTable
  },
  data () {
    return {
      tabParticipants: 1,
      fields: {
        No: {
          class: 'col01'
        },
        'Nama Sekolah': {
          class: 'col02'
        },
        Region: {
          class: 'col03'
        },
        'Jenis Game': {
          class: 'col04'
        }
      },
      teams: {
        total: 0,
        per_page: 10,
        from: 1,
        to: 10,
        current_page: 1
      },
      offset: 10,
      table_data: [],
      participants: {},
      pending_data: 0,
      result: ''
    }
  }
}
</script>