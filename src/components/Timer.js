const React = require('react')
export default class Timer extends React.Component {
  state = {
    time: this.props.time
  }

  componentDidMount() {
    this.startTimer()
  }

  componentDidUpdate(){
    if(this.state.time === 0){
      this.stop()
  }
}

  stop() {
    clearInterval(this.timer);
  }


  startTimer() {
    this.timer = setInterval(() => {
      this.setState({
      time: this.state.time - 1
      })
      this.check()
    }, 1000);
  }

  check() {
    if (this.state.time === 0) {
      this.setState({
        time: 0
      }, function () {
        this.stop()
        this.props.getTime(this.state.time)
       // this.startTimer()
    })  
    this.setState({
      time:10
    })
    if(this.state.time === 10){
      setTimeout(() => {
        this.startTimer()
    },2000)     
  }
  } else {
    return this.state.time
  }
}


  resetTimer() {
    this.setState({time: 0})
  }

  render() {
console.log(this.props.time)
    return(
      <div>
        <h3>timer: 00: {this.state.time > 0 ? this.state.time : 0 }</h3>
      </div>
    )
  }
}
