import Comment from "../../schemas/commentSchema.js";
export const editComment = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const reqid = req.user._id;
  try {
    const comment = await Comment.findOne({ _id: id, userId: reqid });
    if (!comment) {
      res.status(400).json({ message: "Comment does not exits" });
    }
    await Comment.findByIdAndUpdate(id, { text: text }, { new: true });
    res.status(200).json({ message: "Comment edited successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
