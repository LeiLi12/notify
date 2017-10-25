const notify = new Notify({
    title: '最新通知',
    content: 'notify预览版发布'
  })
  
  notify.show({
    autoHide: true,
    timeout: 100000
  })