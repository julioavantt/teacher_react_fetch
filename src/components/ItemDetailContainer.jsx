import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"

const productData = {
	name: "banana",
	stock: 2,
}

export const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		new Promise((res, rej) => {
			setTimeout(() => res(productData), 2000)
		})
			.then(response => setProduct(response))
			.finally(() => setLoading(false))
	}, [])

	return (
		<>
			<Container className="mt-4">
				{loading ? (
					<>Loading...</>
				) : (
					<>
						<h1>{product.name}</h1>
						<h6>{product.stock}</h6>
					</>
				)}
			</Container>
		</>
	)
}
