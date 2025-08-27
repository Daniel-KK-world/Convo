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
        const myId = req.user._id;  // myId is the sender id technically me in development.  
        const messages = await Message.find({
            $or: [
                {senderId: myId, receiverId:userToChatId},
                {senderId: userToChatId, receiverId: myId}
            ]
        })
        res.status(200).json(messages)
        .sort({createdAt: 1}); // Sort messages in ascending order based on creation time  
    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({message: "Internal Server error"}); 
    }
}

//Send message controller, function bla bla   
export const sendMessage = async(req, res) => {
    try {
        const {text, image } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // logged in user whcih again would be me in development.

        let imageUrl; 
        if (image){
            // uploade image t ocloudinary and get the url
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const NewMessage = new Message({
            senderId, 
            receiverId,
            text, 
            image: imageUrl, 
        });

        await NewMessage.save()

        //to do ||use some web socket of some sort or idk. 
        
        res.status(201).json(NewMessage);

    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({message: "Internal Server error"});
    }
}