<template>
    <section id="contato" class="contact-section">
      <h2>{{ $t('contact') }}</h2>
      <div class="contact-content">
        <div class="social-icons">
          <a
            href="https://www.linkedin.com/in/thaisagmendes/"
            target="_blank"
            class="icon"
            aria-label="LinkedIn"
          >
            <img src="/assets/images/icons/LINKEDIN-logo.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/Thaygm"
            target="_blank"
            class="icon"
            aria-label="GitHub"
          >
            <img src="/assets/images/icons/GITHUB-logo.svg" alt="GitHub" />
          </a>
          <button class="icon" @click="copiarEmail" aria-label="E-mail">
            <img src="/assets/images/icons/EMAIL-logo.svg" alt="E-mail" />
          </button>
        </div>
        <p class="follow-text">{{ $t('follow') }}</p>
      </div>
      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} {{ $t('copywrite') }}</p>
      </footer>
    </section>
  </template>
  
  
  
  <script lang="ts" setup>
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();
const copiarEmail = () => {
  const email = "codebythay@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => alert(t('emailCopied')))
    .catch(() => alert(t('copyError')));
};
</script>

  
<style scoped>
.contact-section {
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

.contact-section h2 {
  color: #1abc9c;
  font-size: 2.5rem;
  font-family: "DM Mono", serif;
  margin-bottom: 1.5rem;
  text-align: center;
}

.contact-content {
  width: 100%;
  text-align: center;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 2px solid #1abc9c;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.icon img {
  width: 40px;
  height: 40px;
}

.icon:hover {
  transform: scale(1.1);
  border-color: #fff;
  background-color: #1abc9c;
}

.follow-text {
  color: #fff;
  font-size: 1.2rem;
  margin-top: 1rem;
  font-family: "Arial", sans-serif;
}

.footer {
  margin-top: 2rem;
  text-align: center;
  color: #fff;
  font-size: 0.9rem;
  border-top: 1px solid #1abc9c;
  padding-top: 1rem;
}

@media (max-width: 768px) {
  .social-icons {
    gap: 1rem;
  }

  .icon {
    width: 50px;
    height: 50px;
  }

  .icon img {
    width: 30px;
    height: 30px;
  }

  .contact-section {
    padding: 2rem 1rem;
  }

  .follow-text {
    font-size: 1rem;
  }

  .footer {
    font-size: 0.8rem;
  }
}

</style>
