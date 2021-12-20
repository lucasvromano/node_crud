import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Permission } from "./Permission";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  permission_id: string;

  @OneToOne(() => Permission)
  @JoinColumn({ name: "permission_id" })
  permission: Permission;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
