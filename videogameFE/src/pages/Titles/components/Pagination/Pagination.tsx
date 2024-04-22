import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './pagination.css'

const Pagination = (props:any) => {

    const calculateNewPage = () => {
        props.pageNumber === 1 ? props.changePage(1) : props.changePage(props.pageNumber - 1)
    }

    return(
        <div className='paginationContainer d-flex gap-3 justify-content-center align-items-center'>
            <KeyboardArrowLeftIcon className='iconPagination' onClick={() => calculateNewPage()}/>
            <span className='number'>{props.pageNumber}</span>
            <KeyboardArrowRightIcon className='iconPagination' onClick={() => props.changePage(props.pageNumber + 1)}/>
        </div>
    )
}

export default Pagination