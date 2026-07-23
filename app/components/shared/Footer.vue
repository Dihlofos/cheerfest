<script setup>
import footerData from '~/../data/sections/footer.json'
</script>

<template>
  <footer class="footer" id="footer">
    <div class="footer__bg" />
    <div class="footer__overlay" />
    <Container wide>
      <div class="footer__wrapper">
        <div class="footer__content">
          <div class="footer__title">{{ footerData.title }}</div>

          <div class="footer__contacts">
            <div v-for="contact in footerData.contacts" :key="contact.email" class="footer__contacts-item">
              <div class="footer__contacts-label">{{ contact.label }}</div>
              <a :href="'mailto:' + contact.email" target="_blank" class="footer__contacts-link">{{ contact.email }}</a>
            </div>
          </div>

          <div class="footer__info">
            <p class="footer__info-text">{{ footerData.info.text }}</p>
            <ul>
              <li v-for="(item, i) in footerData.info.items" :key="i">{{ item }}</li>
            </ul>
          </div>

          <div class="footer__bottom">
            <div class="footer__socials">
              <a
                v-for="social in footerData.socials"
                :key="social.alt"
                :href="social.href"
                target="_blank"
                class="footer__socials-link"
              >
                <img :src="social.icon" :alt="social.alt" class="footer__socials-icon" />
              </a>
            </div>

            <div class="footer__docs">
              <a v-for="doc in footerData.docs" :key="doc.href" :href="doc.href" target="_blank" class="footer__docs-link">{{ doc.label }}</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding: 6.7rem 0 5.5rem;
  overflow: hidden;
  border-radius: 40px 40px 0 0;

  @media (max-width: $tablet) {
    padding: 4rem 0 3rem;
    border-radius: 24px 24px 0 0;
  }

  &__bg {
    position: absolute;
    inset: 0;
    background: url('/images/footer/bg.jpg') center/cover no-repeat;
    pointer-events: none;
    user-select: none;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(182.2deg, #0C1359 2.52%, rgba(0, 36, 214, 0) 58.04%);
    mix-blend-mode: soft-light;
    pointer-events: none;
  }

  &__wrapper {
    position: relative;
  }

  &__content {
    position: relative;
  }

  &__title {
    font-family: $monserrat;
    font-size: 6rem;
    margin: 0 0 2.6rem;
    font-style: italic;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    color: $white;
    text-align: left;

    @media (max-width: $tablet) {
      font-size: 4rem;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: row;
    gap: 5.7rem;
    margin: 0 0 3rem;

    @media (max-width: $tablet) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  &__contacts-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: $tablet) {
      gap: 0.4rem;
    }
  }

  &__contacts-label {
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1;
    text-transform: uppercase;

    @media (max-width: $tablet) {
      font-size: 1.2rem;
    }
  }

  &__contacts-link {
    color: $white;
    font-family: $monserrat;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    text-decoration: none;

    @media (max-width: $tablet) {
      font-size: 2.2rem;
    }
  }

  &__info {
    color: $white;
    font-family: $monserrat;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1;
    max-width: 116.6rem;
    margin: 0 0 2.7rem;

    @media (max-width: $tablet) {
      font-size: 1.2rem;
    }

    ul {
      margin-top: 0.8rem;
      margin-bottom: 0;
      padding-left: 3.3rem;
      list-style: disc;

      @media (max-width: $tablet) {
        margin-top: 1rem;
      }
    }
  }

  &__info-text {
    margin: 0 0 2.3rem;
  }

  &__bottom {
    display: flex;
    gap: 4rem;
    align-items: flex-end;
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    margin-top: 1.5rem;

    @media (max-width: $tablet) {
      gap: 2rem;
      margin-top: 0.5rem;
    }
  }

  &__socials-link {
    display: block;
    width: 4.8rem;
    height: 4.8rem;
    flex-shrink: 0;

    @media (max-width: $tablet) {
      width: 4rem;
      height: 4rem;
    }
  }

  &__socials-icon {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__docs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.6rem;
    padding-bottom: 1.5rem;

    @media (max-width: $tablet) {
      flex-direction: column;
      gap: 0.6rem;
    }
  }

  &__docs-link {
    color: #FFCDF3;
    opacity: 0.8;
    font-family: $monserrat;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    text-decoration: underline;

    @media (max-width: $tablet) {
      font-size: 1.2rem;
    }
  }
}
</style>
