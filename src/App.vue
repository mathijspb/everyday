<template>
    <div id="app">
        <!-- <Datepicker v-model="startDate" /> -->
        <!-- <Datepicker v-model="endDate" /> -->
        <Days
            v-bind:start-date="startDate"
            v-bind:end-date="endDate"
        />
    </div>
</template>

<script>
// import Datepicker from 'vuejs-datepicker';
import Days from '@/components/Days';

export default {
    name: 'App',

    components: {
        // Datepicker,
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
