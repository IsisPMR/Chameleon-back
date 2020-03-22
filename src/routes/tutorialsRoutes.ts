import express, {Router} from "express";
import list from "../controllers/Tutorials/list";
import create from "../controllers/Tutorials/create";
const  router: Router = express.Router();

router.get('/list', list);
router.post('/create', create);
/* 
router.post('/create', [todoSchemaValidator], create);
router.delete('/delete/:id', del);
 */

export default router;