import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/utils/decorators/request-mapping.decorator';
import { AppService } from '../app.service';

@Controller('api')
export class ApiController {
  constructor(private readonly appService: AppService){}
  @Get()
  findAll() {
    return this.appService.root();
  }
}
