const express = require("express");
const roles = require("../controllers/roles");
const rolesRouter = express.Router();
rolesRouter.post("/create", roles.createRole);
rolesRouter.delete("/delete/:id", roles.deleteRole);

module.exports = rolesRouter;


// testing Obj
/* 
{
    "role":"admin",
    "permissions":["viewDashbaord","deleteUser","viewPlan" , "editPlan"]
}
 */