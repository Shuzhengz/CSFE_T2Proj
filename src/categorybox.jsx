import {Link} from 'react-router-dom'
export function CategoryBox ({title, id}){
    category_list = [
        'cs','bio','math'
    ]
    const urllink = 'majors/'+category_list[id]
    return (
        <Link className='category' to={urllink}>
            <header>{title}</header> 
            <p>
                pasdoifjapsdoifjapsdoifjapsdoifjapsodfijapsdofijapsdoifjaspdfoijasdpfoijasdpfoijasdfpoiasjdpfoijasdopfjaspdofijaposdifj 
                {title}

            </p>
        
            
        </Link>
    )
}
