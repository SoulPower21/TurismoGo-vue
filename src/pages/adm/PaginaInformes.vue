<template>
  <div class="pagina-informes">
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

        </nav>
      </div>
    </header>

    <div class="main-content">
      <div class="back-button">
        <q-btn @click="goBack" icon="arrow_back">Volver</q-btn>
      </div>

      <h2>Generar Informes y Estadísticas del Negocio</h2>

      <div class="informes-section">
        <h3>Informe de Empresa</h3>
        <InformeEmpresa />
      </div>

      <div class="estadisticas-section">
        <h3>Estadísticas Empresariales</h3>
        <StadisticsE />
      </div>
    </div>

    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Nombre de Tu Aplicación. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import InformeEmpresa from 'components/inform/InformeEmpresa.vue';
import StadisticsE from 'components/inform/stadisticsE.vue';

export default {
  components: {
    InformeEmpresa,
    StadisticsE
  },
  methods: {
    toggleMenu() {
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.pagina-informes {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #0288d1;
  color: white;
  padding: 10px 20px;
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

.main-content {
  flex: 1;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #e0f2f1;
  background-image: url('/statics/fondo-celeste.jpg');
  background-size: cover;
  background-position: center;
  color: #333;
  font-family: Arial, sans-serif;
}

.main-content h2 {
  text-align: center;
  color: #0288d1;
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

.footer {
  background-color: #0288d1;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
