import React, {useEffect, useState} from 'react'
import { Wheel } from 'react-custom-roulette'
import { db } from './Auth/Firebase'
import {getDocs, collection} from 'firebase/firestore'

const data = [
    { option: '5' },
    { option: '10' },
    { option: '20' },
  ]

const Main = () => {
  

  const movieRef = collection(db, "Points")

  useEffect(() => {
    const getPoints = async () => {
        try {
            const data = await getDocs(movieRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id:doc.id,
            }))
            console.log(filteredData)
        } catch (error) {
            console.log(error)
        }
    }
    getPoints();
  },[])

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <div>
        <div>
            <h1>Your Points : 10</h1>
        </div>
      <div>
        <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}

            onStopSpinning={() => {
            setMustSpin(false);
            }}
            
        />
        <button onClick={handleSpinClick}>SPIN</button>
      </div>
    </div>
  )
}

export default Main
