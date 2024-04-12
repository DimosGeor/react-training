import List from  './List.jsx';

function App(){
  const fruits=[  {id:1 , name:"apple" , calories: 95} ,
                  {id:2 , name:"orange", calories: 45},
                  {id:3 , name:"banna", calories: 105},
                  {id:4 , name:"coconut", calories: 159},
                  {id:5 , name:"pineapple", calories: 37}
              ];
    
   const vegetables=[  
              {id:1 , name:"potatoes" , calories: 110} ,
              {id:2 , name:"calery", calories: 15},
              {id:3 , name:"carots", calories: 25},
              {id:4 , name:"corn", calories: 63},
              {id:5 , name:"broccolo", calories: 50}
          ]; 

    return(
        <>
        
        {fruits.length> 0 ? <List items={fruits} category="Fruits" /> :null}
        {vegetables.length>0 ? <List items={vegetables} category="Vegetables" /> :null}

        </>
    );
}

export default App