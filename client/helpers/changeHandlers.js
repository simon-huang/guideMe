import store from '../store';

export function handleItemChange(callback, item, event) {
  store.dispatch(callback(item, event.target.value)); 
}
