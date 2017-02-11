import elasticsearch from 'elasticsearch';

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.ping({
  requestTimeout: 30000,
}, err => {
  err ? console.log('cluster is down') : console.log('cluster is fine');
});

export function search() {

}

export function setSearchItem(item, value) {
  var toReturn = {
    type: 'SET_SEARCH_' + item.toUpperCase()
  };

  toReturn[item.toLowerCase()] = value;

  return toReturn;
}
