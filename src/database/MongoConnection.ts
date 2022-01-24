import { config } from 'config/constants.config';
import mongoose from 'mongoose';

export class MongoConnection{

    public async conect(): Promise<void>{
        try{
            await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true});
        }catch(err){
            console.error(err.message);
            process.exit(1);
        }
    }
}