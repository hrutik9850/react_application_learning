import { useState } from 'react'
import { InputBox } from './componants'
import UserCurrencyinfo from './hooks/userCurrencyinfo'
import './App.css'
import './assets/bg.png'


function App() {
  const [amount, setAmount] = useState(null)
  const [from , setFrom] = useState('usd')
  const [to , setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = UserCurrencyinfo(from)
  const option = Object.keys(currencyInfo)
    console.log(option)
 

  const swap = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
    setConvertedAmount(amount )
    setAmount(convertedAmount)
  }
  const convert =() =>{
  setConvertedAmount(amount * currencyInfo[to])// Assuming currencyInfo contains exchange rates with currency codes as keys

  }

  return (
    <>
           

   
   <div className="w-full h-screen  bg-emerald-900 flex  flex-wrap  justify-center items-center bg-cover bg-no-repeat"
    style={{ backgroundImage: "url('./assets/bg.png')" }}
   >

    <div className='=w-full'>
      <div className="w-full max-w-md mx-auto border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h3 className='font-bold text-gray-700 font-lg top-9 w-55 p-4 justify-center items-center rounded-lg text-center mb-4'>
             Currency Converter</h3>
          <from onSubmit={(e) =>{
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1 '>
            <InputBox
            lable="Amount"
            amount={amount}
            currencyOpations={option}
            oncurrencyChange={(currency)=>setAmount(amount)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            amountDisable={false} 
            />
            </div>
            <div className='relative w-full h-0.5'>
                <button type ="button" className='absolute  left-1/2 -translate-x-1/2
                -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text -white px-2 py-0.5'
                onClick={swap}>
                  swap
                </button>
              </div>
              <div className=' w-full mt-1 mb-4'>
              <InputBox
              lable ="To"
              amount={convertedAmount}
              currencyOpations={option}
              oncurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable = {true}
              />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white px-4 py3 rounded-lg ' onClick={convert}>
                Convert  
              </button> 
          </from>
      </div>
    </div>
   </div>
    </>
  )
}



export default App
