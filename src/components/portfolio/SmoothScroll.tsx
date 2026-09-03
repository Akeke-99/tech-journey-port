import { useEffect } from "react";

/**
 * Adds restrained inertial scrolling on desktop wheel input while leaving
 * touch, keyboard navigation, scrollbar dragging, and nested scroll areas alone.
 * Anchor links still use the browser's smooth scrolling behavior.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let target = window.scrollY;
    let current = target;
    let frame = 0;

    const animate = () => {
      current += (target - current) * 0.13;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        frame = 0;
        window.scrollTo(0, current);
        return;
      }
      window.scrollTo(0, current);
      frame = window.requestAnimationFrame(animate);
    };

    const isNestedScrollable = (node: EventTarget | null) => {
      let el = node instanceof Element ? node : null;
      while (el && el !== document.body) {
        const style = window.getComputedStyle(el);
        const canScroll = /(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight;
        if (canScroll) return true;
        el = el.parentElement;
      }
      return false;
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (isNestedScrollable(event.target)) return;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;

      event.preventDefault();
      target = Math.max(0, Math.min(max, target + event.deltaY));

      if (!frame) frame = window.requestAnimationFrame(animate);
    };

    const sync = () => {
      if (!frame) {
        target = window.scrollY;
        current = target;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", sync, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", sync);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
