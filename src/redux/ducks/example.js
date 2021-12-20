const prefixType = 'example'

export const Types = {
  EXAMPLE_TYPE: `${prefixType}/EXAMPLE_TYPE`
}

export const Actions = {
  exampleType: (payload) => ({ type: Types.EXAMPLE_TYPE, payload })
}

export const Selectors = {
  getExampleState: (state) => state.example
}

const initialState = {
  name: 'example'
}

export default function Example(state = initialState, action) {
  switch (action.type) {
    case Types.EXAMPLE_TYPE: {
      return {
        ...state,
        name: action.payload.name
      }
    }

    default:
      return state
  }
}
