<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-5 col-md-4 col-lg-4">
          <div class="footer__logo">
            <img src="../assets/img/logo4.png" alt="">
          </div>
          <div class="footer__title">
            {{$t('footer')}}
          </div>
          <div class="footer__net">
            <div class="footer__text">
              {{$t('footerText')}}
            </div>
            <div class="footer__insta">
              <a href="https://www.instagram.com/_old_city_hotel/"><img src="../assets/img/instagram.png" alt=""> </a>
              <a href="https://t.me/joinchat/YUo6OoR-oE02YjRi" class="footer__img"><img src="../assets/img/telegram (6).png" alt="" ></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-5 col-md-4 col-lg-4">
          <div class="footer__address">
            {{$t('address')}}
          </div>
          <div class="footer__address-title">
            {{$t('addressTitle')}}
          </div>
          <div class="footer__address-text">
            {{$t('addressText')}}
            <br>{{$t('orient')}}
            <br>{{$t('work')}}
          </div>
        </div>
        <div class="col-12 col-sm-5 col-md-4 col-lg-4">
          <div class="footer__address">
            {{$t('contacts')}}
          </div>
          <div class="footer__address-text2">
            +998 93 382 11 15
            <br> +998 71 242 73 98
            <br> <a href="mailto:oldcity1.hotel@gmail.com">oldcity1.hotel@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .footer{
    background: #272525;
    padding: 55px 55px;
    color:#fff;
    &__logo{
      img{
        width: 248px;
        height: 73px;
      }
    }
    &__title{
      line-height: 1.5;
      font-size: 25px;
      font-family: 'fl';
      margin-top: 40px;
    }
    &__net{
      display: flex;
      margin-top: 40px;
    }
    &__text{
      font-size: 20px;
    }
    &__insta{
      margin-left: 5px;
      a{
        img{
          width: 35px;
          height: 35px;
        }
      }
    }
    &__address{
      font-size: 20px;
      font-family: 'fm';
      &-title{
        line-height: 1.14286;
        opacity: .5;
        font-size: 18px;
        font-family: 'fl';
        margin-top: 50px;
      }
      &-text{
        font-size: 18px;
        font-family: 'fl';
        margin-top: 10px;
        line-height: 1.8;
      }
      &-text2{
        font-size: 18px;
        font-family: 'fl';
        margin-top: 45px;
        line-height: 1.8;
        a{
          color:#EAB98D;
          text-decoration: none;
        }
      }
    }
    &__img{
      img{
        width: 25px !important;
        height: 25px !important;
      }
    }
  }
</style>
