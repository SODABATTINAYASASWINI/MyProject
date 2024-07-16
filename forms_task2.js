var data = {
    Firstname:"",
    Secondname:"",
    DateofBirth:"",
    Fathername:"",
    Mothername:"",
    Address:"",
    Gender:"",
    Certification:"",
    Skills:"",
    Hobbies:"",
}
function firstname(event){
   data.Firstname= event.target.value;
}
function lastname(event){
    data.Secondname = event.target.value;
}
function dateofbirth(event){
    data.DateofBirth = event.target.value;
}
function dataprinting(event){
    console.log(data);
}