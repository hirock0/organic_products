
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        console.log(id)
        const reqBody = await request.json()
        console.log(reqBody)
        return Response.json({ message: "Prduct updated", success: true })
    } catch (error: any) {
        return Response.json({ message: error?.message, success: false })
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        console.log(id)

        return Response.json({ message: "Prduct deleted", success: true })
    } catch (error: any) {
        return Response.json({ message: error?.message, success: false })
    }
}