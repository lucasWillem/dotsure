import express from "express";
import db from "../models";
import { Responder } from "./helpers/responder";

const router = express.Router();
const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

router.get("/users/page/:page", async (req, res) => {
  let { page = "1" } = req.params;
  page = Number(page);
  const displaysPerPage = 10;
  const offset = (page - 1) * displaysPerPage;

  try {
    const users = await db.User.findAll({ offset, limit: displaysPerPage });
    const total = await db.User.count();
    const pagesCount = Math.ceil(total / displaysPerPage);
    Responder.success({ data: { users, pagesCount } }, res);
  } catch (error) {
    Responder.error({ data: error.message }, res);
  }
});

router.post("/users", async (req, res) => {
  try {
    const user = await db.User.create({ ...req.body });
    Responder.success({ data: { user } }, res);
  } catch (error) {
    Responder.error({ data: error.message }, res);
  }
});

router.delete("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const user = await db.User.findByPk(id);
    user.destroy();
    Responder.success({ data: { id } }, res);
  } catch (error) {
    Responder.error({ data: error.message }, res);
  }
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

module.exports = {
  path: "/api",
  handler: router,
};
