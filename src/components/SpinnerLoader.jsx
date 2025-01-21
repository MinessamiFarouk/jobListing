import ClipLoader from "react-spinners/ClipLoader"

function SpinnerLoader({loading}) {

  const cssOverride = {
    display : 'block',
    margin : '100px auto'
  }

  return (
    <ClipLoader 
    color='#000'
    loading={loading}
    cssOverride={cssOverride}
    isSize={150}/>
  )
}

export default SpinnerLoader