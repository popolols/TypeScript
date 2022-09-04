import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
class GameControl {
  food: Food;
  snake: Snake;
  scorePanel: ScorePanel;
  direction: string = "ArrowRight";
  isLive: boolean = true;
  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel(10,1);
  }

  init() {
    document.addEventListener("keydown", this.keyDownHandler);
    this.run();
  }

  keyDownHandler = (e: KeyboardEvent) => {
    this.direction = e.key;
    // console.log(this.direction);
    // this.run()
  };
  /**
   * ArrowUp  top--
  ArrowRight  left++
  ArrowDown  top++
  ArrowLeft left--
   */
  run() {
    // 获取蛇的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    // console.log(this.direction)
    switch (this.direction) {
      case "ArrowUp":
        Y -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
    }
    this.check(X,Y)
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error: any) {
      // console.log(error.message);
      alert(error.message+' Game Over!')
      this.isLive=false
    }

    // 开启定时器调用
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 检查蛇是否吃到食物
  check(X:number,Y:number){
    if(this.food.X===X && this.food.Y===Y){
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl;
