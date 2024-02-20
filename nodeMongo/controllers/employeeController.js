const Employee = require('../models/Employee')

const createEmployee = async (req, res) => {
    try {
        const { name, email, phone, city } = req.body

        const employee = new Employee({
            name,
            email,
            phone,
            city
        })

        await employee.save()
        res.send(employee)

    } catch (error) {
        console.log(error)
        res.send(500).json({ message: 'server error' })
    }

}

const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).json(employee)
    } catch (error) {
        res.status(500).json({ message: "Internal Server error" })
    }
}


const singleEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" })
        }

        res.status(200).json(employee)
    } catch (error) {

        res.status(500).json({ message: "Internal server error" })
    }

}

const updateEmployee = async (req, res) => {
    try {
        const { name, email, phone, city } = req.body

        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            { name, email, city, phone }
        )

        if (!employee) {
            res.status(404).json({ message: 'Employee not found' })
        }

        res.status(200).json(employee)

    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const deleteEmployee = async (req, res) => {
    try {

        const employee = await Employee.findByIdAndDelete(req.params.id)
        res.status(200).json(employee)

    } catch (error) {
        res.status(400).json({ message: "Internal Server Error" })
    }
}

module.exports = { 
    createEmployee, 
    getEmployee, 
    singleEmployee, 
    updateEmployee,
    deleteEmployee
 }