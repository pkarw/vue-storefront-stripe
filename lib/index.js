import extensionStore from './store'
import extensionRoutes from './router'
import EventBus from 'core/plugins/event-bus'

const EXTENSION_KEY = 'develodesign-stripe'

export default function (app, router, store, config) {

  router.addRoutes(extensionRoutes) // add custom routes
  store.registerModule(EXTENSION_KEY, extensionStore) // add custom store

  app.$on('application-after-init', () => {
    console.log('develodesign_stripe extension initialised')
  })

  return { EXTENSION_KEY, extensionRoutes, extensionStore }

}
