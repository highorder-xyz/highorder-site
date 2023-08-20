<template>
    <Header v-if="$props.props.type == 'header'" :props="$props.props"></Header>
    <Logo v-if="$props.props.type == 'logo'" :props="$props.props"></Logo>
    <h-button v-if="$props.props.type == 'button'" :props="$props.props"></h-button>
    <h-hero v-if="$props.props.type == 'hero'" :props="$props.props"></h-hero>
    <h-card v-if="$props.props.type == 'card'" :props="$props.props"></h-card>
    <h-footer v-if="$props.props.type == 'footer'" :props="$props.props"></h-footer>
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
