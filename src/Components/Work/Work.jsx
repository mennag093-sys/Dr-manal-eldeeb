import React from 'react'
import { ChevronLeft, ChevronRight, Repeat, Link2 } from "lucide-react";
import Opinion from '../Opinion/Opinion';

const videosData = [
  {
    id: 1,
    youtubeId: "e21SWXXrqsM",
    youtubeUrl: "https://youtu.be/e21SWXXrqsM?si=mr88W3JsOy669fnb",
    title: "ازاى اوظف الطاقة لتقليل وزنى",
    lecturer: "منال الديب",
    duration: "2:15",
    views: 1520,
    isShort: true
  },
  {
    id: 2,
    youtubeId: "Su6nNSUJScw",
    youtubeUrl: "https://youtu.be/Su6nNSUJScw?si=foVRBFD_n9vP5KhL",
    title: "كيفية تحويل الطاقه السلبية إلي طاقة إيجابية ",
    lecturer: "منال الديب",
    duration: "08:20",
    views: 980,
    isShort: true
  },
  {
    id: 3,
    youtubeId: "1Cs1xVqg49Y",
    youtubeUrl: "https://youtu.be/1Cs1xVqg49Y?si=eu49OngGhNhfAcH3",
    title: "التخلص من السمنة والدهون الذائدة بالتنفس السليم",
    lecturer: "منال الديب",
    duration: "15:10",
    views: 2100,
    isShort: true
  }
]

const Work = () => {
  return (
    <div className="w-full px-6 py-10" dir="rtl">
      <h2 className="text-[#212121] font-bold text-[30px] text-right">
        ورشات عمل متنوعة
      </h2>
      <p className="text-[#6B7280] font-bold mt-2 text-right">
        أبرز ورشات العمل المسجلة التي قامت الدكتورة منال بتقديمها و نشرها.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {videosData.map(video => (
          <div 
            key={video.id} 
            className="bg-[#F0F2ED] rounded-2xl shadow-md p-6 text-right border border-[#87A1BD] flex flex-col "
          >
          
            <div className="flex justify-between items-center mb-2">
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#212121] rotate-[130deg] transition-transform duration-300 hover:rotate-0 hover:text-[#CE9F2B]"
              >
                <Link2 size={24} />
              </a>
              {video.isShort && (
                <span className="font-bold text-[#212121] text-[18px] px-3 py-1 rounded-full">
                  Shorts
                </span>
              )}
            </div>

         
            <div className="relative rounded-xl overflow-hidden shadow-sm">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-[190px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

          
            <div className="flex flex-col flex-grow mt-6">
              <div className="flex justify-between items-center text-sm">
                <div className="text-[#2B416A] font-bold text-base">
                  <span>{video.duration}</span>
                </div>
                <Repeat size={28} className="text-[#87A1BD]" />
              </div>

              <h3 className="my-6 font-bold text-[#212121] text-[18px] leading-relaxed min-h-[54px]">
                {video.title}
              </h3>
              <div className=" flex items-center justify-between text-[#2B416A] text-sm">
                <span className="text-[#212121]">المحاضر: {video.lecturer}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#212121]">{video.views}</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2F5EA0" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

         <div className="mt-12 flex justify-start gap-8 items-center pr-2">
              <button className="p-4 bg-[#CE9F2B] text-black rounded-2xl hover:bg-[#b88e26] transition-all shadow-md">
                <ChevronRight size={35} strokeWidth={3} />
              </button>
              <button className="p-4 bg-transparent text-[#6B7280] border-2 border-[#6B7280] rounded-2xl hover:bg-gray-50 transition-all">
                <ChevronLeft size={35} strokeWidth={3} />
              </button>
            </div>

      <Opinion />
    </div>
  )
}

export default Work;