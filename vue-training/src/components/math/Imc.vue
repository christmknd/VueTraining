<template>
  <h2>IMC</h2>
  <form>
    <label>Votre Taille</label>
    <input v-model="taille" type="text" placeholder="indiquer votre taille en cm"> <br/><br/>
    <label>Votre Poids</label>
    <input v-model="poids" type="text" placeholder="indiquer votre poids en kg"> <br/><br/>
    <button @click="imc(taille,poids)">Entrer</button>
  </form>
  
</template>

<script>
export default {
    name: 'Imc', 
    data(){
        return {
            taille: '',
            poids: '',
        }
    },
    methods: {
        imc(taille, poids) {
            if (typeof(taille) === Number || typeof(poids) === Number ) {
                alert('Le taille et/ou le poids doivent être des nombres')
            } else {
                if (taille < 0) {
                alert('La taille d\'une personne ne peux pas être à inférieur ou égal à zéro')
            } else {
                return  result = poids / (Math.pow(taille,2)) 
            }
            }
            console.log(result)
        }
    }
}
</script>

<style>

</style>