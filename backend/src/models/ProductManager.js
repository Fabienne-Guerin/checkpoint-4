const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  insert(product) {
    return this.connection.query(
      `insert into ${ProductManager.table} (name,description, price, category_id) values (?,?,?,?)`,
      [product.name, product.description, product.price, product.category_id]
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
