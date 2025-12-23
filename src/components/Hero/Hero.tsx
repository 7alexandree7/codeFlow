import { useEffect, useState } from "react"
import HeroLeftSide from "../HeroLeftSide/HeroLeftSide"
import HeroRightCodeSide from "../HeroRightCodeSide/HeroRightCodeSide"


const Hero = () => {

    const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])


    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-30 z-0" style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
            }}>
            </div>

            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto relative w-full">
                <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg-gap-12 items-center relative">

                    {/* LEFT */}
                    <HeroLeftSide />

                    {/* RIGHT */}
                    <HeroRightCodeSide />
                </div>
            </div>
        </section>
    )
}

export default Hero
