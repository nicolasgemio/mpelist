import { ListItem } from "../Components/ListItem";
import { StatusMovieBar } from "../Components/StatusMovieBar";
import { useEffect, useState, React } from "react";
import { getLists } from '../firebase/dataService';

export function ListGrid(props){
  const [ currentList, setCurrentList ] = useState([]);
  const [ listStatus, setListStatus ] = useState(0);
  
  const updateList = async function(){
    let datos = await getLists();
    setCurrentList(datos);
  }

  useEffect(() => {
    const get = async() => {
      let datos = await getLists();
      setCurrentList(datos);
    }
    get();
  },[]);

    return (<div className="list-group listGrid">
      <StatusMovieBar setListStatus={setListStatus}></StatusMovieBar>
      <br/> 
      {
        String(listStatus) === String(0) ?
        currentList.map((item) => { return (<ListItem updateList={updateList} key={item.id} Item={item}></ListItem>)}) :
        currentList.filter(i => String(i.listStatus) === String(listStatus)).map((item) => { return (<ListItem updateList={updateList} key={item.id} Item={item}></ListItem>)})
      }
  </div>)
}