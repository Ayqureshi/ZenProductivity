import express from "express";
import sendMessage from "../ChatBotAPI.js";

const router = express.Router();

// Route for getting sent a message, and then returning an output
router.post('/', async (request, response) => {
    try {
        console.log("Starting logic for post request");
        if (!request.body.message) {
            return response.status(400).send( {
                message : 'Send a message that is not empty',
            })
        }

        // Chatbot logic now that the user message is not empty
        const responseMessage = await sendMessage(request.body.message);

        if (!responseMessage) {
            return response.status(500).send({ message : "GPT returned no message"});
        }

        return response.status(200).send(responseMessage);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message + "Wow is the problem" });
    }
});

export default router;