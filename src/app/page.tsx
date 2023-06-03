"use client";

import { MouseEvent, useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useTransform,
} from "framer-motion";
import { loadFull } from "tsparticles";

export default function Home() {
  let mouseX = useMotionValue(-50);
  let mouseY = useMotionValue(-50);

  // - 50 is magic number used for mouseleave

  // x en son -1 ve 601 oluyor
  let clientX = useTransform(
    mouseX,
    [-50, 42, 560, 601],
    [-470, -514, 250, 285]
  );
  let clientY = useTransform(mouseY, [-50, -1, 419], [41, -80, 23]);
  let rotateZ = useTransform(mouseX, [-1, 601], [-25, 0]);

  let loremContainerX = useTransform(
    mouseX,
    [-50, 70, 560, 621],
    [10, 0, 650, 700]
  );
  let loremX = useTransform(mouseX, [-50, 70, 560, 601], [-10, 0, -650, -700]);

  let magicContainerX = useTransform(
    mouseX,
    [-50, 270, 370, 521],
    [-800, -320, -180, 0]
  );

  let magicX = useTransform(mouseX, [-50, 270, 370, 521], [800, 320, 180, 0]);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    console.log({
      x: clientX - left,

      y: clientY - top,
    });
  };

  const particlesInit = useCallback(async (engine: Engine) => {
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
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(-50);
          mouseY.set(-50);
        }}
        className="bg-[#1d1c20] min-h-[420px] max-h-[450px] w-[602px] border border-white border-opacity-[0.08] rounded-3xl p-8 overflow-hidden relative"
      >
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
        <motion.div
          style={{
            willChange: "transform",
            transition: "transform 0.1s linear",
            transform: useMotionTemplate`translate3d(${clientX}px, ${clientY}px, 0px)
            rotateZ(${rotateZ}deg)
            `,
            transformStyle: "preserve-3d",
          }}
          className="z-10 h-full relative top-[-64px] flex"
        >
          <div className="flex w-[500px] h-[56px] rounded-[10px] absolute top-[286px] right-[-52px] shadow-wand scale-[0.8] -rotate-[69deg]">
            <div className="relative z-[5] bg-wand-shaft w-full flex justify-center flex-col items-end">
              <div className="w-[430px] h-1 bg-wand-streak filter blur absolute mr-[-16px] mb-[6px]" />
            </div>
            <div className="z-[5] w-[140px] bg-wand-tip rounded-tr-[14px] rounded-br-[14px]" />
          </div>
        </motion.div>

        {/* Its magical */}
        <motion.div
          className="z-[5] flex flex-col items-center justify-center h-full overflow-hidden absolute top-0 left-0 bottom-0 right-0 l-[16px]"
          style={{
            willChange: "transform",
            transition: "transform 0.1s linear",
            transform: useMotionTemplate`translate3d(${magicContainerX}px, 0px, 0px)`,
          }}
        >
          <motion.img
            className="w-[530px] relative top-[47px] right-[3px]"
            src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6412537be41c11523b118a34_It%E2%80%99s%20magical..svg"
            style={{
              willChange: "transform",
              transition: "transform 0.1s linear",
              transform: useMotionTemplate`translate3d(${magicX}px, 0px, 0px)`,
            }}
          />
        </motion.div>

        {/* Lorem Ipsum */}
        <motion.div
          style={{
            willChange: "transform",
            transition: "transform 0.1s linear",
            transform: useMotionTemplate`translate3d(${loremContainerX}px, 0px, 0px)`,
          }}
          className="z-[5] h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 r-[-16px] overflow-hidden"
        >
          {/* Lorem Text */}
          <motion.div
            style={{
              willChange: "transform",
              transition: "transform 0.1s linear",
              transform: useMotionTemplate`translate3d(${loremX}px, 0px, 0px)`,
            }}
            className="absolute top-[161px] right-[-117px] w-[684px] max-w-none text-[#272729] bg-[#323238] text-[102px] bg-clip-text font-bold [-webkit-text-fill-color:transparent] tracking-[-3px]"
          >
            Frontend devs ♥
          </motion.div>
          {/* Particles blur */}
          <motion.div
            style={{
              willChange: "transform",
              transition: "transform 0.1s linear",
              transform: useMotionTemplate`translate3d(${loremX}px, 0px, 0px)`,
            }}
            className="z-[2] overflow-hidden w-[684px] h-[135px] relative r-[0%] top-[98px] left-[62px] bottom-[0%] shadow-particle-blur"
          ></motion.div>

          {/* Particles */}
          <motion.div
            style={{
              willChange: "transform",
              transition: "transform 0.1s linear",
              transform: useMotionTemplate`translate3d(${loremX}px, 0px, 0px)`,
            }}
            className="z-[1] w-[684px] h-[135px] relative top-[-37px] bottom-[0%] left-[62px] right-[0%] overflow-hidden opacity-80"
          >
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
          </motion.div>
          <div></div>
        </motion.div>
      </div>
    </main>
  );
}
