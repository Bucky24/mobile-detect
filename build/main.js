"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var constants = {
  Sizes: {
    Desktop: Desktop
  }
};

var MobileDetect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileDetect, _React$Component);

  function MobileDetect() {
    var _this;

    _classCallCheck(this, MobileDetect);

    _this.handleUpdate = _this.handleUpdate.bind(_assertThisInitialized(_this));
    return _possibleConstructorReturn(_this);
  }

  _createClass(MobileDetect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleUpdate);
      this.handleUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleUpdate);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this.setState({
        width: window.innerWidth
      });
    }
  }, {
    key: "getSize",
    value: function getSize(width) {
      return constants.Sizes.Desktop;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var injectedChildren = _react.default.Children.map(children, function (child) {
        return _react.default.cloneElement(child, {
          width: _this2.state.width,
          size: _this2.getSize(_this2.state.width)
        });
      });

      return _react.default.createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          position: 'relative'
        }
      }, injectedChildren);
    }
  }]);

  return MobileDetect;
}(_react.default.Component);

;
MobileDetect.Constants = constants;
var _default = MobileDetect;
exports.default = _default;