const mongoose = require('mongoose');
const DebtReportSchema = require('../schemas/debt_report');
let DebtReport = mongoose.model("DebtReport", DebtReportSchema);

DebtReport.add = async ({
                          customerId,
                          time,
                          firstDebt,
                          lastDebt
                     }) => {

    let newDebtReport = new DebtReport ({
        customerId: customerId,
        time: time,
        firstDebt: firstDebt,
        lastDebt: lastDebt
    });

    await newDebtReport.save();
    return newDebtReport;
};

DebtReport.update = async ({
                             id,
                             customerId,
                             time,
                             firstDebt,
                             lastDebt
                        }) => {
    
    return await DebtReport.updateOne({
        _id: id
    }, {
        customerId: customerId,
        time: time,
        firstDebt: firstDebt,
        lastDebt: lastDebt
    }).exec();
};

DebtReport.delete = async (id) => {
    return await DebtReport.deleteOne({
        _id: id
    }).exec();
};

DebtReport.getById = async (id) => {
    return await DebtReport.findOne({
        _id: id
    }).exec();
}

module.exports = DebtReport;