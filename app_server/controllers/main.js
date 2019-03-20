module.exports.index = function(req, res, next) {
    res.render('index', { title: ' index'});
  }

  module.exports.leyendas = function(req, res, next) {
    res.render('leyendas', { title: 'leyendas' });
  }

