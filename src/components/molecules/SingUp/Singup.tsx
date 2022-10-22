import Input from "../../atoms/Inputs/Inputs"
import Button from "../../atoms/Buttoms/Button"

const Singup = () =>{
    return (
        <>
            <Input type="text" placeholder ="Nombre*"/>
            <Input type="text" placeholder ="Email*"/>
            <Input type="text" placeholder ="Contraseña*"/>
            <Input type="text" placeholder ="Contraseña*"/>
            <Button text="Registrate" data={{nombre:"hola", correo:"asdad"}}/>
        </>
    )
}

export default Singup