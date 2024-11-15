import { Controller, Get, Post, Body, Param, Query, Put, Delete, Patch } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os clientes' })
  @ApiResponse({ status: 200, description: 'Clientes encontrados', type: [Cliente] })
  findAll(
    @Query('name') name: string,
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ): Promise<{data: Cliente[], total: number}> {
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    return this.clientesService.findAll(name.toLocaleLowerCase(), pageNumber, pageSize);
  }

  @Get('selected')
  @ApiOperation({ summary: 'Listar clientes selecionados pelo usuário' })
  @ApiResponse({ status: 200, description: 'Clientes selecionados encontrados', type: [Cliente] })
  getSelectedClients(@Query('name') name: string): Promise<Cliente[]> {
    return this.clientesService.getSelectedClients(name.toLocaleLowerCase());
  }

  @Patch(':id/selected')
  @ApiOperation({ summary: 'Alterar o status de seleção de um cliente' })
  @ApiResponse({ status: 200, description: 'Status alterado com sucesso', type: Cliente })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  updateSelectedStatus(
    @Param('id') id: string,
  ): Promise<Cliente> {
    return this.clientesService.updateSelectedStatus(+id);
  }

  @Patch('/selected/clear/:user')
  @ApiOperation({ summary: 'Alterar o status de Seleção de Todos os Clientes '})
  updateSelectedStatusAll(@Param('user') user: string): Promise<void> {
    return this.clientesService.resetSelected(user.toLocaleLowerCase());
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um cliente pelo ID' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado', type: Cliente })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  findOne(@Param('id') id: string): Promise<Cliente> {
    return this.clientesService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente criado com sucesso', type: Cliente })
  create(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clientesService.create({
      ...cliente,
      user: cliente.user.toLocaleLowerCase()
    });
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um cliente existente' })
  @ApiResponse({ status: 200, description: 'Cliente atualizado com sucesso', type: Cliente })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  update(@Param('id') id: string, @Body() cliente: Cliente): Promise<Cliente> {
    return this.clientesService.update(+id, {
      ...cliente,
      user: cliente.user.toLocaleLowerCase()
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um cliente' })
  @ApiResponse({ status: 204, description: 'Cliente excluído com sucesso' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  remove(@Param('id') id: string): Promise<void> {
    return this.clientesService.remove(+id);
  }
}
