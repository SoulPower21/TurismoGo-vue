<template>
    <div>
      <h2>Actividades más Reservadas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Número de Reservas</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="actividad in actividades" :key="actividad.ID_Actividad">
            <td>{{ actividad.NombreActividad }}</td>
            <td>{{ actividad.NumeroReservas }}</td>
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
      this.fetchActividadesMasReservadas();
    },
    methods: {
      fetchActividadesMasReservadas() {
        api.get('/actividades/mas-reservadas')
          .then(response => {
            this.actividades = response.data;
          })
          .catch(error => {
            console.error('Error fetching most reserved activities:', error);
          });
      },
    },
  };
  </script>
  