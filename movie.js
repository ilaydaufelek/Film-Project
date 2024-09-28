class Film {
    constructor(title, director, url) {
      this.title = title;
      this.director = director;
      this.url = url;
      this.id = this.generateId();
    }
    generateId() {
      return 'film_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    }
}