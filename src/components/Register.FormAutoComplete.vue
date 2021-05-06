<template>
  <div class="text-gray input-group prefix text-16 mb-0">
    <span class="input-group-addon">
      <i class="fa fa-search"></i>
    </span>
    <input
      v-if="status"
      v-model="string"
      type="text"
      class="text-white text-16 bg-textbox border-radius form-control form-control-sm"
      size="sm"
      placeholder="Cari team kamu disini"
    />
    <div v-else class="text-white bg-textbox border-radius form-control form-control-sm">
      {{string}}&nbsp;
      <i
        class="fa fa-trash"
        style="color: red; cursor: pointer;"
        @click.prevent="clear()"
      ></i>
    </div>
    <ul class="list-group options mar-top-40" style="width: 100%;" v-if="statusInput == 2">
      <li class="list-group-item">
        <slot>Sedang Melakukan Pencarian ..</slot>
      </li>
    </ul>
    <ul class="list-group options mar-top-40" style="width: 100%;" v-if="isShow && list.length > 0">
      <li class="list-group-item" v-for="l in list" @click="select(l)" :key="l.id">
        <slot :list="l">&nbsp;{{l.title}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
import VueSweetalert2 from 'vue-sweetalert2'
import Vue from 'vue'
import axios from 'axios'

Vue.use(VueSweetalert2)

export default {
  model: {
    prop: 'value',
    event: 'select'
  },
  props: {
    reqUrl: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      string: null,
      list: [],
      isShow: false,
      status: true,
      timeout: null,
      statusInput: 1
    }
  },
  methods: {
    select (selected) {
      this.clear()
      this.status = false
      this.string = selected.title
      this.$emit('select', selected)
    },
    clear () {
      this.string = ''
      this.list = []
      this.isShow = false
      this.status = true
      this.$emit('select', null)
    }
  },
  watch: {
    string () {
      this.isShow = false
      this.list = []
      this.statusInput = 2
      console.log(this.statusInput)
      if (this.status && (this.string !== '' || this.string !== null)) {
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
          // search team
          axios
            .get(process.env.API_URL + this.reqUrl + '&search=' + this.string)
            .then(response => {
              this.isShow = true
              this.list = response.data.data
              console.log(this.list)
              this.statusInput = 3
            })
        }, 1500)
      } else {
        this.isShow = false
        this.list = []
        this.statusInput = 1
      }
    }
  }
}
</script>
<style scoped>
.d-flex {
  display: flex;
  flex-wrap: wrap;
}

.d-flex-item {
  width: 300px;
  padding: 10px;
  border: 1px solid #eaeaea;
  margin: 0 20px 20px 0;
}

.form-autocomplete {
  padding: 10px;
  background: #eaeaea;
}

.input-group-addon {
  padding-top: 6px;
  text-align: center;
  background-color: #303539;
  border-radius: 5px 0px 0px 5px;
  width: 10%;
}

input {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
  display: table-cell;
  padding: 6px 12px;
  border: 1px solid #ccc;
  margin: 0;
}

ul {
  width: 200px;
  padding-left: 0;
}

ul > li {
  cursor: pointer;
  list-style: none;
  padding: 5px;
  margin-bottom: 5px;
  background: #dedede;
}

ul > li:hover {
  background: #696e72;
  color: ccc;
}

ul > li.disabled,
ul > li.disabled:hover {
  background: #eaeaea;
  color: #a7a7a7;
  cursor: inherit;
}

ul > li.disabled .flag-icon {
  opacity: 0.5;
}

.list-group {
  position: absolute;
  z-index: 2;
}

.list-group-item {
  background: #4d5257;
  color: #ccc;
  margin-bottom: 0px;
  border: 0px;
  border-radius: 0px;
}

.list-group-item:last-child {
  background: #4d5257;
  color: #ccc;
  margin-bottom: 0px;
  border-radius: 0px 0px 5px 5px;
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
</style>
