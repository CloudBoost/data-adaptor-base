class NotImplementedError extends Error {
  constructor (...params) {
    super(...params);

    this.name = 'NotImplementedError';
  }
}

class BaseAdaptor {
  static connect () {
    throw new NotImplementedError('connect method not implemented');
  }

  static disconnect () {
    throw new NotImplementedError('disconnect method not implemented');
  }

  static findById () {
    throw new NotImplementedError('findById method not implemented');
  }

  static find () {
    throw new NotImplementedError('find method not implemented');
  }

  static findOne () {
    throw new NotImplementedError('findOne method not implemented');
  }

  static save () {
    throw new NotImplementedError('save method not implemented');
  }

  static count () {
    throw new NotImplementedError('count method not implemented');
  }

  static distinct () {
    throw new NotImplementedError('distinct method not implemented');
  }

  static delete () {
    throw new NotImplementedError('delete method not implemented');
  }

  static drop () {
    throw new NotImplementedError('drop method not implemented');
  }

  static dropDatabase () {
    throw new NotImplementedError('dropDatabase method not implemented');
  }

  static create () {
    throw new NotImplementedError('create method not implemented');
  }

  static addColumn () {
    throw new NotImplementedError('addColumn method not implemented');
  }

  static createIndex () {
    throw new NotImplementedError('createIndex method not implemented');
  }

  static getIndexes () {
    throw new NotImplementedError('getIndexes method not implemented');
  }

  static renameColumn () {
    throw new NotImplementedError('renameColumn method not implemented');
  }

  static dropColumn () {
    throw new NotImplementedError('dropColumn method not implemented');
  }

  static list () {
    throw new NotImplementedError('list method not implemented');
  }
}

module.exports = BaseAdaptor;
