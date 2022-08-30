<template>
    <q-page class="flex column q-pa-md">

        <span class="text-h1">Typhography</span>
        <span class="text-h2">Typhography</span>
        <span class="text-h3">Typhography</span>
        <span class="text-h4">Typhography</span>
        <span class="text-h5">Typhography</span>
        <span class="text-h6">Typhography</span>

        <q-separator/>

        <span class="text-subtitle1">Subtitule 1</span>
        <span class="text-subtitle2">Subtitule 2</span>

        <q-separator/>

        <p class="text-body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, magni.</p>
        <p class="text-body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, magni!</p>

        <q-btn
            color="primary"
            :label="sideMenuOpen ? 'Cerrar menu lateral' : 'Abrir menú lateral'"
            class="q-mt-md"
            @click="toggleSideMenu"
        />

    </q-page>
</template>

<script>
import { defineComponent } from "vue";
import useUI from '../composables/useUI'

export default defineComponent({
    name: "TyphographyPage",
    setup() {

        const { toggleSideMenu, sideMenuOpen } = useUI()

        return {
            toggleSideMenu,
            sideMenuOpen,
        }
    }
});
</script>
