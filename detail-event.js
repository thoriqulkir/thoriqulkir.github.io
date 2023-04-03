var navBar = document.getElementById("navBar");
        function togglebtn() {
            navBar.classList.toggle("hidemenu");
        }

const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 0;

plus.addEventListener("click", ()=>{
    a++;
    num.innerText = a;
    console.log(a);
});

minus.addEventListener("click", ()=>{
  if(a > 0){
    a--;
    num.innerText = a;
  }
});

function myfun(){
  var b = document.getElementsByName('pilih');
  var newvar = 0;
  var count;
  for(count = 0; count < b.length; count++){
    if(b[count].checked == true){
      newvar = newvar + 1;
    }
  }

  if(newvar > 1){
    alert ("** Please Select only One")
    return false;
  }
}
