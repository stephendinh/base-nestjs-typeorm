import { PartialType } from '@nestjs/swagger';
import { RegisterCustomerDto } from './register-customer.dto';

export class UpdateAuthDto extends PartialType(RegisterCustomerDto) {}
