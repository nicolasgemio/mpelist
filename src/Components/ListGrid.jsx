import { ListItem } from "./ListItem";
import { StatusMovieBar } from "./StatusMovieBar";
import list from "../Data/list.json";
import { React } from "react";


export function ListGrid(){
    /*const [currentList, setCurrentList] = useState(list);

    const changeStatus = (newStatus) => {
      setCurrentList(list.filter(i => i.Status == newStatus));
    }*/

    return (<div className="list-group listGrid">
        <StatusMovieBar></StatusMovieBar>
        <br/> 
        {
          list.map((item) => { return (<ListItem key={item.Id} Item={item}></ListItem>)} )
        };

  </div>)
}