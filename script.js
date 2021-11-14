//let apiKey = f9f7f81eb5386ea3ae64a04a9cf5b75b;
   // let city = London;

function loadData(city) {
    

    fetch("api.openweathermap.org/data/2.5/weather?q=London&appid=f9f7f81eb5386ea3ae64a04a9cf5b75b")
        .then(response => console.log(response.json()));
            
          /*  {
            if(response.ok){
               return response.json();
            } else {
                return Promise.reject(`Http error: ${response.status}`);
            }
        })
        .then(response => {console.log(response)
        })
        .catch(error => {
            console.error(error)
        });*/
}



