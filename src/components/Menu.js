import Folder from './Folder';
import File from './File';

function Menu({ tree, setPath}) {
	return (
		<ul className='list-unstyled ps-3 directory'>
			{/* Folders */}
			{tree.filter(e => e.type == "folder")
			.map((item, indx) => <Folder key={indx} folder={item} setPath={setPath} />)
			}
			{/* Files */}
			{tree.filter(e => e.type == "file")
			.map((item, indx) => <File key={indx} file={item} />)
			}
		</ul>
	);
}

export default Menu;
