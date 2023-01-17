import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">Studio Apartment with Air Conditioning</span>
        <span className="siFeatures">Entire Studio . 1 bathroom . 21m² 1 full bed</span>
        <span className="siCancelOp">Free cancelation</span>
        <span className="siCancelOpSubtitle">you can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailText">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className='siCheckButton'>See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem
