const Category = require('../models/Category.model')

const createCategory = async (req, res) => {
    try {
        const category = new Category(req.body)
        const response = await category.save();

        return res.json({
            message: ' Category was created succesfully',
            detail: response

        })
        
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const getCategory = async (req, res) =>{
    try {
        const response = await Category.find().populate("category")
        return res.json({
            message: ' category list',
            detail: response
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

module.exports = {
    createCategory,
    getCategory
}