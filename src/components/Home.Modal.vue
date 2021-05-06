<template>
  <b-modal
  		 v-model="homemodal"
       size="lg"
       title="Info Penting"
       header-bg-variant="dark"
       header-text-variant="light"
       body-bg-variant="dark"
       body-text-variant="light"
       footer-bg-variant="dark"
       footer-text-variant="dark">
        <div class="w-100 text-14 text-gray pt-3" >
          <!-- <h4 class="text-center text-yellow"><strong>PENDAFTARAN TELAH DITUTUP</strong></h4>
          <p class="text-center">Bagi teman-teman yang telah terverifikasi. <b class="text-white">Dimohon untuk segera membuat akun, Team dan join Tournament</b> di website <a href="http://yamisok.com/" target="_blank"><u class="text-yellow font-italic">Yamisok</u></a>. Untuk panduan dan cara membuat Team dan Join Tournament, dapat dilihat pada link dibawah ini.</p>
       
       		<div class="align-content-center d-flex flex-wrap justify-content-center" style="max-width:100%; height:auto;">
              
            <b-button type="submit" size="sm" variant="secondary" class="w-30 button-100 button-center mt-2 mb-3 mx-2" style="background-color:#25272b; border-color:#828282;" href="https://yamisok.com/info/faq?id=cara-membuat-team-dan-bergabung-kedalam-team" target="_blank"><span class="text-white light-bold" style="line-height: 100%;">Tutorial Membuat Team</span></b-button>

            <b-button type="submit" size="sm" variant="secondary" class="w-30 button-100 button-center mt-2 mb-3 mx-2" style="background-color:#25272b; border-color:#828282;" href="https://yamisok.com/info/faq?id=syarat-mengikuti-tournament" target="_blank"><span class="text-white light-bold" style="line-height: 100%;">Tutorial Mengikuti Tournament</span></b-button>
     			</div><br> -->

     			<!-- <hr class="border-gray w-100"><br> -->

     			<p class="text-center">Pilih informasi Tournament yang ingin kamu lihat. Untuk statistik dapat dilihat di <a href="http://yamisok.com/" target="_blank"><u class="text-yellow font-italic">yamisok.com</u></a></p>

     			<div class="align-content-center d-flex flex-wrap justify-content-center pb-3" style="max-width:100%; height:auto;">

            <a href="https://yamisok.com/tournaments/indonesian-high-school-league-mobile-legend-qualifier" class="modal-ml center-content mb-3" target="_blank"></a>
            <a href="https://yamisok.com/tournaments/indonesian-high-school-league-mobile-legend-qualifier" class="modal-dota center-content mb-3" target="_blank"></a>
            
     			</div>

        </div>
   <div slot="modal-footer" class="w-100">
     <p class="float-left">Modal Footer Content</p>
     <b-btn size="sm" class="float-right" variant="primary" @click="homemodal=false">
       Close
     </b-btn>
   </div>
  </b-modal>
</template>

<style>
  
</style>

<script>
  export default {
    props: ['homemodal']
  }
</script>