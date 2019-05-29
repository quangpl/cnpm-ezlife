const mongoose = require('mongoose');
const ExampleSchema = require('../schemas/Example');
let Example = mongoose.model("Example", ExampleSchema);
// readme: https://mongoosejs.com/docs/api.html#Model

Chat.addMember = async (MaHoaDon,xyz) => {

    let newEx = new Example({
        MaHoaDon: MaHoaDon
    });

    await newEx.save();
    return newEx;
};

module.exports = Example;
