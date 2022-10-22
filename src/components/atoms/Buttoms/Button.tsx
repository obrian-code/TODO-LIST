import './style.css'

interface Props{
    text: string
    data: {
        nombre:string;
        correo:string;
    }
}

const Button = ({ text, data }: Props) => {
  return (
    <button className="container-form-btn">      
      {text}      
    </button>
  )
}

export default Button