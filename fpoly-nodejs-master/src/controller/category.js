import Category from "../model/category";
import Product from "../model/product"

export const List = async (req, res) => {
    try {
        const data = await Category.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "không có sản phẩm nào"
        })
    }
};

export const Add = async (req, res) => {
    try {

        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
};


export const Read = async (req, res) => {
    try {

        const category = await Category.findOne({ _id: req.params.id }).exec();
        const products = await Product.find({ category: category }).populate('category').select("-category").exec();
        res.json({
            category,
            products
        });
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
};


