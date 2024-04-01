<template>
  <div>
    <v-app>
      <Title>Webstore For Your Gameserver</Title>
      <Meta name="description" content="Start selling products from your gameserver with the most advanced webstore. Start for free!" />
      <Main />
      <Footer />
    </v-app>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>
