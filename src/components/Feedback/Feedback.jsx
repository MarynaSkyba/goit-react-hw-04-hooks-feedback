import React, {Component} from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedBackOptions/FeedbackOptions';


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
     
      }



    handleIncrement = (option) => {
          this.setState(prevState => {
              return {
                  [option]: prevState[option] +1,
              }
            }
          )
      }

    // handleNeutral=()=>{
    //     this.setState(prevState => {
    //         return {
    //             neutral: prevState.neutral +1,
    //             // countTotalFeedback()
    //         }
    //     })
    // }

    // handleBad = (e) => {
        
    //     this.setState(prevState => {
    //         return {
    //             bad: prevState.bad +1,
    //             // countTotalFeedback()
    //         }
           
    //     }
    //     )
    // }

    countTotalFeedback = () => {
        const {good, bad, neutral} = this.state;
               return  good + bad + neutral
        }
    
    
    countPositiveFeedbackPercentage = () => {
        const {good, bad, neutral} = this.state;
        const total = good+bad+neutral
            return Math.round(good * 100/total)
    }

      render() {
          
          return (
              <div>
                  <h2>Please leave feedback</h2>
                  {/* <button type="button" onClick= {this.handleIncrement}>Good</button>
    <button type="button" onClick= {this.handleIncrement}>Neutral</button>
    <button type="button" onClick= {this.handleIncrement}>Bad</button>  */}
            <FeedbackOptions options={['good', 'bad', 'neutral']} onLeaveFeedback={this.handleIncrement}/>
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
              </div>
          );
      }
    }

export default Feedback;