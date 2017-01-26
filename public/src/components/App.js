"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      images: props.images,
      url: '/'
    };

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "main" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-3 col-md-offset-3" },
              React.createElement(
                "a",
                { href: "/tour" },
                React.createElement("img", { src: this.state.images[0].image }),
                " "
              )
            ),
            React.createElement(
              "div",
              { className: "col-md-3" },
              React.createElement(
                "a",
                { href: "/tour" },
                React.createElement("img", { src: this.state.images[0].image }),
                " "
              )
            ),
            React.createElement(
              "div",
              { className: "col-md-3" },
              React.createElement(
                "a",
                { href: "/tour" },
                React.createElement("img", { src: this.state.images[0].image }),
                " "
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-3 col-md-offset-3" },
              React.createElement(
                "a",
                { href: "/tour" },
                React.createElement("img", { src: this.state.images[0].image }),
                " "
              )
            ),
            React.createElement(
              "div",
              { className: "col-md-3" },
              React.createElement(
                "a",
                { href: "/tour" },
                React.createElement("img", { src: this.state.images[0].image }),
                " "
              )
            ),
            React.createElement(
              "div",
              { className: "col-md-3" },
              React.createElement(
                "a",
                { href: "/tour" },
                React.createElement("img", { src: this.state.images[0].image }),
                " "
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImltYWdlcyIsInVybCIsImltYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBRUosZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUUYsTUFBTUUsTUFESDtBQUVYQyxXQUFLO0FBRk0sS0FBYjs7QUFIaUI7QUFRbEI7Ozs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxZQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLE1BQUssT0FBUjtBQUFnQiw2Q0FBSyxLQUFLLEtBQUtGLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQixDQUFsQixFQUFxQkUsS0FBL0IsR0FBaEI7QUFBQTtBQUFBO0FBREYsYUFERjtBQUlFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxPQUFSO0FBQWdCLDZDQUFLLEtBQUssS0FBS0gsS0FBTCxDQUFXQyxNQUFYLENBQWtCLENBQWxCLEVBQXFCRSxLQUEvQixHQUFoQjtBQUFBO0FBQUE7QUFERixhQUpGO0FBT0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBRyxNQUFLLE9BQVI7QUFBZ0IsNkNBQUssS0FBSyxLQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJFLEtBQS9CLEdBQWhCO0FBQUE7QUFBQTtBQURGO0FBUEYsV0FERjtBQVlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLE1BQUssT0FBUjtBQUFnQiw2Q0FBSyxLQUFLLEtBQUtILEtBQUwsQ0FBV0MsTUFBWCxDQUFrQixDQUFsQixFQUFxQkUsS0FBL0IsR0FBaEI7QUFBQTtBQUFBO0FBREYsYUFERjtBQUlFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxPQUFSO0FBQWdCLDZDQUFLLEtBQUssS0FBS0gsS0FBTCxDQUFXQyxNQUFYLENBQWtCLENBQWxCLEVBQXFCRSxLQUEvQixHQUFoQjtBQUFBO0FBQUE7QUFERixhQUpGO0FBT0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBRyxNQUFLLE9BQVI7QUFBZ0IsNkNBQUssS0FBSyxLQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJFLEtBQS9CLEdBQWhCO0FBQUE7QUFBQTtBQURGO0FBUEY7QUFaRjtBQURBLE9BREY7QUE4QkQ7Ozs7RUE1Q2VDLE1BQU1DLFM7O0FBK0N4QkMsT0FBT1IsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VzOiBwcm9wcy5pbWFnZXMsXHJcbiAgICAgIHVybDogJy8nXHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PiBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLW1kLW9mZnNldC0zXCIgPlxyXG4gICAgICAgICAgICA8YSBocmVmPScvdG91cic+PGltZyBzcmM9e3RoaXMuc3RhdGUuaW1hZ2VzWzBdLmltYWdlfSAvPiA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL3RvdXInPjxpbWcgc3JjPXt0aGlzLnN0YXRlLmltYWdlc1swXS5pbWFnZX0gLz4gPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy90b3VyJz48aW1nIHNyYz17dGhpcy5zdGF0ZS5pbWFnZXNbMF0uaW1hZ2V9IC8+IDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1tZC1vZmZzZXQtM1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPScvdG91cic+PGltZyBzcmM9e3RoaXMuc3RhdGUuaW1hZ2VzWzBdLmltYWdlfSAvPiA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL3RvdXInPjxpbWcgc3JjPXt0aGlzLnN0YXRlLmltYWdlc1swXS5pbWFnZX0gLz4gPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy90b3VyJz48aW1nIHNyYz17dGhpcy5zdGF0ZS5pbWFnZXNbMF0uaW1hZ2V9IC8+IDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==