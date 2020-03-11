new Vue ({
    el: "#app",
    data () {
        return {
            rates: null
        }
    },
    created () {
        axios.get('https://api.exchangeratesapi.io/latest')
        .then((response) => {
            this.rates = response.data.rates
            console.log(response)
        })
    }

});
