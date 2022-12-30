<template>
  <h2>IMC</h2>
  <form @submit.prevent="imcCalcul()">
    <label for="taille">Votre Taille (en cm)</label>
    <input v-model="taille" id="taille" type="text" placeholder="indiquer votre taille en cm"> <br/><br/>
    <label for="poids">Votre Poids (kg)</label>
    <input v-model="poids" id="poids" type="text" placeholder="indiquer votre poids en kg"> <br/><br/>
    <button type="submit">Entrer</button>
  </form>
  <div class="imc-result">
    <span><p v-if="imc !== null"> Votre imc est de {{ imc }}</p></span>
  </div>
  
</template>

<script>
import { ref } from 'vue'

export default {
    setup(){

        let taille = ref(0)
        let poids = ref(0)
        let imc = ref(null)

        function imcCalcul() {
           
        let p = poids.value
        let t = taille.value / 100

        return imc.value =  Math.round(p / (Math.pow(t,2)))
    
        }

        return {
            poids,
            taille,
            imc,
            imcCalcul
        }
    }
}
</script>

<style>
input {
    padding: 2px;
}

label {
    padding: 10px;
}
</style>