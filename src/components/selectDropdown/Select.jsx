import React, {useState} from 'react'
import '../selectDropdown/select.css'

const Select = () => {
    const [isOpenDrop, setIsOpenDrop] = useState(false)

    const openDrop = () => {
        setIsOpenDrop(!isOpenDrop)
    }

    return (
        <div className="selectDrop cursor-pointer me-2">
            <span 
                className='openDrop'
                onClick={openDrop}
            >
                All Categories
            </span>
            {
                isOpenDrop === true &&
                <div className='selector'>
                    <div className="searchField">
                        <input 
                            type="text" 
                            placeholder='Search categories'
                        />
                        <ul className='selectcategory'>
                            <li onClick={openDrop}>Pishori</li>
                            <li onClick={openDrop}>Komboka</li>
                            <li onClick={openDrop}>Brown</li>
                            <li onClick={openDrop}>Bran</li>
                            <li onClick={openDrop}>Husk</li>
                            <li onClick={openDrop}>Broken</li>
                        </ul>
                    </div>
                </div>
            }
            
        </div>
        
    )
}

export default Select
