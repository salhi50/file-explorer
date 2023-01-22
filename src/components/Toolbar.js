import { BsFolderPlus , BsFileEarmarkPlus } from 'react-icons/bs';

function Toolbar({ createNew }) {
	return (
		<div className='btns d-flex justify-content-end'>
			<button
				className='btn p-1 me-3 add-btn'
				onClick={() => createNew('file')}>
				<BsFileEarmarkPlus size="20px" color='#000' />
			</button>
			<button
				className='btn p-1 add-btn'
				onClick={() => createNew('folder')}>
				<BsFolderPlus size="20px" color='#000' />
			</button>
		</div>
	);
}
export default Toolbar;
