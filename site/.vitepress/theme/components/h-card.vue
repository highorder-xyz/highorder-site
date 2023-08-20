<template>
    <Card class="h-card">
        <template #header>
            <img alt="" :src="$data.image_src" />
        </template>
        <template #title> {{ $data.title }} </template>
        <template #subtitle> {{ $data.sub_title }}</template>
        <template #content>
            <p>{{ $data.text }}
            </p>
        </template>
    </Card>
</template>

<script>
import Card from 'primevue/card';
export default {
    components: {
        Card
    },
    props: ['props'],
    data() {
        return this.getCardProps()
    },
    setup() {
    },
    methods: {
        getCardProps() {
            const props = this.$props.props
            return {
                'title': props.title,
                'text': props.text,
                'image_src': props.image
            }
        }
    }
}
</script>