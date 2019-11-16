import Vue from 'vue'
import Logo from '@/components/Logo.vue'

const components = { Logo }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
