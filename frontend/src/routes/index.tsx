import LoginSection from "#/components/home/LoginSection";
import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "lucide-react";

export const Route = createFileRoute('/')({ component: Home })

function Home() {
    return (
        <div className="p-4 md:p-8 flex justify-center items-center min-h-screen bg-slate-900 text-white">
            
            <div className="w-full max-w-5xl h-auto md:h-[85vh] border-2 border-slate-700 rounded-2xl p-5 md:p-7 flex flex-col">
                
                <div className="flex flex-col justify-center items-center pb-6">
                    <Presentation className="text-blue-400 w-20 h-20 md:w-32 md:h-32" />
                    <p className="text-lg md:text-xl font-bold tracking-wider mt-2 text-center">
                        THE TELEPHONE GAME
                    </p>
                </div>

                <div className="flex flex-col md:flex-row flex-1 gap-5 min-h-0">
                    
                    <div className="w-full md:w-3/5 flex flex-col justify-center">
                        <LoginSection />
                    </div>
                    
                    <div className="hidden md:block md:w-2/5 bg-blue-500/10 border border-blue-400/30 rounded-xl p-5 overflow-y-auto">
                        <h3 className="text-lg font-bold text-blue-400 mb-2">Hướng dẫn trò chơi</h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Chào mừng bạn đến với The Telephone Game! Hãy đăng nhập hoặc vào phòng nhanh để bắt đầu chuỗi tam sao thất bản hài hước.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
