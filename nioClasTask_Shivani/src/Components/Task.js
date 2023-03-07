import React, { useEffect, useState } from 'react'
import './Task.css';
import { MathJaxContext,MathJax } from 'better-react-mathjax';
import axios from 'axios';

function Task() {
    const arr = ['AreaUnderTheCurve_901' , 'BinomialTheorem_901', 'DifferentialCalculus2_901'];
    let [index, setIndex] = useState(0);
    const [questionName, setQuestionName] = useState('');
    useEffect(() => {
        callApi(0);
      },[]);
    const Next= ()=>{
         
         if(index<arr.length-1)
         {
            index++;
            setIndex(index);
            callApi(index);
         }
    }
    const Back= ()=>{
    
        if(index>0)
        {
            index--;
            setIndex(index);
            callApi(index);
        }
    }
 const callApi=(ind)=>{
   var a = arr[ind];
    axios.get(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=`+ a)
      .then(res => {
        setQuestionName((res.data[0]).Question);
        
      })
 }

  return (
    <>
    <MathJaxContext>
      <div className='Main'>
        <MathJax>
          <h2 className='left'>Question {index+1}</h2><br></br>
          <h2>{questionName}</h2></MathJax>
        <div className='container'> 
        <input type='button' className='button' value="Back" onClick={()=>Back()}></input>
        <input type='button' className='button' value="Next" onClick={()=>Next()}></input>
        </div>
      </div>
      </MathJaxContext>
    </>
  )
}

export default Task
