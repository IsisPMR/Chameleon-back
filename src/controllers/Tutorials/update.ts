/* import { Request, Response } from "express";
import con from '../../connection/connection';

export default (req: Request, res: Response) => {
    const name = req.body.params.name;
    const linkImg = req.body.params.linkImg;
    const channel = req.body.params.channel;
    const link = req.body.params.link;
    const category = req.body.params.category;
    con.query(`UPDATE chameleon.tutorials SET tut_mp4 = "https://www.youtube.com/watch?v=izwmJta-_-g" WHERE (tut_id = 60);`, function (err, result, fields){
        if (err){
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
} */