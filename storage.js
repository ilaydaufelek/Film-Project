class Storage {
    getFilmFromStorage() {
        let film;
        if (localStorage.getItem("film") === null) {
            film = [];
        } else {
            film = JSON.parse(localStorage.getItem("film"));
        }
        return film;
    }

    addFilmFromStorage(newFilm) {
        let film = this.getFilmFromStorage();
        film.push(newFilm);
        localStorage.setItem("film", JSON.stringify(film));
    }
    deleteAllFromStorage(){
       localStorage.removeItem("film") 
    }


   deleteItemFromStorage(filmID){
     let films=this.getFilmFromStorage()
     films=films.filter(films=>films.id!==filmID)
     localStorage.setItem("film",JSON.stringify(films))
     
   }

}