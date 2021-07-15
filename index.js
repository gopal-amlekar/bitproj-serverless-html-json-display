 function showData() {
    console.log("Showing Data")
    
    // var mainData = document.getElementById("jsonData");
    // mainData.innerHTML="hello"

    fetch("data.json")
    .then(response => {
        resp = response.json()
        return resp
    })
    .then(resp => {
        appendData(resp)    
    })
}

function appendData(resp){
    console.log(resp)

    var mainDiv = document.getElementById("jsonData");

    for (i=0; i< resp.length; i++)
    {
        var nameDiv = document.createElement("div")
        nameDiv.className="collapsible"
        nameDiv.innerHTML = "Name: " + resp[i].Name
        
        var ageDiv = document.createElement("div")
        ageDiv.className="content"
        ageDiv.innerHTML = "Age: " + resp[i].Age
        

        mainDiv.appendChild(nameDiv)
        mainDiv.append(ageDiv)

        nameDiv.addEventListener("click", function() {
            
            this.classList.toggle("active");
            
            var content = this.nextElementSibling;
            
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }

            // if (content.style.maxHeight){
            //     content.style.maxHeight = null;
            //   } else {
            //     content.style.maxHeight = content.scrollHeight + "px";
            //   }

          });

    }
}

