var myHeaders = new Headers();
myHeaders.append("apikey", "TX72hysrCDR39QxMvHSpIcDM2q7lJNZR");

var raw = "people often forget that world war two was no joke, indeed it was the utter humiliation of humankind. Such was the  nature of the war that its ruthlessness exceeded anything a man could have conjured up before the war.";

var requestOptions = {
  method: "POST",
  redirect: "follow",
  headers: myHeaders,
  body: raw,
};

fetch("https://api.apilayer.com/keyword", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
