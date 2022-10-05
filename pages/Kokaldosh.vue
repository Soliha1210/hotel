<template>
  <div class="kokaldosh">
    <div class="container">
      <div class="row">
        <div class="col-6 col-sm-6 kokaldosh__img">
          <img src="../assets/img/kokaldosh1.jpg" alt="">
        </div>
        <div class="col-6 kokaldosh__img">
          <img src="../assets/img/kokaldosh.jpg" alt="">
        </div>
      </div>
      <div class="kokaldosh__title">
        {{$t('palace5')}}
      </div>
      <div class="kokaldosh__text">
        {{$t('madrase')}}
        <p>{{$t('madrase2')}}</p> {{$t('madrase3')}}
        <p>{{$t('madrase4')}}</p>
      </div>
      <div class="kokaldosh__loc">
        {{$t('cart')}}
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.328555003224!2d69.23414861479463!3d41.32346840791924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9c3ad08cef%3A0x98ffc301ab615249!2z0JrRntC60LDQu9C00L7RiCDQvNCw0LTRgNCw0YHQsNGB0Lg!5e0!3m2!1sru!2s!4v1663667898107!5m2!1sru!2s" width="100%" height="600" style="border:0; margin-bottom:40px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.kokaldosh{
    padding-top: 200px;
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
