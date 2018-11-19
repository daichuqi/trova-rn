export const initialState = {
  loading: false,
  info: null,
  error: null,
  success: null,
};

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'STATUS_REPLACE': {
      return {
        ...state,
        loading: payload.loading || false,
        info: payload.info || null,
        error: payload.error || null,
        success: payload.success || null,
      };
    }
    default:
      return state;
  }
}
