'use client';

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import { SectionHeading } from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";


export default function Experience() {

    const { ref } = useSectionInView('Experience', 0.75);
    const { theme } = useTheme();

    return (
        <motion.section 
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            id="experience"
            className="scroll-mt-28 mb-28 sm:mb-40 dark:text-gray-50"
            ref={ref}
        >
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.toReversed().map( (experience, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === 'light' ? '#f3f4f6' : '#29303d',
                                border: '1px solid rgba(0,0,0,0.05)',
                                textAlign: 'left',
                                padding: '1.3rem 2rem'
                            }}
                            contentArrowStyle={{
                                borderRight: theme === 'light' ?  "0.4rem solid #9ca3af" : '0.5rem solid rgba(255, 255, 255, 0.5)' 
                            }}
                            date={experience.date}
                            icon={experience.icon}
                            iconStyle={{
                                background: theme === 'light' ? 'white' : '#0d0e12c4',
                                fontSize: '1.5rem',
                            }}
                        >
                            <h3 className="font-semibold capitalize" >{experience.title}</h3>
                            <span className="text-gray-500 font-sm mt-[16px]">{experience.location}</span>
                            <p className="text-gray-700 dark:text-white/75 mt-[14px]">{experience.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </motion.section>
    )
}