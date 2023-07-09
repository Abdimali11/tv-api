document.querySelector("#search").addEventListener("click",function(){
    let search = document.querySelector(".search-box").value;
    document.querySelector(".movies-section").innerHTML = ""



    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{

      for(let i=0; i<data.length; i++){
        const div = document.createElement("div")
        div.classList.add("movie-card");
        div.innerHTML = `
        <div class="movie-image">
          <img
            src="${data[i].show.image.medium}"
            alt="movie"/>
  
        </div>
        <h3 class="movie-heading">${data[i].show.name}</h3>
  
        <div class="details">
          <div class="rating">
            <img src="https://pngimg.com/d/star_PNG41474.png" height="15"/>
            <h3>${data[i].show.rating.average || 0}</h3>
          </div>
          <p>${data[i].show.genres.join(" | ")}</p>
        </div>
            <button class="button">Website</button>
            
        `


        document.querySelector(".movies-section").appendChild(div)



      }
    })
        })