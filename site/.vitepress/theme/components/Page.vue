
<template>
  <div class="page">
    <template v-for="element in $props.props.elements">
        <Element :props="element"></Element>
    </template>
  </div>
</template>

<script>
export default {
    props: ['props'],
    setup() {
    },
}
</script>
