import mongoose from 'mongoose';

const sightSchema = new mongoose.Schema({
  name: String,
  address: String,
  county: String,
  description: String,
  ticket: String,
  website: String,
  imgUrl: String,
});

const Sight = mongoose.model('sight', sightSchema);

export default Sight;

/* 
TEMPLATE FOR POSTMAN
{
  "name": "",
  "address": "",
  "county": "",
  "description": "",
  "ticket": "",
  "website": "",
  "imgUrl": ""
} */
