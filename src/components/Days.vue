<template>
    <div class="days">
        <Day v-for="(day, index) in days" v-bind:key="index" v-bind:index="index" v-bind:isToday="day.isToday">{{ day.day }}</Day>
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
            const start = moment(this.$store.state.startDate);
            const end = moment(this.$store.state.endDate);
            const count = end.diff(start, 'days');
            for (let i = 0; i < count; i++) {
                const day = moment(this.$store.state.startDate).add(i + 1, 'days');
                days.push({
                    day: `${day.date()}`,
                    isToday: moment().isSame(day, 'day'),
                });
            }
            return days;
        },
    },

    updated() {
    },

    mounted() {
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
