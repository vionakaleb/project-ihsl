<template>
  <div style="float: none !important; margin: 35px auto; width: fit-content">
    <ul class="pagination bg-gray">
      <li v-if="pagination.current_page > 1">
        <a
          href="javascript:void(0)"
          aria-label="Previous"
          v-on:click.prevent="changePage(pagination.current_page - 1)"
          class="text-22 text-center px-2"
        >
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li v-for="page in pagesNumber">
        <a
          href="javascript:void(0)"
          v-on:click.prevent="changePage(page)"
          class="text-22 text-center px-2"
          :class="page == pagination.current_page ? 'active': ''"
        >{{ page }}</a>
      </li>
      <li v-if="pagination.current_page < pagination.last_page">
        <a
          href="javascript:void(0)"
          aria-label="Next"
          v-on:click.prevent="changePage(pagination.current_page + 1)"
          class="text-22 text-center px-2"
        >
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import VueBus from 'vue-bus'

Vue.use(VueBus)

export default {
  props: {
    pagination: {
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      default: 9
    }
  },
  computed: {
    pagesNumber () {
      if (!this.pagination.to) {
        return []
      }
      let from = this.pagination.current_page - this.offset
      if (from < 1) {
        from = 1
      }
      let to = from + this.offset * 1
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page
      }
      let pagesArray = []
      for (let page = from; page <= to; page++) {
        pagesArray.push(page)
      }
      return pagesArray
    }
  },
  methods: {
    changePage (page) {
      this.pagination.current_page = page
      // alert(this.pagination.current_page)
      this.$emit('paginate', this.pagination.current_page)
      this.$bus.emit('update_current_page', this.pagination.current_page)
    }
  }
}
</script>

<style>
a.active {
  color: #c6232e;
}
a:hover {
  color: #c6232e;
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
