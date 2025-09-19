
import { Menu, X, PhoneCall, MailPlus } from 'lucide-react';
import Link from 'next/link';
const SideBar = () => {
    const sideBarLink = [
        {
            title: "Home",
            href: "/",
            icon: <PhoneCall />
        },
        {
            title: "Dashboard",
            href: "/",
            icon: <PhoneCall />
        },
        {
            title: "Analysis",
            href: "/",
            icon: <PhoneCall />
        },
    ]

    return (

        <aside className=' h-full'>
            <div className=" flex flex-col">
                {
                    sideBarLink?.map((item, index) => (
                        <Link href={item?.href} key={index}>{item?.title}</Link>
                    ))
                }
                
            </div>
        </aside>

    )
}

export default SideBar