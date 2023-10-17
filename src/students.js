let students = ["Michael", "Debbie", "Tre", "Joelle", "Benson" ]

export function getAllStudents(req, res){
    res.send(students)
}

export function addStudent(req, res){
    const newStudents = req.body
    students.push(newStudents.name)
    res.status(201).send({ message: "student added.", succes: true})
}

