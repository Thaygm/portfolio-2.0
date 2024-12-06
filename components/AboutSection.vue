<template>
  <section class="about-section">
    <h2>{{ $t('aboutMe') }}</h2>
    <div class="about-content">
      <div class="photo-wrapper">
        <img
          src="/assets/images/thay2.jpg"
          alt="Foto de Thaísa Mendes"
          class="profile-photo"
        />
      </div>
      <div class="about-text">
        <ul>
          <li>{{ $t('presentationOne') }}</li>
          <li>
            {{ $t('presentationTwo') }}
          </li>
          <li>
            {{ $t('presentationThree') }}
          </li>
          <li>
            {{ $t('presentationFour') }}
          </li>
          <li>{{ $t('presentationFive') }}</li>
          <li>
            {{ $t('presentationSix') }}
          </li>
          <li>
            {{ $t('presentationSeven') }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.about-section {
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

.about-section h2 {
  color: #1abc9c;
  font-size: 2.5rem;
  font-family: "DM Mono", serif;
  margin-bottom: 1.5rem;
  margin-top: -1.5rem;
  text-align: center;
}

.about-content {
  display: flex;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  gap: 3rem;
  padding: 1rem;
}

.photo-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.profile-photo {
  width: 350px;
  height: 500px;
  border-radius: 15px;
  border: 4px solid #1abc9c;
  object-fit: cover;
}

.about-text {
  flex: 2;
  padding: 1rem;
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.6;
}

.about-text ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
}

.about-text li {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .profile-photo {
    width: 100%;
    max-width: 300px;
    height: auto;
  }

  .about-text {
    text-align: center;
    padding: 0;
  }

  .about-text ul {
    padding-left: 0;
  }

  .about-text li {
    font-size: 1rem;
  }
}

</style>
