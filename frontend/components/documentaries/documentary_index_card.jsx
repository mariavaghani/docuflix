import React from 'react'
import { connect } from 'react-redux'

export const DocumentaryIndexCard = (props) => {
  const { documentary } = props;
  return (
    
    <img
      src={documentary.thumbnail}
      alt={documentary.title} 
      className="index-thumbnail"
    />
    
  )
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryIndexCard)
