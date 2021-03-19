<template>
  <div class="v-header">
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="index.html">
            <span>
              Timups
            </span>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link to="/" class="nav-link"> Home </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/watches" class="nav-link"> Watches </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link"> About </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link"> Contact Us </router-link>
              </li>
            </ul>
            <div class="user_option-box">
              <a href="">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "v-header"
}
</script>

<style scoped>

</style>