<template>
<div class="site__header">
  <div class="header-top">
    <div class="container">
      <div class="header-top__all">
        <div class="header-top__phone">
          <a href="tel: +998 93 382 11 15">
            <div><b-icon icon="telephone-fill" ></b-icon></div>
            <div class="header-top__num">+998 93 382 11 15</div>
          </a>
        </div>
        <div class="header-top__right">
          <div class="header-top__location">
            <a href="https://goo.gl/maps/a8raCJ9x8a6rM9Vg9">
              <span class="header-top-title"> {{ $t('test') }}</span>
              <b-icon icon="geo-alt-fill" class="header-top-icon"></b-icon>
            </a>
          </div>
          <div class="header-top-lang">
            <div class="row">
              <div class="dropdown" @click="langIsShow">

                <span class=" dropdown-toggle lang__title text-uppercase " type="button"    aria-expanded="false" id="dropdownMenuButton1">
                      <img v-if="this.$i18n.locale == 'uz'" :src=icon1 class="imgLang"/>
                      <img v-else-if="this.$i18n.locale =='ru'" :src=icon2 class="imgLang"/>
                      <img v-else :src=icon3 class="imgLang"/>
                </span>
                <ul class="dropdown-menu" ref="dropdownRef" aria-labelledby="dropdownMenuButton1" >
                  <li>
                    <nuxt-link class="dropdown-item" :to="switchLocalePath('en')" >
                      <img src="../assets/img/usa.png" alt="" class="header-top-flag1">
                      <span class="lang">English</span>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="dropdown-item" :to="switchLocalePath('ru')" >
                      <img src="../assets/img/russia.png" alt="" class="header-top-flag">
                      <span class="lang">Русский</span>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="dropdown-item" :to="switchLocalePath('uz')">
                      <img src="../assets/img/uzbekistan.png" alt="" class="header-top-flag">
                      <span class="lang">O'zbekcha</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header">
    <div class="container">
      <div class="header__all">
        <div class="header__logo">
          <nuxt-link :to="localePath('/')">
            <img src="../assets/img/logo3.png" alt="">
          </nuxt-link>
        </div>
          <ul class="header__menu" >
            <li class="header__item">
              <nuxt-link exact active-class="active" :to="localePath('/')" class="header__link">
                {{ $t('menu') }}
              </nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link active-class="active" :to="localePath('/Rooms')" class="header__link">
                {{ $t('room') }}
              </nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link active-class="active" :to="localePath('/Kitchen')" class="header__link">
                {{ $t('kitchen') }}
              </nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link active-class="active" :to="localePath('/Gallery')" class="header__link">
                {{ $t('gallery') }}
              </nuxt-link>
            </li>
            <li class="header__item">
            <nuxt-link active-class="active" :to="localePath('/Location')" class="header__link">
              {{ $t('contact') }}
            </nuxt-link>
            </li>
          </ul>
        <transition name="fade">
          <nav class="navMobile header__navMobile" v-if="show">
          <ul class="header__menuMobile" >
            <li class="header__itemMobile" @click="show = false">
              <nuxt-link :to="localePath('/')" class="header__linkMobile">
                {{ $t('menu') }}
              </nuxt-link>
            </li>
            <li class="header__itemMobile" @click="show = false">
              <nuxt-link :to="localePath('/Rooms')" class="header__linkMobile" >
                {{ $t('room') }}
              </nuxt-link>
            </li>
            <li class="header__itemMobile" @click="show = false">
              <nuxt-link :to="localePath('/Kitchen')" class="header__linkMobile">
                {{ $t('kitchen') }}
              </nuxt-link>
            </li>
            <li class="header__itemMobile" @click="show = false">
              <nuxt-link :to="('/Gallery')" class="header__linkMobile" >
                {{ $t('gallery') }}
              </nuxt-link>
            </li>
            <li class="header__itemMobile" @click="show = false">
            <nuxt-link :to="('/Location')" class="header__linkMobile" >
              {{ $t('contact') }}
            </nuxt-link>
            </li>
        </ul>
        </nav>
        </transition>
        <div class="header__book">
          <a href="tel:+998 93 382 11 15">{{ $t('book') }}</a>
        </div>
        <transition name="fade" mode="out-in">
          <button class="header__btn" v-if="!show" @click="show = !show" key="menu">
            <span ></span>
          </button>
          <button class="header__closeBtn" v-else @click="show = !show" key="clear"><b-icon icon="x-lg" class="header__icon"></b-icon></button>
        </transition>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import iconUz from '../assets/img/uzbekistan.png'
import iconRU from '../assets/img/russia.png'
import iconEn from '../assets/img/usa.png'
export default {
  data(){
    return{
      isActive: 'UZ',
      selected: null,
      isShowLang:false,
      show:false,
      icon1: iconUz,
      icon2: iconRU,
      icon3: iconEn
    }
  },
  methods:{
    langIsShow(){
      this.isShowLang = !this.isShowLang
      if(this.isShowLang) {
        this.$refs.dropdownRef.classList.add("d-block")
        this.$refs.dropdownRef.classList.remove("d-none")
    }
    else {
        this.$refs.dropdownRef.classList.add("d-none")
        this.$refs.dropdownRef.classList.remove("d-block")
      }
    },
  }
}
</script>

<style lang="scss">

.imgLang{
  height: 36px;
    width: 40px;
}
.site__header{
  position: fixed;
  z-index: 4;
  width: 100%;
  top: 0;
    left: 0;
}
.header-top{
  background-color: #272525;
  padding: 15px 0px;
  position: relative;
  z-index: 5;
  &__all{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__phone{
    a{
      text-decoration: none;
      color: #FFFFFF;
      font-size: 22px;
      font-family: 'fl';
      display: flex;
    }
  }
  &__right{
    display: flex;
    align-items: center;
  }
  &__title{
    margin-right: 7px;
  }
  &__location{
    border-right: 1px solid gray;
    padding-right: 10px;
    a{
      text-decoration: none;
      color: #FFFFFF;
      font-size: 22px;
      font-family: 'fl';
      display: flex;
    }
  }
  &-icon{
    margin-top:4px;
    margin-left: 5px;
  }
  &-lang{
    padding-left: 6px;
    a{
      text-decoration: none;
      color:#000;
      font-size: 16px;
      font-family: 'fl';
    }
  }
  &-flag{
    height: 38px;
    width: 40px;
    margin-top: -8px;
  }
  &-flag1{
    height: 32px;
    width: 38px;
  }
}
.header{
  background-color: #e9ded6;
  height: 83px;
  // position: fixed;
    z-index: 10;
    width: 100%;
    border-bottom: 1px solid black;
  &__all{
    display: flex;
    height: 83px;
    align-items: center;
    justify-content: space-between;
  }
  &__logo{
    img{
      width: 256px;
      height: 78px;
      }
  }
  &__menu{
    display: flex;
    justify-content: space-evenly;
    margin-top: 18px;
    li{
      list-style-type: none;
      margin-right: 30px;
      a{
        text-decoration: none;
        font-family: 'fl';
        font-size: 15px;
        color:black;
        text-transform: uppercase;
        letter-spacing: 2.51px;
        line-height: 20px;
        height: 83px;
        position: relative;
        &::after{
          position: absolute;
          bottom: 0;
          top:24px;
          left: 0;
          right: 0;
          margin: auto;
          width: 0%;
          content: '.';
          color: transparent;
          background: rgb(152, 110, 110);
          height: 2px;
          transition: all .5s;
        }
        &:hover::after{
          width: 100%;
        }
        &:focus::after{
          width: 100%;
        }
      }
    }
  }
  &__closeBtn{
    background: unset;
    border:0;
    display: none;
    // margin-right: 20px;
  }
  &__icon{
    fill: #fff !important;
  }
  &__btn{
    display: none;
  }
  &__book{
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
        color: #000;
        border: 1px solid #000;
        background-color: #e9ded6;
        transition: all .5s;
      }
    }
  }

}
.navMobile{
    display: none;
    li{
      a{
        text-decoration: none;
        font-size: 22px;
        font-family: 'fm';
      }
    }
  }
  .nav{
    display: flex;
  }
.lang__title {
  color: white;
  font-size: 20px;
}
.d-none {
  display: none !important;
}
.d-block {
  display: block !important;
}
// .open{
//   display: block !important;
//   transition: all 0.3s;
// }
// .close{
//   display: none !important;
//   transition: all 0.3s;
// }
</style>
