import Aluno from '../models/Aluno';

class HomeController {
  // eslint-disable-next-line class-methods-use-this
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Kaique',
      sobrenome: 'Rinaldi',
      email: 'kaique@gmail.com',
      idade: 13,
      peso: 20,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
