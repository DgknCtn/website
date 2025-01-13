import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import nft1 from '../assets/nft1.png';
import nft2 from '../assets/nft2.png';
import nft3 from '../assets/nft3.png';
import nft4 from '../assets/nft4.png';
import nft5 from '../assets/nft5.png';

const NFTGallery: React.FC = () => {
  // Örnek NFT resimleri - bunları kendi NFT'lerinizle değiştirin
  const nfts = [nft1, nft2, nft3, nft4, nft5];

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="w-full"
      >
        {nfts.map((nft, index) => (
          <SwiperSlide key={index} className="w-72 h-72">
            <div className="w-full h-full rounded-xl overflow-hidden border-2 border-cyan-500/20 hover:border-cyan-400/50 transition-colors">
              <img
                src={nft}
                alt={`NFT ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NFTGallery;
