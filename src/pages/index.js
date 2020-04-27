import React from 'react'
import Helmet from 'react-helmet'
import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import full07 from '../assets/images/fulls/07.jpg'
import full08 from '../assets/images/fulls/08.jpg'
import full09 from '../assets/images/fulls/09.jpg'
import full10 from '../assets/images/fulls/10.jpg'
import full11 from '../assets/images/fulls/11.jpg'
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'
import thumb09 from '../assets/images/thumbs/09.jpg'
import thumb10 from '../assets/images/thumbs/10.jpg'
import thumb11 from '../assets/images/thumbs/11.jpg'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'The journey of escape',
    description: 'Medium- Charcoal on A3 sheet',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Brown and bold',
    description: 'Medium- Soft pastels on A3 sheet',
  },
  {
    id: '3',
    source: full11,
    thumbnail: thumb11,
    caption: 'Milk and honey ',
    description: 'Medium - Poster paints on canvas 24"× 24"',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Shourya Saluja',
    description: 'Medium - 3B,4B and 5B pencils on 7"×9" sheet',
  },
  {
    id: '5',
    source: full06,
    thumbnail: thumb06,
    caption: 'Hurtful hope',
    description: 'Medium - Glass marking pencil on A3 black pastel sheet',
  },
  {
    id: '6',
    source: full05,
    thumbnail: thumb05,
    caption: 'Glorious and distressed',
    description: 'Medium - Charcoal on A3 sheet',
  },
  {
    id: '7',
    source: full07,
    thumbnail: thumb07,
    caption: 'Calligraphy',
    description: 'Font- German text, Chancery ( top: left to right), Crowquill (bottom)',
  },
  {
    id: '8',
    source: full08,
    thumbnail: thumb08,
    caption: 'Paper quilling',
    description: 'Medium- Quilling strips',
  },
  {
    id: '9',
    source: full10,
    thumbnail: thumb10,
    caption: 'The Nobel Eagle',
    description: 'Medium- Charcoal on A3',
  },
  {
    id: '10',
    source: full09,
    thumbnail: thumb09,
    caption: 'Enlightenment',
    description: 'Medium- Acrylic paints on canvas',
  },
  {
    id: '11',
    source: full03,
    thumbnail: thumb03,
    caption: 'Summertime sweetness',
    description: 'Medium - Soft pastels on A3 sheet',
  }  
]

const HomeIndex = () => {
  const siteTitle = 'Soumya Aggarwal'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
       <section id="two">
        <h2>Recent Work</h2>
          <Gallery
            images={DEFAULT_IMAGES.map(
              ({ id, source, thumbnail, caption, description }) => ({
                source,
                thumbnail,
                caption,
                description,
              })
            )}
          />  
        </section>
        {/* <section id="three">
          <h2>Get in Touch</h2>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>  
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button className="button" type="submit">Send</button>
          </p>
        </form>
        </section> */}
      </div>
    </Layout>
  )
}

export default HomeIndex
