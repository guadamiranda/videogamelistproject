import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './tag.css'

const Tag = (tag:any) => {
    return(
        <div className='tagContainer d-flex align-items-center gap-1'>
            <LocalOfferIcon className='iconTagStyle'/> <span>{tag.tag.name} </span>
        </div>
    )
}

export default Tag