import mongoose from 'mongoose';

const AccountsSchema = mongoose.Schema({
    account: {
        type:String,
        required: [true, 'Name is required'],
    },
    tele:{
        type:Number,
        required: [true, 'User phone number required'],
    },
});

export const  AccountsModel = mongoose.model('accounts', AccountsSchema);
