import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div>
            <section
                className=""
            >
                <Image src={"https://res.cloudinary.com/dqpyp8ii2/image/upload/v1758037824/Facebook_Cover_copy_mieysi.jpg"} alt='Banner' width={50000} height={50000} />
            </section>
        </div>
    )
}

export default Banner