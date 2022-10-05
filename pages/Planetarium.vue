<template>
  <div class="planetarium">
    <div class="container">
      <div class="planetarium__img">
        <img src="../assets/img/planetariy.jpg" alt="">
      </div>
      <div class="planetarium__title">
        {{$t('palace9')}}
      </div>
      <div class="planetarium__text">
        {{$t('planetarium')}}
        <p>{{$t('planetarium2')}}</p> {{$t('planetarium3')}}
      </div>
      <div class="planetarium__loc">
        {{$t('cart')}}
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.18464987557!2d69.23994491465871!3d41.32659797926982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b77b22cdc43%3A0x5de748623e7d479b!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQk9C-0YDQvtC00YHQutC-0Lkg0J_Qu9Cw0L3QtdGC0LDRgNC40Lk!5e0!3m2!1sru!2s!4v1664276905408!5m2!1sru!2s" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style  lang="scss">
.planetarium{
    padding-top: 165px;
    background-color: #FFF8F1;
    &__img{
      justify-content: center;
      display: flex;
      align-items: center;
      img{
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
