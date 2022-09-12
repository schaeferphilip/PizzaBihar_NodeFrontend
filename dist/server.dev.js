"use strict";

var express = require('express');

var oracledb = require('oracledb');

var cors = require('cors');

oracledb.initOracleClient({
  libDir: "/Library/instantclient_19_8"
});
var app = express();
var PORT = 5000;
app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/pizza', function (req, res) {
  function getDataPizza() {
    var connection, result;
    return regeneratorRuntime.async(function getDataPizza$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(oracledb.getConnection({
              user: 'philip',
              password: 'philip',
              connectString: 'localhost/xepdb1'
            }));

          case 3:
            connection = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(connection.execute('select * from pizza'));

          case 6:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  }

  getDataPizza().then(function (dbRes) {
    res.send(dbRes);
  })["catch"](function (err) {
    res.send(err);
  });
});
app.get('/ingredients', function (req, res) {
  function getDataIngredients() {
    var connection, result;
    return regeneratorRuntime.async(function getDataIngredients$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(oracledb.getConnection({
              user: 'philip',
              password: 'philip',
              connectString: 'localhost/xepdb1'
            }));

          case 3:
            connection = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap(connection.execute('select * from ingredients'));

          case 6:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            return _context2.abrupt("return", _context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 10]]);
  }

  getDataIngredients().then(function (dbRes) {
    res.send(dbRes);
  })["catch"](function (err) {
    res.send(err);
  });
});
app.get('/customer', function (req, res) {
  function getDataCustomer() {
    var connection, result;
    return regeneratorRuntime.async(function getDataCustomer$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(oracledb.getConnection({
              user: 'philip',
              password: 'philip',
              connectString: 'localhost/xepdb1'
            }));

          case 3:
            connection = _context3.sent;
            _context3.next = 6;
            return regeneratorRuntime.awrap(connection.execute('select * from customer'));

          case 6:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            return _context3.abrupt("return", _context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 10]]);
  }

  getDataCustomer().then(function (dbRes) {
    res.send(dbRes);
  })["catch"](function (err) {
    res.send(err);
  });
});
app.get('/orders', function (req, res) {
  function getDataOrders() {
    var connection, result;
    return regeneratorRuntime.async(function getDataOrders$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(oracledb.getConnection({
              user: 'philip',
              password: 'philip',
              connectString: 'localhost/xepdb1'
            }));

          case 3:
            connection = _context4.sent;
            _context4.next = 6;
            return regeneratorRuntime.awrap(connection.execute('select * from orders'));

          case 6:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            return _context4.abrupt("return", _context4.t0);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 10]]);
  }

  getDataOrders().then(function (dbRes) {
    res.send(dbRes);
  })["catch"](function (err) {
    res.send(err);
  });
});
app.get('/orders', function (req, res) {
  function getDataStatus() {
    var connection, result;
    return regeneratorRuntime.async(function getDataStatus$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(oracledb.getConnection({
              user: 'philip',
              password: 'philip',
              connectString: 'localhost/xepdb1'
            }));

          case 3:
            connection = _context5.sent;
            _context5.next = 6;
            return regeneratorRuntime.awrap(connection.execute('select * from status'));

          case 6:
            result = _context5.sent;
            return _context5.abrupt("return", result);

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
            return _context5.abrupt("return", _context5.t0);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 10]]);
  }

  getDataStatus().then(function (dbRes) {
    res.send(dbRes);
  })["catch"](function (err) {
    res.send(err);
  });
});
app.get('/orderspizza', function (req, res) {
  function getDataOrderspizza() {
    var connection, result;
    return regeneratorRuntime.async(function getDataOrderspizza$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(oracledb.getConnection({
              user: 'philip',
              password: 'philip',
              connectString: 'localhost/xepdb1'
            }));

          case 3:
            connection = _context6.sent;
            _context6.next = 6;
            return regeneratorRuntime.awrap(connection.execute('select * from orders_pizza'));

          case 6:
            result = _context6.sent;
            return _context6.abrupt("return", result);

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);
            return _context6.abrupt("return", _context6.t0);

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 10]]);
  }

  getDataOrderspizza().then(function (dbRes) {
    res.send(dbRes);
  })["catch"](function (err) {
    res.send(err);
  });
});
app.get('/pizzaingredients', function (req, res) {
  function getDataPizzaingredients() {
    var connection, result;
    return regeneratorRuntime.async(function getDataPizzaingredients$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return regeneratorRuntime.awrap(oracledb.getConnection({
              user: 'philip',
              password: 'philip',
              connectString: 'localhost/xepdb1'
            }));

          case 3:
            connection = _context7.sent;
            _context7.next = 6;
            return regeneratorRuntime.awrap(connection.execute('select * from pizza_ingredients'));

          case 6:
            result = _context7.sent;
            return _context7.abrupt("return", result);

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);
            console.error(_context7.t0);
            return _context7.abrupt("return", _context7.t0);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 10]]);
  }

  getDataPizzaingredients().then(function (dbRes) {
    res.send(dbRes);
  })["catch"](function (err) {
    res.send(err);
  });
});
app.get('/status', function (req, res) {
  function getDataStatus() {
    var connection, result;
    return regeneratorRuntime.async(function getDataStatus$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return regeneratorRuntime.awrap(oracledb.getConnection({
              user: 'philip',
              password: 'philip',
              connectString: 'localhost/xepdb1'
            }));

          case 3:
            connection = _context8.sent;
            _context8.next = 6;
            return regeneratorRuntime.awrap(connection.execute('select * from status'));

          case 6:
            result = _context8.sent;
            return _context8.abrupt("return", result);

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](0);
            console.error(_context8.t0);
            return _context8.abrupt("return", _context8.t0);

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 10]]);
  }

  getDataStatus().then(function (dbRes) {
    res.send(dbRes);
  })["catch"](function (err) {
    res.send(err);
  });
});
app.listen(PORT, function () {
  console.log('listen to port ${PORT}');
});