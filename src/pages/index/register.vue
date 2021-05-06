<template>
  <div class="bg-img responsive img-responsive pt-3 pb-5">
    <b-container fluid>
      <section class="w-100 text-center mb-md-0" align="center">
        <div class="news-w center-content mt-5 mb-5 col-md-12 text-center">
          <span style="font-size: 62px; color: white;" class="mobile-white">Registration</span>
          <span class="boldProx mobile-yellow" style="font-size: 62px; color: #c6232e;">&nbsp;Form</span>
        </div>
        <RegisterForm class="mb-0"></RegisterForm>
      </section>
    </b-container>

    <RegisterModal :registermodal="modal"></RegisterModal>
  </div>
</template>

<script>
import RegisterForm from '@/components/Register.Form'
import RegisterModal from '@/components/Register.Modal'
import Vue from 'vue'
import VueBus from 'vue-bus'

Vue.use(VueBus)

export default {
  name: 'register',
  data () {
    return {
      modal: false
    }
  },
  components: {
    RegisterForm,
    RegisterModal
  },
  mounted () {
    // DEV
    this.openModal()

    // PRODUCTION
    if (new Date().getTime() > 1568480401000) {
      this.$router.push('/home')
    } else {
      this.openModal()
    }
  },
  methods: {
    openModal () {
      this.modal = true
    }
  }
}
</script>

<style>
label {
  display: block;
  clear: both;
}
</style>