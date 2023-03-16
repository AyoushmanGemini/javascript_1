async function getResponse() {

    try {
        var response = await fetch(
            'https://random-data-api.com/api/v2/users',
            {
                method: 'GET',
                response_type: 'json'
            }
    
           
        ); 
        
        const data = await response.json();
        console.log(data)
        return data ;
    } catch (error) {
        console.log(error)
    }
	

    
}

(function name() {
    let br = document.createElement("br");
    let table1 = document.createElement("table");
    let tBody = document.createElement("tbody");


    let Name = document.createElement("th");
    let name_text = document.createTextNode("NAME");
    Name.appendChild(name_text);
    let Age = document.createElement("th");
    let age_text =  document.createTextNode("AGE");
    Age.appendChild(age_text);
    let Dob = document.createElement("th");
    let dob_text = document.createTextNode("DATE");
    Dob.appendChild(dob_text);
    let Email = document.createElement("th");
    let email_text = document.createTextNode("EMAIL");
    Email.appendChild(email_text);
    let Company = document.createElement("th");
    let company_text = document.createTextNode("COMPANY");
    Company.appendChild(company_text);
    let head_row = document.createElement("tr");
    head_row.appendChild(Name);
    head_row.appendChild(Age);
    head_row.appendChild(Dob);
    head_row.appendChild(Email);
    head_row.appendChild(Company);
    tBody.appendChild(head_row);
  
    for (let i = 0; i < 5; i++) {
   
        const row = document.createElement("tr");
    getResponse();
        for (let j = 0; j < 5; j++) {
         
          const cell = document.createElement("td");
          const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
    
      
        tBody.appendChild(row);
      }

    table1.appendChild(tBody);

    let tb = document.getElementById("main");
    tb.appendChild(table1)             
    
    

    let x = " Hello";
    console.log(x);
})();