const express = require("express");
const router = express.Router();

const User = require("../models").user;

// test
router.post("/echo", (req, res) => {
  res.json(req.body);
});

// Get all users- check out by this command - http GET :3000/users
router.get("/users", async (req, res) => {
  try {
    const userList = await User.findAll();
    res.json(userList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error coming" });
  }
});

// Get a specific user by ID - http GET :3000/users/4
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const userFind = await User.findByPk(id);
    if (userFind) {
      res.json(userFind);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create a new user - http -v POST :3000/users/ name="micky" email="micky@ex.com" phone="899943456" password="verynicework"
router.post("/users", async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const userNew = await User.create({ name, email, phone, password });
    res.status(201).json(userNew);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update an existing user- http -v PUT :3000/users/7 name="micky is good" email="mickyisgood@ex.com" phone="899943456" password="verynicework"
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, password } = req.body;

  try {
    const userUpdate = await User.findByPk(id);
    if (userUpdate) {
      userUpdate.name = name;
      userUpdate.email = email;
      userUpdate.phone = phone;
      userUpdate.password = password;
      await userUpdate.save();
      res.json(userUpdate);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error " });
  }
});

// Delete an existing user- http -v DELETE :3000/users/7
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const userDelete = await User.findByPk(id);
    if (userDelete) {
      await userDelete.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
