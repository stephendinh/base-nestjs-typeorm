import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import {
  IGenerateTokenProps,
  JWTPayload,
} from './interfaces/generate-token-prop.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async login(loginDto: LoginDto): Promise<any> {
    return 'Login';
  }

  async verifyUser(payload: JWTPayload): Promise<any> {
    return 'Verify User';
  }

  private async _generateToken(
    generateToken: IGenerateTokenProps,
    exp?: any,
  ): Promise<string> {
    const { email } = generateToken;
    const defaultExpiresIn = process.env.JWT_EXPIRES || '20m';
    const expiresIn = exp || defaultExpiresIn;
    const user: JWTPayload = { email };
    const accessToken = this.jwtService.sign(user, { expiresIn: expiresIn });
    return accessToken;
  }
}
