
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
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>
/**
 * Model evento
 * 
 */
export type evento = $Result.DefaultSelection<Prisma.$eventoPayload>
/**
 * Model historico_participante
 * 
 */
export type historico_participante = $Result.DefaultSelection<Prisma.$historico_participantePayload>
/**
 * Model inscricao_evento
 * 
 */
export type inscricao_evento = $Result.DefaultSelection<Prisma.$inscricao_eventoPayload>
/**
 * Model participante
 * 
 */
export type participante = $Result.DefaultSelection<Prisma.$participantePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
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
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.eventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico_participante`: Exposes CRUD operations for the **historico_participante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historico_participantes
    * const historico_participantes = await prisma.historico_participante.findMany()
    * ```
    */
  get historico_participante(): Prisma.historico_participanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscricao_evento`: Exposes CRUD operations for the **inscricao_evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscricao_eventos
    * const inscricao_eventos = await prisma.inscricao_evento.findMany()
    * ```
    */
  get inscricao_evento(): Prisma.inscricao_eventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participante`: Exposes CRUD operations for the **participante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participantes
    * const participantes = await prisma.participante.findMany()
    * ```
    */
  get participante(): Prisma.participanteDelegate<ExtArgs, ClientOptions>;
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
    categoria: 'categoria',
    evento: 'evento',
    historico_participante: 'historico_participante',
    inscricao_evento: 'inscricao_evento',
    participante: 'participante'
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
      modelProps: "categoria" | "evento" | "historico_participante" | "inscricao_evento" | "participante"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      evento: {
        payload: Prisma.$eventoPayload<ExtArgs>
        fields: Prisma.eventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          findFirst: {
            args: Prisma.eventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          findMany: {
            args: Prisma.eventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>[]
          }
          create: {
            args: Prisma.eventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          createMany: {
            args: Prisma.eventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.eventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          update: {
            args: Prisma.eventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          deleteMany: {
            args: Prisma.eventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.eventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      historico_participante: {
        payload: Prisma.$historico_participantePayload<ExtArgs>
        fields: Prisma.historico_participanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historico_participanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_participantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historico_participanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_participantePayload>
          }
          findFirst: {
            args: Prisma.historico_participanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_participantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historico_participanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_participantePayload>
          }
          findMany: {
            args: Prisma.historico_participanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_participantePayload>[]
          }
          create: {
            args: Prisma.historico_participanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_participantePayload>
          }
          createMany: {
            args: Prisma.historico_participanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.historico_participanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_participantePayload>
          }
          update: {
            args: Prisma.historico_participanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_participantePayload>
          }
          deleteMany: {
            args: Prisma.historico_participanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historico_participanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.historico_participanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_participantePayload>
          }
          aggregate: {
            args: Prisma.Historico_participanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico_participante>
          }
          groupBy: {
            args: Prisma.historico_participanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historico_participanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.historico_participanteCountArgs<ExtArgs>
            result: $Utils.Optional<Historico_participanteCountAggregateOutputType> | number
          }
        }
      }
      inscricao_evento: {
        payload: Prisma.$inscricao_eventoPayload<ExtArgs>
        fields: Prisma.inscricao_eventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inscricao_eventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricao_eventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inscricao_eventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricao_eventoPayload>
          }
          findFirst: {
            args: Prisma.inscricao_eventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricao_eventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inscricao_eventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricao_eventoPayload>
          }
          findMany: {
            args: Prisma.inscricao_eventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricao_eventoPayload>[]
          }
          create: {
            args: Prisma.inscricao_eventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricao_eventoPayload>
          }
          createMany: {
            args: Prisma.inscricao_eventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inscricao_eventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricao_eventoPayload>
          }
          update: {
            args: Prisma.inscricao_eventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricao_eventoPayload>
          }
          deleteMany: {
            args: Prisma.inscricao_eventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inscricao_eventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inscricao_eventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscricao_eventoPayload>
          }
          aggregate: {
            args: Prisma.Inscricao_eventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscricao_evento>
          }
          groupBy: {
            args: Prisma.inscricao_eventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inscricao_eventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.inscricao_eventoCountArgs<ExtArgs>
            result: $Utils.Optional<Inscricao_eventoCountAggregateOutputType> | number
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
    categoria?: categoriaOmit
    evento?: eventoOmit
    historico_participante?: historico_participanteOmit
    inscricao_evento?: inscricao_eventoOmit
    participante?: participanteOmit
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
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    evento: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | CategoriaCountOutputTypeCountEventoArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountEventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventoWhereInput
  }


  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    inscricao_evento: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricao_evento?: boolean | EventoCountOutputTypeCountInscricao_eventoArgs
  }

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountInscricao_eventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscricao_eventoWhereInput
  }


  /**
   * Count Type ParticipanteCountOutputType
   */

  export type ParticipanteCountOutputType = {
    historico_participante: number
    inscricao_evento: number
  }

  export type ParticipanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico_participante?: boolean | ParticipanteCountOutputTypeCountHistorico_participanteArgs
    inscricao_evento?: boolean | ParticipanteCountOutputTypeCountInscricao_eventoArgs
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
  export type ParticipanteCountOutputTypeCountHistorico_participanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historico_participanteWhereInput
  }

  /**
   * ParticipanteCountOutputType without action
   */
  export type ParticipanteCountOutputTypeCountInscricao_eventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscricao_eventoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    ativo: boolean | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    ativo: boolean | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    ativo: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    ativo?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    ativo?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    ativo?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    ativo: boolean
    nome: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ativo?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | categoria$eventoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type categoriaSelectScalar = {
    id?: boolean
    ativo?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type categoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ativo" | "nome" | "createdAt" | "updatedAt", ExtArgs["result"]["categoria"]>
  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | categoria$eventoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      evento: Prisma.$eventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ativo: boolean
      nome: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriaFindUniqueArgs>(args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriaFindFirstArgs>(args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriaFindManyArgs>(args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends categoriaCreateArgs>(args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriaCreateManyArgs>(args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends categoriaDeleteArgs>(args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriaUpdateArgs>(args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriaDeleteManyArgs>(args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriaUpdateManyArgs>(args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends categoriaUpsertArgs>(args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
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
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends categoria$eventoArgs<ExtArgs> = {}>(args?: Subset<T, categoria$eventoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categoria model
   */
  interface categoriaFieldRefs {
    readonly id: FieldRef<"categoria", 'String'>
    readonly ativo: FieldRef<"categoria", 'Boolean'>
    readonly nome: FieldRef<"categoria", 'String'>
    readonly createdAt: FieldRef<"categoria", 'DateTime'>
    readonly updatedAt: FieldRef<"categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }

  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }

  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categoria.evento
   */
  export type categoria$eventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    where?: eventoWhereInput
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    cursor?: eventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
  }


  /**
   * Model evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    vagas: number | null
  }

  export type EventoSumAggregateOutputType = {
    vagas: number | null
  }

  export type EventoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    dataEvento: Date | null
    vagas: number | null
    idCategoria: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ativo: boolean | null
  }

  export type EventoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    dataEvento: Date | null
    vagas: number | null
    idCategoria: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ativo: boolean | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    nome: number
    dataEvento: number
    vagas: number
    idCategoria: number
    createdAt: number
    updatedAt: number
    ativo: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    vagas?: true
  }

  export type EventoSumAggregateInputType = {
    vagas?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    nome?: true
    dataEvento?: true
    vagas?: true
    idCategoria?: true
    createdAt?: true
    updatedAt?: true
    ativo?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    nome?: true
    dataEvento?: true
    vagas?: true
    idCategoria?: true
    createdAt?: true
    updatedAt?: true
    ativo?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    nome?: true
    dataEvento?: true
    vagas?: true
    idCategoria?: true
    createdAt?: true
    updatedAt?: true
    ativo?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evento to aggregate.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type eventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventoWhereInput
    orderBy?: eventoOrderByWithAggregationInput | eventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: eventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: string
    nome: string
    dataEvento: Date
    vagas: number
    idCategoria: string
    createdAt: Date | null
    updatedAt: Date | null
    ativo: boolean | null
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends eventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type eventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataEvento?: boolean
    vagas?: boolean
    idCategoria?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ativo?: boolean
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    inscricao_evento?: boolean | evento$inscricao_eventoArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>



  export type eventoSelectScalar = {
    id?: boolean
    nome?: boolean
    dataEvento?: boolean
    vagas?: boolean
    idCategoria?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ativo?: boolean
  }

  export type eventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "dataEvento" | "vagas" | "idCategoria" | "createdAt" | "updatedAt" | "ativo", ExtArgs["result"]["evento"]>
  export type eventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    inscricao_evento?: boolean | evento$inscricao_eventoArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $eventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evento"
    objects: {
      categoria: Prisma.$categoriaPayload<ExtArgs>
      inscricao_evento: Prisma.$inscricao_eventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      dataEvento: Date
      vagas: number
      idCategoria: string
      createdAt: Date | null
      updatedAt: Date | null
      ativo: boolean | null
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type eventoGetPayload<S extends boolean | null | undefined | eventoDefaultArgs> = $Result.GetResult<Prisma.$eventoPayload, S>

  type eventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface eventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evento'], meta: { name: 'evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {eventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventoFindUniqueArgs>(args: SelectSubset<T, eventoFindUniqueArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventoFindUniqueOrThrowArgs>(args: SelectSubset<T, eventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventoFindFirstArgs>(args?: SelectSubset<T, eventoFindFirstArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventoFindFirstOrThrowArgs>(args?: SelectSubset<T, eventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventoFindManyArgs>(args?: SelectSubset<T, eventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {eventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends eventoCreateArgs>(args: SelectSubset<T, eventoCreateArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {eventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventoCreateManyArgs>(args?: SelectSubset<T, eventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evento.
     * @param {eventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends eventoDeleteArgs>(args: SelectSubset<T, eventoDeleteArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {eventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventoUpdateArgs>(args: SelectSubset<T, eventoUpdateArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {eventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventoDeleteManyArgs>(args?: SelectSubset<T, eventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventoUpdateManyArgs>(args: SelectSubset<T, eventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evento.
     * @param {eventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends eventoUpsertArgs>(args: SelectSubset<T, eventoUpsertArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends eventoCountArgs>(
      args?: Subset<T, eventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoGroupByArgs} args - Group by arguments.
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
      T extends eventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventoGroupByArgs['orderBy'] }
        : { orderBy?: eventoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evento model
   */
  readonly fields: eventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends categoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriaDefaultArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inscricao_evento<T extends evento$inscricao_eventoArgs<ExtArgs> = {}>(args?: Subset<T, evento$inscricao_eventoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the evento model
   */
  interface eventoFieldRefs {
    readonly id: FieldRef<"evento", 'String'>
    readonly nome: FieldRef<"evento", 'String'>
    readonly dataEvento: FieldRef<"evento", 'DateTime'>
    readonly vagas: FieldRef<"evento", 'Int'>
    readonly idCategoria: FieldRef<"evento", 'String'>
    readonly createdAt: FieldRef<"evento", 'DateTime'>
    readonly updatedAt: FieldRef<"evento", 'DateTime'>
    readonly ativo: FieldRef<"evento", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * evento findUnique
   */
  export type eventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento findUniqueOrThrow
   */
  export type eventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento findFirst
   */
  export type eventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * evento findFirstOrThrow
   */
  export type eventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * evento findMany
   */
  export type eventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos.
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * evento create
   */
  export type eventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * The data needed to create a evento.
     */
    data: XOR<eventoCreateInput, eventoUncheckedCreateInput>
  }

  /**
   * evento createMany
   */
  export type eventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos.
     */
    data: eventoCreateManyInput | eventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evento update
   */
  export type eventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * The data needed to update a evento.
     */
    data: XOR<eventoUpdateInput, eventoUncheckedUpdateInput>
    /**
     * Choose, which evento to update.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento updateMany
   */
  export type eventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos.
     */
    data: XOR<eventoUpdateManyMutationInput, eventoUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventoWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
  }

  /**
   * evento upsert
   */
  export type eventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * The filter to search for the evento to update in case it exists.
     */
    where: eventoWhereUniqueInput
    /**
     * In case the evento found by the `where` argument doesn't exist, create a new evento with this data.
     */
    create: XOR<eventoCreateInput, eventoUncheckedCreateInput>
    /**
     * In case the evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventoUpdateInput, eventoUncheckedUpdateInput>
  }

  /**
   * evento delete
   */
  export type eventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter which evento to delete.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento deleteMany
   */
  export type eventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to delete
     */
    where?: eventoWhereInput
    /**
     * Limit how many eventos to delete.
     */
    limit?: number
  }

  /**
   * evento.inscricao_evento
   */
  export type evento$inscricao_eventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    where?: inscricao_eventoWhereInput
    orderBy?: inscricao_eventoOrderByWithRelationInput | inscricao_eventoOrderByWithRelationInput[]
    cursor?: inscricao_eventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inscricao_eventoScalarFieldEnum | Inscricao_eventoScalarFieldEnum[]
  }

  /**
   * evento without action
   */
  export type eventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
  }


  /**
   * Model historico_participante
   */

  export type AggregateHistorico_participante = {
    _count: Historico_participanteCountAggregateOutputType | null
    _avg: Historico_participanteAvgAggregateOutputType | null
    _sum: Historico_participanteSumAggregateOutputType | null
    _min: Historico_participanteMinAggregateOutputType | null
    _max: Historico_participanteMaxAggregateOutputType | null
  }

  export type Historico_participanteAvgAggregateOutputType = {
    id: number | null
  }

  export type Historico_participanteSumAggregateOutputType = {
    id: number | null
  }

  export type Historico_participanteMinAggregateOutputType = {
    id: number | null
    email: string | null
    idParticipante: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Historico_participanteMaxAggregateOutputType = {
    id: number | null
    email: string | null
    idParticipante: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Historico_participanteCountAggregateOutputType = {
    id: number
    email: number
    idParticipante: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Historico_participanteAvgAggregateInputType = {
    id?: true
  }

  export type Historico_participanteSumAggregateInputType = {
    id?: true
  }

  export type Historico_participanteMinAggregateInputType = {
    id?: true
    email?: true
    idParticipante?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Historico_participanteMaxAggregateInputType = {
    id?: true
    email?: true
    idParticipante?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Historico_participanteCountAggregateInputType = {
    id?: true
    email?: true
    idParticipante?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Historico_participanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historico_participante to aggregate.
     */
    where?: historico_participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_participantes to fetch.
     */
    orderBy?: historico_participanteOrderByWithRelationInput | historico_participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historico_participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historico_participantes
    **/
    _count?: true | Historico_participanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historico_participanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historico_participanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historico_participanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historico_participanteMaxAggregateInputType
  }

  export type GetHistorico_participanteAggregateType<T extends Historico_participanteAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico_participante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico_participante[P]>
      : GetScalarType<T[P], AggregateHistorico_participante[P]>
  }




  export type historico_participanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historico_participanteWhereInput
    orderBy?: historico_participanteOrderByWithAggregationInput | historico_participanteOrderByWithAggregationInput[]
    by: Historico_participanteScalarFieldEnum[] | Historico_participanteScalarFieldEnum
    having?: historico_participanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historico_participanteCountAggregateInputType | true
    _avg?: Historico_participanteAvgAggregateInputType
    _sum?: Historico_participanteSumAggregateInputType
    _min?: Historico_participanteMinAggregateInputType
    _max?: Historico_participanteMaxAggregateInputType
  }

  export type Historico_participanteGroupByOutputType = {
    id: number
    email: string
    idParticipante: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: Historico_participanteCountAggregateOutputType | null
    _avg: Historico_participanteAvgAggregateOutputType | null
    _sum: Historico_participanteSumAggregateOutputType | null
    _min: Historico_participanteMinAggregateOutputType | null
    _max: Historico_participanteMaxAggregateOutputType | null
  }

  type GetHistorico_participanteGroupByPayload<T extends historico_participanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historico_participanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historico_participanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historico_participanteGroupByOutputType[P]>
            : GetScalarType<T[P], Historico_participanteGroupByOutputType[P]>
        }
      >
    >


  export type historico_participanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    idParticipante?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participante?: boolean | participanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_participante"]>



  export type historico_participanteSelectScalar = {
    id?: boolean
    email?: boolean
    idParticipante?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type historico_participanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "idParticipante" | "createdAt" | "updatedAt", ExtArgs["result"]["historico_participante"]>
  export type historico_participanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participante?: boolean | participanteDefaultArgs<ExtArgs>
  }

  export type $historico_participantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historico_participante"
    objects: {
      participante: Prisma.$participantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      idParticipante: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["historico_participante"]>
    composites: {}
  }

  type historico_participanteGetPayload<S extends boolean | null | undefined | historico_participanteDefaultArgs> = $Result.GetResult<Prisma.$historico_participantePayload, S>

  type historico_participanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historico_participanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historico_participanteCountAggregateInputType | true
    }

  export interface historico_participanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historico_participante'], meta: { name: 'historico_participante' } }
    /**
     * Find zero or one Historico_participante that matches the filter.
     * @param {historico_participanteFindUniqueArgs} args - Arguments to find a Historico_participante
     * @example
     * // Get one Historico_participante
     * const historico_participante = await prisma.historico_participante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historico_participanteFindUniqueArgs>(args: SelectSubset<T, historico_participanteFindUniqueArgs<ExtArgs>>): Prisma__historico_participanteClient<$Result.GetResult<Prisma.$historico_participantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico_participante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historico_participanteFindUniqueOrThrowArgs} args - Arguments to find a Historico_participante
     * @example
     * // Get one Historico_participante
     * const historico_participante = await prisma.historico_participante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historico_participanteFindUniqueOrThrowArgs>(args: SelectSubset<T, historico_participanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historico_participanteClient<$Result.GetResult<Prisma.$historico_participantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_participante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_participanteFindFirstArgs} args - Arguments to find a Historico_participante
     * @example
     * // Get one Historico_participante
     * const historico_participante = await prisma.historico_participante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historico_participanteFindFirstArgs>(args?: SelectSubset<T, historico_participanteFindFirstArgs<ExtArgs>>): Prisma__historico_participanteClient<$Result.GetResult<Prisma.$historico_participantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_participante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_participanteFindFirstOrThrowArgs} args - Arguments to find a Historico_participante
     * @example
     * // Get one Historico_participante
     * const historico_participante = await prisma.historico_participante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historico_participanteFindFirstOrThrowArgs>(args?: SelectSubset<T, historico_participanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__historico_participanteClient<$Result.GetResult<Prisma.$historico_participantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historico_participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_participanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historico_participantes
     * const historico_participantes = await prisma.historico_participante.findMany()
     * 
     * // Get first 10 Historico_participantes
     * const historico_participantes = await prisma.historico_participante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historico_participanteWithIdOnly = await prisma.historico_participante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends historico_participanteFindManyArgs>(args?: SelectSubset<T, historico_participanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_participantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico_participante.
     * @param {historico_participanteCreateArgs} args - Arguments to create a Historico_participante.
     * @example
     * // Create one Historico_participante
     * const Historico_participante = await prisma.historico_participante.create({
     *   data: {
     *     // ... data to create a Historico_participante
     *   }
     * })
     * 
     */
    create<T extends historico_participanteCreateArgs>(args: SelectSubset<T, historico_participanteCreateArgs<ExtArgs>>): Prisma__historico_participanteClient<$Result.GetResult<Prisma.$historico_participantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historico_participantes.
     * @param {historico_participanteCreateManyArgs} args - Arguments to create many Historico_participantes.
     * @example
     * // Create many Historico_participantes
     * const historico_participante = await prisma.historico_participante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historico_participanteCreateManyArgs>(args?: SelectSubset<T, historico_participanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historico_participante.
     * @param {historico_participanteDeleteArgs} args - Arguments to delete one Historico_participante.
     * @example
     * // Delete one Historico_participante
     * const Historico_participante = await prisma.historico_participante.delete({
     *   where: {
     *     // ... filter to delete one Historico_participante
     *   }
     * })
     * 
     */
    delete<T extends historico_participanteDeleteArgs>(args: SelectSubset<T, historico_participanteDeleteArgs<ExtArgs>>): Prisma__historico_participanteClient<$Result.GetResult<Prisma.$historico_participantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico_participante.
     * @param {historico_participanteUpdateArgs} args - Arguments to update one Historico_participante.
     * @example
     * // Update one Historico_participante
     * const historico_participante = await prisma.historico_participante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historico_participanteUpdateArgs>(args: SelectSubset<T, historico_participanteUpdateArgs<ExtArgs>>): Prisma__historico_participanteClient<$Result.GetResult<Prisma.$historico_participantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historico_participantes.
     * @param {historico_participanteDeleteManyArgs} args - Arguments to filter Historico_participantes to delete.
     * @example
     * // Delete a few Historico_participantes
     * const { count } = await prisma.historico_participante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historico_participanteDeleteManyArgs>(args?: SelectSubset<T, historico_participanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_participanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historico_participantes
     * const historico_participante = await prisma.historico_participante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historico_participanteUpdateManyArgs>(args: SelectSubset<T, historico_participanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historico_participante.
     * @param {historico_participanteUpsertArgs} args - Arguments to update or create a Historico_participante.
     * @example
     * // Update or create a Historico_participante
     * const historico_participante = await prisma.historico_participante.upsert({
     *   create: {
     *     // ... data to create a Historico_participante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico_participante we want to update
     *   }
     * })
     */
    upsert<T extends historico_participanteUpsertArgs>(args: SelectSubset<T, historico_participanteUpsertArgs<ExtArgs>>): Prisma__historico_participanteClient<$Result.GetResult<Prisma.$historico_participantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historico_participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_participanteCountArgs} args - Arguments to filter Historico_participantes to count.
     * @example
     * // Count the number of Historico_participantes
     * const count = await prisma.historico_participante.count({
     *   where: {
     *     // ... the filter for the Historico_participantes we want to count
     *   }
     * })
    **/
    count<T extends historico_participanteCountArgs>(
      args?: Subset<T, historico_participanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historico_participanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico_participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_participanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historico_participanteAggregateArgs>(args: Subset<T, Historico_participanteAggregateArgs>): Prisma.PrismaPromise<GetHistorico_participanteAggregateType<T>>

    /**
     * Group by Historico_participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_participanteGroupByArgs} args - Group by arguments.
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
      T extends historico_participanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historico_participanteGroupByArgs['orderBy'] }
        : { orderBy?: historico_participanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, historico_participanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorico_participanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historico_participante model
   */
  readonly fields: historico_participanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historico_participante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historico_participanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the historico_participante model
   */
  interface historico_participanteFieldRefs {
    readonly id: FieldRef<"historico_participante", 'Int'>
    readonly email: FieldRef<"historico_participante", 'String'>
    readonly idParticipante: FieldRef<"historico_participante", 'String'>
    readonly createdAt: FieldRef<"historico_participante", 'DateTime'>
    readonly updatedAt: FieldRef<"historico_participante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * historico_participante findUnique
   */
  export type historico_participanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
    /**
     * Filter, which historico_participante to fetch.
     */
    where: historico_participanteWhereUniqueInput
  }

  /**
   * historico_participante findUniqueOrThrow
   */
  export type historico_participanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
    /**
     * Filter, which historico_participante to fetch.
     */
    where: historico_participanteWhereUniqueInput
  }

  /**
   * historico_participante findFirst
   */
  export type historico_participanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
    /**
     * Filter, which historico_participante to fetch.
     */
    where?: historico_participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_participantes to fetch.
     */
    orderBy?: historico_participanteOrderByWithRelationInput | historico_participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historico_participantes.
     */
    cursor?: historico_participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historico_participantes.
     */
    distinct?: Historico_participanteScalarFieldEnum | Historico_participanteScalarFieldEnum[]
  }

  /**
   * historico_participante findFirstOrThrow
   */
  export type historico_participanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
    /**
     * Filter, which historico_participante to fetch.
     */
    where?: historico_participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_participantes to fetch.
     */
    orderBy?: historico_participanteOrderByWithRelationInput | historico_participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historico_participantes.
     */
    cursor?: historico_participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historico_participantes.
     */
    distinct?: Historico_participanteScalarFieldEnum | Historico_participanteScalarFieldEnum[]
  }

  /**
   * historico_participante findMany
   */
  export type historico_participanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
    /**
     * Filter, which historico_participantes to fetch.
     */
    where?: historico_participanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_participantes to fetch.
     */
    orderBy?: historico_participanteOrderByWithRelationInput | historico_participanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historico_participantes.
     */
    cursor?: historico_participanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historico_participantes.
     */
    distinct?: Historico_participanteScalarFieldEnum | Historico_participanteScalarFieldEnum[]
  }

  /**
   * historico_participante create
   */
  export type historico_participanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
    /**
     * The data needed to create a historico_participante.
     */
    data: XOR<historico_participanteCreateInput, historico_participanteUncheckedCreateInput>
  }

  /**
   * historico_participante createMany
   */
  export type historico_participanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historico_participantes.
     */
    data: historico_participanteCreateManyInput | historico_participanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historico_participante update
   */
  export type historico_participanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
    /**
     * The data needed to update a historico_participante.
     */
    data: XOR<historico_participanteUpdateInput, historico_participanteUncheckedUpdateInput>
    /**
     * Choose, which historico_participante to update.
     */
    where: historico_participanteWhereUniqueInput
  }

  /**
   * historico_participante updateMany
   */
  export type historico_participanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historico_participantes.
     */
    data: XOR<historico_participanteUpdateManyMutationInput, historico_participanteUncheckedUpdateManyInput>
    /**
     * Filter which historico_participantes to update
     */
    where?: historico_participanteWhereInput
    /**
     * Limit how many historico_participantes to update.
     */
    limit?: number
  }

  /**
   * historico_participante upsert
   */
  export type historico_participanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
    /**
     * The filter to search for the historico_participante to update in case it exists.
     */
    where: historico_participanteWhereUniqueInput
    /**
     * In case the historico_participante found by the `where` argument doesn't exist, create a new historico_participante with this data.
     */
    create: XOR<historico_participanteCreateInput, historico_participanteUncheckedCreateInput>
    /**
     * In case the historico_participante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historico_participanteUpdateInput, historico_participanteUncheckedUpdateInput>
  }

  /**
   * historico_participante delete
   */
  export type historico_participanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
    /**
     * Filter which historico_participante to delete.
     */
    where: historico_participanteWhereUniqueInput
  }

  /**
   * historico_participante deleteMany
   */
  export type historico_participanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historico_participantes to delete
     */
    where?: historico_participanteWhereInput
    /**
     * Limit how many historico_participantes to delete.
     */
    limit?: number
  }

  /**
   * historico_participante without action
   */
  export type historico_participanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
  }


  /**
   * Model inscricao_evento
   */

  export type AggregateInscricao_evento = {
    _count: Inscricao_eventoCountAggregateOutputType | null
    _min: Inscricao_eventoMinAggregateOutputType | null
    _max: Inscricao_eventoMaxAggregateOutputType | null
  }

  export type Inscricao_eventoMinAggregateOutputType = {
    id: string | null
    idEvento: string | null
    idParticipante: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Inscricao_eventoMaxAggregateOutputType = {
    id: string | null
    idEvento: string | null
    idParticipante: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Inscricao_eventoCountAggregateOutputType = {
    id: number
    idEvento: number
    idParticipante: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Inscricao_eventoMinAggregateInputType = {
    id?: true
    idEvento?: true
    idParticipante?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Inscricao_eventoMaxAggregateInputType = {
    id?: true
    idEvento?: true
    idParticipante?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Inscricao_eventoCountAggregateInputType = {
    id?: true
    idEvento?: true
    idParticipante?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Inscricao_eventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inscricao_evento to aggregate.
     */
    where?: inscricao_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscricao_eventos to fetch.
     */
    orderBy?: inscricao_eventoOrderByWithRelationInput | inscricao_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inscricao_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscricao_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscricao_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inscricao_eventos
    **/
    _count?: true | Inscricao_eventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inscricao_eventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inscricao_eventoMaxAggregateInputType
  }

  export type GetInscricao_eventoAggregateType<T extends Inscricao_eventoAggregateArgs> = {
        [P in keyof T & keyof AggregateInscricao_evento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscricao_evento[P]>
      : GetScalarType<T[P], AggregateInscricao_evento[P]>
  }




  export type inscricao_eventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscricao_eventoWhereInput
    orderBy?: inscricao_eventoOrderByWithAggregationInput | inscricao_eventoOrderByWithAggregationInput[]
    by: Inscricao_eventoScalarFieldEnum[] | Inscricao_eventoScalarFieldEnum
    having?: inscricao_eventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inscricao_eventoCountAggregateInputType | true
    _min?: Inscricao_eventoMinAggregateInputType
    _max?: Inscricao_eventoMaxAggregateInputType
  }

  export type Inscricao_eventoGroupByOutputType = {
    id: string
    idEvento: string
    idParticipante: string
    ativo: boolean
    createdAt: Date | null
    updatedAt: Date | null
    _count: Inscricao_eventoCountAggregateOutputType | null
    _min: Inscricao_eventoMinAggregateOutputType | null
    _max: Inscricao_eventoMaxAggregateOutputType | null
  }

  type GetInscricao_eventoGroupByPayload<T extends inscricao_eventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inscricao_eventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inscricao_eventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inscricao_eventoGroupByOutputType[P]>
            : GetScalarType<T[P], Inscricao_eventoGroupByOutputType[P]>
        }
      >
    >


  export type inscricao_eventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idEvento?: boolean
    idParticipante?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evento?: boolean | eventoDefaultArgs<ExtArgs>
    participante?: boolean | participanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao_evento"]>



  export type inscricao_eventoSelectScalar = {
    id?: boolean
    idEvento?: boolean
    idParticipante?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type inscricao_eventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idEvento" | "idParticipante" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["inscricao_evento"]>
  export type inscricao_eventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | eventoDefaultArgs<ExtArgs>
    participante?: boolean | participanteDefaultArgs<ExtArgs>
  }

  export type $inscricao_eventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inscricao_evento"
    objects: {
      evento: Prisma.$eventoPayload<ExtArgs>
      participante: Prisma.$participantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idEvento: string
      idParticipante: string
      ativo: boolean
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["inscricao_evento"]>
    composites: {}
  }

  type inscricao_eventoGetPayload<S extends boolean | null | undefined | inscricao_eventoDefaultArgs> = $Result.GetResult<Prisma.$inscricao_eventoPayload, S>

  type inscricao_eventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inscricao_eventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Inscricao_eventoCountAggregateInputType | true
    }

  export interface inscricao_eventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inscricao_evento'], meta: { name: 'inscricao_evento' } }
    /**
     * Find zero or one Inscricao_evento that matches the filter.
     * @param {inscricao_eventoFindUniqueArgs} args - Arguments to find a Inscricao_evento
     * @example
     * // Get one Inscricao_evento
     * const inscricao_evento = await prisma.inscricao_evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inscricao_eventoFindUniqueArgs>(args: SelectSubset<T, inscricao_eventoFindUniqueArgs<ExtArgs>>): Prisma__inscricao_eventoClient<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscricao_evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inscricao_eventoFindUniqueOrThrowArgs} args - Arguments to find a Inscricao_evento
     * @example
     * // Get one Inscricao_evento
     * const inscricao_evento = await prisma.inscricao_evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inscricao_eventoFindUniqueOrThrowArgs>(args: SelectSubset<T, inscricao_eventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inscricao_eventoClient<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscricao_evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricao_eventoFindFirstArgs} args - Arguments to find a Inscricao_evento
     * @example
     * // Get one Inscricao_evento
     * const inscricao_evento = await prisma.inscricao_evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inscricao_eventoFindFirstArgs>(args?: SelectSubset<T, inscricao_eventoFindFirstArgs<ExtArgs>>): Prisma__inscricao_eventoClient<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscricao_evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricao_eventoFindFirstOrThrowArgs} args - Arguments to find a Inscricao_evento
     * @example
     * // Get one Inscricao_evento
     * const inscricao_evento = await prisma.inscricao_evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inscricao_eventoFindFirstOrThrowArgs>(args?: SelectSubset<T, inscricao_eventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__inscricao_eventoClient<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscricao_eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricao_eventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscricao_eventos
     * const inscricao_eventos = await prisma.inscricao_evento.findMany()
     * 
     * // Get first 10 Inscricao_eventos
     * const inscricao_eventos = await prisma.inscricao_evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscricao_eventoWithIdOnly = await prisma.inscricao_evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inscricao_eventoFindManyArgs>(args?: SelectSubset<T, inscricao_eventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscricao_evento.
     * @param {inscricao_eventoCreateArgs} args - Arguments to create a Inscricao_evento.
     * @example
     * // Create one Inscricao_evento
     * const Inscricao_evento = await prisma.inscricao_evento.create({
     *   data: {
     *     // ... data to create a Inscricao_evento
     *   }
     * })
     * 
     */
    create<T extends inscricao_eventoCreateArgs>(args: SelectSubset<T, inscricao_eventoCreateArgs<ExtArgs>>): Prisma__inscricao_eventoClient<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscricao_eventos.
     * @param {inscricao_eventoCreateManyArgs} args - Arguments to create many Inscricao_eventos.
     * @example
     * // Create many Inscricao_eventos
     * const inscricao_evento = await prisma.inscricao_evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inscricao_eventoCreateManyArgs>(args?: SelectSubset<T, inscricao_eventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inscricao_evento.
     * @param {inscricao_eventoDeleteArgs} args - Arguments to delete one Inscricao_evento.
     * @example
     * // Delete one Inscricao_evento
     * const Inscricao_evento = await prisma.inscricao_evento.delete({
     *   where: {
     *     // ... filter to delete one Inscricao_evento
     *   }
     * })
     * 
     */
    delete<T extends inscricao_eventoDeleteArgs>(args: SelectSubset<T, inscricao_eventoDeleteArgs<ExtArgs>>): Prisma__inscricao_eventoClient<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscricao_evento.
     * @param {inscricao_eventoUpdateArgs} args - Arguments to update one Inscricao_evento.
     * @example
     * // Update one Inscricao_evento
     * const inscricao_evento = await prisma.inscricao_evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inscricao_eventoUpdateArgs>(args: SelectSubset<T, inscricao_eventoUpdateArgs<ExtArgs>>): Prisma__inscricao_eventoClient<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscricao_eventos.
     * @param {inscricao_eventoDeleteManyArgs} args - Arguments to filter Inscricao_eventos to delete.
     * @example
     * // Delete a few Inscricao_eventos
     * const { count } = await prisma.inscricao_evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inscricao_eventoDeleteManyArgs>(args?: SelectSubset<T, inscricao_eventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscricao_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricao_eventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscricao_eventos
     * const inscricao_evento = await prisma.inscricao_evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inscricao_eventoUpdateManyArgs>(args: SelectSubset<T, inscricao_eventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inscricao_evento.
     * @param {inscricao_eventoUpsertArgs} args - Arguments to update or create a Inscricao_evento.
     * @example
     * // Update or create a Inscricao_evento
     * const inscricao_evento = await prisma.inscricao_evento.upsert({
     *   create: {
     *     // ... data to create a Inscricao_evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscricao_evento we want to update
     *   }
     * })
     */
    upsert<T extends inscricao_eventoUpsertArgs>(args: SelectSubset<T, inscricao_eventoUpsertArgs<ExtArgs>>): Prisma__inscricao_eventoClient<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscricao_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricao_eventoCountArgs} args - Arguments to filter Inscricao_eventos to count.
     * @example
     * // Count the number of Inscricao_eventos
     * const count = await prisma.inscricao_evento.count({
     *   where: {
     *     // ... the filter for the Inscricao_eventos we want to count
     *   }
     * })
    **/
    count<T extends inscricao_eventoCountArgs>(
      args?: Subset<T, inscricao_eventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inscricao_eventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscricao_evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inscricao_eventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Inscricao_eventoAggregateArgs>(args: Subset<T, Inscricao_eventoAggregateArgs>): Prisma.PrismaPromise<GetInscricao_eventoAggregateType<T>>

    /**
     * Group by Inscricao_evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscricao_eventoGroupByArgs} args - Group by arguments.
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
      T extends inscricao_eventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inscricao_eventoGroupByArgs['orderBy'] }
        : { orderBy?: inscricao_eventoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inscricao_eventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscricao_eventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inscricao_evento model
   */
  readonly fields: inscricao_eventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inscricao_evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inscricao_eventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends eventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventoDefaultArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the inscricao_evento model
   */
  interface inscricao_eventoFieldRefs {
    readonly id: FieldRef<"inscricao_evento", 'String'>
    readonly idEvento: FieldRef<"inscricao_evento", 'String'>
    readonly idParticipante: FieldRef<"inscricao_evento", 'String'>
    readonly ativo: FieldRef<"inscricao_evento", 'Boolean'>
    readonly createdAt: FieldRef<"inscricao_evento", 'DateTime'>
    readonly updatedAt: FieldRef<"inscricao_evento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inscricao_evento findUnique
   */
  export type inscricao_eventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    /**
     * Filter, which inscricao_evento to fetch.
     */
    where: inscricao_eventoWhereUniqueInput
  }

  /**
   * inscricao_evento findUniqueOrThrow
   */
  export type inscricao_eventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    /**
     * Filter, which inscricao_evento to fetch.
     */
    where: inscricao_eventoWhereUniqueInput
  }

  /**
   * inscricao_evento findFirst
   */
  export type inscricao_eventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    /**
     * Filter, which inscricao_evento to fetch.
     */
    where?: inscricao_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscricao_eventos to fetch.
     */
    orderBy?: inscricao_eventoOrderByWithRelationInput | inscricao_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inscricao_eventos.
     */
    cursor?: inscricao_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscricao_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscricao_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscricao_eventos.
     */
    distinct?: Inscricao_eventoScalarFieldEnum | Inscricao_eventoScalarFieldEnum[]
  }

  /**
   * inscricao_evento findFirstOrThrow
   */
  export type inscricao_eventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    /**
     * Filter, which inscricao_evento to fetch.
     */
    where?: inscricao_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscricao_eventos to fetch.
     */
    orderBy?: inscricao_eventoOrderByWithRelationInput | inscricao_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inscricao_eventos.
     */
    cursor?: inscricao_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscricao_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscricao_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscricao_eventos.
     */
    distinct?: Inscricao_eventoScalarFieldEnum | Inscricao_eventoScalarFieldEnum[]
  }

  /**
   * inscricao_evento findMany
   */
  export type inscricao_eventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    /**
     * Filter, which inscricao_eventos to fetch.
     */
    where?: inscricao_eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscricao_eventos to fetch.
     */
    orderBy?: inscricao_eventoOrderByWithRelationInput | inscricao_eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inscricao_eventos.
     */
    cursor?: inscricao_eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscricao_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscricao_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscricao_eventos.
     */
    distinct?: Inscricao_eventoScalarFieldEnum | Inscricao_eventoScalarFieldEnum[]
  }

  /**
   * inscricao_evento create
   */
  export type inscricao_eventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    /**
     * The data needed to create a inscricao_evento.
     */
    data: XOR<inscricao_eventoCreateInput, inscricao_eventoUncheckedCreateInput>
  }

  /**
   * inscricao_evento createMany
   */
  export type inscricao_eventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inscricao_eventos.
     */
    data: inscricao_eventoCreateManyInput | inscricao_eventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inscricao_evento update
   */
  export type inscricao_eventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    /**
     * The data needed to update a inscricao_evento.
     */
    data: XOR<inscricao_eventoUpdateInput, inscricao_eventoUncheckedUpdateInput>
    /**
     * Choose, which inscricao_evento to update.
     */
    where: inscricao_eventoWhereUniqueInput
  }

  /**
   * inscricao_evento updateMany
   */
  export type inscricao_eventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inscricao_eventos.
     */
    data: XOR<inscricao_eventoUpdateManyMutationInput, inscricao_eventoUncheckedUpdateManyInput>
    /**
     * Filter which inscricao_eventos to update
     */
    where?: inscricao_eventoWhereInput
    /**
     * Limit how many inscricao_eventos to update.
     */
    limit?: number
  }

  /**
   * inscricao_evento upsert
   */
  export type inscricao_eventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    /**
     * The filter to search for the inscricao_evento to update in case it exists.
     */
    where: inscricao_eventoWhereUniqueInput
    /**
     * In case the inscricao_evento found by the `where` argument doesn't exist, create a new inscricao_evento with this data.
     */
    create: XOR<inscricao_eventoCreateInput, inscricao_eventoUncheckedCreateInput>
    /**
     * In case the inscricao_evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inscricao_eventoUpdateInput, inscricao_eventoUncheckedUpdateInput>
  }

  /**
   * inscricao_evento delete
   */
  export type inscricao_eventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    /**
     * Filter which inscricao_evento to delete.
     */
    where: inscricao_eventoWhereUniqueInput
  }

  /**
   * inscricao_evento deleteMany
   */
  export type inscricao_eventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inscricao_eventos to delete
     */
    where?: inscricao_eventoWhereInput
    /**
     * Limit how many inscricao_eventos to delete.
     */
    limit?: number
  }

  /**
   * inscricao_evento without action
   */
  export type inscricao_eventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
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
    email: string | null
    telefone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ativo: boolean | null
  }

  export type ParticipanteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ativo: boolean | null
  }

  export type ParticipanteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    createdAt: number
    updatedAt: number
    ativo: number
    _all: number
  }


  export type ParticipanteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
    ativo?: true
  }

  export type ParticipanteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
    ativo?: true
  }

  export type ParticipanteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
    ativo?: true
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
    email: string
    telefone: string
    createdAt: Date | null
    updatedAt: Date | null
    ativo: boolean
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
    email?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ativo?: boolean
    historico_participante?: boolean | participante$historico_participanteArgs<ExtArgs>
    inscricao_evento?: boolean | participante$inscricao_eventoArgs<ExtArgs>
    _count?: boolean | ParticipanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>



  export type participanteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ativo?: boolean
  }

  export type participanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "createdAt" | "updatedAt" | "ativo", ExtArgs["result"]["participante"]>
  export type participanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico_participante?: boolean | participante$historico_participanteArgs<ExtArgs>
    inscricao_evento?: boolean | participante$inscricao_eventoArgs<ExtArgs>
    _count?: boolean | ParticipanteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $participantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participante"
    objects: {
      historico_participante: Prisma.$historico_participantePayload<ExtArgs>[]
      inscricao_evento: Prisma.$inscricao_eventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      telefone: string
      createdAt: Date | null
      updatedAt: Date | null
      ativo: boolean
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
    historico_participante<T extends participante$historico_participanteArgs<ExtArgs> = {}>(args?: Subset<T, participante$historico_participanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_participantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inscricao_evento<T extends participante$inscricao_eventoArgs<ExtArgs> = {}>(args?: Subset<T, participante$inscricao_eventoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscricao_eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"participante", 'String'>
    readonly telefone: FieldRef<"participante", 'String'>
    readonly createdAt: FieldRef<"participante", 'DateTime'>
    readonly updatedAt: FieldRef<"participante", 'DateTime'>
    readonly ativo: FieldRef<"participante", 'Boolean'>
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
   * participante.historico_participante
   */
  export type participante$historico_participanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_participante
     */
    select?: historico_participanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_participante
     */
    omit?: historico_participanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_participanteInclude<ExtArgs> | null
    where?: historico_participanteWhereInput
    orderBy?: historico_participanteOrderByWithRelationInput | historico_participanteOrderByWithRelationInput[]
    cursor?: historico_participanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historico_participanteScalarFieldEnum | Historico_participanteScalarFieldEnum[]
  }

  /**
   * participante.inscricao_evento
   */
  export type participante$inscricao_eventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscricao_evento
     */
    select?: inscricao_eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscricao_evento
     */
    omit?: inscricao_eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscricao_eventoInclude<ExtArgs> | null
    where?: inscricao_eventoWhereInput
    orderBy?: inscricao_eventoOrderByWithRelationInput | inscricao_eventoOrderByWithRelationInput[]
    cursor?: inscricao_eventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inscricao_eventoScalarFieldEnum | Inscricao_eventoScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    ativo: 'ativo',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    dataEvento: 'dataEvento',
    vagas: 'vagas',
    idCategoria: 'idCategoria',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ativo: 'ativo'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const Historico_participanteScalarFieldEnum: {
    id: 'id',
    email: 'email',
    idParticipante: 'idParticipante',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Historico_participanteScalarFieldEnum = (typeof Historico_participanteScalarFieldEnum)[keyof typeof Historico_participanteScalarFieldEnum]


  export const Inscricao_eventoScalarFieldEnum: {
    id: 'id',
    idEvento: 'idEvento',
    idParticipante: 'idParticipante',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Inscricao_eventoScalarFieldEnum = (typeof Inscricao_eventoScalarFieldEnum)[keyof typeof Inscricao_eventoScalarFieldEnum]


  export const ParticipanteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ativo: 'ativo'
  };

  export type ParticipanteScalarFieldEnum = (typeof ParticipanteScalarFieldEnum)[keyof typeof ParticipanteScalarFieldEnum]


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


  export const categoriaOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type categoriaOrderByRelevanceFieldEnum = (typeof categoriaOrderByRelevanceFieldEnum)[keyof typeof categoriaOrderByRelevanceFieldEnum]


  export const eventoOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    idCategoria: 'idCategoria'
  };

  export type eventoOrderByRelevanceFieldEnum = (typeof eventoOrderByRelevanceFieldEnum)[keyof typeof eventoOrderByRelevanceFieldEnum]


  export const historico_participanteOrderByRelevanceFieldEnum: {
    email: 'email',
    idParticipante: 'idParticipante'
  };

  export type historico_participanteOrderByRelevanceFieldEnum = (typeof historico_participanteOrderByRelevanceFieldEnum)[keyof typeof historico_participanteOrderByRelevanceFieldEnum]


  export const inscricao_eventoOrderByRelevanceFieldEnum: {
    id: 'id',
    idEvento: 'idEvento',
    idParticipante: 'idParticipante'
  };

  export type inscricao_eventoOrderByRelevanceFieldEnum = (typeof inscricao_eventoOrderByRelevanceFieldEnum)[keyof typeof inscricao_eventoOrderByRelevanceFieldEnum]


  export const participanteOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone'
  };

  export type participanteOrderByRelevanceFieldEnum = (typeof participanteOrderByRelevanceFieldEnum)[keyof typeof participanteOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id?: StringFilter<"categoria"> | string
    ativo?: BoolFilter<"categoria"> | boolean
    nome?: StringFilter<"categoria"> | string
    createdAt?: DateTimeNullableFilter<"categoria"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"categoria"> | Date | string | null
    evento?: EventoListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id?: SortOrder
    ativo?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    evento?: eventoOrderByRelationAggregateInput
    _relevance?: categoriaOrderByRelevanceInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    ativo?: BoolFilter<"categoria"> | boolean
    nome?: StringFilter<"categoria"> | string
    createdAt?: DateTimeNullableFilter<"categoria"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"categoria"> | Date | string | null
    evento?: EventoListRelationFilter
  }, "id">

  export type categoriaOrderByWithAggregationInput = {
    id?: SortOrder
    ativo?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"categoria"> | string
    ativo?: BoolWithAggregatesFilter<"categoria"> | boolean
    nome?: StringWithAggregatesFilter<"categoria"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"categoria"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"categoria"> | Date | string | null
  }

  export type eventoWhereInput = {
    AND?: eventoWhereInput | eventoWhereInput[]
    OR?: eventoWhereInput[]
    NOT?: eventoWhereInput | eventoWhereInput[]
    id?: StringFilter<"evento"> | string
    nome?: StringFilter<"evento"> | string
    dataEvento?: DateTimeFilter<"evento"> | Date | string
    vagas?: IntFilter<"evento"> | number
    idCategoria?: StringFilter<"evento"> | string
    createdAt?: DateTimeNullableFilter<"evento"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"evento"> | Date | string | null
    ativo?: BoolNullableFilter<"evento"> | boolean | null
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
    inscricao_evento?: Inscricao_eventoListRelationFilter
  }

  export type eventoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataEvento?: SortOrder
    vagas?: SortOrder
    idCategoria?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    ativo?: SortOrderInput | SortOrder
    categoria?: categoriaOrderByWithRelationInput
    inscricao_evento?: inscricao_eventoOrderByRelationAggregateInput
    _relevance?: eventoOrderByRelevanceInput
  }

  export type eventoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: eventoWhereInput | eventoWhereInput[]
    OR?: eventoWhereInput[]
    NOT?: eventoWhereInput | eventoWhereInput[]
    nome?: StringFilter<"evento"> | string
    dataEvento?: DateTimeFilter<"evento"> | Date | string
    vagas?: IntFilter<"evento"> | number
    idCategoria?: StringFilter<"evento"> | string
    createdAt?: DateTimeNullableFilter<"evento"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"evento"> | Date | string | null
    ativo?: BoolNullableFilter<"evento"> | boolean | null
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
    inscricao_evento?: Inscricao_eventoListRelationFilter
  }, "id">

  export type eventoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataEvento?: SortOrder
    vagas?: SortOrder
    idCategoria?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    ativo?: SortOrderInput | SortOrder
    _count?: eventoCountOrderByAggregateInput
    _avg?: eventoAvgOrderByAggregateInput
    _max?: eventoMaxOrderByAggregateInput
    _min?: eventoMinOrderByAggregateInput
    _sum?: eventoSumOrderByAggregateInput
  }

  export type eventoScalarWhereWithAggregatesInput = {
    AND?: eventoScalarWhereWithAggregatesInput | eventoScalarWhereWithAggregatesInput[]
    OR?: eventoScalarWhereWithAggregatesInput[]
    NOT?: eventoScalarWhereWithAggregatesInput | eventoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"evento"> | string
    nome?: StringWithAggregatesFilter<"evento"> | string
    dataEvento?: DateTimeWithAggregatesFilter<"evento"> | Date | string
    vagas?: IntWithAggregatesFilter<"evento"> | number
    idCategoria?: StringWithAggregatesFilter<"evento"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"evento"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"evento"> | Date | string | null
    ativo?: BoolNullableWithAggregatesFilter<"evento"> | boolean | null
  }

  export type historico_participanteWhereInput = {
    AND?: historico_participanteWhereInput | historico_participanteWhereInput[]
    OR?: historico_participanteWhereInput[]
    NOT?: historico_participanteWhereInput | historico_participanteWhereInput[]
    id?: IntFilter<"historico_participante"> | number
    email?: StringFilter<"historico_participante"> | string
    idParticipante?: StringFilter<"historico_participante"> | string
    createdAt?: DateTimeNullableFilter<"historico_participante"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"historico_participante"> | Date | string | null
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
  }

  export type historico_participanteOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    idParticipante?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    participante?: participanteOrderByWithRelationInput
    _relevance?: historico_participanteOrderByRelevanceInput
  }

  export type historico_participanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: historico_participanteWhereInput | historico_participanteWhereInput[]
    OR?: historico_participanteWhereInput[]
    NOT?: historico_participanteWhereInput | historico_participanteWhereInput[]
    email?: StringFilter<"historico_participante"> | string
    idParticipante?: StringFilter<"historico_participante"> | string
    createdAt?: DateTimeNullableFilter<"historico_participante"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"historico_participante"> | Date | string | null
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
  }, "id">

  export type historico_participanteOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    idParticipante?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: historico_participanteCountOrderByAggregateInput
    _avg?: historico_participanteAvgOrderByAggregateInput
    _max?: historico_participanteMaxOrderByAggregateInput
    _min?: historico_participanteMinOrderByAggregateInput
    _sum?: historico_participanteSumOrderByAggregateInput
  }

  export type historico_participanteScalarWhereWithAggregatesInput = {
    AND?: historico_participanteScalarWhereWithAggregatesInput | historico_participanteScalarWhereWithAggregatesInput[]
    OR?: historico_participanteScalarWhereWithAggregatesInput[]
    NOT?: historico_participanteScalarWhereWithAggregatesInput | historico_participanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"historico_participante"> | number
    email?: StringWithAggregatesFilter<"historico_participante"> | string
    idParticipante?: StringWithAggregatesFilter<"historico_participante"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"historico_participante"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"historico_participante"> | Date | string | null
  }

  export type inscricao_eventoWhereInput = {
    AND?: inscricao_eventoWhereInput | inscricao_eventoWhereInput[]
    OR?: inscricao_eventoWhereInput[]
    NOT?: inscricao_eventoWhereInput | inscricao_eventoWhereInput[]
    id?: StringFilter<"inscricao_evento"> | string
    idEvento?: StringFilter<"inscricao_evento"> | string
    idParticipante?: StringFilter<"inscricao_evento"> | string
    ativo?: BoolFilter<"inscricao_evento"> | boolean
    createdAt?: DateTimeNullableFilter<"inscricao_evento"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"inscricao_evento"> | Date | string | null
    evento?: XOR<EventoScalarRelationFilter, eventoWhereInput>
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
  }

  export type inscricao_eventoOrderByWithRelationInput = {
    id?: SortOrder
    idEvento?: SortOrder
    idParticipante?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    evento?: eventoOrderByWithRelationInput
    participante?: participanteOrderByWithRelationInput
    _relevance?: inscricao_eventoOrderByRelevanceInput
  }

  export type inscricao_eventoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idEvento_idParticipante?: inscricao_eventoIdEventoIdParticipanteCompoundUniqueInput
    AND?: inscricao_eventoWhereInput | inscricao_eventoWhereInput[]
    OR?: inscricao_eventoWhereInput[]
    NOT?: inscricao_eventoWhereInput | inscricao_eventoWhereInput[]
    idEvento?: StringFilter<"inscricao_evento"> | string
    idParticipante?: StringFilter<"inscricao_evento"> | string
    ativo?: BoolFilter<"inscricao_evento"> | boolean
    createdAt?: DateTimeNullableFilter<"inscricao_evento"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"inscricao_evento"> | Date | string | null
    evento?: XOR<EventoScalarRelationFilter, eventoWhereInput>
    participante?: XOR<ParticipanteScalarRelationFilter, participanteWhereInput>
  }, "id" | "idEvento_idParticipante">

  export type inscricao_eventoOrderByWithAggregationInput = {
    id?: SortOrder
    idEvento?: SortOrder
    idParticipante?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: inscricao_eventoCountOrderByAggregateInput
    _max?: inscricao_eventoMaxOrderByAggregateInput
    _min?: inscricao_eventoMinOrderByAggregateInput
  }

  export type inscricao_eventoScalarWhereWithAggregatesInput = {
    AND?: inscricao_eventoScalarWhereWithAggregatesInput | inscricao_eventoScalarWhereWithAggregatesInput[]
    OR?: inscricao_eventoScalarWhereWithAggregatesInput[]
    NOT?: inscricao_eventoScalarWhereWithAggregatesInput | inscricao_eventoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"inscricao_evento"> | string
    idEvento?: StringWithAggregatesFilter<"inscricao_evento"> | string
    idParticipante?: StringWithAggregatesFilter<"inscricao_evento"> | string
    ativo?: BoolWithAggregatesFilter<"inscricao_evento"> | boolean
    createdAt?: DateTimeNullableWithAggregatesFilter<"inscricao_evento"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"inscricao_evento"> | Date | string | null
  }

  export type participanteWhereInput = {
    AND?: participanteWhereInput | participanteWhereInput[]
    OR?: participanteWhereInput[]
    NOT?: participanteWhereInput | participanteWhereInput[]
    id?: StringFilter<"participante"> | string
    nome?: StringFilter<"participante"> | string
    email?: StringFilter<"participante"> | string
    telefone?: StringFilter<"participante"> | string
    createdAt?: DateTimeNullableFilter<"participante"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"participante"> | Date | string | null
    ativo?: BoolFilter<"participante"> | boolean
    historico_participante?: Historico_participanteListRelationFilter
    inscricao_evento?: Inscricao_eventoListRelationFilter
  }

  export type participanteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    ativo?: SortOrder
    historico_participante?: historico_participanteOrderByRelationAggregateInput
    inscricao_evento?: inscricao_eventoOrderByRelationAggregateInput
    _relevance?: participanteOrderByRelevanceInput
  }

  export type participanteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: participanteWhereInput | participanteWhereInput[]
    OR?: participanteWhereInput[]
    NOT?: participanteWhereInput | participanteWhereInput[]
    nome?: StringFilter<"participante"> | string
    telefone?: StringFilter<"participante"> | string
    createdAt?: DateTimeNullableFilter<"participante"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"participante"> | Date | string | null
    ativo?: BoolFilter<"participante"> | boolean
    historico_participante?: Historico_participanteListRelationFilter
    inscricao_evento?: Inscricao_eventoListRelationFilter
  }, "id" | "email">

  export type participanteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    ativo?: SortOrder
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
    email?: StringWithAggregatesFilter<"participante"> | string
    telefone?: StringWithAggregatesFilter<"participante"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"participante"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"participante"> | Date | string | null
    ativo?: BoolWithAggregatesFilter<"participante"> | boolean
  }

  export type categoriaCreateInput = {
    id?: string
    ativo?: boolean
    nome: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    evento?: eventoCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id?: string
    ativo?: boolean
    nome: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    evento?: eventoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evento?: eventoUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evento?: eventoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id?: string
    ativo?: boolean
    nome: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type categoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventoCreateInput = {
    id?: string
    nome: string
    dataEvento: Date | string
    vagas?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean | null
    categoria: categoriaCreateNestedOneWithoutEventoInput
    inscricao_evento?: inscricao_eventoCreateNestedManyWithoutEventoInput
  }

  export type eventoUncheckedCreateInput = {
    id?: string
    nome: string
    dataEvento: Date | string
    vagas?: number
    idCategoria: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean | null
    inscricao_evento?: inscricao_eventoUncheckedCreateNestedManyWithoutEventoInput
  }

  export type eventoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    categoria?: categoriaUpdateOneRequiredWithoutEventoNestedInput
    inscricao_evento?: inscricao_eventoUpdateManyWithoutEventoNestedInput
  }

  export type eventoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    idCategoria?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscricao_evento?: inscricao_eventoUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type eventoCreateManyInput = {
    id?: string
    nome: string
    dataEvento: Date | string
    vagas?: number
    idCategoria: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean | null
  }

  export type eventoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type eventoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    idCategoria?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type historico_participanteCreateInput = {
    email: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    participante: participanteCreateNestedOneWithoutHistorico_participanteInput
  }

  export type historico_participanteUncheckedCreateInput = {
    id?: number
    email: string
    idParticipante: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type historico_participanteUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participante?: participanteUpdateOneRequiredWithoutHistorico_participanteNestedInput
  }

  export type historico_participanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type historico_participanteCreateManyInput = {
    id?: number
    email: string
    idParticipante: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type historico_participanteUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type historico_participanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscricao_eventoCreateInput = {
    id?: string
    ativo?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    evento: eventoCreateNestedOneWithoutInscricao_eventoInput
    participante: participanteCreateNestedOneWithoutInscricao_eventoInput
  }

  export type inscricao_eventoUncheckedCreateInput = {
    id?: string
    idEvento: string
    idParticipante: string
    ativo?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type inscricao_eventoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evento?: eventoUpdateOneRequiredWithoutInscricao_eventoNestedInput
    participante?: participanteUpdateOneRequiredWithoutInscricao_eventoNestedInput
  }

  export type inscricao_eventoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idEvento?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscricao_eventoCreateManyInput = {
    id?: string
    idEvento: string
    idParticipante: string
    ativo?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type inscricao_eventoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscricao_eventoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idEvento?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participanteCreateInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean
    historico_participante?: historico_participanteCreateNestedManyWithoutParticipanteInput
    inscricao_evento?: inscricao_eventoCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean
    historico_participante?: historico_participanteUncheckedCreateNestedManyWithoutParticipanteInput
    inscricao_evento?: inscricao_eventoUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    historico_participante?: historico_participanteUpdateManyWithoutParticipanteNestedInput
    inscricao_evento?: inscricao_eventoUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    historico_participante?: historico_participanteUncheckedUpdateManyWithoutParticipanteNestedInput
    inscricao_evento?: inscricao_eventoUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteCreateManyInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean
  }

  export type participanteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type participanteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EventoListRelationFilter = {
    every?: eventoWhereInput
    some?: eventoWhereInput
    none?: eventoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type eventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaOrderByRelevanceInput = {
    fields: categoriaOrderByRelevanceFieldEnum | categoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriaCountOrderByAggregateInput = {
    id?: SortOrder
    ativo?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    ativo?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id?: SortOrder
    ativo?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CategoriaScalarRelationFilter = {
    is?: categoriaWhereInput
    isNot?: categoriaWhereInput
  }

  export type Inscricao_eventoListRelationFilter = {
    every?: inscricao_eventoWhereInput
    some?: inscricao_eventoWhereInput
    none?: inscricao_eventoWhereInput
  }

  export type inscricao_eventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventoOrderByRelevanceInput = {
    fields: eventoOrderByRelevanceFieldEnum | eventoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type eventoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataEvento?: SortOrder
    vagas?: SortOrder
    idCategoria?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
  }

  export type eventoAvgOrderByAggregateInput = {
    vagas?: SortOrder
  }

  export type eventoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataEvento?: SortOrder
    vagas?: SortOrder
    idCategoria?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
  }

  export type eventoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataEvento?: SortOrder
    vagas?: SortOrder
    idCategoria?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
  }

  export type eventoSumOrderByAggregateInput = {
    vagas?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ParticipanteScalarRelationFilter = {
    is?: participanteWhereInput
    isNot?: participanteWhereInput
  }

  export type historico_participanteOrderByRelevanceInput = {
    fields: historico_participanteOrderByRelevanceFieldEnum | historico_participanteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type historico_participanteCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    idParticipante?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type historico_participanteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type historico_participanteMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    idParticipante?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type historico_participanteMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    idParticipante?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type historico_participanteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventoScalarRelationFilter = {
    is?: eventoWhereInput
    isNot?: eventoWhereInput
  }

  export type inscricao_eventoOrderByRelevanceInput = {
    fields: inscricao_eventoOrderByRelevanceFieldEnum | inscricao_eventoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type inscricao_eventoIdEventoIdParticipanteCompoundUniqueInput = {
    idEvento: string
    idParticipante: string
  }

  export type inscricao_eventoCountOrderByAggregateInput = {
    id?: SortOrder
    idEvento?: SortOrder
    idParticipante?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inscricao_eventoMaxOrderByAggregateInput = {
    id?: SortOrder
    idEvento?: SortOrder
    idParticipante?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inscricao_eventoMinOrderByAggregateInput = {
    id?: SortOrder
    idEvento?: SortOrder
    idParticipante?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Historico_participanteListRelationFilter = {
    every?: historico_participanteWhereInput
    some?: historico_participanteWhereInput
    none?: historico_participanteWhereInput
  }

  export type historico_participanteOrderByRelationAggregateInput = {
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
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
  }

  export type participanteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
  }

  export type participanteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
  }

  export type eventoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<eventoCreateWithoutCategoriaInput, eventoUncheckedCreateWithoutCategoriaInput> | eventoCreateWithoutCategoriaInput[] | eventoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutCategoriaInput | eventoCreateOrConnectWithoutCategoriaInput[]
    createMany?: eventoCreateManyCategoriaInputEnvelope
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
  }

  export type eventoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<eventoCreateWithoutCategoriaInput, eventoUncheckedCreateWithoutCategoriaInput> | eventoCreateWithoutCategoriaInput[] | eventoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutCategoriaInput | eventoCreateOrConnectWithoutCategoriaInput[]
    createMany?: eventoCreateManyCategoriaInputEnvelope
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type eventoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<eventoCreateWithoutCategoriaInput, eventoUncheckedCreateWithoutCategoriaInput> | eventoCreateWithoutCategoriaInput[] | eventoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutCategoriaInput | eventoCreateOrConnectWithoutCategoriaInput[]
    upsert?: eventoUpsertWithWhereUniqueWithoutCategoriaInput | eventoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: eventoCreateManyCategoriaInputEnvelope
    set?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    disconnect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    delete?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    update?: eventoUpdateWithWhereUniqueWithoutCategoriaInput | eventoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: eventoUpdateManyWithWhereWithoutCategoriaInput | eventoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: eventoScalarWhereInput | eventoScalarWhereInput[]
  }

  export type eventoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<eventoCreateWithoutCategoriaInput, eventoUncheckedCreateWithoutCategoriaInput> | eventoCreateWithoutCategoriaInput[] | eventoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutCategoriaInput | eventoCreateOrConnectWithoutCategoriaInput[]
    upsert?: eventoUpsertWithWhereUniqueWithoutCategoriaInput | eventoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: eventoCreateManyCategoriaInputEnvelope
    set?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    disconnect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    delete?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    update?: eventoUpdateWithWhereUniqueWithoutCategoriaInput | eventoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: eventoUpdateManyWithWhereWithoutCategoriaInput | eventoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: eventoScalarWhereInput | eventoScalarWhereInput[]
  }

  export type categoriaCreateNestedOneWithoutEventoInput = {
    create?: XOR<categoriaCreateWithoutEventoInput, categoriaUncheckedCreateWithoutEventoInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutEventoInput
    connect?: categoriaWhereUniqueInput
  }

  export type inscricao_eventoCreateNestedManyWithoutEventoInput = {
    create?: XOR<inscricao_eventoCreateWithoutEventoInput, inscricao_eventoUncheckedCreateWithoutEventoInput> | inscricao_eventoCreateWithoutEventoInput[] | inscricao_eventoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: inscricao_eventoCreateOrConnectWithoutEventoInput | inscricao_eventoCreateOrConnectWithoutEventoInput[]
    createMany?: inscricao_eventoCreateManyEventoInputEnvelope
    connect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
  }

  export type inscricao_eventoUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<inscricao_eventoCreateWithoutEventoInput, inscricao_eventoUncheckedCreateWithoutEventoInput> | inscricao_eventoCreateWithoutEventoInput[] | inscricao_eventoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: inscricao_eventoCreateOrConnectWithoutEventoInput | inscricao_eventoCreateOrConnectWithoutEventoInput[]
    createMany?: inscricao_eventoCreateManyEventoInputEnvelope
    connect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
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

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type categoriaUpdateOneRequiredWithoutEventoNestedInput = {
    create?: XOR<categoriaCreateWithoutEventoInput, categoriaUncheckedCreateWithoutEventoInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutEventoInput
    upsert?: categoriaUpsertWithoutEventoInput
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutEventoInput, categoriaUpdateWithoutEventoInput>, categoriaUncheckedUpdateWithoutEventoInput>
  }

  export type inscricao_eventoUpdateManyWithoutEventoNestedInput = {
    create?: XOR<inscricao_eventoCreateWithoutEventoInput, inscricao_eventoUncheckedCreateWithoutEventoInput> | inscricao_eventoCreateWithoutEventoInput[] | inscricao_eventoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: inscricao_eventoCreateOrConnectWithoutEventoInput | inscricao_eventoCreateOrConnectWithoutEventoInput[]
    upsert?: inscricao_eventoUpsertWithWhereUniqueWithoutEventoInput | inscricao_eventoUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: inscricao_eventoCreateManyEventoInputEnvelope
    set?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    disconnect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    delete?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    connect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    update?: inscricao_eventoUpdateWithWhereUniqueWithoutEventoInput | inscricao_eventoUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: inscricao_eventoUpdateManyWithWhereWithoutEventoInput | inscricao_eventoUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: inscricao_eventoScalarWhereInput | inscricao_eventoScalarWhereInput[]
  }

  export type inscricao_eventoUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<inscricao_eventoCreateWithoutEventoInput, inscricao_eventoUncheckedCreateWithoutEventoInput> | inscricao_eventoCreateWithoutEventoInput[] | inscricao_eventoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: inscricao_eventoCreateOrConnectWithoutEventoInput | inscricao_eventoCreateOrConnectWithoutEventoInput[]
    upsert?: inscricao_eventoUpsertWithWhereUniqueWithoutEventoInput | inscricao_eventoUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: inscricao_eventoCreateManyEventoInputEnvelope
    set?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    disconnect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    delete?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    connect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    update?: inscricao_eventoUpdateWithWhereUniqueWithoutEventoInput | inscricao_eventoUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: inscricao_eventoUpdateManyWithWhereWithoutEventoInput | inscricao_eventoUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: inscricao_eventoScalarWhereInput | inscricao_eventoScalarWhereInput[]
  }

  export type participanteCreateNestedOneWithoutHistorico_participanteInput = {
    create?: XOR<participanteCreateWithoutHistorico_participanteInput, participanteUncheckedCreateWithoutHistorico_participanteInput>
    connectOrCreate?: participanteCreateOrConnectWithoutHistorico_participanteInput
    connect?: participanteWhereUniqueInput
  }

  export type participanteUpdateOneRequiredWithoutHistorico_participanteNestedInput = {
    create?: XOR<participanteCreateWithoutHistorico_participanteInput, participanteUncheckedCreateWithoutHistorico_participanteInput>
    connectOrCreate?: participanteCreateOrConnectWithoutHistorico_participanteInput
    upsert?: participanteUpsertWithoutHistorico_participanteInput
    connect?: participanteWhereUniqueInput
    update?: XOR<XOR<participanteUpdateToOneWithWhereWithoutHistorico_participanteInput, participanteUpdateWithoutHistorico_participanteInput>, participanteUncheckedUpdateWithoutHistorico_participanteInput>
  }

  export type eventoCreateNestedOneWithoutInscricao_eventoInput = {
    create?: XOR<eventoCreateWithoutInscricao_eventoInput, eventoUncheckedCreateWithoutInscricao_eventoInput>
    connectOrCreate?: eventoCreateOrConnectWithoutInscricao_eventoInput
    connect?: eventoWhereUniqueInput
  }

  export type participanteCreateNestedOneWithoutInscricao_eventoInput = {
    create?: XOR<participanteCreateWithoutInscricao_eventoInput, participanteUncheckedCreateWithoutInscricao_eventoInput>
    connectOrCreate?: participanteCreateOrConnectWithoutInscricao_eventoInput
    connect?: participanteWhereUniqueInput
  }

  export type eventoUpdateOneRequiredWithoutInscricao_eventoNestedInput = {
    create?: XOR<eventoCreateWithoutInscricao_eventoInput, eventoUncheckedCreateWithoutInscricao_eventoInput>
    connectOrCreate?: eventoCreateOrConnectWithoutInscricao_eventoInput
    upsert?: eventoUpsertWithoutInscricao_eventoInput
    connect?: eventoWhereUniqueInput
    update?: XOR<XOR<eventoUpdateToOneWithWhereWithoutInscricao_eventoInput, eventoUpdateWithoutInscricao_eventoInput>, eventoUncheckedUpdateWithoutInscricao_eventoInput>
  }

  export type participanteUpdateOneRequiredWithoutInscricao_eventoNestedInput = {
    create?: XOR<participanteCreateWithoutInscricao_eventoInput, participanteUncheckedCreateWithoutInscricao_eventoInput>
    connectOrCreate?: participanteCreateOrConnectWithoutInscricao_eventoInput
    upsert?: participanteUpsertWithoutInscricao_eventoInput
    connect?: participanteWhereUniqueInput
    update?: XOR<XOR<participanteUpdateToOneWithWhereWithoutInscricao_eventoInput, participanteUpdateWithoutInscricao_eventoInput>, participanteUncheckedUpdateWithoutInscricao_eventoInput>
  }

  export type historico_participanteCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<historico_participanteCreateWithoutParticipanteInput, historico_participanteUncheckedCreateWithoutParticipanteInput> | historico_participanteCreateWithoutParticipanteInput[] | historico_participanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: historico_participanteCreateOrConnectWithoutParticipanteInput | historico_participanteCreateOrConnectWithoutParticipanteInput[]
    createMany?: historico_participanteCreateManyParticipanteInputEnvelope
    connect?: historico_participanteWhereUniqueInput | historico_participanteWhereUniqueInput[]
  }

  export type inscricao_eventoCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<inscricao_eventoCreateWithoutParticipanteInput, inscricao_eventoUncheckedCreateWithoutParticipanteInput> | inscricao_eventoCreateWithoutParticipanteInput[] | inscricao_eventoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: inscricao_eventoCreateOrConnectWithoutParticipanteInput | inscricao_eventoCreateOrConnectWithoutParticipanteInput[]
    createMany?: inscricao_eventoCreateManyParticipanteInputEnvelope
    connect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
  }

  export type historico_participanteUncheckedCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<historico_participanteCreateWithoutParticipanteInput, historico_participanteUncheckedCreateWithoutParticipanteInput> | historico_participanteCreateWithoutParticipanteInput[] | historico_participanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: historico_participanteCreateOrConnectWithoutParticipanteInput | historico_participanteCreateOrConnectWithoutParticipanteInput[]
    createMany?: historico_participanteCreateManyParticipanteInputEnvelope
    connect?: historico_participanteWhereUniqueInput | historico_participanteWhereUniqueInput[]
  }

  export type inscricao_eventoUncheckedCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<inscricao_eventoCreateWithoutParticipanteInput, inscricao_eventoUncheckedCreateWithoutParticipanteInput> | inscricao_eventoCreateWithoutParticipanteInput[] | inscricao_eventoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: inscricao_eventoCreateOrConnectWithoutParticipanteInput | inscricao_eventoCreateOrConnectWithoutParticipanteInput[]
    createMany?: inscricao_eventoCreateManyParticipanteInputEnvelope
    connect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
  }

  export type historico_participanteUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<historico_participanteCreateWithoutParticipanteInput, historico_participanteUncheckedCreateWithoutParticipanteInput> | historico_participanteCreateWithoutParticipanteInput[] | historico_participanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: historico_participanteCreateOrConnectWithoutParticipanteInput | historico_participanteCreateOrConnectWithoutParticipanteInput[]
    upsert?: historico_participanteUpsertWithWhereUniqueWithoutParticipanteInput | historico_participanteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: historico_participanteCreateManyParticipanteInputEnvelope
    set?: historico_participanteWhereUniqueInput | historico_participanteWhereUniqueInput[]
    disconnect?: historico_participanteWhereUniqueInput | historico_participanteWhereUniqueInput[]
    delete?: historico_participanteWhereUniqueInput | historico_participanteWhereUniqueInput[]
    connect?: historico_participanteWhereUniqueInput | historico_participanteWhereUniqueInput[]
    update?: historico_participanteUpdateWithWhereUniqueWithoutParticipanteInput | historico_participanteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: historico_participanteUpdateManyWithWhereWithoutParticipanteInput | historico_participanteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: historico_participanteScalarWhereInput | historico_participanteScalarWhereInput[]
  }

  export type inscricao_eventoUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<inscricao_eventoCreateWithoutParticipanteInput, inscricao_eventoUncheckedCreateWithoutParticipanteInput> | inscricao_eventoCreateWithoutParticipanteInput[] | inscricao_eventoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: inscricao_eventoCreateOrConnectWithoutParticipanteInput | inscricao_eventoCreateOrConnectWithoutParticipanteInput[]
    upsert?: inscricao_eventoUpsertWithWhereUniqueWithoutParticipanteInput | inscricao_eventoUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: inscricao_eventoCreateManyParticipanteInputEnvelope
    set?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    disconnect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    delete?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    connect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    update?: inscricao_eventoUpdateWithWhereUniqueWithoutParticipanteInput | inscricao_eventoUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: inscricao_eventoUpdateManyWithWhereWithoutParticipanteInput | inscricao_eventoUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: inscricao_eventoScalarWhereInput | inscricao_eventoScalarWhereInput[]
  }

  export type historico_participanteUncheckedUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<historico_participanteCreateWithoutParticipanteInput, historico_participanteUncheckedCreateWithoutParticipanteInput> | historico_participanteCreateWithoutParticipanteInput[] | historico_participanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: historico_participanteCreateOrConnectWithoutParticipanteInput | historico_participanteCreateOrConnectWithoutParticipanteInput[]
    upsert?: historico_participanteUpsertWithWhereUniqueWithoutParticipanteInput | historico_participanteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: historico_participanteCreateManyParticipanteInputEnvelope
    set?: historico_participanteWhereUniqueInput | historico_participanteWhereUniqueInput[]
    disconnect?: historico_participanteWhereUniqueInput | historico_participanteWhereUniqueInput[]
    delete?: historico_participanteWhereUniqueInput | historico_participanteWhereUniqueInput[]
    connect?: historico_participanteWhereUniqueInput | historico_participanteWhereUniqueInput[]
    update?: historico_participanteUpdateWithWhereUniqueWithoutParticipanteInput | historico_participanteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: historico_participanteUpdateManyWithWhereWithoutParticipanteInput | historico_participanteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: historico_participanteScalarWhereInput | historico_participanteScalarWhereInput[]
  }

  export type inscricao_eventoUncheckedUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<inscricao_eventoCreateWithoutParticipanteInput, inscricao_eventoUncheckedCreateWithoutParticipanteInput> | inscricao_eventoCreateWithoutParticipanteInput[] | inscricao_eventoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: inscricao_eventoCreateOrConnectWithoutParticipanteInput | inscricao_eventoCreateOrConnectWithoutParticipanteInput[]
    upsert?: inscricao_eventoUpsertWithWhereUniqueWithoutParticipanteInput | inscricao_eventoUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: inscricao_eventoCreateManyParticipanteInputEnvelope
    set?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    disconnect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    delete?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    connect?: inscricao_eventoWhereUniqueInput | inscricao_eventoWhereUniqueInput[]
    update?: inscricao_eventoUpdateWithWhereUniqueWithoutParticipanteInput | inscricao_eventoUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: inscricao_eventoUpdateManyWithWhereWithoutParticipanteInput | inscricao_eventoUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: inscricao_eventoScalarWhereInput | inscricao_eventoScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type eventoCreateWithoutCategoriaInput = {
    id?: string
    nome: string
    dataEvento: Date | string
    vagas?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean | null
    inscricao_evento?: inscricao_eventoCreateNestedManyWithoutEventoInput
  }

  export type eventoUncheckedCreateWithoutCategoriaInput = {
    id?: string
    nome: string
    dataEvento: Date | string
    vagas?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean | null
    inscricao_evento?: inscricao_eventoUncheckedCreateNestedManyWithoutEventoInput
  }

  export type eventoCreateOrConnectWithoutCategoriaInput = {
    where: eventoWhereUniqueInput
    create: XOR<eventoCreateWithoutCategoriaInput, eventoUncheckedCreateWithoutCategoriaInput>
  }

  export type eventoCreateManyCategoriaInputEnvelope = {
    data: eventoCreateManyCategoriaInput | eventoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type eventoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: eventoWhereUniqueInput
    update: XOR<eventoUpdateWithoutCategoriaInput, eventoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<eventoCreateWithoutCategoriaInput, eventoUncheckedCreateWithoutCategoriaInput>
  }

  export type eventoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: eventoWhereUniqueInput
    data: XOR<eventoUpdateWithoutCategoriaInput, eventoUncheckedUpdateWithoutCategoriaInput>
  }

  export type eventoUpdateManyWithWhereWithoutCategoriaInput = {
    where: eventoScalarWhereInput
    data: XOR<eventoUpdateManyMutationInput, eventoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type eventoScalarWhereInput = {
    AND?: eventoScalarWhereInput | eventoScalarWhereInput[]
    OR?: eventoScalarWhereInput[]
    NOT?: eventoScalarWhereInput | eventoScalarWhereInput[]
    id?: StringFilter<"evento"> | string
    nome?: StringFilter<"evento"> | string
    dataEvento?: DateTimeFilter<"evento"> | Date | string
    vagas?: IntFilter<"evento"> | number
    idCategoria?: StringFilter<"evento"> | string
    createdAt?: DateTimeNullableFilter<"evento"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"evento"> | Date | string | null
    ativo?: BoolNullableFilter<"evento"> | boolean | null
  }

  export type categoriaCreateWithoutEventoInput = {
    id?: string
    ativo?: boolean
    nome: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type categoriaUncheckedCreateWithoutEventoInput = {
    id?: string
    ativo?: boolean
    nome: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type categoriaCreateOrConnectWithoutEventoInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutEventoInput, categoriaUncheckedCreateWithoutEventoInput>
  }

  export type inscricao_eventoCreateWithoutEventoInput = {
    id?: string
    ativo?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    participante: participanteCreateNestedOneWithoutInscricao_eventoInput
  }

  export type inscricao_eventoUncheckedCreateWithoutEventoInput = {
    id?: string
    idParticipante: string
    ativo?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type inscricao_eventoCreateOrConnectWithoutEventoInput = {
    where: inscricao_eventoWhereUniqueInput
    create: XOR<inscricao_eventoCreateWithoutEventoInput, inscricao_eventoUncheckedCreateWithoutEventoInput>
  }

  export type inscricao_eventoCreateManyEventoInputEnvelope = {
    data: inscricao_eventoCreateManyEventoInput | inscricao_eventoCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type categoriaUpsertWithoutEventoInput = {
    update: XOR<categoriaUpdateWithoutEventoInput, categoriaUncheckedUpdateWithoutEventoInput>
    create: XOR<categoriaCreateWithoutEventoInput, categoriaUncheckedCreateWithoutEventoInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutEventoInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutEventoInput, categoriaUncheckedUpdateWithoutEventoInput>
  }

  export type categoriaUpdateWithoutEventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriaUncheckedUpdateWithoutEventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscricao_eventoUpsertWithWhereUniqueWithoutEventoInput = {
    where: inscricao_eventoWhereUniqueInput
    update: XOR<inscricao_eventoUpdateWithoutEventoInput, inscricao_eventoUncheckedUpdateWithoutEventoInput>
    create: XOR<inscricao_eventoCreateWithoutEventoInput, inscricao_eventoUncheckedCreateWithoutEventoInput>
  }

  export type inscricao_eventoUpdateWithWhereUniqueWithoutEventoInput = {
    where: inscricao_eventoWhereUniqueInput
    data: XOR<inscricao_eventoUpdateWithoutEventoInput, inscricao_eventoUncheckedUpdateWithoutEventoInput>
  }

  export type inscricao_eventoUpdateManyWithWhereWithoutEventoInput = {
    where: inscricao_eventoScalarWhereInput
    data: XOR<inscricao_eventoUpdateManyMutationInput, inscricao_eventoUncheckedUpdateManyWithoutEventoInput>
  }

  export type inscricao_eventoScalarWhereInput = {
    AND?: inscricao_eventoScalarWhereInput | inscricao_eventoScalarWhereInput[]
    OR?: inscricao_eventoScalarWhereInput[]
    NOT?: inscricao_eventoScalarWhereInput | inscricao_eventoScalarWhereInput[]
    id?: StringFilter<"inscricao_evento"> | string
    idEvento?: StringFilter<"inscricao_evento"> | string
    idParticipante?: StringFilter<"inscricao_evento"> | string
    ativo?: BoolFilter<"inscricao_evento"> | boolean
    createdAt?: DateTimeNullableFilter<"inscricao_evento"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"inscricao_evento"> | Date | string | null
  }

  export type participanteCreateWithoutHistorico_participanteInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean
    inscricao_evento?: inscricao_eventoCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUncheckedCreateWithoutHistorico_participanteInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean
    inscricao_evento?: inscricao_eventoUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type participanteCreateOrConnectWithoutHistorico_participanteInput = {
    where: participanteWhereUniqueInput
    create: XOR<participanteCreateWithoutHistorico_participanteInput, participanteUncheckedCreateWithoutHistorico_participanteInput>
  }

  export type participanteUpsertWithoutHistorico_participanteInput = {
    update: XOR<participanteUpdateWithoutHistorico_participanteInput, participanteUncheckedUpdateWithoutHistorico_participanteInput>
    create: XOR<participanteCreateWithoutHistorico_participanteInput, participanteUncheckedCreateWithoutHistorico_participanteInput>
    where?: participanteWhereInput
  }

  export type participanteUpdateToOneWithWhereWithoutHistorico_participanteInput = {
    where?: participanteWhereInput
    data: XOR<participanteUpdateWithoutHistorico_participanteInput, participanteUncheckedUpdateWithoutHistorico_participanteInput>
  }

  export type participanteUpdateWithoutHistorico_participanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    inscricao_evento?: inscricao_eventoUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteUncheckedUpdateWithoutHistorico_participanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    inscricao_evento?: inscricao_eventoUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type eventoCreateWithoutInscricao_eventoInput = {
    id?: string
    nome: string
    dataEvento: Date | string
    vagas?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean | null
    categoria: categoriaCreateNestedOneWithoutEventoInput
  }

  export type eventoUncheckedCreateWithoutInscricao_eventoInput = {
    id?: string
    nome: string
    dataEvento: Date | string
    vagas?: number
    idCategoria: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean | null
  }

  export type eventoCreateOrConnectWithoutInscricao_eventoInput = {
    where: eventoWhereUniqueInput
    create: XOR<eventoCreateWithoutInscricao_eventoInput, eventoUncheckedCreateWithoutInscricao_eventoInput>
  }

  export type participanteCreateWithoutInscricao_eventoInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean
    historico_participante?: historico_participanteCreateNestedManyWithoutParticipanteInput
  }

  export type participanteUncheckedCreateWithoutInscricao_eventoInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean
    historico_participante?: historico_participanteUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type participanteCreateOrConnectWithoutInscricao_eventoInput = {
    where: participanteWhereUniqueInput
    create: XOR<participanteCreateWithoutInscricao_eventoInput, participanteUncheckedCreateWithoutInscricao_eventoInput>
  }

  export type eventoUpsertWithoutInscricao_eventoInput = {
    update: XOR<eventoUpdateWithoutInscricao_eventoInput, eventoUncheckedUpdateWithoutInscricao_eventoInput>
    create: XOR<eventoCreateWithoutInscricao_eventoInput, eventoUncheckedCreateWithoutInscricao_eventoInput>
    where?: eventoWhereInput
  }

  export type eventoUpdateToOneWithWhereWithoutInscricao_eventoInput = {
    where?: eventoWhereInput
    data: XOR<eventoUpdateWithoutInscricao_eventoInput, eventoUncheckedUpdateWithoutInscricao_eventoInput>
  }

  export type eventoUpdateWithoutInscricao_eventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    categoria?: categoriaUpdateOneRequiredWithoutEventoNestedInput
  }

  export type eventoUncheckedUpdateWithoutInscricao_eventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    idCategoria?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type participanteUpsertWithoutInscricao_eventoInput = {
    update: XOR<participanteUpdateWithoutInscricao_eventoInput, participanteUncheckedUpdateWithoutInscricao_eventoInput>
    create: XOR<participanteCreateWithoutInscricao_eventoInput, participanteUncheckedCreateWithoutInscricao_eventoInput>
    where?: participanteWhereInput
  }

  export type participanteUpdateToOneWithWhereWithoutInscricao_eventoInput = {
    where?: participanteWhereInput
    data: XOR<participanteUpdateWithoutInscricao_eventoInput, participanteUncheckedUpdateWithoutInscricao_eventoInput>
  }

  export type participanteUpdateWithoutInscricao_eventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    historico_participante?: historico_participanteUpdateManyWithoutParticipanteNestedInput
  }

  export type participanteUncheckedUpdateWithoutInscricao_eventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    historico_participante?: historico_participanteUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type historico_participanteCreateWithoutParticipanteInput = {
    email: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type historico_participanteUncheckedCreateWithoutParticipanteInput = {
    id?: number
    email: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type historico_participanteCreateOrConnectWithoutParticipanteInput = {
    where: historico_participanteWhereUniqueInput
    create: XOR<historico_participanteCreateWithoutParticipanteInput, historico_participanteUncheckedCreateWithoutParticipanteInput>
  }

  export type historico_participanteCreateManyParticipanteInputEnvelope = {
    data: historico_participanteCreateManyParticipanteInput | historico_participanteCreateManyParticipanteInput[]
    skipDuplicates?: boolean
  }

  export type inscricao_eventoCreateWithoutParticipanteInput = {
    id?: string
    ativo?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    evento: eventoCreateNestedOneWithoutInscricao_eventoInput
  }

  export type inscricao_eventoUncheckedCreateWithoutParticipanteInput = {
    id?: string
    idEvento: string
    ativo?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type inscricao_eventoCreateOrConnectWithoutParticipanteInput = {
    where: inscricao_eventoWhereUniqueInput
    create: XOR<inscricao_eventoCreateWithoutParticipanteInput, inscricao_eventoUncheckedCreateWithoutParticipanteInput>
  }

  export type inscricao_eventoCreateManyParticipanteInputEnvelope = {
    data: inscricao_eventoCreateManyParticipanteInput | inscricao_eventoCreateManyParticipanteInput[]
    skipDuplicates?: boolean
  }

  export type historico_participanteUpsertWithWhereUniqueWithoutParticipanteInput = {
    where: historico_participanteWhereUniqueInput
    update: XOR<historico_participanteUpdateWithoutParticipanteInput, historico_participanteUncheckedUpdateWithoutParticipanteInput>
    create: XOR<historico_participanteCreateWithoutParticipanteInput, historico_participanteUncheckedCreateWithoutParticipanteInput>
  }

  export type historico_participanteUpdateWithWhereUniqueWithoutParticipanteInput = {
    where: historico_participanteWhereUniqueInput
    data: XOR<historico_participanteUpdateWithoutParticipanteInput, historico_participanteUncheckedUpdateWithoutParticipanteInput>
  }

  export type historico_participanteUpdateManyWithWhereWithoutParticipanteInput = {
    where: historico_participanteScalarWhereInput
    data: XOR<historico_participanteUpdateManyMutationInput, historico_participanteUncheckedUpdateManyWithoutParticipanteInput>
  }

  export type historico_participanteScalarWhereInput = {
    AND?: historico_participanteScalarWhereInput | historico_participanteScalarWhereInput[]
    OR?: historico_participanteScalarWhereInput[]
    NOT?: historico_participanteScalarWhereInput | historico_participanteScalarWhereInput[]
    id?: IntFilter<"historico_participante"> | number
    email?: StringFilter<"historico_participante"> | string
    idParticipante?: StringFilter<"historico_participante"> | string
    createdAt?: DateTimeNullableFilter<"historico_participante"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"historico_participante"> | Date | string | null
  }

  export type inscricao_eventoUpsertWithWhereUniqueWithoutParticipanteInput = {
    where: inscricao_eventoWhereUniqueInput
    update: XOR<inscricao_eventoUpdateWithoutParticipanteInput, inscricao_eventoUncheckedUpdateWithoutParticipanteInput>
    create: XOR<inscricao_eventoCreateWithoutParticipanteInput, inscricao_eventoUncheckedCreateWithoutParticipanteInput>
  }

  export type inscricao_eventoUpdateWithWhereUniqueWithoutParticipanteInput = {
    where: inscricao_eventoWhereUniqueInput
    data: XOR<inscricao_eventoUpdateWithoutParticipanteInput, inscricao_eventoUncheckedUpdateWithoutParticipanteInput>
  }

  export type inscricao_eventoUpdateManyWithWhereWithoutParticipanteInput = {
    where: inscricao_eventoScalarWhereInput
    data: XOR<inscricao_eventoUpdateManyMutationInput, inscricao_eventoUncheckedUpdateManyWithoutParticipanteInput>
  }

  export type eventoCreateManyCategoriaInput = {
    id?: string
    nome: string
    dataEvento: Date | string
    vagas?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    ativo?: boolean | null
  }

  export type eventoUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscricao_evento?: inscricao_eventoUpdateManyWithoutEventoNestedInput
  }

  export type eventoUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscricao_evento?: inscricao_eventoUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type eventoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataEvento?: DateTimeFieldUpdateOperationsInput | Date | string
    vagas?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type inscricao_eventoCreateManyEventoInput = {
    id?: string
    idParticipante: string
    ativo?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type inscricao_eventoUpdateWithoutEventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participante?: participanteUpdateOneRequiredWithoutInscricao_eventoNestedInput
  }

  export type inscricao_eventoUncheckedUpdateWithoutEventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscricao_eventoUncheckedUpdateManyWithoutEventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    idParticipante?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type historico_participanteCreateManyParticipanteInput = {
    id?: number
    email: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type inscricao_eventoCreateManyParticipanteInput = {
    id?: string
    idEvento: string
    ativo?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type historico_participanteUpdateWithoutParticipanteInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type historico_participanteUncheckedUpdateWithoutParticipanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type historico_participanteUncheckedUpdateManyWithoutParticipanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscricao_eventoUpdateWithoutParticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evento?: eventoUpdateOneRequiredWithoutInscricao_eventoNestedInput
  }

  export type inscricao_eventoUncheckedUpdateWithoutParticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    idEvento?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscricao_eventoUncheckedUpdateManyWithoutParticipanteInput = {
    id?: StringFieldUpdateOperationsInput | string
    idEvento?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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