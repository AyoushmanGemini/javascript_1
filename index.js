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
      
        return data ;
    } catch (error) {
        console.log(error)
    }
	

    
}

( async function name() {


   
    document.body.style.backgroundColor = "#E5E0FF";
    document.getElementById("head").style.display = "flex";
    document.getElementById("head").style.flexDirection = "column";
    document.getElementById("head").style.alignItems = "center";
    document.getElementById("head").style.justifyContent = "center";

    document.getElementById("main").style.display = "flex";
    document.getElementById("main").style.flexDirection = "column";
    document.getElementById("main").style.alignContent = "center";
    document.getElementById("main").style.justifyContent = "center";
    document.getElementById("main").style.minWidth = "100vw";
    document.getElementById("main").style.minHeight = "100vh";
    let br = document.createElement("br");
    let table1 = document.createElement("table");
    table1.classList.add("table")
    table1.classList.add("table-hover")
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
     let data = await getResponse();

     console.log(data);
     
    
     
     
     for (let j = 0; j < 5; j++) {
         if(j==0){
            const cell_name = document.createElement("td");
            const name_text = document.createTextNode(` ${data.first_name}`);
            cell_name.appendChild(name_text);
            row.appendChild(cell_name);
         } else if(j==1) {
            const cell_age = document.createElement("td");
            const age_text = document.createTextNode(`11/10/2000`);
            cell_age.appendChild(age_text);
            row.appendChild(cell_age);
         }

         else if(j==2) {
 const cell_date = document.createElement("td");
 const date_text = document.createTextNode(`${data.date_of_birth}`)
            cell_date.appendChild(date_text);
            row.appendChild(cell_date)
         }else if(j==3){
const email = document.createElement("td");
const email_text = document.createTextNode(`${data.email}`)
email.appendChild(email_text);
row.appendChild(email)
         }

         else if(j==4){
            const company = document.createElement("td");
            const company_text = document.createTextNode(`${data.username}`)
company.appendChild(company_text);
row.appendChild(company)
         }
         
         
        }
    
      
        tBody.appendChild(row);
      }

    table1.appendChild(tBody);

    let tb = document.getElementById("main");
    tb.appendChild(table1)             
    
    

    let x = " Hello";
    console.log(x);
})();