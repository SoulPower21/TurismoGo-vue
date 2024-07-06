
<template>
  <div class="container">
    <h2>Informes y Estadísticas</h2>

    <q-btn
      @click="generarInforme"
      color="primary"
      label="Generar Informe"
      class="btn"
    />

    <div v-if="informeGenerado" class="resultados">
      <div v-if="actividadesMasReservadas.length > 0">
        <h3>Actividades más Reservadas</h3>
        <ul>
          <li
            v-for="actividad in actividadesMasReservadas"
            :key="actividad.ID_Actividad"
            class="item"
          >
            <h4>{{ actividad.NombreActividad }}</h4>
            <p>Reservas: {{ actividad.NumeroReservas }}</p>
            <p>Valoración Promedio: {{ actividad.ValoracionPromedio }}/5</p>
          </li>
        </ul>
      </div>

      <div v-if="actividadesMasValoradas.length > 0">
        <h3>Actividades más Valoradas</h3>
        <ul>
          <li
            v-for="actividad in actividadesMasValoradas"
            :key="actividad.ID_Actividad"
            class="item"
          >
            <h4>{{ actividad.NombreActividad }}</h4>
            <p>Valoración Promedio: {{ actividad.ValoracionPromedio }}/5</p>
            <p>Reservas: {{ actividad.NumeroReservas }}</p>
          </li>
        </ul>
      </div>
    </div>

    <q-spinner v-if="loading" color="primary" size="50px" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      actividadesMasReservadas: [],
      actividadesMasValoradas: [],
      informeGenerado: false,
      loading: false,
    };
  },
  methods: {
    async generarInforme() {
      this.loading = true;

      try {
        const responseReservas = await axios.get('http://localhost:5259/api/Reserva/GetAll');
        const reservas = responseReservas.data;

        const responseReseñas = await axios.get('http://localhost:5259/api/Resena/GetAll');
        const reseñas = responseReseñas.data;

        const actividadesReservadasMap = new Map();
        reservas.forEach(reserva => {
          const actividadId = reserva.idActividad;
          if (actividadesReservadasMap.has(actividadId)) {
            actividadesReservadasMap.get(actividadId).NumeroReservas++;
          } else {
            actividadesReservadasMap.set(actividadId, {
              ID_Actividad: actividadId,
              NombreActividad: `Actividad ${actividadId}`,
              NumeroReservas: 1,
              ValoracionPromedio: 0,
            });
          }
        });

        this.actividadesMasReservadas = Array.from(actividadesReservadasMap.values());

        const actividadesValoradasMap = new Map();
        reseñas.forEach(reseña => {
          const actividadId = reseña.idActividad;
          if (actividadesValoradasMap.has(actividadId)) {
            const actividad = actividadesValoradasMap.get(actividadId);
            actividad.ValoracionPromedio =
              (actividad.ValoracionPromedio * actividad.NumeroReservas + reseña.valoracion) /
              (actividad.NumeroReservas + 1);
            actividad.NumeroReservas++;
          } else {
            actividadesValoradasMap.set(actividadId, {
              ID_Actividad: actividadId,
              NombreActividad: `Actividad ${actividadId}`,
              NumeroReservas: 1,
              ValoracionPromedio: reseña.valoracion,
            });
          }
        });

        this.actividadesMasValoradas = Array.from(actividadesValoradasMap.values());

        this.informeGenerado = true;
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f5f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.btn {
  margin-bottom: 20px;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #3498db;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980b9;
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
  color: #34495e; /
}

.q-spinner {
  margin: 20px auto;
}
</style>
