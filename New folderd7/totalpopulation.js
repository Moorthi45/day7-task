let dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load",printdata);
dataRequest.open("GET","https://restcountries.com/v3.1/all");
dataRequest.send();

 function printdata(){
  const countries= JSON.parse(this.responseText);
  const countryPopulation=countries.reduce((a,country)=>a+country.population,0);
  console.log("Total population:S",countryPopulation);
 
 }