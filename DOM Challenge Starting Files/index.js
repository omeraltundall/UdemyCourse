document.querySelector("button").style.backgroundColor = "yellow"
document.querySelector("h1").classList.add("huge");
console.log(document.querySelectorAll("ul li")[0].innerHTML)
// in innerHTML we can see the all things between the element however in texContent we can only see the text
console.log(document.querySelectorAll("ul li")[0].textContent)
console.log(document.querySelector("a").getAttribute("href"))
document.querySelector("li a").setAttribute("target","_blank")
document.querySelector("li a").setAttribute("href","https://www.osmaniye.edu.tr/birimdetay-bidb-30326")