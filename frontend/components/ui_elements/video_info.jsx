import React from 'react'
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux'

export const VideoInfo = (props) => {
  const { documentary } = props;
  const { t } = useTranslation();
  function displayRuntime () {
    
    let runtime;
    runtime = documentary.runtimeSize.replaceAll("h", t("t"));
    runtime = runtime.replaceAll("min", t("min"));
    runtime = runtime.replaceAll("sec", t("sec"));
     
    return runtime;
  }
  if (!documentary.runtimeSize) return null;
  return (
    <div className="info-row pad-l-10 align-center">
      <h5 className="maturity-rating">{t([documentary.maturityRating])}</h5>
      <h5>{displayRuntime()}</h5>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(VideoInfo)
