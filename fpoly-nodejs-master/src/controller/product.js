import Product from "../model/product";

export const List = async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "không có sản phẩm nào"
        })
    }
};



export const Read = async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const populate = req.query["_expand"]
        const product = await Product.findOne(filter).select("-__v").populate(populate).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không có sản phẩm nào"
        })
    }
};


export const Add = async (req, res) => {
    try {

        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
};

export const Remove = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete({ _id: id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không xóa được sản phẩm"
        })
    }
};

export const Update = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thay đổi được sản phẩm"
        })
    }
};
