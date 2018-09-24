const initialState = {
  myPapers: []
}

export function myPapers(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, myPapers: [action.add, ...state.myPapers] }
    default:
      return state
  }
}
