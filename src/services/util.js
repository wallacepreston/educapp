const eager = (eagerStatement) => {
  return (context) => {
    context.params.query = {
      $eager: eagerStatement
    };
  };
};

module.exports = {
  eager
};
