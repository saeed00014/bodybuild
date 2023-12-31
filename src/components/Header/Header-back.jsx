const Header = ({image, title, text }) => {
  
  const mystyle = {
    backgroundImage: 
    `url(${image})`
  };

  return (
    <header style={mystyle} className='header-pages' id='header'>
      <div className="header__back-container">
        <div className="content-img">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </header>
  )
}

export default Header