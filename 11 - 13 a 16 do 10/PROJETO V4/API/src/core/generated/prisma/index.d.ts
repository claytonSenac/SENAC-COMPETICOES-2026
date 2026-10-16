
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
 * Model hstparticipante
 * 
 */
export type hstparticipante = $Result.DefaultSelection<Prisma.$hstparticipantePayload>
/**
 * Model inscricao
 * 
 */
export type inscricao = $Result.DefaultSelection<Prisma.$inscricaoPayload>
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
 * Model vw_atividade_menor_aderencia
 * 
 */
export type vw_atividade_menor_aderencia = $Result.DefaultSelection<Prisma.$vw_atividade_menor_aderenciaPayload>

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
   * `prisma.hstparticipante`: Exposes CRUD operations for the **hstparticipante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hstparticipantes
    * const hstparticipantes = await prisma.hstparticipante.findMany()
    * ```
    */
  get hstparticipante(): Prisma.hstparticipanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscricao`: Exposes CRUD operations for the **inscricao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscricaos
    * const inscricaos = await prisma.inscricao.findMany()
    * ```
    */
  get inscricao(): Prisma.inscricaoDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.vw_atividade_menor_aderencia`: Exposes CRUD operations for the **vw_atividade_menor_aderencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vw_atividade_menor_aderencias
    * const vw_atividade_menor_aderencias = await prisma.vw_atividade_menor_aderencia.findMany()
    * ```
    */
  get vw_atividade_menor_aderencia(): Prisma.vw_atividade_menor_aderenciaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
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
    hstparticipante: 'hstparticipante',
    inscricao: 'inscricao',
    participante: 'participante',
    user: 'user',
    vw_atividade_menor_aderencia: 'vw_atividade_menor_aderencia'
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
      modelProps: "atividade" | "hstparticipante" | "inscricao" | "participante" | "user" | "vw_atividade_menor_aderencia"
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
      hstparticipante: {
        payload: Prisma.$hstparticipantePayload<ExtArgs>
        fields: Prisma.hstparticipanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hstparticipanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hstparticipantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hstparticipanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hstparticipantePayload>
          }
          findFirst: {
            args: Prisma.hstparticipanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hstparticipantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hstparticipanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hstparticipantePayload>
          }
          findMany: {
            args: Prisma.hstparticipanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hstparticipantePayload>[]
          }
          create: {
            args: Prisma.hstparticipanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hstparticipantePayload>
          }
          createMany: {
            args: Prisma.hstparticipanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.hstparticipanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hstparticipantePayload>
          }
          update: {
            args: Prisma.hstparticipanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hstparticipantePayload>
          }
          deleteMany: {
            args: Prisma.hstparticipanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hstparticipanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.hstparticipanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hstparticipantePayload>
          }
          aggregate: {
            args: Prisma.HstparticipanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHstparticipante>
          }
          groupBy: {
            args: Prisma.hstparticipanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<HstparticipanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.hstparticipanteCountArgs<ExtArgs>
            result: $Utils.Optional<HstparticipanteCountAggregateOutputType> | number
          }
        }
      }
      inscricao: {
        payload: Prisma.$inscricaoPayload<ExtArgs>
        fields: Prisma.inscricaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inscricaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inscricaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricaoPayload>
          }
          findFirst: {
            args: Prisma.inscricaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inscricaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricaoPayload>
          }
          findMany: {
            args: Prisma.inscricaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricaoPayload>[]
          }
          create: {
            args: Prisma.inscricaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricaoPayload>
          }
          createMany: {
            args: Prisma.inscricaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inscricaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricaoPayload>
          }
          update: {
            args: Prisma.inscricaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricaoPayload>
          }
          deleteMany: {
            args: Prisma.inscricaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inscricaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inscricaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricaoPayload>
          }
          aggregate: {
            args: Prisma.InscricaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscricao>
          }
          groupBy: {
            args: Prisma.inscricaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscricaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.inscricaoCountArgs<ExtArgs>
            result: $Utils.Optional<InscricaoCountAggregateOutputType> | number
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
      vw_atividade_menor_aderencia: {
        payload: Prisma.$vw_atividade_menor_aderenciaPayload<ExtArgs>
        fields: Prisma.vw_atividade_menor_aderenciaFieldRefs
        operations: {
          findFirst: {
            args: Prisma.vw_atividade_menor_aderenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vw_atividade_menor_aderenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vw_atividade_menor_aderenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vw_atividade_menor_aderenciaPayload>
          }
          findMany: {
            args: Prisma.vw_atividade_menor_aderenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vw_atividade_menor_aderenciaPayload>[]
          }
          aggregate: {
            args: Prisma.Vw_atividade_menor_aderenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVw_atividade_menor_aderencia>
          }
          groupBy: {
            args: Prisma.vw_atividade_menor_aderenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vw_atividade_menor_aderenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.vw_atividade_menor_aderenciaCountArgs<ExtArgs>
            result: $Utils.Optional<Vw_atividade_menor_aderenciaCountAggregateOutputType> | number
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
    hstparticipante?: hstparticipanteOmit
    inscricao?: inscricaoOmit
    participante?: participanteOmit
    user?: userOmit
    vw_atividade_menor_aderencia?: vw_atividade_menor_aderenciaOmit
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
    inscricao: number
  }

  export type AtividadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricao?: boolean | AtividadeCountOutputTypeCountInscricaoArgs
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
  export type AtividadeCountOutputTypeCountInscricaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscricaoWhereInput
  }


  /**
   * Count Type ParticipanteCountOutputType
   */

  export type ParticipanteCountOutputType = {
    hstparticipante: number
    inscricao: number
  }

  export type ParticipanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hstparticipante?: boolean | ParticipanteCountOutputTypeCountHstparticipanteArgs
    inscricao?: boolean | ParticipanteCountOutputTypeCountInscricaoArgs
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
  export type ParticipanteCountOutputTypeCountHstparticipanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hstparticipanteWhereInput
  }

  /**
   * ParticipanteCountOutputType without action
   */
  export type ParticipanteCountOutputTypeCountInscricaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscricaoWhereInput
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
    VagasRestantes: number | null
    Vagas: number | null
  }

  export type AtividadeSumAggregateOutputType = {
    VagasRestantes: number | null
    Vagas: number | null
  }

  export type AtividadeMinAggregateOutputType = {
    Id: string | null
    Ativo: boolean | null
    Nome: string | null
    Descricao: string | null
    VagasRestantes: number | null
    Vagas: number | null
    Horario: string | null
  }

  export type AtividadeMaxAggregateOutputType = {
    Id: string | null
    Ativo: boolean | null
    Nome: string | null
    Descricao: string | null
    VagasRestantes: number | null
    Vagas: number | null
    Horario: string | null
  }

  export type AtividadeCountAggregateOutputType = {
    Id: number
    Ativo: number
    Nome: number
    Descricao: number
    VagasRestantes: number
    Vagas: number
    Horario: number
    _all: number
  }


  export type AtividadeAvgAggregateInputType = {
    VagasRestantes?: true
    Vagas?: true
  }

  export type AtividadeSumAggregateInputType = {
    VagasRestantes?: true
    Vagas?: true
  }

  export type AtividadeMinAggregateInputType = {
    Id?: true
    Ativo?: true
    Nome?: true
    Descricao?: true
    VagasRestantes?: true
    Vagas?: true
    Horario?: true
  }

  export type AtividadeMaxAggregateInputType = {
    Id?: true
    Ativo?: true
    Nome?: true
    Descricao?: true
    VagasRestantes?: true
    Vagas?: true
    Horario?: true
  }

  export type AtividadeCountAggregateInputType = {
    Id?: true
    Ativo?: true
    Nome?: true
    Descricao?: true
    VagasRestantes?: true
    Vagas?: true
    Horario?: true
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
    Id: string
    Ativo: boolean
    Nome: string
    Descricao: string | null
    VagasRestantes: number
    Vagas: number
    Horario: string | null
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
    Id?: boolean
    Ativo?: boolean
    Nome?: boolean
    Descricao?: boolean
    VagasRestantes?: boolean
    Vagas?: boolean
    Horario?: boolean
    inscricao?: boolean | atividade$inscricaoArgs<ExtArgs>
    _count?: boolean | AtividadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>



  export type atividadeSelectScalar = {
    Id?: boolean
    Ativo?: boolean
    Nome?: boolean
    Descricao?: boolean
    VagasRestantes?: boolean
    Vagas?: boolean
    Horario?: boolean
  }

  export type atividadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Ativo" | "Nome" | "Descricao" | "VagasRestantes" | "Vagas" | "Horario", ExtArgs["result"]["atividade"]>
  export type atividadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricao?: boolean | atividade$inscricaoArgs<ExtArgs>
    _count?: boolean | AtividadeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $atividadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "atividade"
    objects: {
      inscricao: Prisma.$inscricaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Ativo: boolean
      Nome: string
      Descricao: string | null
      VagasRestantes: number
      Vagas: number
      Horario: string | null
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
     * // Only select the `Id`
     * const atividadeWithIdOnly = await prisma.atividade.findMany({ select: { Id: true } })
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
    inscricao<T extends atividade$inscricaoArgs<ExtArgs> = {}>(args?: Subset<T, atividade$inscricaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly Id: FieldRef<"atividade", 'String'>
    readonly Ativo: FieldRef<"atividade", 'Boolean'>
    readonly Nome: FieldRef<"atividade", 'String'>
    readonly Descricao: FieldRef<"atividade", 'String'>
    readonly VagasRestantes: FieldRef<"atividade", 'Int'>
    readonly Vagas: FieldRef<"atividade", 'Int'>
    readonly Horario: FieldRef<"atividade", 'String'>
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
   * atividade.inscricao
   */
  export type atividade$inscricaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    where?: inscricaoWhereInput
    orderBy?: inscricaoOrderByWithRelationInput | inscricaoOrderByWithRelationInput[]
    cursor?: inscricaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
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
   * Model hstparticipante
   */

  export type AggregateHstparticipante = {
    _count: HstparticipanteCountAggregateOutputType | null
    _avg: HstparticipanteAvgAggregateOutputType | null
    _sum: HstparticipanteSumAggregateOutputType | null
    _min: HstparticipanteMinAggregateOutputType | null
    _max: HstparticipanteMaxAggregateOutputType | null
  }

  export type HstparticipanteAvgAggregateOutputType = {
    ID: number | null
  }

  export type HstparticipanteSumAggregateOutputType = {
    ID: number | null
  }

  export type HstparticipanteMinAggregateOutputType = {
    ID: number | null
    email: string | null
    IdParticipante: string | null
  }

  export type HstparticipanteMaxAggregateOutputType = {
    ID: number | null
    email: string | null
    IdParticipante: string | null
  }

  export type HstparticipanteCountAggregateOutputType = {
    ID: number
    email: number
    IdParticipante: number
    _all: number
  }


  export type HstparticipanteAvgAggregateInputType = {
    ID?: true
  }

  export type HstparticipanteSumAggregateInputType = {
    ID?: true
  }

  export type HstparticipanteMinAggregateInputType = {
    ID?: true
    email?: true
    IdParticipante?: true
  }

  export type HstparticipanteMaxAggregateInputType = {
    ID?: true
    email?: true
    IdParticipante?: true
  }

  export type HstparticipanteCountAggregateInputType = {
    ID?: true
    email?: true
    IdParticipante?: true
    _all?: true
  }

  export type HstparticipanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hstparticipante to aggregate.
     */
    where?: hstparticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hstparticipantes to fetch.
     */
    orderBy?: hstparticipanteOrderByWithRelationInput | hstparticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hstparticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hstparticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hstparticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hstparticipantes
    **/
    _count?: true | HstparticipanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HstparticipanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HstparticipanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HstparticipanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HstparticipanteMaxAggregateInputType
  }

  export type GetHstparticipanteAggregateType<T extends HstparticipanteAggregateArgs> = {
        [P in keyof T & keyof AggregateHstparticipante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHstparticipante[P]>
      : GetScalarType<T[P], AggregateHstparticipante[P]>
  }




  export type hstparticipanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hstparticipanteWhereInput
    orderBy?: hstparticipanteOrderByWithAggregationInput | hstparticipanteOrderByWithAggregationInput[]
    by: HstparticipanteScalarFieldEnum[] | HstparticipanteScalarFieldEnum
    having?: hstparticipanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HstparticipanteCountAggregateInputType | true
    _avg?: HstparticipanteAvgAggregateInputType
    _sum?: HstparticipanteSumAggregateInputType
    _min?: HstparticipanteMinAggregateInputType
    _max?: HstparticipanteMaxAggregateInputType
  }

  export type HstparticipanteGroupByOutputType = {
    ID: number
    email: string
    IdParticipante: string
    _count: HstparticipanteCountAggregateOutputType | null
    _avg: HstparticipanteAvgAggregateOutputType | null
    _sum: HstparticipanteSumAggregateOutputType | null
    _min: HstparticipanteMinAggregateOutputType | null
    _max: HstparticipanteMaxAggregateOutputType | null
  }

  type GetHstparticipanteGroupByPayload<T extends hstparticipanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HstparticipanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HstparticipanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HstparticipanteGroupByOutputType[P]>
            : GetScalarType<T[P], HstparticipanteGroupByOutputType[P]>
        }
      >
    >


  export type hstparticipanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    email?: boolean
    IdParticipante?: boolean
    participante?: boolean | participanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hstparticipante"]>



  export type hstparticipanteSelectScalar = {
    ID?: boolean
    email?: boolean
    IdParticipante?: boolean
  }

  export type hstparticipanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "email" | "IdParticipante", ExtArgs["result"]["hstparticipante"]>
  export type hstparticipanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participante?: boolean | participanteDefaultArgs<ExtArgs>
  }

  export type $hstparticipantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hstparticipante"
    objects: {
      participante: Prisma.$participantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      email: string
      IdParticipante: string
    }, ExtArgs["result"]["hstparticipante"]>
    composites: {}
  }

  type hstparticipanteGetPayload<S extends boolean | null | undefined | hstparticipanteDefaultArgs> = $Result.GetResult<Prisma.$hstparticipantePayload, S>

  type hstparticipanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hstparticipanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HstparticipanteCountAggregateInputType | true
    }

  export interface hstparticipanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hstparticipante'], meta: { name: 'hstparticipante' } }
    /**
     * Find zero or one Hstparticipante that matches the filter.
     * @param {hstparticipanteFindUniqueArgs} args - Arguments to find a Hstparticipante
     * @example
     * // Get one Hstparticipante
     * const hstparticipante = await prisma.hstparticipante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hstparticipanteFindUniqueArgs>(args: SelectSubset<T, hstparticipanteFindUniqueArgs<ExtArgs>>): Prisma__hstparticipanteClient<$Result.GetResult<Prisma.$hstparticipantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hstparticipante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hstparticipanteFindUniqueOrThrowArgs} args - Arguments to find a Hstparticipante
     * @example
     * // Get one Hstparticipante
     * const hstparticipante = await prisma.hstparticipante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hstparticipanteFindUniqueOrThrowArgs>(args: SelectSubset<T, hstparticipanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hstparticipanteClient<$Result.GetResult<Prisma.$hstparticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hstparticipante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hstparticipanteFindFirstArgs} args - Arguments to find a Hstparticipante
     * @example
     * // Get one Hstparticipante
     * const hstparticipante = await prisma.hstparticipante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hstparticipanteFindFirstArgs>(args?: SelectSubset<T, hstparticipanteFindFirstArgs<ExtArgs>>): Prisma__hstparticipanteClient<$Result.GetResult<Prisma.$hstparticipantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hstparticipante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hstparticipanteFindFirstOrThrowArgs} args - Arguments to find a Hstparticipante
     * @example
     * // Get one Hstparticipante
     * const hstparticipante = await prisma.hstparticipante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hstparticipanteFindFirstOrThrowArgs>(args?: SelectSubset<T, hstparticipanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__hstparticipanteClient<$Result.GetResult<Prisma.$hstparticipantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hstparticipantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hstparticipanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hstparticipantes
     * const hstparticipantes = await prisma.hstparticipante.findMany()
     * 
     * // Get first 10 Hstparticipantes
     * const hstparticipantes = await prisma.hstparticipante.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const hstparticipanteWithIDOnly = await prisma.hstparticipante.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends hstparticipanteFindManyArgs>(args?: SelectSubset<T, hstparticipanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hstparticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hstparticipante.
     * @param {hstparticipanteCreateArgs} args - Arguments to create a Hstparticipante.
     * @example
     * // Create one Hstparticipante
     * const Hstparticipante = await prisma.hstparticipante.create({
     *   data: {
     *     // ... data to create a Hstparticipante
     *   }
     * })
     * 
     */
    create<T extends hstparticipanteCreateArgs>(args: SelectSubset<T, hstparticipanteCreateArgs<ExtArgs>>): Prisma__hstparticipanteClient<$Result.GetResult<Prisma.$hstparticipantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hstparticipantes.
     * @param {hstparticipanteCreateManyArgs} args - Arguments to create many Hstparticipantes.
     * @example
     * // Create many Hstparticipantes
     * const hstparticipante = await prisma.hstparticipante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hstparticipanteCreateManyArgs>(args?: SelectSubset<T, hstparticipanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hstparticipante.
     * @param {hstparticipanteDeleteArgs} args - Arguments to delete one Hstparticipante.
     * @example
     * // Delete one Hstparticipante
     * const Hstparticipante = await prisma.hstparticipante.delete({
     *   where: {
     *     // ... filter to delete one Hstparticipante
     *   }
     * })
     * 
     */
    delete<T extends hstparticipanteDeleteArgs>(args: SelectSubset<T, hstparticipanteDeleteArgs<ExtArgs>>): Prisma__hstparticipanteClient<$Result.GetResult<Prisma.$hstparticipantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hstparticipante.
     * @param {hstparticipanteUpdateArgs} args - Arguments to update one Hstparticipante.
     * @example
     * // Update one Hstparticipante
     * const hstparticipante = await prisma.hstparticipante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hstparticipanteUpdateArgs>(args: SelectSubset<T, hstparticipanteUpdateArgs<ExtArgs>>): Prisma__hstparticipanteClient<$Result.GetResult<Prisma.$hstparticipantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hstparticipantes.
     * @param {hstparticipanteDeleteManyArgs} args - Arguments to filter Hstparticipantes to delete.
     * @example
     * // Delete a few Hstparticipantes
     * const { count } = await prisma.hstparticipante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hstparticipanteDeleteManyArgs>(args?: SelectSubset<T, hstparticipanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hstparticipantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hstparticipanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hstparticipantes
     * const hstparticipante = await prisma.hstparticipante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hstparticipanteUpdateManyArgs>(args: SelectSubset<T, hstparticipanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hstparticipante.
     * @param {hstparticipanteUpsertArgs} args - Arguments to update or create a Hstparticipante.
     * @example
     * // Update or create a Hstparticipante
     * const hstparticipante = await prisma.hstparticipante.upsert({
     *   create: {
     *     // ... data to create a Hstparticipante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hstparticipante we want to update
     *   }
     * })
     */
    upsert<T extends hstparticipanteUpsertArgs>(args: SelectSubset<T, hstparticipanteUpsertArgs<ExtArgs>>): Prisma__hstparticipanteClient<$Result.GetResult<Prisma.$hstparticipantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hstparticipantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hstparticipanteCountArgs} args - Arguments to filter Hstparticipantes to count.
     * @example
     * // Count the number of Hstparticipantes
     * const count = await prisma.hstparticipante.count({
     *   where: {
     *     // ... the filter for the Hstparticipantes we want to count
     *   }
     * })
    **/
    count<T extends hstparticipanteCountArgs>(
      args?: Subset<T, hstparticipanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HstparticipanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hstparticipante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HstparticipanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HstparticipanteAggregateArgs>(args: Subset<T, HstparticipanteAggregateArgs>): Prisma.PrismaPromise<GetHstparticipanteAggregateType<T>>

    /**
     * Group by Hstparticipante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hstparticipanteGroupByArgs} args - Group by arguments.
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
      T extends hstparticipanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hstparticipanteGroupByArgs['orderBy'] }
        : { orderBy?: hstparticipanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hstparticipanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHstparticipanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hstparticipante model
   */
  readonly fields: hstparticipanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hstparticipante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hstparticipanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the hstparticipante model
   */
  interface hstparticipanteFieldRefs {
    readonly ID: FieldRef<"hstparticipante", 'Int'>
    readonly email: FieldRef<"hstparticipante", 'String'>
    readonly IdParticipante: FieldRef<"hstparticipante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hstparticipante findUnique
   */
  export type hstparticipanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
    /**
     * Filter, which hstparticipante to fetch.
     */
    where: hstparticipanteWhereUniqueInput
  }

  /**
   * hstparticipante findUniqueOrThrow
   */
  export type hstparticipanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
    /**
     * Filter, which hstparticipante to fetch.
     */
    where: hstparticipanteWhereUniqueInput
  }

  /**
   * hstparticipante findFirst
   */
  export type hstparticipanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
    /**
     * Filter, which hstparticipante to fetch.
     */
    where?: hstparticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hstparticipantes to fetch.
     */
    orderBy?: hstparticipanteOrderByWithRelationInput | hstparticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hstparticipantes.
     */
    cursor?: hstparticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hstparticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hstparticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hstparticipantes.
     */
    distinct?: HstparticipanteScalarFieldEnum | HstparticipanteScalarFieldEnum[]
  }

  /**
   * hstparticipante findFirstOrThrow
   */
  export type hstparticipanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
    /**
     * Filter, which hstparticipante to fetch.
     */
    where?: hstparticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hstparticipantes to fetch.
     */
    orderBy?: hstparticipanteOrderByWithRelationInput | hstparticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hstparticipantes.
     */
    cursor?: hstparticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hstparticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hstparticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hstparticipantes.
     */
    distinct?: HstparticipanteScalarFieldEnum | HstparticipanteScalarFieldEnum[]
  }

  /**
   * hstparticipante findMany
   */
  export type hstparticipanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
    /**
     * Filter, which hstparticipantes to fetch.
     */
    where?: hstparticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hstparticipantes to fetch.
     */
    orderBy?: hstparticipanteOrderByWithRelationInput | hstparticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hstparticipantes.
     */
    cursor?: hstparticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hstparticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hstparticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hstparticipantes.
     */
    distinct?: HstparticipanteScalarFieldEnum | HstparticipanteScalarFieldEnum[]
  }

  /**
   * hstparticipante create
   */
  export type hstparticipanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
    /**
     * The data needed to create a hstparticipante.
     */
    data: XOR<hstparticipanteCreateInput, hstparticipanteUncheckedCreateInput>
  }

  /**
   * hstparticipante createMany
   */
  export type hstparticipanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hstparticipantes.
     */
    data: hstparticipanteCreateManyInput | hstparticipanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hstparticipante update
   */
  export type hstparticipanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
    /**
     * The data needed to update a hstparticipante.
     */
    data: XOR<hstparticipanteUpdateInput, hstparticipanteUncheckedUpdateInput>
    /**
     * Choose, which hstparticipante to update.
     */
    where: hstparticipanteWhereUniqueInput
  }

  /**
   * hstparticipante updateMany
   */
  export type hstparticipanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hstparticipantes.
     */
    data: XOR<hstparticipanteUpdateManyMutationInput, hstparticipanteUncheckedUpdateManyInput>
    /**
     * Filter which hstparticipantes to update
     */
    where?: hstparticipanteWhereInput
    /**
     * Limit how many hstparticipantes to update.
     */
    limit?: number
  }

  /**
   * hstparticipante upsert
   */
  export type hstparticipanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
    /**
     * The filter to search for the hstparticipante to update in case it exists.
     */
    where: hstparticipanteWhereUniqueInput
    /**
     * In case the hstparticipante found by the `where` argument doesn't exist, create a new hstparticipante with this data.
     */
    create: XOR<hstparticipanteCreateInput, hstparticipanteUncheckedCreateInput>
    /**
     * In case the hstparticipante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hstparticipanteUpdateInput, hstparticipanteUncheckedUpdateInput>
  }

  /**
   * hstparticipante delete
   */
  export type hstparticipanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
    /**
     * Filter which hstparticipante to delete.
     */
    where: hstparticipanteWhereUniqueInput
  }

  /**
   * hstparticipante deleteMany
   */
  export type hstparticipanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hstparticipantes to delete
     */
    where?: hstparticipanteWhereInput
    /**
     * Limit how many hstparticipantes to delete.
     */
    limit?: number
  }

  /**
   * hstparticipante without action
   */
  export type hstparticipanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
  }


  /**
   * Model inscricao
   */

  export type AggregateInscricao = {
    _count: InscricaoCountAggregateOutputType | null
    _min: InscricaoMinAggregateOutputType | null
    _max: InscricaoMaxAggregateOutputType | null
  }

  export type InscricaoMinAggregateOutputType = {
    Id: string | null
    Ativo: boolean | null
    IdParticipante: string | null
    IdAtividade: string | null
  }

  export type InscricaoMaxAggregateOutputType = {
    Id: string | null
    Ativo: boolean | null
    IdParticipante: string | null
    IdAtividade: string | null
  }

  export type InscricaoCountAggregateOutputType = {
    Id: number
    Ativo: number
    IdParticipante: number
    IdAtividade: number
    _all: number
  }


  export type InscricaoMinAggregateInputType = {
    Id?: true
    Ativo?: true
    IdParticipante?: true
    IdAtividade?: true
  }

  export type InscricaoMaxAggregateInputType = {
    Id?: true
    Ativo?: true
    IdParticipante?: true
    IdAtividade?: true
  }

  export type InscricaoCountAggregateInputType = {
    Id?: true
    Ativo?: true
    IdParticipante?: true
    IdAtividade?: true
    _all?: true
  }

  export type InscricaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inscricao to aggregate.
     */
    where?: inscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscricaos to fetch.
     */
    orderBy?: inscricaoOrderByWithRelationInput | inscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inscricaos
    **/
    _count?: true | InscricaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscricaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscricaoMaxAggregateInputType
  }

  export type GetInscricaoAggregateType<T extends InscricaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInscricao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscricao[P]>
      : GetScalarType<T[P], AggregateInscricao[P]>
  }




  export type inscricaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscricaoWhereInput
    orderBy?: inscricaoOrderByWithAggregationInput | inscricaoOrderByWithAggregationInput[]
    by: InscricaoScalarFieldEnum[] | InscricaoScalarFieldEnum
    having?: inscricaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscricaoCountAggregateInputType | true
    _min?: InscricaoMinAggregateInputType
    _max?: InscricaoMaxAggregateInputType
  }

  export type InscricaoGroupByOutputType = {
    Id: string
    Ativo: boolean
    IdParticipante: string
    IdAtividade: string
    _count: InscricaoCountAggregateOutputType | null
    _min: InscricaoMinAggregateOutputType | null
    _max: InscricaoMaxAggregateOutputType | null
  }

  type GetInscricaoGroupByPayload<T extends inscricaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscricaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscricaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscricaoGroupByOutputType[P]>
            : GetScalarType<T[P], InscricaoGroupByOutputType[P]>
        }
      >
    >


  export type inscricaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Ativo?: boolean
    IdParticipante?: boolean
    IdAtividade?: boolean
    participante?: boolean | participanteDefaultArgs<ExtArgs>
    atividade?: boolean | atividadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>



  export type inscricaoSelectScalar = {
    Id?: boolean
    Ativo?: boolean
    IdParticipante?: boolean
    IdAtividade?: boolean
  }

  export type inscricaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Ativo" | "IdParticipante" | "IdAtividade", ExtArgs["result"]["inscricao"]>
  export type inscricaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participante?: boolean | participanteDefaultArgs<ExtArgs>
    atividade?: boolean | atividadeDefaultArgs<ExtArgs>
  }

  export type $inscricaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inscricao"
    objects: {
      participante: Prisma.$participantePayload<ExtArgs>
      atividade: Prisma.$atividadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Ativo: boolean
      IdParticipante: string
      IdAtividade: string
    }, ExtArgs["result"]["inscricao"]>
    composites: {}
  }

  type inscricaoGetPayload<S extends boolean | null | undefined | inscricaoDefaultArgs> = $Result.GetResult<Prisma.$inscricaoPayload, S>

  type inscricaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inscricaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscricaoCountAggregateInputType | true
    }

  export interface inscricaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inscricao'], meta: { name: 'inscricao' } }
    /**
     * Find zero or one Inscricao that matches the filter.
     * @param {inscricaoFindUniqueArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inscricaoFindUniqueArgs>(args: SelectSubset<T, inscricaoFindUniqueArgs<ExtArgs>>): Prisma__inscricaoClient<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscricao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inscricaoFindUniqueOrThrowArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inscricaoFindUniqueOrThrowArgs>(args: SelectSubset<T, inscricaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inscricaoClient<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscricao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricaoFindFirstArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inscricaoFindFirstArgs>(args?: SelectSubset<T, inscricaoFindFirstArgs<ExtArgs>>): Prisma__inscricaoClient<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscricao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricaoFindFirstOrThrowArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inscricaoFindFirstOrThrowArgs>(args?: SelectSubset<T, inscricaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__inscricaoClient<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscricaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscricaos
     * const inscricaos = await prisma.inscricao.findMany()
     * 
     * // Get first 10 Inscricaos
     * const inscricaos = await prisma.inscricao.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const inscricaoWithIdOnly = await prisma.inscricao.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends inscricaoFindManyArgs>(args?: SelectSubset<T, inscricaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscricao.
     * @param {inscricaoCreateArgs} args - Arguments to create a Inscricao.
     * @example
     * // Create one Inscricao
     * const Inscricao = await prisma.inscricao.create({
     *   data: {
     *     // ... data to create a Inscricao
     *   }
     * })
     * 
     */
    create<T extends inscricaoCreateArgs>(args: SelectSubset<T, inscricaoCreateArgs<ExtArgs>>): Prisma__inscricaoClient<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscricaos.
     * @param {inscricaoCreateManyArgs} args - Arguments to create many Inscricaos.
     * @example
     * // Create many Inscricaos
     * const inscricao = await prisma.inscricao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inscricaoCreateManyArgs>(args?: SelectSubset<T, inscricaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inscricao.
     * @param {inscricaoDeleteArgs} args - Arguments to delete one Inscricao.
     * @example
     * // Delete one Inscricao
     * const Inscricao = await prisma.inscricao.delete({
     *   where: {
     *     // ... filter to delete one Inscricao
     *   }
     * })
     * 
     */
    delete<T extends inscricaoDeleteArgs>(args: SelectSubset<T, inscricaoDeleteArgs<ExtArgs>>): Prisma__inscricaoClient<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscricao.
     * @param {inscricaoUpdateArgs} args - Arguments to update one Inscricao.
     * @example
     * // Update one Inscricao
     * const inscricao = await prisma.inscricao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inscricaoUpdateArgs>(args: SelectSubset<T, inscricaoUpdateArgs<ExtArgs>>): Prisma__inscricaoClient<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscricaos.
     * @param {inscricaoDeleteManyArgs} args - Arguments to filter Inscricaos to delete.
     * @example
     * // Delete a few Inscricaos
     * const { count } = await prisma.inscricao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inscricaoDeleteManyArgs>(args?: SelectSubset<T, inscricaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscricaos
     * const inscricao = await prisma.inscricao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inscricaoUpdateManyArgs>(args: SelectSubset<T, inscricaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inscricao.
     * @param {inscricaoUpsertArgs} args - Arguments to update or create a Inscricao.
     * @example
     * // Update or create a Inscricao
     * const inscricao = await prisma.inscricao.upsert({
     *   create: {
     *     // ... data to create a Inscricao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscricao we want to update
     *   }
     * })
     */
    upsert<T extends inscricaoUpsertArgs>(args: SelectSubset<T, inscricaoUpsertArgs<ExtArgs>>): Prisma__inscricaoClient<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricaoCountArgs} args - Arguments to filter Inscricaos to count.
     * @example
     * // Count the number of Inscricaos
     * const count = await prisma.inscricao.count({
     *   where: {
     *     // ... the filter for the Inscricaos we want to count
     *   }
     * })
    **/
    count<T extends inscricaoCountArgs>(
      args?: Subset<T, inscricaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscricaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InscricaoAggregateArgs>(args: Subset<T, InscricaoAggregateArgs>): Prisma.PrismaPromise<GetInscricaoAggregateType<T>>

    /**
     * Group by Inscricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricaoGroupByArgs} args - Group by arguments.
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
      T extends inscricaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inscricaoGroupByArgs['orderBy'] }
        : { orderBy?: inscricaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inscricaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscricaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inscricao model
   */
  readonly fields: inscricaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inscricao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inscricaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the inscricao model
   */
  interface inscricaoFieldRefs {
    readonly Id: FieldRef<"inscricao", 'String'>
    readonly Ativo: FieldRef<"inscricao", 'Boolean'>
    readonly IdParticipante: FieldRef<"inscricao", 'String'>
    readonly IdAtividade: FieldRef<"inscricao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * inscricao findUnique
   */
  export type inscricaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    /**
     * Filter, which inscricao to fetch.
     */
    where: inscricaoWhereUniqueInput
  }

  /**
   * inscricao findUniqueOrThrow
   */
  export type inscricaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    /**
     * Filter, which inscricao to fetch.
     */
    where: inscricaoWhereUniqueInput
  }

  /**
   * inscricao findFirst
   */
  export type inscricaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    /**
     * Filter, which inscricao to fetch.
     */
    where?: inscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscricaos to fetch.
     */
    orderBy?: inscricaoOrderByWithRelationInput | inscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inscricaos.
     */
    cursor?: inscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * inscricao findFirstOrThrow
   */
  export type inscricaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    /**
     * Filter, which inscricao to fetch.
     */
    where?: inscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscricaos to fetch.
     */
    orderBy?: inscricaoOrderByWithRelationInput | inscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inscricaos.
     */
    cursor?: inscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * inscricao findMany
   */
  export type inscricaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    /**
     * Filter, which inscricaos to fetch.
     */
    where?: inscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscricaos to fetch.
     */
    orderBy?: inscricaoOrderByWithRelationInput | inscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inscricaos.
     */
    cursor?: inscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * inscricao create
   */
  export type inscricaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    /**
     * The data needed to create a inscricao.
     */
    data: XOR<inscricaoCreateInput, inscricaoUncheckedCreateInput>
  }

  /**
   * inscricao createMany
   */
  export type inscricaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inscricaos.
     */
    data: inscricaoCreateManyInput | inscricaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inscricao update
   */
  export type inscricaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    /**
     * The data needed to update a inscricao.
     */
    data: XOR<inscricaoUpdateInput, inscricaoUncheckedUpdateInput>
    /**
     * Choose, which inscricao to update.
     */
    where: inscricaoWhereUniqueInput
  }

  /**
   * inscricao updateMany
   */
  export type inscricaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inscricaos.
     */
    data: XOR<inscricaoUpdateManyMutationInput, inscricaoUncheckedUpdateManyInput>
    /**
     * Filter which inscricaos to update
     */
    where?: inscricaoWhereInput
    /**
     * Limit how many inscricaos to update.
     */
    limit?: number
  }

  /**
   * inscricao upsert
   */
  export type inscricaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    /**
     * The filter to search for the inscricao to update in case it exists.
     */
    where: inscricaoWhereUniqueInput
    /**
     * In case the inscricao found by the `where` argument doesn't exist, create a new inscricao with this data.
     */
    create: XOR<inscricaoCreateInput, inscricaoUncheckedCreateInput>
    /**
     * In case the inscricao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inscricaoUpdateInput, inscricaoUncheckedUpdateInput>
  }

  /**
   * inscricao delete
   */
  export type inscricaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    /**
     * Filter which inscricao to delete.
     */
    where: inscricaoWhereUniqueInput
  }

  /**
   * inscricao deleteMany
   */
  export type inscricaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inscricaos to delete
     */
    where?: inscricaoWhereInput
    /**
     * Limit how many inscricaos to delete.
     */
    limit?: number
  }

  /**
   * inscricao without action
   */
  export type inscricaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
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
    Id: string | null
    Nome: string | null
    Email: string | null
    Telefone: string | null
    Ativo: boolean | null
    HashSenha: string | null
  }

  export type ParticipanteMaxAggregateOutputType = {
    Id: string | null
    Nome: string | null
    Email: string | null
    Telefone: string | null
    Ativo: boolean | null
    HashSenha: string | null
  }

  export type ParticipanteCountAggregateOutputType = {
    Id: number
    Nome: number
    Email: number
    Telefone: number
    Ativo: number
    HashSenha: number
    _all: number
  }


  export type ParticipanteMinAggregateInputType = {
    Id?: true
    Nome?: true
    Email?: true
    Telefone?: true
    Ativo?: true
    HashSenha?: true
  }

  export type ParticipanteMaxAggregateInputType = {
    Id?: true
    Nome?: true
    Email?: true
    Telefone?: true
    Ativo?: true
    HashSenha?: true
  }

  export type ParticipanteCountAggregateInputType = {
    Id?: true
    Nome?: true
    Email?: true
    Telefone?: true
    Ativo?: true
    HashSenha?: true
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
    Id: string
    Nome: string
    Email: string
    Telefone: string
    Ativo: boolean
    HashSenha: string
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
    Id?: boolean
    Nome?: boolean
    Email?: boolean
    Telefone?: boolean
    Ativo?: boolean
    HashSenha?: boolean
    hstparticipante?: boolean | participante$hstparticipanteArgs<ExtArgs>
    inscricao?: boolean | participante$inscricaoArgs<ExtArgs>
    _count?: boolean | ParticipanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>



  export type participanteSelectScalar = {
    Id?: boolean
    Nome?: boolean
    Email?: boolean
    Telefone?: boolean
    Ativo?: boolean
    HashSenha?: boolean
  }

  export type participanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Nome" | "Email" | "Telefone" | "Ativo" | "HashSenha", ExtArgs["result"]["participante"]>
  export type participanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hstparticipante?: boolean | participante$hstparticipanteArgs<ExtArgs>
    inscricao?: boolean | participante$inscricaoArgs<ExtArgs>
    _count?: boolean | ParticipanteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $participantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participante"
    objects: {
      hstparticipante: Prisma.$hstparticipantePayload<ExtArgs>[]
      inscricao: Prisma.$inscricaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Nome: string
      Email: string
      Telefone: string
      Ativo: boolean
      HashSenha: string
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
     * // Only select the `Id`
     * const participanteWithIdOnly = await prisma.participante.findMany({ select: { Id: true } })
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
    hstparticipante<T extends participante$hstparticipanteArgs<ExtArgs> = {}>(args?: Subset<T, participante$hstparticipanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hstparticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inscricao<T extends participante$inscricaoArgs<ExtArgs> = {}>(args?: Subset<T, participante$inscricaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly Id: FieldRef<"participante", 'String'>
    readonly Nome: FieldRef<"participante", 'String'>
    readonly Email: FieldRef<"participante", 'String'>
    readonly Telefone: FieldRef<"participante", 'String'>
    readonly Ativo: FieldRef<"participante", 'Boolean'>
    readonly HashSenha: FieldRef<"participante", 'String'>
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
   * participante.hstparticipante
   */
  export type participante$hstparticipanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hstparticipante
     */
    select?: hstparticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hstparticipante
     */
    omit?: hstparticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hstparticipanteInclude<ExtArgs> | null
    where?: hstparticipanteWhereInput
    orderBy?: hstparticipanteOrderByWithRelationInput | hstparticipanteOrderByWithRelationInput[]
    cursor?: hstparticipanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HstparticipanteScalarFieldEnum | HstparticipanteScalarFieldEnum[]
  }

  /**
   * participante.inscricao
   */
  export type participante$inscricaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao
     */
    select?: inscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao
     */
    omit?: inscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricaoInclude<ExtArgs> | null
    where?: inscricaoWhereInput
    orderBy?: inscricaoOrderByWithRelationInput | inscricaoOrderByWithRelationInput[]
    cursor?: inscricaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
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
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    Id: string | null
    email: string | null
    HashSenha: string | null
  }

  export type UserMaxAggregateOutputType = {
    Id: string | null
    email: string | null
    HashSenha: string | null
  }

  export type UserCountAggregateOutputType = {
    Id: number
    email: number
    HashSenha: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    Id?: true
    email?: true
    HashSenha?: true
  }

  export type UserMaxAggregateInputType = {
    Id?: true
    email?: true
    HashSenha?: true
  }

  export type UserCountAggregateInputType = {
    Id?: true
    email?: true
    HashSenha?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    Id: string
    email: string
    HashSenha: string
    _count: UserCountAggregateOutputType | null
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
    Id?: boolean
    email?: boolean
    HashSenha?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    Id?: boolean
    email?: boolean
    HashSenha?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "email" | "HashSenha", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      email: string
      HashSenha: string
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
     * // Only select the `Id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { Id: true } })
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
    readonly Id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly HashSenha: FieldRef<"user", 'String'>
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
   * Model vw_atividade_menor_aderencia
   */

  export type AggregateVw_atividade_menor_aderencia = {
    _count: Vw_atividade_menor_aderenciaCountAggregateOutputType | null
    _avg: Vw_atividade_menor_aderenciaAvgAggregateOutputType | null
    _sum: Vw_atividade_menor_aderenciaSumAggregateOutputType | null
    _min: Vw_atividade_menor_aderenciaMinAggregateOutputType | null
    _max: Vw_atividade_menor_aderenciaMaxAggregateOutputType | null
  }

  export type Vw_atividade_menor_aderenciaAvgAggregateOutputType = {
    VagasRestantes: number | null
    Vagas: number | null
    totalInscritos: number | null
    aderencia: Decimal | null
  }

  export type Vw_atividade_menor_aderenciaSumAggregateOutputType = {
    VagasRestantes: number | null
    Vagas: number | null
    totalInscritos: bigint | null
    aderencia: Decimal | null
  }

  export type Vw_atividade_menor_aderenciaMinAggregateOutputType = {
    Id: string | null
    Ativo: boolean | null
    Nome: string | null
    Descricao: string | null
    VagasRestantes: number | null
    Vagas: number | null
    Horario: string | null
    totalInscritos: bigint | null
    aderencia: Decimal | null
  }

  export type Vw_atividade_menor_aderenciaMaxAggregateOutputType = {
    Id: string | null
    Ativo: boolean | null
    Nome: string | null
    Descricao: string | null
    VagasRestantes: number | null
    Vagas: number | null
    Horario: string | null
    totalInscritos: bigint | null
    aderencia: Decimal | null
  }

  export type Vw_atividade_menor_aderenciaCountAggregateOutputType = {
    Id: number
    Ativo: number
    Nome: number
    Descricao: number
    VagasRestantes: number
    Vagas: number
    Horario: number
    totalInscritos: number
    aderencia: number
    _all: number
  }


  export type Vw_atividade_menor_aderenciaAvgAggregateInputType = {
    VagasRestantes?: true
    Vagas?: true
    totalInscritos?: true
    aderencia?: true
  }

  export type Vw_atividade_menor_aderenciaSumAggregateInputType = {
    VagasRestantes?: true
    Vagas?: true
    totalInscritos?: true
    aderencia?: true
  }

  export type Vw_atividade_menor_aderenciaMinAggregateInputType = {
    Id?: true
    Ativo?: true
    Nome?: true
    Descricao?: true
    VagasRestantes?: true
    Vagas?: true
    Horario?: true
    totalInscritos?: true
    aderencia?: true
  }

  export type Vw_atividade_menor_aderenciaMaxAggregateInputType = {
    Id?: true
    Ativo?: true
    Nome?: true
    Descricao?: true
    VagasRestantes?: true
    Vagas?: true
    Horario?: true
    totalInscritos?: true
    aderencia?: true
  }

  export type Vw_atividade_menor_aderenciaCountAggregateInputType = {
    Id?: true
    Ativo?: true
    Nome?: true
    Descricao?: true
    VagasRestantes?: true
    Vagas?: true
    Horario?: true
    totalInscritos?: true
    aderencia?: true
    _all?: true
  }

  export type Vw_atividade_menor_aderenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vw_atividade_menor_aderencia to aggregate.
     */
    where?: vw_atividade_menor_aderenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vw_atividade_menor_aderencias to fetch.
     */
    orderBy?: vw_atividade_menor_aderenciaOrderByWithRelationInput | vw_atividade_menor_aderenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vw_atividade_menor_aderencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vw_atividade_menor_aderencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vw_atividade_menor_aderencias
    **/
    _count?: true | Vw_atividade_menor_aderenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vw_atividade_menor_aderenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vw_atividade_menor_aderenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vw_atividade_menor_aderenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vw_atividade_menor_aderenciaMaxAggregateInputType
  }

  export type GetVw_atividade_menor_aderenciaAggregateType<T extends Vw_atividade_menor_aderenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateVw_atividade_menor_aderencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVw_atividade_menor_aderencia[P]>
      : GetScalarType<T[P], AggregateVw_atividade_menor_aderencia[P]>
  }




  export type vw_atividade_menor_aderenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vw_atividade_menor_aderenciaWhereInput
    orderBy?: vw_atividade_menor_aderenciaOrderByWithAggregationInput | vw_atividade_menor_aderenciaOrderByWithAggregationInput[]
    by: Vw_atividade_menor_aderenciaScalarFieldEnum[] | Vw_atividade_menor_aderenciaScalarFieldEnum
    having?: vw_atividade_menor_aderenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vw_atividade_menor_aderenciaCountAggregateInputType | true
    _avg?: Vw_atividade_menor_aderenciaAvgAggregateInputType
    _sum?: Vw_atividade_menor_aderenciaSumAggregateInputType
    _min?: Vw_atividade_menor_aderenciaMinAggregateInputType
    _max?: Vw_atividade_menor_aderenciaMaxAggregateInputType
  }

  export type Vw_atividade_menor_aderenciaGroupByOutputType = {
    Id: string
    Ativo: boolean
    Nome: string
    Descricao: string | null
    VagasRestantes: number
    Vagas: number
    Horario: string | null
    totalInscritos: bigint
    aderencia: Decimal | null
    _count: Vw_atividade_menor_aderenciaCountAggregateOutputType | null
    _avg: Vw_atividade_menor_aderenciaAvgAggregateOutputType | null
    _sum: Vw_atividade_menor_aderenciaSumAggregateOutputType | null
    _min: Vw_atividade_menor_aderenciaMinAggregateOutputType | null
    _max: Vw_atividade_menor_aderenciaMaxAggregateOutputType | null
  }

  type GetVw_atividade_menor_aderenciaGroupByPayload<T extends vw_atividade_menor_aderenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vw_atividade_menor_aderenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vw_atividade_menor_aderenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vw_atividade_menor_aderenciaGroupByOutputType[P]>
            : GetScalarType<T[P], Vw_atividade_menor_aderenciaGroupByOutputType[P]>
        }
      >
    >


  export type vw_atividade_menor_aderenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Ativo?: boolean
    Nome?: boolean
    Descricao?: boolean
    VagasRestantes?: boolean
    Vagas?: boolean
    Horario?: boolean
    totalInscritos?: boolean
    aderencia?: boolean
  }, ExtArgs["result"]["vw_atividade_menor_aderencia"]>



  export type vw_atividade_menor_aderenciaSelectScalar = {
    Id?: boolean
    Ativo?: boolean
    Nome?: boolean
    Descricao?: boolean
    VagasRestantes?: boolean
    Vagas?: boolean
    Horario?: boolean
    totalInscritos?: boolean
    aderencia?: boolean
  }

  export type vw_atividade_menor_aderenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Ativo" | "Nome" | "Descricao" | "VagasRestantes" | "Vagas" | "Horario" | "totalInscritos" | "aderencia", ExtArgs["result"]["vw_atividade_menor_aderencia"]>

  export type $vw_atividade_menor_aderenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vw_atividade_menor_aderencia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Ativo: boolean
      Nome: string
      Descricao: string | null
      VagasRestantes: number
      Vagas: number
      Horario: string | null
      totalInscritos: bigint
      aderencia: Prisma.Decimal | null
    }, ExtArgs["result"]["vw_atividade_menor_aderencia"]>
    composites: {}
  }

  type vw_atividade_menor_aderenciaGetPayload<S extends boolean | null | undefined | vw_atividade_menor_aderenciaDefaultArgs> = $Result.GetResult<Prisma.$vw_atividade_menor_aderenciaPayload, S>

  type vw_atividade_menor_aderenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vw_atividade_menor_aderenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vw_atividade_menor_aderenciaCountAggregateInputType | true
    }

  export interface vw_atividade_menor_aderenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vw_atividade_menor_aderencia'], meta: { name: 'vw_atividade_menor_aderencia' } }
    /**
     * Find the first Vw_atividade_menor_aderencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_atividade_menor_aderenciaFindFirstArgs} args - Arguments to find a Vw_atividade_menor_aderencia
     * @example
     * // Get one Vw_atividade_menor_aderencia
     * const vw_atividade_menor_aderencia = await prisma.vw_atividade_menor_aderencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vw_atividade_menor_aderenciaFindFirstArgs, TakeDependenciesValidator extends "take" extends Prisma.Keys<T> ? {
      orderBy: {}
    } : {}, SkipDependenciesValidator extends "skip" extends Prisma.Keys<T> ? {
      orderBy: {}
    } : {}>(args?: SelectSubset<T, vw_atividade_menor_aderenciaFindFirstArgs<ExtArgs>> & TakeDependenciesValidator & SkipDependenciesValidator): Prisma__vw_atividade_menor_aderenciaClient<$Result.GetResult<Prisma.$vw_atividade_menor_aderenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vw_atividade_menor_aderencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_atividade_menor_aderenciaFindFirstOrThrowArgs} args - Arguments to find a Vw_atividade_menor_aderencia
     * @example
     * // Get one Vw_atividade_menor_aderencia
     * const vw_atividade_menor_aderencia = await prisma.vw_atividade_menor_aderencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vw_atividade_menor_aderenciaFindFirstOrThrowArgs, TakeDependenciesValidator extends "take" extends Prisma.Keys<T> ? {
      orderBy: {}
    } : {}, SkipDependenciesValidator extends "skip" extends Prisma.Keys<T> ? {
      orderBy: {}
    } : {}>(args?: SelectSubset<T, vw_atividade_menor_aderenciaFindFirstOrThrowArgs<ExtArgs>> & TakeDependenciesValidator & SkipDependenciesValidator): Prisma__vw_atividade_menor_aderenciaClient<$Result.GetResult<Prisma.$vw_atividade_menor_aderenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vw_atividade_menor_aderencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_atividade_menor_aderenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vw_atividade_menor_aderencias
     * const vw_atividade_menor_aderencias = await prisma.vw_atividade_menor_aderencia.findMany()
     * 
     * // Get first 10 Vw_atividade_menor_aderencias
     * const vw_atividade_menor_aderencias = await prisma.vw_atividade_menor_aderencia.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const vw_atividade_menor_aderenciaWithIdOnly = await prisma.vw_atividade_menor_aderencia.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends vw_atividade_menor_aderenciaFindManyArgs, TakeDependenciesValidator extends "take" extends Prisma.Keys<T> ? {
      orderBy: {}
    } : {}, SkipDependenciesValidator extends "skip" extends Prisma.Keys<T> ? {
      orderBy: {}
    } : {}>(args?: SelectSubset<T, vw_atividade_menor_aderenciaFindManyArgs<ExtArgs>> & TakeDependenciesValidator & SkipDependenciesValidator): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vw_atividade_menor_aderenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>


    /**
     * Count the number of Vw_atividade_menor_aderencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_atividade_menor_aderenciaCountArgs} args - Arguments to filter Vw_atividade_menor_aderencias to count.
     * @example
     * // Count the number of Vw_atividade_menor_aderencias
     * const count = await prisma.vw_atividade_menor_aderencia.count({
     *   where: {
     *     // ... the filter for the Vw_atividade_menor_aderencias we want to count
     *   }
     * })
    **/
    count<T extends vw_atividade_menor_aderenciaCountArgs>(
      args?: Subset<T, vw_atividade_menor_aderenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vw_atividade_menor_aderenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vw_atividade_menor_aderencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vw_atividade_menor_aderenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vw_atividade_menor_aderenciaAggregateArgs>(args: Subset<T, Vw_atividade_menor_aderenciaAggregateArgs>): Prisma.PrismaPromise<GetVw_atividade_menor_aderenciaAggregateType<T>>

    /**
     * Group by Vw_atividade_menor_aderencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_atividade_menor_aderenciaGroupByArgs} args - Group by arguments.
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
      T extends vw_atividade_menor_aderenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vw_atividade_menor_aderenciaGroupByArgs['orderBy'] }
        : { orderBy?: vw_atividade_menor_aderenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vw_atividade_menor_aderenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVw_atividade_menor_aderenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vw_atividade_menor_aderencia model
   */
  readonly fields: vw_atividade_menor_aderenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vw_atividade_menor_aderencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vw_atividade_menor_aderenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the vw_atividade_menor_aderencia model
   */
  interface vw_atividade_menor_aderenciaFieldRefs {
    readonly Id: FieldRef<"vw_atividade_menor_aderencia", 'String'>
    readonly Ativo: FieldRef<"vw_atividade_menor_aderencia", 'Boolean'>
    readonly Nome: FieldRef<"vw_atividade_menor_aderencia", 'String'>
    readonly Descricao: FieldRef<"vw_atividade_menor_aderencia", 'String'>
    readonly VagasRestantes: FieldRef<"vw_atividade_menor_aderencia", 'Int'>
    readonly Vagas: FieldRef<"vw_atividade_menor_aderencia", 'Int'>
    readonly Horario: FieldRef<"vw_atividade_menor_aderencia", 'String'>
    readonly totalInscritos: FieldRef<"vw_atividade_menor_aderencia", 'BigInt'>
    readonly aderencia: FieldRef<"vw_atividade_menor_aderencia", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * vw_atividade_menor_aderencia findFirst
   */
  export type vw_atividade_menor_aderenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_atividade_menor_aderencia
     */
    select?: vw_atividade_menor_aderenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vw_atividade_menor_aderencia
     */
    omit?: vw_atividade_menor_aderenciaOmit<ExtArgs> | null
    /**
     * Filter, which vw_atividade_menor_aderencia to fetch.
     */
    where?: vw_atividade_menor_aderenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vw_atividade_menor_aderencias to fetch.
     */
    orderBy?: vw_atividade_menor_aderenciaOrderByWithRelationInput | vw_atividade_menor_aderenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vw_atividade_menor_aderencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vw_atividade_menor_aderencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vw_atividade_menor_aderencias.
     */
    distinct?: Vw_atividade_menor_aderenciaScalarFieldEnum | Vw_atividade_menor_aderenciaScalarFieldEnum[]
  }

  /**
   * vw_atividade_menor_aderencia findFirstOrThrow
   */
  export type vw_atividade_menor_aderenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_atividade_menor_aderencia
     */
    select?: vw_atividade_menor_aderenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vw_atividade_menor_aderencia
     */
    omit?: vw_atividade_menor_aderenciaOmit<ExtArgs> | null
    /**
     * Filter, which vw_atividade_menor_aderencia to fetch.
     */
    where?: vw_atividade_menor_aderenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vw_atividade_menor_aderencias to fetch.
     */
    orderBy?: vw_atividade_menor_aderenciaOrderByWithRelationInput | vw_atividade_menor_aderenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vw_atividade_menor_aderencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vw_atividade_menor_aderencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vw_atividade_menor_aderencias.
     */
    distinct?: Vw_atividade_menor_aderenciaScalarFieldEnum | Vw_atividade_menor_aderenciaScalarFieldEnum[]
  }

  /**
   * vw_atividade_menor_aderencia findMany
   */
  export type vw_atividade_menor_aderenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_atividade_menor_aderencia
     */
    select?: vw_atividade_menor_aderenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vw_atividade_menor_aderencia
     */
    omit?: vw_atividade_menor_aderenciaOmit<ExtArgs> | null
    /**
     * Filter, which vw_atividade_menor_aderencias to fetch.
     */
    where?: vw_atividade_menor_aderenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vw_atividade_menor_aderencias to fetch.
     */
    orderBy?: vw_atividade_menor_aderenciaOrderByWithRelationInput | vw_atividade_menor_aderenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vw_atividade_menor_aderencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vw_atividade_menor_aderencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vw_atividade_menor_aderencias.
     */
    distinct?: Vw_atividade_menor_aderenciaScalarFieldEnum | Vw_atividade_menor_aderenciaScalarFieldEnum[]
  }

  /**
   * vw_atividade_menor_aderencia without action
   */
  export type vw_atividade_menor_aderenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_atividade_menor_aderencia
     */
    select?: vw_atividade_menor_aderenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vw_atividade_menor_aderencia
     */
    omit?: vw_atividade_menor_aderenciaOmit<ExtArgs> | null
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
    Id: 'Id',
    Ativo: 'Ativo',
    Nome: 'Nome',
    Descricao: 'Descricao',
    VagasRestantes: 'VagasRestantes',
    Vagas: 'Vagas',
    Horario: 'Horario'
  };

  export type AtividadeScalarFieldEnum = (typeof AtividadeScalarFieldEnum)[keyof typeof AtividadeScalarFieldEnum]


  export const HstparticipanteScalarFieldEnum: {
    ID: 'ID',
    email: 'email',
    IdParticipante: 'IdParticipante'
  };

  export type HstparticipanteScalarFieldEnum = (typeof HstparticipanteScalarFieldEnum)[keyof typeof HstparticipanteScalarFieldEnum]


  export const InscricaoScalarFieldEnum: {
    Id: 'Id',
    Ativo: 'Ativo',
    IdParticipante: 'IdParticipante',
    IdAtividade: 'IdAtividade'
  };

  export type InscricaoScalarFieldEnum = (typeof InscricaoScalarFieldEnum)[keyof typeof InscricaoScalarFieldEnum]


  export const ParticipanteScalarFieldEnum: {
    Id: 'Id',
    Nome: 'Nome',
    Email: 'Email',
    Telefone: 'Telefone',
    Ativo: 'Ativo',
    HashSenha: 'HashSenha'
  };

  export type ParticipanteScalarFieldEnum = (typeof ParticipanteScalarFieldEnum)[keyof typeof ParticipanteScalarFieldEnum]


  export const UserScalarFieldEnum: {
    Id: 'Id',
    email: 'email',
    HashSenha: 'HashSenha'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Vw_atividade_menor_aderenciaScalarFieldEnum: {
    Id: 'Id',
    Ativo: 'Ativo',
    Nome: 'Nome',
    Descricao: 'Descricao',
    VagasRestantes: 'VagasRestantes',
    Vagas: 'Vagas',
    Horario: 'Horario',
    totalInscritos: 'totalInscritos',
    aderencia: 'aderencia'
  };

  export type Vw_atividade_menor_aderenciaScalarFieldEnum = (typeof Vw_atividade_menor_aderenciaScalarFieldEnum)[keyof typeof Vw_atividade_menor_aderenciaScalarFieldEnum]


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
    Id: 'Id',
    Nome: 'Nome',
    Descricao: 'Descricao',
    Horario: 'Horario'
  };

  export type atividadeOrderByRelevanceFieldEnum = (typeof atividadeOrderByRelevanceFieldEnum)[keyof typeof atividadeOrderByRelevanceFieldEnum]


  export const hstparticipanteOrderByRelevanceFieldEnum: {
    email: 'email',
    IdParticipante: 'IdParticipante'
  };

  export type hstparticipanteOrderByRelevanceFieldEnum = (typeof hstparticipanteOrderByRelevanceFieldEnum)[keyof typeof hstparticipanteOrderByRelevanceFieldEnum]


  export const inscricaoOrderByRelevanceFieldEnum: {
    Id: 'Id',
    IdParticipante: 'IdParticipante',
    IdAtividade: 'IdAtividade'
  };

  export type inscricaoOrderByRelevanceFieldEnum = (typeof inscricaoOrderByRelevanceFieldEnum)[keyof typeof inscricaoOrderByRelevanceFieldEnum]


  export const participanteOrderByRelevanceFieldEnum: {
    Id: 'Id',
    Nome: 'Nome',
    Email: 'Email',
    Telefone: 'Telefone',
    HashSenha: 'HashSenha'
  };

  export type participanteOrderByRelevanceFieldEnum = (typeof participanteOrderByRelevanceFieldEnum)[keyof typeof participanteOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    Id: 'Id',
    email: 'email',
    HashSenha: 'HashSenha'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const vw_atividade_menor_aderenciaOrderByRelevanceFieldEnum: {
    Id: 'Id',
    Nome: 'Nome',
    Descricao: 'Descricao',
    Horario: 'Horario'
  };

  export type vw_atividade_menor_aderenciaOrderByRelevanceFieldEnum = (typeof vw_atividade_menor_aderenciaOrderByRelevanceFieldEnum)[keyof typeof vw_atividade_menor_aderenciaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


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
    Id?: StringFilter<"atividade"> | string
    Ativo?: BoolFilter<"atividade"> | boolean
    Nome?: StringFilter<"atividade"> | string
    Descricao?: StringNullableFilter<"atividade"> | string | null
    VagasRestantes?: IntFilter<"atividade"> | number
    Vagas?: IntFilter<"atividade"> | number
    Horario?: StringNullableFilter<"atividade"> | string | null
    inscricao?: InscricaoListRelationFilter
  }

  export type atividadeOrderByWithRelationInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrderInput | SortOrder
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    Horario?: SortOrderInput | SortOrder
    inscricao?: inscricaoOrderByRelationAggregateInput
    _relevance?: atividadeOrderByRelevanceInput
  }

  export type atividadeWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: atividadeWhereInput | atividadeWhereInput[]
    OR?: atividadeWhereInput[]
    NOT?: atividadeWhereInput | atividadeWhereInput[]
    Ativo?: BoolFilter<"atividade"> | boolean
    Nome?: StringFilter<"atividade"> | string
    Descricao?: StringNullableFilter<"atividade"> | string | null
    VagasRestantes?: IntFilter<"atividade"> | number
    Vagas?: IntFilter<"atividade"> | number
    Horario?: StringNullableFilter<"atividade"> | string | null
    inscricao?: InscricaoListRelationFilter
  }, "Id">

  export type atividadeOrderByWithAggregationInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrderInput | SortOrder
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    Horario?: SortOrderInput | SortOrder
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
    Id?: StringWithAggregatesFilter<"atividade"> | string
    Ativo?: BoolWithAggregatesFilter<"atividade"> | boolean
    Nome?: StringWithAggregatesFilter<"atividade"> | string
    Descricao?: StringNullableWithAggregatesFilter<"atividade"> | string | null
    VagasRestantes?: IntWithAggregatesFilter<"atividade"> | number
    Vagas?: IntWithAggregatesFilter<"atividade"> | number
    Horario?: StringNullableWithAggregatesFilter<"atividade"> | string | null
  }

  export type hstparticipanteWhereInput = {
    AND?: hstparticipanteWhereInput | hstparticipanteWhereInput[]
    OR?: hstparticipanteWhereInput[]
    NOT?: hstparticipanteWhereInput | hstparticipanteWhereInput[]
    ID?: IntFilter<"hstparticipante"> | number
    email?: StringFilter<"hstparticipante"> | string
    IdParticipante?: StringFilter<"hstparticipante"> | string
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
  }

  export type hstparticipanteOrderByWithRelationInput = {
    ID?: SortOrder
    email?: SortOrder
    IdParticipante?: SortOrder
    participante?: participanteOrderByWithRelationInput
    _relevance?: hstparticipanteOrderByRelevanceInput
  }

  export type hstparticipanteWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: hstparticipanteWhereInput | hstparticipanteWhereInput[]
    OR?: hstparticipanteWhereInput[]
    NOT?: hstparticipanteWhereInput | hstparticipanteWhereInput[]
    email?: StringFilter<"hstparticipante"> | string
    IdParticipante?: StringFilter<"hstparticipante"> | string
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
  }, "ID">

  export type hstparticipanteOrderByWithAggregationInput = {
    ID?: SortOrder
    email?: SortOrder
    IdParticipante?: SortOrder
    _count?: hstparticipanteCountOrderByAggregateInput
    _avg?: hstparticipanteAvgOrderByAggregateInput
    _max?: hstparticipanteMaxOrderByAggregateInput
    _min?: hstparticipanteMinOrderByAggregateInput
    _sum?: hstparticipanteSumOrderByAggregateInput
  }

  export type hstparticipanteScalarWhereWithAggregatesInput = {
    AND?: hstparticipanteScalarWhereWithAggregatesInput | hstparticipanteScalarWhereWithAggregatesInput[]
    OR?: hstparticipanteScalarWhereWithAggregatesInput[]
    NOT?: hstparticipanteScalarWhereWithAggregatesInput | hstparticipanteScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"hstparticipante"> | number
    email?: StringWithAggregatesFilter<"hstparticipante"> | string
    IdParticipante?: StringWithAggregatesFilter<"hstparticipante"> | string
  }

  export type inscricaoWhereInput = {
    AND?: inscricaoWhereInput | inscricaoWhereInput[]
    OR?: inscricaoWhereInput[]
    NOT?: inscricaoWhereInput | inscricaoWhereInput[]
    Id?: StringFilter<"inscricao"> | string
    Ativo?: BoolFilter<"inscricao"> | boolean
    IdParticipante?: StringFilter<"inscricao"> | string
    IdAtividade?: StringFilter<"inscricao"> | string
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
    atividade?: XOR<AtividadeScalarRelationFilter, atividadeWhereInput>
  }

  export type inscricaoOrderByWithRelationInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    IdParticipante?: SortOrder
    IdAtividade?: SortOrder
    participante?: participanteOrderByWithRelationInput
    atividade?: atividadeOrderByWithRelationInput
    _relevance?: inscricaoOrderByRelevanceInput
  }

  export type inscricaoWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    IdParticipante_IdAtividade?: inscricaoIdParticipanteIdAtividadeCompoundUniqueInput
    AND?: inscricaoWhereInput | inscricaoWhereInput[]
    OR?: inscricaoWhereInput[]
    NOT?: inscricaoWhereInput | inscricaoWhereInput[]
    Ativo?: BoolFilter<"inscricao"> | boolean
    IdParticipante?: StringFilter<"inscricao"> | string
    IdAtividade?: StringFilter<"inscricao"> | string
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
    atividade?: XOR<AtividadeScalarRelationFilter, atividadeWhereInput>
  }, "Id" | "IdParticipante_IdAtividade">

  export type inscricaoOrderByWithAggregationInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    IdParticipante?: SortOrder
    IdAtividade?: SortOrder
    _count?: inscricaoCountOrderByAggregateInput
    _max?: inscricaoMaxOrderByAggregateInput
    _min?: inscricaoMinOrderByAggregateInput
  }

  export type inscricaoScalarWhereWithAggregatesInput = {
    AND?: inscricaoScalarWhereWithAggregatesInput | inscricaoScalarWhereWithAggregatesInput[]
    OR?: inscricaoScalarWhereWithAggregatesInput[]
    NOT?: inscricaoScalarWhereWithAggregatesInput | inscricaoScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"inscricao"> | string
    Ativo?: BoolWithAggregatesFilter<"inscricao"> | boolean
    IdParticipante?: StringWithAggregatesFilter<"inscricao"> | string
    IdAtividade?: StringWithAggregatesFilter<"inscricao"> | string
  }

  export type participanteWhereInput = {
    AND?: participanteWhereInput | participanteWhereInput[]
    OR?: participanteWhereInput[]
    NOT?: participanteWhereInput | participanteWhereInput[]
    Id?: StringFilter<"participante"> | string
    Nome?: StringFilter<"participante"> | string
    Email?: StringFilter<"participante"> | string
    Telefone?: StringFilter<"participante"> | string
    Ativo?: BoolFilter<"participante"> | boolean
    HashSenha?: StringFilter<"participante"> | string
    hstparticipante?: HstparticipanteListRelationFilter
    inscricao?: InscricaoListRelationFilter
  }

  export type participanteOrderByWithRelationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Email?: SortOrder
    Telefone?: SortOrder
    Ativo?: SortOrder
    HashSenha?: SortOrder
    hstparticipante?: hstparticipanteOrderByRelationAggregateInput
    inscricao?: inscricaoOrderByRelationAggregateInput
    _relevance?: participanteOrderByRelevanceInput
  }

  export type participanteWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    Email?: string
    AND?: participanteWhereInput | participanteWhereInput[]
    OR?: participanteWhereInput[]
    NOT?: participanteWhereInput | participanteWhereInput[]
    Nome?: StringFilter<"participante"> | string
    Telefone?: StringFilter<"participante"> | string
    Ativo?: BoolFilter<"participante"> | boolean
    HashSenha?: StringFilter<"participante"> | string
    hstparticipante?: HstparticipanteListRelationFilter
    inscricao?: InscricaoListRelationFilter
  }, "Id" | "Email">

  export type participanteOrderByWithAggregationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Email?: SortOrder
    Telefone?: SortOrder
    Ativo?: SortOrder
    HashSenha?: SortOrder
    _count?: participanteCountOrderByAggregateInput
    _max?: participanteMaxOrderByAggregateInput
    _min?: participanteMinOrderByAggregateInput
  }

  export type participanteScalarWhereWithAggregatesInput = {
    AND?: participanteScalarWhereWithAggregatesInput | participanteScalarWhereWithAggregatesInput[]
    OR?: participanteScalarWhereWithAggregatesInput[]
    NOT?: participanteScalarWhereWithAggregatesInput | participanteScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"participante"> | string
    Nome?: StringWithAggregatesFilter<"participante"> | string
    Email?: StringWithAggregatesFilter<"participante"> | string
    Telefone?: StringWithAggregatesFilter<"participante"> | string
    Ativo?: BoolWithAggregatesFilter<"participante"> | boolean
    HashSenha?: StringWithAggregatesFilter<"participante"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    Id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    HashSenha?: StringFilter<"user"> | string
  }

  export type userOrderByWithRelationInput = {
    Id?: SortOrder
    email?: SortOrder
    HashSenha?: SortOrder
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    email?: StringFilter<"user"> | string
    HashSenha?: StringFilter<"user"> | string
  }, "Id">

  export type userOrderByWithAggregationInput = {
    Id?: SortOrder
    email?: SortOrder
    HashSenha?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    HashSenha?: StringWithAggregatesFilter<"user"> | string
  }

  export type vw_atividade_menor_aderenciaWhereInput = {
    AND?: vw_atividade_menor_aderenciaWhereInput | vw_atividade_menor_aderenciaWhereInput[]
    OR?: vw_atividade_menor_aderenciaWhereInput[]
    NOT?: vw_atividade_menor_aderenciaWhereInput | vw_atividade_menor_aderenciaWhereInput[]
    Id?: StringFilter<"vw_atividade_menor_aderencia"> | string
    Ativo?: BoolFilter<"vw_atividade_menor_aderencia"> | boolean
    Nome?: StringFilter<"vw_atividade_menor_aderencia"> | string
    Descricao?: StringNullableFilter<"vw_atividade_menor_aderencia"> | string | null
    VagasRestantes?: IntFilter<"vw_atividade_menor_aderencia"> | number
    Vagas?: IntFilter<"vw_atividade_menor_aderencia"> | number
    Horario?: StringNullableFilter<"vw_atividade_menor_aderencia"> | string | null
    totalInscritos?: BigIntFilter<"vw_atividade_menor_aderencia"> | bigint | number
    aderencia?: DecimalNullableFilter<"vw_atividade_menor_aderencia"> | Decimal | DecimalJsLike | number | string | null
  }

  export type vw_atividade_menor_aderenciaOrderByWithRelationInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrderInput | SortOrder
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    Horario?: SortOrderInput | SortOrder
    totalInscritos?: SortOrder
    aderencia?: SortOrderInput | SortOrder
    _relevance?: vw_atividade_menor_aderenciaOrderByRelevanceInput
  }

  export type vw_atividade_menor_aderenciaOrderByWithAggregationInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrderInput | SortOrder
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    Horario?: SortOrderInput | SortOrder
    totalInscritos?: SortOrder
    aderencia?: SortOrderInput | SortOrder
    _count?: vw_atividade_menor_aderenciaCountOrderByAggregateInput
    _avg?: vw_atividade_menor_aderenciaAvgOrderByAggregateInput
    _max?: vw_atividade_menor_aderenciaMaxOrderByAggregateInput
    _min?: vw_atividade_menor_aderenciaMinOrderByAggregateInput
    _sum?: vw_atividade_menor_aderenciaSumOrderByAggregateInput
  }

  export type vw_atividade_menor_aderenciaScalarWhereWithAggregatesInput = {
    AND?: vw_atividade_menor_aderenciaScalarWhereWithAggregatesInput | vw_atividade_menor_aderenciaScalarWhereWithAggregatesInput[]
    OR?: vw_atividade_menor_aderenciaScalarWhereWithAggregatesInput[]
    NOT?: vw_atividade_menor_aderenciaScalarWhereWithAggregatesInput | vw_atividade_menor_aderenciaScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"vw_atividade_menor_aderencia"> | string
    Ativo?: BoolWithAggregatesFilter<"vw_atividade_menor_aderencia"> | boolean
    Nome?: StringWithAggregatesFilter<"vw_atividade_menor_aderencia"> | string
    Descricao?: StringNullableWithAggregatesFilter<"vw_atividade_menor_aderencia"> | string | null
    VagasRestantes?: IntWithAggregatesFilter<"vw_atividade_menor_aderencia"> | number
    Vagas?: IntWithAggregatesFilter<"vw_atividade_menor_aderencia"> | number
    Horario?: StringNullableWithAggregatesFilter<"vw_atividade_menor_aderencia"> | string | null
    totalInscritos?: BigIntWithAggregatesFilter<"vw_atividade_menor_aderencia"> | bigint | number
    aderencia?: DecimalNullableWithAggregatesFilter<"vw_atividade_menor_aderencia"> | Decimal | DecimalJsLike | number | string | null
  }

  export type atividadeCreateInput = {
    Id?: string
    Ativo?: boolean
    Nome: string
    Descricao?: string | null
    VagasRestantes?: number
    Vagas?: number
    Horario?: string | null
    inscricao?: inscricaoCreateNestedManyWithoutAtividadeInput
  }

  export type atividadeUncheckedCreateInput = {
    Id?: string
    Ativo?: boolean
    Nome: string
    Descricao?: string | null
    VagasRestantes?: number
    Vagas?: number
    Horario?: string | null
    inscricao?: inscricaoUncheckedCreateNestedManyWithoutAtividadeInput
  }

  export type atividadeUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    Nome?: StringFieldUpdateOperationsInput | string
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    VagasRestantes?: IntFieldUpdateOperationsInput | number
    Vagas?: IntFieldUpdateOperationsInput | number
    Horario?: NullableStringFieldUpdateOperationsInput | string | null
    inscricao?: inscricaoUpdateManyWithoutAtividadeNestedInput
  }

  export type atividadeUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    Nome?: StringFieldUpdateOperationsInput | string
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    VagasRestantes?: IntFieldUpdateOperationsInput | number
    Vagas?: IntFieldUpdateOperationsInput | number
    Horario?: NullableStringFieldUpdateOperationsInput | string | null
    inscricao?: inscricaoUncheckedUpdateManyWithoutAtividadeNestedInput
  }

  export type atividadeCreateManyInput = {
    Id?: string
    Ativo?: boolean
    Nome: string
    Descricao?: string | null
    VagasRestantes?: number
    Vagas?: number
    Horario?: string | null
  }

  export type atividadeUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    Nome?: StringFieldUpdateOperationsInput | string
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    VagasRestantes?: IntFieldUpdateOperationsInput | number
    Vagas?: IntFieldUpdateOperationsInput | number
    Horario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type atividadeUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    Nome?: StringFieldUpdateOperationsInput | string
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    VagasRestantes?: IntFieldUpdateOperationsInput | number
    Vagas?: IntFieldUpdateOperationsInput | number
    Horario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hstparticipanteCreateInput = {
    email: string
    participante: participanteCreateNestedOneWithoutHstparticipanteInput
  }

  export type hstparticipanteUncheckedCreateInput = {
    ID?: number
    email: string
    IdParticipante: string
  }

  export type hstparticipanteUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    participante?: participanteUpdateOneRequiredWithoutHstparticipanteNestedInput
  }

  export type hstparticipanteUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    IdParticipante?: StringFieldUpdateOperationsInput | string
  }

  export type hstparticipanteCreateManyInput = {
    ID?: number
    email: string
    IdParticipante: string
  }

  export type hstparticipanteUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type hstparticipanteUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    IdParticipante?: StringFieldUpdateOperationsInput | string
  }

  export type inscricaoCreateInput = {
    Id?: string
    Ativo?: boolean
    participante: participanteCreateNestedOneWithoutInscricaoInput
    atividade: atividadeCreateNestedOneWithoutInscricaoInput
  }

  export type inscricaoUncheckedCreateInput = {
    Id?: string
    Ativo?: boolean
    IdParticipante: string
    IdAtividade: string
  }

  export type inscricaoUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    participante?: participanteUpdateOneRequiredWithoutInscricaoNestedInput
    atividade?: atividadeUpdateOneRequiredWithoutInscricaoNestedInput
  }

  export type inscricaoUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    IdParticipante?: StringFieldUpdateOperationsInput | string
    IdAtividade?: StringFieldUpdateOperationsInput | string
  }

  export type inscricaoCreateManyInput = {
    Id?: string
    Ativo?: boolean
    IdParticipante: string
    IdAtividade: string
  }

  export type inscricaoUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type inscricaoUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    IdParticipante?: StringFieldUpdateOperationsInput | string
    IdAtividade?: StringFieldUpdateOperationsInput | string
  }

  export type participanteCreateInput = {
    Id?: string
    Nome: string
    Email: string
    Telefone: string
    Ativo?: boolean
    HashSenha: string
    hstparticipante?: hstparticipanteCreateNestedManyWithoutParticipanteInput
    inscricao?: inscricaoCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUncheckedCreateInput = {
    Id?: string
    Nome: string
    Email: string
    Telefone: string
    Ativo?: boolean
    HashSenha: string
    hstparticipante?: hstparticipanteUncheckedCreateNestedManyWithoutParticipanteInput
    inscricao?: inscricaoUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefone?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    HashSenha?: StringFieldUpdateOperationsInput | string
    hstparticipante?: hstparticipanteUpdateManyWithoutParticipanteNestedInput
    inscricao?: inscricaoUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefone?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    HashSenha?: StringFieldUpdateOperationsInput | string
    hstparticipante?: hstparticipanteUncheckedUpdateManyWithoutParticipanteNestedInput
    inscricao?: inscricaoUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteCreateManyInput = {
    Id?: string
    Nome: string
    Email: string
    Telefone: string
    Ativo?: boolean
    HashSenha: string
  }

  export type participanteUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefone?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    HashSenha?: StringFieldUpdateOperationsInput | string
  }

  export type participanteUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefone?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    HashSenha?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    Id?: string
    email: string
    HashSenha: string
  }

  export type userUncheckedCreateInput = {
    Id?: string
    email: string
    HashSenha: string
  }

  export type userUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HashSenha?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HashSenha?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateManyInput = {
    Id?: string
    email: string
    HashSenha: string
  }

  export type userUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HashSenha?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HashSenha?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type InscricaoListRelationFilter = {
    every?: inscricaoWhereInput
    some?: inscricaoWhereInput
    none?: inscricaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type inscricaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type atividadeOrderByRelevanceInput = {
    fields: atividadeOrderByRelevanceFieldEnum | atividadeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type atividadeCountOrderByAggregateInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrder
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    Horario?: SortOrder
  }

  export type atividadeAvgOrderByAggregateInput = {
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
  }

  export type atividadeMaxOrderByAggregateInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrder
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    Horario?: SortOrder
  }

  export type atividadeMinOrderByAggregateInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrder
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    Horario?: SortOrder
  }

  export type atividadeSumOrderByAggregateInput = {
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ParticipanteScalarRelationFilter = {
    is?: participanteWhereInput
    isNot?: participanteWhereInput
  }

  export type hstparticipanteOrderByRelevanceInput = {
    fields: hstparticipanteOrderByRelevanceFieldEnum | hstparticipanteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type hstparticipanteCountOrderByAggregateInput = {
    ID?: SortOrder
    email?: SortOrder
    IdParticipante?: SortOrder
  }

  export type hstparticipanteAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type hstparticipanteMaxOrderByAggregateInput = {
    ID?: SortOrder
    email?: SortOrder
    IdParticipante?: SortOrder
  }

  export type hstparticipanteMinOrderByAggregateInput = {
    ID?: SortOrder
    email?: SortOrder
    IdParticipante?: SortOrder
  }

  export type hstparticipanteSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type AtividadeScalarRelationFilter = {
    is?: atividadeWhereInput
    isNot?: atividadeWhereInput
  }

  export type inscricaoOrderByRelevanceInput = {
    fields: inscricaoOrderByRelevanceFieldEnum | inscricaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type inscricaoIdParticipanteIdAtividadeCompoundUniqueInput = {
    IdParticipante: string
    IdAtividade: string
  }

  export type inscricaoCountOrderByAggregateInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    IdParticipante?: SortOrder
    IdAtividade?: SortOrder
  }

  export type inscricaoMaxOrderByAggregateInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    IdParticipante?: SortOrder
    IdAtividade?: SortOrder
  }

  export type inscricaoMinOrderByAggregateInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    IdParticipante?: SortOrder
    IdAtividade?: SortOrder
  }

  export type HstparticipanteListRelationFilter = {
    every?: hstparticipanteWhereInput
    some?: hstparticipanteWhereInput
    none?: hstparticipanteWhereInput
  }

  export type hstparticipanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type participanteOrderByRelevanceInput = {
    fields: participanteOrderByRelevanceFieldEnum | participanteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type participanteCountOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Email?: SortOrder
    Telefone?: SortOrder
    Ativo?: SortOrder
    HashSenha?: SortOrder
  }

  export type participanteMaxOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Email?: SortOrder
    Telefone?: SortOrder
    Ativo?: SortOrder
    HashSenha?: SortOrder
  }

  export type participanteMinOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Email?: SortOrder
    Telefone?: SortOrder
    Ativo?: SortOrder
    HashSenha?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    Id?: SortOrder
    email?: SortOrder
    HashSenha?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    Id?: SortOrder
    email?: SortOrder
    HashSenha?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    Id?: SortOrder
    email?: SortOrder
    HashSenha?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type vw_atividade_menor_aderenciaOrderByRelevanceInput = {
    fields: vw_atividade_menor_aderenciaOrderByRelevanceFieldEnum | vw_atividade_menor_aderenciaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vw_atividade_menor_aderenciaCountOrderByAggregateInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrder
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    Horario?: SortOrder
    totalInscritos?: SortOrder
    aderencia?: SortOrder
  }

  export type vw_atividade_menor_aderenciaAvgOrderByAggregateInput = {
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    totalInscritos?: SortOrder
    aderencia?: SortOrder
  }

  export type vw_atividade_menor_aderenciaMaxOrderByAggregateInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrder
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    Horario?: SortOrder
    totalInscritos?: SortOrder
    aderencia?: SortOrder
  }

  export type vw_atividade_menor_aderenciaMinOrderByAggregateInput = {
    Id?: SortOrder
    Ativo?: SortOrder
    Nome?: SortOrder
    Descricao?: SortOrder
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    Horario?: SortOrder
    totalInscritos?: SortOrder
    aderencia?: SortOrder
  }

  export type vw_atividade_menor_aderenciaSumOrderByAggregateInput = {
    VagasRestantes?: SortOrder
    Vagas?: SortOrder
    totalInscritos?: SortOrder
    aderencia?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type inscricaoCreateNestedManyWithoutAtividadeInput = {
    create?: XOR<inscricaoCreateWithoutAtividadeInput, inscricaoUncheckedCreateWithoutAtividadeInput> | inscricaoCreateWithoutAtividadeInput[] | inscricaoUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: inscricaoCreateOrConnectWithoutAtividadeInput | inscricaoCreateOrConnectWithoutAtividadeInput[]
    createMany?: inscricaoCreateManyAtividadeInputEnvelope
    connect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
  }

  export type inscricaoUncheckedCreateNestedManyWithoutAtividadeInput = {
    create?: XOR<inscricaoCreateWithoutAtividadeInput, inscricaoUncheckedCreateWithoutAtividadeInput> | inscricaoCreateWithoutAtividadeInput[] | inscricaoUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: inscricaoCreateOrConnectWithoutAtividadeInput | inscricaoCreateOrConnectWithoutAtividadeInput[]
    createMany?: inscricaoCreateManyAtividadeInputEnvelope
    connect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type inscricaoUpdateManyWithoutAtividadeNestedInput = {
    create?: XOR<inscricaoCreateWithoutAtividadeInput, inscricaoUncheckedCreateWithoutAtividadeInput> | inscricaoCreateWithoutAtividadeInput[] | inscricaoUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: inscricaoCreateOrConnectWithoutAtividadeInput | inscricaoCreateOrConnectWithoutAtividadeInput[]
    upsert?: inscricaoUpsertWithWhereUniqueWithoutAtividadeInput | inscricaoUpsertWithWhereUniqueWithoutAtividadeInput[]
    createMany?: inscricaoCreateManyAtividadeInputEnvelope
    set?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    disconnect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    delete?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    connect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    update?: inscricaoUpdateWithWhereUniqueWithoutAtividadeInput | inscricaoUpdateWithWhereUniqueWithoutAtividadeInput[]
    updateMany?: inscricaoUpdateManyWithWhereWithoutAtividadeInput | inscricaoUpdateManyWithWhereWithoutAtividadeInput[]
    deleteMany?: inscricaoScalarWhereInput | inscricaoScalarWhereInput[]
  }

  export type inscricaoUncheckedUpdateManyWithoutAtividadeNestedInput = {
    create?: XOR<inscricaoCreateWithoutAtividadeInput, inscricaoUncheckedCreateWithoutAtividadeInput> | inscricaoCreateWithoutAtividadeInput[] | inscricaoUncheckedCreateWithoutAtividadeInput[]
    connectOrCreate?: inscricaoCreateOrConnectWithoutAtividadeInput | inscricaoCreateOrConnectWithoutAtividadeInput[]
    upsert?: inscricaoUpsertWithWhereUniqueWithoutAtividadeInput | inscricaoUpsertWithWhereUniqueWithoutAtividadeInput[]
    createMany?: inscricaoCreateManyAtividadeInputEnvelope
    set?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    disconnect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    delete?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    connect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    update?: inscricaoUpdateWithWhereUniqueWithoutAtividadeInput | inscricaoUpdateWithWhereUniqueWithoutAtividadeInput[]
    updateMany?: inscricaoUpdateManyWithWhereWithoutAtividadeInput | inscricaoUpdateManyWithWhereWithoutAtividadeInput[]
    deleteMany?: inscricaoScalarWhereInput | inscricaoScalarWhereInput[]
  }

  export type participanteCreateNestedOneWithoutHstparticipanteInput = {
    create?: XOR<participanteCreateWithoutHstparticipanteInput, participanteUncheckedCreateWithoutHstparticipanteInput>
    connectOrCreate?: participanteCreateOrConnectWithoutHstparticipanteInput
    connect?: participanteWhereUniqueInput
  }

  export type participanteUpdateOneRequiredWithoutHstparticipanteNestedInput = {
    create?: XOR<participanteCreateWithoutHstparticipanteInput, participanteUncheckedCreateWithoutHstparticipanteInput>
    connectOrCreate?: participanteCreateOrConnectWithoutHstparticipanteInput
    upsert?: participanteUpsertWithoutHstparticipanteInput
    connect?: participanteWhereUniqueInput
    update?: XOR<XOR<participanteUpdateToOneWithWhereWithoutHstparticipanteInput, participanteUpdateWithoutHstparticipanteInput>, participanteUncheckedUpdateWithoutHstparticipanteInput>
  }

  export type participanteCreateNestedOneWithoutInscricaoInput = {
    create?: XOR<participanteCreateWithoutInscricaoInput, participanteUncheckedCreateWithoutInscricaoInput>
    connectOrCreate?: participanteCreateOrConnectWithoutInscricaoInput
    connect?: participanteWhereUniqueInput
  }

  export type atividadeCreateNestedOneWithoutInscricaoInput = {
    create?: XOR<atividadeCreateWithoutInscricaoInput, atividadeUncheckedCreateWithoutInscricaoInput>
    connectOrCreate?: atividadeCreateOrConnectWithoutInscricaoInput
    connect?: atividadeWhereUniqueInput
  }

  export type participanteUpdateOneRequiredWithoutInscricaoNestedInput = {
    create?: XOR<participanteCreateWithoutInscricaoInput, participanteUncheckedCreateWithoutInscricaoInput>
    connectOrCreate?: participanteCreateOrConnectWithoutInscricaoInput
    upsert?: participanteUpsertWithoutInscricaoInput
    connect?: participanteWhereUniqueInput
    update?: XOR<XOR<participanteUpdateToOneWithWhereWithoutInscricaoInput, participanteUpdateWithoutInscricaoInput>, participanteUncheckedUpdateWithoutInscricaoInput>
  }

  export type atividadeUpdateOneRequiredWithoutInscricaoNestedInput = {
    create?: XOR<atividadeCreateWithoutInscricaoInput, atividadeUncheckedCreateWithoutInscricaoInput>
    connectOrCreate?: atividadeCreateOrConnectWithoutInscricaoInput
    upsert?: atividadeUpsertWithoutInscricaoInput
    connect?: atividadeWhereUniqueInput
    update?: XOR<XOR<atividadeUpdateToOneWithWhereWithoutInscricaoInput, atividadeUpdateWithoutInscricaoInput>, atividadeUncheckedUpdateWithoutInscricaoInput>
  }

  export type hstparticipanteCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<hstparticipanteCreateWithoutParticipanteInput, hstparticipanteUncheckedCreateWithoutParticipanteInput> | hstparticipanteCreateWithoutParticipanteInput[] | hstparticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: hstparticipanteCreateOrConnectWithoutParticipanteInput | hstparticipanteCreateOrConnectWithoutParticipanteInput[]
    createMany?: hstparticipanteCreateManyParticipanteInputEnvelope
    connect?: hstparticipanteWhereUniqueInput | hstparticipanteWhereUniqueInput[]
  }

  export type inscricaoCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<inscricaoCreateWithoutParticipanteInput, inscricaoUncheckedCreateWithoutParticipanteInput> | inscricaoCreateWithoutParticipanteInput[] | inscricaoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: inscricaoCreateOrConnectWithoutParticipanteInput | inscricaoCreateOrConnectWithoutParticipanteInput[]
    createMany?: inscricaoCreateManyParticipanteInputEnvelope
    connect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
  }

  export type hstparticipanteUncheckedCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<hstparticipanteCreateWithoutParticipanteInput, hstparticipanteUncheckedCreateWithoutParticipanteInput> | hstparticipanteCreateWithoutParticipanteInput[] | hstparticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: hstparticipanteCreateOrConnectWithoutParticipanteInput | hstparticipanteCreateOrConnectWithoutParticipanteInput[]
    createMany?: hstparticipanteCreateManyParticipanteInputEnvelope
    connect?: hstparticipanteWhereUniqueInput | hstparticipanteWhereUniqueInput[]
  }

  export type inscricaoUncheckedCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<inscricaoCreateWithoutParticipanteInput, inscricaoUncheckedCreateWithoutParticipanteInput> | inscricaoCreateWithoutParticipanteInput[] | inscricaoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: inscricaoCreateOrConnectWithoutParticipanteInput | inscricaoCreateOrConnectWithoutParticipanteInput[]
    createMany?: inscricaoCreateManyParticipanteInputEnvelope
    connect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
  }

  export type hstparticipanteUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<hstparticipanteCreateWithoutParticipanteInput, hstparticipanteUncheckedCreateWithoutParticipanteInput> | hstparticipanteCreateWithoutParticipanteInput[] | hstparticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: hstparticipanteCreateOrConnectWithoutParticipanteInput | hstparticipanteCreateOrConnectWithoutParticipanteInput[]
    upsert?: hstparticipanteUpsertWithWhereUniqueWithoutParticipanteInput | hstparticipanteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: hstparticipanteCreateManyParticipanteInputEnvelope
    set?: hstparticipanteWhereUniqueInput | hstparticipanteWhereUniqueInput[]
    disconnect?: hstparticipanteWhereUniqueInput | hstparticipanteWhereUniqueInput[]
    delete?: hstparticipanteWhereUniqueInput | hstparticipanteWhereUniqueInput[]
    connect?: hstparticipanteWhereUniqueInput | hstparticipanteWhereUniqueInput[]
    update?: hstparticipanteUpdateWithWhereUniqueWithoutParticipanteInput | hstparticipanteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: hstparticipanteUpdateManyWithWhereWithoutParticipanteInput | hstparticipanteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: hstparticipanteScalarWhereInput | hstparticipanteScalarWhereInput[]
  }

  export type inscricaoUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<inscricaoCreateWithoutParticipanteInput, inscricaoUncheckedCreateWithoutParticipanteInput> | inscricaoCreateWithoutParticipanteInput[] | inscricaoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: inscricaoCreateOrConnectWithoutParticipanteInput | inscricaoCreateOrConnectWithoutParticipanteInput[]
    upsert?: inscricaoUpsertWithWhereUniqueWithoutParticipanteInput | inscricaoUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: inscricaoCreateManyParticipanteInputEnvelope
    set?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    disconnect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    delete?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    connect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    update?: inscricaoUpdateWithWhereUniqueWithoutParticipanteInput | inscricaoUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: inscricaoUpdateManyWithWhereWithoutParticipanteInput | inscricaoUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: inscricaoScalarWhereInput | inscricaoScalarWhereInput[]
  }

  export type hstparticipanteUncheckedUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<hstparticipanteCreateWithoutParticipanteInput, hstparticipanteUncheckedCreateWithoutParticipanteInput> | hstparticipanteCreateWithoutParticipanteInput[] | hstparticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: hstparticipanteCreateOrConnectWithoutParticipanteInput | hstparticipanteCreateOrConnectWithoutParticipanteInput[]
    upsert?: hstparticipanteUpsertWithWhereUniqueWithoutParticipanteInput | hstparticipanteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: hstparticipanteCreateManyParticipanteInputEnvelope
    set?: hstparticipanteWhereUniqueInput | hstparticipanteWhereUniqueInput[]
    disconnect?: hstparticipanteWhereUniqueInput | hstparticipanteWhereUniqueInput[]
    delete?: hstparticipanteWhereUniqueInput | hstparticipanteWhereUniqueInput[]
    connect?: hstparticipanteWhereUniqueInput | hstparticipanteWhereUniqueInput[]
    update?: hstparticipanteUpdateWithWhereUniqueWithoutParticipanteInput | hstparticipanteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: hstparticipanteUpdateManyWithWhereWithoutParticipanteInput | hstparticipanteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: hstparticipanteScalarWhereInput | hstparticipanteScalarWhereInput[]
  }

  export type inscricaoUncheckedUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<inscricaoCreateWithoutParticipanteInput, inscricaoUncheckedCreateWithoutParticipanteInput> | inscricaoCreateWithoutParticipanteInput[] | inscricaoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: inscricaoCreateOrConnectWithoutParticipanteInput | inscricaoCreateOrConnectWithoutParticipanteInput[]
    upsert?: inscricaoUpsertWithWhereUniqueWithoutParticipanteInput | inscricaoUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: inscricaoCreateManyParticipanteInputEnvelope
    set?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    disconnect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    delete?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    connect?: inscricaoWhereUniqueInput | inscricaoWhereUniqueInput[]
    update?: inscricaoUpdateWithWhereUniqueWithoutParticipanteInput | inscricaoUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: inscricaoUpdateManyWithWhereWithoutParticipanteInput | inscricaoUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: inscricaoScalarWhereInput | inscricaoScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type inscricaoCreateWithoutAtividadeInput = {
    Id?: string
    Ativo?: boolean
    participante: participanteCreateNestedOneWithoutInscricaoInput
  }

  export type inscricaoUncheckedCreateWithoutAtividadeInput = {
    Id?: string
    Ativo?: boolean
    IdParticipante: string
  }

  export type inscricaoCreateOrConnectWithoutAtividadeInput = {
    where: inscricaoWhereUniqueInput
    create: XOR<inscricaoCreateWithoutAtividadeInput, inscricaoUncheckedCreateWithoutAtividadeInput>
  }

  export type inscricaoCreateManyAtividadeInputEnvelope = {
    data: inscricaoCreateManyAtividadeInput | inscricaoCreateManyAtividadeInput[]
    skipDuplicates?: boolean
  }

  export type inscricaoUpsertWithWhereUniqueWithoutAtividadeInput = {
    where: inscricaoWhereUniqueInput
    update: XOR<inscricaoUpdateWithoutAtividadeInput, inscricaoUncheckedUpdateWithoutAtividadeInput>
    create: XOR<inscricaoCreateWithoutAtividadeInput, inscricaoUncheckedCreateWithoutAtividadeInput>
  }

  export type inscricaoUpdateWithWhereUniqueWithoutAtividadeInput = {
    where: inscricaoWhereUniqueInput
    data: XOR<inscricaoUpdateWithoutAtividadeInput, inscricaoUncheckedUpdateWithoutAtividadeInput>
  }

  export type inscricaoUpdateManyWithWhereWithoutAtividadeInput = {
    where: inscricaoScalarWhereInput
    data: XOR<inscricaoUpdateManyMutationInput, inscricaoUncheckedUpdateManyWithoutAtividadeInput>
  }

  export type inscricaoScalarWhereInput = {
    AND?: inscricaoScalarWhereInput | inscricaoScalarWhereInput[]
    OR?: inscricaoScalarWhereInput[]
    NOT?: inscricaoScalarWhereInput | inscricaoScalarWhereInput[]
    Id?: StringFilter<"inscricao"> | string
    Ativo?: BoolFilter<"inscricao"> | boolean
    IdParticipante?: StringFilter<"inscricao"> | string
    IdAtividade?: StringFilter<"inscricao"> | string
  }

  export type participanteCreateWithoutHstparticipanteInput = {
    Id?: string
    Nome: string
    Email: string
    Telefone: string
    Ativo?: boolean
    HashSenha: string
    inscricao?: inscricaoCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUncheckedCreateWithoutHstparticipanteInput = {
    Id?: string
    Nome: string
    Email: string
    Telefone: string
    Ativo?: boolean
    HashSenha: string
    inscricao?: inscricaoUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type participanteCreateOrConnectWithoutHstparticipanteInput = {
    where: participanteWhereUniqueInput
    create: XOR<participanteCreateWithoutHstparticipanteInput, participanteUncheckedCreateWithoutHstparticipanteInput>
  }

  export type participanteUpsertWithoutHstparticipanteInput = {
    update: XOR<participanteUpdateWithoutHstparticipanteInput, participanteUncheckedUpdateWithoutHstparticipanteInput>
    create: XOR<participanteCreateWithoutHstparticipanteInput, participanteUncheckedCreateWithoutHstparticipanteInput>
    where?: participanteWhereInput
  }

  export type participanteUpdateToOneWithWhereWithoutHstparticipanteInput = {
    where?: participanteWhereInput
    data: XOR<participanteUpdateWithoutHstparticipanteInput, participanteUncheckedUpdateWithoutHstparticipanteInput>
  }

  export type participanteUpdateWithoutHstparticipanteInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefone?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    HashSenha?: StringFieldUpdateOperationsInput | string
    inscricao?: inscricaoUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteUncheckedUpdateWithoutHstparticipanteInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefone?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    HashSenha?: StringFieldUpdateOperationsInput | string
    inscricao?: inscricaoUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteCreateWithoutInscricaoInput = {
    Id?: string
    Nome: string
    Email: string
    Telefone: string
    Ativo?: boolean
    HashSenha: string
    hstparticipante?: hstparticipanteCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUncheckedCreateWithoutInscricaoInput = {
    Id?: string
    Nome: string
    Email: string
    Telefone: string
    Ativo?: boolean
    HashSenha: string
    hstparticipante?: hstparticipanteUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type participanteCreateOrConnectWithoutInscricaoInput = {
    where: participanteWhereUniqueInput
    create: XOR<participanteCreateWithoutInscricaoInput, participanteUncheckedCreateWithoutInscricaoInput>
  }

  export type atividadeCreateWithoutInscricaoInput = {
    Id?: string
    Ativo?: boolean
    Nome: string
    Descricao?: string | null
    VagasRestantes?: number
    Vagas?: number
    Horario?: string | null
  }

  export type atividadeUncheckedCreateWithoutInscricaoInput = {
    Id?: string
    Ativo?: boolean
    Nome: string
    Descricao?: string | null
    VagasRestantes?: number
    Vagas?: number
    Horario?: string | null
  }

  export type atividadeCreateOrConnectWithoutInscricaoInput = {
    where: atividadeWhereUniqueInput
    create: XOR<atividadeCreateWithoutInscricaoInput, atividadeUncheckedCreateWithoutInscricaoInput>
  }

  export type participanteUpsertWithoutInscricaoInput = {
    update: XOR<participanteUpdateWithoutInscricaoInput, participanteUncheckedUpdateWithoutInscricaoInput>
    create: XOR<participanteCreateWithoutInscricaoInput, participanteUncheckedCreateWithoutInscricaoInput>
    where?: participanteWhereInput
  }

  export type participanteUpdateToOneWithWhereWithoutInscricaoInput = {
    where?: participanteWhereInput
    data: XOR<participanteUpdateWithoutInscricaoInput, participanteUncheckedUpdateWithoutInscricaoInput>
  }

  export type participanteUpdateWithoutInscricaoInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefone?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    HashSenha?: StringFieldUpdateOperationsInput | string
    hstparticipante?: hstparticipanteUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteUncheckedUpdateWithoutInscricaoInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefone?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    HashSenha?: StringFieldUpdateOperationsInput | string
    hstparticipante?: hstparticipanteUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type atividadeUpsertWithoutInscricaoInput = {
    update: XOR<atividadeUpdateWithoutInscricaoInput, atividadeUncheckedUpdateWithoutInscricaoInput>
    create: XOR<atividadeCreateWithoutInscricaoInput, atividadeUncheckedCreateWithoutInscricaoInput>
    where?: atividadeWhereInput
  }

  export type atividadeUpdateToOneWithWhereWithoutInscricaoInput = {
    where?: atividadeWhereInput
    data: XOR<atividadeUpdateWithoutInscricaoInput, atividadeUncheckedUpdateWithoutInscricaoInput>
  }

  export type atividadeUpdateWithoutInscricaoInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    Nome?: StringFieldUpdateOperationsInput | string
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    VagasRestantes?: IntFieldUpdateOperationsInput | number
    Vagas?: IntFieldUpdateOperationsInput | number
    Horario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type atividadeUncheckedUpdateWithoutInscricaoInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    Nome?: StringFieldUpdateOperationsInput | string
    Descricao?: NullableStringFieldUpdateOperationsInput | string | null
    VagasRestantes?: IntFieldUpdateOperationsInput | number
    Vagas?: IntFieldUpdateOperationsInput | number
    Horario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hstparticipanteCreateWithoutParticipanteInput = {
    email: string
  }

  export type hstparticipanteUncheckedCreateWithoutParticipanteInput = {
    ID?: number
    email: string
  }

  export type hstparticipanteCreateOrConnectWithoutParticipanteInput = {
    where: hstparticipanteWhereUniqueInput
    create: XOR<hstparticipanteCreateWithoutParticipanteInput, hstparticipanteUncheckedCreateWithoutParticipanteInput>
  }

  export type hstparticipanteCreateManyParticipanteInputEnvelope = {
    data: hstparticipanteCreateManyParticipanteInput | hstparticipanteCreateManyParticipanteInput[]
    skipDuplicates?: boolean
  }

  export type inscricaoCreateWithoutParticipanteInput = {
    Id?: string
    Ativo?: boolean
    atividade: atividadeCreateNestedOneWithoutInscricaoInput
  }

  export type inscricaoUncheckedCreateWithoutParticipanteInput = {
    Id?: string
    Ativo?: boolean
    IdAtividade: string
  }

  export type inscricaoCreateOrConnectWithoutParticipanteInput = {
    where: inscricaoWhereUniqueInput
    create: XOR<inscricaoCreateWithoutParticipanteInput, inscricaoUncheckedCreateWithoutParticipanteInput>
  }

  export type inscricaoCreateManyParticipanteInputEnvelope = {
    data: inscricaoCreateManyParticipanteInput | inscricaoCreateManyParticipanteInput[]
    skipDuplicates?: boolean
  }

  export type hstparticipanteUpsertWithWhereUniqueWithoutParticipanteInput = {
    where: hstparticipanteWhereUniqueInput
    update: XOR<hstparticipanteUpdateWithoutParticipanteInput, hstparticipanteUncheckedUpdateWithoutParticipanteInput>
    create: XOR<hstparticipanteCreateWithoutParticipanteInput, hstparticipanteUncheckedCreateWithoutParticipanteInput>
  }

  export type hstparticipanteUpdateWithWhereUniqueWithoutParticipanteInput = {
    where: hstparticipanteWhereUniqueInput
    data: XOR<hstparticipanteUpdateWithoutParticipanteInput, hstparticipanteUncheckedUpdateWithoutParticipanteInput>
  }

  export type hstparticipanteUpdateManyWithWhereWithoutParticipanteInput = {
    where: hstparticipanteScalarWhereInput
    data: XOR<hstparticipanteUpdateManyMutationInput, hstparticipanteUncheckedUpdateManyWithoutParticipanteInput>
  }

  export type hstparticipanteScalarWhereInput = {
    AND?: hstparticipanteScalarWhereInput | hstparticipanteScalarWhereInput[]
    OR?: hstparticipanteScalarWhereInput[]
    NOT?: hstparticipanteScalarWhereInput | hstparticipanteScalarWhereInput[]
    ID?: IntFilter<"hstparticipante"> | number
    email?: StringFilter<"hstparticipante"> | string
    IdParticipante?: StringFilter<"hstparticipante"> | string
  }

  export type inscricaoUpsertWithWhereUniqueWithoutParticipanteInput = {
    where: inscricaoWhereUniqueInput
    update: XOR<inscricaoUpdateWithoutParticipanteInput, inscricaoUncheckedUpdateWithoutParticipanteInput>
    create: XOR<inscricaoCreateWithoutParticipanteInput, inscricaoUncheckedCreateWithoutParticipanteInput>
  }

  export type inscricaoUpdateWithWhereUniqueWithoutParticipanteInput = {
    where: inscricaoWhereUniqueInput
    data: XOR<inscricaoUpdateWithoutParticipanteInput, inscricaoUncheckedUpdateWithoutParticipanteInput>
  }

  export type inscricaoUpdateManyWithWhereWithoutParticipanteInput = {
    where: inscricaoScalarWhereInput
    data: XOR<inscricaoUpdateManyMutationInput, inscricaoUncheckedUpdateManyWithoutParticipanteInput>
  }

  export type inscricaoCreateManyAtividadeInput = {
    Id?: string
    Ativo?: boolean
    IdParticipante: string
  }

  export type inscricaoUpdateWithoutAtividadeInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    participante?: participanteUpdateOneRequiredWithoutInscricaoNestedInput
  }

  export type inscricaoUncheckedUpdateWithoutAtividadeInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    IdParticipante?: StringFieldUpdateOperationsInput | string
  }

  export type inscricaoUncheckedUpdateManyWithoutAtividadeInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    IdParticipante?: StringFieldUpdateOperationsInput | string
  }

  export type hstparticipanteCreateManyParticipanteInput = {
    ID?: number
    email: string
  }

  export type inscricaoCreateManyParticipanteInput = {
    Id?: string
    Ativo?: boolean
    IdAtividade: string
  }

  export type hstparticipanteUpdateWithoutParticipanteInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type hstparticipanteUncheckedUpdateWithoutParticipanteInput = {
    ID?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type hstparticipanteUncheckedUpdateManyWithoutParticipanteInput = {
    ID?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type inscricaoUpdateWithoutParticipanteInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    atividade?: atividadeUpdateOneRequiredWithoutInscricaoNestedInput
  }

  export type inscricaoUncheckedUpdateWithoutParticipanteInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    IdAtividade?: StringFieldUpdateOperationsInput | string
  }

  export type inscricaoUncheckedUpdateManyWithoutParticipanteInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Ativo?: BoolFieldUpdateOperationsInput | boolean
    IdAtividade?: StringFieldUpdateOperationsInput | string
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