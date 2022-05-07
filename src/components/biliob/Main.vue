<template>
  <VSlideYTransition
    mode="out-in"
    tag="div"
    class="row justify-center"
    group
  >
    <VCol
      key="main"
      lg="8"
      cols="12"
    >
      <VSlideYTransition mode="out-in">
        <RouterView id="main-view" />
      </VSlideYTransition>
    </VCol>

    <VCol
      v-if="
        (-1 == ['/login', '/signin'].indexOf(this.$route.path) &&
          this.$route.path.indexOf('user') == -1) ||
          this.$route.path == '/user/rank'
      "
      key="comment"
      lg="3"
      cols="12"
    >
      <BiliobComment id="comment-container" />
    </VCol>
  </VSlideYTransition>
</template>

<script>
export default {};
</script>

<style>
</style>