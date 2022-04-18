import { connect } from 'http2';
import mongoose from 'mongoose';

const connectDB = (url)=>{
    return mongoose.connect(url)

}

export default connectDB