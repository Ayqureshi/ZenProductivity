import express from "express";
import chatBotRoutes from "./routes/chatBotRoutes.js";
import { PORT } from "./config.js";
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// Option 1: Allow all Origins with default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// );

app.get('/', (request, response) => {
    console.log(request);
    console.log(response.status(234).send("Welcome to Zippy!"));
});


// Routes for everything chatbot related
app.use('/chatbot', chatBotRoutes);

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});


// In case we want to connect to mongoDB
// mongoose
//     .connect(mongoDBURL)
//     .then(() => {
//         console.log("App connected to database");
//         app.listen(PORT, () => {
//             console.log(`App is listening to port: ${PORT}`);
//         });
//     }
//     )
//     .catch((error) => {
//         console.log(error)
//     });