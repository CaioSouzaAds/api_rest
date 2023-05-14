class FotoController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    res.json(req.file);
  }
}

export default new FotoController();
