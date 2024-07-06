<template>
  <div class="container">
    <h1 class="page-title text-center">Actividades Turismo</h1>
    <div class="mb-3 text-center">
      <q-input
        v-model="searchQuery"
        placeholder="Buscar actividades por nombre o descripción"
        outlined
        dense
      />
    </div>
    <div class="row">
      <div
        v-for="actividad in filteredActividades"
        :key="actividad.idActividad"
        class="col-md-4 mb-3"
      >
        <q-card
          class="actividad-card"
          @click="irAReserva(actividad.idActividad)"
        >
          <q-card-section class="bg-primary text-white">
            <div class="text-h6 text-center">
              {{ actividad.nombreActividad }}
            </div>
          </q-card-section>

          <q-img
            v-if="actividad.imagen"
            :src="actividad.imagen"
            class="card-image"
            :ratio="16 / 9"
          />

          <q-list dense>
            <q-item v-if="actividad.destino">
              <q-item-section><strong>Destino:</strong></q-item-section>
              <q-item-section>{{ actividad.destino }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section><strong>Fecha:</strong></q-item-section>
              <q-item-section>
                {{ formatDate(actividad.fechaInicio) }} -
                {{ formatDate(actividad.fechaFin) }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section><strong>Precio:</strong></q-item-section>
              <q-item-section>${{ actividad.precio }}</q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.actividad-card {
  border: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* Añadir cursor pointer para indicar que es clicable */
}
.mb-3 {
  margin-bottom: 20px;
}
.page-title {
  font-size: 2rem;
  margin-bottom: 20px;
}
.q-card-section {
  padding: 16px;
}
.card-image {
  max-height: 200px;
  object-fit: cover;
}
.text-h6 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.empresa-nombre {
  font-size: 0.875rem;
  color: #757575;
}

.q-list {
  padding: 0 16px 16px;
}

.q-item-section:first-child {
  font-weight: bold;
  color: #424242;
}

.q-item-section:last-child {
  color: #424242;
}
.bg-primary {
  background-color: #2196f3 !important; /* Use a vibrant blue */
}
</style>

<script>
import axios from "axios";
import { mapState } from "vuex"; // Importar mapState si usas Vuex

export default {
  data() {
    return {
      actividades: [],
      searchQuery: "",
    };
  },
  computed: {
    ...mapState(["actividades"]), // Usar Vuex para acceder a las actividades si es necesario
    filteredActividades() {
      if (!this.searchQuery) {
        return this.actividades;
      }
      const lowerCaseQuery = this.searchQuery.toLowerCase();
      return this.actividades.filter((actividad) => {
        return (
          actividad.nombreActividad.toLowerCase().includes(lowerCaseQuery) ||
          actividad.descripcion.toLowerCase().includes(lowerCaseQuery)
        );
      });
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
    async getActividades() {
      try {
        const response = await axios.get(
          "http://localhost:5259/api/Actividad/GetAll"
        );
        this.actividades = response.data;
      } catch (error) {
        console.error("Error al obtener las actividades:", error);
      }
    },
    irAReserva(idActividad) {
      this.$router.push({ name: "Reserva", params: { id: idActividad } });
    },
  },
  mounted() {
    this.getActividades();
  },
};
</script>
