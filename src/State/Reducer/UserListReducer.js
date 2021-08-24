const initialState = {
  data: [],
};

const UserListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        data: [...state.data, action.message],
      };
    case "DELETE_USER":
      return {
        ...state,
        data: [...state.data.filter((user) => user.id !== action.id)],
      };
    case "UPDATE_USER":
      return {
        ...state,
        data: [
          ...state.data.filter((user) => user.id !== action.id),
          { task: action.message, id: action.id },
        ],
      };
  
    default:
      return state;
  }
};

export default UserListReducer;
