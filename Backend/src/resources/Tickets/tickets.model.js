const mongoose = require("mongoose");

const TicketsSchema = mongoose.model({
    event: mongoose.Schema.Types.String,
    reference: mongoose.Schema.Types.String,
    price: mongoose.Schema.Types.String,
    initialDate: mongoose.Schema.Types.Date,
    endindDate: mongoose.Schema.Types.Date
})

const Tickets = mongoose.model('TicketsModel', TicketsSchema);

//create
const create = async (Tickets) => {
    return await Tickets.create(Tickets, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log('Created Docs : ', docs);
            return docs;
        }
    });
};

//get (get one)
const get = async (id) => {
    let query = { _id: id };
    return await Tickets.findOne(query);
};

//get (get all)
const all = async () => {
    return await Tickets.find();
};

//update
const update = async (id, updatedTickets) => {
    let query = { _id: id };
    await Tickets.updateOne(query, updatedTickets, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log('Updated Docs : ', docs);
        }
    });
    const updatedTickets = Tickets.findById(query)
    return updatedTickets
};

//remove
const remove = (id) => {
    let query = { _id: id };
    Tickets.deleteOne(query, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log('Deleted Docs : ', docs);
        }
    });
};

module.exports = {
    create,
    get,
    all,
    update,
    remove
}