import React,{useState} from 'react'
import Celcius from './Celcius'
import ContextApi from './ContextApi'
import Fahrenheit from './Fahrenheit'

function App() {
    const [FValue, setFValue] = useState("")

    function ConvertToC(e) {

        setFValue(e.target.value)

    }
    function CelciusConvert() {

        let C = (FValue - 32) * 5 / 9
        console.log(C)
        setCValue(C)
    }

    
    const[CValue,setCValue] = useState('')

    function ConvertToF(e){
        setCValue(e.target.value)
    }

    function FConvert(){
        let F = CValue*9/5+32
        console.log(F)
        setFValue(F)
    }

    return (
        <div>

            <ContextApi.Provider value={{FValue,CValue ,ConvertToC,ConvertToF ,FConvert,CelciusConvert}}>
                <Celcius />  
                <Fahrenheit />
            </ContextApi.Provider>
        </div>
    )
}

export default App