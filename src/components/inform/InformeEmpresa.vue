<!-- <template>
  <div class="container">
    <h2>Generar Informes</h2>

    <label for="actividad" class="label">Selecciona una Actividad:</label>
    <select id="actividad" v-model="selectedActividad" class="select">
      <option v-for="act in actividadesOptions" :value="act.value" :key="act.value">{{ act.label }}</option>
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
export default {
  data() {
    return {
      actividadesOptions: [
        { label: 'Excursión A', value: 1 },
        { label: 'Excursión B', value: 2 },
        { label: 'Excursión C', value: 3 }
      ],
      selectedActividad: null,
      empresas: [],
      usuarios: [],
      informeGenerado: false,
      loading: false
    };
  },
  methods: {
    generarInforme() {
      if (!this.selectedActividad) {
        alert('Por favor selecciona una actividad.');
        return;
      }

      this.loading = true;

      // Simulación de datos (reemplazar con lógica real)
      setTimeout(() => {
        // Simulación de empresas
        this.empresas = [
          {
            ID_Empresa: 1,
            NombreEmpresa: 'Empresa A',
            Direccion: 'Dirección A',
            Telefono: '123456789',
            CorreoElectronico: 'empresaA@example.com'
          },
          {
            ID_Empresa: 2,
            NombreEmpresa: 'Empresa B',
            Direccion: 'Dirección B',
            Telefono: '987654321',
            CorreoElectronico: 'empresaB@example.com'
          }
        ];

        // Simulación de usuarios
        this.usuarios = [
          {
            ID_Usuario: 1,
            Nombre: 'Usuario 1',
            Apellidos: 'Apellido 1',
            CorreoElectronico: 'usuario1@example.com',
            Rol: 'Rol 1'
          },
          {
            ID_Usuario: 2,
            Nombre: 'Usuario 2',
            Apellidos: 'Apellido 2',
            CorreoElectronico: 'usuario2@example.com',
            Rol: 'Rol 2'
          }
        ];

        this.informeGenerado = true;
        this.loading = false;
      }, 1000); // Simulación de tiempo de carga
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
  background-color: #f0f5f9; /* Color de fondo celeste */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #2c3e50; /* Color de texto oscuro */
}

.select {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff; /* Fondo blanco */
}

.btn {
  margin-top: 16px;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #3498db; /* Color celeste */
  color: #ffffff; /* Texto blanco */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980b9; /* Color celeste más oscuro al pasar el mouse */
}

.resultados {
  margin-top: 20px;
}

.item {
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff; /* Fondo blanco */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.item h4 {
  font-size: 18px;
  color: #2c3e50; /* Color de texto oscuro */
  margin-bottom: 8px;
}

.item p {
  margin: 4px 0;
  color: #34495e; /* Color de texto más oscuro */
}

.q-spinner {
  margin: 20px auto;
}

</style> -->

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
import { api } from 'boot/axios'; // Asegúrate de importar correctamente tu configuración de Axios

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
      console.log('Actividades recibidas:', response.data); // Agregar log para verificar los datos recibidos
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
  background-color: #e0f7fa; /* Color de fondo celeste */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #2c3e50; /* Color de texto oscuro */
}

.select {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff; /* Fondo blanco */
}

.btn {
  margin-top: 16px;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #00796b; /* Color celeste */
  color: #ffffff; /* Texto blanco */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #004d40; /* Color celeste más oscuro al pasar el mouse */
}

.resultados {
  margin-top: 20px;
}

.item {
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff; /* Fondo blanco */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.item h4 {
  font-size: 18px;
  color: #2c3e50; /* Color de texto oscuro */
  margin-bottom: 8px;
}

.item p {
  margin: 4px 0;
  color: #34495e; /* Color de texto más oscuro */
}

.q-spinner {
  margin: 20px auto;
}
</style>
