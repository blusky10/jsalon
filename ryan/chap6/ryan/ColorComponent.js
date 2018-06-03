// import {Component} from 'react'
// import { v4 } from 'uuid'
// import { render } from 'react-dom'

// class ColorComponent extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             colors: []
//         }

//         // 생성자에서 바인드를 해줘야 아래에서 this 관련 사용 가능
//         this.addColor = this.addColor.bind(this)
//         this.rateColor = this.rateColor.bind(this)
//         this.removeColor = this.removeColor.bind(this)
//     }


//     addColor(title, color) {
//         const colors = [
//             ...this.state.colors,
//             {
//                 id: v4(),
//                 title,
//                 color,
//                 rating: 0
//             }
//         ]
//         // setState 를 호출하면 UI 리로딩
//         this.setState({colors})
//     }

//     rateColor(id, rating) {
//         const colors = this.state.colors.map(color =>
//             (color.id !== id) ?
//             color : 
//             {
//                 ...color,
//                 rating
//             }
//         )
//         this.setState({colors})
//     }

//     removeColor(id) {
//         const colors = this.state.colors.filter(
//             color => color.id !== id
//         )
//         this.setState({colors})
//     }


//     render() {
//         const {addColor, rateColor, removeColor} = this
//         const {colors} = this.state
//         return (
//             <div className="colorComponent">
//                 <AddColorForm onNewColor={addColor} />
//                 <ColorList colors={colors}
//                 onRate={rateColor}
//                 onRemove={removeColor} />
//             </div>
//         )
//     }
// }