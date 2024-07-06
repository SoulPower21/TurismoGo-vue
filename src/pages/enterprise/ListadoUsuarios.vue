<template>
  <div class="container">
    <h2>Listado de mis actividades</h2>
    <table>
      <thead>
        <tr>
          <th>Estado</th>
          <th>Nombre cliente</th>
          <th>Apellidos cliente</th>
          <th>Nombre actividad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(actividad, index) in actividades" :key="index">
          <td>{{ actividad.estado }}</td>
          <td>{{ actividad.usuario.nombre }}</td>
          <td>{{ actividad.usuario.apellidos }}</td>
          <td>{{ actividad.actividad.nombreActividad}}</td>
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
      let id = u.idEmpresa;
      this.fetchActividades(id);
    } else {
      console.error('No se encontraron datos de usuario en localStorage');
    }
  },
  methods: {
    fetchActividades(id) {
      axios.get(`http://localhost:5259/api/Actividad/GetReservas/${id}`)
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
