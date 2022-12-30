<template>
  <div class="todo-list">
    <div class="todo-form">
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" type="text" placeholder="Ajouter nouvelle tache">
        <button type="submit">Add</button>
      </form>
    </div>
    <div class="todo-result">
      <h2>My Todolist</h2>
      <ul class="list">
        <li v-for="todo in todos" :key="todo.id" class="list-item">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(){
    const todos = ref([])
    const newTodo = ref('')

    function generateRandomId() {
    return Math.random().toString(16).slice(2);
  }

    function addTodo() {
        todos.value.push({
          id: generateRandomId(),
          name: this.newTodo,
        });
        newTodo.value = '';
      }
    function deleteTodo(id){
        todos.value = todos.value.filter((todo) => todo.id!== id);
    }

    return {
      todos,
      newTodo,
      addTodo,
      deleteTodo,
      generateRandomId
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
}


span {
  padding: 10px;
}
</style>