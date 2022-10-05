<template>
<div class="kitchen">
  <div class="container">
    <div class="kitchen__all">
      <div class="kitchen__title">
        {{$t('kitchens')}}
      </div>
      <div class="kitchen__text">
        {{$t('kitchenText')}}
      </div>
      <div class="kitchen__item">
        <div class="kitchen__images">
          <div class="kitchen__img"></div>
          <div class="kitchen__img2"></div>
        </div>
        <div class="kitchen__img3"></div>
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
.kitchen{
  padding-top: 192px;
  &__title{
    font-size: 52px;
    font-family: 'fb';
    text-align: center;
  }
  &__text{
    font-size: 22px;
    font-family: 'fl';
    margin-top: 20px;
    text-align: center;
  }
  &__item{
    display: flex;
    margin-left: 53px;
  }
  &__img{
    background-image: url(../assets/img/C0010T01.jpg);
    height: 370px;
    width: 600px;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 10px 0px;
  }
  &__img2{
    background-image: url(../assets/img/C0080T01.jpg);
    height: 370px;
    width: 600px;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 10px 0px;
  }
  &__img3{
    background-image: url(../assets/img/IMG_2061.JPG);
    // height: 495px;
    width: 500px;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 10px 10px;
  }
}
</style>
