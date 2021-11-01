import React from 'react'
import { connect } from 'react-redux'

export const DocumentaryIndexCard = (props) => {
  const { documentary } = props;
  return (
    <div 
      onMouseOver={ () => props.showModal() }
      
      >
      <img src={documentary.thumbnail} alt={documentary.title} />
      <h5>{documentary.title}</h5>
      <h6>{documentary.maturityRating}</h6>
    </div>
  )
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryIndexCard)
