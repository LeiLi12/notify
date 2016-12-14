# KNotify
+ 利用原生js编写一个简单的notify

## Useage
+ 引入animate.css(动画效果实现)／bootstrap.css(使用到bootstrap字体图标)
+ API支持:  Amd/Commonjs/Global
+ API示例
```
new KNotify({
            container: document.body, // 可选，默认为document.body
            i18n: 'EN', //可选。可选项为'CN'/'EN',默认为'CN'；国际化设置(目前仅用于设置确认/取消按钮的国际化)
            type: 'notice', //可选，默认为'notice'
            position: 'center', //可选,默认为'center'(绝对居中),暂只支持设置为'center'；notify在knotify的位置
            // 可选，notify样式设置（非遮罩层）
            style: {
                width: '300px', //可选,notify宽度,默认为 '300px'
                height: 'auto', //可选,notify高度,默认为 'auto'
                borderRadius: '4px', //可选,notify的border-radius,默认为'4px'
                background: '#fcf8e3', //可选,notify背景色,默认为'#fcf8e3'
                color: '#c09853', //可选 默认为,notify的字体颜色,'#c09853'
                boxShadow: 'rgba(50, 50, 50, 0.498039) 0px 2px 10px', //可选,notify的box-shadow,默认为 'rgba(50, 50, 50, 0.498039) 0px 2px 10px'
                borderColor: '#fbeed5' //可选,notify边框颜色,默认为 '#fbeed5'
            },
            //可选，设置遮罩层样式，暂只支持设置背景色
            overlay: {
                background: '#ccc' //可选,默认为transparent
            },
            title: 'Hello', //必选,notify标题,仅支持text
            //必选,notify内容,支持text/html
            content: 'Hi, this is a notify by jk, and thank you very much for using it! Please enjoy it!',
            // 可选，knotify出现后是否自动消失
            hide: {
                show: false, //可选，可选项为true/false, 默认为false(不自动消失)
                time: 5000 //可选，多长时间后自动消失,默认为2000（2s）[仅show设为true生效]
            }, 
            // 可选，是否显示右上角关闭按钮
            closer: {
                //可选，可选项为true/false/'auto',默认为true;设为'auto'，鼠标移入notify，显示关闭按钮，鼠标移出隐藏关闭按钮
                //若knotify的hide.show && operation.show均为false,则show只能设置为true或'auto'(此时即使此处show设为false,也会被强制变更为true)
                show: 'auto'
                // close: function() {
                //     console.log('Closer');
                // }
            },
            //点击确认/取消后的回调函数
            operation: {
                show: true, //可选，默认为false,可设置项为true/false；是否显示确认／取消按钮
                //点击确认后的回调函数【仅show设为true有效】
                confirm: function() {
                    console.log('Confirm');
                },
                //点击取消后的回调函数【仅show设为true有效】
                cancel: function() {
                    console.log('Cancel');
                }
            },
            // notify进入/退出动画,依赖Animate.css
            animation: {
                show: true //可选，默认为false,可选项为true/false；是否开启动画
                // enter: 'fadeIn', //可选，默认为'fadeIn',可选项参考Animate.css的动画类型; notify进入动画
                // exit: 'fadeOut' //可选，默认为'fadeOut',可选项参考Animate.css的动画类型；notify退出动画
            }
        });
```