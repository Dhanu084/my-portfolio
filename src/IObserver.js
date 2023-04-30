class IObserver {
  observer = null;
  constructor(callback, options) {
    if (this.observer === null) {
      this.observer = new IntersectionObserver(callback, options);
    }
    return this.observer;
  }
}

export default IObserver;
