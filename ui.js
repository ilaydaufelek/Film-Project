class UI{
    addFilmFromUI(newFilm){
        const filmList=document.getElementById("films")
        const videoID= this.shortVideoID(newFilm.url)
      filmList.innerHTML+=`  <div class="w-[450px] h-[360px] border-0 relative   shadow-sm ring-1  z-0  ring-gray-300 m-2 rounded-lg  group">
                <div class="flex  right-0 m-1 absolute text-white z-10  hidden group-hover:flex">
                  <i id="delete-film" class="fa-solid fa-xmark"></i>
                </div>
              
                
                <div class="relative">
                  <div> <iframe class="w-[450px] h-[260px] rounded-t-lg" id="video-${videoID}" src="https://www.youtube.com/embed/${videoID}?mute=1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
              
              
               <div class="relative ml-2 mt-2">
                <span>${newFilm.title}</span>
                <br>
                <span>${newFilm.director}</span>
                <span class="hidden">${newFilm.id}</span>
                </div>
              
              </div>`
       this.hoverPlay(videoID)
    }

    shortVideoID(url) {
      const urlParts = url.split('/');
      let videoID = urlParts[urlParts.length - 1];
      if (videoID.includes('?')) {
          videoID = videoID.split('?')[0];  
      }
      return videoID;  
  }

    hoverPlay(videoID){
        const iframe=document.getElementById(`video-${videoID}`)
       
        
        const originalSrc=iframe.src;
        iframe.addEventListener("mouseenter",function(){
            iframe.src=`${originalSrc}&autoplay=1`
        })
        iframe.addEventListener("mouseleave",function(){
            iframe.src=originalSrc;
        })
    }

    clearInputs(element1,element2,element3){
       element1.value ="";
       element2.value ="";
       element3.value ="";
    }

    allLoadedFilms(film){
        const filmList = document.getElementById("films");
        film.forEach(films => { 
            const videoID = this.shortVideoID(films.url);
            filmList.innerHTML += `
                <div class="w-[250px] h-[360px] lg:w-[450px] lg:h-[360px]  border-0 relative shadow-sm ring-1 z-0 ring-gray-300 m-2 rounded-lg group">
                    <div class="flex right-0 m-1 absolute text-white z-10 hidden group-hover:flex">
                        <i id="delete-film" class="cursor-pointer fa-solid fa-xmark"></i>
                    </div>
                    <div class="relative">
                        <div>
                            <iframe class="w-full h-[260px] rounded-t-lg" id="video-${videoID}" src="https://www.youtube.com/embed/${videoID}?mute=1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="relative ml-2 mt-2">
                        <span>${films.title}</span><br>
                        <span>${films.director}</span>
                        <span class="hidden">${films.id}</span>
                        
                    </div>
                </div>`;
            this.hoverPlay(videoID) 
            
        });
      } 
     
      deleteItems(element){
       element.parentElement.parentElement.remove();
      }

      deleteAllFromUI(){
           const filmList=document.querySelector("#films")
           while(filmList.firstElementChild!==null){
            filmList.firstElementChild.remove();
           }
      }
      disabledButton(){
        const films=storage.getFilmFromStorage()
        
        return films.length === 0 ? allDelete.setAttribute("disabled","true") : allDelete.removeAttribute("disabled");
       
    
     }
    
  }  

  

