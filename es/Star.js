import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

var Star = function (_React$Component) {
  _inherits(Star, _React$Component);

  function Star() {
    var _temp, _this, _ret;

    _classCallCheck(this, Star);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onHover = function (e) {
      var _this$props = _this.props,
          onHover = _this$props.onHover,
          index = _this$props.index;

      onHover(e, index);
    }, _this.onClick = function (e) {
      var _this$props2 = _this.props,
          onClick = _this$props2.onClick,
          index = _this$props2.index;

      onClick(e, index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
    return React.createElement(
      'li',
      {
        className: this.getClassName(),
        onClick: disabled ? null : onClick,
        onMouseMove: disabled ? null : onHover
      },
      React.createElement(
        'div',
        { className: prefixCls + '-first' },
        characters.first
      ),
      React.createElement(
        'div',
        { className: prefixCls + '-second' },
        characters.second
      )
    );
  };

  return Star;
}(React.Component);

Star.propTypes = {
  value: PropTypes.number,
  index: PropTypes.number,
  prefixCls: PropTypes.string,
  allowHalf: PropTypes.bool,
  disabled: PropTypes.bool,
  onHover: PropTypes.func,
  onClick: PropTypes.func,
  character: PropTypes.node,
  unselectedCharacter: PropTypes.node,
  focused: PropTypes.bool
};
export default Star;