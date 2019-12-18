document.querySelector("button").addEventListener("click", () => {
let internID = document.querySelector("#intern_id").value;

fetch(`http:192.168.33.10/api/interns/${internID}`)
.then((response)=>{
    response.json()
    .then((data)=>{
        let theadElement = document.createElement("thead");
        tableElement.appendChild(theadElement);
        
        document.querySelector('main').innerHTML='';
        document.querySelector('main').appendChild("thead");

        internFName= data.description[0].firstname;
        internLName= data.description[0].lastname;
        internAge= data.description[0].age;
        internEmail= data.description[0].email;
        internPNumber= data.description[0].phone_number;
        
        // Création de notre premier <tr> en HTML
        let trElement1 = document.createElement("tr");
        theadElement.appendChild(trElement1);

        // Création de nos <th> en HTML
        let thElement1 = document.createElement("th");
        let thElement2 = document.createElement("th");
        let thElement3 = document.createElement("th");
        let thElement4 = document.createElement("th");
        let thElement5 = document.createElement("th");
       

        // Insertion de données dans nos <th>
        thElement1.innerHTML = "Prénom";
        thElement2.innerHTML = "Nom";
        thElement3.innerHTML = "Age";
        thElement4.innerHTML = "Email";
        thElement5.innerHTML = "Numéro";
       

        trElement1.appendChild(thElement1);
        trElement1.appendChild(thElement2);
        trElement1.appendChild(thElement3);
        trElement1.appendChild(thElement4);
        trElement1.appendChild(thElement5);
    

        // Création de notre <tbody> et ajout à notre <table>
        let tbodyElement = document.createElement("tbody");
        tableElement.appendChild(tbodyElement);

        // Création de notre second <tr> et ajout à notre <tbody>
        let trElement2 = document.createElement("tr");
        tbodyElement.appendChild(trElement2);

        // Création de nos <td> en HTML
        let tdElement1 = document.createElement("td");
        let tdElement2 = document.createElement("td");
        let tdElement3 = document.createElement("td");
        let tdElement4 = document.createElement("td");
        let tdElement5 = document.createElement("td");
       

        // Insertion de données dans nos <td>
        tdElement1.innerHTML = internFName;
        tdElement2.innerHTML = internLName;
        tdElement3.innerHTML = internAge;
        tdElement4.innerHTML = internEmail;
        tdElement5.innerHTML = internPNumber;
            
    
        
        trElement2.appendChild(tdElement1);
        trElement2.appendChild(tdElement2);
        trElement2.appendChild(tdElement3);
        trElement2.appendChild(tdElement4);
        trElement2.appendChild(tdElement5);
     
        })
    })
});

  
    