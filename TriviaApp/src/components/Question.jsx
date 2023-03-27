import { useEffect, useState } from "react";


export default function Question() {
    const [Category, setCategory] = useState("");
    const [Question, setQuestion] = useState("");
    const [Answer, setAnswer] = useState("");
    const [Revealed, setRevealed] = useState(false);

    useEffect(()=>{
    const getQuestion = async() =>{
        let response = await fetch(
                "https://opentdb.com/api.php?amount=1&type=boolean"
        );
        let data = await response.json();
        let results = data.results[0];
        // console.log(data.results[0].category);
        setCategory(results.category);
        setQuestion(results.question);
        setAnswer(results.correct_answer);

    };  
    getQuestion();
  }, []);

function buttonClick() {
    setRevealed(true);
}

let show_answer;
    if (Revealed){
        show_answer = <div>{Answer}</div>
    }

  return(
<div>
    <div>
        The category is:
        <p>{Category}</p>
    </div>
  <div>
    <h3>the Question is:</h3>
    <p> <strong>{Question } </strong> </p>
    </div>  
    <button type="button" onClick={buttonClick}>
        Reveal Answer
    </button>
    {show_answer}
</div>
  );
}