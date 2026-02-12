import mongoose from "mongoose";
import { Schema } from "mongoose";

const ChatSchema = new Schema(
  {
    name: { type: String, required: true },
    messages: [
      {
        role: { type: String, required: true },
        content: { type: String, required: true },
        timestamp: { type: Number, required: true },
      },
    ],
    userId: { type: String, required: true },
  },
  { timestamps: true },
);

const Chat = mongoose.models.Chat || mongoose.model("Chat", UserSchema);

export default Chat;
