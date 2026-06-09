const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGO_URI || "mongodb+srv://vishal-rana:SJed1UIsxawVEiLj@cluster0.4n8kwsa.mongodb.net/visionaryDB";

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  image: String,
  createdAt: Date
});

const Blog = mongoose.model("Blog", blogSchema);

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongoUri);
    console.log("Connected successfully!");

    const blogs = await Blog.find({}, "title slug image createdAt").limit(10);
    console.log(`Found ${blogs.length} blogs:`);
    blogs.forEach(blog => {
      console.log(`- Title: "${blog.title}"`);
      console.log(`  Slug:  ${blog.slug}`);
      console.log(`  Image: "${blog.image}"`);
      console.log(`  Date:  ${blog.createdAt}`);
      console.log("------------------------");
    });

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected.");
  }
}

run();
