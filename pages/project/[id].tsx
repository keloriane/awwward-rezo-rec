import React from 'react'
import { useRouter } from "next/router";
import projects from './../../data/projects.json'
import { useEffect, useState } from "react";
import { ProjectCard } from "../../types/ProjectCard";
import ImageParallax from "../../components/common/ImageParallax";
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import styles from './project.style.module.css'
import Menu from '../../components/Menu/Menu';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
const ProjectPage = () => {
    const [project , setProject] = useState<ProjectCard>()
    const [smoother , setSmoother] = useState({})
    const router = useRouter();
    const {id} = router.query
    React.useEffect(() => {
     
        setSmoother(ScrollSmoother.create({
            wrapper:"#project-container",
            content:"#project-wrapper",
            effects:true
        }))
      
        setProject(projects.find((el) => el.slug === id ))
    }  , [project])

    return (
        <div id="project-container" >
            <Menu />

            {project? <div id="project-wrapper" className={styles.projectWrapper}>
                <div className="title-container">
                        <h1>{project&&project.title}</h1>
                </div>

                <ImageParallax 
                    src={project&&project.image} 
                    alt={project&&project.title}
                    width={"500px"}
                    height={'800px'}
                    smoother={smoother}
                    /> 
                </div>
                : "loading"}
            </div>

    )
}

export default ProjectPage