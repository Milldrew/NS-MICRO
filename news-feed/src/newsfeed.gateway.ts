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
    console.log({ payload });
    console.log('hello form handleMessage');
    this.server.emit('message', 'hello from server');
    return 'Hello world from websocket!';
  }
  @SubscribeMessage('newsFeed')
  newsFeed(client: any, newsFeed: any): void {
    console.log({ newsFeed });
    console.log('hello form new feed');
    this.server.emit('newsFeed', newsFeed);
  }
}
