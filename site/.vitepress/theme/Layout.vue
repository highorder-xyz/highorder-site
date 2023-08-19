<script setup lang="ts">
import { useData } from 'vitepress'
import Page from './components/Page.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.type == 'page'">
    <Page :props="frontmatter"></Page>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>
