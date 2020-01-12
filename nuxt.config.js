const env = require('dotenv').config()
const development = process.env.NODE_ENV !== 'production'
module.exports = {
  mode: 'universal',
  env: env.parsed,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', 'assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: ['@/plugins/element-ui', '@/plugins/global-component.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: development
      ? 'http://127.0.0.1:3000'
      : 'https://traveappp.herokuapp.com'
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config h ere
     */
    extend(config, ctx) {}
  }
}
