export const Icon = ({ height, ...rest }) => {
  return (
    <img 
      src='/images/icon/icon.svg'
      height={ height + 'px' }
      alt='Icon'
      { ...rest }
    />
  )
}