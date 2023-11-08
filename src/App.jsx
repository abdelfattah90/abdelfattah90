const projects = [
  {
    title: 'Next.js Dashboard UI Kit',
    description:
      'Next.js dashboard, integrated Components, suitable and responsive for all screens. Using Next.js, TypeScript, Axios, TailwindCSS, Syncfusion, Chart.js, Swiper.js, React icons.',
    liveLink: 'https://dashboard-ui-kit.vercel.app',
    githubLink: 'https://github.com/abdelfattah90',
    image: './images/projects/dashboard-ui-kit.png',
  },
  {
    title: 'eCommerce MERN Stack App',
    description:
      'Shopping cart, product search, upload image, admin area and PayPal integration. Using React vite, Redux Toolkit, Axios, Node.js, Express, JWT, MongoDB.',
    liveLink: 'https://proshop-tpqo.onrender.com',
    githubLink: 'https://github.com/abdelfattah90',
    image: './images/projects/proshop.png',
  },
  {
    title: 'Apple Store',
    description:
      'Next.js Multi Languages app, using React-i18next package and manage state by Context API.',
    liveLink: 'https://appple.vercel.app',
    githubLink: 'https://github.com/abdelfattah90',
    image: './images/projects/apple.png',
  },
  {
    title: 'السيرة النبوية',
    description:
      'Flutter cross platform, shared preferences, and considerate interface segregation principle.',
    liveLink:
      'https://play.google.com/store/apps/details?id=com.seira.seiranabawayaa',

    image: './images/projects/seira.png',
  },
]

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
          <h1 className='pb-5 text-center'>Projects</h1>
          <div className='row'>
            {projects.map((project, index) => (
              <div className='p-3 col-md-6' key={index}>
                <div className='card card-transition m-4 '>
                  <img
                    src={project.image}
                    className='card-img-top'
                    alt={project.title}
                  />
                  <div className='card-body d-flex flex-column'>
                    <h4 className='card-title lang-ar'>{project.title}</h4>
                    <p className='card-text text-muted  mb-4 p-3'>
                      {project.description}
                    </p>
                    <div className='btn-container'>
                      <a
                        href={project.liveLink}
                        className='btn button-live'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Live
                      </a>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            src='./images/github-dark.png'
                            width={50}
                            height={50}
                            alt='GitHub'
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

          <a className='mx-2' href='https://www.linkedin.com/in/abdelfattah9'>
            <img src='./images/linkedin.png' height={30} width={30} />
          </a>
          <a className='mx-2' href='https://github.com/abdelfattah90'>
            <img src='./images/github.png' height={30} width={30} />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
