<template>
  <div class="container">
    <h2>Listado de mis actividades</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre de la Actividad</th>
          <th>Descripción</th>
          <th>Destino</th>
          <th>Fecha de Inicio</th>
          <th>Fecha de Fin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(actividad, index) in actividades" :key="index">
          <td>{{ actividad.nombreActividad }}</td>
          <td>{{ actividad.descripcion }}</td>
          <td>{{ actividad.destino }}</td>
          <td>{{ actividad.fechaInicio }}</td>
          <td>{{ actividad.fechaFin }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      actividades: []
    };
  },
  created() {
    const u = JSON.parse(localStorage.getItem('userData'));
      if (u) {
        let id=u.idEmpresa;
        this.fetchActividades(id);
      } else {
        console.error('No se encontraron datos de usuario en localStorage');
      }
  },
  methods: {
    fetchActividades(id) {
      axios.get(`http://localhost:5259/api/Actividad/GetActividades/${id}`) // Cambia esta URL a tu endpoint
        .then(response => {
          this.actividades = response.data;
        })
        .catch(error => {
          console.error('Error al obtener las actividades:', error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  margin: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
