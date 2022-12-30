<template>
  <div className="Counter">
            <h2>Count</h2>

            <div>
            <p v-on:change="count" data-testid = "first-counter">{{count}}</p> 
            <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button>
            <button @click="countRestart">Restart</button>
            </div> 
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'Counter',
    setup() {
        let count = ref(0)

        function increment(){
            count.value ++;
        }

        function decrement(){
            if(count.value > 0) {
                count.value --;
            }
        }

        function countRestart(){
            count.value = 0
        }

        return {
            count,
            increment,
            decrement,
            countRestart
        }
    }
}
</script>

<style>

</style>