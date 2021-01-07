import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`web designer`, `web developer`, `user experience`, `user interface`]} />
    
    <div className="aboutPage">
        <div className="johnAvatar">
          <img src="dog-icon.png"></img>
        </div>
      <div>
        <h2>About John</h2>
        <p>I am a web designer and front-end web developer with experience in building large-scale and small boutique websites and applications. I spent the early part of my career with two different small agencies managing Wordpress sites, running social media campaigns, and building websites using HTML5, CSS3, and Javascript. Today, I'm involved in multiple different teams across <a target="_blank" rel="noreferrer" href="https://www.thomsonreuters.com/en.html">Thomson Reuters</a> handling website migrations, influencing design direction, and even had the pleasure of being apart of the small team that built the <a a href="_blank" rel="noreferrer" href="https://www.thomsonreuters.com/en/resources/covid-19.html">Thomson Reuters COVID-19 Resource Center</a>.</p>
      </div>
      <div>
        <h3>During my free time</h3>
        <p></p>
      </div>
      <div>
        <h3>Services</h3>
        <ul>
          <li><span>Web Design/Development</span>
            <ul>
              <li>Designing and buidling a website that meets your needs.</li>
            </ul>
          </li>
          <li><span>SEO/SEM Optimization</span>
            <ul>
              <li>Ensuring you're utilizing the best content in your site to produce strong search engine ranking results.</li>
            </ul>
          </li>
          <li><span>General Website Maintenance</span>
            <ul>
              <li>Organizing code, eliminating redundant or unnecessary characters, and minimizing file sizes to promote future under-the-hood accessibility.</li>
            </ul>
          </li>
          <li><span>Website Optimization</span>
            <ul>
              <li>Decreasing load time, increasing responsiveness, and generally optimizing site performance.</li>
            </ul>
          </li>
          <li><span>SSL Authentication</span>
            <ul>
              <li>Enabling security compatibility with all browsers.<br />
              <sup><strong style={{ color: `#FF7D7D`, fontSize: `10px`, }}>*Required for Google Chrome, Mozilla Firefox, and Safari beginning in 2019.</strong></sup></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default AboutPage