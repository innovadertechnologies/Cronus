"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const patientReviews = [
  {
    id: 1,
    name: "Sang Lama",
    avatar: "S",
    timeAgo: "8 months ago",
    rating: 5,
    text: "Visiting a gynecologist can be uncomfortable but this hospitalcompletely changed that experience for me dr nilotpala mohanty was calm attentive and genuinely listened without rusor dismissing concerns every step was explained in a way that made me feel informed and in control what stood out most was thw sense of dignity and respect throughout my visit from consultation to care.The hospital envirwas clean well organized and supportive made a huge diffrence i left feeling reassured cared for and confidence in the treatement i received .than you",
    link: "https://share.google/3OCkVhmBLDn7N0e74"
  },
  {
    id: 2,
    name: "Sunil Patlan",
    avatar: "S",
    timeAgo: "8 months ago",
    rating: 5,
    text: "My experience is very nice . Thank you for this hospital .Dr nilotpala is one the best most humble and down to earth person... She is very calm and posted which gives confidence in the patient...she is available on phone and any given point of time which we believe is the most friendlist gesture.....If you are looking the best gynaecologist dr . Please meet dr nilotpala Mohanty in cronus hospital becouse she is very nice and great doctor.all sevices are good . Ultrasound staff is very helpful for ultrasound patient ",
    link: "https://share.google/Upxwdi4Ynihkt3zJ1"
  },
  {
    id: 3,
    name: "Charlotte Bonaventure (BabyGirlFoLife)",
    avatar: "CB",
    timeAgo: "6 months ago",
    rating: 5,
    text: "One of best gynaecologist i have met she understands patients concerns very well and gives the right advice Dr nilotpala Mohanty her behaviour is friendly and respectful which makes patients feel  relaxed I would definitely recommend her to others thanks",
    link: "https://share.google/4T9xJU2954guBzpgb"
  },
  {
    id: 4,
    name: "pasang lepcha",
    avatar: "PL",
    timeAgo: "8 months ago",
    rating: 5,
    text: "Finding a gynecologist who treats patients with care dignity and patient is rare and this Doctor  Kumkum Sharma is truly one of a kind. From the moment I entered the clinic I felt a sense of trust and comfortable  SHe speaks gently listen deeply and never makes the patient feel embarrassed or rushed....",
    link: " https://share.google/e2KSaS6IAiydUtWcP"
  },
  {
    id: 5,
    name: "Abhishek Kumar",
    avatar: "AK",
    timeAgo: "5 months ago",
    rating: 5,
    text: "I had a very positive experience with the gynaecologist at this hospitalThe Doctor is extremely knowledge patient and understand. She listens carefully to concerns and explain every details in a very clear and simple way which makes patients feel comfortable and confident……",
    link: "https://share.google/uwbKoiuNxSKzN8HHB"
  }
];

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function ReviewCard({ review }: { review: typeof patientReviews[0] }) {
  const handleClick = () => {
    if (review.link) {
      window.open(review.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="flex-shrink-0 w-80 lg:w-72 xl:w-80 bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 h-64 cursor-pointer group"
      onClick={handleClick}
    >
      {/* Header with avatar and user info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {review.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{review.name}</h4>
            <GoogleIcon />
          </div>
          <p className="text-gray-500 text-xs">{review.timeAgo}</p>
        </div>
      </div>
      
      {/* Star rating */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      
      {/* Review text */}
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-6 overflow-hidden group-hover:text-gray-900 transition-colors">
        {review.text}
      </p>
      
      {/* Click indicator */}
      <div className="mt-3 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
        Click to view full review on Google
      </div>
    </div>
  );
}

export function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Double the reviews for infinite scroll
  const duplicatedReviews = [...patientReviews, ...patientReviews];
  const cardWidth = 320; // 80 * 4 = 320px (w-80 + gap)
  const totalWidth = patientReviews.length * cardWidth;

  useEffect(() => {
    if (isHovered) return;

    const animate = () => {
      setTranslateX(prev => {
        const newValue = prev - 0.5; // Slow, smooth movement
        // Reset when we've scrolled through one full set
        if (Math.abs(newValue) >= totalWidth) {
          return 0;
        }
        return newValue;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, totalWidth]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    const scrollAmount = cardWidth;
    setTranslateX(prev => {
      const newValue = direction === 'left' 
        ? prev + scrollAmount 
        : prev - scrollAmount;
      
      // Keep within bounds
      if (newValue > 0) return -totalWidth + scrollAmount;
      if (Math.abs(newValue) >= totalWidth) return 0;
      return newValue;
    });
  };

  return (
    <section id="testimonials" className="bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3446] lg:text-4xl mb-2">
            Patient Stories – Real Experiences, Trusted Care
          </h2>
        </div>

        {/* Google Reviews Summary */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-1">
                <GoogleIcon />
                <span className="font-medium text-gray-900 text-2xl">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2 ml-7">
                <span className="text-m font-bold text-gray-900">5.0</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">(312)</span>
              </div>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
            Review us on Google
          </button>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={containerRef}
              className="flex gap-6"
              style={{ 
                transform: `translateX(${translateX}px)`,
                transition: isHovered ? 'transform 0.3s ease-out' : 'none'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {duplicatedReviews.map((review, index) => (
                <ReviewCard key={`${review.id}-${index}`} review={review} />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg transition-all opacity-80 hover:opacity-100"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg transition-all opacity-80 hover:opacity-100"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}