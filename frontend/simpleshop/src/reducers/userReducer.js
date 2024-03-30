
// Action types
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Initial state
const initialState = {
  username: '',
  password: '',
  role: '',
  token: '',
  isLoggedIn : false
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn : true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: '',
        isLoggedIn : false
      };
    case REGISTER_SUCCESS:
      return state;
    default:
      return state;
  }
};

// export const login = (username, password) => {
//     return async dispatch => {
//       try {
//         const response = await axios.post('http://localhost:3000/user/login', { username, password });
//         const { token } = response.data;
//         dispatch({ type: LOGIN_SUCCESS, payload: { token } });
//       } catch (error) {
//         console.error('Login failed:', error);
//         return { type: LOGIN_FAILURE, payload: { error: 'Login failed' } };
//       }
//     };
//   };

// export const register = (username, password, role) => async dispatch => {
//   try {
//     await axios.post('http://localhost:3000/user/register', { username, password, role });
//     dispatch({ type: REGISTER_SUCCESS });
//     return 'Registration successful';
//   } catch (error) {
//     console.error('Registration failed:', error);
//     // Handle registration failure
//     throw new Error('Registration failed');
//   }
// };

export default userReducer;
