# Stripe extension for Vue Storefront

Stripe extension for [vue-storefront](https://github.com/DivanteLtd/vue-storefront), by [Develo Design](https://nodejs.org/).

## Installation using NPM:

Add the extension to your Vue Storefront `package.json` using:
```shell
$ npm install @develodesign/vue-storefront-stripe --save
```

Add the following to your `config/local.json` and configure the `stripe.api_key` to point to your Stripe details.
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

## Structure
We adhere to the CommonJS Package structure where applicable (http://wiki.commonjs.org/wiki/Packages/1.0).<br>
You will find this extension has the following directories.
- `lib` - the core code/Javascript for this Stripe extension is in the "lib" directory.
- `doc` - accompanying documents for this Stripe extension is in the "doc" directory.
