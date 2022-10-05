<template>
  <div class="homePage">
    <VueSlickCarousel v-bind="settings">
        <div class="pictures img1"></div>
        <div class="pictures img2"></div>
        <div class="pictures img3"></div>
        <div class="pictures img4"></div>
        <div class="pictures img5"></div>
        <div class="pictures img6"></div>
    </VueSlickCarousel>
    <section class="homePage__about">
      <div class="container">
        <div class="homePage__about-all">
          <div class=" col-6 homePage__about-title">
            {{ $t('welcome') }}
            <p>{{ $t('comfort') }}</p>
            <Video/>
          </div>
          <div class="col-6 homePage__about-text">
            <p>{{ $t('about') }}  </p>
          </div>
        </div>
        <!-- <video  width="1000" height="500" controls >
          <source src="../assets/video/267814553_1121906758558474_2325833240141885931_n.mp4" type="video/mp4" >
        </video> -->
      </div>
    </section>
    <div class="homePage__travel">
      <div class="container">
        <div class="homePage__travel-all">
          <div class=" homePage__travel-about">
            <div class="homePage__travel-title">
            {{$t('travel')}}
            </div>
            <div class="homePage__travel-text">
              {{$t('travelText')}}
            </div>
          </div>
          <div class="homePage__travel-video">
            <div class="homePage__travel-videobtn">
              <button @click="toggler = !toggler"><b-icon icon="caret-right" class="icon__btn"></b-icon></button>
              <p>{{$t('play')}}</p>
              <FsLightbox
                :toggler="toggler"
                :sources="[
                    'https://www.youtube.com/watch?v=r6ZPuGFEmsw',
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homePage__travel-slider">
        <div class="col-12 col-lg-8">
          <Palace/>
        </div>
        <div class="col-12 col-lg-4">
          <div class="homePage__travel-pic">

          </div>
        </div>
      </div>
      <Rules/>
      <div class="homePage__info">
        <div class="homePage__info-all">
          <div class="homePage__info-img">
            <!-- <img src="../assets/img/C0026T01.jpg" alt=""> -->
          </div>
          <div class="homePage__info-card">
            <div class="homePage__info-title">
              {{$t('info')}}
            </div>
            <div class="homePage__info-text">
              {{$t('infoText')}}

            </div>
            <div class="homePage__info-book">
              <a href="tel:+998 93 382 11 15">{{ $t('book') }}</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Palace from '../components/Palace.vue'
import Rules from '../components/Rules.vue'
import FsLightbox from "fslightbox-vue";
import Video from '../components/Video.vue'

export default {
  name: 'IndexPage',
  components:{VueSlickCarousel, Palace, Rules,FsLightbox, Video,},
  data(){
    return{
      settings:{
        "arrows": false,
        "dots": false,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "speed": 1000,
        "autoplaySpeed": 3000,
        "cssEase": "linear",
      },
      toggler: false,
      toggler2:false
    }
  }
}
</script>
<style lang="scss">
.icon__btn{
  width: 50px;
  height: 50px;
}
.pictures{
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
.img1{
  background-image: url(../assets/img/C0001T01.jpg);
background-position: 50% 50% !important;}
.img2{
  background-image: url(../assets/img/C0006T01.jpg);
  background-position: 50% 50% !important;
}
.img3{
  background-image: url(../assets/img/C0080T01.jpg);
  background-position: 50% 50% !important;
}
.img4{
  background-image: url(../assets/img/C0042T01.jpg);
  background-position: 50% 50% !important;
}
.img5{
  background-image: url(../assets/img/C0054T01.jpg);
}
.img6{
  background-image: url(../assets/img/C0010T01.jpg);
}
.homePage{
  background-color: #e9ded6;

  &__about{
    &-all{
      margin-top: 80px;

      display: flex;
    }
    &-title{
      font-size: 42px;
      font-family: 'fm';
      p{
        font-size: 18px;
        font-family: 'fl';
        margin-top: 20px;
      }
    }
    &-text{
      // text-align: center;
      font-size: 18px;
      font-family: 'fl';
      line-height: 1.7;
    }
    &-btn{
      height: 50px;
      font-size: 20px;
      font-family: 'fl';
      &::after{
        content: '';
        box-shadow: 0 0 0 0;
        border-radius: 50%;
        opacity: 0;
        color: #E6E6E6;
        animation: video_circles 1200ms ease-in-out infinite;
        animation-delay: 300ms;
      }
    }
  }
  &__travel{
    background-color: rgb(63, 62, 62);
    margin-top: 70px;
    &-title{
      color:#fff;
      padding-top: 90px;
      font-size: 42px;
      font-family: 'fm';
    }
    &-text{
      color:#fff;
      margin-top: 22px;
      padding-bottom: 90px;
      font-size: 20px;
      font-family: 'fl';
      line-height: 1.81;

    }
    &-all{
      display: flex;
    }
    &-about{
      width: 50%;
    }
    &-video{
      height: 110px;
      position: relative;
      margin: 10px 0 10px 35px;
      flex: 0 0 160px;
      &::before{
        content: '';
        position: absolute;
        top: 204px;
        left: 0;
        height: 100%;
        border-left: 1px solid;
        opacity: 0.1;
        color:white;
      }
    }
    &-videobtn{
      margin-top: 220px;
      margin-left: 30px;
      p{
        color:#FFFFFF;
        font-size: 16px;
        font-family: 'fl';
        margin-top: 10px;
      }
      button{
        border: 2px solid #fff;
        font-size: 17px;
        border-radius: 50%;
        height: 90px;
        width: 90px;
        background-color: rgb(3, 3, 23);
        color:#fff;
        padding: 10px;
        &:hover{
          border: 2px solid #fff;

        }
      }
    }
    &-slider{
      display: flex;
    }
    &-pic{
      background-image: url(../assets/img/image.jpg);
      height: 613px;
      background-size: cover;
      background-repeat: no-repeat;
      margin-top: -245px;
      margin-left: 30px;
      border-radius: 5px;
    }
  }
  &__info{
    margin-top: 60px;
    padding-bottom: 50px;
    &-all{
      display: flex;
    }
    &-img{
      background-image: url(../assets/img/C0026T01.jpg);
      width: 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &-card{
      background-color: #fff;
      box-shadow: 0px 4px 15px rgb(0 0 0 / 5%);
      border-radius: 4px;
      margin-top: 45px;
      margin-bottom: 45px;
      padding: 42px 52px;
      margin-left: -245px;
      width: 50%;
      height: 506px;
    }
    &-title{
      font-size: 42px;
      font-family: 'fm';
      line-height: 1
    }
    &-text{
      font-size: 21px;
      font-family: 'fl';
      line-height: 1.70;
      margin: 15px 0;
      color: #535353;
    }
    &-book{
      margin-top: 32px;
      a{
        text-decoration: none;
        color:#FFFFFF;
        font-size: 18px;
        letter-spacing: 1.51px;
        text-transform: uppercase;
        background-color: black;
        padding: 12px;
        border: 1px solid #000;
        border-radius: 5px;
        &:hover{
          // color: #fff;
          border: 1px solid #000;
          background-color: #29282a;
          transition: 0.8s;
        }
      }
    }
  }
}
</style>
