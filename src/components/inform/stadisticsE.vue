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
    generarInforme() {
      this.loading = true;

      // Simulación de datos (reemplazar con lógica real)
      setTimeout(() => {
        // Simulación de actividades más reservadas
        this.actividadesMasReservadas = [
          {
            ID_Actividad: 1,
            NombreActividad: "Excursión A",
            NumeroReservas: 50,
            ValoracionPromedio: 4.5,
          },
          {
            ID_Actividad: 2,
            NombreActividad: "Excursión B",
            NumeroReservas: 45,
            ValoracionPromedio: 4.8,
          },
        ];

        // Simulación de actividades más valoradas
        this.actividadesMasValoradas = [
          {
            ID_Actividad: 2,
            NombreActividad: "Excursión B",
            NumeroReservas: 45,
            ValoracionPromedio: 4.8,
          },
          {
            ID_Actividad: 3,
            NombreActividad: "Excursión C",
            NumeroReservas: 40,
            ValoracionPromedio: 4.7,
          },
        ];

        this.informeGenerado = true;
        this.loading = false;
      }, 1000); // Simulación de tiempo de carga
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
  background-color: #f0f5f9; /* Color de fondo celeste */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.btn {
  margin-bottom: 20px;
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
</style>
