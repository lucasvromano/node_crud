import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { Router } from "express";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };
