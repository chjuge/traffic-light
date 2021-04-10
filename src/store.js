import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        redLight: {
            turnedOn: false,
            baseDuration: 10,
            path: '/red',
        },
        yellowLight: {
            turnedOn: false,
            baseDuration: 3,
            path: '/yellow',
        },
        greenLight: {
            turnedOn: false,
            baseDuration: 15,
            path: '/green',
        },

        remainDuration: null,
        prevLight: null,
        activeLight: null,
        nextLight: null,
    },
    mutations: {

        switchOff(state) {
            state.redLight.turnedOn = false;
            state.yellowLight.turnedOn = false;
            state.greenLight.turnedOn = false;
        },
        switchOn(state, light) {
            state[light].turnedOn = true;
        },
        setActiveLight(state) {
            state.activeLight = state.redLight.turnedOn ? 'redLight' :
                state.yellowLight.turnedOn ? 'yellowLight' : 'greenLight';
                // sessionStorage.setItem('activeLight', state.activeLight);

        },
        setPrevLight(state) {
            state.prevLight = state.activeLight ? state.activeLight : null
        },
        setNextLight(state) {
            if (state.activeLight == 'redLight' || state.activeLight == 'greenLight') {
                state.nextLight = 'yellowLight';
                return;
            }
            state.nextLight = state.prevLight == 'redLight' ? 'greenLight' : 'redLight'
        },
        setRemainDuration(state, light) {
            state.remainDuration = state[light].baseDuration;
        },
        setRemainDurationFromStorage(state) {
            state.remainDuration = sessionStorage.getItem('timer');
        },

        timerCountDown(state) {
            setTimeout(function tick() {
                
                if (state.remainDuration > 1) {
                    setTimeout(tick, 1000);
                }
                state.remainDuration--;
                sessionStorage.setItem('timer', state.remainDuration );
                sessionStorage.setItem('activeLight', state.activeLight);
                console.log(sessionStorage.getItem('timer'));
                console.log(sessionStorage.getItem('activeLight'))
            }, 1000)
        },

    },
    actions: {

    },
    getters: {

        lightStatus: state => light => {
            return state[light].turnedOn;
        },
        duration: state => {
            return state.remainDuration;
        },
        path: state => {
            return state[state.nextLight].path;
        }
    }
})
