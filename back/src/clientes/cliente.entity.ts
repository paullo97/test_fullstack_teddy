import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: 'Id único do Cliente' })
    id: number;

    @Column()
    @ApiProperty({ description: 'Nome do Usuário', required: true })
    user: string;

    @Column()
    @ApiProperty({ description: 'Nome do Cliente', required: true })
    name: string;
    
    @Column({ type: 'text', nullable: false })
    @ApiProperty({ description: 'Salário do Cliente', required: true })
    salary: string;

    @Column({ type: 'text', nullable: false })
    @ApiProperty({ description: 'Valor Monetario da Empresa do Cliente', required: true })
    enterpriseValue: string;

    @Column({ type: 'boolean', nullable: true, default: false })
    @ApiProperty({ description: 'Propriedade que informa se ele foi selecionado', required: false})
    selected: boolean;
}
