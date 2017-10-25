

## 如何使用
html中引入notify.js和notify.css

## 参数
+ `container` 容器节点 默认为document.body
+ `title` string 标题
+ `content` string 内容

## 方法
### show(options)
+ 描述：notify show
+ options
  + `autoHide` boolean true/false notify显示后是否在一段时间后自动隐藏 默认为true
  + `timeout` number notify显示后经过多久自动隐藏 autoHide为true时生效 默认为1000(ms)

### hide()
  + 描述: notify hide

## 示例
```js
const notify = new Notify({
  title: '最新通知',
  content: 'notify预览版发布'
})

notify.show({
  autoHide: true,
  timeout: 2000
})
```
## 更改
* 新加了一个关闭按钮，选择是否关闭整个页面。
* 改变了窗口的部分样式（如字体，文本排列，背景颜色等）。
* 在title下面增加了悬停效果。
* 给窗口添加了动画效果。
* 将窗口的显示时间延长到100000ms。
