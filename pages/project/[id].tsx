import { useRouter } from "next/router";
import projects from './../../data/projects.json'
import { useEffect, useState } from "react";
import { ProjectCard } from "../../types/ProjectCard";

const ProjectPage = () => {
    const [project , setProject] = useState<ProjectCard>()
    const router = useRouter();
    const {id} = router.query
    useEffect(() => {

        setProject(projects.find((el) => el.slug === id ))
    }  , [project])


    return (
        <>
        <h1>{project&&project.title}</h1>
        <picture>
                            <source />
                            <source />
                            <img id={"smooth-content"}  src={project&&project.image} alt="" />
                        </picture>
        </>

    )
}

export default ProjectPage