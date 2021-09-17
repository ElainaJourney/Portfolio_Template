import React from 'react'

export default function About() {
    const userInfo = {
        name: '',
        profile_pic: 'https://picsum.photos/200/300?person',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    }
    return (
        <div id='About'>
            <h3>ABOUT</h3>
            <img src={userInfo.profile_pic} alt='this is me!' />
            <p>{userInfo.bio}</p>
        </div>
    )
}
