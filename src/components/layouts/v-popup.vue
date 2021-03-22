  <template>
  <div class="v-popup" ref="v-popup">
    <div class="v-popup__body">
      <div class="v-popup__header">

        <div v-if="product_data.tag.length" class="new">
          <span>{{ popupTitle }}</span>
        </div>

        <span class="v-popup__c">
          <i
              class="material-icons"
              @click="closePopup"
          >close</i>
        </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer footer-popup">
        <div class="footer-popup__desc">
          <p>Описание</p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque eaque impedit incidunt itaque minima provident quas quasi rerum sed?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur aut blanditiis commodi consequuntur cupiditate distinctio dolor doloribus eius ex fuga harum illum inventore iure laudantium mollitia obcaecati pariatur perferendis perspiciatis possimus quasi quod rerum saepe sint, soluta tenetur voluptas voluptatibus. Aliquid expedita id iste nam repellendus sapiente sed, veritatis vero! Cupiditate doloribus eos expedita explicabo, in incidunt ipsa ipsam rem! Adipisci amet, animi assumenda atque cumque dolore est, explicabo facere facilis harum iste laborum maxime minima nostrum recusandae sequi voluptate! Aut consequatur deserunt dignissimos distinctio doloremque eveniet ex, iusto, labore, nobis obcaecati repellat unde? Eveniet fuga illo nihil ullam?
        </div>

        <div class="footer-reviews">
          <div class="footer-reviews__title-form">Give review:
            <div
                class="footer-reviews__title-form_valid-message"
                v-if="formValidMessage"
            >{{ formValidMessage }}</div>
          </div>
          <div class="footer-reviews__form form-review">
            <label for="userName"></label>
            <input class="footer-reviews__form_el" type="text" placeholder="Enter your name"
                   name="userName"
                   v-model="userName"
                   id="userName"
            >
            <div class="footer-reviews__form_radios"
                 ref="radios"
                 @click="pressRadio"
            >
              <span data-id-r="1"><i class="far fa-star"></i></span>
              <span data-id-r="2"><i class="far fa-star"></i></span>
              <span data-id-r="3"><i class="far fa-star"></i></span>
              <span data-id-r="4"><i class="far fa-star"></i></span>
              <span data-id-r="5"><i class="far fa-star"></i></span>
            </div>
            <label for="reviewText"></label>
            <textarea class="footer-reviews__form_el"
                      name="reviewText"
                      id="reviewText"
                      v-model="reviewText"
                      placeholder="Enter your review"
                      rows="4"
            ></textarea>
            <button @click="sendReview">Send review</button>
          </div>
          <div class="footer-reviews__title-reviews">Reviews:</div>

          <div
              v-if="!this.GET_REVIEWS_FROM_STATE.length"
              class="footer-reviews__no-reviews"
          >There are no reviews :(</div>

          <v-review
              v-for="review in this.GET_REVIEWS_FROM_STATE"
              :key="review.id"
              :review_data="review"
          ></v-review>

        </div>
      </div>  
    </div>
    <input data-itemId type="hidden" :value="product_data.id">
    <div class="white-space"></div>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import { HTTP } from "../../../http-common"
import { mapActions, mapGetters } from 'vuex'
import dbOpenDBRequest from "../../main";

import vReview from './v-review'

function formValidate (userName, rating, reviewText) {
  if (userName === '') {
    return 'You forgot to enter your name'
  } else if (userName.length > 30) {
    return 'You entered incorrect name'
  }
  console.log(rating)
  if (rating === 0) {
    return 'You forgot to rate'
  }
  if (reviewText.length < 5) {
    return 'Your review text is so small'
  }
  return ''
}

export default {
  name: "v-popup",
  data: () => {
    return {
      formValidMessage: '',
      userName: '',
      reviewText: '',
      radioId: 0,
      rating: 0
    }
  },
  components: {
    vReview
  },
  methods: {
    ...mapActions([
        'GET_ITEM_REVIEWS'
    ]),
    sendReview() {
      this.formValidMessage = formValidate(this.userName, this.rating, this.reviewText)
      if (this.formValidMessage === '') {
        HTTP.post('api/watch-reviews/add', {
          itemId: this.product_data.id,
          userName: this.userName,
          rating: this.rating,
          reviewText: this.reviewText
        }).then((review) => {
          console.log(review.data)
        })
        this.userName = ''
        this.reviewText = ''
        this.radioId = 0
        this.rating = 0
        for (let i = 0; i < 5; i++) {
          this.$refs.radios.children[i].classList.remove('_active')
        }
      }
      this.GET_ITEM_REVIEWS(this.product_data.id)
    },
    pressRadio(e) {
      let target = e.target
      let radioArr = this.$refs.radios.children
      if (target.classList.contains('far')) {
        target = target.closest('span')
        for (let i = 0; i < 5; i++) {
          radioArr[i].classList.remove('_active')
        }
        this.radioId = target.dataset.idR
        for (let i = 0; i < this.radioId; i++) {
          radioArr[i].classList.add('_active')
          this.rating = radioArr[i].dataset.idR
        }
      }
    },
    closePopup() {
      this.$emit('closePopup')
    },
    submitPopup() {
      this.$emit('submitPopup')
    },
    buttonPress() {
      console.log(this.userName)
    }
  },
  computed: {
    ...mapGetters([
        'GET_REVIEWS_FROM_STATE'
    ])
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
    popupTitle : {
      type: String,
      default() {
        return 'Popup'
      }
    },
    itemDesc: {
      type: String,
      default() {
        return '';
      }
    },
    itemId: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['v-popup']) {
        vm.closePopup()
      }
    })

    this.GET_ITEM_REVIEWS(this.product_data.id)
  },
}
</script>

<style lang="scss">
.v-popup {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0,0,0, 0.2);
  width: 100vw;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 250px;
  &__body {
    box-sizing: border-box;
    padding: 16px;
    z-index: 10;
    position: absolute;
    //top: 10%;
    //left: calc(50% - 600px/2);
    background: #fff;
    width: 600px;
    margin-top: 100px;
    border-radius: 20px;
  }
  &__header, &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__c {
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 20px;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__footer {
  }
  &__submit {
    padding: 8px;
    color: #fff;
    background: #26ae68;
    cursor: pointer;
    border: 0;
    border-radius: 12px;
    margin-top: 40px;
  }
  &__close {
    padding: 8px;
    color: #fff;
    background: red;
    cursor: pointer;
    border: 0;
  }
  &__form {
    display: flex;
    flex-direction: column;
  }
}
._lock {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.content-popup {
  width: 80%;
  display: flex;
  justify-content: center;
  &__img {
    flex: 0 0 50%;
  }
  &__details {
    flex: 0 0 50%;
    text-align: end;
    padding-top: 50px;
    padding-right: 20px;
  }
  &__title {
    font-size: 24px;
    color: #0c5460;
    font-weight: 700;
  }
  &__price {
    margin-top: 4px;
    font-size: 19px;
  }
}
.img-box2.img-box {
  background: #fff;
}
.box2.box {
  position: absolute;
  background-color: #fff !important;
  &:hover {
    transform: translate(0);
  }
}
.new {
  padding: 7px 15px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f0d43a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border-radius: 20px 0 0 0;
}
.footer-popup {
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  &__desc {
    p {
      font-size: 18px;
      font-weight: 600;
    }
  }
}
.white-space {
  height: calc(30%);
  width: 10px;
  position: absolute;
  top: 100%;
}
</style>
