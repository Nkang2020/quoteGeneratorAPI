$(document).ready(function() {
  var randomQuote;
  var randomNum;
  var randomAuthor;
  function getQuote() {
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
    $.getJSON(url, function(data) {
      if(data.quoteAuthor === ""){
        randomAuthor = "Unknown";
      }
      else{
        randomAuthor = data.quoteAuthor;
      }
      randomQuote = data.quoteText;
      $(".quote").html('"' + randomQuote + '"');
      $(".author").html("-" + randomAuthor);
    });
  };
  $("#tweet").click(function() {
    window.open("http://twitter.com/intent/tweet?text=" + randomQuote + " -" + randomAuthor);
  });
  $("#newQuote").on("click", function() {
    getQuote();
  });
});