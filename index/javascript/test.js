function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const hide = () => {
  document.getElementsByClassName("unhide")[0].removeAttribute("id");
  document.getElementsByClassName("hide")[0].setAttribute("id", "disappear");
  document.getElementsByTagName("nav")[0].setAttribute("id", "collapse");
  document.getElementsByClassName("title")[0].setAttribute("id", "hide");
  document.getElementsByClassName("quote")[0].setAttribute("id", "hide");
  document.getElementsByClassName("menu")[0].setAttribute("id", "hide");
  document.getElementsByClassName("content")[0].setAttribute("id", "hide-top");
}

const unhide = () => {
  document.getElementsByClassName("unhide")[0].setAttribute("id", "disappear");
  document.getElementsByClassName("hide")[0].removeAttribute("id");
  document.getElementsByTagName("nav")[0].removeAttribute("id");
  document.getElementsByClassName("content")[0].removeAttribute("id");
  sleep(500).then(() => {
    document.getElementsByClassName("title")[0].removeAttribute("id");
    document.getElementsByClassName("quote")[0].removeAttribute("id");
    document.getElementsByClassName("menu")[0].removeAttribute("id");
  })
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByClassName("top")[0].removeAttribute("id");
    } else {
        document.getElementsByClassName("top")[0].setAttribute("id", "hide");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
