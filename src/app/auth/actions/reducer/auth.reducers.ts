import {AuthAction, AuthActionTypes} from '../auth.action';


export interface State {
  error: any;
}

export const initialState: State = {
  error: null
};

export function authReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case AuthActionTypes.LogInFailture:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
