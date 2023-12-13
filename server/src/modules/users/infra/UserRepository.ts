import type { IUser, IUserRepository } from "@users/domain/types"

import { query } from "@shared/infra/database/postgres"

export class UserRepository implements IUserRepository {
  async create(user: IUser): Promise<IUser> {
    const result = await query(
      'INSERT INTO users (cpf, name) VALUES ($1, $2) RETURNING *',
      [user.cpf, user.name]
    )
    return result.rows[0]
  }

  async findByCpf(cpf: string): Promise<IUser | null> {
    const user = await query('SELECT * FROM users WHERE cpf = $1', [cpf])
    return user.rows[0]
  }

  async getAll(): Promise<IUser[] | []> {
    const result = await query('SELECT * FROM users');
    return result.rows
  }

  async update(user: IUser): Promise<IUser> {
    const updatedUser = await query(
      'UPDATE users SET name = $2 WHERE cpf = $1 RETURNING *',
      [user.cpf, user.name]
    )
    return updatedUser.rows[0]
  }

  async delete(cpf: string): Promise<void> {
    await query('DELETE FROM users WHERE cpf = $1', [cpf])
  }
}
