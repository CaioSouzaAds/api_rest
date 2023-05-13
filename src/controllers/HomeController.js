class HomeController {
  // eslint-disable-next-line class-methods-use-this
  async index(req, res) {
    res.json('HomeController');
  }
}

export default new HomeController();
