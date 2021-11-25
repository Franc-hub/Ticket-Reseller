const mongoose = require("mongoose");

const transactionsModelSchema = mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TicketsModel"
    }
});



// Compile model from schema
const Transactions = mongoose.model("TransactionsModel", transactionsModelSchema);

const create = async (transactions) => {

    const newTransactions = new Transactions(transactions);
    await newTransactions.save(transactions, function (err, docs) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Created Docs : ", docs);
            return docs;
        }
    });
    return newTransactions;
};

const get = async (id) => {
    let query = { _id: id };
    return await Transactions.findOne(query);
};

const remove = (id) => {
    let query = { _id: id };
    Transactions.deleteOne(query, function (err, docs) {
        if (err) {
            console.log(`error al realizar la petición ${err}`);
        } else {
            console.log("Deleted Doc : ", docs);
        }
    });
};



const getAll = async () => {
    return await Transactions.find();
};


module.exports = {
    create,
    remove,
    get,
    getAll
};
