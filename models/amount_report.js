const mongoose = require('mongoose');
const AmountReportSchema = require('../schemas/amount_report');
let AmountReport = mongoose.model("AmountReport", AmountReportSchema);

AmountReport.add = async ({
                          bookId,
                          time,
                          firstAmount,
                          lastAmount
                     }) => {

    let newAmountReport = new AmountReport ({
        bookId: bookId,
        time: time,
        firstAmount: firstAmount,
        lastAmount: lastAmount
    });

    await newAmountReport.save();
    return newAmountReport;
};

AmountReport.update = async ({
                             id,
                             bookId,
                             time,
                             firstAmount,
                             lastAmount
                        }) => {
    
    return await AmountReport.updateOne({
        _id: id
    }, {
        bookId: bookId,
        time: time,
        firstAmount: firstAmount,
        lastAmount: lastAmount
    }).exec();
};

AmountReport.delete = async (id) => {
    return await AmountReport.deleteOne({
        _id: id
    }).exec();
};

AmountReport.getById = async (id) => {
    return await AmountReport.findOne({
        _id: id
    }).exec();
}

module.exports = AmountReport;