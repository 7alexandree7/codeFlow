import SyntaxHighlighter, { } from "react-syntax-highlighter"
import { codeExamples, floatingCards } from "../../data/CodeExamples"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"

const HeroRightCodeSide = () => {

    const [activeTab, setActiveTab] = useState<"App.tsx" | "Hero.tsx" | "NavBar.tsx">("App.tsx")
    
    return (
        <div className="relative w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-70 sm:h-87.5 lg:h-112.5 border border-white/5">
                    {/* IDE HEADER */}
                    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                            <span className="ml-1 text-xs sm:text-sm text-gray-300">CodeFlow AI</span>
                        </div>
                        <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                    </div>
                    {/*IDE SUGGESTIONS app / hero / navbar*/}
                    <div className="p-3 sm:p-4 relative h-full">
                        <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-hidden">
                            <button
                                onClick={() => setActiveTab("App.tsx")}
                                className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
                                         ${activeTab === "App.tsx" ? "bg-blue-500/30 text-white border-blue-400/20"
                                        : "border-gray-500/50 bg-white/5 text-gray-300 transition-all duration-300"} 
                                     `}>
                                App.tsx
                            </button>
                            <button
                                onClick={() => setActiveTab("Hero.tsx")}
                                className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
                                         ${activeTab === "Hero.tsx" ? "bg-blue-500/30 text-white border-blue-400/20"
                                        : "border-gray-500/50 bg-white/5 text-gray-300 transition-all duration-300"} 
                                     `}>
                                Hero.tsx
                            </button>
                            <button
                                onClick={() => setActiveTab("NavBar.tsx")}
                                className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
                                         ${activeTab === "NavBar.tsx" ? "bg-blue-500/30 text-white border-blue-400/20"
                                        : "border-gray-500/50 bg-white/5 text-gray-300 transition-all duration-300"} 
                                     `}>
                                NavBar.tsx
                            </button>
                        </div>

                        {/* CODE EDITOR */}
                        <div className="relative overflow-hidden">
                            <SyntaxHighlighter
                                language="javascript"
                                style={nightOwl}
                                customStyle={{
                                    margin: "0",
                                    borderRadius: "8px",
                                    fontSize: "11px",
                                    lineHeight: "1.4",
                                    height: "100%",
                                    border: "#3c3c3c",
                                    "overflow": "hidden"
                                }}
                            >
                                {codeExamples[activeTab]}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>

                <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${floatingCards[activeTab].bgColor}
                        backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}>
                    <div className="flex items-center space-x-2 mb-2">
                        <span className={`w-6 h-6 ${floatingCards[activeTab].iconColor} flex items-center justify-center text-sm font-bold`}>{floatingCards[activeTab].icon}</span>
                        <span className={`text-sm font-medium ${floatingCards[activeTab].textColor}`}>{floatingCards[activeTab].title}</span>
                    </div>
                    <div className={`text-sm text-left ${floatingCards[activeTab].contentColor}`}>
                        {floatingCards[activeTab].content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroRightCodeSide
