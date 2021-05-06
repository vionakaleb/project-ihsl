<template>
  <div class="bg-img text-center" style="padding: 60px;">
    <div class="row" style="margin-bottom: 30px;">
      <div class="col-md-12 text-center title-all">
        <span style="font-size: 62px; color: white;" class="mobile-white">Contact</span>
        <span class="boldProx mobile-yellow" style="font-size: 62px; color: #c6232e;">&nbsp;Us</span>
      </div>
    </div>
    <div
      class="row width-desktop"
      style="margin: auto; background-color: #0b0f13; padding: 30px; border-radius: 10px;"
    >
      <form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="row row-mobile" style="width: 100%;">
          <div class="col-md-2 text-left" style="margin-bottom: 10px;">
            <span style="font-size: 16px; color: #7d7d7d">Nama Anda</span>
          </div>
          <div class="col-md-10 text-left" style="margin-bottom: 10px;">
            <input type="text" v-model="form.namaKontak" required />
          </div>
          <div class="col-md-2 text-left" style="margin-bottom: 10px;">
            <span style="font-size: 16px; color: #7d7d7d">Subyek</span>
          </div>
          <div class="col-md-10 text-left" style="margin-bottom: 10px;">
            <input type="text" v-model="form.subjekPesan" />
          </div>
          <div class="col-md-2 text-left" style="margin-bottom: 10px;">
            <span style="font-size: 16px; color: #7d7d7d">Alamat Email</span>
          </div>
          <div class="col-md-10 text-left" style="margin-bottom: 10px;">
            <input type="email" v-model="form.emailKontak" required />
          </div>
          <div class="col-md-2 text-left" style="margin-bottom: 10px;">
            <span style="font-size: 16px; color: #7d7d7d">Nama Sekolah</span>
          </div>
          <div class="col-md-10 text-left" style="margin-bottom: 10px;">
            <input type="text" v-model="form.namaSekolah" required />
          </div>
          <div class="col-md-2 text-left" style="margin-bottom: 10px;">
            <span style="font-size: 16px; color: #7d7d7d">Pesan Anda</span>
          </div>
          <div class="col-md-10 text-left" style="margin-bottom: 10px;">
            <textarea rows="5" type="text" v-model="form.isiPesan" required></textarea>
          </div>
        </div>
        <div class="btn-space">
          <button
            @click="onSubmit"
            class="btn-send"
            v-if="!btnSubmit"
            :disabled="!form.namaKontak || !form.subjekPesan || !form.emailKontak || !form.namaSekolah || !form.isiPesan"
          >Send Message</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputImage from '@/components/Register.InputImage'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import Vue from 'vue'

Vue.use(VueSweetalert2)

export default {
  components: {
    'input-image': InputImage
  },
  data () {
    return {
      btnSubmit: false,
      form: {
        namaKontak: '',
        namaSekolah: '',
        emailKontak: '',
        subjekPesan: '',
        isiPesan: ''
      },
      show: true
    }
  },
  methods: {
    validEmail (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    onSubmit (evt) {
      evt.preventDefault()
      this.btnSubmit = true

      let data = {
        namaKontak: this.form.namaKontak,
        namaSekolah: this.form.namaSekolah,
        emailKontak: this.form.emailKontak,
        subjekPesan: this.form.subjekPesan,
        isiPesan: this.form.isiPesan
      }

      if (!this.validEmail(this.form.emailKontak)) {
        this.btnSubmit = false
        this.$swal({
          type: 'error',
          title: 'Email tidak valid',
          html: 'Mohon isi data email yang benar'
        })
      } else {
        axios.post(process.env.API_URL + '/api/v1/message', data).then(
          response => {
            if (response.data.status) {
              this.$swal('Message Sent Successfully', '', 'success')
              this.$router.push('/home')
              this.form = []
            } else {
              this.btnSubmit = false
              this.$swal({
                type: 'error',
                title: 'Failed to Sent Message',
                html: response.data.errors
              })
            }
          },
          response => {
            this.$swal({
              type: 'error',
              title: 'Failed to Operate',
              text: 'Please contact our team via Phone'
            })
            this.btnSubmit = false
          }
        )
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
    }
  }
}
</script>

<style lang="scss">
.width-desktop {
  @media only screen and (min-width: 1366px) {
    width: 1100px;
  }
}

.btn-space {
  width: 100%;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
    width: 45vmin;
  }
}

.row-mobile {
  @media only screen and (max-width: 1024px) {
    width: 100% !important;
  }
}
.btn-send {
  cursor: pointer;
  border: 0px;
  background-color: #c6232e;
  color: white !important;
  border-radius: 30px;
  width: 10vw;
  height: 3vw;
  line-height: 3vw;
  float: right;
  margin-right: 2.3vw;
  font-size: 1vw;

  @media only screen and (max-width: 1024px) {
    width: 40vmin;
    height: 8vmin;
    line-height: 8vmin;
    margin: 0 auto;
    font-size: 4vmin;
  }
}

.btn-send:disabled {
  cursor: default;
  border: 0px;
  background-color: #303539;
  color: white !important;
  border-radius: 30px;
  width: 10vw;
  height: 3vw;
  line-height: 3vw;
  float: right;
  margin-right: 2.3vw;
  font-size: 1vw;

  @media only screen and (max-width: 1024px) {
    width: 40vmin;
    height: 8vmin;
    line-height: 8vmin;
    margin: 0 auto;
    font-size: 4vmin;
  }
}

input[type="text"],
[type="email"] {
  padding: 5px;
  width: 380px;
  background-color: #303539;
  border: 0px;
  border-radius: 5px;
  color: white;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
}

textarea {
  width: 100%;
  color: white;
  background-color: #303539;
  border: 0px;
  border-radius: 5px;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
}

.mobile-white {
  @media only screen and (max-width: 1024px) {
    font-size: 40px !important;
  }
}

.mobile-yellow {
  @media only screen and (max-width: 1024px) {
    font-size: 35px !important;
  }
}
</style>