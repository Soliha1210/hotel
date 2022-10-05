<template>
  <div class="bazaar">
    <div class="container">
      <div class="row">
        <div class="col-6 bazaar__img">
          <img src="../assets/img/chorsu.jpg" alt="">
        </div>
        <div class="col-6 bazaar__img">
          <img src="../assets/img/chorsu2.jpg" alt="">
        </div>
      </div>
      <div class="bazaar__title">
        {{$t('palace8')}}
      </div>
      <div class="bazaar__text">
        {{$t('bazaar')}}
        <p>{{$t('bazaar2')}}</p>
        <p>{{$t('bazaar3')}}</p>
        <p>{{$t('bazaar4')}}</p>
        <p>{{$t('bazaar5')}}</p>
        <p>{{$t('bazaar6')}}</p>
        <p>{{$t('bazaar7')}}</p>
      </div>
      <div class="bazaar__loc">
        {{$t('cart')}}
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1783178970327!2d69.23284311435441!3d41.32673567926981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9cdd04953d%3A0xf8109d550917a88e!2z0K3QodCa0Jgg0JbRg9Cy0LAg0LHQvtC30L7RgNC4!5e0!3m2!1sru!2s!4v1663685121841!5m2!1sru!2s" width="100%" height="500" style="border:0; margin-bottom:40px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.bazaar{
    padding-top: 165px;
    background-color: #FFF8F1;
    &__img{
      img{
        width: 100%;
        border-radius: 5px;
        height: 400px;
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
