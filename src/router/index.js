
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
            name:'header',
            path : '/HeaderPF',
            component: HeaderPF
        },
        {
            name:'main',
            path : '/MainPortfolio.vue',
            component: MoiPF
        },
        {
            name:'projet',
            path : '/MyProjet.vue',
            component: MesProjets
        },
        {
            name:'exp',
            path : '/ExperiencePortfolio.vue',
            component: MesExperiences
        },
        {
            name:'contact',
            path : '/ContactPortfolio.vue',
            component: ContactPF
        },
        {
            name:'erreur',
            path: '/PageErreur.vue',
            component: PageError  // Composant à afficher pour les URLs inconnues
          }
    ]
})

export default router;
