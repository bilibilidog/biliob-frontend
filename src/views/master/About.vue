<template>
  <VContainer class="about">
    <VRow>
      <VCol cols="12">
        <BiliobCard title="关于本网站">
          <VCardText>
            本网站所有数据来自于 Bilibili。
            <br>本网站的目的是搜集并观测B站的UP主、视频或番剧等数据。
            <br>一方面，这些数据能够给UP主作为参考，了解自己作品的受欢迎程度。从而帮助作者创作更加优秀的作品。
            <br>另一方面，通过观测这些数据，能够了解到B站的最新动态。这些数据本身就非常具有观赏性。
          </VCardText>
        </BiliobCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <BiliobCard title="网站架构">
          <VCardText>
            <h4>前端</h4>
            <li>使用 Vue.js</li>
            <li>
              应用了 Vue 全家桶，使用 VueCli
              3.0 手脚架，集成 Vuex 前端状态管理、vue-router 前端路由。
            </li>
            <li>
              应用了 PWA（渐进式 Web 应用程序），能够在PC端和Web端获得原生应用般的体验，前提是使用 Chrome、Safari、edge 等主流浏览器。
            </li>
            <li>图表库使用了 Echart.js。由百度开源。</li>
            <li>
              前端UI组件库采用的是 Vuetify.js，由歪果仁维护。
              这个前端UI组件库的设计语言采用 Material Design。
              是一种谷歌公司推出的移动端优先的设计语言。
            </li>
            <br>
            <h4>后端</h4>
            <li>后端采用 Springboot 构建微服务。</li>
            <li>采用 RESTful 风格的 API。</li>
            <li>权限认证采用 Shrio 框架。</li>
            <br>
            <br>
            <h4>数据库</h4>
            <li>
              数据库采用 MongoDB。据说存取速度快，但是看上去巨占内存，
              存取爬虫爬取的结构奇葩的数据或许用这样的非关系数据库更好。
            </li>
            <br>
            <h4>缓存</h4>
            <li>
              缓存数据库采用的是 Redis。 Redis 还用于分布式爬虫的消息队列。
            </li>
            <br>
            <h4>持续集成</h4>
            <li>筹备中</li>
            <br>
            <h4>其他支持</h4>
            <li>前端服务器由 Vercel 提供支持，使用了 CDN 内容分发网络服务。</li>
          </VCardText>
        </BiliobCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <BiliobCard title="其他想要说的话">
          <VCardText>
            由于技术有限、资源有限等原因，该网站可能还有很多不尽如人意的地方。
            <br>
            未来将会加入谷歌广告联盟以筹集经费供本项目运营和开发。
          </VCardText>
        </BiliobCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
