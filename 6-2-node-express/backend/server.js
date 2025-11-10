import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

{/*write code for cors*/}


{/*write code to define routes*/}


{/*write code to create server*/}

app.use(cors())

app.get("/api/quote", (req, res) => {
      res.json(getRandomQuote());
    });

app.get("/", (req, res) => {
      res.send("Welcome to the Quote Generator API");
    });
