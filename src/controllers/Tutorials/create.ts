import { Request, Response } from "express";
import con from '../../connection/connection';

export default (req: Request, res: Response) => {
    const name = req.body.params.name;
    const linkT = req.body.params.linkT;
    const linkI = req.body.params.linkI;
    const channel = req.body.params.channel;
    const category = req.body.params.category;
    con.query(`INSERT INTO tutorials(tut_title, tut_image, tut_channel, tut_mp4, category_id) values("${name}", "${linkI}", "${channel}", "${linkT}", ${category})`, function (err, result, fields){
        if (err){
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
}