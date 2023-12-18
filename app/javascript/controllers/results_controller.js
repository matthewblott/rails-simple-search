import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  select(event) {
    const field = this.data.get('field-param')
    const value = event.currentTarget.innerText
    this.dispatch('selected', { detail: { field, value } })
  }
}
