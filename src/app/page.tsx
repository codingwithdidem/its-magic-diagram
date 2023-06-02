"use client";
import Image from "next/image";
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <main className="flex min-h-screen flex-col bg-background items-center justify-center">
      <div className="bg-[#1d1c20] min-h-[420px] max-h-[450px] w-[602px] border border-white border-opacity-[0.08] rounded-3xl p-8 overflow-hidden relative">
        {/* Card Info */}
        <div className="z-[100] relative max-w-[400px] text-white">
          <h3 className="mb-2 font-semibold text-xl leading-6">
            Wave goodbye to Lorem Ipsum
          </h3>
          <p className="text-[#a9a9a9] text-[15px] font-medium leading-6 mb-[10px]">
            Magic Copy writes, edits, and rewrites Figma text layers so you can
            design with real copy.
          </p>
        </div>

        {/* Eraser */}
        <div className="z-10 h-full relative top-[-64px] flex">
          <div className="flex w-[500px] h-[56px] rounded-[10px] absolute top-[286px] right-[-52px] shadow-wand scale-[0.8] -rotate-[69deg]">
            <div className="relative z-[5] bg-wand-shaft w-full flex justify-center flex-col items-end">
              <div className="w-[430px] h-1 bg-wand-streak filter blur absolute mr-[-16px] mb-[6px]" />
            </div>
            <div className="z-[5] w-[140px] bg-wand-tip rounded-tr-[14px] rounded-br-[14px]" />
          </div>
        </div>

        {/* Lorem Ipsum */}
        <div className="z-[5] h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 r-[-16px] overflow-hidden">
          {/* Lorem Text */}
          <div className="absolute top-[175px] right-[-116px] w-[684px] max-w-none text-[#272729] bg-[#323238] text-[102px] bg-clip-text font-bold [-webkit-text-fill-color:transparent] tracking-[-3px]">
            Lorem Ipsum
          </div>
          {/* Particles blur */}
          <div className="z-[2] overflow-hidden w-[684px] h-[135px] relative r-[0%] top-[98px] left-[62px] bottom-[0%] shadow-particle-blur"></div>

          {/* Particles */}
          <div className="z-[1] w-[684px] h-[135px] relative top-[-37px] bottom-[0%] left-[62px] right-[0%] overflow-hidden opacity-80">
            <img
              loading="eager"
              src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f6e0109266f276d32960_stars.svg"
              className="z-[4] w-[1660px] max-w-none absolute top-[-111px] bottom-auto left-auto right-[-325px]"
            />

            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              className="w-full h-[270px]"
              options={{
                fpsLimit: 120,
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  collisions: {
                    enable: false,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "destroy",
                    },
                    random: true,
                    speed: 0.9,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 300,
                  },
                  opacity: {
                    value: 0.4,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 2 },
                  },
                },
                detectRetina: true,
                fullScreen: false,
              }}
            />
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
