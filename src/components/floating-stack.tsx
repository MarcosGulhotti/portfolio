"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  SiDocker,
  SiExpo,
  SiGraphql,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  type IconType,
} from "@icons-pack/react-simple-icons";
import type { Dictionary } from "@/i18n/config";
import { stack } from "@/content/site";

const icons: Record<(typeof stack)[number]["id"], IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  expo: SiExpo,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  nestjs: SiNestjs,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  jest: SiJest,
  docker: SiDocker,
  vercel: SiVercel,
};

export function FloatingStack({ dict }: { dict: Dictionary }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="stack"
      className="mx-auto max-w-3xl px-5 pb-2 pt-1 sm:px-8"
      aria-labelledby="stack-heading"
    >
      <h2
        id="stack-heading"
        className="mb-2 font-mono text-xs uppercase tracking-[0.12em] text-muted"
      >
        {dict.stack.title}
        <span className="ml-2 text-ink/40">— {stack.length}</span>
      </h2>
      <p className="sr-only">{dict.stack.description}</p>

      <div className="relative h-14 overflow-visible sm:h-16">
        <ul className="sr-only">
          {stack.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        <div aria-hidden className="absolute inset-0">
          {stack.map((item) => {
            const Icon = icons[item.id];
            const isActive = active === item.id;

            return (
              <motion.div
                key={item.id}
                className="absolute -translate-x-1/2"
                style={{
                  top: item.position.top,
                  left: item.position.left,
                }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -item.motion.y, 0],
                        x: [0, item.motion.x, 0],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: item.motion.duration,
                        delay: item.motion.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              >
                <button
                  type="button"
                  tabIndex={-1}
                  aria-hidden
                  className="group relative flex flex-col items-center outline-none"
                  onMouseEnter={() => setActive(item.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <motion.span
                    className="flex size-9 items-center justify-center text-muted/45 transition-colors group-hover:text-ink sm:size-10"
                    whileHover={reduceMotion ? undefined : { scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 420, damping: 24 }}
                  >
                    <Icon size={20} color="currentColor" title="" />
                  </motion.span>

                  <span
                    className={`pointer-events-none absolute top-full mt-0.5 whitespace-nowrap font-mono text-xs uppercase tracking-[0.1em] transition-opacity duration-200 ${
                      isActive ? "opacity-100 text-muted" : "opacity-0"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
