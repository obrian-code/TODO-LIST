import Button from "../../atoms/Buttoms/Button"
import Input from "../../atoms/Inputs/Inputs"
import "./style.css"

const Login = ()=>{
return (
    <>
        <Input type="text" placeholder ="Correo*"/>
        <Input type="password" placeholder ="Contraseña*"/>
        <Button text="Registrate" data={{nombre:"hola", correo:"asdad"}}/>
    </>
)
}

export {Login}