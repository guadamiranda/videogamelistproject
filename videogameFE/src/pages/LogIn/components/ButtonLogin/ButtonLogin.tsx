import './buttonLogin.css'

const ButtonLogin = (onClickFunction: any) => {

    const handleClick = () => {
        onClickFunction.onClickFunction(true)
      };

    return(
        <div className='buttonLoginContainer d-flex justify-content-center mt-3' onClick={() => handleClick()}>
            Ingresar
        </div>
    )
}

export default ButtonLogin