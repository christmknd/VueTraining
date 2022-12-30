<template>
    <div class="math">
        <h1>Math App</h1>
        <Imc/>
        <Temperature/>
        <Counter/>
    </div>
</template>

<script>
import Imc from '../components/math/Imc.vue';
import Temperature from '../components/math/Temperature.vue';
import Counter from '@/components/math/Counter.vue';

export default {
    name: 'Math',
    components: {Imc,Temperature,Counter}
}
</script>

<style>

</style>