import React from 'react'
import ListElement from './ListElement'
import Search from './Search'
import { handleItemChange } from '../helpers/changeHandlers'
import { setSearchItem } from '../actions/searchActions'

export default props =>  (
  <div>
    <div className="jumbotron">
      <div className="container jumboText">
        <h1>Experience worth spreading</h1>
        <p>If you want special experience in San Francisco, find a local here!</p>
      </div>
    </div>
    <div className="space" />

    <div className="row">
      <Search 
        search='tour'
        name='title'
        placeholder='Search by tour title...'
        titleSearch={props.search.title}
        onChange={handleItemChange.bind(null, setSearchItem)}
      />
    </div>
  </div>
);
