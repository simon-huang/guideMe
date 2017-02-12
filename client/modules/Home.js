import React from 'react'
import ListElement from './ListElement'
import Search from './Search'
import { handleItemChange } from '../helpers/changeHandlers'
import { setSearchItem } from '../actions/searchActions'

          // <input type="text" className="form-control" id="homepage-search-input" placeholder="Search tours with local guides" />
// =======
//     <div className="row">
//       <Search 
//         dispatch={props.dispatch}
//         searchItem='tour'
//         search={props.search}
//         name='title'
//         placeholder='Search by tour title...'
//         onChange={handleItemChange.bind(null, setSearchItem)}
//       />
// >>>>>>> 96c80c2a470ad4935eb24b3acbf6da536819bb42
export default props =>  (
  <div>
    <div className="jumbotron vertical-center">
      <div className="container jumboText">
        <h1>Experience worth spreading</h1>
        <p>If you want special experience in San Francisco, find a local here!</p>
        <form method="get" action="search">
        <Search 
          className="form-control"
          dispatch={props.dispatch}
          searchItem='tour'
          search={props.search}
          name='title'
          placeholder='Search by tour title...'
          onChange={handleItemChange.bind(null, setSearchItem)}
        />
        </form>
      </div>
    </div>

    <div className="container add-padding">

      <div className="row add-padding">
        { props.tours.map((listElement) =>
          <ListElement listElement={listElement} key={listElement.id}/>
        )} 
      </div>
    </div>
  </div>
);
