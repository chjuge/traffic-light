import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        redLight: {
            turnedOn: false,
            baseDuration: 10,
        },
        yellowLight: {
            turnedOn: false,
            baseDuration: 3,
        },
        greenLight: {
            turnedOn: false,
            baseDuration: 15,
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
        },
        setPrevLight(state) {
            state.prevLight = state.activeLight;
        },
        setNextLight(state) {
            if (state.activeLight == 'redLight' || state.activeLight == 'greenLight') {
                state.nextLight = 'yellowLight';
                return;
            }
            state.nextLight = state.prevLight == 'redLight' ? 'greenLight' : 'redLight'
        },
        
    },
    actions: {

    },
    getters: {
        allState(state) {
            return state
        }
    }
})
