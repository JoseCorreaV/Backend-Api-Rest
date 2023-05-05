// programación orientada a objetos POO
// aca va toda la logica de los datos
const { faker } = require('@faker-js/faker')




class usersService {

  constructor() {
    this.users = [];
  }

  generate() {
  }


  //---------------------------------------------------------
  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newProduct);
    return newProduct;
  }
  //------------------------------------------------------
  find() {
    return this.users
  }
  //---------------------------------------------------------
  findOne(id) {
    return this.users.find(item => item.id === id);
  }
  //---------------------------------------------------------
  update(id, changes) {
    // encontrar la posición del con findIndex
    const index = this.users.findIndex(item => item.id === id);
    // si no encuentra el elemento normalmente envia un -1
    if (index === -1) {
      throw new Error('produc not found');
    }
    const produc = this.userss[index];
    // en la posición del objeto aplicar los cambios y dejar los demas elementos
    this.users[index] = {
      ...produc,
      ...changes
    };
    return this.users[index];
  }
  //---------------------------------------------------------
  delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('produc not found');
    }
    // enviar una posición para poder eliminarla .splice
    // y cuantos elementos deseo eliminar a partir de la posición
    this.userss.splice(index, 1);
    // retorna el id eliminado
    return { id };
  }
}

module.exports = usersService;
