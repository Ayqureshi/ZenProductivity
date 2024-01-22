import OpenAI from "openai";
import { OPENAI_API_KEY } from "./config.js";

// Create a OpenAI connection
const secretKey = OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: secretKey,
});

async function main(input) {
  try {
    const assistant = await openai.beta.assistants.create({
      name: "Zippy",
      instructions:
        "You are a productivity guru named Zippy from the company ZenProductivity. Use your knowledge and access to the web to answer productivity related questions. Be thoughtful and kind in your responses!",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4-1106-preview",
    });

    // Log the first greeting
    console.log(
      "\nHello there, I'm Zippy your personal productivity guru. Ask me some questions :) \n"
    );

    // Create a thread
    const thread = await openai.beta.threads.create();

    // Create mechanism here to provide context (Add prev to threads)


    // Use keepAsking as state for keep asking questions
    let keepAsking = true;
    while (keepAsking) {
      const userQuestion = input;

      if (input === "/End") {
        keepAsking = false;
        break
      }

      // Pass in the user question into the existing thread
      await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: userQuestion,
      });

      // Use runs to wait for the assistant response and then retrieve it
      const run = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: assistant.id,
      });

      let runStatus = await openai.beta.threads.runs.retrieve(
        thread.id,
        run.id
      );

      // Polling mechanism to see if runStatus is completed
      // This should be made more robust.
      while (runStatus.status !== "completed") {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      }

      // Get the last assistant message from the messages array
      const messages = await openai.beta.threads.messages.list(thread.id);

      // Find the last message for the current run
      const lastMessageForRun = messages.data
        .filter(
          (message) => message.run_id === run.id && message.role === "assistant"
        )
        .pop();

      console.log("The message you received is \n");
      console.log(lastMessageForRun.content[0].text.value);
      console.log(" \n The message ended above")


      return lastMessageForRun.content[0].text.value;
      // If an assistant message is found, console.log() it
      // if (lastMessageForRun) {
      //   console.log(`${lastMessageForRun.content[0].text.value} \n`);
      // }

      // Then ask if the user wants to ask another question and update keepAsking state
      // const continueAsking = await askQuestion(
      //   "Do you want to ask another question? (yes/no) "
      // );
      // keepAsking = continueAsking.toLowerCase() === "yes";

      // If the keepAsking state is falsy show an ending message
      if (!keepAsking) {
        console.log("Alrighty then, I hope you learned something!\n");
      }
    }
  } catch (error) {
    console.error(error);
  }
}


export default async function sendMessage (input) {
    // Call the main function
    const responseMessage = await main(input);
    return responseMessage;
}
// Call the main function
// main();
