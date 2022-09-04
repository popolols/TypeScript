// 定义食物类
class Food{
  element:HTMLElement

  constructor(){
    this.element=document.getElementById('food')!
  }

  // 获取X坐标的方法
  get X(){
    return this.element.offsetLeft
  }
  // 获取Y坐标的方法
  get Y(){
    return this.element.offsetTop
  }

  // 变换food的位置
  change(){
    // 位置变化的范围在0-290
    // 注意每次变化移动是10px的倍数
    let x=Math.floor(Math.random()*30)*10
    let y=Math.floor(Math.random()*30)*10
    this.element.style.left=x+'px'
    this.element.style.top=y+'px'
  }

}
export default Food

// 测试代码
// const food=new Food()
// food.change()
// console.log('X:',food.X)
// console.log('Y:',food.Y)