import mongoose from 'mongoose';

const sightSchema = new mongoose.Schema({
  name: String,
  address: String,
  county: String,
  price: Number,
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
  "price": ,
  "website": "",
  "imgUrl": ""
} */
