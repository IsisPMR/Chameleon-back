import express, {Router} from "express";
import main from "../controllers/Tutorials/main";
import list from "../controllers/Tutorials/list";
import create from "../controllers/Tutorials/create";
import deleteVideo from "../controllers/Tutorials/delete";
/* import update from "../controllers/Tutorials/update"; */
const  router: Router = express.Router();

router.get('/main', main);
router.get('/list/:id', list);
router.post('/create', create);
router.put('/deletevideo/:id', deleteVideo);

/*router.update('/update/:id', update); */
/* 
router.post('/create', [todoSchemaValidator], create);
router.delete('/delete/:id', del);
 */

export default router;