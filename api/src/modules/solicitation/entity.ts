import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Donation } from "../donation/entity";
import { User } from "../user/entity";

@Entity()
export class Solicitation {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User, (user) => user.solicitations, {
    nullable: false,
  })
  owner: User

  @Column()
  reason: string

  @Column('boolean', {default: false})
  is_accepted: boolean=false

  @Column()
  donationId: number

  @ManyToOne(() => Donation, (donation) => donation.solicitations, {
    nullable: false,
  })
  @JoinColumn({name: 'donationId'})
  donation: Donation
}