import { Menu, X } from "lucide-react"
import { useState } from "react"

const NavBar = () => {

    const [isMobleMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    return (
        <nav className="fixed top-0 w-full transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

                    <div className="flex items-center  space-x-1 group cursor-pointer">
                        <img
                            src="./logocodeflow.png"
                            alt=""
                            className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white mr-1">Code</span>
                            <span className="text-blue-400">Flow</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a className="text-gray-300 hover:text-white text-sm lg:text-base" href="#features">Features</a>
                        <a className="text-gray-300 hover:text-white text-sm lg:text-base" href="#pricing">Pricing</a>
                        <a className="text-gray-300 hover:text-white text-sm lg:text-base" href="#testimonials">Testimonials</a>
                    </div>

                    <button onClick={() => setIsMobileMenuOpen(!isMobleMenuOpen)} className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer">
                        {isMobleMenuOpen  ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        ): (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                    </button>
                </div>

                {isMobleMenuOpen && (
                    <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300 rounded-2xl">
                        <div className="flex flex-col justify-center items-center px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                            <a onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-sm lg:text-base" href="#features">Features</a>
                            <a onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-sm lg:text-base" href="#pricing">Pricing</a>
                            <a onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-sm lg:text-base" href="#testimonials">Testimonials</a>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default NavBar
