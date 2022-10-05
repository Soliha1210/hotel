<template>
  <div class="art">
    <div class="container">
      <div class="row">
        <div class="col-6 art__img">
          <img src="../assets/img/san'at.jpg" alt="">
        </div>
        <div class="col-6 art__img">
          <img src="../assets/img/caption.jpg" alt="">
        </div>
      </div>
      <div class="art__title">
        {{$t('palace3')}}
      </div>
      <div class="art__text">
        {{$t('art')}}
        <p>{{$t('art')}}</p>
      </div>
      <div class="art__loc">
        {{$t('cart')}}
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.3599537421846!2d69.25720651479381!3d41.301032409308185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ae1a21ab3e3%3A0xb3c15a54c88bcfd0!2z0JzRg9C30LXQuSDQn9GA0LjQutC70LDQtNC90L7Qs9C-INCY0YHQutGD0YHRgdGC0LLQsA!5e0!3m2!1sru!2s!4v1663666463241!5m2!1sru!2s" width="100%" height="600" style="border:0; margin-bottom:40px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.art{
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
