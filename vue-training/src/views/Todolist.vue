<template>
  <div class="todolist">
    <Todos/>
  </div>
</template>

<script>
import Todos from '../components/todolist/Todos.vue';

export default {
    name: 'Todolist',
    components: { Todos }
}
</script>

<style>

</style>