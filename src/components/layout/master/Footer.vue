<template>
  <VFooter
    class="px-0 pt-5"
    dark
    background-color="grey darken-3"
  >
    <VLayout
      wrap
      justify-center
      style="text-align: center"
    >
      <VFlex
        md12
        lg8
      >
        <VLayout
          class="pb-5"
          wrap
        >
          <VFlex
            v-for="(eachBlock, index) in links"
            :key="index"
            lg4
            md6
            class="pl-1"
            style="text-align: left; border-left: 2px solid primary"
          >
            <div class="title font-weight-black grey--text">
              {{ eachBlock.name }}
            </div>
            <div
              v-for="(eachLink, indexLink) in eachBlock.links"
              :key="indexLink"
            >
              <a
                class="caption"
                :href="eachLink.link"
              >
                {{ eachLink.name }}
              </a>
            </div>
          </VFlex>
        </VLayout>
        <div>
          <span class="grey--text">但愿这个网站能够帮助到你。</span>
        </div>
        <VSpacer />
        <span class="caption">
          &copy;
          {{ new Date().getFullYear() }}
          <a
            href="https://www.github.com"
            target="_blank"
          >开源社区</a>, made
          with
          <VIcon
            color="red"
            size="14"
          >mdi-heart</VIcon>
          for BILIBILI
        </span>
        <div />
      </VFlex>
    </VLayout>
  </VFooter>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {
          name: "友情链接",
          links: [
            {
              name: "Jannchie见齐",
              link: "https://github.com/Jannchie"
            }
          ]
        },
        {
          name: "其他",
          links: [
            { name: "管理系统", link: "/tracer/dashboard" },
            { name: "关于", link: "/about" },
            { name: "隐私权政策", link: "/privacy" },
            {
              name: "BiliBli.DOG的源代码",
              link: "https://github.com/bilibilidog?tab=repositories"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
#core-footer {
  z-index: 0;
}
.v-application a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: white;
  text-decoration: underline;
}
@media (max-width: 550px) {
  .footer-items,
  .copyright {
    width: unset;
    text-align: center;
  }
}
</style>
