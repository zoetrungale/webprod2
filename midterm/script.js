const form = document.getElementById("nameForm");
const resultDiv = document.getElementById("result");
const resultDiv1 = document.getElementById("result1");
const resultDiv2 = document.getElementById("result2");


//broad styling
document.body.style.fontFamily=`arial`;
document.body.style.fontSize=`20px`;
document.body.style.textAlign= `center`;
document.body.style.backgroundColor=`#2F2F2F`;
document.body.style.color=`white`;
form.style.padding=`20px`;
form.style.fontSize=`40px`;
document.getElementById("button").style.padding=`5px 15px`;
document.getElementById("button").style.textAlign=`center`;
document.getElementById("button").style.fontSize=`30px`
document.getElementById("button").style.borderRadius=`12px`;
document.getElementById("nameInput").style.fontSize=`30px`
resultDiv.style.padding=`10px`;
resultDiv1.style.padding=`10px`;
resultDiv2.style.padding=`10px`;

resultDiv.style.textAlign=`left`;
resultDiv1.style.textAlign=`right`;
resultDiv2.style.textAlign=`left`;




form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page from refreshing on form submit

  const nameInput = document.getElementById("nameInput").value;
  const apiUrl = `https://api.nationalize.io/?name=${nameInput}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const countryCode = data.country[0].country_id;
      const probability = data.country[0].probability;

      const countryCode1 = data.country[1].country_id;
      const probability1 = data.country[1].probability;

      const countryCode2 = data.country[2].country_id;
      const probability2 = data.country[2].probability;



      // Make a request to REST Countries API to get the country name from the country code
      const countryNameUrl = `https://restcountries.com/v2/alpha/${countryCode}?fields=name`;
      const countryNameUrl1 = `https://restcountries.com/v2/alpha/${countryCode1}?fields=name`;
      const countryNameUrl2 = `https://restcountries.com/v2/alpha/${countryCode2}?fields=name`;




      fetch(countryNameUrl)
        .then(response => response.json())
        .then(countryData => {
          const countryName = countryData.name;
          resultDiv.innerHTML = `If your name is ${nameInput} you're probably from ${countryName}`;
          resultDiv.style.opacity =`${probability*100}%`
          
        })
        .catch(error => {
          resultDiv.innerHTML = `Error: ${error.message}`;
        });

        
      fetch(countryNameUrl1)
      .then(response => response.json())
      .then(countryData => {
        const countryName1 = countryData.name;
        resultDiv1.innerHTML = `or you could be from ${countryName1}`;
        resultDiv1.style.opacity =`${probability1*100}%`

      })

      fetch(countryNameUrl2)
      .then(response => response.json())
      .then(countryData => {
        const countryName2 = countryData.name;
        resultDiv2.innerHTML = `or maybe you're from ${countryName2}... <br/> <br/> <br/> <br/>
        was i wrong?`;
        resultDiv2.style.opacity =`${probability2*100}%`

      })


    })

    .catch(error => {
      resultDiv.innerHTML = `Error: ${error.message}`;
    });
});
