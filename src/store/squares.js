import flatten from "lodash/flatten";

export class Matrix {
  constructor(row = 3, columns = 3, items = null) {
    this.row = row;
    this.columns = columns;
    this.items = items || this.gen();
  }

  gen() {
    return this.range(this.row, () => this.range(this.columns, null));
  }

  range(length, value) {
    let items = [];
    for (let i = 0; i < length; i++) {
      let item = typeof value == "function" ? value() : value;
      items.push(item);
    }
    return items;
  }

  set(row, column, value) {
    let commited = false;
    if (!this.items[row][column]) {
      this.items[row][column] = value;
      commited = true;
    }
    return commited;
  }

  clone() {
    return new Matrix(this.row, this.columns, this.items);
  }

  /**
   * @returns {string[]}
   */
  flat() {
    return flatten(this.items);
  }
}
