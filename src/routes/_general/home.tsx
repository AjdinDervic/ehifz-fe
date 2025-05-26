import { createFileRoute } from "@tanstack/react-router";
import { Link as RouterLink } from "@tanstack/react-router";
import { Link } from 'react-scroll';


const Home = () => {


  return (
      <div className="bg-background min-h-screen">
        {/* Hero Section */}

          <section className="relative w-full h-screen text-white">

              <div
                  className="absolute inset-0 bg-[url('/images/naslovna.webp')] bg-cover bg-center bg-no-repeat brightness-20"
              ></div>

              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 max-w-2xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-4">
                      Dobrodošli na Al-Furqan!
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl drop-shadow-md mb-6">
                        Platformu za promociju hifza i tilaveta
                  </p>
                  <Link to="features" smooth={true} duration={1000} offset={-60}>
                      <button className="bg-green-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-500 ease-in-out">
                          Istražite naš rad
                      </button>
                  </Link>


              </div>
          </section>

          <section id="features" className="relative w-full h-screen text-white">

              <div
                  className="absolute inset-0 bg-[url('/images/ekran1.webp')] bg-cover bg-center bg-no-repeat brightness-20"
              ></div>

              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 max-w-2xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-4">
                      Hifz blog
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl drop-shadow-md mb-6">
                      Čitajte naše članke i saznajte više o različitim temama vezanim za hifz
                  </p>
                  <RouterLink to="/articles" >
                      <button className="bg-green-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-500 ease-in-out">
                          Krenite sa čitanjem
                      </button>
                  </RouterLink>


              </div>
          </section>

          <section id="podcast" className="relative w-full h-screen text-white">
              <div className={ "absolute inset-0 bg-[url('/images/laptop.webp')] bg-cover bg-center bg-no-repeat brightness-20"}>
              </div>

              <div className={ "relative z-10 flex flex-col justify-center items-center h-full text-center px-4 max-w-2xl mx-auto"}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-4">
                      HifzTalks
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl drop-shadow-md mb-6">
                      Poslušajte inspirativne priče naših hafiza, saznajte više o njihovom putu hifza,
                      izazovima sa kojima su se suočavali, anegdotama koje su na tom putu doživljavali
                      i mnogo više od toga
                  </p>

                  <button
                      onClick={() => window.open('https://www.youtube.com/@AlFurqan-uq4nv', '_blank')}
                      className="bg-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition">
                        Youtube kanal
                  </button>
              </div>
          </section>

          <section id="social media" className="relative w-full h-screen text-white">

              <div className={"absolute inset-0 bg-[url('/images/iznenadenje.webp')] bg-cover bg-center bg-no-repeat brightness-20"}>
              </div>

              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 max-w-2xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-4">
                     I bit će još...
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl drop-shadow-md mb-6">
                      Pratite nas na društvenim mrežama i ne propustite nijednu novu aktivnost
                  </p>

                  <div className="flex justify-center items-center space-x-4">
                      <a href="https://www.facebook.com/alfurqan.tm" target="_blank" rel="noreferrer">
                          <img src="/images/facebook.png" alt="facebook" className="w-10 h-10"/>
                      </a>
                      <a href="https://www.instagram.com/al.furq.an/" target="_blank" rel="noreferrer">
                          <img src="/images/instagram.png" alt="instagram" className="w-10 h-10"/>
                      </a>
                      <a href="https://www.youtube.com/@AlFurqan-uq4nv" target="_blank" rel="noreferrer"></a>
                  </div>
              </div>

              </section>



      </div>
  );
};

export default Home;

// Route Definition - After Component Declaration
export const Route = createFileRoute("/_general/home")({
  component: Home,
});
