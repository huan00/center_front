const SelectPage = () => {
  return (
    <div>
      <div className="home-greeting">
        <h1 className="home-title">{greeting}</h1>
      </div>
      <div className="home-mood">
        <Mood />
      </div>
      <div className="home-slider">
        <Slider />
      </div>
    </div>
  )
}

export default SelectPage
