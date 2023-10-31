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
            <h4 className='job'>React developer</h4>
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
          <div className='p-5 m-3 d-none d-sm-block d-sm-none d-md-block'></div>
          <h1 className='pb-5 text-center'>Projects</h1>
          <div className='row justify-content-center'>
            {/* Start Card col- */}
            <div className='p-5 col-sm-6'>
              <div className='card card-transition'>
                <img
                  src='./images/projects/dashboard-ui-kit.png'
                  className='card-img-top'
                  alt='app'
                />
                <div className='card-body d-flex flex-column'>
                  <h4 className='card-title'>Next.js Dashboard UI Kit</h4>
                  <p className='card-text text-muted mb-4 p-3'>
                    Designed initial layout, integrated Components, suitable and
                    responsive for all screens. Using Next.js, TypeScript,
                    TailwindCSS, Syncfusion, Chart.js, Swiper.js, React icons.
                  </p>
                  <div className='btn-container'>
                    <a
                      href='https://dashboard-ui-kit.vercel.app'
                      className='btn button-live'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Live
                    </a>
                    <a
                      href='https://github.com/abdelfattah90'
                      className=''
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        src='./images/github-dark.png'
                        width={50}
                        height={50}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card col- */}

            {/* Start Card col- */}
            <div className='p-5 col-sm-6'>
              <div className='card card-transition'>
                <img
                  src='./images/projects/proshop.png'
                  className='card-img-top'
                  alt='app'
                />
                <div className='card-body d-flex flex-column'>
                  <h4 className='card-title'>eCommerce MERN Stack App</h4>
                  <p className='card-text text-muted mb-4 p-3'>
                    Shopping cart, product search, upload image, admin area and
                    PayPal integration. Using React vite, Redux Toolkit, Axios,
                    Node.js, Express, JWT, MongoDB.
                  </p>
                  <div className='btn-container'>
                    <a
                      href='https://proshop-tpqo.onrender.com'
                      className='btn button-live'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Live
                    </a>
                    <a
                      href='https://github.com/abdelfattah90'
                      className=''
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        src='./images/github-dark.png'
                        width={50}
                        height={50}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card col- */}

            {/* Start Card col- */}
            <div className='p-5 col-sm-6'>
              <div className='card card-transition'>
                <img
                  src='./images/projects/apple.png'
                  className='card-img-top'
                  alt='app'
                />
                <div className='card-body d-flex flex-column'>
                  <h4 className='card-title'>Apple Store</h4>
                  <p className='card-text text-muted mb-4 p-3'>
                    Multi Languages app, manage and share state by Context API.
                    Using Next.js, TypeScript, TailwindCSS, React-i18next.
                  </p>
                  <div className='btn-container'>
                    <a
                      href='https://appple.vercel.app'
                      className='btn button-live'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Live
                    </a>
                    <a
                      href='https://github.com/abdelfattah90'
                      className=''
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        src='./images/github-dark.png'
                        width={50}
                        height={50}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card col- */}

            {/* Start Card col- */}
            <div className='p-5 col-sm-6'>
              <div className='card card-transition'>
                <img
                  src='./images/projects/seira.png'
                  className='card-img-top'
                  alt='app'
                />
                <div className='card-body d-flex flex-column'>
                  <h4 className='card-title lang-ar'>السيرة النبوية</h4>
                  <p className='card-text text-muted mb-4 p-3'>
                    Using flutter cross platform, shared preferences, and
                    considerate interface segregation principle.
                  </p>

                  <a
                    href='https://play.google.com/store/apps/details?id=com.seira.seiranabawayaa'
                    className='btn button-live'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            {/* End Card col- */}
          </div>
        </section>
      </section>

      <div className='container-fluid'>
        <h2 className='text-center p-4 mt-3'>Technologies and Tools</h2>
        <div className='tech'>
          <img src='./images/javascript.svg' height={70} width={70} />
          <img src='./images/typescript.svg' height={70} width={70} />
          <img src='./images/react.svg' height={70} width={70} />
          <img src='./images/next-js.svg' height={70} width={70} />
          <img src='./images/tailwind-css.svg' height={70} width={70} />
          <img src='./images/redux.svg' height={70} width={70} />
          <img src='./images/axios.svg' height={70} width={70} />
          <img src='./images/postman.svg' height={70} width={70} />
          <img src='./images/node.svg' height={70} width={70} />
          <img src='./images/express.svg' height={70} width={70} />
          <img src='./images/mysql.svg' height={70} width={70} />
          <img src='./images/mongo.svg' height={70} width={70} />
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
