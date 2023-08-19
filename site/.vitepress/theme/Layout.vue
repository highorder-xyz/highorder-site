<script setup lang="ts">
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.type == 'page'">
    <h1> hola page </h1>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>
