"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const CommunityJoin = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const boxes = gsap.utils.toArray(
        scrollRef.current.children as HTMLCollectionOf<HTMLElement>
      );

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 0,
          scale: 1.2,
          scrollTrigger: {
            trigger: box,
            start: "left bottom",
            end: "center center+=20%",
            scrub: 1,
            ease: "power1.inOut",
          },
        });
      });
    }
  }, [scrollRef]);

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.fromTo(
      container.querySelectorAll(".ufo-animation"),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onEnterBack: () =>
            gsap.to(container.querySelectorAll(".ufo-animation"), {
              opacity: 0,
              y: -50,
              duration: 1,
            }),
        },
      }
    );
  }, [containerRef]);

  return (
    <section>
      <div>
        <div
          ref={containerRef}
          style={{
            backgroundImage: "url('/assets/blackholebg1.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="overflow-hidden"
        >
          <section
            className="flex gap-10 flex-wrap items-center justify-center py-20"
            ref={scrollRef}
          >
            <div>
              <div className="lg:hidden md:hidden block">
                <Image
                  src="/assets/ufo.png"
                  alt="telescope"
                  width={120}
                  height={120}
                  className="ufo-animation"
                />
              </div>
              <div className="w-64 h-64 lg:w-96 lg:h-96 md:w-80 md:h-80">
                <Image
                  src="/assets/austrounat.png"
                  alt="telescope"
                  width={400}
                  height={400}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="lg:block md:block hidden">
                <Image
                  src="/assets/ufo.png"
                  alt="telescope"
                  width={120}
                  height={120}
                  className="ufo-animation"
                />
              </div>
              <div>
                <h1 className="text-center text-sky-600 text-3xl">
                  Join our community
                </h1>
                <p className="text-justify text-text-xs md:text-xl lg:text:xl px-10 max-w-screen-sm backdrop-blur-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque quaerat tenetur error molestiae accusantium iure
                  voluptas maiores, accusamus veritatis sequi aliquid nemo
                  maxime explicabo deserunt. Assumenda veritatis consectetur,
                  ducimus corrupti neque inventore esse? Suscipit, quos.
                  Exercitationem minus voluptas rem voluptatum ex, ratione
                  dolorem enim officiis a modi ipsa quibusdam accusantium neque
                  aperiam consequatur incidunt veritatis repellat itaque
                  cupiditate obcaecati perferendis corporis ipsam ducimus?
                  Quidem
                </p>
                <div className="text-center pt-8">
                  <Link href="/community">
                    <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-800 focus:outline-none focus:bg-purple-700 transition duration-300 ease-in-out">
                      Join Community
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CommunityJoin;
