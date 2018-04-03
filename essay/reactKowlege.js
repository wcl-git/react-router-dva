// React.Children.map 
// 用来遍历 React 的 children  ，
// this.props.children.map((child) => {...})也可以遍历，但是仅限于数组。
// 而 React.Children.map(children, (child) => {...})

// 检查组件有多少个 children 
// React.Children.count(this.props.children)
// 这个方法不在乎children 的类型


// 把children 转换为数组

class Sort extends Component {
  render() {
    const children = React.Children.toArray(this.props.children)
    return <p>{children.sort().join()}</p>  
  }
}

<Sort>
  {'banana'}{'orange'}{'apples'}
</Sort>

// 输出： apples banana orange