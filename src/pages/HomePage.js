import React from 'react'
import Banner from './components/Banner';
import Navbar from './components/Nav-bar';
import request from './components/Request';
import Rows from './components/Rows';
import './HomePage.scss'

function HomePage() {
  return (
    <div className='Home'>
        <Navbar />
        <Banner />
        
        <Rows title='Netlix Originals' fetchUrl={request.fetchNetflix} isLargeRow={true}/>
        <Rows title='Trending Now' fetchUrl={request.fetchTrending}/>
        <Rows title='Top Rated' fetchUrl={request.fetchTopRated}/>
        <Rows title='Comedy' fetchUrl={request.fetchComedy}/>
        <Rows title='Action' fetchUrl={request.fetchAction}/>
        <Rows title='Documentaries' fetchUrl={request.fetchDocumentaries}/>
        <Rows title='Romance' fetchUrl={request.fetchRomance}/>
    </div>
  )
}

export default HomePage;