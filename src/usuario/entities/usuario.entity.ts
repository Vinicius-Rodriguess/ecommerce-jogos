import { Transform, TransformFnParams } from 'class-transformer';
import { IsDateString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsAdult } from '../../util/isAdult';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 255, nullable: true })
  nome: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: true })
  usuario: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 255, nullable: true })
  senha: string;

  @Column({ length: 5000 })
  foto: string;

  @IsDateString()
  @IsNotEmpty()
  @IsAdult()
  @Column({ length: 255, nullable: true })
  data_nascimento: string;
}
