<template>
  <div class="container">
    <h1 class="page-title text-center">Detalle de la Actividad</h1>
    <q-card v-if="actividad" class="actividad-detalle-card">
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
        <q-item v-if="actividad.descripcion">
          <q-item-section><strong>Descripción:</strong></q-item-section>
          <q-item-section>{{ actividad.descripcion }}</q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <q-btn @click="volver" label="Volver" color="primary" />
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.actividad-detalle-card {
  border: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  background-color: #2196f3 !important;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      actividad: null,
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
    async getActividadById(id) {
      try {
        const response = await axios.get(
          `http://localhost:5259/api/Actividad/GetById/${id}`
        );
        this.actividad = response.data;
      } catch (error) {
        console.error("Error al obtener la actividad:", error);
      }
    },
    volver() {
      this.$router.go(-1);
    },
  },
  created() {
    const id = this.$route.params.id;
    this.getActividadById(id);
  },
};
</script>
