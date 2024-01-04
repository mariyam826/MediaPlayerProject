import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div className='container'>
      <div className="row align-items-center m-5">
        <div className="col-lg-5">
          <h2>Welcome to <span className='text-warning'>Media Player</span></h2>
          <p style={{ textAlign: 'justify' }}>Media Player App will allow you to add and remove the uploaded videos, also helps to arranbge them in different categories by providing drag and drop functionalities</p>
          <Link to={'/home'}><button className='btn btn-secondary mt-5 fw-bolder' >Get Started</button></Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid' src="https://media1.tenor.com/m/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
        </div>
      </div>
      <div className="features mb-5">
        <h2 className='text-center'>Features</h2>
        <div className="cards mt-5 d-flex justify-content-between">
          {/* card-1 */}
          <Card style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media1.tenor.com/m/9txCGkE71yAAAAAC/disco-bar-line.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                User can upload, view and remove the videos.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img  width={'300px'} height={'300px'} variant="top" src="https://24.media.tumblr.com/de19cab866c13b4b1765b095d2b6c8fc/tumblr_n3r004VqHj1s99bmjo1_500.gif" />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>
                User can categorise the videos according to their preferences  using drag and drop features.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img  width={'300px'} height={'300px'} variant="top" src="https://68.media.tumblr.com/61062d621383c256ca54b9489bf7d6c9/tumblr_olymb7tUUJ1w6l2y8o1_500.gif"/>
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                User can see the history of watched videos.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mt-5 border rounded align-items-center p-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat corporis dignissimos,</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat corporis dignissimos,</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Watch History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat corporis dignissimos, </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1JLUn2DFW4w?si=09jPjW5SxxEDpW_f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default LandingPage