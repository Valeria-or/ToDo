require("@babel/register");
const express = require("express");
const mainRoutes = express.Router();

const { User } = require("../../db/models");

mainRoutes.get("/", async (req, res) => {
  try {
    const users = await User.findAll()
    console.log(users)
    res.json(users);
  } catch (error) {
    console.log("eror get users", error)
  }
});

module.exports = mainRoutes;