<template>
  <div class="museum">
    <div class="container">
      <div class="row">
        <div class="col-6  museum__img">
          <img src="../assets/img/museum.jpg" alt="">
        </div>
        <div class="col-6  museum__img">
          <img src="../assets/img/amirtemur.jpg" alt="">
        </div>
      </div>

      <div class="museum__title">
        {{$t('palace')}}
      </div>
      <div class="museum__text">
        {{$t('museum')}}<p>{{$t('museum2')}}</p>  {{$t('museum3')}} <p></p>
      </div>
      <div class="museum__loc">
        {{$t('cart')}}
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.780889759538!2d69.2767681147943!3d41.31363000852838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2efdebfa1b%3A0x162c34a35b86b93c!2z0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC80YPQt9C10Lkg0LjRgdGC0L7RgNC40Lgg0KLQtdC80YPRgNC40LTQvtCy!5e0!3m2!1sru!2s!4v1663665014545!5m2!1sru!2s" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.row{
  justify-content: center;
}
  .museum{
    margin-top: 200px;
    background-color: #FFF8F1;
    &__img{
      img{
        border-radius: 5px;
        width: 100%;
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
