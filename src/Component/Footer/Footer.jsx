import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-16">
            <div className="max-w-[1200px] mx-auto py-10 max-sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-12">
                    
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">
                            CS — Ticket System
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            A modern customer support platform designed to streamline your ticket management process. 
                            We help businesses deliver exceptional customer service with powerful tools and intuitive workflows.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#mission" className="text-zinc-400 hover:text-white transition-colors">
                                    Our Mission
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                                    Contact Sales
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#products" className="text-zinc-400 hover:text-white transition-colors">
                                    Products & Services
                                </a>
                            </li>
                            <li>
                                <a href="#stories" className="text-zinc-400 hover:text-white transition-colors">
                                    Customer Stories
                                </a>
                            </li>
                            <li>
                                <a href="#apps" className="text-zinc-400 hover:text-white transition-colors">
                                    Download Apps
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Information</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#privacy" className="text-zinc-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#terms" className="text-zinc-400 hover:text-white transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#careers" className="text-zinc-400 hover:text-white transition-colors">
                                    Join Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                        <div className="flex flex-col gap-3">
                            <a 
                                href="#twitter" 
                                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                            >
                                <span className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </span>
                                <span>@CS -Ticket System</span>
                            </a>

                            <a 
                                href="#youtube" 
                                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                            >
                                <span className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </span>
                                <span>@CS - Ticket System</span>
                            </a>

                            <a 
                                href="#facebook" 
                                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                            >
                                <span className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </span>
                                <span>@CS - Ticket System</span>
                            </a>

                            <a 
                                href="mailto:support@cst.com" 
                                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                            >
                                <span className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    </svg>
                                </span>
                                <span>support@cst.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-6">
                    <p className="text-center text-zinc-400">
                        © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;