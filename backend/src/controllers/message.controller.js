import User from "../models/user.model.js";
import Message from "../models/message.model.js";

//This would help me with the sidebar to get all users except the logged in user.  
export const getUsersforSidebar = async(req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersforSidebar controller:", error.message);
        res.status(500).json({message: "Internal Server error"});
    }
}

//Get all messages between logged in user and the user he is chatting with.
export const getMessages = async(req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;  
        const messages = await Message.find({
            $or: [
                {senderId, receiverId: userToChatId},
                {senderId: userToChatId, receiverId: senderId}
            ]
        }).sort({createdAt: 1}); // Sort messages in ascending order based on creation time  
    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({message: "Internal Server error"}); 
    }
}