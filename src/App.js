import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useInterval } from 'usehooks-ts'

import './App.css';






function App() {

  

  const [questions , setQuestions] = useState([
    {
      question: "How can you select an HTML element with the class 'btn' using a CSS selector?",
      options: [
         ".btn { ... }",
         "btn { ... }",
         "#btn { ... }",
         "button.btn { ... }"
      ],
      answer: ".btn { ... }"
   },
   {
    question: "Which CSS property is used to change the spacing between letters in a text?",
    options: [
       "letter-spacing",
       "word-spacing",
       "line-spacing",
       "text-spacing"
    ],
    answer: "letter-spacing"
 },
 {
  question: "How can you apply a background image to an element using CSS?",
  options: [
     "bg-image: url('image.jpg');",
     "background-image: image.jpg;",
     "background: url('image.jpg');",
     "image: background('image.jpg');"
  ],
  answer: "background: url('image.jpg');"
},
{
  question: "Which CSS property is used to change the order of flex items in a flex container?",
  options: [
     "order",
     "flex-order",
     "item-order",
     "flex-item-order"
  ],
  answer: "order"
},
{
  question: "How can you set the text alignment of an element to be centered?",
  options: [
     "text-align: center;",
     "align: center;",
     "horizontal-align: center;",
     "align-text: center;"
  ],
  answer: "text-align: center;"
},
{
  question: "What is the purpose of the CSS property 'opacity'?",
  options: [
     "To control the font size of an element",
     "To specify the visibility of an element",
     "To adjust the spacing between elements",
     "To change the background color of an element"
  ],
  answer: "To specify the visibility of an element"
},
{
  question: "How can you create a border around an element using CSS?",
  options: [
     "border: solid black 2px;",
     "element-border: 2px solid black;",
     "border-width: 2px; border-color: black; border-style: solid;",
     "border-style: 2px solid black;"
  ],
  answer: "border: solid black 2px;"
},
{
  question: "Which CSS selector targets all <p> elements inside a <div> with the class 'container'?",
  options: [
     ".container p { ... }",
     "div p { ... }",
     "div.container > p { ... }",
     "p > .container { ... }"
  ],
  answer: ".container p { ... }"
},
{
  question: "What is the purpose of the 'box-shadow' property in CSS?",
  options: [
     "To change the shape of an element",
     "To create a shadow behind an element",
     "To control the spacing between elements",
     "To apply a gradient background to an element"
  ],
  answer: "To create a shadow behind an element"
},
{
  question: "How can you make the text of an element italic using CSS?",
  options: [
     "text: italic;",
     "font-style: italic;",
     "text-style: italic;",
     "style: italic;"
  ],
  answer: "font-style: italic;"
},
{
  question: "How can you make the text of an element italic using CSS?",
  options: [
     "text: italic;",
     "font-style: italic;",
     "text-style: italic;",
     "style: italic;"
  ],
  answer: "font-style: italic;"
},
{
  question: "How can you make the text of an element italic using CSS?",
  options: [
     "text: italic;",
     "font-style: italic;",
     "text-style: italic;",
     "style: italic;"
  ],
  answer: "font-style: italic;"
},
{
  question: "What is the purpose of the CSS property 'text-decoration'?",
  options: [
     "To control the font color of an element",
     "To specify the decoration of an element's border",
     "To adjust the spacing between lines of text",
     "To add visual effects to text, like underline or strikethrough"
  ],
  answer: "To add visual effects to text, like underline or strikethrough"
},
{
  question: "How can you give an element a rounded border using CSS?",
  options: [
     "border-curve: rounded;",
     "rounded-border: true;",
     "border-radius: 10px;",
     "element-shape: rounded;"
  ],
  answer: "border-radius: 10px;"
},
{
  question: "Which CSS property is used to change the spacing between lines of text?",
  options: [
     "line-height",
     "text-spacing",
     "spacing-line",
     "line-spacing"
  ],
  answer: "line-height"
},
{
  question:'',
  options: [
    "",
    "",
    "",
    ""
 ],
 answer: "none"

} 
  ])

  const [answers ,setAnswers ] = useState(['','','','','','','','','','','','','','',''])
 
  const [selected, setSelected] = useState('')
  const [i, set_i]= useState(0)
  const [timer, setTImer] = useState(15)
  const [checked, setChecked] = useState()
  const [delay, setDelay] = useState(null)
  const [score, setScore] = useState(0)


  
  

  const submit_button_handling = (e) =>{

    e.preventDefault()

    
      
    answers[i] = selected


    if(questions[i].answer === answers[i]){
        setScore(score + 1)

      }


    reset_question()

    

    
  }

  const skip_btn_handler = (e) =>{


    reset_question()  

    answers[i] = ''

    if(questions[i].answer === answers[i]){
      setScore(score + 1)

    }

    console.log(questions.length)

    console.log(score)


  }

  const radio_button_handler = (e) =>{


   setChecked(e.target.value)
   setSelected(e.target.value)
   


  }


  const reset_question = () =>{
      setChecked('')
      setSelected('')
      if(i === 14 ){
        setDelay(null)
        set_i(i+1)
        
   

      }else if(i=== 15){

      }
      else{
        set_i(i+1)
        
      
        setTImer(15) 
      }
      

      console.log(answers)

  }
  
  const start_quiz = () =>{

    if(i === 15){
      set_i(0)
      setScore(0)
      setDelay(1000)
      setTImer(15)
    }else{
      setDelay(1000)
    }

    

  }
  


  
  useInterval(()=>{

    if(timer === 0){


        reset_question()


    }
    else{
      setTImer(timer - 1)
    }
    
  },delay)


  useEffect(()=>{

  },[selected,skip_btn_handler])

 

  


  return (
    <>
      <div className='quiz_app_main'>
        <div className='quiz_app_second_main'>
          <form onSubmit={submit_button_handling} className="app_box">
            
            <h1 className="app_name">
              Quiz App
            </h1>
            {i===15 ? <h1>Score: {score}</h1> : <h2 className='question'>{i+1}.{questions[i].question}</h2>}
            
          
            <h2 className="timer">TImer: {timer}s</h2>
            <div className="app_quizes">
            { i===15 || delay === null ? <ol></ol> : 
            <ol>
                <li><input className='radio_btn' id='quiz_radio1' checked={checked === questions[i].options[0]} type="radio"  onChange={radio_button_handler} value={questions[i].options[0]}/><label htmlFor="quiz">{questions[i].options[0]}</label></li>
                <li><input className='radio_btn' id='quiz_radio2' checked={checked === questions[i].options[1]} type="radio"  onChange={radio_button_handler} value={questions[i].options[1]}/><label htmlFor="to_do_list">{questions[i].options[1]}</label></li>
                <li><input className='radio_btn' id='quiz_radio3' checked={checked === questions[i].options[2]} type="radio"  onChange={radio_button_handler} value={questions[i].options[2]}/><label htmlFor="expense_tracker">{questions[i].options[2]}</label></li>
                <li><input className='radio_btn' id='quiz_radio4' checked={checked === questions[i].options[3]} type="radio"  onChange={radio_button_handler} value={questions[i].options[3]}/><label htmlFor="keep_note_app">{questions[i].options[3]}</label></li>
              </ol>}
              
            </div>
            <div className="buttons">
            {delay === null ? <button className='start_btn' type='button' onClick={start_quiz}>Start Quiz</button> : <><button className='form_btn' type='button' onClick={skip_btn_handler}>skip</button>
              <button className='form_btn' type='submit'>submit</button></>}
              
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default App;
