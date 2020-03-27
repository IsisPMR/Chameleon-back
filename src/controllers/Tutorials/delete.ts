import { Request, Response } from "express";
import con from '../../connection/connection';
export default (req: Request, res: Response) => {
    console.log(req.params.id);
    const id = req.params.id;
    console.log(req.body);
    const category_id= req.body.category_id;
    con.query(`UPDATE tutorials SET tut_available=${0} WHERE tut_id=${id}`, function (err, result){
        if (err){
            throw err;
        } else {
            con.query(`SELECT * FROM tutorials WHERE category_id=${category_id} && tut_available=1`, function (err, result, fields){
                if (err){
                    throw err;
                } else {
                    res.status(200).send(result);
                }
            });
        }
    });
}
