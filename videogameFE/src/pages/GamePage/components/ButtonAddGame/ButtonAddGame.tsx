import './buttonAddGame.css'

const ButtonAddGame = (onClickFunction: any) => {

    const handleClick = () => {
        onClickFunction.onClickFunction(true)
      };

    return(
        <div className='buttonAddContainer d-flex justify-content-center mt-3' onClick={() => handleClick()}>
            Agregar
        </div>
    )
}

export default ButtonAddGame