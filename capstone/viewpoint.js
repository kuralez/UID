function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) 
    {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) 
      {
        li[i].style.display = "";
      } 
      else 
      {
        li[i].style.display = "none";
      }
    }
  }

function html() {
  let a ="ADWARE \n  A type of malware that tracks user activity (e.g. browser usage and downloads) with the intention of delivering advertising, which is often difficult to close.";
  document.getElementById("myHeader").innerHTML = a;
}

function css() {
    document.getElementById("myHeader").innerHTML = "A botnet (from robot network) is a type of malware attack using multiple separate computers that have been infected and commanded by the attacker.";
}

function js() {
    document.getElementById("myHeader").innerHTML = "A keylogger can monitor a great deal of user activity, including email, browsing activity, program use and keystrokes, which can be used to acquire usernames and passwords.";
}