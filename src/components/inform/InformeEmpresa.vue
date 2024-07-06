
<template>
  <div class="container">
    <h2>Generar Informes</h2>

    <label for="actividad" class="label">Selecciona una Actividad:</label>
    <select id="actividad" v-model="selectedActividad" class="select">
      <option v-for="act in actividadesOptions" :value="act.idActividad" :key="act.idActividad">{{ act.nombreActividad }}</option>
    </select>

    <q-btn @click="generarInforme" color="primary" label="Generar Informe" class="btn" />

    <div v-if="informeGenerado" class="resultados">
      <div v-if="empresas.length > 0">
        <h3>Empresas de Turismo por Actividad</h3>
        <ul>
          <li v-for="empresa in empresas" :key="empresa.ID_Empresa" class="item">
            <h4>{{ empresa.NombreEmpresa }}</h4>
            <p>Dirección: {{ empresa.Direccion }}</p>
            <p>Teléfono: {{ empresa.Telefono }}</p>
            <p>Correo Electrónico: {{ empresa.CorreoElectronico }}</p>
          </li>
        </ul>
      </div>

      <div v-if="usuarios.length > 0">
        <h3>Usuarios por Actividad</h3>
        <ul>
          <li v-for="usuario in usuarios" :key="usuario.ID_Usuario" class="item">
            <h4>{{ usuario.Nombre }} {{ usuario.Apellidos }}</h4>
            <p>Correo Electrónico: {{ usuario.CorreoElectronico }}</p>
            <p>Rol: {{ usuario.Rol }}</p>
          </li>
        </ul>
      </div>
    </div>

    <q-spinner v-if="loading" color="primary" size="50px" />
  </div>
</template>

<script>
import { api } from 'boot/axios';
export default {
  data() {
    return {
      actividadesOptions: [],
      selectedActividad: null,
      empresas: [],
      usuarios: [],
      informeGenerado: false,
      loading: false
    };
  },
  async created() {
    try {
      const response = await api.get('Actividad/GetAll');
      console.log('Actividades recibidas:', response.data);
      this.actividadesOptions = this.filtrarActividadesUnicas(response.data);
    } catch (error) {
      console.error('Error al obtener las actividades:', error);
    }
  },
  methods: {
    filtrarActividadesUnicas(actividades) {
      const actividadMap = new Map();

      actividades.forEach(actividad => {
        if (!actividadMap.has(actividad.nombreActividad)) {
          actividadMap.set(actividad.nombreActividad, actividad);
        }
      });

      return Array.from(actividadMap.values());
    },
    async generarInforme() {
      if (!this.selectedActividad) {
        alert('Por favor selecciona una actividad.');
        return;
      }

      this.loading = true;

      try {
        const responseEmpresas = await api.get(`/actividades/${this.selectedActividad}/empresas`);
        this.empresas = responseEmpresas.data;

        const responseUsuarios = await api.get(`/actividades/${this.selectedActividad}/usuarios`);
        this.usuarios = responseUsuarios.data;

        this.informeGenerado = true;
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #e0f7fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #2c3e50;
}

.select {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
}

.btn {
  margin-top: 16px;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #00796b;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #004d40;
}

.resultados {
  margin-top: 20px;
}

.item {
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item h4 {
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 8px;
}

.item p {
  margin: 4px 0;
  color: #34495e;
}

.q-spinner {
  margin: 20px auto;
}
</style>
