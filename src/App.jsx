function App() {
  return (
    <>
      <div>
        <div className='landing'>
          <div className='container'>
            <div className='info'>
              <h1 className='name'>Ahmed Abdelfattah</h1>
              <h3 className='job'>Frontend developer | React</h3>
            </div>
            <div className='image'>
              <img
                src='./images/header.png'
                alt='Ahmed Abdelfattah - Frontend Developer'
              />
            </div>
          </div>
        </div>
        <div className='latest-works'>
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
        </div>
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
      </div>

      <footer>
        <div className='d-flex justify-content-center justify-content-around'>
          <p className='pt-1'>© Ahmed - {new Date().getFullYear()}</p>
          <div className='d-flex justify-content-around'>
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
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
