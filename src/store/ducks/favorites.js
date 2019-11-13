/**
 * Types
 */

export const Types = {
  ADD_REQUEST: "favorites/ADD_REQUEST",
  ADD_SUCCESS: "favorites/ADD_SUCCESS",
  ADD_FAILURE: "favorites/ADD_FAILURE"
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.repository]
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    repository
  }),

  addFavoriteSuccess: repository => ({
    type: Types.ADD_SUCCESS,
    repository
  }),

  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    error
  })
};
