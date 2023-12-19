import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['the_input', 'the_submit']

  clear() {
    this.the_inputTarget.value = ''
  }

  selected(event) {
    const { value } = event.detail;
    this.the_inputTarget.value = value;
  }

  query() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      if (this.the_inputTarget.value.length > 1) {
        this.the_submitTarget.click()
      }
    }, 500)
  }
}
