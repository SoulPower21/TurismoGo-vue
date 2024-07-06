<template>
  <div class="pagina-informes">
    <!-- Cabecera -->
    <header class="header">
      <div class="header-content">
        <q-icon name="menu" class="menu-icon" @click="toggleMenu" />
        <h1>Nombre de Tu Aplicación</h1>
        <div class="spacer"></div>
        <nav>
          <router-link to="/">
            <q-icon name="home" /> Inicio
          </router-link>
          <router-link to="/informes">
            <q-icon name="description" /> Informes
          </router-link>
          <!-- Añade más enlaces según necesites -->
        </nav>
      </div>
    </header>

    <!-- Contenido Principal -->
    <div class="main-content">
      <div class="back-button">
        <q-btn @click="goBack" icon="arrow_back">Volver</q-btn>
      </div>

      <h2>Generar Informes y Estadísticas del Negocio</h2>

      <!-- Componente para Informe de Empresa -->
      <div class="informes-section">
        <h3>Informe de Empresa</h3>
        <InformeEmpresa />
      </div>

      <!-- Componente para Estadísticas Empresariales -->
      <div class="estadisticas-section">
        <h3>Estadísticas Empresariales</h3>
        <StadisticsE />
      </div>
    </div>

    <!-- Pie de Página -->
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Nombre de Tu Aplicación. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import InformeEmpresa from 'components/inform/InformeEmpresa.vue'; // Ajusta según la ubicación real
import StadisticsE from 'components/inform/stadisticsE.vue'; // Ajusta según la ubicación real

export default {
  components: {
    InformeEmpresa,
    StadisticsE
  },
  methods: {
    toggleMenu() {
      // Implementa lógica para abrir/cerrar menú si es necesario
    },
    goBack() {
      // Implementa lógica para volver al menú anterior
      this.$router.go(-1); // Esto vuelve atrás en el historial del router
    }
  }
};
</script>

<style scoped>
/* Estilos para toda la página */
.pagina-informes {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Estilos para la cabecera */
.header {
  background-color: #0288d1; /* Color de fondo azul */
  color: white;
  padding: 10px 20px; /* Aumentamos el espacio vertical y horizontal */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
}

.header h1 {
  font-size: 1.5rem;
  margin: 0;
  flex: 1;
}

.menu-icon {
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-left: 15px;
  display: flex;
  align-items: center;
}

.nav-link q-icon {
  margin-right: 5px;
}

.spacer {
  flex: 1;
}

/* Estilos para el contenido principal */
.main-content {
  flex: 1;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #e0f2f1; /* Color de fondo celeste */
  background-image: url('/statics/fondo-celeste.jpg'); /* Ruta a la imagen de fondo */
  background-size: cover;
  background-position: center;
  color: #333; /* Color de texto principal */
  font-family: Arial, sans-serif;
}

.main-content h2 {
  text-align: center;
  color: #0288d1; /* Color de título */
}

.informes-section,
.estadisticas-section {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.back-button {
  text-align: left;
  margin-bottom: 20px;
}

/* Estilos para el pie de página */
.footer {
  background-color: #0288d1; /* Color de fondo azul */
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
