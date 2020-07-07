export class Page {
  constructor(params) {
    this.params = params;
  }

  getRoot() {
    throw new Error('Trouble in getRoot');
  }

  afterRender() {

  }

  destroy() {

  }
}
