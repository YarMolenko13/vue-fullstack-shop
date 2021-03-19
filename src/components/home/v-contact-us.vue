<template>
  <section id="contact" style="margin-bottom: 100px;" class="contact_section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="form_container">
            <div class="heading_container">
              <h2>
                Contact Us
              </h2>
            </div>
            <form>
              <div>
                <input type="text" v-model="fullName" placeholder="Full Name " />
              </div>
              <div>
                <input type="email" v-model="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" v-model="phoneNum" placeholder="Phone number" />
              </div>
              <div>
                <input type="text" v-model="message" class="message-box" placeholder="Message" />
              </div>
              <div class="d-flex ">
                <button
                    @click="sendData"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img :src="require('../../assets/images/contact-img.jpg')" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "v-contact-us",
  data: () => {
    return {
      fullName: '',
      email: '',
      phoneNum: '',
      message: ''
    }
  },
  methods: {
    sendData() {
      axios.post('api/add-new-contact-m', {
        fullName: this.fullName,
        email: this.email,
        phoneNum: this.phoneNum,
        message: this.message
      }).then((res) => {console.log(res)})
    }
  }
}
</script>

<style scoped>

</style>