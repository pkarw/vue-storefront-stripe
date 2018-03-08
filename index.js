import extensionStore from './lib/store'
import extensionRoutes from './lib/router'
import StripeComponent from './lib/components/stripe'
import EventBus from 'core/plugins/event-bus'
import Vue from 'vue'

const EXTENSION_KEY = 'payment-develodesign-stripe'

export default function (app, router, store, config) {
  router.addRoutes(extensionRoutes) // add custom routes
  store.registerModule(EXTENSION_KEY, extensionStore) // add custom store

  app.$on('application-after-init', () => {
    console.log(EXTENSION_KEY + ' extension initialised')
  })

  // Add this payment method to the config.
  let paymentMethodConfig = {
    'name': 'Stripe',
    'code': 'stripe',
    'cost': 0,
    'costInclTax': 0,
    'default': false,
    'offline': false
  }

  app.$store.state.payment.methods.push(paymentMethodConfig)

  // Mount the stripe component when required.
  EventBus.$on('checkout-payment-method-changed', (paymentMethodCode) => {
    console.log('checkout-payment-method-changed inside the index')
    if (paymentMethodCode === 'stripe') {
      console.log('checkout-payment-method-changed inside the index STRIPE')
      const Component = Vue.extend(StripeComponent)
      const componentInstance = (new Component())
      componentInstance.$mount('#checkout-order-review-additional')
    }
  })

  return { EXTENSION_KEY, extensionRoutes, extensionStore }
}
