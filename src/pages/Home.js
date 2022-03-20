import React from 'react'

export default function Home() {
  return (
    <>
    <title>
    Ten's characters | Home
    </title>
    <meta content="Ten's characters | Home" property="og:title" />
    <meta content="This is a catalog of all TenCreator's characters in FiveM RP!" property="og:description" />
    <meta content="https://embed.com/this-is-the-site-url" property="og:url" />
    <meta content="#43B581" data-react-helmet="true" name="theme-color" />

      <div class="recent-char-block">
        <div class="card jeff-edison-card">
          <div class="card-content">
            <h2 class="card-title">
              Jeff edison
            </h2>
            <p class="card-body">
              Young male <br />
            </p>
            <div class="card-buttons">
              <a class="card-button" href="/backstory/Jeff-Edison">
                See backstory
              </a>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}
