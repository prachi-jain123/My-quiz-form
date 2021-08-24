class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("enter correct option here");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
    //Add hide() for questions, options & input box
     
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    //Create html() and position() for each question, input and answers.
    this.question.html("Question- John's father had 5 children.The names of 4 of them are Rose, Felix, Jack and Lia. What is the name of the 5th child? ")
    this.question.position(150, 80);
    this.option1.html("Rose");
    this.option1.position(150,120);
    this.option2.html("Jack");
    this.option2.position(150, 140);
    this.option3.html("Felix");
    this.option3.position(150,160);
    this.option4.html("John");
    this.option4.position(150, 180);
    this.input1.position(150, 230);
    this.button.position(290, 260);
    this.input2.position(350, 230)

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("Thank You, Your answer has been submitted");
    this.message.position(250, 350);
    })


  }
}
