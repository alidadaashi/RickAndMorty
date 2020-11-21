import React from 'react'

const Card = ({ data }) => {
  const colors = ["","green","yellow","blue"]
  
  return (
    
    <div className="card-container">
      {
        data.map((item,index) => 
          {
            let date = new Date(item.created);
          return (

            
          <div key={item.id} className={`card ${colors[index%colors.length]}`} >
        <div className="additional">
          <div className="user-card">
            <div className="level center">
              {item.status}
          </div>
            <div className="points center">
              {item.species}
          </div>
            <img className="user-avatar" src={item.image} />
  
          </div>
          <div className="more-info">
          <h1>{item.name}</h1>
            <div className="coords">
              <span>Gender</span>
              <span>{item.gender}</span>
            </div>
            <div className="coords">
              <span>Location</span>
              <span>{item.location.name}</span>
            </div>
            <div className="stats">
              <div>
                <div className="title">Episodes</div>
                <i className="fa fa-trophy"></i>
          <div className="value">{item.episode.length}</div>
              </div>
              <div>
                <div className="title">Created</div>
                <i className="fa fa-gamepad"></i>
                <div className="value">{ date.getFullYear()+'/'+(date.getMonth()+1) + '/'+date.getDate()}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>{item.name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
          <span className="more">Mouse over the card for more info</span>
        </div>
      </div>


        )})
      }

      
    </div>
  )
}

export default Card;