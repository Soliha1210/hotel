<template>
  <div class="television">
    <div class="container">
      <div class="television__img">
        <img src="../assets/img/tekevishka.jpg" alt="">
      </div>
      <div class="television__title">
        {{$t('palace7')}}
      </div>
      <div class="television__text">
        {{$t('television')}}
        <p>{{$t('televisionText')}}</p>
        <p>{{$t('televisionText2')}}</p>
        <p>{{$t('televisionText3')}}</p>
        <p>{{$t('televisionText4')}}</p>
      </div>
      <div class="television__loc">
        Xarita
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5990.628400381573!2d69.2807433641544!3d41.345523908752895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b557622ee09%3A0x7fe6ccc1c041fedf!2z0KLQtdC70LXQstGL0YjQutCw!5e0!3m2!1sru!2s!4v1663670835537!5m2!1sru!2s" width="100%" height="600" style="border:0; margin-bottom:40px " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.television{
    padding-top: 165px;
    background-color: #FFF8F1;
    &__img{
      display: flex;
      justify-content: center;
      img{
        border-radius: 5px;
        height: 600px;
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
