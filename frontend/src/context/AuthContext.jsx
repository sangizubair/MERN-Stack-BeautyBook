import { createContext, useReducer, useEffect } from "react";

const parseFromLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue !== undefined ? JSON.parse(storedValue) : null;
};

const initialState = {
  user: parseFromLocalStorage('user'),
  salon: parseFromLocalStorage('salon'),
  role: localStorage.getItem('role') || null,
  token: localStorage.getItem('token') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        salon: null,
        role: null,
        token: null,
      };

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload.user,
        salon: action.payload.salon,
        role: action.payload.user?.role || action.payload.salon?.role,
        token: action.payload.token,
      };

    case 'LOGOUT':
      // Clear local storage data on logout
      // localStorage.removeItem('user');
      // localStorage.removeItem('salon');
      // localStorage.removeItem('role');
      // localStorage.removeItem('token');
      return {
        user: null,
        salon: null,
        role: null,
        token: null,
      };

    default:
      return state;
  }
};

export const AuthContPro = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const updateUser = state.user !== undefined ? JSON.stringify(state.user) : null;
    const updateSalon = state.salon !== undefined ? JSON.stringify(state.salon) : null;

    localStorage.setItem('user', updateUser);
    localStorage.setItem('salon', updateSalon);
    localStorage.setItem('role', state.role);
    localStorage.setItem('token', state.token);
  }, [state]);

  return (
    <authContext.Provider value={{ user: state.user, salon: state.salon, token: state.token, role: state.role, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
