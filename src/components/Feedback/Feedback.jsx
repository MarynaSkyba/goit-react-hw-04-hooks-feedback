import React, {Component} from 'react';


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
     
      }



    handleGood = () => {

          this.setState(prevState => {
              return {
                  good: prevState.good +1,
                //   countTotalFeedback()
              }
            }
          )
      }

    handleNeutral=()=>{
        this.setState(prevState => {
            return {
                neutral: prevState.neutral +1,
                // countTotalFeedback()
            }
        })
    }

    handleBad = (e) => {
        
        this.setState(prevState => {
            return {
                bad: prevState.bad +1,
                // countTotalFeedback()
            }
           
        }
        )
    }

    countTotalFeedback = () => {
        const {good, bad, neutral} = this.state;
               return  good + bad + neutral
        }
    
    
    countPositiveFeedbackPercentage = () => {
        const {good, bad, neutral} = this.state;
            return Math.round()
    }

      render() {
          
          return (
              <div>
                  <h1>Please leave feedback</h1>
              <button type="button" onClick= {this.handleGood}>Good</button>
              <button type="button" onClick= {this.handleNeutral}>Neutral</button>
              <button type="button" onClick= {this.handleBad}>Bad</button> 
              
              <h2>Statistics</h2>
                  <p>Good: {this.state.good}</p>
                  <p>Neutral: {this.state.neutral}</p>
                  <p>Bad: {this.state.bad}</p>
                  <p>Total: {this.countTotalFeedback()}</p>
                  <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
            
                 
              </div>

          );
      }
    }

export default Feedback;