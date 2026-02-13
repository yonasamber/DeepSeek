import mongoose from "mongoose";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "@/config/db";

export async function POST(req) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "user not authenticated",
      });
    }

    //prepare chat to be saved in the database

    const chatData = {
      userId,
      messages: [],
      name: "New Chat",
    };
    //connect to database and create new chat
    await connectDB();
    await Chat.create(chatData);

    return NextResponse.json({ success: true, message: "Chat Created" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
