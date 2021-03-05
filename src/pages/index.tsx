import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["AUTO", "WEBP", "AVIF"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//     </p>
//   </Layout>
// )

// export default IndexPage

function IndexPage() {
  return (
    <Layout>
      <section className=" flex flex-col-reverse lg:flex-row items-center place-content-between hero">
        <div>
          <h2 className="hero__text">
            Hi, I’m <br />
            <span className="hero__text--name">
              Ojonugwa <br /> Justice Alikali
            </span>
          </h2>

          <p className="mb-0 hero__subtext">
            Frontend/Mobile Developer & UI/UX Designer
          </p>
          <StaticImage
            src="../assets/images/underline.svg"
            width={400}
            quality={95}
            // @ts-ignore
            // formats={["AUTO", "WEBP", "AVIF"]}
            alt="Ojonugwa Justice Alikali"
            // style={{ marginBottom: `1.45rem` }}
          />
        </div>

        <StaticImage
          src="../assets/images/profile-img.png"
          width={400}
          quality={95}
          // @ts-ignore
          // formats={["AUTO", "WEBP", "AVIF"]}
          alt="Ojonugwa Justice Alikali"
          className="mb-8 sm:mb-10 lg:mb-0"
          // style={{ marginBottom: `1.45rem` }}
        />
      </section>
    </Layout>
  )
}

export default IndexPage
