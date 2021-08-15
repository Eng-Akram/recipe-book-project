import { User } from '../user.model';
import { AuthActions } from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState = {
  user: null,
  authError: null,
  boolean: false
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  console.log(state);
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        authError: null,
        user: user,
        boolean: false
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };
    case AuthActions.LOGIN_START:
    case AuthActions.SIGNUP_START:
      return {
        ...state,
        authError: null,
        loading: true
      }
      case AuthActions.AUTHENTICATE_FAIL:
        return {
          ...state,
          user: null,
          authError: action.payload,
          boolean: false
        };
      case AuthenticatorAssertionResponse.CLEAR_ERROR:
        return {
          ...state,
          authError: null
        };
    default:
      return state;
  }
}
