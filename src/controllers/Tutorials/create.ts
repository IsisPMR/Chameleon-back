import { Request, Response } from "express";
import con from '../../connection/connection';

export default (req: Request, res: Response) => {
    const name = req.body.params.name;
    const link = req.body.params.link;
    const category = req.body.params.category;
    con.query(`INSERT INTO tutorials(tut_title, tut_mp4, category_id) values("${name}", "${link}", ${category})`, function (err, result, fields){
        if (err){
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
   /*  console.log(req.body.params); */
}