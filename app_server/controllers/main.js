module.exports.index = function(req, res, next) {
    res.render('index', { title: ' index'});
  }

  module.exports.leyendas = function(req, res, next) {
    res.render('leyendas', { title: 'leyendas' });
  }


  module.exports.almeida = function(req, res, next) {
    res.render('almeida', { title: 'almeida' });
  }

  module.exports.C1028 = function(req, res, next) {
    res.render('C1028', { title: 'C1028' });
  }