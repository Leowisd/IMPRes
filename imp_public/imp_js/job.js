var radio_user=document.getElementById("usertarget");
var radio_auto=document.getElementById("autotarget");
var targetfile=document.getElementById("targetfile")
var targetnum=document.getElementById("targetnum")

if(radio_user.checked)
{
    targetfile.removeAttribute("disabled");
    targetnum.setAttribute("disabled","");
}
else if(radio_auto.checked)
{
    targetfile.setAttribute("disabled","");
    targetnum.removeAttribute("disabled");
}
radio_user.addEventListener("click",function(){
    targetfile.removeAttribute("disabled");
    targetnum.setAttribute("disabled","");
})
radio_auto.addEventListener("click",function(){
    targetfile.setAttribute("disabled","");
    targetnum.removeAttribute("disabled");
    
})

var radio_2case=document.getElementById("radio_2case");
var radio_time=document.getElementById("radio_time");
var casesam=document.getElementById("casesam")
var controlsam=document.getElementById("controlsam")
var timepoint=document.getElementById("timepoint")
var replicate=document.getElementById("replicate")
radio_2case.addEventListener("click",function(){
    casesam.removeAttribute("disabled");
    controlsam.removeAttribute("disabled");
    timepoint.setAttribute("disabled","");
    replicate.setAttribute("disabled","");
})
radio_time.addEventListener("click",function(){
    timepoint.removeAttribute("disabled");
    replicate.removeAttribute("disabled");
    casesam.setAttribute("disabled","");
    controlsam.setAttribute("disabled","");
})
var form = document.getElementById('needs-validation');
var hiddenwords=document.getElementById("words");

var sumitbutton=document.getElementById("btn_submit");
sumitbutton.addEventListener("click",function(){
    if (form.checkValidity() === true) {

        hiddenwords.classList.remove("hidden");
      }
  
    
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// Example starter JavaScript for disabling form submissions if there are invalid fields

    // var form = document.getElementById('needs-validation');
    // form.addEventListener('submit', function(event) {
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     alert("not");
    //   }
    //   else
    //   {
    //       alert("yes");
    //   }
    // })

