import Blog from "../../schemas/blogSchema.js";

export const writeBlog = async (req, res) => {
  const { title, content, author } = req.body;
  const user = req.user;
  if (!author) {
    res.status(400).json({ message: "Author is required " });
    return;
  }
  try {
    const newBlog = new Blog({ ...req.body, userId: user._id });
    await newBlog.save();
    res.status(201).json({ message: "New blog written successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
