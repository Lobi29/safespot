import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="left">
          <div className="heading">
            <h2>Search By location</h2>
          </div>
          <hr className="horizontal-row" />
          <form action="">
            <div className="location">
              <div className="box">
                <input type="text" className="input" placeholder="country" />
              </div>
              <div className="box">
                <input type="text" className="input" placeholder="state" />
              </div>
              <div className="box">
                <input type="text" className="input" placeholder="country" />
              </div>
              <div className="submitBox">
                <button type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home;