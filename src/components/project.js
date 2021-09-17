import './project.css';
import React, { useState } from 'react'

export default function Project(props) {
    const [ isActive, setIsActive ] = useState(false)
    const [ displayGitHub, setDisplayGitHub ] = useState(false)
    const { 
        gitHub, 
        title, 
        description, 
        contributions,
    } = props.proj

    const handleClick = () => {
        setIsActive(true)
        // props.setDisplayProjects(false)
    }

    const handleExit = e => {
        setIsActive(!isActive)
        e.stopPropagation()
        // props.setDisplayProjects(true)
    }

    return (
        <div 
            className={isActive ? 'active_project' : 'project'}
            onClick={handleClick}
        >
             <div className='exit_icon' onClick={handleExit}>
                <i className="lni lni-close"></i>
            </div>
            <div className='background_img'>
                <h3 className='img_title'>{title}</h3>
            </div>
            <div>
                <span className='git_hub'>
                    <a href='github'>
                        <i className="lni lni-github-original"></i>
                    </a>
                </span>
                <h3 
                    className='non_img_title'
                    onMouseEnter={() => setDisplayGitHub(!displayGitHub)}
                    onMouseLeave={() => setDisplayGitHub(!displayGitHub)}
                >
                    {displayGitHub ? 'GitHub' : title}
                </h3>
            </div>
            <div className='proj_texts'>
                <p className='description'>{description}</p>
                <div className='contributions'>{contributions.map((contribution, index) => {
                    return (
                        <p 
                            className='contribution' 
                            key={index}
                        >
                            • {contribution}
                        </p>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}
