import { useState } from 'react';
import './index.css';

import Menu from './components/Menu';
import Toolbar from './components/Toolbar';

function App() {

  const [path, setPath] = useState('');
  const [tree, setTree] = useState([]);

  const createNew = (type) => {
    var name = prompt(type + ' name');
    if(name && isValidName(name)) {
      var newItem = getDefaultSettings(type, name, path);
      var finalTree = [].concat(getFinalTree(tree, path, newItem, name));
      setTree(finalTree);
    }
  }

  return (
    <div className='main-container'>
      <Toolbar createNew={createNew} />
      <hr className='mt-2' />
      <div className='tree mt-4'>
        <Menu tree={tree} setPath={setPath} />
      </div>
      {tree.length > 0 && 
        <div className='alert alert-sm alert-secondary'>
          You can't delete or rename a file or folder,
          This project is about creating a tree of files and folders only.
        </div>
      }
    </div>
    )
}

function getDefaultSettings(type, name, path) {
  switch(type) {
    case "file":
      return {
        type: 'file',
        name: name
      }
    case "folder":
      return {
        type: "folder",
        name: name,
        path: path + '/' + name,
        items: []
      }
  }
}

function getFinalTree(tree, path, newItem, name) {
  var pathArr = path.split('/').slice(1);
  var o = tree;

  for(var str of pathArr) {
    var indx = o.findIndex(e => e.name === str && e.type === "folder");
    o = o[indx].items;
  }
  if(itemAlreadyExist(o, name, newItem.type))
    alert(`This ${newItem.type} name '${name}' is already exist in this directory`);
  else o.push(newItem);

  return tree;
}

function itemAlreadyExist(arr, name, type) {
  var finder = arr.findIndex(e => e.name === name && e.type === type);
  return finder !== -1;
}

function isValidName(name) {
  if(typeof name === 'string') {
    return name.trim() !== "";
  }
  return false;
}

export default App;