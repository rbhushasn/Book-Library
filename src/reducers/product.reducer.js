export default function product(state={products:[]},action){
 

    switch (action.type){
        
            case 'BOOK_FETCH':
            return {...state,products:action.payload};


            case 'ADD_BOOK':
            return {...state,products:action.payload};

            case 'UPDATE_BOOK':
            
            return {...state};
            
            case 'DELETE_BOOK':
            
            return {...state};

           

        default :
        return state;
        

    }
}