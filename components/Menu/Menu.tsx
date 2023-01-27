import React from "react";
import Link from "next/link";

export default function Menu(){
    return (
        <div className="menu">
            <nav>
                <ul>
                    <li><Link href="#">
                        Home
                        </Link></li>
                    <li><Link href="#">
                        About
                        
                        </Link></li>
                    <li>
                        <Link href="#">Projects</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}