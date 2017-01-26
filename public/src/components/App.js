'use strict';

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
      images: [{
        image: 'https://static1.squarespace.com/static/547f29bfe4b0dc192ed7bdac/54aeb15ce4b018c14f34c7cb/54aeb160e4b018c14f34c7ed/1420734817363/san-franc.jpg',
        title: 'Swimming under the Golden Gate Bridge',
        tourGuide: 'Mark',
        price: '$125',
        time: '2 hours',
        rating: 5.0,
        numberOfReviews: 27,
        id: 1,
        description: 'Loemkjfadhljkadshfkljadshgkljadshgkljadhglkhadgkljhadfklghadflkjsadfdsafasdgsdgadsggh'
      }]
    };

    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ images: window.list });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'main' },
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-3 col-md-offset-3' },
              React.createElement('img', { src: this.state.images[0].image, onClick: this.props.handleRouting })
            ),
            React.createElement(
              'div',
              { className: 'col-md-3' },
              React.createElement(
                'a',
                { href: '/tour' },
                React.createElement('img', { src: this.state.images[0].image }),
                ' '
              )
            ),
            React.createElement(
              'div',
              { className: 'col-md-3' },
              React.createElement(
                'a',
                { href: '/tour' },
                React.createElement('img', { src: this.state.images[0].image }),
                ' '
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-3 col-md-offset-3' },
              React.createElement(
                'a',
                { href: '/tour' },
                React.createElement('img', { src: this.state.images[0].image }),
                ' '
              )
            ),
            React.createElement(
              'div',
              { className: 'col-md-3' },
              React.createElement(
                'a',
                { href: '/tour' },
                React.createElement('img', { src: this.state.images[0].image }),
                ' '
              )
            ),
            React.createElement(
              'div',
              { className: 'col-md-3' },
              React.createElement(
                'a',
                { href: '/tour' },
                React.createElement('img', { src: this.state.images[0].image }),
                ' '
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImltYWdlcyIsImltYWdlIiwidGl0bGUiLCJ0b3VyR3VpZGUiLCJwcmljZSIsInRpbWUiLCJyYXRpbmciLCJudW1iZXJPZlJldmlld3MiLCJpZCIsImRlc2NyaXB0aW9uIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJsaXN0IiwiaGFuZGxlUm91dGluZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUVKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsQ0FBQztBQUNMQyxlQUFRLCtJQURIO0FBRUxDLGVBQU8sdUNBRkY7QUFHTEMsbUJBQVcsTUFITjtBQUlMQyxlQUFPLE1BSkY7QUFLTEMsY0FBTSxTQUxEO0FBTUxDLGdCQUFRLEdBTkg7QUFPTEMseUJBQWlCLEVBUFo7QUFRTEMsWUFBSSxDQVJDO0FBU0xDLHFCQUFhO0FBVFIsT0FBRDtBQURHLEtBQWI7O0FBSGlCO0FBaUJsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUNWLFFBQVFXLE9BQU9DLElBQWhCLEVBQWQ7QUFDRDs7OzZCQUdRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsWUFBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSwwQkFBZjtBQUNDLDJDQUFLLEtBQUssS0FBS2IsS0FBTCxDQUFXQyxNQUFYLENBQWtCLENBQWxCLEVBQXFCQyxLQUEvQixFQUFzQyxTQUFTLEtBQUtILEtBQUwsQ0FBV2UsYUFBMUQ7QUFERCxhQURGO0FBSUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBRyxNQUFLLE9BQVI7QUFBZ0IsNkNBQUssS0FBSyxLQUFLZCxLQUFMLENBQVdDLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJDLEtBQS9CLEdBQWhCO0FBQUE7QUFBQTtBQURGLGFBSkY7QUFPRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLE1BQUssT0FBUjtBQUFnQiw2Q0FBSyxLQUFLLEtBQUtGLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQixDQUFsQixFQUFxQkMsS0FBL0IsR0FBaEI7QUFBQTtBQUFBO0FBREY7QUFQRixXQURGO0FBWUU7QUFBQTtBQUFBLGNBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsMEJBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxPQUFSO0FBQWdCLDZDQUFLLEtBQUssS0FBS0YsS0FBTCxDQUFXQyxNQUFYLENBQWtCLENBQWxCLEVBQXFCQyxLQUEvQixHQUFoQjtBQUFBO0FBQUE7QUFERixhQURGO0FBSUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBRyxNQUFLLE9BQVI7QUFBZ0IsNkNBQUssS0FBSyxLQUFLRixLQUFMLENBQVdDLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJDLEtBQS9CLEdBQWhCO0FBQUE7QUFBQTtBQURGLGFBSkY7QUFPRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLE1BQUssT0FBUjtBQUFnQiw2Q0FBSyxLQUFLLEtBQUtGLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQixDQUFsQixFQUFxQkMsS0FBL0IsR0FBaEI7QUFBQTtBQUFBO0FBREY7QUFQRjtBQVpGO0FBREEsT0FERjtBQThCRDs7OztFQXpEZWEsTUFBTUMsUzs7QUE0RHhCSixPQUFPZCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZXM6IFt7XHJcbiAgICAgICAgICBpbWFnZTogICdodHRwczovL3N0YXRpYzEuc3F1YXJlc3BhY2UuY29tL3N0YXRpYy81NDdmMjliZmU0YjBkYzE5MmVkN2JkYWMvNTRhZWIxNWNlNGIwMThjMTRmMzRjN2NiLzU0YWViMTYwZTRiMDE4YzE0ZjM0YzdlZC8xNDIwNzM0ODE3MzYzL3Nhbi1mcmFuYy5qcGcnLFxyXG4gICAgICAgICAgdGl0bGU6ICdTd2ltbWluZyB1bmRlciB0aGUgR29sZGVuIEdhdGUgQnJpZGdlJyxcclxuICAgICAgICAgIHRvdXJHdWlkZTogJ01hcmsnLFxyXG4gICAgICAgICAgcHJpY2U6ICckMTI1JyxcclxuICAgICAgICAgIHRpbWU6ICcyIGhvdXJzJyxcclxuICAgICAgICAgIHJhdGluZzogNS4wLFxyXG4gICAgICAgICAgbnVtYmVyT2ZSZXZpZXdzOiAyNyxcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdMb2Vta2pmYWRobGprYWRzaGZrbGphZHNoZ2tsamFkc2hna2xqYWRoZ2xraGFkZ2tsamhhZGZrbGdoYWRmbGtqc2FkZmRzYWZhc2Rnc2RnYWRzZ2doJ1xyXG4gIH1dXHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7aW1hZ2VzOiB3aW5kb3cubGlzdH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+IFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wtbWQtb2Zmc2V0LTNcIiA+XHJcbiAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUuaW1hZ2VzWzBdLmltYWdlfSBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZVJvdXRpbmd9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL3RvdXInPjxpbWcgc3JjPXt0aGlzLnN0YXRlLmltYWdlc1swXS5pbWFnZX0gLz4gPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy90b3VyJz48aW1nIHNyYz17dGhpcy5zdGF0ZS5pbWFnZXNbMF0uaW1hZ2V9IC8+IDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1tZC1vZmZzZXQtM1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPScvdG91cic+PGltZyBzcmM9e3RoaXMuc3RhdGUuaW1hZ2VzWzBdLmltYWdlfSAvPiA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL3RvdXInPjxpbWcgc3JjPXt0aGlzLnN0YXRlLmltYWdlc1swXS5pbWFnZX0gLz4gPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy90b3VyJz48aW1nIHNyYz17dGhpcy5zdGF0ZS5pbWFnZXNbMF0uaW1hZ2V9IC8+IDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==