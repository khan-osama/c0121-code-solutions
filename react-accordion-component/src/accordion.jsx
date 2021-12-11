import React from 'react'



class AccordionDataTitles extends React.Component {
  render() {
    return (
      <div className="data">
        {data.map((text, arrayOrder) => (
          <div className="titles" onClick={() => { this.props.handleClick(arrayOrder)}}>
          <h1>{text.title}</h1>
            <div className={`${(this.props.accordionSelected === arrayOrder) &&
              this.props.accordionOpen ? 'content-show' : 'content'}`}>
              <p>{text.content}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const data = [
  {
    title: `Hypertext Markup Language`,
    content: `Hypertext Markup Language (HTML) is the standard markup language
    for creating web pages and web applications. With Cascading Style Sheets (CSS)
     and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.`
  },
  {
    title: `Cascading Style Sheets`,
    content: `Cascading Style Sheets (CSS) is a style sheet language used for describing
    the presentation of a document written in a markup language like HTML. CSS is a cornerstone
    technology of the worldwide web alongside HTML and JavaScript.`
  },
  {
    title: `JavaScript`,
    content: `JavaScript, often abbreviated as JS, is a high-level, interpreted programming
    language that conforms to the ECMAscript specification. JavaScript has curly-bracket syntax,
    dynamic typing, prototype-based object-orientation, and first-class functions.`
  }
]

class AccordionApp extends React.Component {
  constructor() {
    super()
    this.state = {
      accordionSelected: null,
      accordionOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const accordionSelected = this.state.accordionSelected
    if (accordionSelected === i) {
      this.setState({
        accordionSelected: null
      })
    }

    this.setState(prevState => ({
      accordionSelected: i,
      accordionOpen: !prevState.accordionOpen
    }))
  }

  render() {
    return (
      <div className="container">
        <AccordionDataTitles accordionOpen={this.state.accordionOpen} accordionSelected={this.state.accordionSelected} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default AccordionApp
