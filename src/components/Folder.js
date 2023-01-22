import { useState } from 'react';
import Menu from './Menu';
import { FcFolder , FcOpenedFolder } from 'react-icons/fc';

function Folder({ folder , setPath }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    var bol = !isOpen;
    setPath(bol ? folder.path : '');
    document.querySelectorAll('.highlight').forEach(e => {
      e.classList.remove('highlight');
    })
    setIsOpen(bol);
  }
  
  const properties = {
    highlight: isOpen ? ' highlight' : '',
    chevronDirection: isOpen ? 'down' : 'right',
    folderIcon: isOpen ? <FcOpenedFolder size='20px' /> : <FcFolder size='20px' />
  }

	return (
		<li className='my-1'>
			<button 
        className={'btn folder w-100 d-block d-flex align-items-center p-0' + properties.highlight}
        onClick={handleClick}
      >
        <i className={"bx bx-chevron-" + properties.chevronDirection} />
        {properties.folderIcon}
        <span className='ms-2'>{folder.name}</span>
      </button>
      {isOpen && <Menu tree={folder.items} setPath={setPath} />}
		</li>
	);
}

export default Folder;
