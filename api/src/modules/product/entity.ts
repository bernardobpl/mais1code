import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Donation } from "../donation/entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  available: boolean

  @Column()
  donationId: number

  @OneToOne(() => Donation, (donation) => donation.product, {nullable: false})
  @JoinColumn({name: "donationId"})
  donation: Donation
}