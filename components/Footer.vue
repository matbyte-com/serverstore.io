<template>
  <v-footer height="40" app>
      <a href="https://vyhub.net" target="_blank" class="social-link mr-2" title="VyHub">
        <IconLoader style="height: 20px; width: 20px" name="vyhub" class="mt-2 social-link-2"/>
      </a>
      <a href="https://discord.com/invite/QycQpd2AQP" target="_blank" class="social-link mx-2 d-inline-block" title="VyHub Discord">
        <IconLoader style="height: 20px; width: 20px" name="discord" class="mt-2 social-link-2"/>
      </a>
    <div class="d-flex align-center">
      <a
          v-for="item in items"
          :key="item.title"
          :href="item.href"
          :title="item.title"
          class="d-inline-block mx-2 social-link"
          target="_blank"
      >
        <v-icon
            :icon="item.icon"
            :size="item.size ? item.size : 16"
        />
      </a>
    </div>

    <div
        class="text-caption text-disabled"
        style="position: absolute; right: 16px;"
    >
      <a
          class="text-decoration-none on-surface"
          href="https://vyhub.net/"
          target="_blank"
      >
        &copy; {{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Serverstore by VyHub</span>
      </a>
    </div>
  </v-footer>
</template>

<script setup>
const items = [
  {
    title: 'VyHub Twitter & X',
    icon: `svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z`,
    href: 'https://x.com/VyHub_official',
  },
  {
    title: 'VyHub GitHub',
    icon: `mdi-github`,
    href: 'https://github.com/matbyte-com',
  },
]
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)

.social-link-2
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
