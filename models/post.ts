import mongoose, {Types} from 'mongoose';
const Schema = mongoose.Schema;

interface CommentBody {
    body: string,
    username: string,
    createdAt: string
}

interface Likes {
    username: string,
    createdAt: string
}

interface Post extends mongoose.Document {
    body: string,
    username: string,
    createdAt: string,
    comments?: CommentBody[],
    likes?: Likes[],
    user?: Types.ObjectId
} 

const postSchema = new Schema({
    body: String,
    username: String,
    comments: [
      {
        body: String,
        username: String,
        createdAt: String
      }
    ],
    likes: [
      {
        username: String,
        createdAt: String
      }
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
}, {timestamps: true});

const Post = mongoose.model<Post>('Post', postSchema);

export {Post}