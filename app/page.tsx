import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <img
        src="/hero.png"
        alt="hero"
        className="w-full h-full hidden lg:block"
      />
      <img
        src="/heromob.png"
        alt="hero"
        className="w-full h-full block lg:hidden"
      />
      <img
        src="/section1.png"
        alt="hero"
        className="w-full h-full hidden lg:block"
      />
      <img
        src="/section1mob.png"
        alt="hero"
        className="w-full h-full block lg:hidden"
      />
      <img
        src="/section2.png"
        alt="hero"
        className="w-full h-full hidden lg:block"
      />
      <img
        src="/section2mob.png"
        alt="hero"
        className="w-full h-full block lg:hidden"
      />

      <div className="bg-white h-[155px] lg:flex hidden max-w-7xl mx-10 py-2 p-2 w-full flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between mb-10 lg:px-10 rounded-2xl">
        <img src="/cta.png" alt="hero" className="h-full hidden lg:block" />
        <img
          src="/ctamob.png"
          alt="hero"
          className="h- block lg:hidden rounded-t-2xl"
        />
        <div className="items-center gap-4 py-0 mt-0 pt-8 pr-16 flex">
          <a href=" https://x.com/SelaNetwork">
            <img src="/x.png" alt="hero" className="h-6" />
          </a>
          <a href="https://t.me/SelaNetwork">
            <img src="/tg.png" alt="hero" className="h-6" />
          </a>
          <a href=" https://github.com/sela-network">
            <img src="/git.png" alt="hero" className="h-6" />
          </a>
        </div>
      </div>
      <div className="lg:hidden  bg-white h-full mb-10  font-medium flex flex-col py-8 items-center text-center rounded-2xl w-[90%] space-y-10">
        <div className="flex flex-col items-center justify-center space-y-5">
          {/* <p className="text-black text-xl flex items-center justify-center">
            <img src="/sella.png" alt="hero" className="h-6 mr-2" />
            Sela Network
          </p> */}
          <img src="/Sellaico.png" alt="hero" className="h-6" />
          <img src="/Sellaico1.png" alt="hero" className="h-4" />
          <img src="/Sellaico2.png" alt="hero" className="h-4" />
          {/* <p className="text-black">copyright(c) 2024 All rights reserved</p>
          <p className="text-black">official@selanetwork.io</p> */}
        </div>
        <div className="flex items-center gap-4">
          <a href=" https://x.com/SelaNetwork">
            <img src="/x.png" alt="hero" className="h-6" />
          </a>
          <a href="https://t.me/SelaNetwork">
            <img src="/tg.png" alt="hero" className="h-6" />
          </a>
          <a href=" https://github.com/sela-network">
            <img src="/git.png" alt="hero" className="h-6" />
          </a>
        </div>
      </div>
    </main>
  );
}
