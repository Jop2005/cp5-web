<template>
<h2>Listado de Estudiantes</h2>
<div>
<table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>CI</th>
        <th>Es nuevo ingreso?</th>
      </tr>
    </thead>
    <tbody>
       <tr v-for="student in estudentStore.estudents":key="student.ci">
        <td>{{student.nombre}}</td>
        <td>{{student.apellidos}}</td>
        <td>{{student.ci}}</td>
        <td>{{ student.nuevoIngreso ? 'Si' : 'No' }} </td>
      </tr>
    </tbody>
</table>
</div>
</template>

<script setup>
import { useEstudentStore } from "../stores/user.js";
const estudentStore = useEstudentStore()
</script>

<style scoped>
div {
    overflow: auto;
}

/* Estilos generales para la tabla */
table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  margin: 20px 0;
}

/* Estilos para las celdas del encabezado */
thead th {
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
  font-weight: bold;
}

/* Estilos para las celdas del cuerpo */
tbody td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* Estilo para filas alternadas (opcional) */
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Efecto hover en las filas */
tbody tr:hover {
  background-color: #f5f5f5;
}
h2 {
    text-align: center;
    margin-top: 15px;
}
</style>