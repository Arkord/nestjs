import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuariosService {

    constructor(@InjectRepository(UsuarioEntity) private rep: Repository<UsuarioEntity>) {

    }

    async obtenerUsuarios(usuario: UsuarioEntity) : Promise<UsuarioEntity[]> {
        return await this.rep.find();
    }

    async obtenerUsuario(_id: number) : Promise<UsuarioEntity[]> {
        return await this.rep.find({
            select: ["id", "nombre", "apellido"],
            where: [
                {
                    "id": _id
                }
            ]
        });
    }

    async creaUsuario(usuario: UsuarioEntity) {
        await this.rep.insert(usuario);
    }

    async actualizarUsuario(usuario: UsuarioEntity) {
        await this.rep.update({ id: usuario.id }, usuario);
    }

    async borrarUsuario(usuario: UsuarioEntity) {
        await this.rep.delete(usuario);
    }

}
