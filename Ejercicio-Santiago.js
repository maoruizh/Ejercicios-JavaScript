
var student1 = {name: "Mao", lastName: "Ruiz"}
var student2 = {name: "Laura", lastName: "Pulgarin"}
var students = [student1, student2];

var school = {
    //properties
    name: "Automation School",
    students: [],
    //metodos
    enrollment: function(p1, p2) {
        //ingresar al colegi0
        //this.students.concat(students)
        this.students.push(p1, p2)
    },
    graduate: function() {
        //Retira del colegio
        this.students.pop()
    },

    findByName: function(name) {
        //buscar en los estudiantes cuyo nombre sea igual a "name"
        return this.students.filter (student => {   // for each students
            if(student.name === name) { // compare "name" student.name
                return true // if true return
            } else {
                return false //ignore it
            }
        })
    }
}

console.log("Antes de las inscripciones", school)

// school.enrollment(student2) //push
// console.log("Despues de inscribir a laura", school)

// school.enrollment(student1) //push
// console.log("Despues de inscribir a Mao", school)

school.enrollment(students[0], students[1])
console.log("Despues de inscribir a los dos estudiantes", school)

console.log("FindByName", school.findByName("Laura"))

school.graduate(student2)
console.log("Despues de egresar a Laura", school)

school.graduate(student1)
console.log("Despues de egresar a Mao", school)




