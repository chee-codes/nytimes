var userInput = "trump";
var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  userInput +
  "&api-key=AqG3jjEqnqRMtbc8R2EtZB9W07AcGPEp";

$.ajax({
  url: queryURL,
  method: "GET",
}).then((response) => {
  console.log(response);
  var article = response.response;
  console.log(response.response.docs);

  for (var i = 0; i < 5; i++) {
    console.log(article.docs[i].byline.original);
    var snips = article.docs[i].headline.main;
    var p = $("<p>");
    p.text(snips);
    $(".news").append(p);
  }
});
