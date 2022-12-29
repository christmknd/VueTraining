<template>
    <div class="math">
        <Imc/>
        <Temperature/>
        <Calculatrice/>
    </div>
</template>

<script>
import Calculatrice from '../components/math/Calculatrice.vue';
import Imc from '../components/math/Imc.vue';
import Temperature from '../components/math/Temperature.vue';

export default {
    name: 'Math',
    components: {Calculatrice , Imc , Temperature}
}
</script>

<style>

</style>