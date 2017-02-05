import React from 'react'
import NavLink from './NavLink'

export default class ListElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const divStyle = {
        backgroundImage: 'url(' + this.props.listElement.image + ')'
    }

    const href = "/Tours/" + this.props.listElement.id;

    return (
      <div className="col-md-4 listElement">
        <NavLink to={href}>
          <div>
            <div className="listImage center-cropped" style={divStyle}>
            </div>
          </div>
          <div className="bottomRow text-center">
            <div className="priceAndTitle">
              <span className="price">
                {this.props.listElement.price}
              </span>
              <span className="title">
                {this.props.listElement.title}
              </span>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}

//<NavLink to="/" onlyActiveOnIndex>Home</NavLink>


// <image src={this.props.listElement.image} className="img-responsive center-block" alt="Responsive image" />  


// class ListElement extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     if (this.props.spoil) {
//       return (
//         <div>
//           <p>Status: {this.props.node.died.length === 0 ? 'alive' : 'died'}</p>
//           <p>Born: {this.props.node.born}</p>
//           {this.props.node.died.length === 0 ? null : <p>Died: {this.props.node.died}</p>}
//         </div>
//       );
//     } else {
//       return null;
//     }

//   }
// }

// React.createClass({
//     getInitialState: function () {
//         nextImg: false,
//     },
//     handleClick: function () {
//         this.setState({ nextImg: !this.state.nextImg })
//     },
//     render: function() {
//         var imgUrl = this.state.nextImg ? this.state.nextImgSrc : this.state.song.imgSrc;
//         var divStyle = {
//             backgroundImage: 'url(' + imgUrl + ')'
//         }

//         return (
//             <li>
//                 <div ref="image-pane" style={divStyle} onClick={this.handleClick} className="player"></div>
//             </li>
//         )
//     }
// });


