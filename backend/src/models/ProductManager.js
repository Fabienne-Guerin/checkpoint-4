const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  insert(product) {
    return this.connection.query(
      `insert into ${ProductManager.table} (name) values (?)`,
      [product.name]
    );
  }

  update(product) {
    return this.connection.query(
      `update ${ProductManager.table} set name = ? where id = ?`,
      [product.name, product.id]
    );
  }
}

module.exports = ProductManager;
