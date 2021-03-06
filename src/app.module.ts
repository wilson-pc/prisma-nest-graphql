import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeGraphQLModule } from "typegraphql-nestjs";
import { UserCrudResolver, RoleCrudResolver, UserRelationsResolver, RoleRelationsResolver } from './prisma/generated/type-graphql';
import { PrismaClient } from 'prisma/client';

const prisma = new PrismaClient();
interface Context {
  prisma: PrismaClient;
}

@Module({
  imports: [TypeGraphQLModule.forRoot({
    emitSchemaFile: "./schema.graphql",
    validate: false,
    introspection: true,
    playground: true,
    dateScalarMode: "timestamp",
    context: (): Context => ({ prisma }),
  }),],
  controllers: [AppController],
  providers: [AppService,UserCrudResolver,RoleCrudResolver,UserRelationsResolver,RoleRelationsResolver],
})
export class AppModule {}
