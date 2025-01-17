import { Module } from '@nestjs/common';
import { Produtos } from './entitties/produtos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosController } from './controllers/produtos.controller';
import { ProdutosService } from './services/jogos.service';
import { CategoriaModule } from '../categoria/categoria.module';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos]), CategoriaModule],
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [TypeOrmModule],
})
export class JogosModule {}
