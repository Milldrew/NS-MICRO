import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class NewsfeedGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log('hello form handleMessage');
    this.server.emit('message', 'hello from server');
    return 'Hello world from websocket!';
  }
}
