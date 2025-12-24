import SyntaxHighlighter from "react-syntax-highlighter"
import { featuresData } from "../../data/featuresData"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"



const Features = () => {
  return (
    <section className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative" id={"features"}>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:mb-6">
            <span className="bg-linear-to-b from-white to gray-300 bg-clip-text text-transparent">Your Complete Development</span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to gray-300 bg-clip-text text-transparent">Workflow</span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {featuresData.map((feature, index) => (
            <div
              className={`flex flex-col lg:flex-row  items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
             key={index}>

              <div className="flex-1 w-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all delay-300 animate-pulse" />
                <div className="relative bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6
                overflow-hidden ">
                  <div className="bg-black rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                    
                    {/* IDE HEADER */}
                    <div className="bg-black backdrop-blur-sm border-b border-white/10 flex items-center space-x-1 sm:space-x-2 rounded-2xl py-1 pl-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-1 text-xs sm:text-sm text-gray-300">{feature.title}</span>
                    </div>

                    {/* CODE SNIPPET */}
                    <div>
                      <SyntaxHighlighter
                        language="javascript"
                        style={nightOwl}
                        customStyle={{
                          background: "#000",
                          margin: "0",
                          borderRadius: "8px",
                          fontSize: "0.75rem",
                          lineHeight: "1.4",
                          height: "100%",
                          "overflow": "hidden"
                        }}
                        wrapLines={true}
                      >
                        {feature.codeSnippet}
                      </SyntaxHighlighter>
                    </div>

                  </div>
                </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
