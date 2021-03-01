<template>
    <button v-bind:class="{ 'active': isActive, 'is-today': isToday }" @click="toggle">
        <slot />
    </button>
</template>

<script>
export default {
    props: [
        'index',
        'isToday',
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

    color: rgba(255, 255, 255, 0.3);

    transition: background 0.2s ease-out;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    &.active {
        background: rgba(255, 255, 255, 0.5);
        color: transparent;
    }

    &.is-today {
        color: rgba(255, 255, 255, 0.8);
    }
}
</style>
