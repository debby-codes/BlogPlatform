import Blog from "../../schemas/blogSchema.js";

export const readBlog = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "userName");
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
  }
};
