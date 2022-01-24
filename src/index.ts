import { URLcontroller } from './controller/url.controller';
import express from 'express';
import { MongoConnection } from 'database/MongoConnection';
//api
const api = express();
api.use(express.json());

//database
const database = new MongoConnection();
database.conect();

//instances
const URLC = new URLcontroller();

//methods
api.get('/hash', URLC.redirect);
api.post('/shorten', URLC.shortner);

//listen
api.listen(5000, () => console.log('Express listening!'));