<template>
    <div class="math">
        <h1>Math App</h1>
        <Imc/>
        <Temperature/>
        <Calculatrice/>
    </div>
</template>

<script>
import Imc from '../components/math/Imc.vue';
import Temperature from '../components/math/Temperature.vue';
import Calculatrice  from '../components/math/Calculatrice.vue';

export default {
    name: 'Math',
    components: {Imc , Temperature, Calculatrice}
}
</script>

<style>

</style>