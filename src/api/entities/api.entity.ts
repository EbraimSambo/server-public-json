import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity('keys')
export class Api {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        unique: true,
    })
    apiKey: string

    @Column({nullable: true})
    ip: string

    @Column({type: 'int', nullable: true})
    expiration: number
}
