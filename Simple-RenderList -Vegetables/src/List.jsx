import PropTypes from 'prop-types';
function List(props){

    const itemList=props.items;
    const category= props.category;

   // fruits.sort((a ,b) => a.name.localeCompare(b.name)); //Alphabetical
   // fruits.sort((a ,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
   // fruits.sort((a ,b) => a.calories - b.calories ); //Numeric
   // fruits.sort((a ,b) => b.calories - a.calories ); //Numeric desc
    

  // const LowCalFruits=fruits.filter(fruit => fruit.calories <100);

  // const HighCalFruits=fruits.filter(fruit => fruit.calories >100);
    
    const ListItems= itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    
    
   // const ListItemsFr= LowCalFruits.map(LowCalFruit => <li key={LowCalFruit.id}>
   // {LowCalFruit.name}: &nbsp;
   // <b>{LowCalFruits.calories}</b></li>);


   // const ListItemsFrHigh= HighCalFruits.map(HighCalFruit => <li key={HighCalFruit.id}>
  //  {HighCalFruit.name}: &nbsp;
   // <b>{HighCalFruit.calories}</b></li>);


    return (<>
    <h3 className='list-category'>{category}</h3>
    <ol className='list-items'>{ListItems}</ol>
    </>);
    

}

List.PropTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                             calories:PropTypes.number}
                                             )),
}
List.defaultProps={
    category:"Category",
    items:[]
}
export default List 