"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Dictionary, Locale } from "@/i18n/config";
import type { ProjectGallerySlide } from "@/content/site";

type ProjectGalleryCarouselProps = {
  slides: ProjectGallerySlide[];
  locale: Locale;
  dict: Dictionary;
};

type NavIcon = "prev" | "next";

const SWIPE_THRESHOLD = 48;

const CONTROL_CLASS =
  "inline-flex size-9 cursor-pointer items-center justify-center rounded-[8px] border border-hairline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ProjectGalleryCarousel({
  slides,
  locale,
  dict,
}: ProjectGalleryCarouselProps): ReactNode {
  const labelId = useId();
  const dialogTitleId = useId();
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const expandTriggerRef = useRef<HTMLButtonElement>(null);

  const count = slides.length;
  const active = slides[index];
  const canNavigate = count > 1;
  const counterLabel = `${padIndex(index + 1)} / ${padIndex(count)}`;
  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 320, damping: 34, mass: 0.8 };

  function stepSlide(delta: -1 | 1): void {
    if (!canNavigate) return;
    setDirection(delta);
    setIndex((current) => (current + delta + count) % count);
  }

  function goTo(next: number): void {
    if (!canNavigate) return;
    const wrapped = ((next % count) + count) % count;
    if (wrapped === index) return;
    setDirection(wrapped > index ? 1 : -1);
    setIndex(wrapped);
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>): void {
    if (eventTargetIsControl(event.target)) return;
    didSwipe.current = false;
    pointerStartX.current = event.clientX;
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>): void {
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    didSwipe.current = true;
    stepSlide(delta > 0 ? -1 : 1);
  }

  function onStageKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepSlide(-1);
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepSlide(1);
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setExpanded(true);
    }
  }

  function onDialogKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    if (event.key === "Escape") {
      event.preventDefault();
      setExpanded(false);
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepSlide(-1);
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepSlide(1);
    }
  }

  function onSlideClick(event: MouseEvent<HTMLDivElement>): void {
    if (eventTargetIsControl(event.target)) return;
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }
    setExpanded(true);
  }

  useEffect(() => {
    if (!expanded) return;

    const previousOverflow = document.body.style.overflow;
    const expandTrigger = expandTriggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      expandTrigger?.focus();
    };
  }, [expanded]);

  if (!active) return null;

  return (
    <section
      className="mt-12"
      aria-labelledby={labelId}
      aria-roledescription="carousel"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-end justify-between gap-4">
          <h2
            id={labelId}
            className="font-mono text-xs uppercase tracking-[0.12em] text-muted"
          >
            {dict.work.gallery}
            <span className="ml-2 text-ink/40">{counterLabel}</span>
          </h2>
          {canNavigate ? (
            <GalleryNav
              dict={dict}
              onPrev={() => stepSlide(-1)}
              onNext={() => stepSlide(1)}
            />
          ) : null}
        </div>

        <div
          className="relative touch-pan-y overflow-hidden rounded-[10px] border border-hairline bg-surface"
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} / ${count}: ${active.caption[locale]}`}
          tabIndex={0}
          onKeyDown={onStageKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            pointerStartX.current = null;
          }}
        >
          <div
            className="relative aspect-[16/9] w-full cursor-zoom-in"
            onClick={onSlideClick}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={active.src}
                custom={direction}
                variants={slideVariants(Boolean(reduceMotion))}
                initial="enter"
                animate="center"
                exit="exit"
                transition={spring}
                className="absolute inset-0"
              >
                <Image
                  src={active.src}
                  alt={active.alt[locale]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 72rem"
                  quality={90}
                  className="object-cover object-top"
                  priority={index === 0}
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            ref={expandTriggerRef}
            type="button"
            onClick={() => setExpanded(true)}
            className="absolute bottom-3 right-3 z-10 inline-flex cursor-pointer items-center gap-1.5 rounded-[8px] border border-hairline bg-surface/95 px-3 py-2 text-xs font-medium text-ink shadow-[0_1px_2px_rgba(10,10,12,0.08)] transition-colors hover:border-ink/30 hover:bg-ink hover:text-canvas focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <ExpandIcon />
            {dict.work.galleryExpand}
          </button>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{active.caption[locale]}</p>
          {canNavigate ? (
            <GalleryDots
              slides={slides}
              index={index}
              label={dict.work.gallery}
              goToLabel={dict.work.galleryGoTo}
              onSelect={goTo}
            />
          ) : null}
        </div>
      </div>

      <AnimatePresence>
        {expanded ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            tabIndex={-1}
            onKeyDown={onDialogKeyDown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
          >
            <button
              type="button"
              aria-label={dict.work.galleryClose}
              className="absolute inset-0 cursor-pointer bg-ink/70 backdrop-blur-[2px]"
              onClick={() => setExpanded(false)}
            />

            <motion.div
              className="relative z-10 flex max-h-[min(94vh,960px)] w-full max-w-6xl flex-col rounded-[14px] border border-hairline bg-surface p-3 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.55)] sm:p-4"
              initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 10, scale: 0.98 }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 360, damping: 32 }
              }
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <p
                  id={dialogTitleId}
                  className="min-w-0 truncate text-sm font-medium text-ink"
                >
                  {active.caption[locale]}
                  <span className="ml-2 font-normal text-muted">
                    {counterLabel}
                  </span>
                </p>
                <div className="flex shrink-0 items-center gap-2">
                  {canNavigate ? (
                    <GalleryNav
                      dict={dict}
                      onPrev={() => stepSlide(-1)}
                      onNext={() => stepSlide(1)}
                      tone="dialog"
                    />
                  ) : null}
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setExpanded(false)}
                    aria-label={dict.work.galleryClose}
                    className={`${CONTROL_CLASS} bg-canvas text-ink hover:border-ink/30 hover:bg-ink hover:text-canvas`}
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              <div className="relative min-h-0 flex-1 overflow-hidden rounded-[10px] border border-hairline bg-canvas">
                <div className="relative aspect-[16/9] max-h-[calc(94vh-7rem)] w-full">
                  <Image
                    src={active.src}
                    alt={active.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 72rem"
                    quality={95}
                    className="object-contain object-top"
                    priority
                    draggable={false}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function GalleryNav({
  dict,
  onPrev,
  onNext,
  tone = "page",
}: {
  dict: Dictionary;
  onPrev: () => void;
  onNext: () => void;
  tone?: "page" | "dialog";
}): ReactNode {
  return (
    <div className="flex items-center gap-2">
      <CarouselButton
        label={dict.work.galleryPrev}
        onClick={onPrev}
        icon="prev"
        tone={tone}
      />
      <CarouselButton
        label={dict.work.galleryNext}
        onClick={onNext}
        icon="next"
        tone={tone}
      />
    </div>
  );
}

function GalleryDots({
  slides,
  index,
  label,
  goToLabel,
  onSelect,
}: {
  slides: ProjectGallerySlide[];
  index: number;
  label: string;
  goToLabel: string;
  onSelect: (next: number) => void;
}): ReactNode {
  return (
    <div className="flex items-center gap-1.5" role="tablist" aria-label={label}>
      {slides.map((slide, slideIndex) => {
        const selected = slideIndex === index;
        return (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-label={`${goToLabel} ${slideIndex + 1}`}
            onClick={() => onSelect(slideIndex)}
            className={
              selected
                ? "h-1.5 w-5 cursor-pointer rounded-full bg-accent transition-[width,background-color] duration-300"
                : "size-1.5 cursor-pointer rounded-full bg-muted/40 transition-[width,background-color] duration-300 hover:bg-muted/70"
            }
          />
        );
      })}
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  icon,
  tone,
}: {
  label: string;
  onClick: () => void;
  icon: NavIcon;
  tone: "page" | "dialog";
}): ReactNode {
  const toneClass =
    tone === "dialog"
      ? "bg-canvas text-ink hover:border-ink/30 hover:bg-ink hover:text-canvas"
      : "bg-surface text-ink hover:border-ink/30 hover:text-accent";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`${CONTROL_CLASS} ${toneClass}`}
    >
      <ChevronIcon direction={icon} />
    </button>
  );
}

function slideVariants(reduceMotion: boolean) {
  return {
    enter: (dir: number) => ({
      x: reduceMotion ? 0 : dir > 0 ? "12%" : "-12%",
      opacity: 0,
      filter: reduceMotion ? "blur(0px)" : "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      x: reduceMotion ? 0 : dir > 0 ? "-8%" : "8%",
      opacity: 0,
      filter: reduceMotion ? "blur(0px)" : "blur(3px)",
    }),
  };
}

function padIndex(value: number): string {
  return String(value).padStart(2, "0");
}

function eventTargetIsControl(target: EventTarget): boolean {
  return (target as HTMLElement).closest("button") !== null;
}

function ChevronIcon({ direction }: { direction: NavIcon }): ReactNode {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={direction === "prev" ? undefined : "rotate-180"}
    >
      <path
        d="M9.75 3.5 5.25 8l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon(): ReactNode {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M8.5 2H12v3.5M5.5 12H2V8.5M12 2 8.25 5.75M2 12l3.75-3.75"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon(): ReactNode {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
