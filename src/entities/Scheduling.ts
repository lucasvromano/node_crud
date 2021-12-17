import { Employee } from "./Employee";
import { Customer } from "./Customer";
import { Service } from "./Service";
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("schedulings")
export class Scheduling {
  @PrimaryColumn()
  id: string;

  @Column()
  date: Date;

  @Column()
  employee_id: string;

  @OneToOne(() => Employee)
  @JoinColumn({ name: "employee_id" })
  employee: Employee;

  @Column()
  customer_id: string;

  @OneToOne(() => Customer)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @Column()
  service_id: string;

  @OneToMany(type => Service, service => service.scheduling)
  services: Service[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
