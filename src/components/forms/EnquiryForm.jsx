import React, { useState } from 'react';

function EnquiryForm() {

    const [email, setEmail] = useState("");
    const [isAdded, setIsAdded] = useState(false);

    const handleGetUpdates = () => {
        if (!email) {
            // Email not entered
            return;
        }

        // Your API call / subscribe logic here
        setIsAdded(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">

            {/* Header */}
            <header className="w-full bg-white py-5 px-6 md:px-12 flex justify-center items-center shadow-sm relative z-10 border-b border-gray-200">
                <div className="text-xl md:text-2xl font-bold text-gray-900 items-center justify-center">
                    HID
                </div>
                <div className="text-base text-gray-600 hover:text-gray-900 cursor-pointer font-medium absolute right-6 md:right-12">
                    Login
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-4 py-12 w-full">
                <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Let's Connect</h2>

                    <div className="mb-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            Not Saved
                        </span>
                    </div>

                    <form>
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Salutation <span className="text-red-400">*</span>
                                </label>
                                <div className="relative">
                                    <select className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all appearance-none cursor-pointer">
                                        <option value=""></option>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Ms">Ms</option>
                                        <option value="Dr">Dr</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    First Name <span className="text-red-400">*</span>
                                </label>
                                <input type="text" className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Last Name <span className="text-red-400">*</span>
                                </label>
                                <input type="text" className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all" />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Source <span className="text-red-400">*</span>
                                </label>
                                <input type="text" defaultValue="Website" className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm text-gray-500 focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all" readOnly />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Date of Enquiry <span className="text-red-400">*</span>
                                </label>
                                <input type="date" placeholder="Date today must be in format: dd-mm-yyyy" className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm text-gray-700 outline-none focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 transition-all" />
                                <p className="text-xs text-gray-400 mt-1.5 ml-1">Asia/Kolkata</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Occupation <span className="text-red-400">*</span>
                                </label>
                                <div className="relative">
                                    <select className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all appearance-none cursor-pointer">
                                        <option value="">Select Occupation</option>
                                        <option value="Entrepreneur / Business Owner">Entrepreneur / Business Owner</option>
                                        <option value="Corporate Leadership">Corporate Leadership</option>
                                        <option value="Investor / Family Office">Investor / Family Office</option>
                                        <option value="Professional Services">Professional Services</option>
                                        <option value="Creative / Cultural Field">Creative / Cultural Field</option>
                                        <option value="Private Individual">Private Individual</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Property Type
                                </label>
                                <div className="relative">
                                    <select className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all appearance-none cursor-pointer">
                                        <option value="">Select Property Type</option>
                                        <option value="Villa">Villa</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Hospitality">Hospitality</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Plot Size
                                </label>
                                <input type="text" className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all" />
                            </div>
                            <div></div>
                        </div>

                        {/* Row 4 */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Email <span className="text-red-400">*</span>
                                </label>
                                <input type="email" className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Mobile No <span className="text-red-400">*</span>
                                </label>
                                <input type="tel" className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Location-City <span className="text-red-400">*</span>
                                </label>
                                <input type="text" className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    State <span className="text-red-400">*</span>
                                </label>
                                <input type="text" className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none transition-all" />
                            </div>
                        </div>

                        {/* Row 5 */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Requirement <span className="text-red-400">*</span>
                            </label>
                            <textarea rows="5" className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 outline-none resize-y transition-all"></textarea>
                        </div>

                        {/* Footer Buttons */}
                        <div className="flex justify-end gap-3 mt-4 pt-6 border-t border-gray-100">
                            <button type="button" className="px-5 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                                Discard
                            </button>
                            <button type="submit" className="px-5 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-black shadow-md shadow-gray-900/10 rounded-lg transition-all duration-200 hover:-translate-y-0.5">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-white border-t border-gray-200 py-8 px-6 md:px-12 flex justify-between items-end mt-auto">
                <div className="text-sm text-gray-500 mb-1">© Tushar Sharma</div>
                <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                        <input
                            type="email"
                            placeholder="Your email address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`border border-gray-200 rounded-md px-3 py-1.5 text-sm outline-none focus:border-gray-300 w-64 transition-colors ${email ? 'bg-blue-50/50' : 'bg-gray-50'}`}
                        />
                        <button
                            type="button"
                            onClick={handleGetUpdates}
                            className="bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 text-sm px-4 py-1.5 rounded-md transition-colors whitespace-nowrap"
                        >
                            {isAdded ? "Added" : "Get Updates"}
                        </button>
                    </div>
                    <div className="text-sm text-gray-500">Powered by ERPNext</div>
                </div>
            </footer>
        </div>
    );
}

export default EnquiryForm;