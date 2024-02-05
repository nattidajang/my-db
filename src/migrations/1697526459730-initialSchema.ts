import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialSchema1697526459730 implements MigrationInterface {
  name = 'InitialSchema1697526459730'

  public async up(queryRunner: QueryRunner): Promise<void> {
    //Sprint1
    await queryRunner.query(
      `CREATE TABLE mydb.user(		
          "userId"		  uuid PRIMARY key DEFAULT uuid_generate_v4(),
          "userName"	varchar(255),
    
        );`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TABLE mydb.user`,
    )
  }
}
