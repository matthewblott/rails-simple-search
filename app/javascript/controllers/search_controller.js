import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['the_form', 'the_input']

  clear() {
    this.the_inputTarget.value = ''
  }

  selected(event) {
    const { field, value } = event.detail;

    this.the_inputTargets.forEach((element) => {
      if (element.dataset.field === field) {
        element.value = value;
      }
    });
  }

  query() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      if (this.the_formTarget.querySelector('input').value.length > 2) {
        this.the_formTarget.requestSubmit()
      }
    }, 500)
  }
}
