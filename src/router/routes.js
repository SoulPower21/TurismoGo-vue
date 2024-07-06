
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("components/auth/LoginM.vue") },
      {
        path: "registerE",
        component: () => import("components/auth/RegisterE.vue"),
      },
      {
        path: "registerU",
        component: () => import("components/auth/RegisterU.vue"),
      },
    ],
  },
  {
    path: "/perfil1",
    component: () => import("layouts/ELayaout.vue"),
    children: [
      {
        path: "perfilE",
        component: () => import("pages/enterprise/PerfilE.vue"),
      },
      {
        path: "actividadesE",
        component: () => import("src/pages/enterprise/TablaActividadesE.vue"),
      },
      {
        path: "listadoE",
        component: () => import("pages/enterprise/ListadoUsuarios.vue"),
      },
    ],
  },
  {
    path: "/perfil2",
    component: () => import("layouts/ULayout.vue"),
    children: [
      { path: "perfilU", component: () => import("pages/user/PerfilU.vue") },
      {
        path: "actividadesU",
        component: () => import("src/pages/user/TablaActividadesU.vue"),
      },
    ],
  },
  {
    path: "/principalE",
    component: () => import("pages/enterprise/PrincipalE.vue"),
  },
  { path: "/principalU", component: () => import("pages/user/PrincipalU.vue") },
  { path: "/principalA", component: () => import("pages/adm/PrincipalA.vue") },

  { path: "/informes", component: () => import("pages/adm/PaginaInformes.vue") },
  {
    path: "/activities",
    component: () => import("components/Empresa_Turismo/Actividad_publica.vue"),
  },
  {
    path: "/review",
    component: () => import("components/reviews/ReviewForm.vue"),
    props: true,
  },
  {
    path: "/useractivity",
    component: () => import("components/activities/ActividadUsuarios.vue"),
    props: true,
  },
  {
    path: "/registrosl",
    component: () => import("components/inform/InformeEmpresa.vue"),
    props: true,
  },

  {
    path: "/stadistics",
    component: () => import("components/inform/stadisticsE.vue"),
    props: true,
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
