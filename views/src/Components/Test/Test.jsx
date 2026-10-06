import React from 'react'

type Props = {}

const Test = (props: Props) => {
  return (
    <div>
        {
            fetch("https://graphql.anilist.co", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: `{
                    Page(page: 1, perPage: 5) {
                        media(type: ANIME, season: FALL, seasonYear: 2021) {
                        idMal
                        title { romaji english }
                        }
                    }
                    }`
                })
                })
                .then(r => r.json())
                .then(console.log)
                .catch(console.error)
        }
    </div>
  )
}

export default Test