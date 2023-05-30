var heading = document.getElementById("styled-title");
var words = heading.textContent.split(" ");
words[0] = "<span id='first-word'>" + words[0] + "</span>";
words[words.length - 1] =
  "<span id='last-word'>" + words[words.length - 1] + "</span>";
heading.innerHTML = words.join(" ");
