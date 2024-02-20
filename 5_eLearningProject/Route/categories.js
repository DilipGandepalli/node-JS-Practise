const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose')
const router = express.Router()

const CategorySchema = {
    name: { type: String, required: true, minlength: 4, maxlength: 30 }
}

const Category = mongoose.model('Catgory', CategorySchema);

router.get('/api/categories', async (req, res) => {
    let categories = await Category.find()
    res.send(categories)
})

router.post('/api/categories', async (req, res) => {

    const { error } = validateData(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const newCourse = new Category({
        name: req.body.name

    })
    await newCourse.save()

    res.send(newCourse);
})

router.put('/api/categories/:id', async (req, res) => {

    const { error } = validateData(req.body)
    if (error) res.status(400).send(error.details[0].message)

    const category = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: this.true });
    if (!category) return res.status(404).send("This category with the given ID is not found");

    res.send(category)
})

router.delete('/api/categories/:id', async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)

    if (!category) return res.status(404).send("This category with the given ID is not found");

    res.send(category)
})

router.get('/api/categories/:id', async (req, res) => {
    const category = await Category.findById(req.params.id)

    if (!category) return res.status(404).send('This Category with the given is not found')

    res.send(category)
})

function validateData(category) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(category, schema)

}

module.exports = router