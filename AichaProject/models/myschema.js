const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,

  },
  Article: {
    type: String,

  },

})



const myProSchema = mongoose.model("DataPro", articleSchema);

module.exports = myProSchema;
