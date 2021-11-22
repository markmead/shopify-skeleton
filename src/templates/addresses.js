import { AddressForm } from '@shopify/theme-addresses'

document.addEventListener('DOMContentLoaded', () => {
  AddressForm(document.querySelector('[data-address="root"]'), 'en')
})
