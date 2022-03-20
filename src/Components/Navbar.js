import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav>
        <span class="left title">
            <h1>
                Ten's characters
            </h1>
        </span>

        <ul class="navbar right">
            <li class="nav-li nav-txt">
                <a href="/" class="btn nav-btn red-underline">
                    <span class="nav-txt">Home</span>
                </a> 
            </li>
            <li class="nav-li nav-txt">
                <a href="https://discord.com/invite/zbr6TYsX" class="btn nav-btn red-underline">
                    <abbr title="The current server I play on mostly!"><span class="nav-txt">Current server</span></abbr>
                </a>
            </li>
        </ul>
    </nav>
    </>
  )
}
