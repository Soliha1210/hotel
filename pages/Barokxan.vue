<template>
  <div class="baroq">
    <div class="container">
      <div class="baroq__img">
        <img src="../assets/img/baroqxon.jpg" alt="">
      </div>
      <div class="baroq__title">
        {{$t('palace2')}}
      </div>
      <div class="baroq__text">
        {{$t('barak')}} <p>{{$t('barak2')}}</p>
      </div>
      <div class="baroq__loc">
        {{$t('cart')}}
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.709326319817!2d69.23686031465917!3d41.3369336792688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8011612559%3A0x310525752bf9bab0!2zTdC10LTRgNC10YHQtSDQkdCw0YDQsNC60YXQsNC9!5e0!3m2!1sru!2s!4v1663665515256!5m2!1sru!2s" width="100%" height="600" style="border:0; margin-bottom:30px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .baroq{
    padding-top: 165px;
    background-color: #FFF8F1;
    &__img{
      display: flex;
      justify-content: center;
      img{
        height: 600px;
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
