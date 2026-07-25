"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

const quickTransition = {
  type: "spring",
  mass: 0.7,
  stiffness: 180,
  damping: 26,
} as const;

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -24px 0px" });
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { x: 0, y: 0, opacity: 1 };

    switch (direction) {
      case "up":
        return { y: 24, opacity: 0 };
      case "down":
        return { y: -24, opacity: 0 };
      case "left":
        return { x: 24, opacity: 0 };
      case "right":
        return { x: -24, opacity: 0 };
      case "none":
        return { opacity: 0 };
    }
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : initial}
      transition={shouldReduceMotion ? { duration: 0 } : { ...quickTransition, delay }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}

export const StaggerContainer = ({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.06,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -24px 0px" });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { x: 0, y: 0, opacity: 1 };

    switch (direction) {
      case "up":
        return { y: 24, opacity: 0 };
      case "down":
        return { y: -24, opacity: 0 };
      case "left":
        return { x: 24, opacity: 0 };
      case "right":
        return { x: -24, opacity: 0 };
      case "none":
        return { opacity: 0 };
    }
  };

  const itemVariants = {
    hidden: getInitialPosition(),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: shouldReduceMotion ? { duration: 0 } : quickTransition,
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
