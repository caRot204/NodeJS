import Category from "../models/category";
import Product from "../models/product";

export const list = async (req, res) => {
    try {
        const data = await Category.find().exec();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm nào"
        })
    }
};

export const add = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}

// export const read = async (req, res) => {
//     try {
//         const category = await Category.findOne({_id: req.params.id}).exec();
//         const products = Product.
//         res.json(product);
//     } catch (error) {
//         res.status(400).json({
//             error: "Không tìm thấy sản phẩm",
//         });
//     }
// };