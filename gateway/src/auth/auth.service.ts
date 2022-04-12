import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findOneByUsername(username);

    if (user && user.password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}