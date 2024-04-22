import './sectionTitle.css'

interface sectionTitle {
    title: string
}

const SectionTitle: React.FC<sectionTitle> = ({title}) => {
    return(
        <div className='sectionListContainer'>
            <span>{title}</span>
        </div>
    )
}

export default SectionTitle