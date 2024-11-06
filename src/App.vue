<template>
    <div id="app">
        <Days
            v-bind:start-date="startDate"
            v-bind:end-date="endDate"
        />
    </div>
</template>

<script>
import Days from '@/components/Days';

export default {
    name: 'App',

    components: {
        Days,
    },

    computed: {
        startDate: {
            get() {
                return this.$store.state.startDate;
            },
            set(value) {
                this.$store.commit('updateStartDate', value);
            },
        },
        endDate: {
            get() {
                return this.$store.state.endDate;
            },
            set(value) {
                this.$store.commit('updateEndDate', value);
            },
        },
    },
};
</script>

<style lang="scss">
body {
    margin: 0;
}

#app {
    background: black;
}
</style>
