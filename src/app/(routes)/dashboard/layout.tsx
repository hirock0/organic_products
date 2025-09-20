import SideBar from '@/components/PageAdmin/SideBar/SideBar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className=' '>
            <div className="flex bg-red-200 h-screen overflow-hidden">
                <div className=" bg-green-300 w-1/2  overflow-y-scroll">
                    <SideBar />
                </div>
                <div className=" overflow-y-scroll w-full">{children}</div>
            </div>
        </main>
    )
}

export default layout