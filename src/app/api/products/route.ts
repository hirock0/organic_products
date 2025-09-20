export async function POST(request: Request) {
    try {
        const res = await request.json()
        console.log(res)
        return Response.json({ message: "Upload successfully", success: true, res })
    } catch (error: any) {
        return Response.json({ message: error?.message, success: false })
    }

}

export async function GET() {
    try {
        
        return Response.json({ message: 'Hello World', success: true })
    } catch (error: any) {
        return Response.json({ message: error?.message, success: false })
    }

}