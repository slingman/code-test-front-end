
var allMovies = document.querySelectorAll("input[type='radio']")

function movieClick(e) {
  var current = e.currentTarget
  var selectedMovieElem = document.querySelector("input[type='radio'][checked='checked']")

  if (selectedMovieElem) {
    var selectedMovie = selectedMovieElem.getAttribute("data-movie")
    
    current.setAttribute("checked","checked")
    selectedMovieElem.removeAttribute("checked")
    current.className = "selected"
    selectedMovieElem.className = ""
    replaceMovie('movie',selectedMovie)
  }
  else {
    var selectedMovie = current.getAttribute("data-movie")

    current.setAttribute("checked","checked")
    current.className = "selected"
    replaceMovie('movie',selectedMovie)
  }
}

for (var i = 0, l = allMovies.length; i < l; i++) {
  var current = allMovies[i]
  current.addEventListener ('click',movieClick)
}

function replaceMovie(target, source) {
  console.log (target,source)
  document.getElementById(target).innerHTML = document.getElementById(source).innerHTML;
}

document.addEventListener("keydown", function(e) {
  //e.preventDefault() //scroll the thumbnailsr3
  var selectedMovieElem = document.querySelector("input[type='radio'][checked='checked']")

  if (selectedMovieElem) {
    var selectedMovie = selectedMovieElem.getAttribute("data-movie")
    var prevElem, nextElem

    for (var i = 0, l = allMovies.length; i < l; i++) {
      var current = allMovies[i]
      if (current === selectedMovieElem) {
        if (i === 0) {
          nextElem = allMovies[i + 1] 
        }
        else if (i === l - 1) {
          prevElem = allMovies[i - 1]
        }
        else {
          nextElem = allMovies[i + 1]
          prevElem = allMovies[i - 1]
        }
        break
      }
    }
  
    if (e.keyCode == '13') {
      replaceMovie('movie',selectedMovie)
    }
    if (e.keyCode == '37') {
      if (prevElem) {
        prevElem.setAttribute("checked","checked")
        selectedMovieElem.removeAttribute("checked")
        prevElem.className = "selected"
        selectedMovieElem.className = ""
      }
    }
    if (e.keyCode == '39') {
      if (nextElem) {
        nextElem.setAttribute("checked","checked")
        selectedMovieElem.removeAttribute("checked")
        nextElem.className = "selected"
        selectedMovieElem.className = ""
      }
    }
  }
  else {
    if (e.keyCode == '37' || e.keyCode == '39') {   
      allMovies[0].setAttribute("checked","checked")
      allMovies[0].className = "selected"
    }
  }
  return false;
})