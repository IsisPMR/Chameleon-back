import express, {Router} from "express";
import list from "../controllers/Tutorials/list";
import create from "../controllers/Tutorials/create";
/* import deleteTut from "../controllers/Tutorials/tutdelete";
import update from "../controllers/Tutorials/update"; */
const  router: Router = express.Router();

router.get('/list', list);
router.post('/create', create);
/* router.delete('/delete/:id', deleteTut);
router.update('/update/:id', update); */
/* 
router.post('/create', [todoSchemaValidator], create);
router.delete('/delete/:id', del);
 */

export default router;