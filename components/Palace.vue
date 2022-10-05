<template>
<div>
  <VueSlickCarousel v-bind="settings" class="carousel">
    <div class="palace__item">
      <nuxt-link :to="localePath('/Museum')">
        <div class="palace__wrap">
          <div class="palace pic1"></div>
          <div class="palace__info">
            <h6 class="palace__title">
              {{$t('palace')}}
            </h6>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="palace__item">
      <nuxt-link :to="localePath('/Barokxan')">
        <div class="palace__wrap">
          <div class="palace pic2"></div>
          <div class="palace__info">
            <h6 class="palace__title">
              {{$t('palace2')}}
            </h6>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="palace__item">
      <nuxt-link :to="localePath('/ArtMuseum')">
        <div class="palace__wrap">
          <div class="palace pic3"></div>
          <div class="palace__info">
            <h6 class="palace__title">
              {{$t('palace3')}}
            </h6>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="palace__item">
      <nuxt-link :to="localePath('/OldMuseum')">
        <div class="palace__wrap">
          <div class="palace pic4"></div>
          <div class="palace__info">
            <h6 class="palace__title">
              {{$t('palace4')}}
            </h6>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="palace__item">
      <nuxt-link :to="localePath('/Kokaldosh')">
        <div class="palace__wrap">
          <div class="palace pic5"></div>
          <div class="palace__info">
            <h6 class="palace__title">
              {{$t('palace5')}}
            </h6>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="palace__item">
      <nuxt-link :to="localePath('/Teatr')">
        <div class="palace__wrap">
          <div class="palace pic6"></div>
          <div class="palace__info">
            <h6 class="palace__title">
              {{$t('palace6')}}
            </h6>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="palace__item">
      <nuxt-link :to="localePath('/Television')">
        <div class="palace__wrap">
          <div class="palace pic7"></div>
          <div class="palace__info">
            <h6 class="palace__title">
              {{$t('palace7')}}
            </h6>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="palace__item">
      <nuxt-link :to="localePath('/Bazaar')">
        <div class="palace__wrap">
          <div class="palace pic8"></div>
          <div class="palace__info">
            <h6 class="palace__title">
              {{$t('palace8')}}
            </h6>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="palace__item">
      <nuxt-link :to="localePath('/Planetarium')">
        <div class="palace__wrap">
          <div class="palace pic9"></div>
          <div class="palace__info">
            <h6 class="palace__title">
              {{$t('palace9')}}
            </h6>
          </div>
        </div>
      </nuxt-link>
    </div>
  </VueSlickCarousel>

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
        "dots": false,
        "infinite": true,
        "initialSlide": 2,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "swipeToSlide": true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

  ]
      }
    }
  }
}
</script>

<style lang="scss">
.carousel .slick-prev{
  left:276px;
  z-index: 2;

}
.carousel .slick-arrow::before{
  font-size: 50px ;
  opacity:unset;
  line-height: 0;
}
.carousel .slick-slide div{
  margin: 4px;
}
.palace__item{
  width: 350px;
    margin-right: 30px;
}
.palace__item .palace__wrap:hover .palace__info{
  transform: translateY(0);
}
.palace__wrap{
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.palace__info{
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  padding: 20px 25px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  transform: translateY(100%);
  transition: all 400ms ease;
}
.palace__title{
  font-size: 20px;
}
  .palace{
    min-height: 350px;
    background: 50% no-repeat;
    // margin-top: 30px;
    border-radius: 5px;
    background-size: cover;
  }
  .pic1{
    background-image: url(../assets/img/museum.jpg);
  }
  .pic2{
    background-image: url(../assets/img/design-3.jpg);
  }
  .pic3{
    background-image: url(../assets/img/design-4.jpg);
  }
  .pic4{
    background-image: url(../assets/img/design-5.jpg);
  }
  .pic5{
    background-image: url(../assets/img/design2.jpg);
  }
  .pic6{
    background-image: url(../assets/img/design4.jpg);
  }
  .pic7{
    background-image: url(../assets/img/television.jpeg);
  }
  .pic8{
    background-image: url(../assets/img/chorsu.jpg);
  }
  .pic9{
    background-image: url(../assets/img/planetariy.jpg);
  }
</style>
