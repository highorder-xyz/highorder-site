<template>
    <a :href="$data.href" :target="$data.target">
        <Button v-bind="getButtonProps()"></Button>
    </a>
</template>

<script>
import Button from 'primevue/button';
export default {
    components:{
        Button
    },
    props: ['props'],
    data() {
        const props = this.$props.props
        const href = props.href ?? ""
        return {
            href: href,
            target: props.open_new ? "_blank" : "_self"
        }
    },
    setup() {
    },
    methods: {
        getButtonProps(){
            const props = this.$props.props
            return {
                label: props.text ?? "",
                icon: props.icon ? `pi pi-${props.icon}`: "pi",
                text: true,
                severity: "secondary"
            }
        }
    }
}
</script>