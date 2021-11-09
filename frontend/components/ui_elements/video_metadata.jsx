import React from 'react'
import { connect } from 'react-redux'

export const VideoMetadata = (props) => {

  return (
    <div className="info-row pad-l-10">
      <ul className="genre-docu-preview">
        {
          props.genres.map(genre => {
            return (<li key={genre.id}>{genre.genre}</li>)
          })
        }
      </ul>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(VideoMetadata)
