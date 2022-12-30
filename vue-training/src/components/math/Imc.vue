<template>
  <h2>IMC</h2>
  <div>
    <label for="poids">Votre Poids (kg)</label>
    <input v-model.number="poids" id="poids" type="number" placeholder="indiquer votre poids en kg"> <br/><br/>
    <label for="taille">Votre Taille (en cm)</label>
    <input v-model.number="taille" id="taille" type="number" placeholder="indiquer votre taille en cm"> <br/><br/>
    <button @click="imc" id="convert-button" type="submit">Entrer</button>
    <span><p id="p-result" v-if="imc !== null" > Votre imc est de {{ imc }}</p></span>
    <!--
 <template v-if="imc < 18.5">
      <p> Insuffisance pondérale </p>
    </template>
    <template v-else-if="18.5 < imc < 25">
      <p> poids normal </p>
    </template>
    <template v-else-if="25 < imc < 30">
      <p> Surpoids </p>
    </template>
    <template v-else>
      <p> Obèse </p>
    </template>
    -->
  </div>
  
</template>

<script>
import { ref , computed} from 'vue'

export default {
    name: 'Imc',
    setup(){

        let taille = ref(0)
        let poids = ref(0)

        let p = poids.value
        let t = taille.value / 100

  
         let imc = computed(() => {
          Math.round(p / (Math.pow(t,2)))
         }) 

        return {
            poids,
            taille,
            imc,
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