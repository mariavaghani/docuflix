import React from 'react'
import { connect } from 'react-redux'

export const DocumentaryIndexCard = (props) => {
  const { documentary } = props;
  return (
    <div 
      onMouseOver={ () => props.showModal() }
      >
      <img
        src={documentary.thumbnail}
        alt={documentary.title} 
        className="index-thumbnail"
      />
    </div>
  )
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryIndexCard)
