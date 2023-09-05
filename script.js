fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    console.log(response);
    response.json().then((data)=>{
        console.log(data)
        let oppi=document.getElementById("cardContainer")
        data.forEach(user => {
            oppi.innerHTML +=`  <div id="Card">
            <div id="Top">
                <h4>8/20/2023</h4>
                <h3>Active </h3>
            </div>
            <div id="centre">
                
            
              <img src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png" alt="Avatar" id="avatar"> </div>
              
              <div id="centrebottom">
                <h2>${user.name}</h2>
                <div class="details">
                 <p>${user.email}</p>
            </div>
              </div>

           
            <div id="end">
              <button type="button" onclick="location.href='https://www.linkedin.com/in/engr-sameen-afzal-ahmed-028751234/'"  >View Profile
              </button>
             
        
              <pre><i class="fa-brands fa-linkedin"></i><i class="fa-brands fa-youtube"></i><i class="fa-brands fa-facebook"></i>
              </pre>

            

            </div>
        </div>     `
            
        });
    })
});
