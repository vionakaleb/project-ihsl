<template>
  <div id="yamisok" class="bg-page-dark">
    <!-- NEW -->
    <b-navbar
      class="navbar navbar-expand-lg navbar-dark"
      style="padding-top: 0.5rem; padding-bottom: 0.5rem; box-shadow: 0 0 6px black; background-color: #1c2329;"
      sticky
    >
      <b-navbar-brand class="home-nav-p" style="width:150px;" to="/home">
        <img
          alt="HSL JD.ID"
          class="home-nav-logo"
          width="80"
          height="80"
          src="/static/img/logo.png"
        />
      </b-navbar-brand>
      <div class="d-flex flex-grow-1">
        <div class="w-100 text-right">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        </div>
      </div>
      <b-collapse is-nav class="flex-grow-1 text-right" id="nav_collapse">
        <ul class="navbar-nav ml-auto flex-nowrap">
          <li class="nav-item text-center">
            <b-nav-item to="/home" class="nav-link" style="font-color: #808080">Home</b-nav-item>
          </li>

          <li class="d-none-lg text-center">
            <b-nav-item
              class="nav-link"
              style="font-color: #808080"
              to="/participants"
            >Season 1 - 2018</b-nav-item>
            <b-nav-item class="nav-link" style="font-color: #808080" to="#">Season 2 - 2019</b-nav-item>
          </li>

          <!-- <li class="nav-item-dropdown text-center">
            <b-nav-item-dropdown
              class="nav-link d-none-md"
              style="font-color: #808080;"
              text="Participants"
            >
              <b-nav-item
                class="nav-link"
                style="font-color: #808080"
                to="/participants/season1"
              >Season 1 - 2018</b-nav-item>
              <div style="border-bottom: 1px solid #343e48; width: 90%; margin: auto;"></div>
              <b-nav-item
                class="nav-link"
                style="font-color: #808080"
                to="/participants/season2"
              >Season 2 - 2019</b-nav-item>
            </b-nav-item-dropdown>
          </li>-->
          <li class="nav-item text-center">
            <b-nav-item
              to="/participants/season2"
              class="nav-link"
              style="font-color: #808080"
            >Participants</b-nav-item>
          </li>
          <li class="nav-item text-center">
            <b-nav-item to="/hallfame" class="nav-link" style="font-color: #808080">Hall Of Fame</b-nav-item>
          </li>
          <li class="nav-item text-center">
            <b-nav-item to="/news" class="nav-link" style="font-color: #808080">News</b-nav-item>
          </li>

          <li class="d-none-lg text-center">
            <b-nav-item class="nav-link hr-bottom" style="font-color: #808080;" to="/rules">Rules</b-nav-item>
            <b-nav-item class="nav-link" style="font-color: #808080" to="/faq">FAQ</b-nav-item>
            <b-nav-item class="nav-link" style="font-color: #808080" to="/terms">Terms & Cond.</b-nav-item>
            <b-nav-item class="nav-link" style="font-color: #808080" to="/contactus">Contact Us</b-nav-item>
          </li>

          <li class="nav-item-dropdown text-center">
            <b-nav-item-dropdown
              class="test nav-link d-none-md"
              style="font-color: #808080;"
              text="Help"
            >
              <b-nav-item class="nav-link" style="font-color: #808080" to="/rules">Rules</b-nav-item>
              <div style="border-bottom: 1px solid #343e48; width: 90%; margin: auto;"></div>
              <b-nav-item class="nav-link" style="font-color: #808080" to="/faq">FAQ</b-nav-item>
              <div style="border-bottom: 1px solid #343e48; width: 90%; margin: auto;"></div>
              <b-nav-item
                class="nav-link"
                style="font-color: #808080"
                to="/terms"
              >Terms and Conditions</b-nav-item>
              <div style="border-bottom: 1px solid #343e48; width: 90%; margin: auto;"></div>
              <b-nav-item class="nav-link" style="font-color: #808080" to="/contactus">Contact Us</b-nav-item>
            </b-nav-item-dropdown>
          </li>
          <a
            href="https://www.yamisok.com/login"
            target="_blank"
            class="d-btn--red-nav boldProx"
            @click="toRegister()"
            style="margin: auto; text-align: center; font-size: 15px; border: 5px solid #c6232e;"
          >Login / Register here</a>
        </ul>
      </b-collapse>
    </b-navbar>
    <!-- NEW -->

    <div class="d-flex flex-column float-button">
      <a
        href="https://www.facebook.com/jdhighschoolleague/"
        class="highlightsidebar"
        target="_blank"
        title="Facebook IHSL"
      >
        <img src="/static/img/float-facebook.jpg" style="border-radius: 10px 10px 0 0;" height="50" />
      </a>
      <a
        href="https://www.youtube.com/moobatvindonesia"
        class="highlightsidebar"
        target="_blank"
        title="Youtube MoobaTV"
      >
        <img src="/static/img/float-youtube.jpg" height="50" />
      </a>
      <a
        href="https://www.instagram.com/jd.hsl/"
        class="highlightsidebar"
        target="_blank"
        title="Instagram IHSL"
      >
        <img src="/static/img/float-instagram.jpg" height="50" />
      </a>
      <a
        href="https://www.jd.id/campaign/ihsl-2019.html"
        class="highlightsidebar"
        target="_blank"
        title="Website JD.ID"
      >
        <img src="/static/img/float-jdid.jpg" height="50" />
      </a>
      <a
        href="https://yamisok.com/"
        class="highlightsidebar"
        target="_blank"
        title="Website Yamisok"
      >
        <img
          src="/static/img/float-yamisok-fix.jpg"
          height="50"
          style="border-radius: 0px 0px 10px 10px;"
        />
      </a>
    </div>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <section class="red-footer">
        <div class="pad-y-10">
          <div class="col-md-12">
            <div class="d-flex flex-row">
              <div>
                <img width="50px;" src="../assets/img/footer/jdid.png" />
              </div>
              <div class="mar-left-20">
                <span
                  class="text-12 text-white"
                >Copyright ©2019 High School League. Any commercial use or distribution without the express written consent of Yamisok and/or JD.ID is strictly prohibited.</span>
                <br />
                <router-link to="/terms">
                  <span
                    href="/terms"
                    class="text-12 text-white"
                    style="cursor: pointer;"
                  >Terms and Conditions</span>
                </router-link>&nbsp;&nbsp;&nbsp;
                <span
                  class="text-12 text-white"
                  style="cursor: pointer;"
                >Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<style lang="scss">
@media only screen and (max-width: 1024px) {
  .logo-mobile {
    width: 20vmin !important;
  }
}

.dropdown-menu {
  background-color: #252d34 !important;
  min-width: 15rem !important;
}

a.hr-bottom {
  border-bottom: 1px solid #343e48 !important;
}

.highlightsidebar img {
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=50);
  -moz-opacity: 1;
  opacity: 1;
}

.highlightsidebar:hover img {
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
  -moz-opacity: 0.8;
  opacity: 0.8;
}

.highlightfooter img {
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=50);
  -moz-opacity: 1;
  opacity: 1;
}

.highlightfooter:hover img {
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
  -moz-opacity: 0.6;
  opacity: 0.6;
}

.navbar-dark .navbar-nav .nav-link {
  color: #808080;
}

.mini-submenu {
  display: none;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  padding: 9px;
  width: 42px;
}

.mini-submenu:hover {
  cursor: pointer;
}

.mini-submenu .icon-bar {
  border-radius: 1px;
  display: block;
  height: 2px;
  width: 22px;
  margin-top: 3px;
}

.mini-submenu .icon-bar {
  background-color: #000;
}

.navbar-dark .navbar-nav .nav-link span:hover {
  color: #c6232e;
}

#slide-submenu {
  background: rgba(0, 0, 0, 0.45);
  display: inline-block;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<!-- <script>
  $(function () {
  $('#slide-submenu').on('click', function () {
      $(this).closest('.list-group').fadeOut('slide', function () {
        $('.mini-submenu').fadeIn()
      })
  })

  $('.mini-submenu').on('click', function () {
      $(this).next('.list-group').toggle('slide')
      $('.mini-submenu').hide()
  })
})
</script> -->