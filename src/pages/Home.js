import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  const links = [
    { to: "/slide1", label: "Slide 1 - Fade Slider" },
    { to: "/slide2", label: "Slide 2 - 3D Coverflow" },
    { to: "/slide3", label: "Slide 3 - Auto Scroll" },
    { to: "/slide4", label: "Slide 4 - Thumbnail" },
    { to: "/slide5", label: "Slide 5 - Center Mode" },
    { to: "/slide6", label: "Slide 6 - Cinematic mode"},
    {to: "/slide7",  label: "Slide 7 - Cube"}
  ]

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Slider Demo</h1>

      <div style={styles.list}>
        {links.map((item, i) => (
          <Link key={i} to={item.to} style={styles.link}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "60px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  link: {
    textDecoration: "none",
    color: "#333",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    transition: "0.2s",
  }
}

export default Home