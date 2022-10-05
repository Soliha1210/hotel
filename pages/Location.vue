<template>
  <div class="location ">
      <div class="location__title">
        Hotel Old City
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3045252365664!2d69.23855801479468!3d41.32399100788694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0b43b494af%3A0xe54519734d60a0be!2sOld%20city!5e0!3m2!1sru!2s!4v1663614029125!5m2!1sru!2s" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="location__hotel" >
        <div class="location__all">
          <div class="location__subtitle">{{$t('addressTitle')}}</div>
          <div class="location-text">
            {{$t('addressText')}}
            {{$t('orient')}}
          </div>
        </div>
        <div class="location__all">
          <div class="location__subtitle">{{$t('location')}} </div>
          <div class="location__num">+998 93 382 11 15
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
  .location{
    padding-top: 160px;
    background-color: #e9ded6;
    &__title{
      font-size: 42px;
      font-family: 'fm';
      text-align: center;
      margin-bottom: 30px;
    }
    &__all{
      display: flex;
      margin-left: 10px;
    }
    &__subtitle{
      font-size: 18px;
      margin-bottom: 14px;
      color: #874C10;
      font-family: 'fl';
      // margin-top: 20px;
    }
    &__text{
      color: #747474;
      font-size: 16px;
      font-family: 'fl';
      // margin-top: 20px;
    }
    &__num{
      font-size: 16px;
      // font-family: 'fl';
    }
  }
</style>
