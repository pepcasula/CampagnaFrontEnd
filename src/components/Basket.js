
import styled from 'styled-components';

const UList = styled.ul`
display: flex;
flex-direction: row;
width: 70%;
`

const ListItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;

background-color: rgb(255, 250, 230);
font-size: 1.25em;
color: rgb(0, 77, 26);
margin: 2em;
padding: 1em;
border-radius: 0.4em;
border: 1px black;
`

const Basket = ({basket}) => {

    let basketMapping = {}
    const frequencyMapping = basket.forEach(element => {
        if(basketMapping[element.name]){
            basketMapping[element.name]++
        } else {
            basketMapping[element.name] = 1
        }
    }
        )

    const disticnt = basket.filter((value, index, array) => array.indexOf(value) === index)

    const basketUnpacking =  disticnt.map((item, index) => { 
        return (<ListItem item={item} key={index}>
            <div>
                <h4>{item.name}</h4>
                Quantity: {basketMapping[item.name]} 
            </div>
            <div>
                <img width="230px" src={`/images/${item.imageUrl}`}/>
            </div> </ListItem>)
    })


return(<>
    <div className='sub-routes'>
        <h4>Items</h4>
        <UList id='basket'>
            {basketUnpacking}
        </UList>
        <button id='checkout-button'>It does nothig</button>
    </div>
    </>)
}

export default Basket