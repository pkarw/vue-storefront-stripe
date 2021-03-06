# Stripe extension for Vue Storefront

Stripe extension for [vue-storefront](https://github.com/DivanteLtd/vue-storefront), by [Develo Design](https://develodesign.co.uk).

## Installation using NPM:

Add the extension to your Vue Storefront `package.json` using:
```shell
$ npm install vue-storefront-stripe --save
```

Add `payment-develodesign-stripe` to the registeredExtensions section in your `config/local.json`
```js
"registeredExtensions": [
    ...
    ...
    ...
    "payment-develodesign-stripe"
]
```

Add the following also to your `config/local.json` and configure the `stripe.api_key` to point to your Stripe details.
```js
"stripe": {
    "api_key": "my_example_api_key"
}
```

You can also customize the appearance of Stripe elements using the `style` key using any of the official stripe style properties found [here](https://stripe.com/docs/stripe-js/reference#stripe-elements).
```js
"stripe": {
    "api_key": "my_example_api_key",
    "style": {
        "base": {
            "fontSize": "16px",
            "color": "#32325d"
          },
          "invalid": {
              "color": "#fa755a"
          }
    }
}
```
