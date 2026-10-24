<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <StatusPage title="Message not sent">
    <p>Something went wrong on our side and your message didn’t reach us.</p>
    <p>Please email Max directly at <a :href="`mailto:${site.email}`">{{ site.email }}</a>.</p>
  </StatusPage>
</template>
