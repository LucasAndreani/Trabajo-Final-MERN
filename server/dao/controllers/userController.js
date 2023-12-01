const User = require("../models/userModel");
const bcrypt = require('bcrypt');

const createAdminUser = process.env.ADMIN_PASSWORD === '1234';

const createUser = async (user, adminPassword) => {
  const { nombre, email, contrasena, role } = user;
  const hashedPassword = await bcrypt.hash(contrasena, 10);
  let userRole = role || 'user';

  if (createAdminUser && adminPassword && adminPassword !== process.env.ADMIN_PASSWORD) {
    throw new Error('Incorrect admin password');
  }

  if (createAdminUser || (adminPassword && adminPassword === process.env.ADMIN_PASSWORD)) {
    userRole = 'admin';
  }

  const newUser = new User({
    nombre,
    email,
    contrasena: hashedPassword,
    role: userRole,
  });

  return await newUser.save();
};

const getUser = async () => {};

const verifyExistUser = async () => {};

module.exports = { getUser, verifyExistUser, createUser };




