<template>
    <a class="row" href="/">
        <img :src="$props.props.image_src" class="logo" />
        <div class="logo-text" v-if="$props.props.text">{{ props.text }}</div>
    </a>
</template>

<script>
export default {
    props: ['props'],
    setup() {
    },
}
</script>