import mongoose from "mongoose";

const MONGODB_URI: string =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0";
const connectToDatabase = async () => {
  const options: Record<string, any> = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const connection = await mongoose.connect(MONGODB_URI, options);
  return connection;
};
export default connectToDatabase;
