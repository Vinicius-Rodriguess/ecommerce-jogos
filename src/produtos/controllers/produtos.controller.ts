import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Produtos } from '../entitties/produtos.entity';
import { ProdutosService } from '../services/jogos.service';

@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produtos[]> {
    return this.produtosService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produtos> {
    return this.produtosService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Produtos[]> {
    return this.produtosService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() jogos: Produtos): Promise<Produtos> {
    return this.produtosService.create(jogos);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() jogos: Produtos): Promise<Produtos> {
    return this.produtosService.update(jogos);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.delete(id);
  }

  @Put('/curtir/:id')
  @HttpCode(HttpStatus.OK)
  curtir(@Param('id') id: number): Promise<Produtos> {
    return this.produtosService.curtir(id);
  }

  @Get('/maior/:preco')
  @HttpCode(HttpStatus.OK)
  buscarMaiorPreco(
    @Param('preco', ParseIntPipe) preco: number,
  ): Promise<Produtos[]> {
    return this.produtosService.buscarMaiorPreco(preco);
  }

  @Get('/menor/:preco')
  @HttpCode(HttpStatus.OK)
  buscarMenorPreco(
    @Param('preco', ParseIntPipe) preco: number,
  ): Promise<Produtos[]> {
    return this.produtosService.buscarMenorPreco(preco);
  }
}
