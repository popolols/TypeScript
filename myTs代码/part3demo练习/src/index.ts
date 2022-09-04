import "./style/index.less"
// import Food from "./module/Food"
// import ScorePanel from "./module/ScorePanel"
import GameControl from "./module/GameControl"
// 测试代码
// const food=new Food()
// food.change()
// console.log('X:',food.X)
// console.log('Y:',food.Y)

// const sp=new ScorePanel()

// for(let i=0;i<20;i++){
//   sp.addScore()
// }
const gamecontrol=new GameControl()
gamecontrol.init()