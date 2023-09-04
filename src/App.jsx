function App() {
  return (
    <>
      <section className='landing'>
        <div className='spot'>
          <div className='green-dot' />
          <p>Available</p>
        </div>
        <div className='container'>
          <div className='info'>
            <h1 className='name'>Ahmed Abdelfattah</h1>
            <h4 className='job'>Frontend developer | React</h4>
          </div>
          <div className='image'>
            <img
              src='./images/header.png'
              alt='Ahmed Abdelfattah - Frontend Developer'
            />
          </div>
        </div>
      </section>
      <section className='container'>
        <section className='pt-5 pb-5'>
          <div className='p-5 m-3 d-none d-sm-block d-sm-none  d-md-block'></div>
          <h1 className='pb-5 text-center'>Projects</h1>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-6 mb-4 d-flex align-items-stretch'>
              <div className='card mb-4 card-transition'>
                <img
                  src='./images/cover.jpg'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body d-flex flex-column'>
                  <h5 className='card-title'>Dōtonbori Canalaaa</h5>
                  <p className='card-text text-muted mb-4'>
                    Is a manmade waterway dug in the early 1600s and now
                    displays many landmark commercial locals and vivid neon
                    signs.
                  </p>
                  <div className='btn-container'>
                    <a href='#' className='btn button-live'>
                      Live
                    </a>
                    <a href='#' className=''>
                      <img
                        src='./images/github-dark.png'
                        width={40}
                        height={40}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the above card  */}
          </div>
        </section>
      </section>

      {/* <div className='latest-works'>
          <div className='container'>
            <h2 className='pb-2'>Latest Works</h2>
            <div className='works-card'>
              <ul className='list-group'>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                  <h5 className='work-ar'>السيرة النبوية</h5>
                  <a
                    href='https://play.google.com/store/apps/details?id=com.seira.seiranabawayaa'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='button-live'>Live</button>
                  </a>
                </li>
                <p className='line-break' />
              </ul>
            </div>
          </div>
        </div> */}
      <div className='container-fluid'>
        <h2 className='text-center p-4 mt-3'>Technologies and Tools</h2>
        <div className='tech'>
          <img src='./images/react.svg' height={70} width={70} />
          <img src='./images/redux.svg' height={70} width={70} />
          <img src='./images/vite.svg' height={70} width={70} />
          <img src='./images/next-js.svg' height={70} width={70} />
          <img src='./images/bootstrap.svg' height={70} width={70} />
          <img src='./images/tailwindcss.svg' height={70} width={70} />
          <img src='./images/react-query.svg' height={70} width={70} />
          <img src='./images/node.svg' height={70} width={70} />
          <img src='./images/mongo.svg' height={70} width={70} />

          <img src='./images/postman.svg' height={70} width={70} />
          <img src='./images/swagger.svg' height={70} width={70} />
          <img src='./images/flutter.svg' height={70} width={70} />
        </div>
      </div>

      <footer>
        <div className='d-flex p-2 justify-content-center justify-content-evenly'>
          <a className='mx-2' href='mailto:ahmedabdelfattah0022@gmail.com'>
            <img src='./images/mail.png' height={30} width={30} />
          </a>
          <a
            className='mx-2'
            href='https://wa.me/+201066078954'
            target='_blank'
            rel='noreferrer'
          >
            <img src='./images/whatsapp.png' height={30} width={30} />
          </a>
          <a className='mx-2' href='tel:+201066078954'>
            <img src='./images/call.png' height={30} width={30} />
          </a>

          <a className='mx-2' href='tel:+201066078954'>
            <img src='./images/linkedin.png' height={30} width={30} />
          </a>
          <a className='mx-2' href='tel:+201066078954'>
            <img src='./images/github.png' height={30} width={30} />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
