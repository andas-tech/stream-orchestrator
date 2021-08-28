import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Twitchaccountlookiups extends BaseSchema {
  protected tableName = 'TwitchAccounts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('userId')
      table.string('accountName')
      table.integer('createdMillis')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
