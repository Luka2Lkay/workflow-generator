const express = require("express");
const { analyzeWorkflow } = require("../controller/workflow_controller");

const workflowRouter = (app) => {
  const router = express.Router();

  router.post("/analyze", analyzeWorkflow);

  app.use("/api", router);
};

module.exports={workflowRouter}