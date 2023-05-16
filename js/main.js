




const renderList=(list,balise)=>{
    console.log(list)
  let template;
  list.map(movie=>{
    template +=`
       <div class="listItems">
       <img src="https://images.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
       </div>
   `;
   $(`${balise}`).html(template)
  })
  
  
  
    
}

export let movies=[];
 function getMovies(){
    fetch(`${apiUrl}movie/popular/?api_key=${api_key}`)
    .then(res=>res.json())
    .then(data=>{
        renderList(data.results,".itemContainer");
        movies=data.results;
        data.results.slice(0,1).map((movie)=>{
            const template=`
             <img src="https://images.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
             <div class="detail position-absolute ">
             <h2 class="">${movie.original_title}</h2>
             <p class="description">${movie.overview}</p>
              <div class=" d-flex align-items-center border-0 buttons">
               <button class=" d-flex align-items-center">
               <ion-icon name="play-outline" class="fs-2 text-white "></ion-icon>
               <span class="text-white ms-2">play</span>
               </button>
               <button>
               <ion-icon name="information-outline" class="fs-2 text-white "></ion-icon>
               <span class="text-white ms-2">infos</span>
               </button>
              </div>
            </div>
            `
            $(".banner").html(template)
        })
    })
    .catch(err=>console.log(err))
 }

 const getMoviesWithParems =(path,callback,params)=>{
        fetch(`${apiUrl}${path}?api_key=${api_key}`)
        .then(res=>res.json())
        .then(data=>callback(data.results,params))
        .catch(err=>console.log(err))
}
getMoviesWithParems("trending/all/week",renderList,".nouveaute")
getMoviesWithParems("trending/all/day",renderList,".tendances")
 getMovies();

