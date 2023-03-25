import { useEffect,useState } from "react";
import axios from 'axios';
import Header from "../header/header";
import Item from "../item/item";
const Main=()=>{
    const [actionGame, setactionGame] = useState([]);
    const [funnygame, setfunnygame] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:1337/api/action-games?populate=*').then((actiongame)=> {
            // console.log((actiongame.data.data));
            setactionGame(actiongame.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });

        axios.get('http://localhost:1337/api/funny-games?populate=*').then((funnygame)=> {
            console.log((funnygame.data.data));
            setfunnygame(funnygame.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
    },[]);
    return(
        <>
          <Header/>  

          <section>
                <article>Action Games</article>
                {actionGame.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
                <article>Funny Games</article>
                {funnygame.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}
            </section>
        </>
    )
}
export default Main;