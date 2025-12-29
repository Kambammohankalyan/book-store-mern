import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"
import { Link } from 'react-router-dom';

const news = [
    {
        "id": 1,
        "title": "AI Revolution: ChatGPT-5 Sets New Benchmarks in Human-Like Interaction",
        "description": "OpenAI's latest language model demonstrates unprecedented capabilities in creative writing, coding, and problem-solving, raising new discussions about AI's role in society.",
        "image": news1,
        "category": "Technology",
        "date": "April 15, 2024"
    },
    {
        "id": 2,
        "title": "Sustainable Cities: The Rise of Vertical Forests",
        "description": "Major cities worldwide are adopting revolutionary green architecture, with vertical forests becoming the new standard in urban development to combat climate change.",
        "image": news2,
        "category": "Environment",
        "date": "April 14, 2024"
    },
    {
        "id": 3,
        "title": "SpaceX Announces First Civilian Mission to Mars",
        "description": "Elon Musk reveals groundbreaking plans for the first civilian mission to Mars, scheduled for 2028, marking a historic milestone in space exploration.",
        "image": news3,
        "category": "Space",
        "date": "April 13, 2024"
    },
    {
        "id": 4,
        "title": "Digital Currency Revolution: Central Banks Launch Global Initiative",
        "description": "Major central banks collaborate on a unified digital currency framework, potentially transforming the future of global financial transactions.",
        "image": news4,
        "category": "Finance",
        "date": "April 12, 2024"
    },
    {
        "id": 5,
        "title": "Quantum Computing Breakthrough Promises New Era of Innovation",
        "description": "Scientists achieve quantum supremacy in room-temperature conditions, paving the way for practical quantum computing applications.",
        "image": news2,
        "category": "Technology",
        "date": "April 11, 2024"
    }
]

const News = () => {
  return (
    <div className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='text-4xl font-bold text-gray-800'>Latest News</h2>
                <Link to="/news" className='text-primary hover:text-blue-700 font-medium'>
                    View All →
                </Link>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {news.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='relative'>
                                <img src={item.image} alt="" className='w-full h-20 object-cover'/>
                                <span className='absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm'>
                                    {item.category}
                                </span>
                            </div>``
                            
                            <div className='p-6'>
                                <p className='text-gray-500 text-sm mb-3'>{item.date}</p>
                                <Link to="/">
                                    <h3 className='text-xl font-semibold text-gray-800 hover:text-primary transition-colors duration-300 mb-3'>
                                        {item.title}
                                    </h3>
                                </Link>
                                <p className='text-gray-600 text-sm line-clamp-2'>{item.description}</p>
                                
                                <Link to="/" className='inline-block mt-4 text-primary hover:text-blue-700 font-medium'>
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default News