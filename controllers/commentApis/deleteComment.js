import Comment from "../../schemas/commentSchema.js";
export const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    await Comment.findByIdAndDelete(id);
    res.status(200).json({ message: "Comment Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};
