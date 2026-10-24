<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <StatusPage title="Message not sent">
    <p>Something went wrong on my side and your message didn’t reach me.</p>
    <p>Please email me directly at <a :href="`mailto:${site.email}`">{{ site.email }}</a>.</p>
  </StatusPage>
</template>
