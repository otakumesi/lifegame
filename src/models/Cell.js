import uuidv1 from 'uuid/v1';

export default class Cell {
  constructor() {
    this.id = uuidv1();
    this.isExist = false;
  }

  birth() {
    this.isExist = true;
  }

  death() {
    this.isExist = false;
  }
}
