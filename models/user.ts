import mongoose, {Types} from 'mongoose';

interface User extends mongoose.Document {
    email: string,
    password: string,
    name: string,
    // posts: Types.ObjectId
}

const userSchema = new mongoose.Schema({
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
    }
}, {timestamps: true});

const User = mongoose.model<User>('User', userSchema);

export {User}