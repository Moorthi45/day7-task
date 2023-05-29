function printdata(){
    const countries=JSON.parse(this.responseText);
    const countryLessPopulation=countries.filter(count =>count.population< 200000);
    const countyName=countryLessPopulation.forEach(count=>{
    const country=count.name.common;
    const population=count.population;
    console.log(country);
    console.log(population);
     
    });
  }
let dataRequest=new XMLHttpRequest();
  dataRequest.addEventListener("load",printdata);
  dataRequest.open("GET","https://restcountries.com/v3.1/all");
  dataRequest.send();