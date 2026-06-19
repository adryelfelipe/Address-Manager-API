
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model address_logs
 * 
 */
export type address_logs = $Result.DefaultSelection<Prisma.$address_logsPayload>
/**
 * Model addresses
 * 
 */
export type addresses = $Result.DefaultSelection<Prisma.$addressesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Address_logs
 * const address_logs = await prisma.address_logs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Address_logs
   * const address_logs = await prisma.address_logs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.address_logs`: Exposes CRUD operations for the **address_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Address_logs
    * const address_logs = await prisma.address_logs.findMany()
    * ```
    */
  get address_logs(): Prisma.address_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addresses`: Exposes CRUD operations for the **addresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.addresses.findMany()
    * ```
    */
  get addresses(): Prisma.addressesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    address_logs: 'address_logs',
    addresses: 'addresses',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "address_logs" | "addresses" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      address_logs: {
        payload: Prisma.$address_logsPayload<ExtArgs>
        fields: Prisma.address_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.address_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.address_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload>
          }
          findFirst: {
            args: Prisma.address_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.address_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload>
          }
          findMany: {
            args: Prisma.address_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload>[]
          }
          create: {
            args: Prisma.address_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload>
          }
          createMany: {
            args: Prisma.address_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.address_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload>[]
          }
          delete: {
            args: Prisma.address_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload>
          }
          update: {
            args: Prisma.address_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload>
          }
          deleteMany: {
            args: Prisma.address_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.address_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.address_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload>[]
          }
          upsert: {
            args: Prisma.address_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$address_logsPayload>
          }
          aggregate: {
            args: Prisma.Address_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress_logs>
          }
          groupBy: {
            args: Prisma.address_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Address_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.address_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Address_logsCountAggregateOutputType> | number
          }
        }
      }
      addresses: {
        payload: Prisma.$addressesPayload<ExtArgs>
        fields: Prisma.addressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findFirst: {
            args: Prisma.addressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findMany: {
            args: Prisma.addressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          create: {
            args: Prisma.addressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          createMany: {
            args: Prisma.addressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addressesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          delete: {
            args: Prisma.addressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          update: {
            args: Prisma.addressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          deleteMany: {
            args: Prisma.addressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.addressesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          upsert: {
            args: Prisma.addressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          aggregate: {
            args: Prisma.AddressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddresses>
          }
          groupBy: {
            args: Prisma.addressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressesCountArgs<ExtArgs>
            result: $Utils.Optional<AddressesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    address_logs?: address_logsOmit
    addresses?: addressesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    address_logs: number
    addresses: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address_logs?: boolean | UsersCountOutputTypeCountAddress_logsArgs
    addresses?: boolean | UsersCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAddress_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: address_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model address_logs
   */

  export type AggregateAddress_logs = {
    _count: Address_logsCountAggregateOutputType | null
    _avg: Address_logsAvgAggregateOutputType | null
    _sum: Address_logsSumAggregateOutputType | null
    _min: Address_logsMinAggregateOutputType | null
    _max: Address_logsMaxAggregateOutputType | null
  }

  export type Address_logsAvgAggregateOutputType = {
    id: number | null
    address_id: number | null
    user_id: number | null
  }

  export type Address_logsSumAggregateOutputType = {
    id: number | null
    address_id: number | null
    user_id: number | null
  }

  export type Address_logsMinAggregateOutputType = {
    id: number | null
    address_id: number | null
    user_id: number | null
    operation: string | null
    created_at: Date | null
  }

  export type Address_logsMaxAggregateOutputType = {
    id: number | null
    address_id: number | null
    user_id: number | null
    operation: string | null
    created_at: Date | null
  }

  export type Address_logsCountAggregateOutputType = {
    id: number
    address_id: number
    user_id: number
    operation: number
    changed_data: number
    created_at: number
    _all: number
  }


  export type Address_logsAvgAggregateInputType = {
    id?: true
    address_id?: true
    user_id?: true
  }

  export type Address_logsSumAggregateInputType = {
    id?: true
    address_id?: true
    user_id?: true
  }

  export type Address_logsMinAggregateInputType = {
    id?: true
    address_id?: true
    user_id?: true
    operation?: true
    created_at?: true
  }

  export type Address_logsMaxAggregateInputType = {
    id?: true
    address_id?: true
    user_id?: true
    operation?: true
    created_at?: true
  }

  export type Address_logsCountAggregateInputType = {
    id?: true
    address_id?: true
    user_id?: true
    operation?: true
    changed_data?: true
    created_at?: true
    _all?: true
  }

  export type Address_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which address_logs to aggregate.
     */
    where?: address_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of address_logs to fetch.
     */
    orderBy?: address_logsOrderByWithRelationInput | address_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: address_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` address_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` address_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned address_logs
    **/
    _count?: true | Address_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Address_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Address_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Address_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Address_logsMaxAggregateInputType
  }

  export type GetAddress_logsAggregateType<T extends Address_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress_logs[P]>
      : GetScalarType<T[P], AggregateAddress_logs[P]>
  }




  export type address_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: address_logsWhereInput
    orderBy?: address_logsOrderByWithAggregationInput | address_logsOrderByWithAggregationInput[]
    by: Address_logsScalarFieldEnum[] | Address_logsScalarFieldEnum
    having?: address_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Address_logsCountAggregateInputType | true
    _avg?: Address_logsAvgAggregateInputType
    _sum?: Address_logsSumAggregateInputType
    _min?: Address_logsMinAggregateInputType
    _max?: Address_logsMaxAggregateInputType
  }

  export type Address_logsGroupByOutputType = {
    id: number
    address_id: number
    user_id: number
    operation: string
    changed_data: JsonValue
    created_at: Date
    _count: Address_logsCountAggregateOutputType | null
    _avg: Address_logsAvgAggregateOutputType | null
    _sum: Address_logsSumAggregateOutputType | null
    _min: Address_logsMinAggregateOutputType | null
    _max: Address_logsMaxAggregateOutputType | null
  }

  type GetAddress_logsGroupByPayload<T extends address_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Address_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Address_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Address_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Address_logsGroupByOutputType[P]>
        }
      >
    >


  export type address_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address_id?: boolean
    user_id?: boolean
    operation?: boolean
    changed_data?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address_logs"]>

  export type address_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address_id?: boolean
    user_id?: boolean
    operation?: boolean
    changed_data?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address_logs"]>

  export type address_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address_id?: boolean
    user_id?: boolean
    operation?: boolean
    changed_data?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address_logs"]>

  export type address_logsSelectScalar = {
    id?: boolean
    address_id?: boolean
    user_id?: boolean
    operation?: boolean
    changed_data?: boolean
    created_at?: boolean
  }

  export type address_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address_id" | "user_id" | "operation" | "changed_data" | "created_at", ExtArgs["result"]["address_logs"]>
  export type address_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type address_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type address_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $address_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "address_logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address_id: number
      user_id: number
      operation: string
      changed_data: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["address_logs"]>
    composites: {}
  }

  type address_logsGetPayload<S extends boolean | null | undefined | address_logsDefaultArgs> = $Result.GetResult<Prisma.$address_logsPayload, S>

  type address_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<address_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Address_logsCountAggregateInputType | true
    }

  export interface address_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['address_logs'], meta: { name: 'address_logs' } }
    /**
     * Find zero or one Address_logs that matches the filter.
     * @param {address_logsFindUniqueArgs} args - Arguments to find a Address_logs
     * @example
     * // Get one Address_logs
     * const address_logs = await prisma.address_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends address_logsFindUniqueArgs>(args: SelectSubset<T, address_logsFindUniqueArgs<ExtArgs>>): Prisma__address_logsClient<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {address_logsFindUniqueOrThrowArgs} args - Arguments to find a Address_logs
     * @example
     * // Get one Address_logs
     * const address_logs = await prisma.address_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends address_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, address_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__address_logsClient<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {address_logsFindFirstArgs} args - Arguments to find a Address_logs
     * @example
     * // Get one Address_logs
     * const address_logs = await prisma.address_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends address_logsFindFirstArgs>(args?: SelectSubset<T, address_logsFindFirstArgs<ExtArgs>>): Prisma__address_logsClient<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {address_logsFindFirstOrThrowArgs} args - Arguments to find a Address_logs
     * @example
     * // Get one Address_logs
     * const address_logs = await prisma.address_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends address_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, address_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__address_logsClient<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Address_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {address_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Address_logs
     * const address_logs = await prisma.address_logs.findMany()
     * 
     * // Get first 10 Address_logs
     * const address_logs = await prisma.address_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const address_logsWithIdOnly = await prisma.address_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends address_logsFindManyArgs>(args?: SelectSubset<T, address_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address_logs.
     * @param {address_logsCreateArgs} args - Arguments to create a Address_logs.
     * @example
     * // Create one Address_logs
     * const Address_logs = await prisma.address_logs.create({
     *   data: {
     *     // ... data to create a Address_logs
     *   }
     * })
     * 
     */
    create<T extends address_logsCreateArgs>(args: SelectSubset<T, address_logsCreateArgs<ExtArgs>>): Prisma__address_logsClient<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Address_logs.
     * @param {address_logsCreateManyArgs} args - Arguments to create many Address_logs.
     * @example
     * // Create many Address_logs
     * const address_logs = await prisma.address_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends address_logsCreateManyArgs>(args?: SelectSubset<T, address_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Address_logs and returns the data saved in the database.
     * @param {address_logsCreateManyAndReturnArgs} args - Arguments to create many Address_logs.
     * @example
     * // Create many Address_logs
     * const address_logs = await prisma.address_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Address_logs and only return the `id`
     * const address_logsWithIdOnly = await prisma.address_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends address_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, address_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address_logs.
     * @param {address_logsDeleteArgs} args - Arguments to delete one Address_logs.
     * @example
     * // Delete one Address_logs
     * const Address_logs = await prisma.address_logs.delete({
     *   where: {
     *     // ... filter to delete one Address_logs
     *   }
     * })
     * 
     */
    delete<T extends address_logsDeleteArgs>(args: SelectSubset<T, address_logsDeleteArgs<ExtArgs>>): Prisma__address_logsClient<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address_logs.
     * @param {address_logsUpdateArgs} args - Arguments to update one Address_logs.
     * @example
     * // Update one Address_logs
     * const address_logs = await prisma.address_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends address_logsUpdateArgs>(args: SelectSubset<T, address_logsUpdateArgs<ExtArgs>>): Prisma__address_logsClient<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Address_logs.
     * @param {address_logsDeleteManyArgs} args - Arguments to filter Address_logs to delete.
     * @example
     * // Delete a few Address_logs
     * const { count } = await prisma.address_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends address_logsDeleteManyArgs>(args?: SelectSubset<T, address_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Address_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {address_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Address_logs
     * const address_logs = await prisma.address_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends address_logsUpdateManyArgs>(args: SelectSubset<T, address_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Address_logs and returns the data updated in the database.
     * @param {address_logsUpdateManyAndReturnArgs} args - Arguments to update many Address_logs.
     * @example
     * // Update many Address_logs
     * const address_logs = await prisma.address_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Address_logs and only return the `id`
     * const address_logsWithIdOnly = await prisma.address_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends address_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, address_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address_logs.
     * @param {address_logsUpsertArgs} args - Arguments to update or create a Address_logs.
     * @example
     * // Update or create a Address_logs
     * const address_logs = await prisma.address_logs.upsert({
     *   create: {
     *     // ... data to create a Address_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address_logs we want to update
     *   }
     * })
     */
    upsert<T extends address_logsUpsertArgs>(args: SelectSubset<T, address_logsUpsertArgs<ExtArgs>>): Prisma__address_logsClient<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Address_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {address_logsCountArgs} args - Arguments to filter Address_logs to count.
     * @example
     * // Count the number of Address_logs
     * const count = await prisma.address_logs.count({
     *   where: {
     *     // ... the filter for the Address_logs we want to count
     *   }
     * })
    **/
    count<T extends address_logsCountArgs>(
      args?: Subset<T, address_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Address_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Address_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Address_logsAggregateArgs>(args: Subset<T, Address_logsAggregateArgs>): Prisma.PrismaPromise<GetAddress_logsAggregateType<T>>

    /**
     * Group by Address_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {address_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends address_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: address_logsGroupByArgs['orderBy'] }
        : { orderBy?: address_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, address_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddress_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the address_logs model
   */
  readonly fields: address_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for address_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__address_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the address_logs model
   */
  interface address_logsFieldRefs {
    readonly id: FieldRef<"address_logs", 'Int'>
    readonly address_id: FieldRef<"address_logs", 'Int'>
    readonly user_id: FieldRef<"address_logs", 'Int'>
    readonly operation: FieldRef<"address_logs", 'String'>
    readonly changed_data: FieldRef<"address_logs", 'Json'>
    readonly created_at: FieldRef<"address_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * address_logs findUnique
   */
  export type address_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
    /**
     * Filter, which address_logs to fetch.
     */
    where: address_logsWhereUniqueInput
  }

  /**
   * address_logs findUniqueOrThrow
   */
  export type address_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
    /**
     * Filter, which address_logs to fetch.
     */
    where: address_logsWhereUniqueInput
  }

  /**
   * address_logs findFirst
   */
  export type address_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
    /**
     * Filter, which address_logs to fetch.
     */
    where?: address_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of address_logs to fetch.
     */
    orderBy?: address_logsOrderByWithRelationInput | address_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for address_logs.
     */
    cursor?: address_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` address_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` address_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of address_logs.
     */
    distinct?: Address_logsScalarFieldEnum | Address_logsScalarFieldEnum[]
  }

  /**
   * address_logs findFirstOrThrow
   */
  export type address_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
    /**
     * Filter, which address_logs to fetch.
     */
    where?: address_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of address_logs to fetch.
     */
    orderBy?: address_logsOrderByWithRelationInput | address_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for address_logs.
     */
    cursor?: address_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` address_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` address_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of address_logs.
     */
    distinct?: Address_logsScalarFieldEnum | Address_logsScalarFieldEnum[]
  }

  /**
   * address_logs findMany
   */
  export type address_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
    /**
     * Filter, which address_logs to fetch.
     */
    where?: address_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of address_logs to fetch.
     */
    orderBy?: address_logsOrderByWithRelationInput | address_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing address_logs.
     */
    cursor?: address_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` address_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` address_logs.
     */
    skip?: number
    distinct?: Address_logsScalarFieldEnum | Address_logsScalarFieldEnum[]
  }

  /**
   * address_logs create
   */
  export type address_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a address_logs.
     */
    data: XOR<address_logsCreateInput, address_logsUncheckedCreateInput>
  }

  /**
   * address_logs createMany
   */
  export type address_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many address_logs.
     */
    data: address_logsCreateManyInput | address_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * address_logs createManyAndReturn
   */
  export type address_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * The data used to create many address_logs.
     */
    data: address_logsCreateManyInput | address_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * address_logs update
   */
  export type address_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a address_logs.
     */
    data: XOR<address_logsUpdateInput, address_logsUncheckedUpdateInput>
    /**
     * Choose, which address_logs to update.
     */
    where: address_logsWhereUniqueInput
  }

  /**
   * address_logs updateMany
   */
  export type address_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update address_logs.
     */
    data: XOR<address_logsUpdateManyMutationInput, address_logsUncheckedUpdateManyInput>
    /**
     * Filter which address_logs to update
     */
    where?: address_logsWhereInput
    /**
     * Limit how many address_logs to update.
     */
    limit?: number
  }

  /**
   * address_logs updateManyAndReturn
   */
  export type address_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * The data used to update address_logs.
     */
    data: XOR<address_logsUpdateManyMutationInput, address_logsUncheckedUpdateManyInput>
    /**
     * Filter which address_logs to update
     */
    where?: address_logsWhereInput
    /**
     * Limit how many address_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * address_logs upsert
   */
  export type address_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the address_logs to update in case it exists.
     */
    where: address_logsWhereUniqueInput
    /**
     * In case the address_logs found by the `where` argument doesn't exist, create a new address_logs with this data.
     */
    create: XOR<address_logsCreateInput, address_logsUncheckedCreateInput>
    /**
     * In case the address_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<address_logsUpdateInput, address_logsUncheckedUpdateInput>
  }

  /**
   * address_logs delete
   */
  export type address_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
    /**
     * Filter which address_logs to delete.
     */
    where: address_logsWhereUniqueInput
  }

  /**
   * address_logs deleteMany
   */
  export type address_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which address_logs to delete
     */
    where?: address_logsWhereInput
    /**
     * Limit how many address_logs to delete.
     */
    limit?: number
  }

  /**
   * address_logs without action
   */
  export type address_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
  }


  /**
   * Model addresses
   */

  export type AggregateAddresses = {
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  export type AddressesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressesMinAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    complement: string | null
    neighborhood: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesMaxAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    complement: string | null
    neighborhood: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesCountAggregateOutputType = {
    id: number
    street: number
    number: number
    complement: number
    neighborhood: number
    city: number
    state: number
    zip_code: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AddressesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressesMinAggregateInputType = {
    id?: true
    street?: true
    number?: true
    complement?: true
    neighborhood?: true
    city?: true
    state?: true
    zip_code?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesMaxAggregateInputType = {
    id?: true
    street?: true
    number?: true
    complement?: true
    neighborhood?: true
    city?: true
    state?: true
    zip_code?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesCountAggregateInputType = {
    id?: true
    street?: true
    number?: true
    complement?: true
    neighborhood?: true
    city?: true
    state?: true
    zip_code?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AddressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to aggregate.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressesMaxAggregateInputType
  }

  export type GetAddressesAggregateType<T extends AddressesAggregateArgs> = {
        [P in keyof T & keyof AggregateAddresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddresses[P]>
      : GetScalarType<T[P], AggregateAddresses[P]>
  }




  export type addressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithAggregationInput | addressesOrderByWithAggregationInput[]
    by: AddressesScalarFieldEnum[] | AddressesScalarFieldEnum
    having?: addressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressesCountAggregateInputType | true
    _avg?: AddressesAvgAggregateInputType
    _sum?: AddressesSumAggregateInputType
    _min?: AddressesMinAggregateInputType
    _max?: AddressesMaxAggregateInputType
  }

  export type AddressesGroupByOutputType = {
    id: number
    street: string
    number: string | null
    complement: string | null
    neighborhood: string | null
    city: string
    state: string
    zip_code: string
    user_id: number
    created_at: Date
    updated_at: Date
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  type GetAddressesGroupByPayload<T extends addressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressesGroupByOutputType[P]>
            : GetScalarType<T[P], AddressesGroupByOutputType[P]>
        }
      >
    >


  export type addressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectScalar = {
    id?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type addressesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "number" | "complement" | "neighborhood" | "city" | "state" | "zip_code" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["addresses"]>
  export type addressesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type addressesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type addressesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $addressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "addresses"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      street: string
      number: string | null
      complement: string | null
      neighborhood: string | null
      city: string
      state: string
      zip_code: string
      user_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["addresses"]>
    composites: {}
  }

  type addressesGetPayload<S extends boolean | null | undefined | addressesDefaultArgs> = $Result.GetResult<Prisma.$addressesPayload, S>

  type addressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressesCountAggregateInputType | true
    }

  export interface addressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['addresses'], meta: { name: 'addresses' } }
    /**
     * Find zero or one Addresses that matches the filter.
     * @param {addressesFindUniqueArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressesFindUniqueArgs>(args: SelectSubset<T, addressesFindUniqueArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Addresses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressesFindUniqueOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressesFindUniqueOrThrowArgs>(args: SelectSubset<T, addressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressesFindFirstArgs>(args?: SelectSubset<T, addressesFindFirstArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressesFindFirstOrThrowArgs>(args?: SelectSubset<T, addressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.addresses.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.addresses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressesWithIdOnly = await prisma.addresses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addressesFindManyArgs>(args?: SelectSubset<T, addressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Addresses.
     * @param {addressesCreateArgs} args - Arguments to create a Addresses.
     * @example
     * // Create one Addresses
     * const Addresses = await prisma.addresses.create({
     *   data: {
     *     // ... data to create a Addresses
     *   }
     * })
     * 
     */
    create<T extends addressesCreateArgs>(args: SelectSubset<T, addressesCreateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressesCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressesCreateManyArgs>(args?: SelectSubset<T, addressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {addressesCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressesWithIdOnly = await prisma.addresses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addressesCreateManyAndReturnArgs>(args?: SelectSubset<T, addressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Addresses.
     * @param {addressesDeleteArgs} args - Arguments to delete one Addresses.
     * @example
     * // Delete one Addresses
     * const Addresses = await prisma.addresses.delete({
     *   where: {
     *     // ... filter to delete one Addresses
     *   }
     * })
     * 
     */
    delete<T extends addressesDeleteArgs>(args: SelectSubset<T, addressesDeleteArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Addresses.
     * @param {addressesUpdateArgs} args - Arguments to update one Addresses.
     * @example
     * // Update one Addresses
     * const addresses = await prisma.addresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressesUpdateArgs>(args: SelectSubset<T, addressesUpdateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressesDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.addresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressesDeleteManyArgs>(args?: SelectSubset<T, addressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressesUpdateManyArgs>(args: SelectSubset<T, addressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {addressesUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressesWithIdOnly = await prisma.addresses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends addressesUpdateManyAndReturnArgs>(args: SelectSubset<T, addressesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Addresses.
     * @param {addressesUpsertArgs} args - Arguments to update or create a Addresses.
     * @example
     * // Update or create a Addresses
     * const addresses = await prisma.addresses.upsert({
     *   create: {
     *     // ... data to create a Addresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addresses we want to update
     *   }
     * })
     */
    upsert<T extends addressesUpsertArgs>(args: SelectSubset<T, addressesUpsertArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.addresses.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressesCountArgs>(
      args?: Subset<T, addressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressesAggregateArgs>(args: Subset<T, AddressesAggregateArgs>): Prisma.PrismaPromise<GetAddressesAggregateType<T>>

    /**
     * Group by Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends addressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressesGroupByArgs['orderBy'] }
        : { orderBy?: addressesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, addressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the addresses model
   */
  readonly fields: addressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for addresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the addresses model
   */
  interface addressesFieldRefs {
    readonly id: FieldRef<"addresses", 'Int'>
    readonly street: FieldRef<"addresses", 'String'>
    readonly number: FieldRef<"addresses", 'String'>
    readonly complement: FieldRef<"addresses", 'String'>
    readonly neighborhood: FieldRef<"addresses", 'String'>
    readonly city: FieldRef<"addresses", 'String'>
    readonly state: FieldRef<"addresses", 'String'>
    readonly zip_code: FieldRef<"addresses", 'String'>
    readonly user_id: FieldRef<"addresses", 'Int'>
    readonly created_at: FieldRef<"addresses", 'DateTime'>
    readonly updated_at: FieldRef<"addresses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * addresses findUnique
   */
  export type addressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findUniqueOrThrow
   */
  export type addressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findFirst
   */
  export type addressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findFirstOrThrow
   */
  export type addressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findMany
   */
  export type addressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses create
   */
  export type addressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to create a addresses.
     */
    data: XOR<addressesCreateInput, addressesUncheckedCreateInput>
  }

  /**
   * addresses createMany
   */
  export type addressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * addresses createManyAndReturn
   */
  export type addressesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * addresses update
   */
  export type addressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to update a addresses.
     */
    data: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
    /**
     * Choose, which addresses to update.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses updateMany
   */
  export type addressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * addresses updateManyAndReturn
   */
  export type addressesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * addresses upsert
   */
  export type addressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The filter to search for the addresses to update in case it exists.
     */
    where: addressesWhereUniqueInput
    /**
     * In case the addresses found by the `where` argument doesn't exist, create a new addresses with this data.
     */
    create: XOR<addressesCreateInput, addressesUncheckedCreateInput>
    /**
     * In case the addresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
  }

  /**
   * addresses delete
   */
  export type addressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter which addresses to delete.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses deleteMany
   */
  export type addressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * addresses without action
   */
  export type addressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    address_logs?: boolean | users$address_logsArgs<ExtArgs>
    addresses?: boolean | users$addressesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address_logs?: boolean | users$address_logsArgs<ExtArgs>
    addresses?: boolean | users$addressesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      address_logs: Prisma.$address_logsPayload<ExtArgs>[]
      addresses: Prisma.$addressesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address_logs<T extends users$address_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$address_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$address_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addresses<T extends users$addressesArgs<ExtArgs> = {}>(args?: Subset<T, users$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.address_logs
   */
  export type users$address_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address_logs
     */
    select?: address_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address_logs
     */
    omit?: address_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: address_logsInclude<ExtArgs> | null
    where?: address_logsWhereInput
    orderBy?: address_logsOrderByWithRelationInput | address_logsOrderByWithRelationInput[]
    cursor?: address_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Address_logsScalarFieldEnum | Address_logsScalarFieldEnum[]
  }

  /**
   * users.addresses
   */
  export type users$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    cursor?: addressesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Address_logsScalarFieldEnum: {
    id: 'id',
    address_id: 'address_id',
    user_id: 'user_id',
    operation: 'operation',
    changed_data: 'changed_data',
    created_at: 'created_at'
  };

  export type Address_logsScalarFieldEnum = (typeof Address_logsScalarFieldEnum)[keyof typeof Address_logsScalarFieldEnum]


  export const AddressesScalarFieldEnum: {
    id: 'id',
    street: 'street',
    number: 'number',
    complement: 'complement',
    neighborhood: 'neighborhood',
    city: 'city',
    state: 'state',
    zip_code: 'zip_code',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type address_logsWhereInput = {
    AND?: address_logsWhereInput | address_logsWhereInput[]
    OR?: address_logsWhereInput[]
    NOT?: address_logsWhereInput | address_logsWhereInput[]
    id?: IntFilter<"address_logs"> | number
    address_id?: IntFilter<"address_logs"> | number
    user_id?: IntFilter<"address_logs"> | number
    operation?: StringFilter<"address_logs"> | string
    changed_data?: JsonFilter<"address_logs">
    created_at?: DateTimeFilter<"address_logs"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type address_logsOrderByWithRelationInput = {
    id?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    operation?: SortOrder
    changed_data?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type address_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: address_logsWhereInput | address_logsWhereInput[]
    OR?: address_logsWhereInput[]
    NOT?: address_logsWhereInput | address_logsWhereInput[]
    address_id?: IntFilter<"address_logs"> | number
    user_id?: IntFilter<"address_logs"> | number
    operation?: StringFilter<"address_logs"> | string
    changed_data?: JsonFilter<"address_logs">
    created_at?: DateTimeFilter<"address_logs"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type address_logsOrderByWithAggregationInput = {
    id?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    operation?: SortOrder
    changed_data?: SortOrder
    created_at?: SortOrder
    _count?: address_logsCountOrderByAggregateInput
    _avg?: address_logsAvgOrderByAggregateInput
    _max?: address_logsMaxOrderByAggregateInput
    _min?: address_logsMinOrderByAggregateInput
    _sum?: address_logsSumOrderByAggregateInput
  }

  export type address_logsScalarWhereWithAggregatesInput = {
    AND?: address_logsScalarWhereWithAggregatesInput | address_logsScalarWhereWithAggregatesInput[]
    OR?: address_logsScalarWhereWithAggregatesInput[]
    NOT?: address_logsScalarWhereWithAggregatesInput | address_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"address_logs"> | number
    address_id?: IntWithAggregatesFilter<"address_logs"> | number
    user_id?: IntWithAggregatesFilter<"address_logs"> | number
    operation?: StringWithAggregatesFilter<"address_logs"> | string
    changed_data?: JsonWithAggregatesFilter<"address_logs">
    created_at?: DateTimeWithAggregatesFilter<"address_logs"> | Date | string
  }

  export type addressesWhereInput = {
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    id?: IntFilter<"addresses"> | number
    street?: StringFilter<"addresses"> | string
    number?: StringNullableFilter<"addresses"> | string | null
    complement?: StringNullableFilter<"addresses"> | string | null
    neighborhood?: StringNullableFilter<"addresses"> | string | null
    city?: StringFilter<"addresses"> | string
    state?: StringFilter<"addresses"> | string
    zip_code?: StringFilter<"addresses"> | string
    user_id?: IntFilter<"addresses"> | number
    created_at?: DateTimeFilter<"addresses"> | Date | string
    updated_at?: DateTimeFilter<"addresses"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type addressesOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type addressesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    street?: StringFilter<"addresses"> | string
    number?: StringNullableFilter<"addresses"> | string | null
    complement?: StringNullableFilter<"addresses"> | string | null
    neighborhood?: StringNullableFilter<"addresses"> | string | null
    city?: StringFilter<"addresses"> | string
    state?: StringFilter<"addresses"> | string
    zip_code?: StringFilter<"addresses"> | string
    user_id?: IntFilter<"addresses"> | number
    created_at?: DateTimeFilter<"addresses"> | Date | string
    updated_at?: DateTimeFilter<"addresses"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type addressesOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: addressesCountOrderByAggregateInput
    _avg?: addressesAvgOrderByAggregateInput
    _max?: addressesMaxOrderByAggregateInput
    _min?: addressesMinOrderByAggregateInput
    _sum?: addressesSumOrderByAggregateInput
  }

  export type addressesScalarWhereWithAggregatesInput = {
    AND?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    OR?: addressesScalarWhereWithAggregatesInput[]
    NOT?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"addresses"> | number
    street?: StringWithAggregatesFilter<"addresses"> | string
    number?: StringNullableWithAggregatesFilter<"addresses"> | string | null
    complement?: StringNullableWithAggregatesFilter<"addresses"> | string | null
    neighborhood?: StringNullableWithAggregatesFilter<"addresses"> | string | null
    city?: StringWithAggregatesFilter<"addresses"> | string
    state?: StringWithAggregatesFilter<"addresses"> | string
    zip_code?: StringWithAggregatesFilter<"addresses"> | string
    user_id?: IntWithAggregatesFilter<"addresses"> | number
    created_at?: DateTimeWithAggregatesFilter<"addresses"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"addresses"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    address_logs?: Address_logsListRelationFilter
    addresses?: AddressesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    address_logs?: address_logsOrderByRelationAggregateInput
    addresses?: addressesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    address_logs?: Address_logsListRelationFilter
    addresses?: AddressesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type address_logsCreateInput = {
    address_id: number
    operation: string
    changed_data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    users: usersCreateNestedOneWithoutAddress_logsInput
  }

  export type address_logsUncheckedCreateInput = {
    id?: number
    address_id: number
    user_id: number
    operation: string
    changed_data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type address_logsUpdateInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    changed_data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutAddress_logsNestedInput
  }

  export type address_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    changed_data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type address_logsCreateManyInput = {
    id?: number
    address_id: number
    user_id: number
    operation: string
    changed_data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type address_logsUpdateManyMutationInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    changed_data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type address_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    changed_data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesCreateInput = {
    street: string
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zip_code: string
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutAddressesInput
  }

  export type addressesUncheckedCreateInput = {
    id?: number
    street: string
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zip_code: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type addressesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesCreateManyInput = {
    id?: number
    street: string
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zip_code: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    address_logs?: address_logsCreateNestedManyWithoutUsersInput
    addresses?: addressesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    address_logs?: address_logsUncheckedCreateNestedManyWithoutUsersInput
    addresses?: addressesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address_logs?: address_logsUpdateManyWithoutUsersNestedInput
    addresses?: addressesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address_logs?: address_logsUncheckedUpdateManyWithoutUsersNestedInput
    addresses?: addressesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type address_logsCountOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    operation?: SortOrder
    changed_data?: SortOrder
    created_at?: SortOrder
  }

  export type address_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
  }

  export type address_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    operation?: SortOrder
    created_at?: SortOrder
  }

  export type address_logsMinOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    operation?: SortOrder
    created_at?: SortOrder
  }

  export type address_logsSumOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type addressesCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type addressesMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Address_logsListRelationFilter = {
    every?: address_logsWhereInput
    some?: address_logsWhereInput
    none?: address_logsWhereInput
  }

  export type AddressesListRelationFilter = {
    every?: addressesWhereInput
    some?: addressesWhereInput
    none?: addressesWhereInput
  }

  export type address_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addressesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCreateNestedOneWithoutAddress_logsInput = {
    create?: XOR<usersCreateWithoutAddress_logsInput, usersUncheckedCreateWithoutAddress_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddress_logsInput
    connect?: usersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutAddress_logsNestedInput = {
    create?: XOR<usersCreateWithoutAddress_logsInput, usersUncheckedCreateWithoutAddress_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddress_logsInput
    upsert?: usersUpsertWithoutAddress_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAddress_logsInput, usersUpdateWithoutAddress_logsInput>, usersUncheckedUpdateWithoutAddress_logsInput>
  }

  export type usersCreateNestedOneWithoutAddressesInput = {
    create?: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressesInput
    upsert?: usersUpsertWithoutAddressesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAddressesInput, usersUpdateWithoutAddressesInput>, usersUncheckedUpdateWithoutAddressesInput>
  }

  export type address_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<address_logsCreateWithoutUsersInput, address_logsUncheckedCreateWithoutUsersInput> | address_logsCreateWithoutUsersInput[] | address_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: address_logsCreateOrConnectWithoutUsersInput | address_logsCreateOrConnectWithoutUsersInput[]
    createMany?: address_logsCreateManyUsersInputEnvelope
    connect?: address_logsWhereUniqueInput | address_logsWhereUniqueInput[]
  }

  export type addressesCreateNestedManyWithoutUsersInput = {
    create?: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput> | addressesCreateWithoutUsersInput[] | addressesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUsersInput | addressesCreateOrConnectWithoutUsersInput[]
    createMany?: addressesCreateManyUsersInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type address_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<address_logsCreateWithoutUsersInput, address_logsUncheckedCreateWithoutUsersInput> | address_logsCreateWithoutUsersInput[] | address_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: address_logsCreateOrConnectWithoutUsersInput | address_logsCreateOrConnectWithoutUsersInput[]
    createMany?: address_logsCreateManyUsersInputEnvelope
    connect?: address_logsWhereUniqueInput | address_logsWhereUniqueInput[]
  }

  export type addressesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput> | addressesCreateWithoutUsersInput[] | addressesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUsersInput | addressesCreateOrConnectWithoutUsersInput[]
    createMany?: addressesCreateManyUsersInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type address_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<address_logsCreateWithoutUsersInput, address_logsUncheckedCreateWithoutUsersInput> | address_logsCreateWithoutUsersInput[] | address_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: address_logsCreateOrConnectWithoutUsersInput | address_logsCreateOrConnectWithoutUsersInput[]
    upsert?: address_logsUpsertWithWhereUniqueWithoutUsersInput | address_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: address_logsCreateManyUsersInputEnvelope
    set?: address_logsWhereUniqueInput | address_logsWhereUniqueInput[]
    disconnect?: address_logsWhereUniqueInput | address_logsWhereUniqueInput[]
    delete?: address_logsWhereUniqueInput | address_logsWhereUniqueInput[]
    connect?: address_logsWhereUniqueInput | address_logsWhereUniqueInput[]
    update?: address_logsUpdateWithWhereUniqueWithoutUsersInput | address_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: address_logsUpdateManyWithWhereWithoutUsersInput | address_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: address_logsScalarWhereInput | address_logsScalarWhereInput[]
  }

  export type addressesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput> | addressesCreateWithoutUsersInput[] | addressesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUsersInput | addressesCreateOrConnectWithoutUsersInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutUsersInput | addressesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: addressesCreateManyUsersInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutUsersInput | addressesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutUsersInput | addressesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type address_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<address_logsCreateWithoutUsersInput, address_logsUncheckedCreateWithoutUsersInput> | address_logsCreateWithoutUsersInput[] | address_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: address_logsCreateOrConnectWithoutUsersInput | address_logsCreateOrConnectWithoutUsersInput[]
    upsert?: address_logsUpsertWithWhereUniqueWithoutUsersInput | address_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: address_logsCreateManyUsersInputEnvelope
    set?: address_logsWhereUniqueInput | address_logsWhereUniqueInput[]
    disconnect?: address_logsWhereUniqueInput | address_logsWhereUniqueInput[]
    delete?: address_logsWhereUniqueInput | address_logsWhereUniqueInput[]
    connect?: address_logsWhereUniqueInput | address_logsWhereUniqueInput[]
    update?: address_logsUpdateWithWhereUniqueWithoutUsersInput | address_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: address_logsUpdateManyWithWhereWithoutUsersInput | address_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: address_logsScalarWhereInput | address_logsScalarWhereInput[]
  }

  export type addressesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput> | addressesCreateWithoutUsersInput[] | addressesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUsersInput | addressesCreateOrConnectWithoutUsersInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutUsersInput | addressesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: addressesCreateManyUsersInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutUsersInput | addressesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutUsersInput | addressesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutAddress_logsInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAddress_logsInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    addresses?: addressesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAddress_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAddress_logsInput, usersUncheckedCreateWithoutAddress_logsInput>
  }

  export type usersUpsertWithoutAddress_logsInput = {
    update: XOR<usersUpdateWithoutAddress_logsInput, usersUncheckedUpdateWithoutAddress_logsInput>
    create: XOR<usersCreateWithoutAddress_logsInput, usersUncheckedCreateWithoutAddress_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAddress_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAddress_logsInput, usersUncheckedUpdateWithoutAddress_logsInput>
  }

  export type usersUpdateWithoutAddress_logsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAddress_logsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: addressesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutAddressesInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    address_logs?: address_logsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    address_logs?: address_logsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAddressesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
  }

  export type usersUpsertWithoutAddressesInput = {
    update: XOR<usersUpdateWithoutAddressesInput, usersUncheckedUpdateWithoutAddressesInput>
    create: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAddressesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAddressesInput, usersUncheckedUpdateWithoutAddressesInput>
  }

  export type usersUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address_logs?: address_logsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address_logs?: address_logsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type address_logsCreateWithoutUsersInput = {
    address_id: number
    operation: string
    changed_data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type address_logsUncheckedCreateWithoutUsersInput = {
    id?: number
    address_id: number
    operation: string
    changed_data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type address_logsCreateOrConnectWithoutUsersInput = {
    where: address_logsWhereUniqueInput
    create: XOR<address_logsCreateWithoutUsersInput, address_logsUncheckedCreateWithoutUsersInput>
  }

  export type address_logsCreateManyUsersInputEnvelope = {
    data: address_logsCreateManyUsersInput | address_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type addressesCreateWithoutUsersInput = {
    street: string
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zip_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesUncheckedCreateWithoutUsersInput = {
    id?: number
    street: string
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zip_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type addressesCreateOrConnectWithoutUsersInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput>
  }

  export type addressesCreateManyUsersInputEnvelope = {
    data: addressesCreateManyUsersInput | addressesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type address_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: address_logsWhereUniqueInput
    update: XOR<address_logsUpdateWithoutUsersInput, address_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<address_logsCreateWithoutUsersInput, address_logsUncheckedCreateWithoutUsersInput>
  }

  export type address_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: address_logsWhereUniqueInput
    data: XOR<address_logsUpdateWithoutUsersInput, address_logsUncheckedUpdateWithoutUsersInput>
  }

  export type address_logsUpdateManyWithWhereWithoutUsersInput = {
    where: address_logsScalarWhereInput
    data: XOR<address_logsUpdateManyMutationInput, address_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type address_logsScalarWhereInput = {
    AND?: address_logsScalarWhereInput | address_logsScalarWhereInput[]
    OR?: address_logsScalarWhereInput[]
    NOT?: address_logsScalarWhereInput | address_logsScalarWhereInput[]
    id?: IntFilter<"address_logs"> | number
    address_id?: IntFilter<"address_logs"> | number
    user_id?: IntFilter<"address_logs"> | number
    operation?: StringFilter<"address_logs"> | string
    changed_data?: JsonFilter<"address_logs">
    created_at?: DateTimeFilter<"address_logs"> | Date | string
  }

  export type addressesUpsertWithWhereUniqueWithoutUsersInput = {
    where: addressesWhereUniqueInput
    update: XOR<addressesUpdateWithoutUsersInput, addressesUncheckedUpdateWithoutUsersInput>
    create: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput>
  }

  export type addressesUpdateWithWhereUniqueWithoutUsersInput = {
    where: addressesWhereUniqueInput
    data: XOR<addressesUpdateWithoutUsersInput, addressesUncheckedUpdateWithoutUsersInput>
  }

  export type addressesUpdateManyWithWhereWithoutUsersInput = {
    where: addressesScalarWhereInput
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyWithoutUsersInput>
  }

  export type addressesScalarWhereInput = {
    AND?: addressesScalarWhereInput | addressesScalarWhereInput[]
    OR?: addressesScalarWhereInput[]
    NOT?: addressesScalarWhereInput | addressesScalarWhereInput[]
    id?: IntFilter<"addresses"> | number
    street?: StringFilter<"addresses"> | string
    number?: StringNullableFilter<"addresses"> | string | null
    complement?: StringNullableFilter<"addresses"> | string | null
    neighborhood?: StringNullableFilter<"addresses"> | string | null
    city?: StringFilter<"addresses"> | string
    state?: StringFilter<"addresses"> | string
    zip_code?: StringFilter<"addresses"> | string
    user_id?: IntFilter<"addresses"> | number
    created_at?: DateTimeFilter<"addresses"> | Date | string
    updated_at?: DateTimeFilter<"addresses"> | Date | string
  }

  export type address_logsCreateManyUsersInput = {
    id?: number
    address_id: number
    operation: string
    changed_data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type addressesCreateManyUsersInput = {
    id?: number
    street: string
    number?: string | null
    complement?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zip_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type address_logsUpdateWithoutUsersInput = {
    address_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    changed_data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type address_logsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    changed_data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type address_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    operation?: StringFieldUpdateOperationsInput | string
    changed_data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesUpdateWithoutUsersInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}