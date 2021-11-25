const mongoose = require("mongoose");


const TicketsSchema = {
    event: mongoose.Schema.Types.String,
    reference: mongoose.Schema.Types.String,
    price: mongoose.Schema.Types.Number,
    date: mongoose.Schema.Types.Date,

}

const Tickets = mongoose.model('TicketsModel', TicketsSchema);

//create
const create = async (tickets) => {
    const newTicket = new Tickets(tickets)
    await newTicket.save(tickets, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log('Created Docs : ', docs);
            return docs;
        }
    });
    return newTicket;
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

// const getTicketByDisco = async (disco) => {
//     let query = {disco : disco}
//     return await Tickets.findOne(query)
// }

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
    remove,
}