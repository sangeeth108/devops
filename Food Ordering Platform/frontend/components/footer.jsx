import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-blue-800 px-4 py-5 mx-auto sm:max-w-full md:max-w-full md:px-24 lg:px-8 pt-10">
        <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='sm:col-span-2'>
                <Link
                    href="/"
                    aria label="Go home"
                    title = "Company"
                >
                    <p className="text-xl font-bold tracking-wide text-white uppercase">
                    Quick Bite Food Ordering
                    </p>
                </Link>
                <div className="mt-6 lg:max-w-sm">
                    <p className="text-sm text-white">
                    Enjoy a seamless food ordering experience with Quick Bite, offering a variety of cuisines and dishes delivered right to your doorstep.
                    </p>
                    <p className="mt-4 text-sm text-white">
                        We are diverse, welcoming, accepting and passionate about being the best we can be.
                    </p>
                </div>
            </div>
            <div className="space-y-2 text-sm">
                <p className="text-base font-bold tracking wide text-white">
                    Contacts
                </p>
                <div className="flex">
                    <p className="mr-1 text-white">Telephone:</p>
                    <p className="mr-1 text-white">************</p>
                </div>
                <div className="flex">
                    <p className="mr-1 text-white">WhatsApp:</p>
                    <p className="mr-1 text-white">***********</p>
                </div>
                <div className="flex">
                    <p className="mr-1 text-white">Address:</p>
                    <p className="mr-1 text-white">***********</p>
                </div>
            </div>
            <div>
                <span className="text-base font-bold tracking-wide text-white">Social</span>
                <div className="flex items-center mt-1 space-x-3">
                    <Link
                        href="/"
                        className="text-white transition-colors duration-300 hover:text-blue-400"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                            <path
                                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z">
                            </path>
                        </svg>
                    </Link>
                </div>
                <p className="mt-4 text-sm text-white">
                Make your food ordering experience quick, delightful, and unforgettable with Quick Bite.
                </p>
            </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-white">
                © Copyright 2025 Quick Bite. All rights reserved.
            </p>
            <ul>
                <Link
                    href = "/"
                    className="text-sm text-white transition-colors duration-300 hover:text-blue-400"
                >
                    Privacy Policy
                </Link>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer
