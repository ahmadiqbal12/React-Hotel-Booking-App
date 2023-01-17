import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <div className="featuredImg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFZ0agay998vOoARmivligmB0UYbo8KETBA&usqp=CAU" alt="/" />
<div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
        <div className="featuredItem">
            <div className="featuredImg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPhx0u2M6vzIDA71V7jp3T4LFsq1YNj-YWgQ&usqp=CAU" alt="" />                
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
        </div>
        <div className="featuredItem">
            <div className="featuredImg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sTHcsbI5c8Y4Ohm1bK4eO8P8gPCVeWN7uw&usqp=CAU" alt="" />           
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured