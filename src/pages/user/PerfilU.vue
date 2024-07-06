<template>
  <div class="q-pa-md">
    <q-card class="q-pa-sm">
      <q-card-section class="text-h6">
        Perfil
      </q-card-section>

      <q-card-section>
        <q-list bordered class="q-mb-sm q-pa-lg">
          <q-item class="q-pa-xs">
            <q-item-section>
              <q-item-label class="text-bold">Nombre:</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ user.nombre }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item class="q-pa-xs">
            <q-item-section>
              <q-item-label class="text-bold">Apellidos:</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ user.apellidos }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item class="q-pa-xs">
            <q-item-section>
              <q-item-label class="text-bold">DNI:</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ user.dni }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item class="q-pa-xs">
            <q-item-section>
              <q-item-label class="text-bold">Correo:</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ user.correo }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item class="q-pa-xs">
            <q-item-section>
              <q-item-label class="text-bold">Contraseña:</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ user.contrasena }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn icon="edit" @click="editProfile">Editar</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {
        nombre:'',
        apellidos:'',
        dni:12345678,
        correo:'',
        contrasena:'',
      }
    };


  },
  created() {
    this.loadUserData();
  },
  methods:{
   loadUserData() {
      const u = JSON.parse(localStorage.getItem('userData'));
      if (u) {
        this.user.nombre = u.nombre;
        this.user.apellidos = u.apellidos;
        this.user.dni = "12345678";
        this.user.correo=u.correoElectronico;
        this.user.contrasena = "******";

        console.log("Nombre: ",u);
      } else {
        console.error('No se encontraron datos de usuario en localStorage');
      }
    }
  }
}
</script>

<style>
.text-bold {
  font-weight: bold;
}
.q-pa-xs {
  padding: 4px;
}
.q-mb-sm {
  margin-bottom: 8px;
}
</style>
