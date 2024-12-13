import React from "react"
import Layout from "../components/layout"
import Publication from "../components/publication"
import PublicationData from "../../content/publications.yaml"
import PatentData from "../../content/patents.yaml"
import Citations from "../components/citations"
import { StarBorder, Biotech, Fingerprint } from "@mui/icons-material"
import { useStaticQuery, graphql, Link } from "gatsby"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about
          research
        }
      }
    }
  `)

  const selected_publications = PublicationData.filter(
    (publication) => publication.Selected === 1
  ).map((item, index) => (
    <Publication
      key={index}
      title={item.Title}
      authors={item.Authors}
      journal={item.Journal}
      year={item.Year}
      badges={item.URLs || []}
    />
  ))

  const selected_patents = PatentData.filter(
    (patent) => patent.Selected === 1
  ).map((item, index) => (
    <Publication
      key={index}
      title={item.Title}
      authors={item.Inventors}
      journal={"Patent: " + item.Identifier}
      year={item.Year}
      preprint={0}
      badges={item.URLs || []}
    />
  ))

  return (
    <Layout
      pageTitle="About"
      pageDescription="Learn more about me"
      showTitle={false}
    >
      <h3 className="banner cut-corner-tr-bl"><Fingerprint className="media-icon" /> Bio</h3>
      <div dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.about }} className="bio-section text-section"/>
      <h3 className="banner cut-corner-tr-bl"><Biotech className="media-icon" /> Research</h3>
      <div dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.research }} className="research-section text-section" />
      <h3 className="banner cut-corner-tr-bl">
      <StarBorder className="media-icon" /> Highlights{" "}
        <small>
          (<Link to="/publications">full list</Link>)
        </small>
      </h3>
      <div className="text-section">
        <Citations />
        {selected_patents}
        {selected_publications}
      </div>
    </Layout>
  )
}

export default Home
