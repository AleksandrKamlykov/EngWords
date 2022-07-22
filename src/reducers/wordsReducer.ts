const initialState = {
    words: []
};


export const wordsReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'SET_WORD':
            return { ...state, words: [...state.words, ...action.payload] };
        default:
            return state;
    }

};