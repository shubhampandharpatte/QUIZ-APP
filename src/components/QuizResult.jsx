import PropTypes from 'prop-types'
function QuizResult({
    score,
    totalScore,
    tryAgain
}) {
  return (
    <>
    <div className='show-score'>
        Your Score:{score}<br/>
        Total Score:{totalScore}
    </div>
    <button id="next-button" onClick={tryAgain}>Try Again</button>
    </>
  )
}
QuizResult.propTypes={
    score: PropTypes.number.isRequired,
    totalScore: PropTypes.number.isRequired,
    tryAgain: PropTypes.func.isRequired
}

export default QuizResult