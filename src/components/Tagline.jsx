import brackets from '../assets/svg/Brackets'
const TagLine = ({className,children}) => {
  return (
    <div className={`tagline flex item-center ${className || ""}`}>
      {brackets('left')}
      <div className='max-3 text-n-3'> {children} </div>
      {brackets('right')}
    </div>
  )
}

export default TagLine
