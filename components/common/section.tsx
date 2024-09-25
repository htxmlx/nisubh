"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="py-[4.5rem] p-2 space-y-2 max-w-screen-sm mx-auto"
        >
            {children}
        </motion.div>
    );
}
