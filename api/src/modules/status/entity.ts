import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Donation } from "../donation/entity";

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string

  @OneToMany(() => Donation, (donation) => donation.status)
  donations: Donation[]
}
