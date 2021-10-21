const initialState: InitialStateType = {
  login: null,
};

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET-LOGIN': 
      return {
        login: action.payload,
      };
    default:
      return state;    
  }
};

// action
export const setLoginAC = (payload: string) => ({ type: 'SET-LOGIN', payload } as const);

// types
export type InitialStateType = {
  login: string | null,
};

type ActionsType = ReturnType<typeof setLoginAC>;
