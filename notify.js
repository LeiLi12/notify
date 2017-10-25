!(() => {
  // html模版
  const template = `<section id="notify-container" class="notify-container">
                       <div>
                        <h3 class="notify-title"></h3>
                        <input id="notify-btnClose" type="button" value="关闭" onClick="custom_close()"/>
                        </div>
                        <article class="notify-content"></article>
                      </section>`

  // Help类，这里作用是一个utils
  class Help {
    // html => node
    html2node(str) {
      const container = document.createElement('div')
      container.innerHTML = str
      return container.children[0]
    }
  }

  // Notify类
  class Notify extends Help {
    // 构造函数
    constructor(props = { // 设置默认值
      title: 'title',
      content: 'content'
    }) {
      // 子类必须在constructor中调用super
      super()
      this.props = props
      // 定义容器
      this.container = document.body
      // notify node
      this.notify = this._layout().cloneNode(true)
      // notifyTitle node
      this.notifyTitle = this.notify.querySelector('.notify-title')
      // notifyContent node
      this.notifyContent = this.notify.querySelector('.notify-content')
      // 初始化
      this._init()
      // notify append 到 容器
      this.container.appendChild(this.notify)
    }

    _layout() {
      return super.html2node(template)
    }

    _init() {
      this.notify.style.display = 'none'
      this.notifyTitle.innerText = this.props.title
      this.notifyContent.innerText = this.props.content
    }

    // notify 显示
    show(opt = {
      autoHide: true,
      timeout: 1000
    }) {
      this.notify.style.display = 'block'
      // 显示后经过一段时间自动隐藏
      if (opt.autoHide) {
        setTimeout(() => {
          this.notify.style.display = 'none'
        }, opt.timeout)
      }
    }

    hide() {
      this.notify.style.display = 'none'
    }
  }

  // API支持:  Amd || Commonjs  || Global 
  if (typeof exports === 'object') {
    module.exports = Notify
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return Notify
    });
  } else {
    window.Notify = Notify
  }

})()

// 选择是否关闭本页面
function custom_close(){
if 
(confirm("您确定要关闭本页吗？")){
window.opener=null;
window.open('','_self');
window.close();
}
else{}
}
