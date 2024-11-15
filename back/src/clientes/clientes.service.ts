import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async findAll(
    name: string,
    page: number,
    limit: number,
  ): Promise<{data: Cliente[], total: number}> {
    const [data, total] = await this.clienteRepository.findAndCount({
      where: { user: name },
      skip: (page - 1) * limit,
      take: limit,
    });

    return { data, total }
  }

  async getSelectedClients(name: string): Promise<Cliente[]> {
    return this.clienteRepository.find({
      where: {
        user: name,
        selected: true,
      },
    });
  }

  async updateSelectedStatus(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOneBy({ id });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }

    cliente.selected = !cliente.selected;
    return this.clienteRepository.save(cliente);
  }

  async resetSelected(user: string): Promise<void> {
    await this.clienteRepository
      .createQueryBuilder()
      .update(Cliente)
      .set({ selected: false })
      .where('user = :user', { user })
      .execute();
  }

  async findOne(id: number): Promise<Cliente> {
    return this.clienteRepository.findOneBy({ id });
  }

  async create(cliente: Cliente): Promise<Cliente> {
    return this.clienteRepository.save(cliente);
  }

  async update(id: number, cliente: Cliente): Promise<Cliente> {
    await this.clienteRepository.update(id, cliente);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}
