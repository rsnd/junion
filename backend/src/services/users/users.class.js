const { Service } = require('feathers-sequelize');

exports.Users = class Users extends Service {
  create(data, params) {
    console.log("TCL: Users -> create -> data", data)
    console.log("TCL: Users -> create -> params", params)

    return super.create(data, params);
  }
  
};
