import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController";
import { GetAllCustomersController } from "./controllers/GetAllCustomersController";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { DeleteEmployeeController } from "./controllers/DeleteEmployeeController";
import { UpdateEmployeeController } from "./controllers/UpdateEmployeeService";
import { GetAllEmployeesController } from "./controllers/GetAllEmployeesController";
import { GetAllWorkingHoursController } from "./controllers/GetAllWorkingHoursController";
import { UpdateWorkingHourController } from "./controllers/UpdateWorkingHourController";
import { CreateWorkingHourController } from "./controllers/CreateWorkingHourController";
import { CreateEmployeeController } from "./controllers/CreateEmployeeController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
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
import { DeleteUserController } from "./controllers/DeleteUserController";
import { DeleteWorkingHourController } from "./controllers/DeleteWorkingHourController";

import { Router } from "express";

const routes = Router();

// categories
routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

// videos
routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

// permissions
routes.post("/permissions", new CreatePermissionController().handle);
routes.get("/permissions", new GetAllPermissionsController().handle);
routes.put("/permissions/:id", new UpdatePermissionController().handle);
routes.delete("/permissions/:id", new DeletePermissionController().handle);

//users
routes.post("/users", new CreateUserController().handle);
routes.get("/users", new GetAllUsersController().handle);
routes.put("/users/:id", new UpdateUserController().handle);
routes.delete("/users/:id", new DeleteUserController().handle);

// working_hours
routes.post("/working_hours", new CreateWorkingHourController().handle);
routes.get("/working_hours", new GetAllWorkingHoursController().handle);
routes.put("/working_hours/:id", new UpdateWorkingHourController().handle);
routes.delete("/working_hours/:id", new DeleteWorkingHourController().handle);

// employees
routes.post("/employees", new CreateEmployeeController().handle);
routes.get("/employees", new GetAllEmployeesController().handle);
routes.put("/employees/:id", new UpdateEmployeeController().handle);
routes.delete("/employees/:id", new DeleteEmployeeController().handle);

// customers
routes.post("/customers", new CreateCustomerController().handle);
routes.get("/customers", new GetAllCustomersController().handle);
routes.put("/customers/:id", new UpdateCustomerController().handle);
routes.delete("/customers/:id", new DeleteCustomerController().handle);

export { routes };
