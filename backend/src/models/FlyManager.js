const AbstractManager = require("./AbstractManager");

class FlyManager extends AbstractManager {
  constructor() {
    super({ table: "fly" });
  }

  insert(fly) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [fly.name]
    );
  }

  update(fly) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [fly.name, fly.id]
    );
  }
}

module.exports = FlyManager;
