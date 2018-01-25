'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Star = function (_React$Component) {
  (0, _inherits3['default'])(Star, _React$Component);

  function Star() {
    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, Star);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onHover = function (e) {
      var _this$props = _this.props,
          onHover = _this$props.onHover,
          index = _this$props.index;

      onHover(e, index);
    }, _this.onClick = function (e) {
      var _this$props2 = _this.props,
          onClick = _this$props2.onClick,
          index = _this$props2.index;

      onClick(e, index);
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  Star.prototype.getClassName = function getClassName() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        index = _props.index,
        value = _props.value,
        allowHalf = _props.allowHalf,
        focused = _props.focused;

    var starValue = index + 1;
    var className = prefixCls;
    if (value === 0 && index === 0 && focused) {
      className += ' ' + prefixCls + '-focused';
    } else if (allowHalf && value + 0.5 === starValue) {
      className += ' ' + prefixCls + '-half ' + prefixCls + '-active';
      if (focused) {
        className += ' ' + prefixCls + '-focused';
      }
    } else {
      className += starValue <= value ? ' ' + prefixCls + '-full' : ' ' + prefixCls + '-zero';
      if (starValue === value && focused) {
        className += ' ' + prefixCls + '-focused';
      }
    }
    return className;
  };

  Star.prototype.getCharacters = function getCharacters() {
    var _props2 = this.props,
        index = _props2.index,
        value = _props2.value,
        allowHalf = _props2.allowHalf,
        character = _props2.character,
        unselectedCharacter = _props2.unselectedCharacter;

    var starValue = index + 1;
    var characters = { first: character, second: character };
    if (allowHalf && value + 0.5 === starValue) {
      characters.second = unselectedCharacter;
    } else if (starValue > value) {
      characters.first = unselectedCharacter;
      characters.second = unselectedCharacter;
    }
    return characters;
  };

  Star.prototype.render = function render() {
    var onHover = this.onHover,
        onClick = this.onClick;
    var _props3 = this.props,
        disabled = _props3.disabled,
        prefixCls = _props3.prefixCls;

    var characters = this.getCharacters();
    return _react2['default'].createElement(
      'li',
      {
        className: this.getClassName(),
        onClick: disabled ? null : onClick,
        onMouseMove: disabled ? null : onHover
      },
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-first' },
        characters.first
      ),
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-second' },
        characters.second
      )
    );
  };

  return Star;
}(_react2['default'].Component);

Star.propTypes = {
  value: _propTypes2['default'].number,
  index: _propTypes2['default'].number,
  prefixCls: _propTypes2['default'].string,
  allowHalf: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  onHover: _propTypes2['default'].func,
  onClick: _propTypes2['default'].func,
  character: _propTypes2['default'].node,
  unselectedCharacter: _propTypes2['default'].node,
  focused: _propTypes2['default'].bool
};
exports['default'] = Star;
module.exports = exports['default'];