let input = document.querySelector("#input");
let root = document.querySelector("#results");
input.addEventListener("input", async (e) => {
  let value = e.target.value;
  let url = `http://www.omdbapi.com/?apikey=${api_key}&s=${value}`;
  let rawResult = await fetch(url);
  let result = await rawResult.json();
  console.log(result);
  //fetch(url).then(data =>{
  //    livjerirhnvue
  //    return
  //}
  //return result
  let html = "";
  html += '<div class="row d-flex justify-content-center">'
  if (result.Response) {
    for (let i = 0; i < result.Search.length; i++) {
      html =
        html +  
        `       
                
        
        <div class="card m-3" style="width: 500px">

        <div class="card-header">
                <img src=${result.Search[i].Poster} />
        </div>

        <div class="card-body">
                <h5><strong>${result.Search[i].Title}</strong><h5>
                <p>${result.Search[i].Year}<p>
                
                </div>
                <div class="card-footer">
                <button class="btn btn-warning">Read more</button>
                </div>
                </div>
            
               
                
              
                
                `;
    }
    html +='</div>'
  }
  console.log(html);
  results.innerHTML = html;
});
