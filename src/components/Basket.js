
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

background-color: pink;
font-size: 1.25em;
color: rgb(0, 77, 26);
margin: 2em;
padding: 1em;
border-radius: 0.4em;
border: 1px black;
`

const Basket = ({basket}) => {

    const basketUnpacking = basket.map((item, index) => {
        return (<ListItem item={item} key={index}></ListItem>)
    })


return(<>
    <div className='sub-routes'>
        <h4>Items</h4>
        <UList id='basket'>
            {basketUnpacking}
        </UList>
    </div>
    </>)
}

export default Basket