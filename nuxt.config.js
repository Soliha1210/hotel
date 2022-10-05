export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Toshkentdagi shinam mehmonxona - Old City Hotel',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Toshkentdagi Old City mehmonxonasi. Mehmonxona qulay, shinam va ozoda. Mehmonxona Chorsu, Xadra maydoni yaqinida joylashgan.' },
      { name: 'description', lang: 'ru', content:'Гостиница Оld City в Ташкенте. отель комфортный, уютный и аккуратный.Гостиница расположена недалеко от площади Хадра, Чорсу.'},
      { name: 'description', lang: 'en', content:'Old City Hotel in Tashkent. the hotel is comfortable, cozy and tidy.The hotel is located near Khadra Square, Chorsu.'},
      {name: 'keywords', content:'hotel, mehmonxona, Гостиница, Chorsu, Tashkent'},
      { name: 'format-detection', content: 'telephone=no' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '@/assets/css/custom.css', lang: 'css'},
    {src: 'viewerjs/dist/viewer.css'},
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vViewer.js', ssr: false },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],
  // build: {
  //   babel: {
  //     compact: true
  //   }
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',

    [
      '@nuxtjs/i18n',
      {
        lazy:true,
        locales: [
          { code: 'uz', iso: 'uz-UZ', name:'Uzbek', file: 'uz.js'},
          { code: 'ru', iso: 'ru-RU', name: 'Russian', file: 'ru.js' },
          { code: 'en', iso: 'en-US', name:'English', file:'en.js'},
      ],
        defaultLocale: 'uz',
        rootRedirect: "uz",
        parsePages: false,
        strategy:"prefix",
        langDir: "lang/",
        detectBrowserLanguage:{
          useCookie: true,
          fallbackLocale: "uz"
        },
      }
    ]
  ],
  bootstrapVue: {
    icons: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extends(config,ctx){},
    babel: { compact: true }
  },
  generate:{
    dir:'my-site'
  }
}
