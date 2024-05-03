import {CategoryBox} from './categorybox.jsx'
export function Majors() {
    return (
        <>
        
        <div className='category-container'>
            <CategoryBox
            title='computer science'
            />
            <CategoryBox
            title='biology'
            />
            <CategoryBox
            title='hee hee'
            />
            <CategoryBox
            title='math'
            />
            
        </div>
        <div className='category-container'>
            <CategoryBox
                title='engineering'
                />
            <CategoryBox
                title='health'
                />
            <CategoryBox
                title='nursing'
                />
            <CategoryBox
                title='physics'
                />
        </div>
        
        </>
        
    )
}
