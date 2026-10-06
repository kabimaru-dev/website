import React from 'react'
import frierenImage from "../../Images/anime-frieren-visuel-frieren.jpeg"
import animeStyle from "./Anime.module.css"

interface Props {
  id: number;
  title: string;
  description: string;
  year: number;
  somethingElse: string;
}

const Anime = (props: Props) => {
  return (
    <div className="test">
        <img className={animeStyle.frieren} src={frierenImage} alt="" />
        <div className="details">
            <h2>fieren</h2>
            <p>110$</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, accusantium!</p>
    </div>
  )
}

export default Anime