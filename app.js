var myHeaders = new Headers();
myHeaders.append("apikey", "TX72hysrCDR39QxMvHSpIcDM2q7lJNZR");

var raw = "your eyes they shine so bright";

var requestOptions = {
  method: "POST",
  redirect: "follow",
  headers: myHeaders,
  body: raw,
};

fetch("https://api.apilayer.com/sentiment/analysis", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
