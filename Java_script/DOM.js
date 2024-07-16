console.log(document.getElementById("id1"))
console.log(document.getElementById("id2"))
console.log(document.getElementById("id3"))
console.log(document.getElementsByClassName("class1"))
console.log(document.getElementsByClassName("class2")[0])
function change(){
    var x = document.getElementsByClassName("modification")[0]
    x.src = "../pa210170.jpg";

}
function button2(){
    var y = document.getElementsByClassName("setting_attribute")[0];
    // y.setAttribute("style","backgroundcolor:red")
    y.style.backgroundColor="red";
}