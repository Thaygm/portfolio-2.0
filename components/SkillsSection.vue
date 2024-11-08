<template>
    <section class="skills-section">
      <h2>Habilidades</h2>
      <div class="skills-content">
        <div v-for="(category, index) in categorizedSkills" :key="index" class="skill-category">
          <h3>{{ category.name }}</h3>
          <ul>
            <li
              v-for="(skill, index) in category.skills"
              :key="index"
              class="skill-item"
              :class="{ 'is-visible': skill.isVisible }"
            >
              <span class="skill-name">{{ skill.name }}</span>
              <img :src="skill.icon" :alt="`Ícone de ${skill.name}`" class="skill-icon" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  import HtmlLogo from '@/assets/images/icons/HTML-logo.svg';
  import CssLogo from '@/assets/images/icons/CSS-logo.svg';
  import JsLogo from '@/assets/images/icons/JS-logo.svg';
  import VueLogo from '@/assets/images/icons/VUE-logo.svg';
  import ReactLogo from '@/assets/images/icons/REACT-logo.svg';
  import NuxtLogo from '@/assets/images/icons/NUXT-logo.svg';
  import TailwindLogo from '@/assets/images/icons/Tailwind-logo.svg';
  import BootstrapLogo from '@/assets/images/icons/Bootstrap-logo.svg';
  import NodeLogo from '@/assets/images/icons/Node-logo.svg';
  import ExpressLogo from '@/assets/images/icons/Express-logo.svg';
  import TypeScriptLogo from '@/assets/images/icons/TYPES-logo.svg';
  import GitLogo from '@/assets/images/icons/Git-logo.svg';
  import GithubLogo from '@/assets/images/icons/Github-logo.svg';
  import VsCodeLogo from '@/assets/images/icons/VSCode-logo.svg';
  import GruntLogo from '@/assets/images/icons/Grunt-logo.svg';
  import GulpLogo from '@/assets/images/icons/Gulp-logo.svg';
  import PiniaLogo from '@/assets/images/icons/Pinia-logo.svg';
  import ReduxLogo from '@/assets/images/icons/Redux-logo.svg';
  import FigmaLogo from '@/assets/images/icons/Figma-logo.svg';
  import WordpressLogo from '@/assets/images/icons/Wordpress-logo.svg';
  import LessLogo from '@/assets/images/icons/Less-logo.svg';
  import SassLogo from '@/assets/images/icons/SASS-logo.svg';
  
  const skills = ref([
    { name: 'HTML', icon: HtmlLogo, category: 'Frontend', isVisible: false },
    { name: 'CSS', icon: CssLogo, category: 'Frontend', isVisible: false },
    { name: 'JavaScript', icon: JsLogo, category: 'Frontend', isVisible: false },
    { name: 'Vue', icon: VueLogo, category: 'Frontend', isVisible: false },
    { name: 'React', icon: ReactLogo, category: 'Frontend', isVisible: false },
    { name: 'Nuxt', icon: NuxtLogo, category: 'Frontend', isVisible: false },
    { name: 'Tailwind', icon: TailwindLogo, category: 'Frontend', isVisible: false },
    { name: 'Bootstrap', icon: BootstrapLogo, category: 'Frontend', isVisible: false },
    { name: 'Node', icon: NodeLogo, category: 'Backend', isVisible: false },
    { name: 'Express', icon: ExpressLogo, category: 'Backend', isVisible: false },
    { name: 'TypeScript', icon: TypeScriptLogo, category: 'Backend', isVisible: false },
    { name: 'Git', icon: GitLogo, category: 'Ferramentas', isVisible: false },
    { name: 'Github', icon: GithubLogo, category: 'Ferramentas', isVisible: false },
    { name: 'VsCode', icon: VsCodeLogo, category: 'Ferramentas', isVisible: false },
    { name: 'Grunt', icon: GruntLogo, category: 'Ferramentas', isVisible: false },
    { name: 'Gulp', icon: GulpLogo, category: 'Ferramentas', isVisible: false },
    { name: 'Pinia', icon: PiniaLogo, category: 'Ferramentas', isVisible: false },
    { name: 'Redux', icon: ReduxLogo, category: 'Ferramentas', isVisible: false },
    { name: 'Figma', icon: FigmaLogo, category: 'Design', isVisible: false },
    { name: 'Wordpress', icon: WordpressLogo, category: 'Design', isVisible: false },
    { name: 'Less', icon: LessLogo, category: 'Design', isVisible: false },
    { name: 'SASS', icon: SassLogo, category: 'Design', isVisible: false },
  ]);
  
  const categorizedSkills = ref([
    { name: 'Frontend', skills: skills.value.filter(skill => skill.category === 'Frontend') },
    { name: 'Backend', skills: skills.value.filter(skill => skill.category === 'Backend') },
    { name: 'Ferramentas', skills: skills.value.filter(skill => skill.category === 'Ferramentas') },
    { name: 'Design', skills: skills.value.filter(skill => skill.category === 'Design') },
  ]);
  
  const observeIcons = () => {
    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          skills.value[index].isVisible = true;
        }
      });
    }, options);
  
    document.querySelectorAll('.skill-item').forEach((el, index) => {
      el.setAttribute('data-index', index.toString());
      observer.observe(el);
    });
  };
  
  onMounted(() => {
    observeIcons();
  });
  </script>
  
  <style scoped>
  .skills-section {
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
  
  .skills-section h2 {
    color: #1abc9c;
    font-size: 2.5rem;
    font-family: "DM Mono", serif;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .skills-content {
    width: 100%;
  }
  
  .skill-category {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .skill-category h3 {
    color: #fff;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  
  .skills-content ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .skill-item.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .skill-item:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  
  .skill-icon {
    width: 50px;
    height: 50px;
    margin-top: 0.5rem;
  }
  
  .skill-name {
    font-size: 1.1rem;
    color: #fff;
  }
  </style>
  