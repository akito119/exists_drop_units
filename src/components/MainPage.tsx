import React, { useRef,useState,useEffect } from 'react'
import Input from './input';
import NumberInput from './numberinput'
import Judge from './judge'
function MainPage(){
        const [values, setValues] = useState<number[]>([0]);
        const [value, setValue] = useState(0);
    return(
        <>
        <h1>落単簡易判定</h1>
         <div>あなたがとった単位の単位数</div>
         <Input  values={values} setValues={setValues} />
         <br></br>
         <div>今期GPA</div>
         <NumberInput value={value} setValue = {setValue}/>
         <div>(一桁目を合わせてから小数点以下を入力してください)</div>

         <br></br>
         <Judge values = {values} value = {value}/>
        </>
    );
}
export default MainPage