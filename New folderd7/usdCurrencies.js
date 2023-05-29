fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => printData(filterData(data)))
        .catch((error) => console.log(error));

      function filterData(data) {
        let filteredData = [];
        if (data.length > 0) {
          filteredData = data.filter((data) => data?.currencies?.USD);
        }
        return filteredData;
      }

      function printData(data) {
        console.log(data.length);
      }