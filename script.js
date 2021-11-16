
   // let city = London;

function loadData(city) {
    

    fetch("")
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



