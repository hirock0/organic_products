import AddCart from "@/app/ui/cart/addCart"
import Image from "next/image"

const ProductCard = ({ product }: any) => {
    return (
        <div>
            <div
                className="bg-white w-full overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-102"
            >
                <div className="p-8 text-center space-y-4">
                    <div className=" h-72 max-sm:h-80 ">
                        <Image priority src={product?.image} alt={product?.name} width={500} height={500} className=" w-full h-full object-cover"/>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                        <div className="text-2xl font-bold text-[#43b51a]">{product.price}</div>
                    </div>
                   <AddCart product={product}/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard