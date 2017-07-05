import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name:{
        type:String,
    },
    tele: {
        type:Number,
        required: [true, 'tele is required'],
    },
    token:{
        type:String,
    }
});

export const  UserModel = mongoose.model('users', UserSchema);