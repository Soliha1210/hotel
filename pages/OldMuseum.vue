<template>
  <div class="oldMuseum">
    <div class="container">
      <div class="oldMuseum__img">
        <img src="../assets/img/ming oric.jpg" alt="">
      </div>
      <div class="oldMuseum__title">
        {{$t('palace4')}}
      </div>
      <div class="oldMuseum__text">
        {{$t('oldMuseum')}}
        <p>{{$t('oldMuseum2')}}</p> {{$t('oldMuseum3')}}
      </div>
      <div class="oldMuseum__loc">
        {{$t('cart')}}
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.455733365755!2d69.28559321479382!3d41.29894840943709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8acd60ea2f03%3A0x920c2e0d231510d9!2z0JzRg9C30LXQuSAi0JzQuNC90LMg0KPRgNC40Loi!5e0!3m2!1sru!2s!4v1663667140677!5m2!1sru!2s" width="100%" height="600" style="border:0; margin-bottom:40px; margin-bottom:40px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.oldMuseum{
    padding-top: 165px;
    background-color: #FFF8F1;
    &__img{
      img{
        width: 100%;
        border-radius: 5px;
      }
    }
    &__title{
      font-size: 42px;
      font-family: 'fm';
      margin-top: 40px;
    }
    &__text{
      font-size: 20px;
      font-family: 'fl';
      margin-top: 20px;
      margin-bottom: 40px;
      p{
        margin-top: 10px;
      }
    }
    &__loc{
      font-size: 25px;
      font-family: 'fm';
      margin-bottom: 30px;

    }
  }
</style>
