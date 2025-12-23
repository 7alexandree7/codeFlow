import { ArrowRight, Play, Sparkles } from "lucide-react"


const HeroLeftSide = () => {
    return (
        <div className="text-center lg:text-start">
            <div
                className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border
                 border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
                <Sparkles className="w-4 h-4sm:w-6 sm:h-6 text-blue-400" />
                <span className="text-xs sm:text-sm text-blue-300">Introducing CodeFlow AI</span>
            </div>

            <h1 className="text-[40px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb:-1  sm:mb-2">Code Faster</span>
                <span className="bg-linear-to-b from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent bloc mb:-1  sm:mb-2">Build Better</span>
                <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb:-1  sm:mb-2"> With CodeFlow AI</span>
            </h1>

            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-300 leading-relaxed">
                Accelerate your development workflow with intelligent code
                completion, automated testing, and smart debugging. Ship
                production-ready code 10x faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-x-4 lg:space-x-6 lg:justify-start mb-8 sm:mb-12 animate-in  slide-in-from-bottom duration-700 delay-400">
                <button className="w-full flex items-center justify-center sm:w-auto px-6 sm:px-8 py-3 sm:py-4 cursor-pointer
                 bg-linear-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-400 hover:scale-105 space-x-2" >
                    <span>Start Coding Free</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-full flex items-center justify-center sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 rounded-lg font-semibold text-sm 
                 sm:text-base transition-all duration-400 hover:scale-105 space-x-2 backdrop-blur border border-white/10 hover:bg-white/10 cursor-pointer" >
                    <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 duration-300 transition-colors">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                    </div>
                    <span>Watch Demo</span>
                </button>
            </div>
        </div>
    )
}

export default HeroLeftSide
