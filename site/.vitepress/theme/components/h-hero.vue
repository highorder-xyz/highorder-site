<template>
    <div class="h-hero">
        <img alt="" :src="$data.image_src" />
        <div class="title"> {{ $data.title }} </div>
        <div>{{ $data.text }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['props'],
    data() {
        return this.getHeroProps()
    },
    setup() {
    },
    methods: {
        getHeroProps() {
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