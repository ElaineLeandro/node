/** 
 * Método controller - limite 5 
 * Index - GET para listar vários registros. 
 * show - GET para exibir um registro especifico. 
 * create - POST para criar um registro.
 * update - PUT para atualizar um registro.
 * dalete - DELETE ´para remover um registro.
 * */
const AppError = require('../utils/AppError')

class UserController {
  create(request, response){
    const {name, email, password} = request.body

    if(!name){
      throw new AppError("Nome é Obrigatório!")
    }

    response.status(201).json({name, email, password})
  }

}

module.exports = UserController;