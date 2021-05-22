var newUser = {
  user: 'digitaldisplay',
  pwd: 'digitaldisplay',
  roles: [
    {
      role: 'readWrite',
      db: 'digitaldisplay',
    },
  ],
};

db.dropAllUsers();

db.createUser(newUser);
