import React from 'react'
import Anime from '../Anime/Anime'

type Props = {}

const AnimeList = (props: Props) => {
  return (
    <div>
        <Anime id={0} title='Frieren' year={2023} description='' somethingElse=''/>
        <Anime id={1} title='' year={0} description='' somethingElse=''/>
        <Anime id={2} title='' year={0} description='' somethingElse=''/>
    </div>
  )
}

export default AnimeList