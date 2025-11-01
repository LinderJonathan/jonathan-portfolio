import '../App.css'

function Container() {
  return (
    <>
      <div className="home-container">
        <h1 id="message" className="home-message">Hi, I'm Jonathan</h1>

        <div className="container-block right">
        <div className="image-crop">
            <img src="/static/img/profile.jpg" alt="Profile picture"></img>
        </div>
        </div>


        <div className="container-block right">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At illo dolorem suscipit quibusdam odio,
                reiciendis nobis consequuntur ad reprehenderit ipsum animi sapiente nihil incidunt voluptates
                voluptas, corporis impedit, sint sed!
            </p>
        </div>
        <div className="container-block left">
            <p>this is some future content block that is supposed to be alligned to the left</p>
        </div>
        <div className="container-block right">
            <p>test test test test test test test test test test test test test test test test </p>
        </div>
      </div>
    </>
  )
}

export default Container