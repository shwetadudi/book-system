const initialState = ([
    {id : 1, name : 'book1', desc : 'This is description for book 1', author : 'Author 1'},
    {id : 2, name : 'book2', desc : 'This is description for book 2', author : 'Author 2'},
    {id : 3, name : 'book3', desc : 'This is description for book 3', author : 'Author 3'},
    {id : 4, name : 'book4', desc : 'This is description for book 4', author : 'Author 4'}
  ]);

  function RootReducer(state = initialState, action){
      switch(action.type){
          case 'ADD_BOOK' :
            console.log(action.payload);
              const editedState = state.filter(item => item.id !== action.payload.id);
              return [{id : action.payload.id, name : action.payload.name, desc : action.payload.desc, author : action.payload.author}, ...editedState]; 
          case 'DELETE_BOOK' :
                const deletedState = state.filter(item => item.id !== action.payload.id);
                return [...deletedState];                  
          default:
               return state;
      }
  }

  export default RootReducer;