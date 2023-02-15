import mongoose, {Types} from 'mongoose';
const Schema = mongoose.Schema;

interface User extends mongoose.Document {
    email: string,
    password: string,
    name: string,
    username: string,
    gender: string,
    address?: string,
    description?: string
    friends?: Types.ObjectId
} 

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    friends: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }],
}, {timestamps: true});

const User = mongoose.model<User & mongoose.Schema>('User', userSchema);

export {User}