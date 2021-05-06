<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <b-container fluid class="bg-img responsive img-responsive pt-3 pb-5">
    <div class="news-w center-content mt-5 mb-5 col-md-12 text-center">
      <span class="title-all" style="color: white;">NEWS&nbsp;</span>
    </div>

    <div
      class="news-w text-12 text-gray bg-gray center-content"
      style="margin-top:-8px; border-radius: 10px; padding: 35px 25px 20px 25px;"
    >
      <div class="clearfix text-18">
        <div class="float-left">
          <ul class="pagination">
            <li>
              <router-link to="/news">
                <span aria-hidden="true" class="text-red">« Back to News Update</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-100 mb-5">
        <h3 class="text-white text-left light-bold text-uppercase">{{ news_data.title }}</h3>
        <h6
          class="text-left mb-4"
          style="margin-top:-8px; color:#34373c;"
        >{{ news_data.created_at }} - IHSL ID</h6>

        <div class="text-justify text-gray text-12 mt-3">
          <img class="w-100 mb-3" :src="news_data.avatar" />
          <br />

          <div v-html="news_data.content"></div>

          <a href="/news" v-on:click class="light-bold text-14 text-red">
            <u>Back to News Update</u>
          </a>
        </div>
      </div>
    </div>
  </b-container>
</template>

<style>
a.active {
  color: #ffaa03;
}
a:hover {
  color: #e56a73;
}
a:onclick {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;
}
</style>

<script>
import VuePagination from '../../components/Pagination.vue'
import Vue from 'vue'
import VueBus from 'vue-bus'
import axios from 'axios'

Vue.use(VueBus)

export default {
  data () {
    return {
      news: {
        author: 'IHSL ID'
      },
      pagination: {
        current_page: 1,
        update_current_page: 0
      },
      news_data: []
    }
  },
  beforeCreate () {},
  components: {
    VuePagination
  },
  mounted () {
    // this.getTournamentMatches()
    this.$bus.on('update_current_page', this.getUpdatePage)
    this.getUpdatePage()
    this.getDetailNews()
  },
  methods: {
    getUpdatePage (updatedCurrentPage) {
      this.pagination.update_current_page = updatedCurrentPage
      this.getDetailNews()
    },
    getDetailNews () {
      var data = {
        news_id: atob(atob(atob(this.$route.params.id)))
      }
      axios
        .post(process.env.API_URL + '/api/v1/news-detail', data)
        .then(response => {
          if (response.data.status) {
            this.news_data = response.data.data
            console.log(this.news_data)
          } else {
            this.news_data = []
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    changePage (page) {
      this.pagination.current_page = page
      // alert(this.pagination.current_page)
      this.$emit('paginate', this.pagination.current_page)
      this.$bus.emit('update_current_page', this.pagination.current_page)
    }
  }
}
</script>