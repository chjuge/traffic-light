export default {

    mounted() {
        this.$store.commit('timerCountDown');

    },

    updated() {
        if (this.timerDuration == 0) {
            this.$router.push(this.nextPath);
        }
    },

    computed: {
        red() {
            return this.$store.getters.lightStatus('redLight')
        },
        green() {
            return this.$store.getters.lightStatus('greenLight')
        },
        yellow() {
            return this.$store.getters.lightStatus('yellowLight')
        },
        timerDuration() {
            return this.$store.getters.duration
        },
        nextPath() {
            return this.$store.getters.path
        },
        flicking() {
            return this.timerDuration <= 3
        }
    }
}
