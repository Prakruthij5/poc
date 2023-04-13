const initialState = {
    themeColor : "light"
}

const changeTheme = (state = initialState, action) => {
    switch (action.type) {

        case "THEME":
            return {
                ...state,
                themeColor: action.payload,
            };
            default:
                return state;    
        }
    }

export default changeTheme;    