import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

{/*write code for cors*/}


{/*write code to define routes*/}


{/*write code to create server*/}

const app = express();
app.use(cors);
const PORT = 3000;

app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
