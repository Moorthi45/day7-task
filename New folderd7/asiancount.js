function printdata(){
    const countries=JSON.parse(this.responseText);
   const asiacountry =countries.filter(count =>count.region==="Asia");
    const countryname=asiacountry.map(count=>count.name.common);
    console.log(countryname)
    }
    let dataRequest = new XMLHttpRequest();
    dataRequest.addEventListener("load",printdata);
    dataRequest.open("GET","https://restcountries.com/v3.1/all");
    dataRequest.send();
    