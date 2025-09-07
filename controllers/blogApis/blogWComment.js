import Blog from "../../schemas/blogSchema.js";
export const getBlogWithComments = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findOne({ _id: id })
      .populate("comments", "text")
      .populate("author", "userName");
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
};
