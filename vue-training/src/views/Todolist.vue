<template>
  <div class="todolist">
    <TodoForm/>
    <Todos/>
  </div>
</template>

<script>
import TodoForm from '../components/todolist/TodoForm.vue';
import Todos from '../components/todolist/Todos.vue';

export default {
    name: 'Todolist',
    components: {TodoForm, Todos }
}
</script>

<style>

</style>