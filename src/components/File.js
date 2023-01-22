import { BsFileEarmark } from 'react-icons/bs';

function File({ file }) {
	return (
		<li className='my-1 ms-3 d-flex align-items-center'>
			<BsFileEarmark size="16px" />
			<span className='ms-2'>{file.name}</span>
		</li>
	);
}

export default File;
