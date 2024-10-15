<template>
  <div class="home">
    <ImageBanner />
    <MainContent />
  </div>
</template>

<script>
import ImageBanner from '@/components/ImageBanner.vue'
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'HomePage',
  components: {
    ImageBanner,
    MainContent
  }
}
</script>