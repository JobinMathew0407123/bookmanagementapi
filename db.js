import mongoose from "mongoose";

export const connectDB = async () => {
  try {

    const connection = await mongoose.connect(

      `mongodb+srv://jobinmathew0407:mm86iqIxtpuTEStf@cluster0.xuhguhe.mongodb.net/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
  }
};
