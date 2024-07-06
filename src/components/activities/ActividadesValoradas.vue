<template>
    <div>
      <h2>Actividades más Valoradas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Valoración Promedio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="actividad in actividades" :key="actividad.ID_Actividad">
            <td>{{ actividad.NombreActividad }}</td>
            <td>{{ actividad.ValoracionPromedio }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import api from '../api/index.js';
  
  export default {
    data() {
      return {
        actividades: [],
      };
    },
    created() {
      this.fetchActividadesMasValoradas();
    },
    methods: {
      fetchActividadesMasValoradas() {
        api.get('/actividades/mas-valoradas')
          .then(response => {
            this.actividades = response.data;
          })
          .catch(error => {
            console.error('Error fetching highest rated activities:', error);
          });
      },
    },
  };
  </script>
  