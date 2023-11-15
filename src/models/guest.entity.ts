import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "guests" })
export class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  note:string;
}
