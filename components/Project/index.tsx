import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from "./project.module.css"
import Link from 'next/link';
import gsap,{Power1} from 'gsap';
import { ProjectCard } from '../../types/ProjectCard';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {ScrollSmoother} from 'gsap/dist/ScrollSmoother';
import Flip from 'gsap/dist/Flip';
import ImageParallax from '../common/ImageParallax';



const Project:React.FC<ProjectCard> = ({image, title, type , i, slug, smoother}) => {
    gsap.registerPlugin(ScrollTrigger , Flip , ScrollSmoother);
    const projectCard = React.useRef<HTMLImageElement[]>([])
    const projectWrapper = React.useRef<HTMLDivElement>(null)
    const [translate , setTranslate] = useState(0);
    const imagesArray:any[] = [];
    useEffect(() => {
       
       
    },[])


  

    const addToRefs = (el:HTMLImageElement) => {
        if(el && !projectCard.current.includes(el)){
            imagesArray.push(el)
           projectCard.current.push(el)
        }
    } 
    return (
        <div 
        className={styles.projectCard} 
        style={i&&i % 2=== 1 ? {left:0} : {right:0,flexDirection:"row-reverse"}}        
        >
            <Link href={`/project/${slug}`} >
                <div className={styles.projectWrapper} ref={projectWrapper} style={i&&i%2=== 0 ? {left:0,flexDirection:"row-reverse"} : {right:0}} >
                <div className={styles.projectImage}>
                    <div className={styles.projectImageWrapper}></div>
                    <ImageParallax
                        src={image}
                        alt={title}
                        height={"46vw"}
                        width={"63vw"}
                        className='projectImage'
                        smoother={smoother}
                        
                        
                    />

                    
                </div>
                </div>
            </Link>
            <div className="project-description">
                    <div className="line"></div>
                    <div className={styles.projectHeadline} style={i&&i%2=== 0 ? {right:-10} : {left:-10}}>
                       
                        <h4>{type}</h4>
                        <h3>{title}</h3>
                    </div>
                </div>
        </div>
    )
}

export default Project;