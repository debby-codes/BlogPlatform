import Comment from "../../schemas/commentSchema.js";
export const readComment = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};
