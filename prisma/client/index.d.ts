import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw }

/**
 * Prisma Client JS version: 2.5.1
 * Query Engine version: c88925ce44a9b89b4351aec85ba6a28979d2658e
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
export declare type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export declare interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray

/**
 * Same as JsonObject, but allows undefined
 */
export declare type InputJsonObject = {[Key in string]?: JsonValue}
 
export declare interface InputJsonArray extends Array<JsonValue> {}
 
export declare type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export declare type TruthyKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

export declare type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/

export declare type Datasource = {
  url?: string
}

export type Datasources = {
  db?: Datasource
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources

  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat

  /**
   * @example
   * ```
   * // Defaults to stdout
   * log: ['query', 'info', 'warn', 'error']
   * 
   * // Emit as events
   * log: [
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
}

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
export type GetEvents<T extends Array<LogLevel | LogDefinition>> = GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]> 

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}
/* End Types for Logging */


export type Action =
  | 'findOne'
  | 'findMany'
  | 'create'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'

/**
 * These options are being passed in to the middleware as "params"
 */
export type MiddlewareParams = {
  model?: string
  action: Action
  args: any
  dataPath: string[]
  runInTransaction: boolean
}

/**
 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
 */
export type Middleware<T = any> = (
  params: MiddlewareParams,
  next: (params: MiddlewareParams) => Promise<T>,
) => Promise<T>

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = keyof T extends 'log' ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  constructor(optionsArg?: T);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * @deprecated renamed to `$on`
   */
  on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  $connect(): Promise<void>;
  /**
   * @deprecated renamed to `$connect`
   */
  connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;
  /**
   * @deprecated renamed to `$disconnect`
   */
  disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * @deprecated renamed to `$executeRaw`
   */
  executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;
 
  /**
   * @deprecated renamed to `$executeRaw`
   */
  queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): UserDelegate;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): RoleDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const SortOrder: {
  asc: 'asc',
  desc: 'desc'
};

export declare type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


export declare const UserDistinctFieldEnum: {
  id: 'id',
  createdAt: 'createdAt',
  email: 'email',
  name: 'name',
  roleId: 'roleId'
};

export declare type UserDistinctFieldEnum = (typeof UserDistinctFieldEnum)[keyof typeof UserDistinctFieldEnum]


export declare const RoleDistinctFieldEnum: {
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt'
};

export declare type RoleDistinctFieldEnum = (typeof RoleDistinctFieldEnum)[keyof typeof RoleDistinctFieldEnum]



/**
 * Model User
 */

export type User = {
  id: string
  createdAt: Date
  email: string
  name: string
  roleId: string
}


export type AggregateUser = {
  count: number
}



export type AggregateUserArgs = {
  where?: UserWhereInput
  orderBy?: Enumerable<UserOrderByInput>
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<UserDistinctFieldEnum>
  count?: true
}

export type GetUserAggregateType<T extends AggregateUserArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type UserSelect = {
  id?: boolean
  createdAt?: boolean
  email?: boolean
  name?: boolean
  roleId?: boolean
  role?: boolean | RoleArgs
}

export type UserInclude = {
  role?: boolean | RoleArgs
}

export type UserGetPayload<
  S extends boolean | null | undefined | UserArgs,
  U = keyof S
> = S extends true
  ? User
  : S extends undefined
  ? never
  : S extends UserArgs | FindManyUserArgs
  ? 'include' extends U
    ? User  & {
      [P in TrueKeys<S['include']>]:
      P extends 'role'
      ? RoleGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof User ? User[P]
: 
      P extends 'role'
      ? RoleGetPayload<S['select'][P]> : never
    }
  : User
: User


export interface UserDelegate {
  /**
   * Find zero or one User.
   * @param {FindOneUserArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneUserArgs>(
    args: Subset<T, FindOneUserArgs>
  ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
  /**
   * Find zero or more Users.
   * @param {FindManyUserArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Users
   * const users = await prisma.user.findMany()
   * 
   * // Get first 10 Users
   * const users = await prisma.user.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyUserArgs>(
    args?: Subset<T, FindManyUserArgs>
  ): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>
  /**
   * Create a User.
   * @param {UserCreateArgs} args - Arguments to create a User.
   * @example
   * // Create one User
   * const User = await prisma.user.create({
   *   data: {
   *     // ... data to create a User
   *   }
   * })
   * 
  **/
  create<T extends UserCreateArgs>(
    args: Subset<T, UserCreateArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Delete a User.
   * @param {UserDeleteArgs} args - Arguments to delete one User.
   * @example
   * // Delete one User
   * const User = await prisma.user.delete({
   *   where: {
   *     // ... filter to delete one User
   *   }
   * })
   * 
  **/
  delete<T extends UserDeleteArgs>(
    args: Subset<T, UserDeleteArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Update one User.
   * @param {UserUpdateArgs} args - Arguments to update one User.
   * @example
   * // Update one User
   * const user = await prisma.user.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends UserUpdateArgs>(
    args: Subset<T, UserUpdateArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Delete zero or more Users.
   * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
   * @example
   * // Delete a few Users
   * const { count } = await prisma.user.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends UserDeleteManyArgs>(
    args: Subset<T, UserDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Users.
   * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Users
   * const user = await prisma.user.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends UserUpdateManyArgs>(
    args: Subset<T, UserUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one User.
   * @param {UserUpsertArgs} args - Arguments to update or create a User.
   * @example
   * // Update or create a User
   * const user = await prisma.user.upsert({
   *   create: {
   *     // ... data to create a User
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the User we want to update
   *   }
   * })
  **/
  upsert<T extends UserUpsertArgs>(
    args: Subset<T, UserUpsertArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyUserArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateUserArgs>(args: Subset<T, AggregateUserArgs>): Promise<GetUserAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__UserClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  role<T extends RoleArgs = {}>(args?: Subset<T, RoleArgs>): CheckSelect<T, Prisma__RoleClient<Role | null>, Prisma__RoleClient<RoleGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * User findOne
 */
export type FindOneUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter, which User to fetch.
  **/
  where: UserWhereUniqueInput
}


/**
 * User findMany
 */
export type FindManyUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter, which Users to fetch.
  **/
  where?: UserWhereInput
  /**
   * Determine the order of the Users to fetch.
  **/
  orderBy?: Enumerable<UserOrderByInput>
  /**
   * Sets the position for listing Users.
  **/
  cursor?: UserWhereUniqueInput
  /**
   * The number of Users to fetch. If negative number, it will take Users before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Users.
  **/
  skip?: number
  distinct?: Enumerable<UserDistinctFieldEnum>
}


/**
 * User create
 */
export type UserCreateArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The data needed to create a User.
  **/
  data: UserCreateInput
}


/**
 * User update
 */
export type UserUpdateArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The data needed to update a User.
  **/
  data: UserUpdateInput
  /**
   * Choose, which User to update.
  **/
  where: UserWhereUniqueInput
}


/**
 * User updateMany
 */
export type UserUpdateManyArgs = {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}


/**
 * User upsert
 */
export type UserUpsertArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The filter to search for the User to update in case it exists.
  **/
  where: UserWhereUniqueInput
  /**
   * In case the User found by the `where` argument doesn't exist, create a new User with this data.
  **/
  create: UserCreateInput
  /**
   * In case the User was found with the provided `where` argument, update it with this data.
  **/
  update: UserUpdateInput
}


/**
 * User delete
 */
export type UserDeleteArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter which User to delete.
  **/
  where: UserWhereUniqueInput
}


/**
 * User deleteMany
 */
export type UserDeleteManyArgs = {
  where?: UserWhereInput
}


/**
 * User without action
 */
export type UserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
}



/**
 * Model Role
 */

export type Role = {
  id: string
  name: string
  description: string | null
  createdAt: Date
}


export type AggregateRole = {
  count: number
}



export type AggregateRoleArgs = {
  where?: RoleWhereInput
  orderBy?: Enumerable<RoleOrderByInput>
  cursor?: RoleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<RoleDistinctFieldEnum>
  count?: true
}

export type GetRoleAggregateType<T extends AggregateRoleArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type RoleSelect = {
  id?: boolean
  name?: boolean
  description?: boolean
  users?: boolean | FindManyUserArgs
  createdAt?: boolean
}

export type RoleInclude = {
  users?: boolean | FindManyUserArgs
}

export type RoleGetPayload<
  S extends boolean | null | undefined | RoleArgs,
  U = keyof S
> = S extends true
  ? Role
  : S extends undefined
  ? never
  : S extends RoleArgs | FindManyRoleArgs
  ? 'include' extends U
    ? Role  & {
      [P in TrueKeys<S['include']>]:
      P extends 'users'
      ? Array<UserGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Role ? Role[P]
: 
      P extends 'users'
      ? Array<UserGetPayload<S['select'][P]>> : never
    }
  : Role
: Role


export interface RoleDelegate {
  /**
   * Find zero or one Role.
   * @param {FindOneRoleArgs} args - Arguments to find a Role
   * @example
   * // Get one Role
   * const role = await prisma.role.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneRoleArgs>(
    args: Subset<T, FindOneRoleArgs>
  ): CheckSelect<T, Prisma__RoleClient<Role | null>, Prisma__RoleClient<RoleGetPayload<T> | null>>
  /**
   * Find zero or more Roles.
   * @param {FindManyRoleArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Roles
   * const roles = await prisma.role.findMany()
   * 
   * // Get first 10 Roles
   * const roles = await prisma.role.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyRoleArgs>(
    args?: Subset<T, FindManyRoleArgs>
  ): CheckSelect<T, Promise<Array<Role>>, Promise<Array<RoleGetPayload<T>>>>
  /**
   * Create a Role.
   * @param {RoleCreateArgs} args - Arguments to create a Role.
   * @example
   * // Create one Role
   * const Role = await prisma.role.create({
   *   data: {
   *     // ... data to create a Role
   *   }
   * })
   * 
  **/
  create<T extends RoleCreateArgs>(
    args: Subset<T, RoleCreateArgs>
  ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>
  /**
   * Delete a Role.
   * @param {RoleDeleteArgs} args - Arguments to delete one Role.
   * @example
   * // Delete one Role
   * const Role = await prisma.role.delete({
   *   where: {
   *     // ... filter to delete one Role
   *   }
   * })
   * 
  **/
  delete<T extends RoleDeleteArgs>(
    args: Subset<T, RoleDeleteArgs>
  ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>
  /**
   * Update one Role.
   * @param {RoleUpdateArgs} args - Arguments to update one Role.
   * @example
   * // Update one Role
   * const role = await prisma.role.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends RoleUpdateArgs>(
    args: Subset<T, RoleUpdateArgs>
  ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>
  /**
   * Delete zero or more Roles.
   * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
   * @example
   * // Delete a few Roles
   * const { count } = await prisma.role.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends RoleDeleteManyArgs>(
    args: Subset<T, RoleDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Roles.
   * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Roles
   * const role = await prisma.role.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends RoleUpdateManyArgs>(
    args: Subset<T, RoleUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Role.
   * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
   * @example
   * // Update or create a Role
   * const role = await prisma.role.upsert({
   *   create: {
   *     // ... data to create a Role
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Role we want to update
   *   }
   * })
  **/
  upsert<T extends RoleUpsertArgs>(
    args: Subset<T, RoleUpsertArgs>
  ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyRoleArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateRoleArgs>(args: Subset<T, AggregateRoleArgs>): Promise<GetRoleAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Role.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__RoleClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  users<T extends FindManyUserArgs = {}>(args?: Subset<T, FindManyUserArgs>): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Role findOne
 */
export type FindOneRoleArgs = {
  /**
   * Select specific fields to fetch from the Role
  **/
  select?: RoleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RoleInclude | null
  /**
   * Filter, which Role to fetch.
  **/
  where: RoleWhereUniqueInput
}


/**
 * Role findMany
 */
export type FindManyRoleArgs = {
  /**
   * Select specific fields to fetch from the Role
  **/
  select?: RoleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RoleInclude | null
  /**
   * Filter, which Roles to fetch.
  **/
  where?: RoleWhereInput
  /**
   * Determine the order of the Roles to fetch.
  **/
  orderBy?: Enumerable<RoleOrderByInput>
  /**
   * Sets the position for listing Roles.
  **/
  cursor?: RoleWhereUniqueInput
  /**
   * The number of Roles to fetch. If negative number, it will take Roles before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Roles.
  **/
  skip?: number
  distinct?: Enumerable<RoleDistinctFieldEnum>
}


/**
 * Role create
 */
export type RoleCreateArgs = {
  /**
   * Select specific fields to fetch from the Role
  **/
  select?: RoleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RoleInclude | null
  /**
   * The data needed to create a Role.
  **/
  data: RoleCreateInput
}


/**
 * Role update
 */
export type RoleUpdateArgs = {
  /**
   * Select specific fields to fetch from the Role
  **/
  select?: RoleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RoleInclude | null
  /**
   * The data needed to update a Role.
  **/
  data: RoleUpdateInput
  /**
   * Choose, which Role to update.
  **/
  where: RoleWhereUniqueInput
}


/**
 * Role updateMany
 */
export type RoleUpdateManyArgs = {
  data: RoleUpdateManyMutationInput
  where?: RoleWhereInput
}


/**
 * Role upsert
 */
export type RoleUpsertArgs = {
  /**
   * Select specific fields to fetch from the Role
  **/
  select?: RoleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RoleInclude | null
  /**
   * The filter to search for the Role to update in case it exists.
  **/
  where: RoleWhereUniqueInput
  /**
   * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
  **/
  create: RoleCreateInput
  /**
   * In case the Role was found with the provided `where` argument, update it with this data.
  **/
  update: RoleUpdateInput
}


/**
 * Role delete
 */
export type RoleDeleteArgs = {
  /**
   * Select specific fields to fetch from the Role
  **/
  select?: RoleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RoleInclude | null
  /**
   * Filter which Role to delete.
  **/
  where: RoleWhereUniqueInput
}


/**
 * Role deleteMany
 */
export type RoleDeleteManyArgs = {
  where?: RoleWhereInput
}


/**
 * Role without action
 */
export type RoleArgs = {
  /**
   * Select specific fields to fetch from the Role
  **/
  select?: RoleSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: RoleInclude | null
}



/**
 * Deep Input Types
 */


export type NestedStringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter | null
}

export type StringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringFilter
}

export type NestedDateTimeFilter = {
  equals?: Date | string
  in?: Enumerable<Date | string>
  notIn?: Enumerable<Date | string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: NestedDateTimeFilter | null
}

export type DateTimeFilter = {
  equals?: Date | string
  in?: Enumerable<Date | string>
  notIn?: Enumerable<Date | string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: Date | string | NestedDateTimeFilter
}

export type NestedStringNullableFilter = {
  equals?: string | null
  in?: Enumerable<string> | null
  notIn?: Enumerable<string> | null
  lt?: string | null
  lte?: string | null
  gt?: string | null
  gte?: string | null
  contains?: string | null
  startsWith?: string | null
  endsWith?: string | null
  not?: NestedStringNullableFilter | null
}

export type StringNullableFilter = {
  equals?: string | null
  in?: Enumerable<string> | null
  notIn?: Enumerable<string> | null
  lt?: string | null
  lte?: string | null
  gt?: string | null
  gte?: string | null
  contains?: string | null
  startsWith?: string | null
  endsWith?: string | null
  not?: string | NestedStringNullableFilter | null
}

export type UserListRelationFilter = {
  every?: UserWhereInput
  some?: UserWhereInput
  none?: UserWhereInput
}

export type RoleWhereInput = {
  AND?: Enumerable<RoleWhereInput>
  OR?: Array<RoleWhereInput>
  NOT?: Enumerable<RoleWhereInput>
  id?: string | StringFilter
  name?: string | StringFilter
  description?: string | StringNullableFilter | null
  users?: UserListRelationFilter
  createdAt?: Date | string | DateTimeFilter
}

export type RoleRelationFilter = {
  is?: RoleWhereInput | null
  isNot?: RoleWhereInput | null
}

export type UserWhereInput = {
  AND?: Enumerable<UserWhereInput>
  OR?: Array<UserWhereInput>
  NOT?: Enumerable<UserWhereInput>
  id?: string | StringFilter
  createdAt?: Date | string | DateTimeFilter
  email?: string | StringFilter
  name?: string | StringFilter
  roleId?: string | StringFilter
  role?: RoleWhereInput | null
}

export type UserOrderByInput = {
  id?: SortOrder
  createdAt?: SortOrder
  email?: SortOrder
  name?: SortOrder
  roleId?: SortOrder
}

export type UserWhereUniqueInput = {
  id?: string
  email?: string
}

export type RoleOrderByInput = {
  id?: SortOrder
  name?: SortOrder
  description?: SortOrder
  createdAt?: SortOrder
}

export type RoleWhereUniqueInput = {
  id?: string
  name?: string
}

export type RoleCreateWithoutUsersInput = {
  id?: string
  name: string
  description?: string | null
  createdAt?: Date | string
}

export type RoleCreateOneWithoutUsersInput = {
  create?: RoleCreateWithoutUsersInput
  connect?: RoleWhereUniqueInput
}

export type UserCreateInput = {
  id?: string
  createdAt?: Date | string
  email: string
  name: string
  role: RoleCreateOneWithoutUsersInput
}

export type RoleUpdateWithoutUsersDataInput = {
  id?: string
  name?: string
  description?: string | null
  createdAt?: Date | string
}

export type RoleUpsertWithoutUsersInput = {
  update: RoleUpdateWithoutUsersDataInput
  create: RoleCreateWithoutUsersInput
}

export type RoleUpdateOneRequiredWithoutUsersInput = {
  create?: RoleCreateWithoutUsersInput
  connect?: RoleWhereUniqueInput
  update?: RoleUpdateWithoutUsersDataInput
  upsert?: RoleUpsertWithoutUsersInput
}

export type UserUpdateInput = {
  id?: string
  createdAt?: Date | string
  email?: string
  name?: string
  role?: RoleUpdateOneRequiredWithoutUsersInput
}

export type UserUpdateManyMutationInput = {
  id?: string
  createdAt?: Date | string
  email?: string
  name?: string
}

export type UserCreateWithoutRoleInput = {
  id?: string
  createdAt?: Date | string
  email: string
  name: string
}

export type UserCreateManyWithoutRoleInput = {
  create?: Enumerable<UserCreateWithoutRoleInput>
  connect?: Enumerable<UserWhereUniqueInput>
}

export type RoleCreateInput = {
  id?: string
  name: string
  description?: string | null
  createdAt?: Date | string
  users?: UserCreateManyWithoutRoleInput
}

export type UserUpdateWithoutRoleDataInput = {
  id?: string
  createdAt?: Date | string
  email?: string
  name?: string
}

export type UserUpdateWithWhereUniqueWithoutRoleInput = {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutRoleDataInput
}

export type UserScalarWhereInput = {
  AND?: Enumerable<UserScalarWhereInput>
  OR?: Array<UserScalarWhereInput>
  NOT?: Enumerable<UserScalarWhereInput>
  id?: string | StringFilter
  createdAt?: Date | string | DateTimeFilter
  email?: string | StringFilter
  name?: string | StringFilter
  roleId?: string | StringFilter
}

export type UserUpdateManyDataInput = {
  id?: string
  createdAt?: Date | string
  email?: string
  name?: string
}

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export type UserUpsertWithWhereUniqueWithoutRoleInput = {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutRoleDataInput
  create: UserCreateWithoutRoleInput
}

export type UserUpdateManyWithoutRoleInput = {
  create?: Enumerable<UserCreateWithoutRoleInput>
  connect?: Enumerable<UserWhereUniqueInput>
  set?: Enumerable<UserWhereUniqueInput>
  disconnect?: Enumerable<UserWhereUniqueInput>
  delete?: Enumerable<UserWhereUniqueInput>
  update?: Enumerable<UserUpdateWithWhereUniqueWithoutRoleInput>
  updateMany?: Enumerable<UserUpdateManyWithWhereNestedInput> | null
  deleteMany?: Enumerable<UserScalarWhereInput>
  upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRoleInput>
}

export type RoleUpdateInput = {
  id?: string
  name?: string
  description?: string | null
  createdAt?: Date | string
  users?: UserUpdateManyWithoutRoleInput
}

export type RoleUpdateManyMutationInput = {
  id?: string
  name?: string
  description?: string | null
  createdAt?: Date | string
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
