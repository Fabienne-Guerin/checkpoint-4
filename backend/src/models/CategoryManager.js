const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  static table = "category";

  insert(category) {
    return this.connection.query(
      `insert into ${CategoryManager.table} (label) values (?)`,
      [category.label]
    );
  }

  update(category) {
    return this.connection.query(
      `update ${CategoryManager.table} set label = ? where id = ?`,
      [category.label, category.id]
    );
  }
}

module.exports = CategoryManager;
