import Blog from "../../schemas/blogSchema.js";
export const editBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const reqid = req.user._id;
  try {
    const blog = await Blog.findOne({ _id: id, author: reqid });
    if (!blog) {
      return res.status(400).json({ message: "Blog not found" });
    }
    await Blog.findByIdAndUpdate(
      id,
      { $set: { title: title, content: content } },
      { new: true }
    );
    res.status(200).json({ message: "Blog edited successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
