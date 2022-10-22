import './style.css'

interface Props {
    type: string,
    placeholder: string
}

const Input = ({ type, placeholder }: Props) => {
  return <input className="header-input" type={type} placeholder={placeholder} />    
}

export default Input