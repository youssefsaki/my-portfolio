'use client';

import { skillsData } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";

const fadeInFadeOutVariant = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) =>  ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

export const Skills = () => {

    const { ref } = useSectionInView('Skills', 0.75);

    return (
        <motion.section 
            ref={ref} 
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
            id="skills"
            initial={{ y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
        >
            <SectionHeading>My Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-sm sm:text-lg text-gray-500">
                { skillsData.map(( skill, index) => (
                    <motion.li 
                        variants={fadeInFadeOutVariant}
                        initial='initial'
                        whileInView='animate'
                        viewport={
                            { once: true }
                        }
                        key={index}
                        className="bg-white border border-black/[0.1] px-5 py-3 rounded-xl dark:bg-white/10 dark:text-white/80"
                        custom={index}
                        >{skill}</motion.li>
                ))}
            </ul>
        </motion.section>
    )
}