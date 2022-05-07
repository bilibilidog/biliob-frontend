<template>
  <VFooter
    id="core-footer"
    class="body-2"
    fixed
    absolute
    height="82"
  >
    <div class="footer-items">
      <span
        v-for="link in links"
        :key="link.name"
      >
        <a
          :href="link.Link"
          class=" tertiary--text footer-links"
        >{{
          link.name
        }}</a>
      </span>
    </div>
    <VSpacer />
    <span class="font-weight-light">
      &copy; {{ new Date().getFullYear() }} Bilibili.dog
    </span>
  </VFooter>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: "主站首页", Link: "/" }
    ]
  })
};
</script>

<style scoped>
#core-footer {
  z-index: 0;
}
.footer-links {
  padding: 5px;
  text-decoration: none;
}
</style>
