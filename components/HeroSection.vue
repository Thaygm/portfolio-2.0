<!-- components/HeroSection.vue -->
<template>
  <section class="hero">
    <h1>Desenvolvedora Front-End</h1>
    <p>Transformando ideias em experiências interativas e funcionais na web.</p>
    <button @click="downloadResume">Baixar Currículo</button>
  </section>
</template>

<script lang="ts" setup>
function downloadResume() {
  window.open('/path/to/curriculo.pdf', '_blank')
}
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  color: #fff;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #b0ffc6;
}

.hero button {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #1abc9c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hero button:hover {
  background-color: #16a085;
}
</style>
