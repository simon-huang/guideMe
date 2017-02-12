import elasticsearch from 'elasticsearch';
import axios from 'axios';

var client = new elasticsearch.Client({
  host: 'http://localhost:9200',
  apiVersion: '2.3',
  log: 'trace'

});

client.ping({
  requestTimeout: 30000,
}, err => {
  err ? console.log('cluster is down') : console.log('cluster is fine');
});

export function search(searchInfo) {
  return dispatch => (
    axios.post('http://localhost:9200/tours/_search?', 
      {
        query: {
          match_phrase_prefix: {
            ...searchInfo
          }
        }
      },
      {
        headers: {
          'Content-Type': 'text/plain'
        }
      }
    ).then(resp => {
      var hits = resp.data.hits.hits;
      console.log('here are the greatest hits', hits);
      
      dispatch(setSearchItem('results', hits.map(item => item._source)));
      dispatch(clearSearchItem());
    }).catch(err => {
      console.log('Search error', err);
    })
  );
}
export function clearSearchItem() {
  return {
    type: "CLEAR_SEARCH_ITEM"
  };
}
export function setSearchItem(item, value) {
  var toReturn = {
    type: 'SET_SEARCH_' + item.toUpperCase()
  };

  toReturn[item.toLowerCase()] = value;

  return toReturn;
}
