<template>
  <div class="gallery">
    <div class="container">
      <div class="gallery__title">
        {{$t('gallery')}}
      </div>
      <div class="row">
        <div class="col-12 gallery__item ">
          <div v-viewer class="row">
            <div class="gallery__img">
              <img :key="src" :src="src" class="img col-4 col-sm-5 col-md-4 col-lg-4" v-for="src in images">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueViewer from 'v-viewer'
import image1 from '../assets/img/C0006T01.jpg'
import image2 from '../assets/img/C0010T01.jpg'
import image3 from '../assets/img/C0026T01.jpg'
import image4 from '../assets/img/C0037T01.jpg'
import image5 from '../assets/img/C0041T01.jpg'
import image6 from '../assets/img/C0042T01.jpg'
import image7 from '../assets/img/C0054T01.jpg'
import image8 from '../assets/img/C0057T01.jpg'
import image9 from '../assets/img/C0076T01.jpg'
import image10 from '../assets/img/C0080T01.jpg'
import image11 from '../assets/img/C0082T01.jpg'
import image14 from '../assets/img/IMG_2065.JPG'
import image15 from '../assets/img/IMG_2067.JPG'
import image17 from '../assets/img/photo.jpg'
import image18 from '../assets/img/IMG_2075.JPG'
import image19 from '../assets/img/IMG_2077.JPG'
import image20 from '../assets/img/photo4.jpg'
import image21 from '../assets/img/photo5.jpg'

export default {
components:{VueViewer},
  data(){
    return{
      toggler:false,
      images:[
        image1,image2,image3,image4,image5, image6,
        image7, image8, image9, image10, image11,
        image14,image15, image17,image18,image19, image20,image21
      ]
    }
  }
}
</script>

<style lang="scss">

.img {
  // width: 100%;
  height: 300px;
  padding: 10px 10px;
  object-fit: cover;
  transition: all .4s ease;
  &:hover {
    transform: scale(1.1);
  }
}
.gallery{
  padding-top: 200px;
  padding-bottom: 30px;
  background-color: #e9ded6;
  &_img{
    overflow: hidden;
    position: relative;
  }
  &__item{
  cursor:pointer;
  }

  &__title{
    font-size: 42px;
    font-family: 'fm';
    text-align: center;
  }

}
</style>
