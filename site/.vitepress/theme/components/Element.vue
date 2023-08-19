<template>
    <Header v-if="$props.props.type == 'header'" :props="$props.props"></Header>
</template>

<script>
export default {
    props: ['props'],
    setup() {
    },
}
</script>
