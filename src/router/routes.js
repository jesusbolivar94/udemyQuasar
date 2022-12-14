const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            { path: "", name: "home", component: () => import("pages/IndexPage.vue") },
            { path: "typhography", name: "typhography", component: () => import("pages/TyphographyPage.vue") },
            { path: "flex", name: "flex", component: () => import("pages/FlexPage.vue") },
            { path: "dialog", name: "dialog", component: () => import("pages/DialogsPage.vue") },
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue")
    }
];

export default routes;
