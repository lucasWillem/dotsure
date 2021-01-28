class Responder {
  static success({ data = null, status = 200 }, res) {
    res.status(status).send({
      status: true,
      data,
    });
  }
  static error({ data = null, status = 500 }, res) {
    res.status(status).send({
      status: false,
      data,
    });
  }
}

export { Responder };
