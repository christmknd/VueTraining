<template>
    <div class="math">
        <h1>Math App</h1>
        <Imc/>
        <Temperature/>
    </div>
</template>

<script>
import Imc from '../components/math/Imc.vue';
import Temperature from '../components/math/Temperature.vue';

export default {
    name: 'Math',
    components: {Imc , Temperature}
}
</script>

<style>

</style>