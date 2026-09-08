import { motion } from "framer-motion";


const pageVariants = {
    initial: (direction) => ({
        rotateY: direction > 0 ? 90 : -90,
        opacity: 0,
        transformOrigin: direction > 0 ? "left center" : "right center",
    }),

    animate: {
        rotateY: 0,
        opacity: 1,
        transformOrigin: "center center",
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },

    exit: (direction) => ({ 
        rotateY: direction > 0 ? -90 : 90, 
        opacity: 0, 
        transformOrigin: direction > 0 ? "left center" : "right center", 
        transition: { 
            duration: 0.5, 
            ease: [0.4, 0, 1, 1], 
        }, 
    }), 
};

export const PageTransition = ({ children, direction }) => {
    return (
        <motion.div 
            className="page-transition"
            custom={direction} 
            variants={pageVariants} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
        > 
            {children} 
        </motion.div>
    )
}