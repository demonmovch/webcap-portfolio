import React, { Component, createRef } from 'react';
import styles from './faq.module.scss';

export default class Faq extends Component {
	state = {
		activeQuestion: false
	}
	wrapperRef = createRef();
	answerRef = createRef();
	activeAnswer = false;

	toggle = () => {
		this.setState({ activeQuestion: !this.state.activeQuestion });

    let prev = null;
    
    this.wrapperRef.current.style.height = this.activeAnswer ? this.answerRef.current.offsetHeight + 'px' : 0;

    const applyChange =  (timestamp) => {
      let change = prev ? timestamp - prev : 5;
      prev = timestamp;
      let h = this.wrapperRef.current.offsetHeight + (this.activeAnswer ? -change : change);

      if (h < 0) {
      	this.wrapperRef.current.style.height = "0px";  
        this.activeAnswer = false;      
      } else if (h > this.answerRef.current.offsetHeight) {
      	this.wrapperRef.current.style.height = "auto";  
        this.activeAnswer = true;       
      } else {
        this.wrapperRef.current.style.height = h + 'px';
        window.requestAnimationFrame(applyChange);
      }
    }
    window.requestAnimationFrame(applyChange);
	}

  render() {
		const {question, children} = this.props;
		const questionClasses = `${styles.question} ${this.state.activeQuestion ? styles.open : ''}`; 

    return (
      <li className={styles.faqItem}>
      	<div 
      		className={questionClasses}
      		onClick={this.toggle}
      	>
      		{question}
      	</div>
      	<div 
      		className={styles.wrapper}
      		ref={this.wrapperRef}
      	>
	      	<div 
	      		className={styles.answer}
	      		ref={this.answerRef}
	      	>
	      		{children}
	      	</div>
      	</div>
      </li>
    );
  }
}