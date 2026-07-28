import React from "react";
export default function Enqueryform() {
    return (
        <>
        <div className="enqueryform bg-gradient-to-br from-[#dbe9f8] to-[#eef1f9] rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Interested in this Property</h3>
            <p className="text-sm text-gray-600 mb-4">Fill your details for a customized quote</p>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" 
                    className="px-4 border border-gray-100 rounded-lg focus:ring-0 focus:outline-none bg-white w-full h-12 !text-[14px]" 
                    id="name" placeholder="Name*" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="text" 
                    className="px-4 border border-gray-100 rounded-lg focus:ring-0 focus:outline-none bg-white w-full h-12 !text-[14px]" 
                    id="email" placeholder="Email*" />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="sr-only">Phone number</label>
                    <input type="text" 
                    className="px-4 border border-gray-100 rounded-lg focus:ring-0 focus:outline-none bg-white w-full h-12 !text-[14px]" 
                    id="number" placeholder="Phone*" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea name="message" id="message" cols={10} rows={3} 
                    className="px-4 py-4 border border-gray-100 rounded-lg focus:ring-0 focus:outline-none bg-white w-full h-28 !text-[14px]" 
                    placeholder="Message"></textarea>
                </div>
                <button type="submit" 
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                    Enquire Now
                </button>
            </form>

            {/* Connect with expert section */}
            <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-300">
                    <img 
                        src="/expert-avatar.jpg" 
                        alt="Space Expert" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="text-sm text-gray-800 font-medium">Connect with our space expert</p>
                    <div className="flex items-center gap-1 mt-1">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-4 h-4 text-blue-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:hello@cofynd.com" className="text-sm font-semibold text-gray-900 hover:underline">
                            hello@cofynd.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}