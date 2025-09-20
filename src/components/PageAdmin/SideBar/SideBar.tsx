
import { Menu, X, PhoneCall, MailPlus } from 'lucide-react';
import Image from 'next/image';
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

        <aside className=' h-full border-r p-5 bg-zinc-100'>
            <div className="flex items-center ">
                <div

                    className="w-20 h-20 "
                >
                    <Image src={"https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758035793/Nature_Life_Logo-01-01_cl15ho.png"} alt='logo' width={500} height={500} />

                </div>
                <div className=" mt-2">
                    <h1 className="text-2xl font-bold theme_text">
                        ন্যাচার লাইফ
                    </h1>
                </div>
            </div>
            <div className=" flex flex-col gap-4">
                {
                    sideBarLink?.map((item, index) => (
                        <Link href={item?.href} key={index} className=' lg:text-xl text-center bg-white shadow-2xl p-3 rounded-full'>{item?.title}</Link>
                    ))
                }

            </div>
        </aside>

    )
}

export default SideBar