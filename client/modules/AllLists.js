import React from 'react'
import ListElement from './ListElement'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="space">
        </div>
        <div className="row">
          { window.list.map((listElement)=>
            <ListElement listElement={listElement}/> 
          )}
        </div>
      </div>
    )
  }
})
