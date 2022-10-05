<template>
  <div class="rooms">
    <div class="container">
      <div class="rooms__title">
        {{$t('rooms')}}
      </div>
      <div class="rooms__text">
        {{$t('roomsText')}}
      </div>

      <div class="row">
        <div  v-for="(src,index) in images" :key="index" class="rooms__item col-4 col-12 col-sm-5 col-md-4 col-md-6" v-viewer>
          <img  :src="src.img" class="img-room">
            <div class="rooms__item-info">
            <div class="rooms__item-name">
              {{src.title}}
            </div>
            <div class="rooms__item-price">
              {{src.price}} UZS
            </div>
          </div>
        </div>
      </div>
      <div class="rooms__book">
        <a href="tel:+998 93 382 11 15">{{$t('book')}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import VueViewer from 'v-viewer'
  import picture from '../assets/img/photo.jpg'
  import picture2 from '../assets/img/photo2.jpg'
  import picture3 from '../assets/img/C0037T01.jpg'
  import picture4 from '../assets/img/C0057T01.jpg'
  import picture5 from '../assets/img/photo3.jpg'
  import picture6 from '../assets/img/C0026T01.jpg'
  export default {
    components: {
      VueViewer
    },
    data() {
      return {
        images: [{
          title: 'Double room',
          price: '500 000',
          img: picture
        }, {
          title: 'Twin room',
          price:'500 000',
          img: picture2
        }, {
          title: 'Family room',
          price:'750 000',
          img: picture3
        }, {
          title: 'Family room',
          price:'750 000',
          img: picture4
        }, {
          title: 'Family room',
          price:'750 000',
          img: picture5
        }, {
          title: 'Family room',
          price:'750 000',
          img: picture6
        }],
      }
    }
  }

</script>

<style lang="scss">


  .rooms {
    padding-top: 200px;
    background-color: #e9ded6;

    &__title {
      font-size: 80px;
      font-family: 'fm';
    }

    &__text {
      font-size: 24px;
      font-family: 'fl';
      margin-top: 30px;
    }

    &__item {
      margin-top: 30px;
      cursor:pointer;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        transition: 0.3s;
      }
      .img-room {
        width: 100%;
        height: 300px ;
      }
      // &-img{
      //   background-image: url(../assets/img/photo.jpg);
      //   background-size: cover;
      //   background-repeat: no-repeat;
      //   height: 250px;
      // }
      // &-img1{
      //   background-image: url(../assets/img/photo2.jpg);
      //   background-size: cover;
      //   background-repeat: no-repeat;
      //   height: 250px
      // }
      // &-img2{
      //   background-image: url(../assets/img/C0037T01.jpg);
      //   background-size: cover;
      //   background-repeat: no-repeat;
      //   height: 250px
      // }
      // &-img3{
      //   background-image: url(../assets/img/C0057T01.jpg);
      //   background-size: cover;
      //   background-repeat: no-repeat;
      //   height: 250px
      // }
      // &-img4{
      //   background-image: url(../assets/img/photo3.jpg);
      //   background-size: cover;
      //   background-repeat: no-repeat;
      //   height: 250px
      // }
      // &-img5{
      //   background-image: url(../assets/img/C0026T01.jpg);
      //   background-size: cover;
      //   background-repeat: no-repeat;
      //   height: 250px
      // }
      &-info {
        display: flex;
        position: relative;
        overflow: hidden;
        padding: 23px 20px 25px;
        margin-bottom: 5px;
        background: #F2F2F2;
        text-align: left;
        z-index: 3;
        justify-content: space-between;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #824609 0%, #FDCEA6 100%);
        }
      }

      &-name {
        font-family: 'fm';
        font-size: 25px;
      }

      &-price {
        font-family: 'fm';
        font-size: 25px;
      }
    }

    &__book {
      padding: 30px 0px;
      display: flex;
      justify-content: center;

      a {
        text-decoration: none;
        color: #FFFFFF;
        font-size: 18px;
        letter-spacing: 1.51px;
        text-transform: uppercase;
        background-color: black;
        padding: 12px;
        border: 1px solid #000;
        border-radius: 5px;

        &:hover {
          // color: #000;
          border: 1px solid #000;
          background-color: #060e51;
          transition: 0.8s;
        }
      }
    }
  }

  .modal-footer {
    display: none;
  }
  .image {
    height: 200px;
    cursor: pointer;
    margin: 5px;
    display: inline-block;
  }

</style>
