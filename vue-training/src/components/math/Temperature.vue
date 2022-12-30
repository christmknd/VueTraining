<template>
  <div class="temperature">
    <h2>Temperature</h2>
        <form @submit.prevent="fahrenheitToCelsius()">
            <label for="celsius">Celsius to Fahrenheit</label>
            <input v-model="celsius" type="text">
            <button class="conversion-celsius" type="submit">Convertir</button> 
            <br/><br/>
            <div class="fahr-result">
            <span><p v-if="ftoc !== null"> Temperature : {{ ftoc }} Farhenheit</p></span>
            </div>
        </form>
       

        <form @submit.prevent="celsiusToFahrenheit()">
            <label class="fahreinheit">Fahrenheit to Celsius</label>
            <input v-model="fahreinheit" type="text">
            <button class="conversion-fahr" type="submit">Convertir</button>
            <br/><br/>
            <div class="celsius-result">
            <span><p v-if="ctof !== null">Temperature :  {{ ctof }} Celsius</p></span>
            </div>
        </form>
       
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(){

        let fahreinheit = ref(0)
        let ftoc = ref(null)

        let celsius = ref(0)
        let ctof = ref(null)
    

       function fahrenheitToCelsius() {
            return ftoc.value = (fahreinheit.value - 32) / 1.8
        }

        function celsiusToFahrenheit () {
            return ctof.value = (celsius.value * 1.8) + 32
        }

        return {
            celsius, 
            fahreinheit,
            ctof,
            ftoc,
            fahrenheitToCelsius,
            celsiusToFahrenheit
        }
    }
}
</script>

<style>
.conversion {
  padding: 10px;
} 

input {
    padding: 2px;
}

label {
    padding: 10px;
}
</style>