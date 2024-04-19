"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const ufoY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]); // Adjust the range as needed

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold backdrop-blur-sm  text-center text-white text-7xl md:text-9xl relative z-10"
      >
        Explore <br />
        Astronomy
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/bg.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20"
        style={{ translateY: ufoY }}
      >
        <Image src="/ufo.png" alt="img" width={500} height={500} />
      </motion.div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/result.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
