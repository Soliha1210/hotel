<template>
  <div class="teatr">
    <div class="container">
      <div class="teatr__img">
        <img src="../assets/img/teatr2.jpg" alt="">
      </div>
      <div class="teatr__title">
        {{$t('palace6')}}
      </div>
      <div class="teatr__text">
        {{$t('teatr')}}
        <p>{{$t('teatr2')}}</p>
        <p>{{$t('teatr3')}}</p>
        <p>{{$t('teatr4')}}</p>
        <p>{{$t('teatr5')}}</p>
      </div>
      <div class="teatr__loc">
        {{$t('cart')}}
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.98625256618!2d69.26935931465792!3d41.30916267927142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b26f5943621%3A0xce7b994c18e6c17d!2z0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCQ0LrQsNC00LXQvNC40YfQtdGB0LrQuNC5INCR0L7Qu9GM0YjQvtC5INCi0LXQsNGC0YAg0LjQvC4g0JDQu9C40YjQtdGA0LAg0J3QsNCy0L7QuA!5e0!3m2!1sru!2s!4v1663670104136!5m2!1sru!2s" width="100%" height="600" style="border:0; margin-bottom:40px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.teatr{
    padding-top: 165px;
    background-color: #FFF8F1;
    &__img{
      justify-content: center;
      display: flex;
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
