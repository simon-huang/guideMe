var userDefaults = {
  username: '',
  lookedForCurrentUserPage: false
};

export function currentUserPageReducer(state = userDefaults, action) {
  switch(action.type) {
    case "SET_CURRENT_USER_PAGE":
      return {
        ...action.currentUserPage,
        lookedForCurrentUserPage: true,
        isGuide: false,
        image: '',
        bio: 'This is my bio. Bios are great. Tours are great too.',
        tours: [
                {
                    "id": 1,
                    "image": 'https://waterworldswim.com/wp-content/uploads/2014/08/maggietidmore11.jpg',
                    "title": 'Swimming under the Golden Gate Bridge',
                    'location': 'Golden Gate Bridge',
                    "rating": 4.1,
                    'date': '2017-01-20'
                  },
                  {
                    "id": 2,
                    "image": "http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/istock_000001168352_small.jpg",
                    "title": "Jump in to Golden Gate Bridge",
                    'location': 'Golden Gate Bridge',
                    "rating": 4.2,
                    'date': '2017-02-20'
                  }]
      }
    default:
      return state;
  }
}
