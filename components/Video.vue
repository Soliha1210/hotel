<template>
  <div class="div">
    <b-button @click="toggler = !toggler" variant="dark" class="homePage__about-btn">{{ $t('video') }}</b-button>
      <FsLightbox
        :toggler="toggler"
        :sources="sourses"
      />
  </div>
</template>

<script>
import FsLightbox from "fslightbox-vue";
import video1 from '../assets/video/267814553_1121906758558474_2325833240141885931_n.mp4'
import video2 from '../assets/video/267414691_1004082620182645_5286026091113582509_n.mp4'
export default {
  components:{
    FsLightbox
  },
  data(){
    return{
      sourses:[video1, video2],
      toggler:false
    }
  }
}
</script>

<style>

</style>
