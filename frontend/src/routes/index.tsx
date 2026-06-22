import LoginSection from "#/components/home/LoginSection";
import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "lucide-react";

export const Route = createFileRoute('/')({ component: Home })

function Home() {
    return (
        <div className="p-8 flex justify-center items-center h-screen">
            <div className="w-7/10 h-9/10 border-2 px-7 py-3 ">
                <div className="flex flex-col justify-center items-center pb-4">
                    {/* Placeholder icon */}
                    <Presentation size={128} />
                    <p>THE TELEPHONE GAME</p>
                </div>

                <div className="flex flex-row gap-5">
                    <LoginSection />
                    <div className="grow-8 bg-blue-400"></div>
                </div>
            </div>
        </div>
    )
}
