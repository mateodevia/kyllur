"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fs_1 = __importDefault(require("fs"));

var db_1 = __importStar(require("./db"));

fs_1["default"].readFile('../data/stars.csv', 'utf8', function (err, content) {
  if (err) throw Error(err);
  var separator = ';';
  var data = content.trim().split('\n');
  var keys = data[0].toLowerCase().trim().split(separator);
  var stars = data.slice(1).map(function (s) {
    return s.trim().split(separator).reduce(function (o, s, i) {
      o[keys[i]] = isNaN(s) ? s : +s;
      return o;
    }, {
      likes: 0
    });
  });

  (function _callee() {
    return _regenerator["default"].async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _regenerator["default"].awrap(db_1["default"].execQuery(db_1.Functions.createMany, 'stars', stars));

          case 2:
            console.log('Loading done');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  })();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RzL3V0aWxzL2xvYWQuanMiXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIl9faW1wb3J0U3RhciIsInJlc3VsdCIsImsiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImZzXzEiLCJyZXF1aXJlIiwiZGJfMSIsInJlYWRGaWxlIiwiZXJyIiwiY29udGVudCIsIkVycm9yIiwic2VwYXJhdG9yIiwiZGF0YSIsInRyaW0iLCJzcGxpdCIsImtleXMiLCJ0b0xvd2VyQ2FzZSIsInN0YXJzIiwic2xpY2UiLCJtYXAiLCJzIiwicmVkdWNlIiwibyIsImkiLCJpc05hTiIsImxpa2VzIiwiZXhlY1F1ZXJ5IiwiRnVuY3Rpb25zIiwiY3JlYXRlTWFueSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFDQSxJQUFJQSxlQUFlLEdBQUksVUFBUSxTQUFLQSxlQUFkLElBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQSxJQUFJRSxZQUFZLEdBQUksVUFBUSxTQUFLQSxZQUFkLElBQStCLFVBQVVGLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUlHLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUgsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJSSxDQUFULElBQWNKLEdBQWQ7QUFBbUIsUUFBSUssTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxJQUF0QixDQUEyQlAsR0FBM0IsRUFBZ0NJLENBQWhDLENBQUosRUFBd0NELE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLEdBQVlKLEdBQUcsQ0FBQ0ksQ0FBRCxDQUFmO0FBQTNEO0FBQ2pCRCxFQUFBQSxNQUFNLENBQUMsU0FBRCxDQUFOLEdBQW9CSCxHQUFwQjtBQUNBLFNBQU9HLE1BQVA7QUFDSCxDQU5EOztBQU9BRSxNQUFNLENBQUNHLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDOztBQUNBLElBQU1DLElBQUksR0FBR1osZUFBZSxDQUFDYSxPQUFPLENBQUMsSUFBRCxDQUFSLENBQTVCOztBQUNBLElBQU1DLElBQUksR0FBR1gsWUFBWSxDQUFDVSxPQUFPLENBQUMsTUFBRCxDQUFSLENBQXpCOztBQUNBRCxJQUFJLFdBQUosQ0FBYUcsUUFBYixDQUFzQixtQkFBdEIsRUFBMkMsTUFBM0MsRUFBbUQsVUFBQ0MsR0FBRCxFQUFNQyxPQUFOLEVBQWtCO0FBQ2pFLE1BQUlELEdBQUosRUFDSSxNQUFNRSxLQUFLLENBQUNGLEdBQUQsQ0FBWDtBQUNKLE1BQU1HLFNBQVMsR0FBRyxHQUFsQjtBQUNBLE1BQUlDLElBQUksR0FBR0gsT0FBTyxDQUFDSSxJQUFSLEdBQWVDLEtBQWYsQ0FBcUIsSUFBckIsQ0FBWDtBQUNBLE1BQU1DLElBQUksR0FBR0gsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUNSSSxXQURRLEdBRVJILElBRlEsR0FHUkMsS0FIUSxDQUdGSCxTQUhFLENBQWI7QUFJQSxNQUFNTSxLQUFLLEdBQUdMLElBQUksQ0FDYk0sS0FEUyxDQUNILENBREcsRUFFVEMsR0FGUyxDQUVMLFVBQUFDLENBQUMsRUFBSTtBQUNWLFdBQU9BLENBQUMsQ0FDSFAsSUFERSxHQUVGQyxLQUZFLENBRUlILFNBRkosRUFHRlUsTUFIRSxDQUdLLFVBQUNDLENBQUQsRUFBSUYsQ0FBSixFQUFPRyxDQUFQLEVBQWE7QUFDckJELE1BQUFBLENBQUMsQ0FBQ1AsSUFBSSxDQUFDUSxDQUFELENBQUwsQ0FBRCxHQUFhQyxLQUFLLENBQUNKLENBQUQsQ0FBTCxHQUFXQSxDQUFYLEdBQWUsQ0FBQ0EsQ0FBN0I7QUFDQSxhQUFPRSxDQUFQO0FBQ0gsS0FOTSxFQU1KO0FBQUVHLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBTkksQ0FBUDtBQU9ILEdBVmEsQ0FBZDs7QUFXQSxHQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQUNTbkIsSUFBSSxXQUFKLENBQWFvQixTQUFiLENBQXVCcEIsSUFBSSxDQUFDcUIsU0FBTCxDQUFlQyxVQUF0QyxFQUFrRCxPQUFsRCxFQUEyRFgsS0FBM0QsQ0FEVDs7QUFBQTtBQUVHWSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaOztBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQ7QUFJSCxDQXhCRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZnNcIikpO1xyXG5jb25zdCBkYl8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2RiXCIpKTtcclxuZnNfMS5kZWZhdWx0LnJlYWRGaWxlKCcuLi9kYXRhL3N0YXJzLmNzdicsICd1dGY4JywgKGVyciwgY29udGVudCkgPT4ge1xyXG4gICAgaWYgKGVycilcclxuICAgICAgICB0aHJvdyBFcnJvcihlcnIpO1xyXG4gICAgY29uc3Qgc2VwYXJhdG9yID0gJzsnO1xyXG4gICAgbGV0IGRhdGEgPSBjb250ZW50LnRyaW0oKS5zcGxpdCgnXFxuJyk7XHJcbiAgICBjb25zdCBrZXlzID0gZGF0YVswXVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5zcGxpdChzZXBhcmF0b3IpO1xyXG4gICAgY29uc3Qgc3RhcnMgPSBkYXRhXHJcbiAgICAgICAgLnNsaWNlKDEpXHJcbiAgICAgICAgLm1hcChzID0+IHtcclxuICAgICAgICByZXR1cm4gc1xyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC5zcGxpdChzZXBhcmF0b3IpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKG8sIHMsIGkpID0+IHtcclxuICAgICAgICAgICAgb1trZXlzW2ldXSA9IGlzTmFOKHMpID8gcyA6ICtzO1xyXG4gICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICB9LCB7IGxpa2VzOiAwIH0pO1xyXG4gICAgfSk7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGRiXzEuZGVmYXVsdC5leGVjUXVlcnkoZGJfMS5GdW5jdGlvbnMuY3JlYXRlTWFueSwgJ3N0YXJzJywgc3RhcnMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGRvbmUnKTtcclxuICAgIH0pKCk7XHJcbn0pO1xyXG4iXX0=