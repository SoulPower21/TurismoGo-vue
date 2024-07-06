<template>
  <div class="form-container">
    <h2 class="centered-title">Crear Actividad</h2>
    <form @submit.prevent="crearActividad">
      <div class="form-group">
        <label for="nombreActividad">Nombre de la Actividad</label>
        <input
          type="text"
          id="nombreActividad"
          v-model="actividad.nombreActividad"
          required
        />
        <p v-if="errors.nombreActividad" class="error-message">
          {{ errors.nombreActividad }}
        </p>
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          v-model="actividad.descripcion"
          required
        ></textarea>
        <p v-if="errors.descripcion" class="error-message">
          {{ errors.descripcion }}
        </p>
      </div>
      <div class="form-group">
        <label for="destino">Destino</label>
        <input type="text" id="destino" v-model="actividad.destino" required />
        <p v-if="errors.destino" class="error-message">{{ errors.destino }}</p>
      </div>
      <div class="form-group">
        <label for="fechaInicio">Fecha de Inicio</label>
        <input
          type="date"
          id="fechaInicio"
          v-model="actividad.fechaInicio"
          required
        />
        <p v-if="errors.fechaInicio" class="error-message">
          {{ errors.fechaInicio }}
        </p>
      </div>
      <div class="form-group">
        <label for="fechaFin">Fecha de Fin</label>
        <input
          type="date"
          id="fechaFin"
          v-model="actividad.fechaFin"
          required
        />
        <p v-if="errors.fechaFin" class="error-message">
          {{ errors.fechaFin }}
        </p>
      </div>
      <div class="form-group">
        <label for="precio">Precio</label>
        <input
          type="number"
          step="0.01"
          id="precio"
          v-model="actividad.precio"
          required
        />
        <p v-if="errors.precio" class="error-message">{{ errors.precio }}</p>
      </div>
      <button type="submit">Crear Actividad</button>
    </form>
    <div v-if="showSuccessModal" class="modal">
      <div class="modal-content">
        <span class="close-btn" @click="showSuccessModal = false">&times;</span>
        <h3>Actividad creada exitosamente!</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      actividad: {
        NombreActividad: "",
        Descripcion: "",
        Destino: "",
        FechaInicio: "",
        FechaFin: "",
        Precio: null,
        ID_Empresa: 1, // Valor por defecto
      },
      errors: {},
      showSuccessModal: false,
      successTimeout: null,
    };
  },
  methods: {
    async crearActividad() {
      this.errors = {}; // Limpia errores anteriores
      this.successMessage = "";

      if (!this.actividad.nombreActividad) {
        this.errors.nombreActividad =
          "El nombre de la actividad es obligatorio.";
      }
      if (!this.actividad.descripcion) {
        this.errors.descripcion = "La descripción es obligatoria.";
      }
      if (!this.actividad.destino) {
        this.errors.destino = "El destino es obligatorio.";
      }
      if (!this.actividad.fechaInicio) {
        this.errors.fechaInicio = "La fecha de inicio es obligatoria.";
      }
      if (!this.actividad.fechaFin) {
        this.errors.fechaFin = "La fecha de fin es obligatoria.";
      }
      if (!this.actividad.precio) {
        this.errors.precio = "El precio es obligatorio.";
      } else if (this.actividad.precio <= 0) {
        this.errors.precio = "El precio debe ser mayor que cero.";
      }

      if (this.actividad.fechaInicio >= this.actividad.fechaFin) {
        this.errors.fechaFin =
          "La fecha de fin debe ser posterior a la fecha de inicio.";
      }

      if (Object.keys(this.errors).length === 0) {
        // Si no hay errores
        try {
          const response = await axios.post(
            "http://localhost:5259/api/Actividad/Create",
            this.actividad
          );

          console.log("Actividad creada:", response.data);

          // Limpia el formulario después del éxito
          this.actividad = {
            NombreActividad: "",
            Descripcion: "",
            Destino: "",
            FechaInicio: "",
            FechaFin: "",
            Precio: null,
            ID_Empresa: 1,
          };

          // Muestra el modal de éxito
          this.showSuccessModal = true;
          this.successTimeout = setTimeout(() => {
            this.showSuccessModal = false;
          }, 4000); // Cierra el modal después de 4 segundos
        } catch (error) {
          console.error("Error al crear actividad:", error);

          // Manejo de errores más específico
          if (error.response && error.response.status === 400) {
            this.errors = error.response.data.errors; // Muestra errores de validación del servidor
          } else {
            this.errors.api = "Error inesperado al crear la actividad.";
          }
        }
      }
    },

    hideSuccessModal() {
      this.showSuccessModal = false;
      clearTimeout(this.successTimeout); // Limpia el timeout si el usuario cierra el modal manualmente
    },
  },

  beforeUnmount() {
    clearTimeout(this.successTimeout); // Limpia el timeout al desmontar el componente
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.form-container {
  max-width: 400px;
  margin: 0 auto;
}

.centered-title {
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333333;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
