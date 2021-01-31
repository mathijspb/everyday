<template>
    <button v-bind:class="{ 'active': isActive }" @click="toggle"></button>
</template>

<script>
export default {
    props: [
        'index',
    ],

    computed: {
        isActive() {
            return this.$store.state.days.indexOf(this.index) > -1;
        },
    },

    updated() {
    },

    mounted() {
    },

    methods: {
        toggle() {
            this.$store.commit('toggleDay', this.index);
        },
    },
};
</script>

<style scoped lang="scss">
button {
    display: block;

    background: rgba(255, 255, 255, 0.1);

    border: 0;
    outline: 0;
    cursor: pointer;

    transition: background 0.2s ease-out;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    &.active {
        background: rgba(255, 255, 255, 0.5);
    }
}
</style>
