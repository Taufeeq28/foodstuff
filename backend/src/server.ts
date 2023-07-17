

import path from 'path';
import express from "express";
import cors from "cors";
import { sample_foods, sample_tags } from './data';



const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));



app.get('/api/foods', (req, res) => {
    res.send(sample_foods);
})
app.get('/api/foods/search/:serachTerm', (req, res) => {
    const searchTerm=req.params.serachTerm;
    const foods=sample_foods
    .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(foods);
})
app.get('/api/foods/tags', (req, res) => {
    res.send(sample_tags);
})
app.get('/api/foods/tag/:tagName', (req, res) => {
    const tagName = req.params.tagName;
    const foods = sample_foods.filter(food => food.tags.includes(tagName));
    res.send(foods);
  });

const port =  5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})