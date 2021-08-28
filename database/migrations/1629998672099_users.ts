import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'Users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id')
      table.string('username')
      table.string('password')
      table.string('salt')
      table.integer('createdMillis')
      table.integer('updatedMillis')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
