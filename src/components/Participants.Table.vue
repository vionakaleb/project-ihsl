<template>
  <div>
    <b-table
      show-empty
      bordered
      hover
      dark
      responsive
      :items="table_data"
      :fields="fields"
      head-variant
      item-text-variant="white"
      class="font-gray v-aligntable"
      style="min-height:50px;"
      tbody-class="text-16 text-gray bg-gray"
      thead-class="text-16 light-bold text-white bg-black"
      tdClass="v-aligntable"
    >
      <template slot="No" slot-scope="row">{{ (row.index + 1) + (teams.current_page-1) * 10 }}</template>

      <template slot="Nama Sekolah" slot-scope="row">
        <div class="text-truncate">{{ row.item.school_name }}</div>
      </template>

      <template slot="Region" slot-scope="row">{{ row.item.city }}</template>

      <template slot="Jenis Game" slot-scope="row">{{ normalizeGame(row.item.choosen_game) }}</template>
    </b-table>
    <div class="row-tambahan">*Jumlah sekolah yang belum diverifikasi : {{ pending_data }}</div>

    <vue-pagination :pagination="participants" :offset="9" class="float-right mb-5"></vue-pagination>
  </div>
</template>

<style lang="scss">
.row-tambahan {
  margin: -16px auto;
  padding-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #32383e;
  height: auto;
  border-radius: 0 0 10px 10px;
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
</style>

<script>
import VuePagination from './Pagination.vue'
import Vue from 'vue'
import VueBus from 'vue-bus'
import axios from 'axios'
Vue.use(VueBus)
export default {
  props: {
    season: {
      type: Number,
      default: 1
    }
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
  },
  beforeCreate () {},
  components: {
    VuePagination
  },
  mounted () {
    this.$bus.on('update_current_page', this.getUpdatePage)
    this.getParticipant()
    this.getPendingParticipant()
  },
  methods: {
    getUpdatePage (updatedCurrentPage) {
      this.teams.current_page = updatedCurrentPage
      this.getParticipant()
    },
    getParticipant () {
      axios
        .get(
          process.env.API_URL +
            '/api/v1/participant?season=' +
            this.season +
            '&page=' +
            this.teams.current_page
        )
        .then(response => {
          if (response.data.status) {
            this.table_data = response.data.data.data
            this.participants = response.data.data
            this.team.from = response.data.data.from
          } else {
            this.table_data = []
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getPendingParticipant () {
      axios
        .get(process.env.API_URL + '/api/v1/pending?season=' + this.season)
        .then(response => {
          if (response.data.status === 200) {
            this.pending_data = response.data.data.length
          } else {
            this.pending_data = 0
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    normalizeGame (games) {
      var arrayGames = games.split(';')
      // if(typeof (arrayGames[1]) != 'undefined'){

      // }
      // var result = arrayGames.join(', ')
      var result = ''
      // return result.charAt(0).toUpperCase() + result.slice(1)
      if (arrayGames.length > 1) {
        arrayGames.forEach((game, index) => {
          if (index === 0) {
            if (game === 'dota') {
              result = result + 'Dota 2, '
            } else if (game === 'ml') {
              result = result + 'MLBB, '
            }
          } else {
            if (game === 'dota') {
              result = result + 'Dota 2'
            } else if (game === 'ml') {
              result = result + 'MLBB'
            }
          }
        })
      } else {
        arrayGames.forEach((game, index) => {
          if (game === 'dota') {
            result = result + 'Dota 2'
          } else if (game === 'ml') {
            result = result + 'MLBB'
          }
        })
      }
      return result
    }
  }
}
</script>