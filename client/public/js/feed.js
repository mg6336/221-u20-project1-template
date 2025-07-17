function gotolocation(path) {
    window.locationhref = path;
  }
  function checkKeyPress(e) {
    if (e.keyCode == 32) {
        e.preventDefault();
      goToLocation('http://my.marist.edu');
    }
  }
  window.onload = function() {
    document.body.setAttribute("tabindex", "0");
    document.body.focus();
    document.body.addEventListener("keydown", checkKeyPress);
    const clickTarget = document.getElementById("portal_button");
    if(clickTarget) {
      clickTarget.style.cursor = "pointer";
      clickTarget.addEventListener("click" , () => {
        goToLocation("http://my.marist.edu");
      });
    }
  };


window.addEventListener("load" , function() {
  this.document.getElementById("content").innerHTML = "";
  let content = document.getElementById("content");
  let article1 = {title : "Article" , body: "Marist is very cool!" , linkURL : "https://www.marist.edu/" , imageURL : "images/campus.png"};
  let article2 = {title : "Article of the topic" , body: "This article is towards Newbrugh schools in which we talk about how Marist has helped the students in coding classes" , linkURL : "https://www.newburghschools.org/" , imageURL : "images/news_pic.jpg"};
  let article3 = {title : "Bird Bird Bird" , body: "All about birds" , linkURL : "https://en.wikipedia.org/wiki/Bird" , imageURL : "images/hancock.jpeg"};
  let articles = [article1 , article2 , article3];
  for(i = 0; i < articles.length; i++){
    content.innerHTML += "<h3>" + articles[i].title + "</h3>";
    content.innerHTML += "<h5>" + articles[i].body + "</h5>";
    content.innerHTML += "<h5>" + articles[i].linkURL + "</h5>";
    content.innerHTML += "<h5>" + articles[i].imageURL +  "</h5>";
  }
  
})



  