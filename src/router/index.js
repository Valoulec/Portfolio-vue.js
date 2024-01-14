
import ContactPF from '@/components/ContactPF.vue';
import HeaderPF from '@/components/HeaderPF.vue';
import MesExperiences from '@/components/MesExperiences.vue';
import MesProjets from '@/components/MesProjets.vue';
import MoiPF from '@/components/MoiPF.vue';
import PageError from '@/components/PageError.vue';
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name:'Header',
            path : '/HeaderPF',
            component: HeaderPF
        },
        {
            name:'Moi',
            path : '/Moi',
            component: MoiPF
        },
        {
            name:'Projet',
            path : '/Projet',
            component: MesProjets
        },
        {
            name:'Exp',
            path : '/Exp',
            component: MesExperiences
        },
        {
            name:'Contact',
            path : '/Contact',
            component: ContactPF
        },
        {
            name:'erreur',
            path: '/:catchAll(.*)',
            component: PageError  // Composant à afficher pour les URLs inconnues
          }
    ]
})

export default router;
