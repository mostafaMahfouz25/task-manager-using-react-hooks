export const  TaskReducer = (state,action)=>{


    switch (action.type) 
    {
        case 'ADD_TASK':
            state = [...state,action.payload];
        case 'DELETE_TASK':
            state = state.filter(item=>item.id!==action.payload)

        case 'UPDATE_TASK':
            const newState = state.map((item)=>(item.id === action.payload.id ? action.payload : item))
            state = [...newState];
        default:
            return state;
            break;
    }





}