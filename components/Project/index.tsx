import React, { useEffect, useState } from 'react';
import styles from "./project.module.css"
import Link from 'next/link';
import gsap from 'gsap';
import { ProjectCard } from '../../types/ProjectCard';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Flip from 'gsap/dist/Flip';






const Project:React.FC<ProjectCard> = ({image, title, type , i, slug}) => {
    gsap.registerPlugin(ScrollTrigger , Flip);

    const projectCard = React.useRef<HTMLImageElement[]>([])
    const projectWrapper = React.useRef<HTMLDivElement>(null)
    const [translate , setTranslate] = useState(0);
    const imagesArray:any[] = [];
    useEffect(() => {
        if(projectWrapper.current){
            gsap.utils.toArray(projectCard.current).forEach((e:any) => {
                console.log(e.parrentElement);
                const heightDiff = e.offsetHeight - projectWrapper.current.offsetHeight ;
               
          gsap.fromTo(e,{ 
            y: -heightDiff
          }, {
            scrollTrigger: {
              trigger: e,
              scrub: true
            },
            y: 0,
            ease: "none"
          });
            })

        }


        
      
        // gsap.fromTo(projectCard.current , { y:"200%" } , {y:0 ,  duration:2,scrollTrigger: {
        //     trigger: ".projectCard",
        //     start:"top 10%",
        //     markers:true
        //   }})
        
    },[  translate])


  

    const addToRefs = (el:HTMLImageElement) => {
        if(el && !projectCard.current.includes(el)){
            imagesArray.push(el)
           projectCard.current.push(el)
        }
    } 

    const parallaxScroll = () => {
            console.log(window.scrollY)
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
                    <div className={styles.innerImage} >
                        <picture>
                            <source />
                            <source />
                            <img ref={addToRefs} src={image} alt="" className={styles.mainImage}  />
                        </picture>

                    </div>

                    
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