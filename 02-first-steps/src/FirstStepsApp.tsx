import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
	productoName: string,
	quantity: number
}

const itemsInCart: ItemInCart[] = [
	{productoName: 'Nintendo Switch', quantity: 1},
	{productoName: 'Pro Controller', quantity: 2},
	{productoName: 'Smash Bros', quantity: 5}

]
	


export function FirstStepsApp() {
	return (
		<>
			<h1>Carrito de compra</h1>
			{
				itemsInCart.map(({productoName, quantity}) =>(
					<ItemCounter key={productoName} name = {productoName} quantity={quantity}/>
				))}

				
			{/* <ItemCounter name ='Nintendo Switch2' quantity={3}/>
			<ItemCounter name ='Pro Cotroller' quantity={4}/>
			<ItemCounter name = 'Smash Bros' quantity={5}/>
			<ItemCounter name = 'Kingdom Heart' quantity={1}/> */}
			
		</>
	);
}
