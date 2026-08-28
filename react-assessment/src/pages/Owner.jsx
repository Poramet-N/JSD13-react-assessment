import myPicture from '../assets/my_photo.jpg';

function Owner() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 px-4 pt-12">

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black">
        29 Poramet Nilchan (ปอม) - JSD 13
      </h1>

      <div className="w-auto h-60 bg-white border-2 border-black flex items-center justify-center mb-6 shadow-sm">
        <img src={myPicture} alt="Poramet Nilchan" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-2xl text-center">
        <h2 className="text-base font-bold mb-3 text-black">
          Short Biography:
        </h2>
        <p className="text-sm md:text-base text-black leading-relaxed">
          A former operations team lead specializing in delivering premium concierge services for high-net-worth VVIP clients across top-tier credit card issuers and luxury automotive brands. Transitioned into tech to become a full-fledged MERN Stack Developer. Continuously learning, adapting, and striving for professional growth in software engineering—excited to collaborate and connect!
        </p>
      </div>
    </div>
  )
};

export default Owner;