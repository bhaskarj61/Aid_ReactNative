export function login(name = 'default') {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN',
      payload: { res: name },
    });
  };
}
