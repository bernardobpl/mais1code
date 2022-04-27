import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Donation } from "../donation/entity";
import { Solicitation } from "../solicitation/entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  age: number

  @OneToMany(() => Donation, (donation) => donation.owner, {
    eager: true,
    cascade: true
  })
  donations: Donation[]

  @OneToMany(() => Solicitation, (solicitation) => solicitation.owner, {
    cascade: true
  })
  solicitations: Solicitation[]

  @Column()
  created_on: Date
}
