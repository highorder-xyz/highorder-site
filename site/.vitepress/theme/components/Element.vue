<template>
    <Header v-if="$props.props.type == 'header'" :props="$props.props"></Header>
    <Logo v-if="$props.props.type == 'logo'" :props="$props.props"></Logo>
    <h-button v-if="$props.props.type == 'button'" :props="$props.props"></h-button>
</template>

<script>
export default {
    props: ['props'],
    setup() {
    },
    methods: {
    }
}
</script>
