const initialState = {
  findTrain: [],
  isLoading: false,
  error: false
};

const trains = (state = initialState, action) => {
  //   console.log("inreducer", action, state);
  switch (action.type) {
    case "GET_STATION_PENDING":
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case "GET_STATION_FULFILLED":
      // console.log("heyeyyeyy");
      return {
        ...state,
        isLoading: false,
        findTrain: action.payload.data
      };
    case "GET_STATION_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

export default trains;
