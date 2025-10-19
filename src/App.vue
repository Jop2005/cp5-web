<template>
  <div id="app">
    <EstudianteForm />
    
    <EstudianteList />
    <footer>
      <p>página hecho por: Jonathan José Ortiz Pérez</p>
    </footer>
  </div>
</template>

<script setup>
import EstudianteForm from './components/EstudianteForm.vue';
import EstudianteList from './components/EstudianteList.vue';

// Importaciones - Composition API (script setup)

</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 20px;
}
</style>