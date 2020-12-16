import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import CreateUserDto from './user/dto/create-user.dto';
import UserEntity from './db/user.entity';


// @Controller("/hello")
// export class AppController {
//  constructor(private readonly appService: AppService) {}
//  @Get("/hi")
//  getHello(): string {
//  return this.appService.getHello();
//  }
//  @Get("/bye")
//  getBye(): string {
//  return this.appService.getHello();
//  }
// } 
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/register')
  addUser( @Body() user: CreateUserDto) {
    const userEntity: UserEntity = UserEntity.create();
    const {name,password,username } = user;
    userEntity.password = password;
    userEntity.username = username;
    userEntity.name = name;
    UserEntity.save(userEntity);
    
    return this.authService.login(userEntity);
  }
}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
