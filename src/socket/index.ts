function bindEvent(IO: any) {
  IO.on('connection', (socket: any) => {
    console.log('a user in')
    socket.on('disconnect', function() {
      console.log('user disconnected')
    })
    socket.on('chat message', (msg: any) => {
      console.log('收到' + msg)
    })
  })
}

export default bindEvent
