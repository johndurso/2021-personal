import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`web designer`, `web developer`, `user experience`, `user interface`]} />
    
    <div className="grid-container aboutPage">
      <div>
        <h2>Experienced web design and development</h2>
        <p>I'm a designer and developer who focuses on building high quality, fully optimized, responsive websites for any business, 
        individual, or non-profit.</p>
      </div>
      <div>
        <p>Today, if your website isn't built to handle every single style, model, and size device, you're missing out on over half of all traffic on the web. 
        A responsive website that loads quickly on all devices is a <strong>must</strong> in {new Date().getFullYear()}. You'll lose up to 40% of site visitors for 
        every second of time they wait for your content to load (after 4 seconds). Don't miss out on potential customers!</p>
      </div>
      <div>
        <h2>Services</h2>
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