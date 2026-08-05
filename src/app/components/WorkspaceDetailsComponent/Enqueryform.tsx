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

            
        </div>
        </>
    )
}