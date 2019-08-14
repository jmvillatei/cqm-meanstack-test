const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    first_name: {
        type: String,
        require: true
    },
    laste_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    editable: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('user', UserSchema);