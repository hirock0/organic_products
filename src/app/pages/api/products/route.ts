import clientPromise from "@/lib/db_connection/db_connection"
export async function POST(request: Request) {

    try {

        const reqBody = await request.json()
        const client = await clientPromise
        const db = client.db("organicproducts");
        const products =  db.collection("products")
        const addedProduct = await products.insertOne(reqBody)
        return Response.json({ message: "Upload successfully", success: true, reqBody })
    } catch (error: any) {
        return Response.json({ message: error?.message, success: false })
    }

}
export async function GET() {
    try {
        const client = await clientPromise
        return Response.json({ message: 'Hello World', success: true })
    } catch (error: any) {
        return Response.json({ message: error?.message, success: false })
    }

}