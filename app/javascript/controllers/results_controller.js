import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['the_list']

  select(event) {
    const value = event.currentTarget.innerText
    this.dispatch('selected', { detail: { value } })
    this.the_listTarget.innerHTML = ''
  }
}
