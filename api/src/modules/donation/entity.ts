import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../product/entity";
import { Solicitation } from "../solicitation/entity";
import { Status } from "../status/entity";
import { User } from "../user/entity";

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @ManyToOne(() => Status, (status) => status.donations, {nullable: false, eager: true})
  status: Status

  @Column({nullable: true})
  productId: number

  @OneToOne(() => Product, (product) => product.donation, {nullable: true, eager: true, cascade: true})
  @JoinColumn({name: "productId"})
  product: Product

  @OneToMany(() => Solicitation, (solicitation) => solicitation.donation, {
    eager: true,
    cascade: true
  })
  solicitations: Solicitation[]

  @ManyToOne(() => User, (user) => user.donations, {
    nullable: false,
  })
  owner: User

  @CreateDateColumn()
  created_at: Date;

  @Column({nullable: true})
  donated_at: Date

  @OneToOne(() => User)
  @JoinColumn()
  donated_to: User
}