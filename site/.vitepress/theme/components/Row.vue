<template>
    <div class="row">
        <Element v-for="element in $props.props.elements" :props="element"></Element>
    </div>
</template>

<script>
export default {
    props: ['props'],
    setup() {
    },
}
</script>
