import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RandomUser = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios({
      method: "get",
      url: "https://randomuser.me/api",

    }).then((response) => {
      setData(response.data.results[0])
      console.log(response.data.results[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  if (!data) return <>Loading ...</>
  return (
    <div>RandomUser
    </div>
  )
}

export default RandomUser
