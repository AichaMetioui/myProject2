const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
userName: {
    type: String,

  },
LastName: {
    type: String,

  },
  EmailAdress: {
    type: String,

  },
Password: {
    type: String,

  },

})



const SecondSchema = mongoose.model("secondD", articleSchema);

module.exports = SecondSchema;
