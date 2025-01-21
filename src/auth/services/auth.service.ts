import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioService } from '../../usuario/services/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
    private readonly bcrypt: Bcrypt,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const buscaUsuario = await this.usuarioService.findByUsuario(username);
    if (!buscaUsuario) throw new NotFoundException('Usuário não encontrado!');

    const matchPassword = await this.bcrypt.compararSenhas(
      password,
      buscaUsuario.senha,
    );
    if (buscaUsuario && matchPassword) {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      const { senha, ...resposta } = buscaUsuario;
      return resposta;
    }

    return null;
  }

  async login(usuarioLogin: UsuarioLogin) {
    const payload = { sub: usuarioLogin.usuario };
    const buscaUsuario = await this.usuarioService.findByUsuario(
      usuarioLogin.usuario,
    );

    return {
      id: buscaUsuario.id,
      nome: buscaUsuario.nome,
      usuario: usuarioLogin.usuario,
      senha: '',
      foto: buscaUsuario.foto,
      token: `Bearer ${this.jwtService.sign(payload)}`,
    };
  }
}
