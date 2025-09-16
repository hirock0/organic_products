import Image from "next/image"

const ProductCard = ({ product }: any) => {
    return (
        <div>
            <div
                className="bg-white w-full overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
                <div className="p-8 text-center space-y-4">
                    <div className="">
                        <Image priority src={product?.image} alt={product?.name} width={500} height={500}/>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                        <div className="text-2xl font-bold text-green-600">{product.price}</div>
                    </div>
                    <button
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-full font-semibold"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard