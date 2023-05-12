const Student = require('../models/Student')

exports.index = async (req, res) => {
    let data = await Student.find({})
    if (data) {
        res.json({ title: 'All student', data: data })
    }
}

exports.show = async (req, res) => {
    let data = await Student.findById(req.params.id)
    if (data) {
        res.json({ title: 'Special student', data: data })
    }
}

exports.create = (req, res) => {
    let { firstName, lastName, email, phone, parentsPhone, password} = req.body;

    if (firstName && lastName && email && phone && parentsPhone && password) {
        let student = new Student({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            parentsPhone: req.body.parentsPhone,
            password: req.body.password
        })
        student.save()
            .then(data => {
                if (data) {
                    res.json({ title: 'Student created', data: data })
                }
            })
    }
    else {
        res.json({ title: 'Ma`lumot toliq emas' })
    }
}

exports.remove = async (req, res) => {
    let data = await Student.findByIdAndDelete(req.params.id)
    if (data) {
        res.json({ title: 'Student removed', data:data })
    }
}

exports.update = async (req, res) => {
    let { firstName, lastName, email, phone, parentsPhone, password} = req.body;

    if (firstName && lastName && email && phone && parentsPhone && password) {
        let data = await Student.findByIdAndUpdate(req.params.id, req.body)
        if (data) {
            res.json({ title: 'Student edited', data: data})
        }
    }
    else {
        res.json({ title: 'Ma`lumot yo`q' })
    }
}
