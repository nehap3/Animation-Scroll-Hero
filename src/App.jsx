import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  const containerRef = useRef(null);
  const carRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
   
      gsap.set(".stat-card-top", { opacity: 0, y: -200, scale: 0.8 });
   
      gsap.set(".stat-card-bottom", { opacity: 0, y: 200, scale: 0.8 });
   
      gsap.set(carRef.current, { x: "-60vw" });

    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000", 
          scrub: 1.5,    
          pin: true,
          anticipatePin: 1,
        },
      });


      tl.to(carRef.current, {
        x: "105vw",
        ease: "none",
      }, 0)
      
     
      .to(".stat-card-top", {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        ease: "power2.out",
      }, 0.2) 

    
      .to(".stat-card-bottom", {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        ease: "power2.out",
      }, 0.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#cbd5e1] min-h-screen overflow-x-hidden font-sans">
      
      <section
        ref={containerRef}
        className="relative h-screen flex flex-col justify-between items-center py-12 px-6 md:px-10"
      >
        
     
        <div className="w-full max-w-6xl grid grid-cols-2 gap-8 z-0">
          <div className="stat-card-top bg-white p-8 rounded-2xl shadow-2xl border-b-[10px] border-green-500">
            <h2 className="text-7xl font-black text-green-500">58%</h2>
            <p className="text-slate-800 font-bold mt-3 text-lg">Increase in pick up point use</p>
          </div>
          <div className="stat-card-top bg-[#334155] p-8 rounded-2xl shadow-2xl border-b-[10px] border-blue-400 text-white">
            <h2 className="text-7xl font-black text-blue-300">27%</h2>
            <p className="opacity-80 font-bold mt-3 text-lg">Increase in pick up point use</p>
          </div>
        </div>


       
        <div className="w-full relative z-20 my-auto shadow-2xl">
          <div className="bg-[#4ade80] py-6 border-y-4 border-black/10">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black text-center uppercase">
              WELCOME ITZFIZZ
            </h1>
          </div>
          
          <div className="bg-[#1e293b] h-36 w-full relative flex items-center overflow-hidden">
       
            <div className="absolute inset-0 opacity-10 flex flex-col justify-around">
              <div className="h-[2px] bg-white w-full"></div>
              <div className="h-[2px] bg-white w-full"></div>
            </div>
            
            <img
              ref={carRef}
              src="/images/car.jpg" 
              alt="car"
              className="absolute w-[320px] z-30 will-change-transform" 
            />
          </div>
        </div>


 
        <div className="w-full max-w-6xl grid grid-cols-2 gap-8 z-0">
          <div className="stat-card-bottom bg-[#38bdf8] p-8 rounded-2xl shadow-xl border-b-[10px] border-orange-400 text-white">
            <h2 className="text-7xl font-black">23%</h2>
            <p className="opacity-90 font-bold mt-3 text-lg">Decreased in customer phone calls</p>
          </div>
          <div className="stat-card-bottom bg-[#fb923c] p-8 rounded-2xl shadow-xl border-b-[10px] border-blue-500 text-white">
            <h2 className="text-7xl font-black">40%</h2>
            <p className="opacity-90 font-bold mt-3 text-lg">Decreased in customer phone calls</p>
          </div>
        </div>

      </section>

     
      <div className="h-screen bg-white flex items-center justify-center">
        <p className="text-3xl text-gray-300 font-bold">NEXT CONTENT STARTS HERE</p>
      </div>
    </div>
  );
}

export default App;