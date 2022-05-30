import { ListItem } from "./ListItem";
import { StatusMovieBar } from "./StatusMovieBar";

export function ListGrid(){
    return (<div className="list-group listGrid">
        <StatusMovieBar></StatusMovieBar>
        <br/>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
  </div>)
}