<template>
  <div class="v-header">
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <router-link class="navbar-brand" to="/">
            <span>
              Timups
            </span>
          </router-link>

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
            </ul>
            <div class="user_option-box">
              <router-link to="/cart">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </router-link>
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

<style lang="scss">
  .v-header {
    background: #fff;
    z-index: 10 !important;
  }
</style>