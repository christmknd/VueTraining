<template>
  <div>
    <h2>Calculatrice</h2>
  </div>
</template>

<script>
export default {
    name: 'Calculatrice',
    methods: {
        add(a,b) {
            if (typeof(a) === Number || typeof(b) === Number ) {
                return a + b 
            } else {
                alert("Un des deux opérateurs n'\'est pas un nombre ")
            }
        },
        sub(a,b) {
            if (typeof(a) === Number || typeof(b) === Number ) {
                return a - b 
            } else {
                alert("Un des deux opérateurs n'\'est pas un nombre ")
            }
        },
        mult(a,b) {
            if (typeof(a) === Number || typeof(b) === Number ) {
                return a * b 
            } else {
                alert("Un des deux opérateurs n'\'est pas un nombre ")
            }
        },
        div(a,b) {
            if (typeof(a) === Number || typeof(b) === Number ) {
                if (b = 0) {
                    alert("Les division par zéro ne sont pas autorisé")
                }
                else {
                    return a/b
                }
            } else {
                alert("Un des deux opérateurs n'\'est pas un nombre ")
            }
        }
    }
}

</script>

<style>

</style>