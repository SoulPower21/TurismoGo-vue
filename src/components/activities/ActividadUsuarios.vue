<template>
    <q-page class="q-pa-md">
      <q-list v-if="usuarios.length">
        <q-item-label header class="text-h6">{{ actividad.nombreActividad }}</q-item-label>
        <q-item-label>{{ actividad.descripcion }}</q-item-label>

        <q-separator spaced />
        <q-item-label header class="text-h6">Usuarios que solicitaron esta actividad</q-item-label>

        <q-item v-for="usuario in usuarios" :key="usuario.idUsuario" clickable>
          <q-item-section>
            <q-item-label>{{ usuario.nombre }} {{ usuario.apellidos }}</q-item-label>
            <q-item-label caption>{{ usuario.correoElectronico }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <div v-else class="q-pa-md text-center">
        <q-spinner color="primary" size="50px" />
        <div>Loading...</div>
      </div>
    </q-page>
  </template>

  <script>
  import { api } from 'boot/axios';

  export default {
    data() {
      return {
        usuarios: [],
        actividad: {}
      };
    },
    async mounted() {
      const idActividad = this.$route.params.id;
      try {
        const responseActividad = await api.get(`/actividades/${idActividad}`);
        this.actividad = responseActividad.data;

        const responseUsuarios = await api.get(`/actividades/${idActividad}/usuarios`);
        this.usuarios = responseUsuarios.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };
  </script>

  <style scoped>
  .q-page {
    max-width: 800px;
    margin: auto;
  }
  </style>

