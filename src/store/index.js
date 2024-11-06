import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        startDate: new Date(2024, 10, 3),
        endDate: new Date(2024, 11, 4),
        days: [],
    },
    mutations: {
        updateStartDate(state, value) {
            state.startDate = value;
        },
        updateEndDate(state, value) {
            state.endDate = value;
        },
        toggleDay(state, value) {
            const index = state.days.indexOf(value);
            if (index === -1) {
                state.days.push(value);
            } else {
                state.days.splice(index, 1);
            }
        },
    },
});
