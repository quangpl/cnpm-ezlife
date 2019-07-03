const mongoose = require('mongoose');
const SalarySchema = require('../schemas/Salary');
let Salary = mongoose.model("Salary", SalarySchema);

Salary.add = async ({
                      employeeId,
                      basicSalary,
                      bonus,
                      tax,
                      insurance
                  }) => {

    let newSalary = new Salary({
        employeeId: employeeId,
        basicSalary: basicSalary,
        bonus: bonus,
        tax: tax,
        insurance: insurance
    });

    await newSalary.save();
    return newSalary;
};

Salary.update = async ({
                         id,
                         employeeId,
                         basicSalary,
                         bonus,
                         tax,
                         insurance
                     }) => {

    return await Salary.updateOne({
        _id: id
    }, {
        employeeId: employeeId,
        basicSalary: basicSalary,
        bonus: bonus,
        tax: tax,
        insurance: insurance
    }).exec();
};

Salary.delete = async (id) => {
    return await Salary.deleteOne({
        _id: id
    }).exec();
};

Salary.getById = async (employeeId) => {
    let salary = await Salary.findOne({
        employeeId: employeeId
    }).exec();
    let basic = salary.basicSalary;
    let bonus = salary.bonus;
    let tax = salary.tax;
    let insurance = salary.insurance;
    let sumSalary = basic + bonus - tax - insurance;
    return sumSalary;
};

Salary.getAll = async () => {
    return await Salary.find({}).exec();
};

module.exports = Salary;