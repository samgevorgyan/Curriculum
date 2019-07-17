import mongoose, {Schema} from "mongoose";
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

const pp = mongoose.model('User', UserSchema);
export default pp
