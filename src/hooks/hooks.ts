import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"
import type { SectionName } from "@/types/types";

export const useSectionInView = (sectionName: SectionName, threshold: number = 0.5) => {
    const {ref, inView} = useInView({
        threshold
      });
      const { setActiveSection, lastTimeClick } = useActiveSectionContext();
      
      useEffect(() => {
        if(inView && Date.now() - lastTimeClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [setActiveSection, inView, lastTimeClick, sectionName, threshold]);

      return {
        ref
      }
}