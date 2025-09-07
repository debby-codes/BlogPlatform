import Blog from "../../schemas/blogSchema.js";
import Comment from "../../schemas/commentSchema.js";
export const writeComment = async (req, res) => {
  const { text, blogId } = req.body;
  const user = req.user;
  try {
    if (!blogId) {
      return res.status(400).json({ message: "Blog id is required" });
    }
    const comment = new Comment({
      ...req.body,
      userId: user._id,
      blogId: req.params.id,
    });
    await comment.save();
    await Blog.findByIdAndUpdate(blogId, { $push: { comments: comment._id } });
    res.status(201).json({ message: "Comment added", comment });
  } catch (error) {
    res.status(500).json(error);
  }
};
