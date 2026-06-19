import { createApp, provide } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createApolloProvider } from '@vue/apollo-option'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import VueApolloComponents from '@vue/apollo-components'
import './assets/main.scss'

const cache = new InMemoryCache()


const httpLink = createHttpLink({
  uri: 'https://eu-west-2.cdn.hygraph.com/content/cmltyy9ly00ng07w27kip7jie/master',
})


const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp(App)

app.use(createPinia())
app.use(apolloProvider)
app.use(router)
app.use(VueApolloComponents)

app.mount('#app')
