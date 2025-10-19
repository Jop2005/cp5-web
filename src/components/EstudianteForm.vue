<template>
    <div class="col-12 col-md-12">
        <h2>Agregar Estudiante</h2>
        <form >
            <h3>Nombre</h3>
            <input type="text" id="nombre"  v-model="nombre">
            <div id= "error" v-if="a">
                <p>Este campo es obligatorio</p>
            </div>
            <h3>Apellidos</h3>
            <input type="text" id="apellidos" v-model="apellidos">
            <div id= "error" v-if="b">
                <p>Este campo es obligatorio</p>
            </div>
            <h3>CI</h3>
            <input type="text" id="ci" v-model="ci">
            <div id= "error" v-if="c">
                <p>Este campo es obligatorio</p>
            </div>
            <div id= "error" v-if="e">
                <p>CI tiene que tener 11 digitos</p>
            </div>
            <br>
            <label > <input type="checkbox" id="nuevo" v-model="ni">Nuevo Ingreso</label>
            <br >
            <div class="boton">
               <button @click="putEstudent" type="button" id = "boton">Agregar Estudiante</button>
            </div>
        </form>
    </div>
</template>
<script setup>

import { ref } from "vue";
import { useEstudentStore } from "../stores/user.js";

 const nombre = ref('')
 const apellidos = ref('')
 const ci = ref('')
 const ni = ref(false)
 const a = ref(false)
 const b = ref(false)
 const c = ref(false)
 const e = ref(false)
 const estudentStore = useEstudentStore()

 const mostrarErrorEnElemento = (elemento) => {
        
    return elemento.value === ''
 }

 const validacion = () => {
    console.log(nombre.value);
    console.log(apellidos.value);
    console.log(ci.value);
    console.log(ni.value);
    console.log(typeof ni.value);
    
    a.value = mostrarErrorEnElemento(nombre)
    b.value= mostrarErrorEnElemento(apellidos)
    c.value = mostrarErrorEnElemento(ci)
    if (!c.value && ci.value.length !== 11) {
        
        e.value = true
    }
    return a.value || b.value || c.value
 }
 const putEstudent = () => {
    a.value = b.value = c.value = e.value = false
    if (!validacion()) {
    
        estudentStore.addEstudent({
            nombre: nombre.value,
            apellidos: apellidos.value,
            ci: ci.value,
            nuevoIngreso: ni.value
        })
        nombre.value = ''
        apellidos.value = ''
        ci.value = ''
        ni.value = false
    }

 }

</script>


<style scoped>
body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
h2 {

    text-align: center;
}

#nombre, #apellidos, #ci {
    width: 100%;
    margin-bottom: 15px;
}
form {
    margin: 10px;
}

label {
    margin-bottom: 15px;
    padding-right: 10px;
}

#nuevo {
    margin-right: 10px;
}

.boton {
    display: flex;
    justify-content: center;
}

button {
    background-color: blue;
    color: white;
}
 #error {
    background-color: red;
 }
</style>