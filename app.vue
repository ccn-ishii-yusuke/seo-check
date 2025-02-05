<script setup lang="ts">
useHead({
  title: 'sample',
  meta: [
    {
      name: 'description',
      content: 'sample'
    },
    {
        property: 'og:title',
        content: 'ogp sample',
    },
    {
        property: 'og:description',
        content: 'ogp sample',
    },
    {
        property: 'og:image',
        content: 'https://ccn-ishii-yusuke.github.io/seo-check/ogp.png',
    },
    {
        property: 'og:url',
        content: 'https://ccn-ishii-yusuke.github.io/seo-check/',
    },
    {
        property: 'og:site_name',
        content: 'ogp sample',
    },
    {
        property: 'og:image:width',
        content: '1200',
    },
    {
        property: 'og:image:height',
        content: '630',
    },
    {
        property: 'twitter:title',
        content: 'ogp sample'
    },
    {
        name: 'twitter:card',
        content: 'summary_large_image',
    },
  ]
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
