<template>
  <div class="temperature">
    <h2>Temperature</h2>
    <form class="conversion">
        <label class="celsius-to-fahr">Celsius to Fahrenheit</label>
        <input type="text">
        <button v-on:click="celsiusToFahrenheit">Convertir</button> <br/><br/>
        <label class="fahr-to-celsius">Fahrenheit to Celsius</label>
        <input type="text">
        <button v-on:click="fahrenheitToCelsius">Convertir</button>
    </form>
    <div class="conversion-result">

    </div>
  </div>
</template>

<script>
 
export default {
    name : 'Temperature',
    methods: {
        fahrenheitToCelsius (fahreinheit) {
            let tmp1 , tmp2 , result ;
            if (typeof(fahreinheit) !== 'number' ) {
                return 'fahreinheit is undifined';
            } else {
                tmp1 = fahreinheit - 32;
                tmp2 = tmp1 / 9;
                result = tmp2 * 5;
            }
            return result;
        },
        celsiusToFahrenheit (celsius) {
            let tmp1 , tmp2 , result ;
            if (typeof(celsius) !== 'number' ) {
                return 'celsius is undifined';
            } else {
                if (celsius === 0 ) {
                    return  32;
                } else {
                    tmp1 = celsius * 9 ;
                    tmp2 = tmp1 /5 ;
                    result = tmp2 + 32;
            
                    return result
                }
            }    
        }
    }
}
</script>

<style>
.conversion {
  padding: 10px;
} 
</style>