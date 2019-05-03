function bindEvent(IO: any) {
  IO.on('connection', (socket: any) => {
    console.log('a user in')
    socket.on('disconnect', function() {
      console.log('user disconnected')
    })
    socket.on('chat message', (msg: any) => {
      console.log('收到' + msg)
      socket.emit('message', '服务器:我收到你发来的信息 ++ ' + msg)
    })
  })
}

export default bindEvent
