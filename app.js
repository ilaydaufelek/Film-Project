const elementTitle=document.querySelector("#title")
const formFilm=document.querySelector("#film-form")
const directorElement=document.querySelector("#director")
const urlElement=document.querySelector("#url")
const cardBody=document.querySelector(".card-body")
const  allDelete=document.querySelector("#allDelete")


console.log(cardBody);
const ui=new UI();
const storage=new Storage();


eventListener();

function eventListener() {
    formFilm.addEventListener("submit", addNewFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let film=storage. getFilmFromStorage();
        ui.allLoadedFilms(film)  
    })
   
    cardBody.addEventListener("click",deleteFilm)
    allDelete.addEventListener("click",deleteAllFilms)
    
}

function addNewFilm(e) {
    e.preventDefault();
    const title = elementTitle.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // Uyarı mesajı
        console.log("Lütfen tüm alanları doldurun");
    } else {
        const newFilm = new Film(title, director, url);
        ui.addFilmFromUI(newFilm);
        storage.addFilmFromStorage(newFilm);
        ui.disabledButton()
    }

   ui.clearInputs(elementTitle,directorElement,urlElement) 
}

function deleteFilm(e){
    console.log(e.target)
   if(e.target.id==="delete-film"){
    ui.deleteItems(e.target)
   storage.deleteItemFromStorage(e.target.parentElement.parentElement.children[2].children[3].textContent)
   ui.disabledButton()
   console.log(e.target.parentElement.parentElement.children[2].children[3].textContent);
   
   
   }
}

function deleteAllFilms(){
    storage.deleteAllFromStorage()
    ui.deleteAllFromUI()
    ui.disabledButton()
}
 