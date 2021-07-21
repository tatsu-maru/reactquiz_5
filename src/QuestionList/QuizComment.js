import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
//import './index.css'

class QuizComment extends Component {
  constructor(props) {
    super(props)
    this.state = {comments: []}
  }

  addComment(text) {
    const comment = {text: text}
    this.setState({comments: this.state.comments.concat(comment)})
  }
  render() {
    return (
      <div>
        <Title>コメント</Title>
        <QuizCommentList comments={this.state.comments} />
        <CommentEntry add={(text) => this.addComment(text)} />
      </div>
    )
  }
}

////////////////////////コメント入力フォーム////////////////////////////////////////////
class CommentEntry extends Component {
    constructor(props) {
      super(props)
      this.state = {text: ''}
    }
    onChangeDate(event) {
      this.setState({text: event.target.value})
    }

    onClickSubmit() {
      this.props.add(this.state.text )
      this.setState({text: ''})
    }
    render() {
      return (
        <div className="entry">
          <fieldset>
            <legend>コメント入力欄</legend>
            <div>コメント: <input type="text" value={this.state.date} onChange={(event) => this.onChangeDate(event)} placeholder="例)このクイズ面白い" /> </div> 
            <div> <input type="submit" value="追加" onClick={() => this.onClickSubmit()} /> </div>
          </fieldset>
        </div>
      )
    }
  }
  CommentEntry.propTypes = {
    add: PropTypes.func.isRequired
  }
//////////////////////////////////////////////////////////////////

  const QuizCommentList = (props) => {
    return (
      <div>
        <table className="comment">
          <thead  data-type="ok">
            <tr><th>コメント一覧</th></tr>
          </thead>
          <tbody>
            {props.comments.map((comment) =>
              <QuizCommentItem comment={comment} key={comment.text } /> )}
           </tbody>
        </table>
      </div>
    )
  }
  QuizCommentList.propTypes = {
    comments: PropTypes.array.isRequired
  }
  
  const QuizCommentItem = (props) => {
    const {text} = props.comment
    return (
      <tr>
        <td>{text}</td>

      </tr>
    )
  }
  QuizCommentItem.propTypes = {
    comment: PropTypes.object.isRequired
  }
  
  const Title = (props) => {
    return (<h1>{props.children}</h1>)
  }
  Title.propTypes = {
    children: PropTypes.string
  }

  export default QuizComment; 