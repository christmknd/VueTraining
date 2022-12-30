<template>
  <h2>IMC</h2>
  <div>
    <form @submit.prevent="imcCalcul()">
    <label for="taille">Votre Taille (en cm)</label>
    <input v-model.number="taille" id="taille" type="text" placeholder="indiquer votre taille en cm"> <br/><br/>
    <label for="poids">Votre Poids (kg)</label>
    <input v-model.number="poids" id="poids" type="text" placeholder="indiquer votre poids en kg"> <br/><br/>
    <button id="convert-button" type="submit">Entrer</button>
  </form>
  <div class="imc-result">
    <span><p v-if="imc !== null" id="p-result"> Votre imc est de {{ imc }}</p></span>
      <p v-if="imc < 18.5"> Insuffisance pondérale </p>
      <p v-else-if="imc >= 18.5 && imc < 25"> poids normal </p>
      <p v-else-if="imc >= 25 && imc < 30"> Surpoids </p>
      <p v-else> Obésité </p>
  </div>
</div>
</template>

<script>
import { ref} from 'vue'

export default {
    name: 'Imc',
    setup(){

        let taille = ref(0)
        let poids = ref(0)
        let imc = ref(null)
      
  
        function imcCalcul () {
          let p = poids.value
          let t = taille.value/100
          return imc.value =  Math.round(p /(Math.pow(t,2)))
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