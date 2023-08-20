
<template>
    <div class="header h-header">
        <div class="row">
            <Element v-for="element in $props.props.start_elements" :props="element"></Element>
        </div>
        <div class="row">
            <Element v-for="element in $props.props.elements" :props="element"></Element>
        </div>
        <div class="row">
            <Element v-for="element in $props.props.end_elements" :props="element"></Element>
        </div>
    </div>
    <div class="header-holder">

    </div>
</template>

<script>
export default {

    props: ['props'],
    setup() {
    },
}
</script>
