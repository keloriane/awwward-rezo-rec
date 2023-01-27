import React, { useEffect } from "react";
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import styles from './image.module.css';



interface Image {
    src:string | undefined,
    alt:string | undefined,
    width?:string,
    height:string,
    smoother?:any,
    className?:string

}


const ImageParallax:React.FC<Image> = ({src , alt, width, height, smoother, className}) => {
  
    const img = React.useRef(null);
    useEffect(() => {
        if(smoother) {
            smoother.effects(img.current , {speed: "auto"})
        }

    }, [smoother])
    return (

        <div className={styles.imageContainer} style={{ width:width , height:height}}>
            <img src={src} alt={alt} ref={img} className={className} />
        </div>
    )
}
export default ImageParallax;