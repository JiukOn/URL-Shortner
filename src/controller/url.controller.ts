import { config } from 'config/constants.config';
import { URLModel } from 'database/model/url';
import { Request, Response } from 'express';
import shortID from 'shortid';

export class URLcontroller{
    public async shortner(req:Request, res:Response):Promise<void> {
        const { originURL } = req.body;
        const url = URLModel.findOne({ originURL });
        if(url){
            res.json(url);
            return;
        }
        const hash = shortID.generate();
        const shortURL = `${config.API_URL}/${hash}`;

        const newURL = await URLModel.create({ hash, shortURL, originURL});

        res.json(newURL);
    }

    public async redirect(req:Request, res:Response):Promise<void> {
        const { hash } = req.params;
        const url = {
            originURL: 'https://github.com/JiukOn/URL',
            hash: '',
            shortURL: ''
        }
    }
};