export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};
