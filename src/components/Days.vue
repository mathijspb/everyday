<template>
    <div class="days">
        <Day v-for="(day, index) in days" v-bind:key="index" v-bind:index="index"></Day>
    </div>
</template>

<script>
import moment from 'moment';
import Day from '@/components/Day';

export default {
    props: [
        'start-date',
        'end-date',
    ],

    components: {
        Day,
    },

    computed: {
        days() {
            const days = [];
            console.log(this.$store.state.startDate);
            const start = moment(this.$store.state.startDate);
            const end = moment(this.$store.state.endDate);
            const count = end.diff(start, 'days');
            for (let i = 0; i < count; i++) {
                days.push(i);
            }
            return days;
        },
    },

    updated() {
    },

    mounted() {
        // console.log(this.startDate);
    },
};
</script>

<style scoped lang="scss">
.days {
    display: grid;

    grid-template-columns: repeat(23, 2fr);
    // grid-template-rows: repeat(10, 2fr);

    column-gap: 1px;
    row-gap: 1px;

    height: 100vh;
}
</style>
