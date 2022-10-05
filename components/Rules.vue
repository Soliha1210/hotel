<template>
  <div class="rules">
    <div class="container">
      <div class="rules__title">
        {{$t('rules')}}
      </div>
      <VueSlickCarousel v-bind="settings" class="rules__slider">

        <div class="rules__card">
          <div class="rules__icon">
            <img src="../assets/img/wifi (1).png" alt="">
          </div>
          <div class="rules__info">
            <div class="rules__info-title">
              {{$t('wifi')}}
            </div>
            <div class="rules__info-text">
              {{$t('wifiText')}}
            </div>
          </div>
        </div>
        <div class="rules__card">
          <div class="rules__icon">
            <img src="../assets/img/television.png" alt="">
          </div>
          <div class="rules__info">
            <div class="rules__info-title">
              {{$t('tv')}}
            </div>
            <div class="rules__info-text">
              {{$t('tvText')}}
            </div>
          </div>
        </div>
        <div class="rules__card">
          <div class="rules__icon">
            <img src="../assets/img/conditioning-air.png" alt="">
          </div>
          <div class="rules__info">
            <div class="rules__info-title">
              {{$t('air')}}
            </div>
            <div class="rules__info-text">
              {{$t('airText')}}
            </div>
          </div>
        </div>
        <div class="rules__card">
          <div class="rules__icon">
            <img src="../assets/img/bath-robe.png" alt="">
          </div>
          <div class="rules__info">
            <div class="rules__info-title">
              {{$t('ban')}}
            </div>
            <div class="rules__info-text">
              {{$t('banText')}}
            </div>
          </div>
        </div>
        <div class="rules__card">
          <div class="rules__icon">
            <img src="../assets/img/breakfast.png" alt="">
          </div>
          <div class="rules__info">
            <div class="rules__info-title">
              {{$t('breakfast')}}
            </div>
            <div class="rules__info-text">
              {{$t('breakfastText')}}
            </div>
          </div>
        </div>
        <div class="rules__card">
          <div class="rules__icon">
            <img src="../assets/img/24-7.png" alt="">
          </div>
          <div class="rules__info">
            <div class="rules__info-title">
              24/7
            </div>
            <div class="rules__info-text">
              {{$t('time')}}
            </div>
          </div>
        </div>
        <div class="rules__card">
          <div class="rules__icon">
            <img src="../assets/img/prohibition.png" alt="">
          </div>
          <div class="rules__info">
            <div class="rules__info-title">
              {{$t('certificate')}}
            </div>
            <div class="rules__info-text">
              {{$t('certificateText')}}
            </div>
          </div>
        </div>
        <div class="rules__card">
          <div class="rules__icon">
            <img src="../assets/img/reserve.png" alt="">
          </div>
          <div class="rules__info">
            <div class="rules__info-title">
              {{$t('booking')}}
            </div>
            <div class="rules__info-text">
              {{$t('bookingText')}}
            </div>
          </div>
        </div>
        <div class="rules__card">
          <div class="rules__icon">
            <img src="../assets/img/children.png" alt="">
          </div>
          <div class="rules__info">
            <div class="rules__info-title">
              {{$t('child')}}
            </div>
            <div class="rules__info-text">
              {{$t('childText')}}
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components:{VueSlickCarousel},
  data(){
    return{
      settings:{
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "speed": 500,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 912,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },

  ]
      }
    }
  }
}
</script>

<style lang="scss">
.rules__slider .slick-arrow{
  top:0;
  &::before{
    opacity: 1;
    font-size: 48px;
  }
}
.rules__slider .slick-prev{
  right: 74px;
  left: unset;
}
.rules__slider .slick-next{
  right: 29px;
}
  .rules{
  margin-top: 60px;
  &__title{
    font-size: 42px;
    font-family: 'fm';
  }
  &__card{
    margin-top: 60px;

  }
  &__icon{
    margin-top: 40px;
    img{
      width: 60px;
      height: 60px;
      margin-left: 94px;
    }
  }
  &__info{
    margin-top: 25px;
    background-color: #FFF8F1;
    width: 264px;
    height: 170px;
    padding: 12px 20px;
    border-radius: 5px;
    &-title{
      font-size: 25px;
      font-family: 'fm';
    }
    &-text{
      margin-top: 20px;
      font-size: 20px;
      font-family: 'fl';

    }
  }
}
</style>
