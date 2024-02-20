import React from 'react';
import { faEnvelopeOpen,faLock,faUser,faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SignUpPage() {
    return (
        <div class="h-screen w-screen bg-blue-600 flex justify-center items-center">

            <div className="bg-blue-600 max-w-80 grid gap-5">
                <h1 className="text-4xl font-bold text-white">Registration</h1>
                <p className="text-dull-white">Study Stack - Access to 300+ hours of courses, tutorials and livestreams</p>
                <form action="" className="space-y-6 text-white">
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                        
                        <FontAwesomeIcon icon={faUser} />
                        </div>
                        <input type="text" placeholder="First Name" required className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" />
                    </div>
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                            
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <input type="text" placeholder="Last Name" required className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" />
                    </div>
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                        <FontAwesomeIcon icon={faAddressCard} />
                        </div>
                        <input type="number" placeholder="PRN Number" required className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" />
                    </div>
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                       
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                        </div>
                        <input type="email" placeholder="Email Address" required className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" />
                    </div>
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                        <FontAwesomeIcon icon={faLock} />
                        </div>
                        <input type="password" placeholder="Password" required className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" />
                    </div>
                    <button className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2">Sign up</button>
                </form>
                <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
                    <p>Already have an account? <a className="text-neon-blue font-semibold cursor-pointer">Sign in</a></p>

                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
