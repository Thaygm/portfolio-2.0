<template>
  <section class="hero">
    <div class="translate-menu">
      <button class="action-btn translate-btn" @click="toggleLanguageMenu">
        🌐 {{ selectedLanguage }}
      </button>
      <div v-if="showLanguages" class="language-options">
        <button @click="selectLanguage('PT')">PT</button>
        <button @click="selectLanguage('EN')">EN</button>
        <button @click="selectLanguage('ES')">ES</button>
      </div>
    </div>
    <p class="intro-text">{{ introText }}</p>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <button class="action-btn cv-button" @click="downloadResume">Baixar Currículo</button>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const introFullText = "Meu nome é Thaísa Mendes e estou pronta para ser sua"
const titleFullText = "Desenvolvedora Front-End"
const descriptionFullText = "Transformando ideias em experiências interativas e funcionais na web."

const introText = ref("")
const title = ref("")
const description = ref("")
const showLanguages = ref(false)
const selectedLanguage = ref("PT")
const typingSpeed = 70

function downloadResume() {
  window.open('/cv_thaisa.pdf', '_blank')
}

function toggleLanguageMenu() {
  showLanguages.value = !showLanguages.value
}

function selectLanguage(language: string) {
  selectedLanguage.value = language
  showLanguages.value = false
  console.log("Idioma selecionado:", language)
}

function handleClickOutside(event: Event) {
  const menu = document.querySelector(".translate-menu")
  if (menu && !menu.contains(event.target as Node)) {
    showLanguages.value = false
  }
}

function typeEffect(fullText: string, output: any) {
  let index = 0
  function type() {
    if (index < fullText.length) {
      output.value += fullText.charAt(index)
      index++
      setTimeout(type, typingSpeed)
    }
  }
  type()
}

onMounted(() => {
  typeEffect(introFullText, introText)
  setTimeout(() => typeEffect(titleFullText, title), introFullText.length * typingSpeed + 300)
  setTimeout(() => typeEffect(descriptionFullText, description), (introFullText.length + titleFullText.length) * typingSpeed + 600)
  document.addEventListener("click", handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside)
})
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  color: #fff;
  padding: 2rem;
}

.hero h1 {
  font-size: 3.5rem;
  font-family: "DM Mono", serif;
  margin: 1rem 0;
  font-weight: bold;
}

.intro-text, .hero p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.action-btn {
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
}

.action-btn::before {
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

.action-btn:hover::before {
  left: 100%;
}

.action-btn:hover {
  background-color: #1abc9c;
  color: #fff;
}

.translate-menu {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.language-options {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  right: 0;
  background-color: #222;
  padding: 0.5rem 0;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.language-options button {
  background: transparent;
  border: none;
  color: #1abc9c;
  padding: 0.5rem 1rem;
  text-align: left;
  font-size: 0.9rem;
  cursor: pointer;
}

.language-options button:hover {
  background-color: #1abc9c;
  color: #fff;
}
</style>
