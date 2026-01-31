import React from 'react'
import book from '../../assets/book.png'

const booksData = [
  { id: 1, title: "البرمجة العصبية وتقويم السلوك", cover: book, downloadLink: "#" },
  { id: 2, title: "تقنيات التفكير الإيجابي", cover: book, downloadLink: "#" },
  { id: 3, title: "تنمية المهارات الشخصية", cover: book, downloadLink: "#" },
  { id: 4, title: "التحفيز الذاتي والنجاح", cover: book, downloadLink: "#" }
]

const Library = () => {
  return (
    <div className="w-full mx-auto py-10 px-6" dir="rtl">
     
      <div className="text-right mb-16">
        <h2 className="text-[#212121] text-[45px] font-bold">
          مكتبة د.إبراهيم الفقي
        </h2>
        <p className="text-[#6B7280] font-bold mt-4 text-lg">
          في هذا القسم سيتم عرض كتب الدكتور إبراهيم الفقي والتي رافقته خلال مسيرته العلمية لفترة 25 عاماً
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 min-h-[300px] min-w-[260px]">
        {booksData.map((book) => (
          <div 
            key={book.id} 
            className="group relative bg-gradient-to-b from-[#CE9F2BCC] from-[40%] to-white to-[60%] rounded-[10px] p-6 flex flex-col items-center text-center border border-gray-100  hover:transition-all duration-300 min-h-[300px] min-w-[260px]"
          >
           
            <div className="w-full h-64 mb-6 overflow-hidden rounded-xl">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-contain drop-shadow-md" 
              />
            </div>

            
            <h3 className="font-bold text-[22px] text-[#2B416A] mb-6 min-h-[60px] flex items-center justify-center leading-tight">
              {book.title}
            </h3>

           
            <a
              href={book.downloadLink}
              className="mt-auto w-full flex items-center justify-evenly bg-[#CE9F2B] text-black font-black text-xl py-4 rounded-1xl hover:bg-[#b88e26] transition-all shadow-lg"
            >
              <span className='text-[#2B416A]'>تنزيل</span>
            
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="black" 
                stroke="#CE9F2B" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
                <path d="M12 10v6"/>
                <path d="m15 13-3 3-3-3"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Library