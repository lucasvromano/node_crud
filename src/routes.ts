import { UpdateUserController } from './controllers/UpdateUserController';
import { GetAllUsersController } from './controllers/GetAllUsersController';
import { DeletePermissionController } from "./controllers/DeletePermissionController";
import { UpdatePermissionController } from "./controllers/UpdatePermissionController";
import { GetAllPermissionsController } from "./controllers/GetAllPermissionsController";
import { CreatePermissionController } from "./controllers/CreatePermissionController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { Router } from "express";
import { DeleteUserController } from './controllers/DeleteUserController';

const routes = Router();

// categories
routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

// videos
routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

//users
routes.post("/users", new CreateUserController().handle);
routes.get("/users", new GetAllUsersController().handle);
routes.put("/users/:id", new UpdateUserController().handle);
routes.delete("/users/:id", new DeleteUserController().handle);

// permissions
routes.post("/permissions", new CreatePermissionController().handle);
routes.get("/permissions", new GetAllPermissionsController().handle);
routes.put("/permissions/:id", new UpdatePermissionController().handle);
routes.delete("/permissions/:id", new DeletePermissionController().handle);

export { routes };
