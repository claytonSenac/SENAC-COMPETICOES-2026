
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model atividade
 * 
 */
export type atividade = $Result.DefaultSelection<Prisma.$atividadePayload>
/**
 * Model atividade_participante
 * 
 */
export type atividade_participante = $Result.DefaultSelection<Prisma.$atividade_participantePayload>
/**
 * Model historicoparticipante
 * 
 */
export type historicoparticipante = $Result.DefaultSelection<Prisma.$historicoparticipantePayload>
/**
 * Model participante
 * 
 */
export type participante = $Result.DefaultSelection<Prisma.$participantePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Atividades
 * const atividades = await prisma.atividade.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Atividades
   * const atividades = await prisma.atividade.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.atividade`: Exposes CRUD operations for the **atividade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atividades
    * const atividades = await prisma.atividade.findMany()
    * ```
    */
  get atividade(): Prisma.atividadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atividade_participante`: Exposes CRUD operations for the **atividade_participante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atividade_participantes
    * const atividade_participantes = await prisma.atividade_participante.findMany()
    * ```
    */
  get atividade_participante(): Prisma.atividade_participanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historicoparticipante`: Exposes CRUD operations for the **historicoparticipante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historicoparticipantes
    * const historicoparticipantes = await prisma.historicoparticipante.findMany()
    * ```
    */
  get historicoparticipante(): Prisma.historicoparticipanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participante`: Exposes CRUD operations for the **participante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participantes
    * const participantes = await prisma.participante.findMany()
    * ```
    */
  get participante(): Prisma.participanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    atividade: 'atividade',
    atividade_participante: 'atividade_participante',
    historicoparticipante: 'historicoparticipante',
    participante: 'participante',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "atividade" | "atividade_participante" | "historicoparticipante" | "participante" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      atividade: {
        payload: Prisma.$atividadePayload<ExtArgs>
        fields: Prisma.atividadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.atividadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.atividadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadePayload>
          }
          findFirst: {
            args: Prisma.atividadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.atividadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadePayload>
          }
          findMany: {
            args: Prisma.atividadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadePayload>[]
          }
          create: {
            args: Prisma.atividadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadePayload>
          }
          createMany: {
            args: Prisma.atividadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.atividadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadePayload>
          }
          update: {
            args: Prisma.atividadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadePayload>
          }
          deleteMany: {
            args: Prisma.atividadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.atividadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.atividadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadePayload>
          }
          aggregate: {
            args: Prisma.AtividadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividade>
          }
          groupBy: {
            args: Prisma.atividadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.atividadeCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadeCountAggregateOutputType> | number
          }
        }
      }
      atividade_participante: {
        payload: Prisma.$atividade_participantePayload<ExtArgs>
        fields: Prisma.atividade_participanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.atividade_participanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividade_participantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.atividade_participanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividade_participantePayload>
          }
          findFirst: {
            args: Prisma.atividade_participanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividade_participantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.atividade_participanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividade_participantePayload>
          }
          findMany: {
            args: Prisma.atividade_participanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividade_participantePayload>[]
          }
          create: {
            args: Prisma.atividade_participanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividade_participantePayload>
          }
          createMany: {
            args: Prisma.atividade_participanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.atividade_participanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividade_participantePayload>
          }
          update: {
            args: Prisma.atividade_participanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividade_participantePayload>
          }
          deleteMany: {
            args: Prisma.atividade_participanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.atividade_participanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.atividade_participanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividade_participantePayload>
          }
          aggregate: {
            args: Prisma.Atividade_participanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividade_participante>
          }
          groupBy: {
            args: Prisma.atividade_participanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Atividade_participanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.atividade_participanteCountArgs<ExtArgs>
            result: $Utils.Optional<Atividade_participanteCountAggregateOutputType> | number
          }
        }
      }
      historicoparticipante: {
        payload: Prisma.$historicoparticipantePayload<ExtArgs>
        fields: Prisma.historicoparticipanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historicoparticipanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoparticipantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historicoparticipanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoparticipantePayload>
          }
          findFirst: {
            args: Prisma.historicoparticipanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoparticipantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historicoparticipanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoparticipantePayload>
          }
          findMany: {
            args: Prisma.historicoparticipanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoparticipantePayload>[]
          }
          create: {
            args: Prisma.historicoparticipanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoparticipantePayload>
          }
          createMany: {
            args: Prisma.historicoparticipanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.historicoparticipanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoparticipantePayload>
          }
          update: {
            args: Prisma.historicoparticipanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoparticipantePayload>
          }
          deleteMany: {
            args: Prisma.historicoparticipanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historicoparticipanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.historicoparticipanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoparticipantePayload>
          }
          aggregate: {
            args: Prisma.HistoricoparticipanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoparticipante>
          }
          groupBy: {
            args: Prisma.historicoparticipanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoparticipanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.historicoparticipanteCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoparticipanteCountAggregateOutputType> | number
          }
        }
      }
      participante: {
        payload: Prisma.$participantePayload<ExtArgs>
        fields: Prisma.participanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.participanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.participanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantePayload>
          }
          findFirst: {
            args: Prisma.participanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.participanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantePayload>
          }
          findMany: {
            args: Prisma.participanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantePayload>[]
          }
          create: {
            args: Prisma.participanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantePayload>
          }
          createMany: {
            args: Prisma.participanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.participanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantePayload>
          }
          update: {
            args: Prisma.participanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantePayload>
          }
          deleteMany: {
            args: Prisma.participanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.participanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.participanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantePayload>
          }
          aggregate: {
            args: Prisma.ParticipanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipante>
          }
          groupBy: {
            args: Prisma.participanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.participanteCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    atividade?: atividadeOmit
    atividade_participante?: atividade_participanteOmit
    historicoparticipante?: historicoparticipanteOmit
    participante?: participanteOmit
    user?: userOmit
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
   * Count Type AtividadeCountOutputType
   */

  export type AtividadeCountOutputType = {
    atividade_participante: number
  }

  export type AtividadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atividade_participante?: boolean | AtividadeCountOutputTypeCountAtividade_participanteArgs
  }

  // Custom InputTypes
  /**
   * AtividadeCountOutputType without action
   */
  export type AtividadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeCountOutputType
     */
    select?: AtividadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtividadeCountOutputType without action
   */
  export type AtividadeCountOutputTypeCountAtividade_participanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atividade_participanteWhereInput
  }


  /**
   * Count Type ParticipanteCountOutputType
   */

  export type ParticipanteCountOutputType = {
    atividade_participante: number
    historicoparticipante: number
  }

  export type ParticipanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atividade_participante?: boolean | ParticipanteCountOutputTypeCountAtividade_participanteArgs
    historicoparticipante?: boolean | ParticipanteCountOutputTypeCountHistoricoparticipanteArgs
  }

  // Custom InputTypes
  /**
   * ParticipanteCountOutputType without action
   */
  export type ParticipanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteCountOutputType
     */
    select?: ParticipanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipanteCountOutputType without action
   */
  export type ParticipanteCountOutputTypeCountAtividade_participanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atividade_participanteWhereInput
  }

  /**
   * ParticipanteCountOutputType without action
   */
  export type ParticipanteCountOutputTypeCountHistoricoparticipanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historicoparticipanteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model atividade
   */

  export type AggregateAtividade = {
    _count: AtividadeCountAggregateOutputType | null
    _avg: AtividadeAvgAggregateOutputType | null
    _sum: AtividadeSumAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  export type AtividadeAvgAggregateOutputType = {
    vagas: number | null
    quantidade_vagas: number | null
  }

  export type AtividadeSumAggregateOutputType = {
    vagas: number | null
    quantidade_vagas: number | null
  }

  export type AtividadeMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    dataEvento: Date | null
    vagas: number | null
    quantidade_vagas: number | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type AtividadeMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    dataEvento: Date | null
    vagas: number | null
    quantidade_vagas: number | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type AtividadeCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    dataEvento: number
    vagas: number
    quantidade_vagas: number
    ativo: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type AtividadeAvgAggregateInputType = {
    vagas?: true
    quantidade_vagas?: true
  }

  export type AtividadeSumAggregateInputType = {
    vagas?: true
    quantidade_vagas?: true
  }

  export type AtividadeMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataEvento?: true
    vagas?: true
    quantidade_vagas?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type AtividadeMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataEvento?: true
    vagas?: true
    quantidade_vagas?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type AtividadeCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataEvento?: true
    vagas?: true
    quantidade_vagas?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type AtividadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atividade to aggregate.
     */
    where?: atividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividades to fetch.
     */
    orderBy?: atividadeOrderByWithRelationInput | atividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: atividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned atividades
    **/
    _count?: true | AtividadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtividadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtividadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeMaxAggregateInputType
  }

  export type GetAtividadeAggregateType<T extends AtividadeAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividade[P]>
      : GetScalarType<T[P], AggregateAtividade[P]>
  }




  export type atividadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atividadeWhereInput
    orderBy?: atividadeOrderByWithAggregationInput | atividadeOrderByWithAggregationInput[]
    by: AtividadeScalarFieldEnum[] | AtividadeScalarFieldEnum
    having?: atividadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeCountAggregateInputType | true
    _avg?: AtividadeAvgAggregateInputType
    _sum?: AtividadeSumAggregateInputType
    _min?: AtividadeMinAggregateInputType
    _max?: AtividadeMaxAggregateInputType
  }

  export type AtividadeGroupByOutputType = {
    id: string
    nome: string
    descricao: string | null
    dataEvento: Date
    vagas: number
    quantidade_vagas: number
    ativo: boolean
    criadoEm: Date
    atualizadoEm: Date
    _count: AtividadeCountAggregateOutputType | null
    _avg: AtividadeAvgAggregateOutputType | null
    _sum: AtividadeSumAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  type GetAtividadeGroupByPayload<T extends atividadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
        }
      >
    >


  export type atividadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    dataEvento?: boolean
    vagas?: boolean
    quantidade_vagas?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    atividade_participante?: boolean | atividade$atividade_participanteArgs<ExtArgs>
    _count?: boolean | AtividadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>



  export type atividadeSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    dataEvento?: boolean
    vagas?: boolean
    quantidade_vagas?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type atividadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "dataEvento" | "vagas" | "quantidade_vagas" | "ativo" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["atividade"]>
  export type atividadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atividade_participante?: boolean | atividade$atividade_participanteArgs<ExtArgs>
    _count?: boolean | AtividadeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $atividadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "atividade"
    objects: {
      atividade_participante: Prisma.$atividade_participantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string | null
      dataEvento: Date
      vagas: number
      quantidade_vagas: number
      ativo: boolean
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["atividade"]>
    composites: {}
  }

  type atividadeGetPayload<S extends boolean | null | undefined | atividadeDefaultArgs> = $Result.GetResult<Prisma.$atividadePayload, S>

  type atividadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<atividadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtividadeCountAggregateInputType | true
    }

  export interface atividadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['atividade'], meta: { name: 'atividade' } }
    /**
     * Find zero or one Atividade that matches the filter.
     * @param {atividadeFindUniqueArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends atividadeFindUniqueArgs>(args: SelectSubset<T, atividadeFindUniqueArgs<ExtArgs>>): Prisma__atividadeClient<$Result.GetResult<Prisma.$atividadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atividade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {atividadeFindUniqueOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends atividadeFindUniqueOrThrowArgs>(args: SelectSubset<T, atividadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__atividadeClient<$Result.GetResult<Prisma.$atividadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadeFindFirstArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends atividadeFindFirstArgs>(args?: SelectSubset<T, atividadeFindFirstArgs<ExtArgs>>): Prisma__atividadeClient<$Result.GetResult<Prisma.$atividadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadeFindFirstOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends atividadeFindFirstOrThrowArgs>(args?: SelectSubset<T, atividadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__atividadeClient<$Result.GetResult<Prisma.$atividadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atividades
     * const atividades = await prisma.atividade.findMany()
     * 
     * // Get first 10 Atividades
     * const atividades = await prisma.atividade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividadeWithIdOnly = await prisma.atividade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends atividadeFindManyArgs>(args?: SelectSubset<T, atividadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atividade.
     * @param {atividadeCreateArgs} args - Arguments to create a Atividade.
     * @example
     * // Create one Atividade
     * const Atividade = await prisma.atividade.create({
     *   data: {
     *     // ... data to create a Atividade
     *   }
     * })
     * 
     */
    create<T extends atividadeCreateArgs>(args: SelectSubset<T, atividadeCreateArgs<ExtArgs>>): Prisma__atividadeClient<$Result.GetResult<Prisma.$atividadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atividades.
     * @param {atividadeCreateManyArgs} args - Arguments to create many Atividades.
     * @example
     * // Create many Atividades
     * const atividade = await prisma.atividade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends atividadeCreateManyArgs>(args?: SelectSubset<T, atividadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Atividade.
     * @param {atividadeDeleteArgs} args - Arguments to delete one Atividade.
     * @example
     * // Delete one Atividade
     * const Atividade = await prisma.atividade.delete({
     *   where: {
     *     // ... filter to delete one Atividade
     *   }
     * })
     * 
     */
    delete<T extends atividadeDeleteArgs>(args: SelectSubset<T, atividadeDeleteArgs<ExtArgs>>): Prisma__atividadeClient<$Result.GetResult<Prisma.$atividadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atividade.
     * @param {atividadeUpdateArgs} args - Arguments to update one Atividade.
     * @example
     * // Update one Atividade
     * const atividade = await prisma.atividade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends atividadeUpdateArgs>(args: SelectSubset<T, atividadeUpdateArgs<ExtArgs>>): Prisma__atividadeClient<$Result.GetResult<Prisma.$atividadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atividades.
     * @param {atividadeDeleteManyArgs} args - Arguments to filter Atividades to delete.
     * @example
     * // Delete a few Atividades
     * const { count } = await prisma.atividade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends atividadeDeleteManyArgs>(args?: SelectSubset<T, atividadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atividades
     * const atividade = await prisma.atividade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends atividadeUpdateManyArgs>(args: SelectSubset<T, atividadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Atividade.
     * @param {atividadeUpsertArgs} args - Arguments to update or create a Atividade.
     * @example
     * // Update or create a Atividade
     * const atividade = await prisma.atividade.upsert({
     *   create: {
     *     // ... data to create a Atividade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atividade we want to update
     *   }
     * })
     */
    upsert<T extends atividadeUpsertArgs>(args: SelectSubset<T, atividadeUpsertArgs<ExtArgs>>): Prisma__atividadeClient<$Result.GetResult<Prisma.$atividadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadeCountArgs} args - Arguments to filter Atividades to count.
     * @example
     * // Count the number of Atividades
     * const count = await prisma.atividade.count({
     *   where: {
     *     // ... the filter for the Atividades we want to count
     *   }
     * })
    **/
    count<T extends atividadeCountArgs>(
      args?: Subset<T, atividadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtividadeAggregateArgs>(args: Subset<T, AtividadeAggregateArgs>): Prisma.PrismaPromise<GetAtividadeAggregateType<T>>

    /**
     * Group by Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadeGroupByArgs} args - Group by arguments.
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
      T extends atividadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: atividadeGroupByArgs['orderBy'] }
        : { orderBy?: atividadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, atividadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the atividade model
   */
  readonly fields: atividadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for atividade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__atividadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atividade_participante<T extends atividade$atividade_participanteArgs<ExtArgs> = {}>(args?: Subset<T, atividade$atividade_participanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the atividade model
   */
  interface atividadeFieldRefs {
    readonly id: FieldRef<"atividade", 'String'>
    readonly nome: FieldRef<"atividade", 'String'>
    readonly descricao: FieldRef<"atividade", 'String'>
    readonly dataEvento: FieldRef<"atividade", 'DateTime'>
    readonly vagas: FieldRef<"atividade", 'Int'>
    readonly quantidade_vagas: FieldRef<"atividade", 'Int'>
    readonly ativo: FieldRef<"atividade", 'Boolean'>
    readonly criadoEm: FieldRef<"atividade", 'DateTime'>
    readonly atualizadoEm: FieldRef<"atividade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * atividade findUnique
   */
  export type atividadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade
     */
    select?: atividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade
     */
    omit?: atividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadeInclude<ExtArgs> | null
    /**
     * Filter, which atividade to fetch.
     */
    where: atividadeWhereUniqueInput
  }

  /**
   * atividade findUniqueOrThrow
   */
  export type atividadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade
     */
    select?: atividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade
     */
    omit?: atividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadeInclude<ExtArgs> | null
    /**
     * Filter, which atividade to fetch.
     */
    where: atividadeWhereUniqueInput
  }

  /**
   * atividade findFirst
   */
  export type atividadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade
     */
    select?: atividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade
     */
    omit?: atividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadeInclude<ExtArgs> | null
    /**
     * Filter, which atividade to fetch.
     */
    where?: atividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividades to fetch.
     */
    orderBy?: atividadeOrderByWithRelationInput | atividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atividades.
     */
    cursor?: atividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * atividade findFirstOrThrow
   */
  export type atividadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade
     */
    select?: atividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade
     */
    omit?: atividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadeInclude<ExtArgs> | null
    /**
     * Filter, which atividade to fetch.
     */
    where?: atividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividades to fetch.
     */
    orderBy?: atividadeOrderByWithRelationInput | atividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atividades.
     */
    cursor?: atividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * atividade findMany
   */
  export type atividadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade
     */
    select?: atividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade
     */
    omit?: atividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadeInclude<ExtArgs> | null
    /**
     * Filter, which atividades to fetch.
     */
    where?: atividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividades to fetch.
     */
    orderBy?: atividadeOrderByWithRelationInput | atividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing atividades.
     */
    cursor?: atividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * atividade create
   */
  export type atividadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade
     */
    select?: atividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade
     */
    omit?: atividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadeInclude<ExtArgs> | null
    /**
     * The data needed to create a atividade.
     */
    data: XOR<atividadeCreateInput, atividadeUncheckedCreateInput>
  }

  /**
   * atividade createMany
   */
  export type atividadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many atividades.
     */
    data: atividadeCreateManyInput | atividadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * atividade update
   */
  export type atividadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade
     */
    select?: atividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade
     */
    omit?: atividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadeInclude<ExtArgs> | null
    /**
     * The data needed to update a atividade.
     */
    data: XOR<atividadeUpdateInput, atividadeUncheckedUpdateInput>
    /**
     * Choose, which atividade to update.
     */
    where: atividadeWhereUniqueInput
  }

  /**
   * atividade updateMany
   */
  export type atividadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update atividades.
     */
    data: XOR<atividadeUpdateManyMutationInput, atividadeUncheckedUpdateManyInput>
    /**
     * Filter which atividades to update
     */
    where?: atividadeWhereInput
    /**
     * Limit how many atividades to update.
     */
    limit?: number
  }

  /**
   * atividade upsert
   */
  export type atividadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade
     */
    select?: atividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade
     */
    omit?: atividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadeInclude<ExtArgs> | null
    /**
     * The filter to search for the atividade to update in case it exists.
     */
    where: atividadeWhereUniqueInput
    /**
     * In case the atividade found by the `where` argument doesn't exist, create a new atividade with this data.
     */
    create: XOR<atividadeCreateInput, atividadeUncheckedCreateInput>
    /**
     * In case the atividade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<atividadeUpdateInput, atividadeUncheckedUpdateInput>
  }

  /**
   * atividade delete
   */
  export type atividadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade
     */
    select?: atividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade
     */
    omit?: atividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadeInclude<ExtArgs> | null
    /**
     * Filter which atividade to delete.
     */
    where: atividadeWhereUniqueInput
  }

  /**
   * atividade deleteMany
   */
  export type atividadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atividades to delete
     */
    where?: atividadeWhereInput
    /**
     * Limit how many atividades to delete.
     */
    limit?: number
  }

  /**
   * atividade.atividade_participante
   */
  export type atividade$atividade_participanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    where?: atividade_participanteWhereInput
    orderBy?: atividade_participanteOrderByWithRelationInput | atividade_participanteOrderByWithRelationInput[]
    cursor?: atividade_participanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Atividade_participanteScalarFieldEnum | Atividade_participanteScalarFieldEnum[]
  }

  /**
   * atividade without action
   */
  export type atividadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade
     */
    select?: atividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade
     */
    omit?: atividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadeInclude<ExtArgs> | null
  }


  /**
   * Model atividade_participante
   */

  export type AggregateAtividade_participante = {
    _count: Atividade_participanteCountAggregateOutputType | null
    _min: Atividade_participanteMinAggregateOutputType | null
    _max: Atividade_participanteMaxAggregateOutputType | null
  }

  export type Atividade_participanteMinAggregateOutputType = {
    id: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    ativo: boolean | null
    idParticipante: string | null
    idAtividade: string | null
  }

  export type Atividade_participanteMaxAggregateOutputType = {
    id: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    ativo: boolean | null
    idParticipante: string | null
    idAtividade: string | null
  }

  export type Atividade_participanteCountAggregateOutputType = {
    id: number
    criadoEm: number
    atualizadoEm: number
    ativo: number
    idParticipante: number
    idAtividade: number
    _all: number
  }


  export type Atividade_participanteMinAggregateInputType = {
    id?: true
    criadoEm?: true
    atualizadoEm?: true
    ativo?: true
    idParticipante?: true
    idAtividade?: true
  }

  export type Atividade_participanteMaxAggregateInputType = {
    id?: true
    criadoEm?: true
    atualizadoEm?: true
    ativo?: true
    idParticipante?: true
    idAtividade?: true
  }

  export type Atividade_participanteCountAggregateInputType = {
    id?: true
    criadoEm?: true
    atualizadoEm?: true
    ativo?: true
    idParticipante?: true
    idAtividade?: true
    _all?: true
  }

  export type Atividade_participanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atividade_participante to aggregate.
     */
    where?: atividade_participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividade_participantes to fetch.
     */
    orderBy?: atividade_participanteOrderByWithRelationInput | atividade_participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: atividade_participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividade_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividade_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned atividade_participantes
    **/
    _count?: true | Atividade_participanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Atividade_participanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Atividade_participanteMaxAggregateInputType
  }

  export type GetAtividade_participanteAggregateType<T extends Atividade_participanteAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividade_participante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividade_participante[P]>
      : GetScalarType<T[P], AggregateAtividade_participante[P]>
  }




  export type atividade_participanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atividade_participanteWhereInput
    orderBy?: atividade_participanteOrderByWithAggregationInput | atividade_participanteOrderByWithAggregationInput[]
    by: Atividade_participanteScalarFieldEnum[] | Atividade_participanteScalarFieldEnum
    having?: atividade_participanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Atividade_participanteCountAggregateInputType | true
    _min?: Atividade_participanteMinAggregateInputType
    _max?: Atividade_participanteMaxAggregateInputType
  }

  export type Atividade_participanteGroupByOutputType = {
    id: string
    criadoEm: Date
    atualizadoEm: Date
    ativo: boolean
    idParticipante: string
    idAtividade: string
    _count: Atividade_participanteCountAggregateOutputType | null
    _min: Atividade_participanteMinAggregateOutputType | null
    _max: Atividade_participanteMaxAggregateOutputType | null
  }

  type GetAtividade_participanteGroupByPayload<T extends atividade_participanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Atividade_participanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Atividade_participanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Atividade_participanteGroupByOutputType[P]>
            : GetScalarType<T[P], Atividade_participanteGroupByOutputType[P]>
        }
      >
    >


  export type atividade_participanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    ativo?: boolean
    idParticipante?: boolean
    idAtividade?: boolean
    participante?: boolean | participanteDefaultArgs<ExtArgs>
    atividade?: boolean | atividadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atividade_participante"]>



  export type atividade_participanteSelectScalar = {
    id?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    ativo?: boolean
    idParticipante?: boolean
    idAtividade?: boolean
  }

  export type atividade_participanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "criadoEm" | "atualizadoEm" | "ativo" | "idParticipante" | "idAtividade", ExtArgs["result"]["atividade_participante"]>
  export type atividade_participanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participante?: boolean | participanteDefaultArgs<ExtArgs>
    atividade?: boolean | atividadeDefaultArgs<ExtArgs>
  }

  export type $atividade_participantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "atividade_participante"
    objects: {
      participante: Prisma.$participantePayload<ExtArgs>
      atividade: Prisma.$atividadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      criadoEm: Date
      atualizadoEm: Date
      ativo: boolean
      idParticipante: string
      idAtividade: string
    }, ExtArgs["result"]["atividade_participante"]>
    composites: {}
  }

  type atividade_participanteGetPayload<S extends boolean | null | undefined | atividade_participanteDefaultArgs> = $Result.GetResult<Prisma.$atividade_participantePayload, S>

  type atividade_participanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<atividade_participanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Atividade_participanteCountAggregateInputType | true
    }

  export interface atividade_participanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['atividade_participante'], meta: { name: 'atividade_participante' } }
    /**
     * Find zero or one Atividade_participante that matches the filter.
     * @param {atividade_participanteFindUniqueArgs} args - Arguments to find a Atividade_participante
     * @example
     * // Get one Atividade_participante
     * const atividade_participante = await prisma.atividade_participante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends atividade_participanteFindUniqueArgs>(args: SelectSubset<T, atividade_participanteFindUniqueArgs<ExtArgs>>): Prisma__atividade_participanteClient<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atividade_participante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {atividade_participanteFindUniqueOrThrowArgs} args - Arguments to find a Atividade_participante
     * @example
     * // Get one Atividade_participante
     * const atividade_participante = await prisma.atividade_participante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends atividade_participanteFindUniqueOrThrowArgs>(args: SelectSubset<T, atividade_participanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__atividade_participanteClient<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade_participante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividade_participanteFindFirstArgs} args - Arguments to find a Atividade_participante
     * @example
     * // Get one Atividade_participante
     * const atividade_participante = await prisma.atividade_participante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends atividade_participanteFindFirstArgs>(args?: SelectSubset<T, atividade_participanteFindFirstArgs<ExtArgs>>): Prisma__atividade_participanteClient<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade_participante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividade_participanteFindFirstOrThrowArgs} args - Arguments to find a Atividade_participante
     * @example
     * // Get one Atividade_participante
     * const atividade_participante = await prisma.atividade_participante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends atividade_participanteFindFirstOrThrowArgs>(args?: SelectSubset<T, atividade_participanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__atividade_participanteClient<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atividade_participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividade_participanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atividade_participantes
     * const atividade_participantes = await prisma.atividade_participante.findMany()
     * 
     * // Get first 10 Atividade_participantes
     * const atividade_participantes = await prisma.atividade_participante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividade_participanteWithIdOnly = await prisma.atividade_participante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends atividade_participanteFindManyArgs>(args?: SelectSubset<T, atividade_participanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atividade_participante.
     * @param {atividade_participanteCreateArgs} args - Arguments to create a Atividade_participante.
     * @example
     * // Create one Atividade_participante
     * const Atividade_participante = await prisma.atividade_participante.create({
     *   data: {
     *     // ... data to create a Atividade_participante
     *   }
     * })
     * 
     */
    create<T extends atividade_participanteCreateArgs>(args: SelectSubset<T, atividade_participanteCreateArgs<ExtArgs>>): Prisma__atividade_participanteClient<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atividade_participantes.
     * @param {atividade_participanteCreateManyArgs} args - Arguments to create many Atividade_participantes.
     * @example
     * // Create many Atividade_participantes
     * const atividade_participante = await prisma.atividade_participante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends atividade_participanteCreateManyArgs>(args?: SelectSubset<T, atividade_participanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Atividade_participante.
     * @param {atividade_participanteDeleteArgs} args - Arguments to delete one Atividade_participante.
     * @example
     * // Delete one Atividade_participante
     * const Atividade_participante = await prisma.atividade_participante.delete({
     *   where: {
     *     // ... filter to delete one Atividade_participante
     *   }
     * })
     * 
     */
    delete<T extends atividade_participanteDeleteArgs>(args: SelectSubset<T, atividade_participanteDeleteArgs<ExtArgs>>): Prisma__atividade_participanteClient<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atividade_participante.
     * @param {atividade_participanteUpdateArgs} args - Arguments to update one Atividade_participante.
     * @example
     * // Update one Atividade_participante
     * const atividade_participante = await prisma.atividade_participante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends atividade_participanteUpdateArgs>(args: SelectSubset<T, atividade_participanteUpdateArgs<ExtArgs>>): Prisma__atividade_participanteClient<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atividade_participantes.
     * @param {atividade_participanteDeleteManyArgs} args - Arguments to filter Atividade_participantes to delete.
     * @example
     * // Delete a few Atividade_participantes
     * const { count } = await prisma.atividade_participante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends atividade_participanteDeleteManyArgs>(args?: SelectSubset<T, atividade_participanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividade_participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividade_participanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atividade_participantes
     * const atividade_participante = await prisma.atividade_participante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends atividade_participanteUpdateManyArgs>(args: SelectSubset<T, atividade_participanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Atividade_participante.
     * @param {atividade_participanteUpsertArgs} args - Arguments to update or create a Atividade_participante.
     * @example
     * // Update or create a Atividade_participante
     * const atividade_participante = await prisma.atividade_participante.upsert({
     *   create: {
     *     // ... data to create a Atividade_participante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atividade_participante we want to update
     *   }
     * })
     */
    upsert<T extends atividade_participanteUpsertArgs>(args: SelectSubset<T, atividade_participanteUpsertArgs<ExtArgs>>): Prisma__atividade_participanteClient<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atividade_participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividade_participanteCountArgs} args - Arguments to filter Atividade_participantes to count.
     * @example
     * // Count the number of Atividade_participantes
     * const count = await prisma.atividade_participante.count({
     *   where: {
     *     // ... the filter for the Atividade_participantes we want to count
     *   }
     * })
    **/
    count<T extends atividade_participanteCountArgs>(
      args?: Subset<T, atividade_participanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Atividade_participanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atividade_participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Atividade_participanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Atividade_participanteAggregateArgs>(args: Subset<T, Atividade_participanteAggregateArgs>): Prisma.PrismaPromise<GetAtividade_participanteAggregateType<T>>

    /**
     * Group by Atividade_participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividade_participanteGroupByArgs} args - Group by arguments.
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
      T extends atividade_participanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: atividade_participanteGroupByArgs['orderBy'] }
        : { orderBy?: atividade_participanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, atividade_participanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividade_participanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the atividade_participante model
   */
  readonly fields: atividade_participanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for atividade_participante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__atividade_participanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participante<T extends participanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, participanteDefaultArgs<ExtArgs>>): Prisma__participanteClient<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    atividade<T extends atividadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, atividadeDefaultArgs<ExtArgs>>): Prisma__atividadeClient<$Result.GetResult<Prisma.$atividadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the atividade_participante model
   */
  interface atividade_participanteFieldRefs {
    readonly id: FieldRef<"atividade_participante", 'String'>
    readonly criadoEm: FieldRef<"atividade_participante", 'DateTime'>
    readonly atualizadoEm: FieldRef<"atividade_participante", 'DateTime'>
    readonly ativo: FieldRef<"atividade_participante", 'Boolean'>
    readonly idParticipante: FieldRef<"atividade_participante", 'String'>
    readonly idAtividade: FieldRef<"atividade_participante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * atividade_participante findUnique
   */
  export type atividade_participanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    /**
     * Filter, which atividade_participante to fetch.
     */
    where: atividade_participanteWhereUniqueInput
  }

  /**
   * atividade_participante findUniqueOrThrow
   */
  export type atividade_participanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    /**
     * Filter, which atividade_participante to fetch.
     */
    where: atividade_participanteWhereUniqueInput
  }

  /**
   * atividade_participante findFirst
   */
  export type atividade_participanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    /**
     * Filter, which atividade_participante to fetch.
     */
    where?: atividade_participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividade_participantes to fetch.
     */
    orderBy?: atividade_participanteOrderByWithRelationInput | atividade_participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atividade_participantes.
     */
    cursor?: atividade_participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividade_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividade_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atividade_participantes.
     */
    distinct?: Atividade_participanteScalarFieldEnum | Atividade_participanteScalarFieldEnum[]
  }

  /**
   * atividade_participante findFirstOrThrow
   */
  export type atividade_participanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    /**
     * Filter, which atividade_participante to fetch.
     */
    where?: atividade_participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividade_participantes to fetch.
     */
    orderBy?: atividade_participanteOrderByWithRelationInput | atividade_participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atividade_participantes.
     */
    cursor?: atividade_participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividade_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividade_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atividade_participantes.
     */
    distinct?: Atividade_participanteScalarFieldEnum | Atividade_participanteScalarFieldEnum[]
  }

  /**
   * atividade_participante findMany
   */
  export type atividade_participanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    /**
     * Filter, which atividade_participantes to fetch.
     */
    where?: atividade_participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividade_participantes to fetch.
     */
    orderBy?: atividade_participanteOrderByWithRelationInput | atividade_participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing atividade_participantes.
     */
    cursor?: atividade_participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividade_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividade_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atividade_participantes.
     */
    distinct?: Atividade_participanteScalarFieldEnum | Atividade_participanteScalarFieldEnum[]
  }

  /**
   * atividade_participante create
   */
  export type atividade_participanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    /**
     * The data needed to create a atividade_participante.
     */
    data: XOR<atividade_participanteCreateInput, atividade_participanteUncheckedCreateInput>
  }

  /**
   * atividade_participante createMany
   */
  export type atividade_participanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many atividade_participantes.
     */
    data: atividade_participanteCreateManyInput | atividade_participanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * atividade_participante update
   */
  export type atividade_participanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    /**
     * The data needed to update a atividade_participante.
     */
    data: XOR<atividade_participanteUpdateInput, atividade_participanteUncheckedUpdateInput>
    /**
     * Choose, which atividade_participante to update.
     */
    where: atividade_participanteWhereUniqueInput
  }

  /**
   * atividade_participante updateMany
   */
  export type atividade_participanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update atividade_participantes.
     */
    data: XOR<atividade_participanteUpdateManyMutationInput, atividade_participanteUncheckedUpdateManyInput>
    /**
     * Filter which atividade_participantes to update
     */
    where?: atividade_participanteWhereInput
    /**
     * Limit how many atividade_participantes to update.
     */
    limit?: number
  }

  /**
   * atividade_participante upsert
   */
  export type atividade_participanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    /**
     * The filter to search for the atividade_participante to update in case it exists.
     */
    where: atividade_participanteWhereUniqueInput
    /**
     * In case the atividade_participante found by the `where` argument doesn't exist, create a new atividade_participante with this data.
     */
    create: XOR<atividade_participanteCreateInput, atividade_participanteUncheckedCreateInput>
    /**
     * In case the atividade_participante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<atividade_participanteUpdateInput, atividade_participanteUncheckedUpdateInput>
  }

  /**
   * atividade_participante delete
   */
  export type atividade_participanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    /**
     * Filter which atividade_participante to delete.
     */
    where: atividade_participanteWhereUniqueInput
  }

  /**
   * atividade_participante deleteMany
   */
  export type atividade_participanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atividade_participantes to delete
     */
    where?: atividade_participanteWhereInput
    /**
     * Limit how many atividade_participantes to delete.
     */
    limit?: number
  }

  /**
   * atividade_participante without action
   */
  export type atividade_participanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
  }


  /**
   * Model historicoparticipante
   */

  export type AggregateHistoricoparticipante = {
    _count: HistoricoparticipanteCountAggregateOutputType | null
    _min: HistoricoparticipanteMinAggregateOutputType | null
    _max: HistoricoparticipanteMaxAggregateOutputType | null
  }

  export type HistoricoparticipanteMinAggregateOutputType = {
    id: string | null
    email: string | null
    idParticipante: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type HistoricoparticipanteMaxAggregateOutputType = {
    id: string | null
    email: string | null
    idParticipante: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type HistoricoparticipanteCountAggregateOutputType = {
    id: number
    email: number
    idParticipante: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type HistoricoparticipanteMinAggregateInputType = {
    id?: true
    email?: true
    idParticipante?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type HistoricoparticipanteMaxAggregateInputType = {
    id?: true
    email?: true
    idParticipante?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type HistoricoparticipanteCountAggregateInputType = {
    id?: true
    email?: true
    idParticipante?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type HistoricoparticipanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historicoparticipante to aggregate.
     */
    where?: historicoparticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicoparticipantes to fetch.
     */
    orderBy?: historicoparticipanteOrderByWithRelationInput | historicoparticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historicoparticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicoparticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicoparticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historicoparticipantes
    **/
    _count?: true | HistoricoparticipanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoparticipanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoparticipanteMaxAggregateInputType
  }

  export type GetHistoricoparticipanteAggregateType<T extends HistoricoparticipanteAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoparticipante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoparticipante[P]>
      : GetScalarType<T[P], AggregateHistoricoparticipante[P]>
  }




  export type historicoparticipanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historicoparticipanteWhereInput
    orderBy?: historicoparticipanteOrderByWithAggregationInput | historicoparticipanteOrderByWithAggregationInput[]
    by: HistoricoparticipanteScalarFieldEnum[] | HistoricoparticipanteScalarFieldEnum
    having?: historicoparticipanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoparticipanteCountAggregateInputType | true
    _min?: HistoricoparticipanteMinAggregateInputType
    _max?: HistoricoparticipanteMaxAggregateInputType
  }

  export type HistoricoparticipanteGroupByOutputType = {
    id: string
    email: string
    idParticipante: string
    criadoEm: Date
    atualizadoEm: Date
    _count: HistoricoparticipanteCountAggregateOutputType | null
    _min: HistoricoparticipanteMinAggregateOutputType | null
    _max: HistoricoparticipanteMaxAggregateOutputType | null
  }

  type GetHistoricoparticipanteGroupByPayload<T extends historicoparticipanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoparticipanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoparticipanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoparticipanteGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoparticipanteGroupByOutputType[P]>
        }
      >
    >


  export type historicoparticipanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    idParticipante?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    participante?: boolean | participanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoparticipante"]>



  export type historicoparticipanteSelectScalar = {
    id?: boolean
    email?: boolean
    idParticipante?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type historicoparticipanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "idParticipante" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["historicoparticipante"]>
  export type historicoparticipanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participante?: boolean | participanteDefaultArgs<ExtArgs>
  }

  export type $historicoparticipantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historicoparticipante"
    objects: {
      participante: Prisma.$participantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      idParticipante: string
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["historicoparticipante"]>
    composites: {}
  }

  type historicoparticipanteGetPayload<S extends boolean | null | undefined | historicoparticipanteDefaultArgs> = $Result.GetResult<Prisma.$historicoparticipantePayload, S>

  type historicoparticipanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historicoparticipanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoparticipanteCountAggregateInputType | true
    }

  export interface historicoparticipanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historicoparticipante'], meta: { name: 'historicoparticipante' } }
    /**
     * Find zero or one Historicoparticipante that matches the filter.
     * @param {historicoparticipanteFindUniqueArgs} args - Arguments to find a Historicoparticipante
     * @example
     * // Get one Historicoparticipante
     * const historicoparticipante = await prisma.historicoparticipante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historicoparticipanteFindUniqueArgs>(args: SelectSubset<T, historicoparticipanteFindUniqueArgs<ExtArgs>>): Prisma__historicoparticipanteClient<$Result.GetResult<Prisma.$historicoparticipantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historicoparticipante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historicoparticipanteFindUniqueOrThrowArgs} args - Arguments to find a Historicoparticipante
     * @example
     * // Get one Historicoparticipante
     * const historicoparticipante = await prisma.historicoparticipante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historicoparticipanteFindUniqueOrThrowArgs>(args: SelectSubset<T, historicoparticipanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historicoparticipanteClient<$Result.GetResult<Prisma.$historicoparticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historicoparticipante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoparticipanteFindFirstArgs} args - Arguments to find a Historicoparticipante
     * @example
     * // Get one Historicoparticipante
     * const historicoparticipante = await prisma.historicoparticipante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historicoparticipanteFindFirstArgs>(args?: SelectSubset<T, historicoparticipanteFindFirstArgs<ExtArgs>>): Prisma__historicoparticipanteClient<$Result.GetResult<Prisma.$historicoparticipantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historicoparticipante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoparticipanteFindFirstOrThrowArgs} args - Arguments to find a Historicoparticipante
     * @example
     * // Get one Historicoparticipante
     * const historicoparticipante = await prisma.historicoparticipante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historicoparticipanteFindFirstOrThrowArgs>(args?: SelectSubset<T, historicoparticipanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__historicoparticipanteClient<$Result.GetResult<Prisma.$historicoparticipantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historicoparticipantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoparticipanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historicoparticipantes
     * const historicoparticipantes = await prisma.historicoparticipante.findMany()
     * 
     * // Get first 10 Historicoparticipantes
     * const historicoparticipantes = await prisma.historicoparticipante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoparticipanteWithIdOnly = await prisma.historicoparticipante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends historicoparticipanteFindManyArgs>(args?: SelectSubset<T, historicoparticipanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historicoparticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historicoparticipante.
     * @param {historicoparticipanteCreateArgs} args - Arguments to create a Historicoparticipante.
     * @example
     * // Create one Historicoparticipante
     * const Historicoparticipante = await prisma.historicoparticipante.create({
     *   data: {
     *     // ... data to create a Historicoparticipante
     *   }
     * })
     * 
     */
    create<T extends historicoparticipanteCreateArgs>(args: SelectSubset<T, historicoparticipanteCreateArgs<ExtArgs>>): Prisma__historicoparticipanteClient<$Result.GetResult<Prisma.$historicoparticipantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historicoparticipantes.
     * @param {historicoparticipanteCreateManyArgs} args - Arguments to create many Historicoparticipantes.
     * @example
     * // Create many Historicoparticipantes
     * const historicoparticipante = await prisma.historicoparticipante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historicoparticipanteCreateManyArgs>(args?: SelectSubset<T, historicoparticipanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historicoparticipante.
     * @param {historicoparticipanteDeleteArgs} args - Arguments to delete one Historicoparticipante.
     * @example
     * // Delete one Historicoparticipante
     * const Historicoparticipante = await prisma.historicoparticipante.delete({
     *   where: {
     *     // ... filter to delete one Historicoparticipante
     *   }
     * })
     * 
     */
    delete<T extends historicoparticipanteDeleteArgs>(args: SelectSubset<T, historicoparticipanteDeleteArgs<ExtArgs>>): Prisma__historicoparticipanteClient<$Result.GetResult<Prisma.$historicoparticipantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historicoparticipante.
     * @param {historicoparticipanteUpdateArgs} args - Arguments to update one Historicoparticipante.
     * @example
     * // Update one Historicoparticipante
     * const historicoparticipante = await prisma.historicoparticipante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historicoparticipanteUpdateArgs>(args: SelectSubset<T, historicoparticipanteUpdateArgs<ExtArgs>>): Prisma__historicoparticipanteClient<$Result.GetResult<Prisma.$historicoparticipantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historicoparticipantes.
     * @param {historicoparticipanteDeleteManyArgs} args - Arguments to filter Historicoparticipantes to delete.
     * @example
     * // Delete a few Historicoparticipantes
     * const { count } = await prisma.historicoparticipante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historicoparticipanteDeleteManyArgs>(args?: SelectSubset<T, historicoparticipanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicoparticipantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoparticipanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historicoparticipantes
     * const historicoparticipante = await prisma.historicoparticipante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historicoparticipanteUpdateManyArgs>(args: SelectSubset<T, historicoparticipanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historicoparticipante.
     * @param {historicoparticipanteUpsertArgs} args - Arguments to update or create a Historicoparticipante.
     * @example
     * // Update or create a Historicoparticipante
     * const historicoparticipante = await prisma.historicoparticipante.upsert({
     *   create: {
     *     // ... data to create a Historicoparticipante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historicoparticipante we want to update
     *   }
     * })
     */
    upsert<T extends historicoparticipanteUpsertArgs>(args: SelectSubset<T, historicoparticipanteUpsertArgs<ExtArgs>>): Prisma__historicoparticipanteClient<$Result.GetResult<Prisma.$historicoparticipantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historicoparticipantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoparticipanteCountArgs} args - Arguments to filter Historicoparticipantes to count.
     * @example
     * // Count the number of Historicoparticipantes
     * const count = await prisma.historicoparticipante.count({
     *   where: {
     *     // ... the filter for the Historicoparticipantes we want to count
     *   }
     * })
    **/
    count<T extends historicoparticipanteCountArgs>(
      args?: Subset<T, historicoparticipanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoparticipanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historicoparticipante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoparticipanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricoparticipanteAggregateArgs>(args: Subset<T, HistoricoparticipanteAggregateArgs>): Prisma.PrismaPromise<GetHistoricoparticipanteAggregateType<T>>

    /**
     * Group by Historicoparticipante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoparticipanteGroupByArgs} args - Group by arguments.
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
      T extends historicoparticipanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historicoparticipanteGroupByArgs['orderBy'] }
        : { orderBy?: historicoparticipanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, historicoparticipanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoparticipanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historicoparticipante model
   */
  readonly fields: historicoparticipanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historicoparticipante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historicoparticipanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participante<T extends participanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, participanteDefaultArgs<ExtArgs>>): Prisma__participanteClient<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the historicoparticipante model
   */
  interface historicoparticipanteFieldRefs {
    readonly id: FieldRef<"historicoparticipante", 'String'>
    readonly email: FieldRef<"historicoparticipante", 'String'>
    readonly idParticipante: FieldRef<"historicoparticipante", 'String'>
    readonly criadoEm: FieldRef<"historicoparticipante", 'DateTime'>
    readonly atualizadoEm: FieldRef<"historicoparticipante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * historicoparticipante findUnique
   */
  export type historicoparticipanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
    /**
     * Filter, which historicoparticipante to fetch.
     */
    where: historicoparticipanteWhereUniqueInput
  }

  /**
   * historicoparticipante findUniqueOrThrow
   */
  export type historicoparticipanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
    /**
     * Filter, which historicoparticipante to fetch.
     */
    where: historicoparticipanteWhereUniqueInput
  }

  /**
   * historicoparticipante findFirst
   */
  export type historicoparticipanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
    /**
     * Filter, which historicoparticipante to fetch.
     */
    where?: historicoparticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicoparticipantes to fetch.
     */
    orderBy?: historicoparticipanteOrderByWithRelationInput | historicoparticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historicoparticipantes.
     */
    cursor?: historicoparticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicoparticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicoparticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historicoparticipantes.
     */
    distinct?: HistoricoparticipanteScalarFieldEnum | HistoricoparticipanteScalarFieldEnum[]
  }

  /**
   * historicoparticipante findFirstOrThrow
   */
  export type historicoparticipanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
    /**
     * Filter, which historicoparticipante to fetch.
     */
    where?: historicoparticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicoparticipantes to fetch.
     */
    orderBy?: historicoparticipanteOrderByWithRelationInput | historicoparticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historicoparticipantes.
     */
    cursor?: historicoparticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicoparticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicoparticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historicoparticipantes.
     */
    distinct?: HistoricoparticipanteScalarFieldEnum | HistoricoparticipanteScalarFieldEnum[]
  }

  /**
   * historicoparticipante findMany
   */
  export type historicoparticipanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
    /**
     * Filter, which historicoparticipantes to fetch.
     */
    where?: historicoparticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicoparticipantes to fetch.
     */
    orderBy?: historicoparticipanteOrderByWithRelationInput | historicoparticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historicoparticipantes.
     */
    cursor?: historicoparticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicoparticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicoparticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historicoparticipantes.
     */
    distinct?: HistoricoparticipanteScalarFieldEnum | HistoricoparticipanteScalarFieldEnum[]
  }

  /**
   * historicoparticipante create
   */
  export type historicoparticipanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
    /**
     * The data needed to create a historicoparticipante.
     */
    data: XOR<historicoparticipanteCreateInput, historicoparticipanteUncheckedCreateInput>
  }

  /**
   * historicoparticipante createMany
   */
  export type historicoparticipanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historicoparticipantes.
     */
    data: historicoparticipanteCreateManyInput | historicoparticipanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historicoparticipante update
   */
  export type historicoparticipanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
    /**
     * The data needed to update a historicoparticipante.
     */
    data: XOR<historicoparticipanteUpdateInput, historicoparticipanteUncheckedUpdateInput>
    /**
     * Choose, which historicoparticipante to update.
     */
    where: historicoparticipanteWhereUniqueInput
  }

  /**
   * historicoparticipante updateMany
   */
  export type historicoparticipanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historicoparticipantes.
     */
    data: XOR<historicoparticipanteUpdateManyMutationInput, historicoparticipanteUncheckedUpdateManyInput>
    /**
     * Filter which historicoparticipantes to update
     */
    where?: historicoparticipanteWhereInput
    /**
     * Limit how many historicoparticipantes to update.
     */
    limit?: number
  }

  /**
   * historicoparticipante upsert
   */
  export type historicoparticipanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
    /**
     * The filter to search for the historicoparticipante to update in case it exists.
     */
    where: historicoparticipanteWhereUniqueInput
    /**
     * In case the historicoparticipante found by the `where` argument doesn't exist, create a new historicoparticipante with this data.
     */
    create: XOR<historicoparticipanteCreateInput, historicoparticipanteUncheckedCreateInput>
    /**
     * In case the historicoparticipante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historicoparticipanteUpdateInput, historicoparticipanteUncheckedUpdateInput>
  }

  /**
   * historicoparticipante delete
   */
  export type historicoparticipanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
    /**
     * Filter which historicoparticipante to delete.
     */
    where: historicoparticipanteWhereUniqueInput
  }

  /**
   * historicoparticipante deleteMany
   */
  export type historicoparticipanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historicoparticipantes to delete
     */
    where?: historicoparticipanteWhereInput
    /**
     * Limit how many historicoparticipantes to delete.
     */
    limit?: number
  }

  /**
   * historicoparticipante without action
   */
  export type historicoparticipanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
  }


  /**
   * Model participante
   */

  export type AggregateParticipante = {
    _count: ParticipanteCountAggregateOutputType | null
    _min: ParticipanteMinAggregateOutputType | null
    _max: ParticipanteMaxAggregateOutputType | null
  }

  export type ParticipanteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    ativo: boolean | null
    email: string | null
    telefone: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    senha: string | null
    Cpf: string | null
  }

  export type ParticipanteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    ativo: boolean | null
    email: string | null
    telefone: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    senha: string | null
    Cpf: string | null
  }

  export type ParticipanteCountAggregateOutputType = {
    id: number
    nome: number
    ativo: number
    email: number
    telefone: number
    criadoEm: number
    atualizadoEm: number
    senha: number
    Cpf: number
    _all: number
  }


  export type ParticipanteMinAggregateInputType = {
    id?: true
    nome?: true
    ativo?: true
    email?: true
    telefone?: true
    criadoEm?: true
    atualizadoEm?: true
    senha?: true
    Cpf?: true
  }

  export type ParticipanteMaxAggregateInputType = {
    id?: true
    nome?: true
    ativo?: true
    email?: true
    telefone?: true
    criadoEm?: true
    atualizadoEm?: true
    senha?: true
    Cpf?: true
  }

  export type ParticipanteCountAggregateInputType = {
    id?: true
    nome?: true
    ativo?: true
    email?: true
    telefone?: true
    criadoEm?: true
    atualizadoEm?: true
    senha?: true
    Cpf?: true
    _all?: true
  }

  export type ParticipanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participante to aggregate.
     */
    where?: participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantes to fetch.
     */
    orderBy?: participanteOrderByWithRelationInput | participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned participantes
    **/
    _count?: true | ParticipanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipanteMaxAggregateInputType
  }

  export type GetParticipanteAggregateType<T extends ParticipanteAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipante[P]>
      : GetScalarType<T[P], AggregateParticipante[P]>
  }




  export type participanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participanteWhereInput
    orderBy?: participanteOrderByWithAggregationInput | participanteOrderByWithAggregationInput[]
    by: ParticipanteScalarFieldEnum[] | ParticipanteScalarFieldEnum
    having?: participanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipanteCountAggregateInputType | true
    _min?: ParticipanteMinAggregateInputType
    _max?: ParticipanteMaxAggregateInputType
  }

  export type ParticipanteGroupByOutputType = {
    id: string
    nome: string
    ativo: boolean
    email: string
    telefone: string
    criadoEm: Date
    atualizadoEm: Date
    senha: string | null
    Cpf: string | null
    _count: ParticipanteCountAggregateOutputType | null
    _min: ParticipanteMinAggregateOutputType | null
    _max: ParticipanteMaxAggregateOutputType | null
  }

  type GetParticipanteGroupByPayload<T extends participanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipanteGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipanteGroupByOutputType[P]>
        }
      >
    >


  export type participanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ativo?: boolean
    email?: boolean
    telefone?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    senha?: boolean
    Cpf?: boolean
    atividade_participante?: boolean | participante$atividade_participanteArgs<ExtArgs>
    historicoparticipante?: boolean | participante$historicoparticipanteArgs<ExtArgs>
    _count?: boolean | ParticipanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>



  export type participanteSelectScalar = {
    id?: boolean
    nome?: boolean
    ativo?: boolean
    email?: boolean
    telefone?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    senha?: boolean
    Cpf?: boolean
  }

  export type participanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "ativo" | "email" | "telefone" | "criadoEm" | "atualizadoEm" | "senha" | "Cpf", ExtArgs["result"]["participante"]>
  export type participanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atividade_participante?: boolean | participante$atividade_participanteArgs<ExtArgs>
    historicoparticipante?: boolean | participante$historicoparticipanteArgs<ExtArgs>
    _count?: boolean | ParticipanteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $participantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participante"
    objects: {
      atividade_participante: Prisma.$atividade_participantePayload<ExtArgs>[]
      historicoparticipante: Prisma.$historicoparticipantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      ativo: boolean
      email: string
      telefone: string
      criadoEm: Date
      atualizadoEm: Date
      senha: string | null
      Cpf: string | null
    }, ExtArgs["result"]["participante"]>
    composites: {}
  }

  type participanteGetPayload<S extends boolean | null | undefined | participanteDefaultArgs> = $Result.GetResult<Prisma.$participantePayload, S>

  type participanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<participanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipanteCountAggregateInputType | true
    }

  export interface participanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['participante'], meta: { name: 'participante' } }
    /**
     * Find zero or one Participante that matches the filter.
     * @param {participanteFindUniqueArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends participanteFindUniqueArgs>(args: SelectSubset<T, participanteFindUniqueArgs<ExtArgs>>): Prisma__participanteClient<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {participanteFindUniqueOrThrowArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends participanteFindUniqueOrThrowArgs>(args: SelectSubset<T, participanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__participanteClient<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participanteFindFirstArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends participanteFindFirstArgs>(args?: SelectSubset<T, participanteFindFirstArgs<ExtArgs>>): Prisma__participanteClient<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participanteFindFirstOrThrowArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends participanteFindFirstOrThrowArgs>(args?: SelectSubset<T, participanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__participanteClient<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participantes
     * const participantes = await prisma.participante.findMany()
     * 
     * // Get first 10 Participantes
     * const participantes = await prisma.participante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participanteWithIdOnly = await prisma.participante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends participanteFindManyArgs>(args?: SelectSubset<T, participanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participante.
     * @param {participanteCreateArgs} args - Arguments to create a Participante.
     * @example
     * // Create one Participante
     * const Participante = await prisma.participante.create({
     *   data: {
     *     // ... data to create a Participante
     *   }
     * })
     * 
     */
    create<T extends participanteCreateArgs>(args: SelectSubset<T, participanteCreateArgs<ExtArgs>>): Prisma__participanteClient<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participantes.
     * @param {participanteCreateManyArgs} args - Arguments to create many Participantes.
     * @example
     * // Create many Participantes
     * const participante = await prisma.participante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends participanteCreateManyArgs>(args?: SelectSubset<T, participanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Participante.
     * @param {participanteDeleteArgs} args - Arguments to delete one Participante.
     * @example
     * // Delete one Participante
     * const Participante = await prisma.participante.delete({
     *   where: {
     *     // ... filter to delete one Participante
     *   }
     * })
     * 
     */
    delete<T extends participanteDeleteArgs>(args: SelectSubset<T, participanteDeleteArgs<ExtArgs>>): Prisma__participanteClient<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participante.
     * @param {participanteUpdateArgs} args - Arguments to update one Participante.
     * @example
     * // Update one Participante
     * const participante = await prisma.participante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends participanteUpdateArgs>(args: SelectSubset<T, participanteUpdateArgs<ExtArgs>>): Prisma__participanteClient<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participantes.
     * @param {participanteDeleteManyArgs} args - Arguments to filter Participantes to delete.
     * @example
     * // Delete a few Participantes
     * const { count } = await prisma.participante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends participanteDeleteManyArgs>(args?: SelectSubset<T, participanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participantes
     * const participante = await prisma.participante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends participanteUpdateManyArgs>(args: SelectSubset<T, participanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participante.
     * @param {participanteUpsertArgs} args - Arguments to update or create a Participante.
     * @example
     * // Update or create a Participante
     * const participante = await prisma.participante.upsert({
     *   create: {
     *     // ... data to create a Participante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participante we want to update
     *   }
     * })
     */
    upsert<T extends participanteUpsertArgs>(args: SelectSubset<T, participanteUpsertArgs<ExtArgs>>): Prisma__participanteClient<$Result.GetResult<Prisma.$participantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participanteCountArgs} args - Arguments to filter Participantes to count.
     * @example
     * // Count the number of Participantes
     * const count = await prisma.participante.count({
     *   where: {
     *     // ... the filter for the Participantes we want to count
     *   }
     * })
    **/
    count<T extends participanteCountArgs>(
      args?: Subset<T, participanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipanteAggregateArgs>(args: Subset<T, ParticipanteAggregateArgs>): Prisma.PrismaPromise<GetParticipanteAggregateType<T>>

    /**
     * Group by Participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participanteGroupByArgs} args - Group by arguments.
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
      T extends participanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: participanteGroupByArgs['orderBy'] }
        : { orderBy?: participanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, participanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the participante model
   */
  readonly fields: participanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for participante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__participanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atividade_participante<T extends participante$atividade_participanteArgs<ExtArgs> = {}>(args?: Subset<T, participante$atividade_participanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atividade_participantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicoparticipante<T extends participante$historicoparticipanteArgs<ExtArgs> = {}>(args?: Subset<T, participante$historicoparticipanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historicoparticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the participante model
   */
  interface participanteFieldRefs {
    readonly id: FieldRef<"participante", 'String'>
    readonly nome: FieldRef<"participante", 'String'>
    readonly ativo: FieldRef<"participante", 'Boolean'>
    readonly email: FieldRef<"participante", 'String'>
    readonly telefone: FieldRef<"participante", 'String'>
    readonly criadoEm: FieldRef<"participante", 'DateTime'>
    readonly atualizadoEm: FieldRef<"participante", 'DateTime'>
    readonly senha: FieldRef<"participante", 'String'>
    readonly Cpf: FieldRef<"participante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * participante findUnique
   */
  export type participanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participante
     */
    select?: participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participante
     */
    omit?: participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participanteInclude<ExtArgs> | null
    /**
     * Filter, which participante to fetch.
     */
    where: participanteWhereUniqueInput
  }

  /**
   * participante findUniqueOrThrow
   */
  export type participanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participante
     */
    select?: participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participante
     */
    omit?: participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participanteInclude<ExtArgs> | null
    /**
     * Filter, which participante to fetch.
     */
    where: participanteWhereUniqueInput
  }

  /**
   * participante findFirst
   */
  export type participanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participante
     */
    select?: participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participante
     */
    omit?: participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participanteInclude<ExtArgs> | null
    /**
     * Filter, which participante to fetch.
     */
    where?: participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantes to fetch.
     */
    orderBy?: participanteOrderByWithRelationInput | participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participantes.
     */
    cursor?: participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * participante findFirstOrThrow
   */
  export type participanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participante
     */
    select?: participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participante
     */
    omit?: participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participanteInclude<ExtArgs> | null
    /**
     * Filter, which participante to fetch.
     */
    where?: participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantes to fetch.
     */
    orderBy?: participanteOrderByWithRelationInput | participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participantes.
     */
    cursor?: participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * participante findMany
   */
  export type participanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participante
     */
    select?: participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participante
     */
    omit?: participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participanteInclude<ExtArgs> | null
    /**
     * Filter, which participantes to fetch.
     */
    where?: participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participantes to fetch.
     */
    orderBy?: participanteOrderByWithRelationInput | participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing participantes.
     */
    cursor?: participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * participante create
   */
  export type participanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participante
     */
    select?: participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participante
     */
    omit?: participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participanteInclude<ExtArgs> | null
    /**
     * The data needed to create a participante.
     */
    data: XOR<participanteCreateInput, participanteUncheckedCreateInput>
  }

  /**
   * participante createMany
   */
  export type participanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many participantes.
     */
    data: participanteCreateManyInput | participanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * participante update
   */
  export type participanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participante
     */
    select?: participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participante
     */
    omit?: participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participanteInclude<ExtArgs> | null
    /**
     * The data needed to update a participante.
     */
    data: XOR<participanteUpdateInput, participanteUncheckedUpdateInput>
    /**
     * Choose, which participante to update.
     */
    where: participanteWhereUniqueInput
  }

  /**
   * participante updateMany
   */
  export type participanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update participantes.
     */
    data: XOR<participanteUpdateManyMutationInput, participanteUncheckedUpdateManyInput>
    /**
     * Filter which participantes to update
     */
    where?: participanteWhereInput
    /**
     * Limit how many participantes to update.
     */
    limit?: number
  }

  /**
   * participante upsert
   */
  export type participanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participante
     */
    select?: participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participante
     */
    omit?: participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participanteInclude<ExtArgs> | null
    /**
     * The filter to search for the participante to update in case it exists.
     */
    where: participanteWhereUniqueInput
    /**
     * In case the participante found by the `where` argument doesn't exist, create a new participante with this data.
     */
    create: XOR<participanteCreateInput, participanteUncheckedCreateInput>
    /**
     * In case the participante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<participanteUpdateInput, participanteUncheckedUpdateInput>
  }

  /**
   * participante delete
   */
  export type participanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participante
     */
    select?: participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participante
     */
    omit?: participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participanteInclude<ExtArgs> | null
    /**
     * Filter which participante to delete.
     */
    where: participanteWhereUniqueInput
  }

  /**
   * participante deleteMany
   */
  export type participanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participantes to delete
     */
    where?: participanteWhereInput
    /**
     * Limit how many participantes to delete.
     */
    limit?: number
  }

  /**
   * participante.atividade_participante
   */
  export type participante$atividade_participanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividade_participante
     */
    select?: atividade_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the atividade_participante
     */
    omit?: atividade_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividade_participanteInclude<ExtArgs> | null
    where?: atividade_participanteWhereInput
    orderBy?: atividade_participanteOrderByWithRelationInput | atividade_participanteOrderByWithRelationInput[]
    cursor?: atividade_participanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Atividade_participanteScalarFieldEnum | Atividade_participanteScalarFieldEnum[]
  }

  /**
   * participante.historicoparticipante
   */
  export type participante$historicoparticipanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoparticipante
     */
    select?: historicoparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historicoparticipante
     */
    omit?: historicoparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoparticipanteInclude<ExtArgs> | null
    where?: historicoparticipanteWhereInput
    orderBy?: historicoparticipanteOrderByWithRelationInput | historicoparticipanteOrderByWithRelationInput[]
    cursor?: historicoparticipanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoparticipanteScalarFieldEnum | HistoricoparticipanteScalarFieldEnum[]
  }

  /**
   * participante without action
   */
  export type participanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participante
     */
    select?: participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participante
     */
    omit?: participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participanteInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nome: string | null
    password: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    password: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    password: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    password?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    password?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    password?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nome: string
    password: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    password?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    nome?: boolean
    password?: boolean
    email?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "password" | "email", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      password: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly nome: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
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


  export const AtividadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    dataEvento: 'dataEvento',
    vagas: 'vagas',
    quantidade_vagas: 'quantidade_vagas',
    ativo: 'ativo',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type AtividadeScalarFieldEnum = (typeof AtividadeScalarFieldEnum)[keyof typeof AtividadeScalarFieldEnum]


  export const Atividade_participanteScalarFieldEnum: {
    id: 'id',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm',
    ativo: 'ativo',
    idParticipante: 'idParticipante',
    idAtividade: 'idAtividade'
  };

  export type Atividade_participanteScalarFieldEnum = (typeof Atividade_participanteScalarFieldEnum)[keyof typeof Atividade_participanteScalarFieldEnum]


  export const HistoricoparticipanteScalarFieldEnum: {
    id: 'id',
    email: 'email',
    idParticipante: 'idParticipante',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type HistoricoparticipanteScalarFieldEnum = (typeof HistoricoparticipanteScalarFieldEnum)[keyof typeof HistoricoparticipanteScalarFieldEnum]


  export const ParticipanteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    ativo: 'ativo',
    email: 'email',
    telefone: 'telefone',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm',
    senha: 'senha',
    Cpf: 'Cpf'
  };

  export type ParticipanteScalarFieldEnum = (typeof ParticipanteScalarFieldEnum)[keyof typeof ParticipanteScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    password: 'password',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const atividadeOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type atividadeOrderByRelevanceFieldEnum = (typeof atividadeOrderByRelevanceFieldEnum)[keyof typeof atividadeOrderByRelevanceFieldEnum]


  export const atividade_participanteOrderByRelevanceFieldEnum: {
    id: 'id',
    idParticipante: 'idParticipante',
    idAtividade: 'idAtividade'
  };

  export type atividade_participanteOrderByRelevanceFieldEnum = (typeof atividade_participanteOrderByRelevanceFieldEnum)[keyof typeof atividade_participanteOrderByRelevanceFieldEnum]


  export const historicoparticipanteOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    idParticipante: 'idParticipante'
  };

  export type historicoparticipanteOrderByRelevanceFieldEnum = (typeof historicoparticipanteOrderByRelevanceFieldEnum)[keyof typeof historicoparticipanteOrderByRelevanceFieldEnum]


  export const participanteOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    senha: 'senha',
    Cpf: 'Cpf'
  };

  export type participanteOrderByRelevanceFieldEnum = (typeof participanteOrderByRelevanceFieldEnum)[keyof typeof participanteOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    nome: 'nome',
    password: 'password',
    email: 'email'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type atividadeWhereInput = {
    AND?: atividadeWhereInput | atividadeWhereInput[]
    OR?: atividadeWhereInput[]
    NOT?: atividadeWhereInput | atividadeWhereInput[]
    id?: StringFilter<"atividade"> | string
    nome?: StringFilter<"atividade"> | string
    descricao?: StringNullableFilter<"atividade"> | string | null
    dataEvento?: DateTimeFilter<"atividade"> | Date | string
    vagas?: IntFilter<"atividade"> | number
    quantidade_vagas?: IntFilter<"atividade"> | number
    ativo?: BoolFilter<"atividade"> | boolean
    criadoEm?: DateTimeFilter<"atividade"> | Date | string
    atualizadoEm?: DateTimeFilter<"atividade"> | Date | string
    atividade_participante?: Atividade_participanteListRelationFilter
  }

  export type atividadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataEvento?: SortOrder
    vagas?: SortOrder
    quantidade_vagas?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    atividade_participante?: atividade_participanteOrderByRelationAggregateInput
    _relevance?: atividadeOrderByRelevanceInput
  }

  export type atividadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: atividadeWhereInput | atividadeWhereInput[]
    OR?: atividadeWhereInput[]
    NOT?: atividadeWhereInput | atividadeWhereInput[]
    nome?: StringFilter<"atividade"> | string
    descricao?: StringNullableFilter<"atividade"> | string | null
    dataEvento?: DateTimeFilter<"atividade"> | Date | string
    vagas?: IntFilter<"atividade"> | number
    quantidade_vagas?: IntFilter<"atividade"> | number
    ativo?: BoolFilter<"atividade"> | boolean
    criadoEm?: DateTimeFilter<"atividade"> | Date | string
    atualizadoEm?: DateTimeFilter<"atividade"> | Date | string
    atividade_participante?: Atividade_participanteListRelationFilter
  }, "id">

  export type atividadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataEvento?: SortOrder
    vagas?: SortOrder
    quantidade_vagas?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: atividadeCountOrderByAggregateInput
    _avg?: atividadeAvgOrderByAggregateInput
    _max?: atividadeMaxOrderByAggregateInput
    _min?: atividadeMinOrderByAggregateInput
    _sum?: atividadeSumOrderByAggregateInput
  }

  export type atividadeScalarWhereWithAggregatesInput = {
    AND?: atividadeScalarWhereWithAggregatesInput | atividadeScalarWhereWithAggregatesInput[]
    OR?: atividadeScalarWhereWithAggregatesInput[]
    NOT?: atividadeScalarWhereWithAggregatesInput | atividadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"atividade"> | string
    nome?: StringWithAggregatesFilter<"atividade"> | string
    descricao?: StringNullableWithAggregatesFilter<"atividade"> | string | null
    dataEvento?: DateTimeWithAggregatesFilter<"atividade"> | Date | string
    vagas?: IntWithAggregatesFilter<"atividade"> | number
    quantidade_vagas?: IntWithAggregatesFilter<"atividade"> | number
    ativo?: BoolWithAggregatesFilter<"atividade"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"atividade"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"atividade"> | Date | string
  }

  export type atividade_participanteWhereInput = {
    AND?: atividade_participanteWhereInput | atividade_participanteWhereInput[]
    OR?: atividade_participanteWhereInput[]
    NOT?: atividade_participanteWhereInput | atividade_participanteWhereInput[]
    id?: StringFilter<"atividade_participante"> | string
    criadoEm?: DateTimeFilter<"atividade_participante"> | Date | string
    atualizadoEm?: DateTimeFilter<"atividade_participante"> | Date | string
    ativo?: BoolFilter<"atividade_participante"> | boolean
    idParticipante?: StringFilter<"atividade_participante"> | string
    idAtividade?: StringFilter<"atividade_participante"> | string
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
    atividade?: XOR<AtividadeScalarRelationFilter, atividadeWhereInput>
  }

  export type atividade_participanteOrderByWithRelationInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    ativo?: SortOrder
    idParticipante?: SortOrder
    idAtividade?: SortOrder
    participante?: participanteOrderByWithRelationInput
    atividade?: atividadeOrderByWithRelationInput
    _relevance?: atividade_participanteOrderByRelevanceInput
  }

  export type atividade_participanteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idAtividade_idParticipante?: atividade_participanteIdAtividadeIdParticipanteCompoundUniqueInput
    AND?: atividade_participanteWhereInput | atividade_participanteWhereInput[]
    OR?: atividade_participanteWhereInput[]
    NOT?: atividade_participanteWhereInput | atividade_participanteWhereInput[]
    criadoEm?: DateTimeFilter<"atividade_participante"> | Date | string
    atualizadoEm?: DateTimeFilter<"atividade_participante"> | Date | string
    ativo?: BoolFilter<"atividade_participante"> | boolean
    idParticipante?: StringFilter<"atividade_participante"> | string
    idAtividade?: StringFilter<"atividade_participante"> | string
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
    atividade?: XOR<AtividadeScalarRelationFilter, atividadeWhereInput>
  }, "id" | "idAtividade_idParticipante">

  export type atividade_participanteOrderByWithAggregationInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    ativo?: SortOrder
    idParticipante?: SortOrder
    idAtividade?: SortOrder
    _count?: atividade_participanteCountOrderByAggregateInput
    _max?: atividade_participanteMaxOrderByAggregateInput
    _min?: atividade_participanteMinOrderByAggregateInput
  }

  export type atividade_participanteScalarWhereWithAggregatesInput = {
    AND?: atividade_participanteScalarWhereWithAggregatesInput | atividade_participanteScalarWhereWithAggregatesInput[]
    OR?: atividade_participanteScalarWhereWithAggregatesInput[]
    NOT?: atividade_participanteScalarWhereWithAggregatesInput | atividade_participanteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"atividade_participante"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"atividade_participante"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"atividade_participante"> | Date | string
    ativo?: BoolWithAggregatesFilter<"atividade_participante"> | boolean
    idParticipante?: StringWithAggregatesFilter<"atividade_participante"> | string
    idAtividade?: StringWithAggregatesFilter<"atividade_participante"> | string
  }

  export type historicoparticipanteWhereInput = {
    AND?: historicoparticipanteWhereInput | historicoparticipanteWhereInput[]
    OR?: historicoparticipanteWhereInput[]
    NOT?: historicoparticipanteWhereInput | historicoparticipanteWhereInput[]
    id?: StringFilter<"historicoparticipante"> | string
    email?: StringFilter<"historicoparticipante"> | string
    idParticipante?: StringFilter<"historicoparticipante"> | string
    criadoEm?: DateTimeFilter<"historicoparticipante"> | Date | string
    atualizadoEm?: DateTimeFilter<"historicoparticipante"> | Date | string
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
  }

  export type historicoparticipanteOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    idParticipante?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    participante?: participanteOrderByWithRelationInput
    _relevance?: historicoparticipanteOrderByRelevanceInput
  }

  export type historicoparticipanteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: historicoparticipanteWhereInput | historicoparticipanteWhereInput[]
    OR?: historicoparticipanteWhereInput[]
    NOT?: historicoparticipanteWhereInput | historicoparticipanteWhereInput[]
    email?: StringFilter<"historicoparticipante"> | string
    idParticipante?: StringFilter<"historicoparticipante"> | string
    criadoEm?: DateTimeFilter<"historicoparticipante"> | Date | string
    atualizadoEm?: DateTimeFilter<"historicoparticipante"> | Date | string
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
  }, "id">

  export type historicoparticipanteOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    idParticipante?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: historicoparticipanteCountOrderByAggregateInput
    _max?: historicoparticipanteMaxOrderByAggregateInput
    _min?: historicoparticipanteMinOrderByAggregateInput
  }

  export type historicoparticipanteScalarWhereWithAggregatesInput = {
    AND?: historicoparticipanteScalarWhereWithAggregatesInput | historicoparticipanteScalarWhereWithAggregatesInput[]
    OR?: historicoparticipanteScalarWhereWithAggregatesInput[]
    NOT?: historicoparticipanteScalarWhereWithAggregatesInput | historicoparticipanteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"historicoparticipante"> | string
    email?: StringWithAggregatesFilter<"historicoparticipante"> | string
    idParticipante?: StringWithAggregatesFilter<"historicoparticipante"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"historicoparticipante"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"historicoparticipante"> | Date | string
  }

  export type participanteWhereInput = {
    AND?: participanteWhereInput | participanteWhereInput[]
    OR?: participanteWhereInput[]
    NOT?: participanteWhereInput | participanteWhereInput[]
    id?: StringFilter<"participante"> | string
    nome?: StringFilter<"participante"> | string
    ativo?: BoolFilter<"participante"> | boolean
    email?: StringFilter<"participante"> | string
    telefone?: StringFilter<"participante"> | string
    criadoEm?: DateTimeFilter<"participante"> | Date | string
    atualizadoEm?: DateTimeFilter<"participante"> | Date | string
    senha?: StringNullableFilter<"participante"> | string | null
    Cpf?: StringNullableFilter<"participante"> | string | null
    atividade_participante?: Atividade_participanteListRelationFilter
    historicoparticipante?: HistoricoparticipanteListRelationFilter
  }

  export type participanteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    senha?: SortOrderInput | SortOrder
    Cpf?: SortOrderInput | SortOrder
    atividade_participante?: atividade_participanteOrderByRelationAggregateInput
    historicoparticipante?: historicoparticipanteOrderByRelationAggregateInput
    _relevance?: participanteOrderByRelevanceInput
  }

  export type participanteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: participanteWhereInput | participanteWhereInput[]
    OR?: participanteWhereInput[]
    NOT?: participanteWhereInput | participanteWhereInput[]
    nome?: StringFilter<"participante"> | string
    ativo?: BoolFilter<"participante"> | boolean
    telefone?: StringFilter<"participante"> | string
    criadoEm?: DateTimeFilter<"participante"> | Date | string
    atualizadoEm?: DateTimeFilter<"participante"> | Date | string
    senha?: StringNullableFilter<"participante"> | string | null
    Cpf?: StringNullableFilter<"participante"> | string | null
    atividade_participante?: Atividade_participanteListRelationFilter
    historicoparticipante?: HistoricoparticipanteListRelationFilter
  }, "id" | "email">

  export type participanteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    senha?: SortOrderInput | SortOrder
    Cpf?: SortOrderInput | SortOrder
    _count?: participanteCountOrderByAggregateInput
    _max?: participanteMaxOrderByAggregateInput
    _min?: participanteMinOrderByAggregateInput
  }

  export type participanteScalarWhereWithAggregatesInput = {
    AND?: participanteScalarWhereWithAggregatesInput | participanteScalarWhereWithAggregatesInput[]
    OR?: participanteScalarWhereWithAggregatesInput[]
    NOT?: participanteScalarWhereWithAggregatesInput | participanteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"participante"> | string
    nome?: StringWithAggregatesFilter<"participante"> | string
    ativo?: BoolWithAggregatesFilter<"participante"> | boolean
    email?: StringWithAggregatesFilter<"participante"> | string
    telefone?: StringWithAggregatesFilter<"participante"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"participante"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"participante"> | Date | string
    senha?: StringNullableWithAggregatesFilter<"participante"> | string | null
    Cpf?: StringNullableWithAggregatesFilter<"participante"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    nome?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    password?: SortOrder
    email?: SortOrder
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    nome?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    password?: SortOrder
    email?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    nome?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
  }

  export type atividadeCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    dataEvento: Date | string
    vagas: number
    quantidade_vagas: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    atividade_participante?: atividade_participanteCreateNestedManyWithoutAtividadeInput
  }

  export type atividadeUncheckedCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    dataEvento: Date | string
    vagas: number
    quantidade_vagas: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    atividade_participante?: atividade_participanteUncheckedCreateNestedManyWithoutAtividadeInput
  }

  export type atividadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    quantidade_vagas?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atividade_participante?: atividade_participanteUpdateManyWithoutAtividadeNestedInput
  }

  export type atividadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    quantidade_vagas?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atividade_participante?: atividade_participanteUncheckedUpdateManyWithoutAtividadeNestedInput
  }

  export type atividadeCreateManyInput = {
    id?: string
    nome: string
    descricao?: string | null
    dataEvento: Date | string
    vagas: number
    quantidade_vagas: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type atividadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    quantidade_vagas?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type atividadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    quantidade_vagas?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type atividade_participanteCreateInput = {
    id?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    ativo?: boolean
    participante: participanteCreateNestedOneWithoutAtividade_participanteInput
    atividade: atividadeCreateNestedOneWithoutAtividade_participanteInput
  }

  export type atividade_participanteUncheckedCreateInput = {
    id?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    ativo?: boolean
    idParticipante: string
    idAtividade: string
  }

  export type atividade_participanteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    participante?: participanteUpdateOneRequiredWithoutAtividade_participanteNestedInput
    atividade?: atividadeUpdateOneRequiredWithoutAtividade_participanteNestedInput
  }

  export type atividade_participanteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    idParticipante?: StringFieldUpdateOperationsInput | string
    idAtividade?: StringFieldUpdateOperationsInput | string
  }

  export type atividade_participanteCreateManyInput = {
    id?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    ativo?: boolean
    idParticipante: string
    idAtividade: string
  }

  export type atividade_participanteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type atividade_participanteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    idParticipante?: StringFieldUpdateOperationsInput | string
    idAtividade?: StringFieldUpdateOperationsInput | string
  }

  export type historicoparticipanteCreateInput = {
    id?: string
    email: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    participante: participanteCreateNestedOneWithoutHistoricoparticipanteInput
  }

  export type historicoparticipanteUncheckedCreateInput = {
    id?: string
    email: string
    idParticipante: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type historicoparticipanteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    participante?: participanteUpdateOneRequiredWithoutHistoricoparticipanteNestedInput
  }

  export type historicoparticipanteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoparticipanteCreateManyInput = {
    id?: string
    email: string
    idParticipante: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type historicoparticipanteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoparticipanteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type participanteCreateInput = {
    id?: string
    nome: string
    ativo?: boolean
    email: string
    telefone: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    senha?: string | null
    Cpf?: string | null
    atividade_participante?: atividade_participanteCreateNestedManyWithoutParticipanteInput
    historicoparticipante?: historicoparticipanteCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUncheckedCreateInput = {
    id?: string
    nome: string
    ativo?: boolean
    email: string
    telefone: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    senha?: string | null
    Cpf?: string | null
    atividade_participante?: atividade_participanteUncheckedCreateNestedManyWithoutParticipanteInput
    historicoparticipante?: historicoparticipanteUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    Cpf?: NullableStringFieldUpdateOperationsInput | string | null
    atividade_participante?: atividade_participanteUpdateManyWithoutParticipanteNestedInput
    historicoparticipante?: historicoparticipanteUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    Cpf?: NullableStringFieldUpdateOperationsInput | string | null
    atividade_participante?: atividade_participanteUncheckedUpdateManyWithoutParticipanteNestedInput
    historicoparticipante?: historicoparticipanteUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteCreateManyInput = {
    id?: string
    nome: string
    ativo?: boolean
    email: string
    telefone: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    senha?: string | null
    Cpf?: string | null
  }

  export type participanteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    Cpf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type participanteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    Cpf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    nome: string
    password: string
    email: string
  }

  export type userUncheckedCreateInput = {
    id?: number
    nome: string
    password: string
    email: string
  }

  export type userUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateManyInput = {
    id?: number
    nome: string
    password: string
    email: string
  }

  export type userUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Atividade_participanteListRelationFilter = {
    every?: atividade_participanteWhereInput
    some?: atividade_participanteWhereInput
    none?: atividade_participanteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type atividade_participanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type atividadeOrderByRelevanceInput = {
    fields: atividadeOrderByRelevanceFieldEnum | atividadeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type atividadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataEvento?: SortOrder
    vagas?: SortOrder
    quantidade_vagas?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type atividadeAvgOrderByAggregateInput = {
    vagas?: SortOrder
    quantidade_vagas?: SortOrder
  }

  export type atividadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataEvento?: SortOrder
    vagas?: SortOrder
    quantidade_vagas?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type atividadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataEvento?: SortOrder
    vagas?: SortOrder
    quantidade_vagas?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type atividadeSumOrderByAggregateInput = {
    vagas?: SortOrder
    quantidade_vagas?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParticipanteScalarRelationFilter = {
    is?: participanteWhereInput
    isNot?: participanteWhereInput
  }

  export type AtividadeScalarRelationFilter = {
    is?: atividadeWhereInput
    isNot?: atividadeWhereInput
  }

  export type atividade_participanteOrderByRelevanceInput = {
    fields: atividade_participanteOrderByRelevanceFieldEnum | atividade_participanteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type atividade_participanteIdAtividadeIdParticipanteCompoundUniqueInput = {
    idAtividade: string
    idParticipante: string
  }

  export type atividade_participanteCountOrderByAggregateInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    ativo?: SortOrder
    idParticipante?: SortOrder
    idAtividade?: SortOrder
  }

  export type atividade_participanteMaxOrderByAggregateInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    ativo?: SortOrder
    idParticipante?: SortOrder
    idAtividade?: SortOrder
  }

  export type atividade_participanteMinOrderByAggregateInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    ativo?: SortOrder
    idParticipante?: SortOrder
    idAtividade?: SortOrder
  }

  export type historicoparticipanteOrderByRelevanceInput = {
    fields: historicoparticipanteOrderByRelevanceFieldEnum | historicoparticipanteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type historicoparticipanteCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    idParticipante?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type historicoparticipanteMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    idParticipante?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type historicoparticipanteMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    idParticipante?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type HistoricoparticipanteListRelationFilter = {
    every?: historicoparticipanteWhereInput
    some?: historicoparticipanteWhereInput
    none?: historicoparticipanteWhereInput
  }

  export type historicoparticipanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type participanteOrderByRelevanceInput = {
    fields: participanteOrderByRelevanceFieldEnum | participanteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type participanteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    senha?: SortOrder
    Cpf?: SortOrder
  }

  export type participanteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    senha?: SortOrder
    Cpf?: SortOrder
  }

  export type participanteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    senha?: SortOrder
    Cpf?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type atividade_participanteCreateNestedManyWithoutAtividadeInput = {
    create?: XOR<atividade_participanteCreateWithoutAtividadeInput, atividade_participanteUncheckedCreateWithoutAtividadeInput> | atividade_participanteCreateWithoutAtividadeInput[] | atividade_participanteUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: atividade_participanteCreateOrConnectWithoutAtividadeInput | atividade_participanteCreateOrConnectWithoutAtividadeInput[]
    createMany?: atividade_participanteCreateManyAtividadeInputEnvelope
    connect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
  }

  export type atividade_participanteUncheckedCreateNestedManyWithoutAtividadeInput = {
    create?: XOR<atividade_participanteCreateWithoutAtividadeInput, atividade_participanteUncheckedCreateWithoutAtividadeInput> | atividade_participanteCreateWithoutAtividadeInput[] | atividade_participanteUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: atividade_participanteCreateOrConnectWithoutAtividadeInput | atividade_participanteCreateOrConnectWithoutAtividadeInput[]
    createMany?: atividade_participanteCreateManyAtividadeInputEnvelope
    connect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type atividade_participanteUpdateManyWithoutAtividadeNestedInput = {
    create?: XOR<atividade_participanteCreateWithoutAtividadeInput, atividade_participanteUncheckedCreateWithoutAtividadeInput> | atividade_participanteCreateWithoutAtividadeInput[] | atividade_participanteUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: atividade_participanteCreateOrConnectWithoutAtividadeInput | atividade_participanteCreateOrConnectWithoutAtividadeInput[]
    upsert?: atividade_participanteUpsertWithWhereUniqueWithoutAtividadeInput | atividade_participanteUpsertWithWhereUniqueWithoutAtividadeInput[]
    createMany?: atividade_participanteCreateManyAtividadeInputEnvelope
    set?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    disconnect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    delete?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    connect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    update?: atividade_participanteUpdateWithWhereUniqueWithoutAtividadeInput | atividade_participanteUpdateWithWhereUniqueWithoutAtividadeInput[]
    updateMany?: atividade_participanteUpdateManyWithWhereWithoutAtividadeInput | atividade_participanteUpdateManyWithWhereWithoutAtividadeInput[]
    deleteMany?: atividade_participanteScalarWhereInput | atividade_participanteScalarWhereInput[]
  }

  export type atividade_participanteUncheckedUpdateManyWithoutAtividadeNestedInput = {
    create?: XOR<atividade_participanteCreateWithoutAtividadeInput, atividade_participanteUncheckedCreateWithoutAtividadeInput> | atividade_participanteCreateWithoutAtividadeInput[] | atividade_participanteUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: atividade_participanteCreateOrConnectWithoutAtividadeInput | atividade_participanteCreateOrConnectWithoutAtividadeInput[]
    upsert?: atividade_participanteUpsertWithWhereUniqueWithoutAtividadeInput | atividade_participanteUpsertWithWhereUniqueWithoutAtividadeInput[]
    createMany?: atividade_participanteCreateManyAtividadeInputEnvelope
    set?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    disconnect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    delete?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    connect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    update?: atividade_participanteUpdateWithWhereUniqueWithoutAtividadeInput | atividade_participanteUpdateWithWhereUniqueWithoutAtividadeInput[]
    updateMany?: atividade_participanteUpdateManyWithWhereWithoutAtividadeInput | atividade_participanteUpdateManyWithWhereWithoutAtividadeInput[]
    deleteMany?: atividade_participanteScalarWhereInput | atividade_participanteScalarWhereInput[]
  }

  export type participanteCreateNestedOneWithoutAtividade_participanteInput = {
    create?: XOR<participanteCreateWithoutAtividade_participanteInput, participanteUncheckedCreateWithoutAtividade_participanteInput>
    connectOrCreate?: participanteCreateOrConnectWithoutAtividade_participanteInput
    connect?: participanteWhereUniqueInput
  }

  export type atividadeCreateNestedOneWithoutAtividade_participanteInput = {
    create?: XOR<atividadeCreateWithoutAtividade_participanteInput, atividadeUncheckedCreateWithoutAtividade_participanteInput>
    connectOrCreate?: atividadeCreateOrConnectWithoutAtividade_participanteInput
    connect?: atividadeWhereUniqueInput
  }

  export type participanteUpdateOneRequiredWithoutAtividade_participanteNestedInput = {
    create?: XOR<participanteCreateWithoutAtividade_participanteInput, participanteUncheckedCreateWithoutAtividade_participanteInput>
    connectOrCreate?: participanteCreateOrConnectWithoutAtividade_participanteInput
    upsert?: participanteUpsertWithoutAtividade_participanteInput
    connect?: participanteWhereUniqueInput
    update?: XOR<XOR<participanteUpdateToOneWithWhereWithoutAtividade_participanteInput, participanteUpdateWithoutAtividade_participanteInput>, participanteUncheckedUpdateWithoutAtividade_participanteInput>
  }

  export type atividadeUpdateOneRequiredWithoutAtividade_participanteNestedInput = {
    create?: XOR<atividadeCreateWithoutAtividade_participanteInput, atividadeUncheckedCreateWithoutAtividade_participanteInput>
    connectOrCreate?: atividadeCreateOrConnectWithoutAtividade_participanteInput
    upsert?: atividadeUpsertWithoutAtividade_participanteInput
    connect?: atividadeWhereUniqueInput
    update?: XOR<XOR<atividadeUpdateToOneWithWhereWithoutAtividade_participanteInput, atividadeUpdateWithoutAtividade_participanteInput>, atividadeUncheckedUpdateWithoutAtividade_participanteInput>
  }

  export type participanteCreateNestedOneWithoutHistoricoparticipanteInput = {
    create?: XOR<participanteCreateWithoutHistoricoparticipanteInput, participanteUncheckedCreateWithoutHistoricoparticipanteInput>
    connectOrCreate?: participanteCreateOrConnectWithoutHistoricoparticipanteInput
    connect?: participanteWhereUniqueInput
  }

  export type participanteUpdateOneRequiredWithoutHistoricoparticipanteNestedInput = {
    create?: XOR<participanteCreateWithoutHistoricoparticipanteInput, participanteUncheckedCreateWithoutHistoricoparticipanteInput>
    connectOrCreate?: participanteCreateOrConnectWithoutHistoricoparticipanteInput
    upsert?: participanteUpsertWithoutHistoricoparticipanteInput
    connect?: participanteWhereUniqueInput
    update?: XOR<XOR<participanteUpdateToOneWithWhereWithoutHistoricoparticipanteInput, participanteUpdateWithoutHistoricoparticipanteInput>, participanteUncheckedUpdateWithoutHistoricoparticipanteInput>
  }

  export type atividade_participanteCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<atividade_participanteCreateWithoutParticipanteInput, atividade_participanteUncheckedCreateWithoutParticipanteInput> | atividade_participanteCreateWithoutParticipanteInput[] | atividade_participanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: atividade_participanteCreateOrConnectWithoutParticipanteInput | atividade_participanteCreateOrConnectWithoutParticipanteInput[]
    createMany?: atividade_participanteCreateManyParticipanteInputEnvelope
    connect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
  }

  export type historicoparticipanteCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<historicoparticipanteCreateWithoutParticipanteInput, historicoparticipanteUncheckedCreateWithoutParticipanteInput> | historicoparticipanteCreateWithoutParticipanteInput[] | historicoparticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: historicoparticipanteCreateOrConnectWithoutParticipanteInput | historicoparticipanteCreateOrConnectWithoutParticipanteInput[]
    createMany?: historicoparticipanteCreateManyParticipanteInputEnvelope
    connect?: historicoparticipanteWhereUniqueInput | historicoparticipanteWhereUniqueInput[]
  }

  export type atividade_participanteUncheckedCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<atividade_participanteCreateWithoutParticipanteInput, atividade_participanteUncheckedCreateWithoutParticipanteInput> | atividade_participanteCreateWithoutParticipanteInput[] | atividade_participanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: atividade_participanteCreateOrConnectWithoutParticipanteInput | atividade_participanteCreateOrConnectWithoutParticipanteInput[]
    createMany?: atividade_participanteCreateManyParticipanteInputEnvelope
    connect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
  }

  export type historicoparticipanteUncheckedCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<historicoparticipanteCreateWithoutParticipanteInput, historicoparticipanteUncheckedCreateWithoutParticipanteInput> | historicoparticipanteCreateWithoutParticipanteInput[] | historicoparticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: historicoparticipanteCreateOrConnectWithoutParticipanteInput | historicoparticipanteCreateOrConnectWithoutParticipanteInput[]
    createMany?: historicoparticipanteCreateManyParticipanteInputEnvelope
    connect?: historicoparticipanteWhereUniqueInput | historicoparticipanteWhereUniqueInput[]
  }

  export type atividade_participanteUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<atividade_participanteCreateWithoutParticipanteInput, atividade_participanteUncheckedCreateWithoutParticipanteInput> | atividade_participanteCreateWithoutParticipanteInput[] | atividade_participanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: atividade_participanteCreateOrConnectWithoutParticipanteInput | atividade_participanteCreateOrConnectWithoutParticipanteInput[]
    upsert?: atividade_participanteUpsertWithWhereUniqueWithoutParticipanteInput | atividade_participanteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: atividade_participanteCreateManyParticipanteInputEnvelope
    set?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    disconnect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    delete?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    connect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    update?: atividade_participanteUpdateWithWhereUniqueWithoutParticipanteInput | atividade_participanteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: atividade_participanteUpdateManyWithWhereWithoutParticipanteInput | atividade_participanteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: atividade_participanteScalarWhereInput | atividade_participanteScalarWhereInput[]
  }

  export type historicoparticipanteUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<historicoparticipanteCreateWithoutParticipanteInput, historicoparticipanteUncheckedCreateWithoutParticipanteInput> | historicoparticipanteCreateWithoutParticipanteInput[] | historicoparticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: historicoparticipanteCreateOrConnectWithoutParticipanteInput | historicoparticipanteCreateOrConnectWithoutParticipanteInput[]
    upsert?: historicoparticipanteUpsertWithWhereUniqueWithoutParticipanteInput | historicoparticipanteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: historicoparticipanteCreateManyParticipanteInputEnvelope
    set?: historicoparticipanteWhereUniqueInput | historicoparticipanteWhereUniqueInput[]
    disconnect?: historicoparticipanteWhereUniqueInput | historicoparticipanteWhereUniqueInput[]
    delete?: historicoparticipanteWhereUniqueInput | historicoparticipanteWhereUniqueInput[]
    connect?: historicoparticipanteWhereUniqueInput | historicoparticipanteWhereUniqueInput[]
    update?: historicoparticipanteUpdateWithWhereUniqueWithoutParticipanteInput | historicoparticipanteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: historicoparticipanteUpdateManyWithWhereWithoutParticipanteInput | historicoparticipanteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: historicoparticipanteScalarWhereInput | historicoparticipanteScalarWhereInput[]
  }

  export type atividade_participanteUncheckedUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<atividade_participanteCreateWithoutParticipanteInput, atividade_participanteUncheckedCreateWithoutParticipanteInput> | atividade_participanteCreateWithoutParticipanteInput[] | atividade_participanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: atividade_participanteCreateOrConnectWithoutParticipanteInput | atividade_participanteCreateOrConnectWithoutParticipanteInput[]
    upsert?: atividade_participanteUpsertWithWhereUniqueWithoutParticipanteInput | atividade_participanteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: atividade_participanteCreateManyParticipanteInputEnvelope
    set?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    disconnect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    delete?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    connect?: atividade_participanteWhereUniqueInput | atividade_participanteWhereUniqueInput[]
    update?: atividade_participanteUpdateWithWhereUniqueWithoutParticipanteInput | atividade_participanteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: atividade_participanteUpdateManyWithWhereWithoutParticipanteInput | atividade_participanteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: atividade_participanteScalarWhereInput | atividade_participanteScalarWhereInput[]
  }

  export type historicoparticipanteUncheckedUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<historicoparticipanteCreateWithoutParticipanteInput, historicoparticipanteUncheckedCreateWithoutParticipanteInput> | historicoparticipanteCreateWithoutParticipanteInput[] | historicoparticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: historicoparticipanteCreateOrConnectWithoutParticipanteInput | historicoparticipanteCreateOrConnectWithoutParticipanteInput[]
    upsert?: historicoparticipanteUpsertWithWhereUniqueWithoutParticipanteInput | historicoparticipanteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: historicoparticipanteCreateManyParticipanteInputEnvelope
    set?: historicoparticipanteWhereUniqueInput | historicoparticipanteWhereUniqueInput[]
    disconnect?: historicoparticipanteWhereUniqueInput | historicoparticipanteWhereUniqueInput[]
    delete?: historicoparticipanteWhereUniqueInput | historicoparticipanteWhereUniqueInput[]
    connect?: historicoparticipanteWhereUniqueInput | historicoparticipanteWhereUniqueInput[]
    update?: historicoparticipanteUpdateWithWhereUniqueWithoutParticipanteInput | historicoparticipanteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: historicoparticipanteUpdateManyWithWhereWithoutParticipanteInput | historicoparticipanteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: historicoparticipanteScalarWhereInput | historicoparticipanteScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type atividade_participanteCreateWithoutAtividadeInput = {
    id?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    ativo?: boolean
    participante: participanteCreateNestedOneWithoutAtividade_participanteInput
  }

  export type atividade_participanteUncheckedCreateWithoutAtividadeInput = {
    id?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    ativo?: boolean
    idParticipante: string
  }

  export type atividade_participanteCreateOrConnectWithoutAtividadeInput = {
    where: atividade_participanteWhereUniqueInput
    create: XOR<atividade_participanteCreateWithoutAtividadeInput, atividade_participanteUncheckedCreateWithoutAtividadeInput>
  }

  export type atividade_participanteCreateManyAtividadeInputEnvelope = {
    data: atividade_participanteCreateManyAtividadeInput | atividade_participanteCreateManyAtividadeInput[]
    skipDuplicates?: boolean
  }

  export type atividade_participanteUpsertWithWhereUniqueWithoutAtividadeInput = {
    where: atividade_participanteWhereUniqueInput
    update: XOR<atividade_participanteUpdateWithoutAtividadeInput, atividade_participanteUncheckedUpdateWithoutAtividadeInput>
    create: XOR<atividade_participanteCreateWithoutAtividadeInput, atividade_participanteUncheckedCreateWithoutAtividadeInput>
  }

  export type atividade_participanteUpdateWithWhereUniqueWithoutAtividadeInput = {
    where: atividade_participanteWhereUniqueInput
    data: XOR<atividade_participanteUpdateWithoutAtividadeInput, atividade_participanteUncheckedUpdateWithoutAtividadeInput>
  }

  export type atividade_participanteUpdateManyWithWhereWithoutAtividadeInput = {
    where: atividade_participanteScalarWhereInput
    data: XOR<atividade_participanteUpdateManyMutationInput, atividade_participanteUncheckedUpdateManyWithoutAtividadeInput>
  }

  export type atividade_participanteScalarWhereInput = {
    AND?: atividade_participanteScalarWhereInput | atividade_participanteScalarWhereInput[]
    OR?: atividade_participanteScalarWhereInput[]
    NOT?: atividade_participanteScalarWhereInput | atividade_participanteScalarWhereInput[]
    id?: StringFilter<"atividade_participante"> | string
    criadoEm?: DateTimeFilter<"atividade_participante"> | Date | string
    atualizadoEm?: DateTimeFilter<"atividade_participante"> | Date | string
    ativo?: BoolFilter<"atividade_participante"> | boolean
    idParticipante?: StringFilter<"atividade_participante"> | string
    idAtividade?: StringFilter<"atividade_participante"> | string
  }

  export type participanteCreateWithoutAtividade_participanteInput = {
    id?: string
    nome: string
    ativo?: boolean
    email: string
    telefone: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    senha?: string | null
    Cpf?: string | null
    historicoparticipante?: historicoparticipanteCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUncheckedCreateWithoutAtividade_participanteInput = {
    id?: string
    nome: string
    ativo?: boolean
    email: string
    telefone: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    senha?: string | null
    Cpf?: string | null
    historicoparticipante?: historicoparticipanteUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type participanteCreateOrConnectWithoutAtividade_participanteInput = {
    where: participanteWhereUniqueInput
    create: XOR<participanteCreateWithoutAtividade_participanteInput, participanteUncheckedCreateWithoutAtividade_participanteInput>
  }

  export type atividadeCreateWithoutAtividade_participanteInput = {
    id?: string
    nome: string
    descricao?: string | null
    dataEvento: Date | string
    vagas: number
    quantidade_vagas: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type atividadeUncheckedCreateWithoutAtividade_participanteInput = {
    id?: string
    nome: string
    descricao?: string | null
    dataEvento: Date | string
    vagas: number
    quantidade_vagas: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type atividadeCreateOrConnectWithoutAtividade_participanteInput = {
    where: atividadeWhereUniqueInput
    create: XOR<atividadeCreateWithoutAtividade_participanteInput, atividadeUncheckedCreateWithoutAtividade_participanteInput>
  }

  export type participanteUpsertWithoutAtividade_participanteInput = {
    update: XOR<participanteUpdateWithoutAtividade_participanteInput, participanteUncheckedUpdateWithoutAtividade_participanteInput>
    create: XOR<participanteCreateWithoutAtividade_participanteInput, participanteUncheckedCreateWithoutAtividade_participanteInput>
    where?: participanteWhereInput
  }

  export type participanteUpdateToOneWithWhereWithoutAtividade_participanteInput = {
    where?: participanteWhereInput
    data: XOR<participanteUpdateWithoutAtividade_participanteInput, participanteUncheckedUpdateWithoutAtividade_participanteInput>
  }

  export type participanteUpdateWithoutAtividade_participanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    Cpf?: NullableStringFieldUpdateOperationsInput | string | null
    historicoparticipante?: historicoparticipanteUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteUncheckedUpdateWithoutAtividade_participanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    Cpf?: NullableStringFieldUpdateOperationsInput | string | null
    historicoparticipante?: historicoparticipanteUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type atividadeUpsertWithoutAtividade_participanteInput = {
    update: XOR<atividadeUpdateWithoutAtividade_participanteInput, atividadeUncheckedUpdateWithoutAtividade_participanteInput>
    create: XOR<atividadeCreateWithoutAtividade_participanteInput, atividadeUncheckedCreateWithoutAtividade_participanteInput>
    where?: atividadeWhereInput
  }

  export type atividadeUpdateToOneWithWhereWithoutAtividade_participanteInput = {
    where?: atividadeWhereInput
    data: XOR<atividadeUpdateWithoutAtividade_participanteInput, atividadeUncheckedUpdateWithoutAtividade_participanteInput>
  }

  export type atividadeUpdateWithoutAtividade_participanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    quantidade_vagas?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type atividadeUncheckedUpdateWithoutAtividade_participanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    quantidade_vagas?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type participanteCreateWithoutHistoricoparticipanteInput = {
    id?: string
    nome: string
    ativo?: boolean
    email: string
    telefone: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    senha?: string | null
    Cpf?: string | null
    atividade_participante?: atividade_participanteCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUncheckedCreateWithoutHistoricoparticipanteInput = {
    id?: string
    nome: string
    ativo?: boolean
    email: string
    telefone: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    senha?: string | null
    Cpf?: string | null
    atividade_participante?: atividade_participanteUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type participanteCreateOrConnectWithoutHistoricoparticipanteInput = {
    where: participanteWhereUniqueInput
    create: XOR<participanteCreateWithoutHistoricoparticipanteInput, participanteUncheckedCreateWithoutHistoricoparticipanteInput>
  }

  export type participanteUpsertWithoutHistoricoparticipanteInput = {
    update: XOR<participanteUpdateWithoutHistoricoparticipanteInput, participanteUncheckedUpdateWithoutHistoricoparticipanteInput>
    create: XOR<participanteCreateWithoutHistoricoparticipanteInput, participanteUncheckedCreateWithoutHistoricoparticipanteInput>
    where?: participanteWhereInput
  }

  export type participanteUpdateToOneWithWhereWithoutHistoricoparticipanteInput = {
    where?: participanteWhereInput
    data: XOR<participanteUpdateWithoutHistoricoparticipanteInput, participanteUncheckedUpdateWithoutHistoricoparticipanteInput>
  }

  export type participanteUpdateWithoutHistoricoparticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    Cpf?: NullableStringFieldUpdateOperationsInput | string | null
    atividade_participante?: atividade_participanteUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteUncheckedUpdateWithoutHistoricoparticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    Cpf?: NullableStringFieldUpdateOperationsInput | string | null
    atividade_participante?: atividade_participanteUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type atividade_participanteCreateWithoutParticipanteInput = {
    id?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    ativo?: boolean
    atividade: atividadeCreateNestedOneWithoutAtividade_participanteInput
  }

  export type atividade_participanteUncheckedCreateWithoutParticipanteInput = {
    id?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    ativo?: boolean
    idAtividade: string
  }

  export type atividade_participanteCreateOrConnectWithoutParticipanteInput = {
    where: atividade_participanteWhereUniqueInput
    create: XOR<atividade_participanteCreateWithoutParticipanteInput, atividade_participanteUncheckedCreateWithoutParticipanteInput>
  }

  export type atividade_participanteCreateManyParticipanteInputEnvelope = {
    data: atividade_participanteCreateManyParticipanteInput | atividade_participanteCreateManyParticipanteInput[]
    skipDuplicates?: boolean
  }

  export type historicoparticipanteCreateWithoutParticipanteInput = {
    id?: string
    email: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type historicoparticipanteUncheckedCreateWithoutParticipanteInput = {
    id?: string
    email: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type historicoparticipanteCreateOrConnectWithoutParticipanteInput = {
    where: historicoparticipanteWhereUniqueInput
    create: XOR<historicoparticipanteCreateWithoutParticipanteInput, historicoparticipanteUncheckedCreateWithoutParticipanteInput>
  }

  export type historicoparticipanteCreateManyParticipanteInputEnvelope = {
    data: historicoparticipanteCreateManyParticipanteInput | historicoparticipanteCreateManyParticipanteInput[]
    skipDuplicates?: boolean
  }

  export type atividade_participanteUpsertWithWhereUniqueWithoutParticipanteInput = {
    where: atividade_participanteWhereUniqueInput
    update: XOR<atividade_participanteUpdateWithoutParticipanteInput, atividade_participanteUncheckedUpdateWithoutParticipanteInput>
    create: XOR<atividade_participanteCreateWithoutParticipanteInput, atividade_participanteUncheckedCreateWithoutParticipanteInput>
  }

  export type atividade_participanteUpdateWithWhereUniqueWithoutParticipanteInput = {
    where: atividade_participanteWhereUniqueInput
    data: XOR<atividade_participanteUpdateWithoutParticipanteInput, atividade_participanteUncheckedUpdateWithoutParticipanteInput>
  }

  export type atividade_participanteUpdateManyWithWhereWithoutParticipanteInput = {
    where: atividade_participanteScalarWhereInput
    data: XOR<atividade_participanteUpdateManyMutationInput, atividade_participanteUncheckedUpdateManyWithoutParticipanteInput>
  }

  export type historicoparticipanteUpsertWithWhereUniqueWithoutParticipanteInput = {
    where: historicoparticipanteWhereUniqueInput
    update: XOR<historicoparticipanteUpdateWithoutParticipanteInput, historicoparticipanteUncheckedUpdateWithoutParticipanteInput>
    create: XOR<historicoparticipanteCreateWithoutParticipanteInput, historicoparticipanteUncheckedCreateWithoutParticipanteInput>
  }

  export type historicoparticipanteUpdateWithWhereUniqueWithoutParticipanteInput = {
    where: historicoparticipanteWhereUniqueInput
    data: XOR<historicoparticipanteUpdateWithoutParticipanteInput, historicoparticipanteUncheckedUpdateWithoutParticipanteInput>
  }

  export type historicoparticipanteUpdateManyWithWhereWithoutParticipanteInput = {
    where: historicoparticipanteScalarWhereInput
    data: XOR<historicoparticipanteUpdateManyMutationInput, historicoparticipanteUncheckedUpdateManyWithoutParticipanteInput>
  }

  export type historicoparticipanteScalarWhereInput = {
    AND?: historicoparticipanteScalarWhereInput | historicoparticipanteScalarWhereInput[]
    OR?: historicoparticipanteScalarWhereInput[]
    NOT?: historicoparticipanteScalarWhereInput | historicoparticipanteScalarWhereInput[]
    id?: StringFilter<"historicoparticipante"> | string
    email?: StringFilter<"historicoparticipante"> | string
    idParticipante?: StringFilter<"historicoparticipante"> | string
    criadoEm?: DateTimeFilter<"historicoparticipante"> | Date | string
    atualizadoEm?: DateTimeFilter<"historicoparticipante"> | Date | string
  }

  export type atividade_participanteCreateManyAtividadeInput = {
    id?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    ativo?: boolean
    idParticipante: string
  }

  export type atividade_participanteUpdateWithoutAtividadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    participante?: participanteUpdateOneRequiredWithoutAtividade_participanteNestedInput
  }

  export type atividade_participanteUncheckedUpdateWithoutAtividadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    idParticipante?: StringFieldUpdateOperationsInput | string
  }

  export type atividade_participanteUncheckedUpdateManyWithoutAtividadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    idParticipante?: StringFieldUpdateOperationsInput | string
  }

  export type atividade_participanteCreateManyParticipanteInput = {
    id?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    ativo?: boolean
    idAtividade: string
  }

  export type historicoparticipanteCreateManyParticipanteInput = {
    id?: string
    email: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type atividade_participanteUpdateWithoutParticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    atividade?: atividadeUpdateOneRequiredWithoutAtividade_participanteNestedInput
  }

  export type atividade_participanteUncheckedUpdateWithoutParticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    idAtividade?: StringFieldUpdateOperationsInput | string
  }

  export type atividade_participanteUncheckedUpdateManyWithoutParticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    idAtividade?: StringFieldUpdateOperationsInput | string
  }

  export type historicoparticipanteUpdateWithoutParticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoparticipanteUncheckedUpdateWithoutParticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoparticipanteUncheckedUpdateManyWithoutParticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
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