import React ,{use, useId} from "react";


function InputBox({
    lable, 
    amount ,  
    onAmountChange,
    oncurrencyChange,
    currencyOpations =[],
    selectCurrency ="usd",
    amountDisable = false,
    currencyDisable = false,
    className="",



}) {
            const amountInputId = useId();
    return (    

        <div className={' bg-gray-200 p-3 rounded-lg shadow-2x shadow-emerald-100  text-sm flex ${ClassName}'}>
            <div className="w-1/2">
                <lable htmlFor={amountInputId} className= "text-black/40 mb-2 inline-block">${lable}</lable>
                <input type="number" id={amountInputId} className="border-2 border-blue-500 bg-blue-100-50 bg-opacity-50 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Amount" value={amount} disabled={amountDisable} onChange={(e) => onAmountChange && onAmountChange( Number(e .target.value))} />

            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency type </p>
                <select className=" rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)} disabled={currencyDisable}>
                    {currencyOpations.map((currency) => (
                        <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                    ))}
                </select>
            
            </div>

        </div>

   )
}
export default InputBox