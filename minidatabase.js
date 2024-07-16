var student_data = [
    {
        Name : "Naruto",
        Age : 15,
        Gender : "Male",
        Delete : ""
    },
    {
        Name : "Hinata",
        Age : 14,
        Gender : "Female",
        Delete : ""
    },
    {
        Name : "Shikamaru",
        Age : 17,
        Gender : "Male",
        Delete : ""
    },
    {
        Name : "Kakashi",
        Age : 25,
        Gender : "Male",
        Delete : ""
    },
    {
        Name : "Sakura",
        Age : 14,
        Gender : "Female",
        Delete : ""
    },
]
var table_head = document.createElement("thead")
var table_body = document.createElement("tbody")
var table_row_head = document.createElement("tr")
var table_row_body = document.createElement("thead")

var table_head_1 = document.createElement("th")
table_head_1.innerHTML = "Name";
table_head_1.style.border = "1px solid black";
var table_head_2 = document.createElement("th")
table_head_2.innerHTML = "Age";
table_head_2.style.border = "1px solid black";
var table_head_3 = document.createElement("th")
table_head_3.innerHTML = "Gender";
table_head_3.style.border = "1px solid black";
table_head_4 = document.createElement("th")
table_head_4.innerHTML = "Delete"
table_head_4.style.border = "1px solid black"
var table_head_5 = document.createElement("th")
table_head_5.style.border = "1px solid black"
table_head_5.innerHTML = "Update" 

table_row_head.appendChild(table_head_1)
table_row_head.appendChild(table_head_2)
table_row_head.appendChild(table_head_3)
table_row_head.appendChild(table_head_4)
table_row_head.appendChild(table_head_5)

table_head.appendChild(table_row_head)

function update(){
    var name = window.prompt("Enter the new name");
    var age = window.prompt("Enter the age");
    var gender = window.prompt("Enter the gender");
    var newstudent = {
        Name : name,
        Age : age,
        Gender : gender,
        Delete : "Delete",
        Update : "Update"
    }
    student_data.push(newstudent)
    display_table();
}

function deleteStudent(index){
    student_data.splice(index, 1);
    display_table();
}

function updateStudent(index){
        var name1 = window.prompt("Name")
        var age1 = window.prompt("Age")
        var gender1 = window.prompt("Gender")
        student_data[index].Name = name1
        student_data[index].Age = age1
        student_data[index].Gender = gender1
    
    display_table();
}
function display_table(){
    table_body.innerHTML = "";
    student_data.forEach((student , index) => {
    
    var table_row_1 = document.createElement("tr")
    table_row_1.style.border = "1px solid black";
    var input_tag1 = document.createElement("input")
                input_tag1.setAttribute("type","text")
                var table_data_1 = document.createElement("td")
                input_tag1.setAttribute("value",student.Name);
                input_tag1.style.border = "none"
                table_data_1.style.border = "1px solid black";
                table_data_1.appendChild(input_tag1);
                

                var input_tag2 = document.createElement("input")
                var table_data_2 = document.createElement("td")
                input_tag2.setAttribute("type","text")
                // table_data_2.innerHTML = student.Age;
                input_tag2.setAttribute("value",student.Age);
                input_tag2.style.border = "none"
                table_data_2.style.border = "1px solid black";
                table_data_2.appendChild(input_tag2);
                // var remove_button2 = document.createElement("button")
                // remove_button2.innerHTML = "Delete"
                // table_data_2.appendChild(remove_button1)


                var input_tag3 = document.createElement("input")
                input_tag3.setAttribute("type","text")
                var table_data_3 = document.createElement("td")
                input_tag3.style.border = "none"
                input_tag3.setAttribute("value",student.Gender);
                table_data_3.style.border = "1px solid black";
                table_data_3.appendChild(input_tag3);
                // var remove_button3 = document.createElement("button")
                // remove_button3.innerHTML = "Delete"
                // table_data_3.appendChild(remove_button1)
                
                var table_data_4 = document.createElement("td")
                var remove_button1 = document.createElement("button")
                remove_button1.innerHTML = "Delete"
                remove_button1.onclick = function(){
                    deleteStudent(index);
                }
                table_data_4.appendChild(remove_button1)
                table_data_4.style.border = "1px solid black";

                var table_data_5 = document.createElement("td")
                var table_data_5_button = document.createElement("button")
                table_data_5_button.innerHTML = "Update"
                table_data_5.appendChild(table_data_5_button)
                table_data_5_button.onclick = function(){
                    updateStudent(index);
                }
                table_data_5.style.border = "1px solid black"


                table_row_1.appendChild(table_data_1)
                table_row_1.appendChild(table_data_2)
                table_row_1.appendChild(table_data_3)
                table_row_1.appendChild(table_data_4)
                table_row_1.appendChild(table_data_5)
                
                table_body.appendChild(table_row_1)
                console.log(index);
            });

            var table = document.getElementById("table");
            table.appendChild(table_head);
            table.appendChild(table_body);
        }
    var but = document.getElementById("but")
    but.style.height = "30px"
    but.style.width = "100px"
    but.style.backgroundColor = "#256786"
    but.style.color = "white"

    // table_body.style.backgroundColor = "#256786"

    table_head.style.backgroundColor = "#256786"
    table_head.style.color = "white"

