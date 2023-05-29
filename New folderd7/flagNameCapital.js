//Print the following details name, capital, flag using forEach function
let dataRequest = new XMLHttpRequest();
 dataRequest.addEventListener("load",printdata);
 dataRequest.open("GET","https://restcountries.com/v3.1/all");
 dataRequest.send();
 
  function printdata(){
   const countries= JSON.parse(this.responseText);
   countries.forEach(country=>{
   const name=country.name.common;
   const flag=country.flags.png;
   const capital=country.capital;
   console.log("Name:",name);
    console.log("Capital:",capital);
    console.log("Flag:",flag);
   } )
  }