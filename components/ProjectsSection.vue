<template>
  <section class="projects-section">
    <h2>Projetos</h2>
    <div class="projects-content">
      <div class="featured-project" v-if="projects.length > 0">
        <h3>{{ projects[0].name }}</h3>
        <div class="featured-project-content">
          <img :src="projects[0].image" alt="Imagem do Projeto" class="project-image featured-image" />
          <button @click="openModal(projects[0])" class="project-link">Saiba Mais</button>
        </div>
      </div>

      <div class="projects-cards" v-if="projects.length > 1">
        <div v-for="(project, index) in projects.slice(1)" :key="project.name" class="project-card">
          <h4>{{ project.name }}</h4>
          <img :src="project.image" alt="Imagem do Projeto" class="project-image" />
          <button @click="openModal(project)" class="project-link">Saiba Mais</button>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button @click="closeModal" class="close-modal">X</button>
        <h3>{{ modalProject?.name }}</h3>
        <img :src="modalProject?.image" alt="Imagem do Projeto" class="modal-image" />
        <p>{{ modalProject?.description }}</p>
        <h4>Skills Usadas:</h4>
        <ul>
          <li v-for="(skill, index) in modalProject?.skills" :key="skill">{{ skill }}</li>
        </ul>
        <div class="modal-buttons">
          <a v-if="modalProject?.link" :href="modalProject.link" target="_blank" class="project-link">Acessar Site</a>
          <a v-if="modalProject?.repository" :href="modalProject.repository" target="_blank" class="project-link">Ver Repositório</a>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import ginecoSiteImage from '@/assets/images/ginecoSite.png';
import portifolio from '@/assets/images/portifolio.png';

interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
  repository?: string;
  skills: string[];
}

const { t } = useI18n();

const projects = reactive<Project[]>([
  {
    name: t('gynecology'),
    description: t('gynecoDescription'),
    image: ginecoSiteImage,
    link: 'https://drapaulagiani.com/',
    skills: ['WordPress', 'Plugins Wordpress'],
  },
  {
    name: t('currentPortfolio'),
    description: t('portfolioDescrption'),
    image: portifolio,
    link: 'https://pokedex-green-fivepp/',
    repository: 'https://github.com/Thaygm/portfolio-2.0',
    skills: ['Vue', 'Typescript', 'Nuxt', 'i18n' ],
  },
  {
    name: 'Pokedex',
    description: t('pokedexDescription'),
    image: 'https://raw.githubusercontent.com/Thaygm/pokedex/refs/heads/main/hero.png',
    link: 'https://pokedex-green-five-16.vercel.app/',
    repository: 'https://github.com/Thaygm/pokedex',
    skills: ['Vue', 'Pinia', 'Typescript', 'Axios', 'Cypress', 'Vite', 'Vue Router'],
  },
  {
    name: t('unlkdChallenge'),
    description: t('challengeDescription'),
    image: 'https://github.com/Thaygm/UnlockedPage/blob/main/Captura%20de%20tela%202024-09-24%20131123.png?raw=true',
    repository: 'https://github.com/Thaygm/UnlockedPage',
    skills: ['Vue', 'Nuxt', 'Typescript', 'Tailwind', 'VeeValidate', 'Yup', 'Axios', 'Maska', 'VueUse', 'Cypress'],
  },
  {
    name: 'Efood',
    description: t('efoodDescription'),
    image: 'https://raw.githubusercontent.com/Thaygm/E_food/refs/heads/main/Captura%20de%20tela%202024-05-14%20151054.png',
    link: 'https://e-food-dusky.vercel.app/',
    repository: 'https://github.com/Thaygm/E_food',
    skills: ['React', 'Typescript', 'Jest', 'Redux', 'React-router-dom', 'Styled-Components', 'Yup', 'React Hooks'],
  },
  {
    name: 'EasyPlay',
    description: t('easyPlayDescription'),
    image: 'https://raw.githubusercontent.com/Thaygm/easyPlay/refs/heads/main/Captura%20de%20tela%202024-05-13%20131957.png',
    link: 'https://easy-play-seven.vercel.app/',
    repository: 'https://github.com/Thaygm/easyPlay',
    skills: ['React', 'Typescript', 'Jest', 'Redux', 'React-router-dom', 'Styled-Components', 'Yup', 'React Hooks'],
  },
  {
    name: 'toDoWork',
    description: t('workDescription'),
    image: 'https://raw.githubusercontent.com/Thaygm/toDoWork/refs/heads/main/Captura%20de%20tela%202024-09-24%20131454.png',
    repository: 'https://github.com/Thaygm/toDoWork',
    skills: ['React', 'Typescript', 'Jest', 'Redux', 'React-router-dom', 'Styled-Components', 'React Hooks'],
  },
  {
    name: t('firstPortfolio'),
    description: t('firstPortfolioDescription'),
    image: 'https://raw.githubusercontent.com/Thaygm/PortifolioThay/refs/heads/main/Captura%20de%20tela%202024-11-13%20230108.png',
    link: 'https://portifolio-thay-seven.vercel.app/',
    repository: 'https://github.com/Thaygm/PortifolioThay',
    skills: ['React', 'Javascript', 'Framer-motion', 'Styled-Components', 'React Hooks', 'Babel', 'Jest'],
  },
  {
    name: t('cloneDisney'),
    description: t('disneyDescription'),
    image: 'https://raw.githubusercontent.com/Thaygm/clone_disneyplus/main/.github/disney%2B.png',
    link: 'https://clone-disneyplus-3f4ampnpv-thaygm.vercel.app/?vercelToolbarCode=NaKeOA31BMJgqGp',
    repository: 'https://github.com/Thaygm/clone_disneyplus',
    skills: ['HTML', 'CSS', 'Gulp', 'SASS'],
  },
]);

const isModalOpen = ref(false);
const modalProject = ref<Project | null>(null);

const openModal = (project: Project) => {
  modalProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  modalProject.value = null;
};
</script>


<style scoped>
.projects-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  margin: 3rem auto;
  background-color: rgba(34, 34, 34, 0.8);
  border: 3px solid #1abc9c;
  border-radius: 10px;
  max-width: 90%;
}

.projects-section h2 {
  color: #1abc9c;
  font-size: 2.5rem;
  font-family: "DM Mono", serif;
  margin-bottom: 1.5rem;
  text-align: center;
}

.projects-content {
  width: 100%;
}

.featured-project {
  text-align: center;
  margin-bottom: 3rem;
}

.featured-project h3 {
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.featured-project p {
  color: #ddd;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.featured-project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.featured-image {
  max-width: 80%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.project-link {
  background-color: transparent;
  border: 2px solid #1abc9c;
  color: #1abc9c;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 0.3rem;
}

.project-link:before {
  content: '';
  position: absolute;
  top: 0;
  left: -75%;
  width: 200%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transform: skewX(-45deg);
  transition: all 0.3s ease;
}

.project-link:hover::before  {
  left: 100%;
}

.project-link:hover  {
  background-color: #1abc9c;
  color: #fff;
}

.projects-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: rgba(34, 34, 34, 0.8);
  border: 2px solid #1abc9c;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-card h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #222;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  color: #ddd;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  color: #ddd;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
}

.modal-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
}

.modal-buttons a {
  color: #fff;
  background-color: #1abc9c;
  padding: 0.5rem 2rem;
  text-decoration: none;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  display: inline-block;
}

.modal-buttons a:hover {
  background-color: #16a085;
}

@media (max-width: 1200px) {
  .projects-section {
    padding: 3rem 1rem;
  }

  .featured-image {
    max-width: 100%;
    max-height: 250px;
  }

  .projects-cards {
    gap: 1.5rem;
  }
}

@media (max-width: 992px) {
  .projects-section h2 {
    font-size: 2rem;
  }

  .project-link {
    font-size: 0.9rem;
    padding: 0.4rem 1.2rem;
  }

  .modal-content {
    max-width: 90%;
    padding: 1.5rem;
  }

  .modal-image {
    max-height: 200px;
  }
}

@media (max-width: 768px) {
  .featured-project-content {
    flex-direction: column;
  }

  .projects-cards {
    grid-template-columns: 1fr;
  }

  .project-card {
    padding: 1rem;
  }
}

@media (max-width: 576px) {
  .projects-section h2 {
    font-size: 1.75rem;
  }

  .featured-image {
    max-height: 200px;
  }

  .project-link {
    font-size: 0.8rem;
    padding: 0.3rem 1rem;
  }
}

</style>
