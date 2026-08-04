
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
 * Model autor
 * 
 */
export type autor = $Result.DefaultSelection<Prisma.$autorPayload>
/**
 * Model editora
 * 
 */
export type editora = $Result.DefaultSelection<Prisma.$editoraPayload>
/**
 * Model generolivro
 * 
 */
export type generolivro = $Result.DefaultSelection<Prisma.$generolivroPayload>
/**
 * Model livro
 * 
 */
export type livro = $Result.DefaultSelection<Prisma.$livroPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Autors
 * const autors = await prisma.autor.findMany()
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
   * // Fetch zero or more Autors
   * const autors = await prisma.autor.findMany()
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
   * `prisma.autor`: Exposes CRUD operations for the **autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.autorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.editora`: Exposes CRUD operations for the **editora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Editoras
    * const editoras = await prisma.editora.findMany()
    * ```
    */
  get editora(): Prisma.editoraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generolivro`: Exposes CRUD operations for the **generolivro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generolivros
    * const generolivros = await prisma.generolivro.findMany()
    * ```
    */
  get generolivro(): Prisma.generolivroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livro`: Exposes CRUD operations for the **livro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livro.findMany()
    * ```
    */
  get livro(): Prisma.livroDelegate<ExtArgs, ClientOptions>;
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
    autor: 'autor',
    editora: 'editora',
    generolivro: 'generolivro',
    livro: 'livro'
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
      modelProps: "autor" | "editora" | "generolivro" | "livro"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      autor: {
        payload: Prisma.$autorPayload<ExtArgs>
        fields: Prisma.autorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.autorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.autorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          findFirst: {
            args: Prisma.autorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.autorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          findMany: {
            args: Prisma.autorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>[]
          }
          create: {
            args: Prisma.autorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          createMany: {
            args: Prisma.autorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.autorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          update: {
            args: Prisma.autorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          deleteMany: {
            args: Prisma.autorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.autorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.autorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.autorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.autorCountArgs<ExtArgs>
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
      editora: {
        payload: Prisma.$editoraPayload<ExtArgs>
        fields: Prisma.editoraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.editoraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editoraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.editoraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editoraPayload>
          }
          findFirst: {
            args: Prisma.editoraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editoraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.editoraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editoraPayload>
          }
          findMany: {
            args: Prisma.editoraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editoraPayload>[]
          }
          create: {
            args: Prisma.editoraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editoraPayload>
          }
          createMany: {
            args: Prisma.editoraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.editoraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editoraPayload>
          }
          update: {
            args: Prisma.editoraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editoraPayload>
          }
          deleteMany: {
            args: Prisma.editoraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.editoraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.editoraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editoraPayload>
          }
          aggregate: {
            args: Prisma.EditoraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEditora>
          }
          groupBy: {
            args: Prisma.editoraGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditoraGroupByOutputType>[]
          }
          count: {
            args: Prisma.editoraCountArgs<ExtArgs>
            result: $Utils.Optional<EditoraCountAggregateOutputType> | number
          }
        }
      }
      generolivro: {
        payload: Prisma.$generolivroPayload<ExtArgs>
        fields: Prisma.generolivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.generolivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generolivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.generolivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generolivroPayload>
          }
          findFirst: {
            args: Prisma.generolivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generolivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.generolivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generolivroPayload>
          }
          findMany: {
            args: Prisma.generolivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generolivroPayload>[]
          }
          create: {
            args: Prisma.generolivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generolivroPayload>
          }
          createMany: {
            args: Prisma.generolivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.generolivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generolivroPayload>
          }
          update: {
            args: Prisma.generolivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generolivroPayload>
          }
          deleteMany: {
            args: Prisma.generolivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.generolivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.generolivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generolivroPayload>
          }
          aggregate: {
            args: Prisma.GenerolivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenerolivro>
          }
          groupBy: {
            args: Prisma.generolivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenerolivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.generolivroCountArgs<ExtArgs>
            result: $Utils.Optional<GenerolivroCountAggregateOutputType> | number
          }
        }
      }
      livro: {
        payload: Prisma.$livroPayload<ExtArgs>
        fields: Prisma.livroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.livroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.livroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          findFirst: {
            args: Prisma.livroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.livroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          findMany: {
            args: Prisma.livroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>[]
          }
          create: {
            args: Prisma.livroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          createMany: {
            args: Prisma.livroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.livroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          update: {
            args: Prisma.livroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          deleteMany: {
            args: Prisma.livroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.livroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.livroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          aggregate: {
            args: Prisma.LivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivro>
          }
          groupBy: {
            args: Prisma.livroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.livroCountArgs<ExtArgs>
            result: $Utils.Optional<LivroCountAggregateOutputType> | number
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
    autor?: autorOmit
    editora?: editoraOmit
    generolivro?: generolivroOmit
    livro?: livroOmit
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
   * Count Type AutorCountOutputType
   */

  export type AutorCountOutputType = {
    livro: number
  }

  export type AutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | AutorCountOutputTypeCountLivroArgs
  }

  // Custom InputTypes
  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutorCountOutputType
     */
    select?: AutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountLivroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livroWhereInput
  }


  /**
   * Count Type EditoraCountOutputType
   */

  export type EditoraCountOutputType = {
    livro: number
  }

  export type EditoraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | EditoraCountOutputTypeCountLivroArgs
  }

  // Custom InputTypes
  /**
   * EditoraCountOutputType without action
   */
  export type EditoraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditoraCountOutputType
     */
    select?: EditoraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EditoraCountOutputType without action
   */
  export type EditoraCountOutputTypeCountLivroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livroWhereInput
  }


  /**
   * Count Type GenerolivroCountOutputType
   */

  export type GenerolivroCountOutputType = {
    livro: number
  }

  export type GenerolivroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | GenerolivroCountOutputTypeCountLivroArgs
  }

  // Custom InputTypes
  /**
   * GenerolivroCountOutputType without action
   */
  export type GenerolivroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerolivroCountOutputType
     */
    select?: GenerolivroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenerolivroCountOutputType without action
   */
  export type GenerolivroCountOutputTypeCountLivroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model autor
   */

  export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  export type AutorAvgAggregateOutputType = {
    id: number | null
  }

  export type AutorSumAggregateOutputType = {
    id: number | null
  }

  export type AutorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nacionalidade: string | null
    dataNascimento: Date | null
  }

  export type AutorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nacionalidade: string | null
    dataNascimento: Date | null
  }

  export type AutorCountAggregateOutputType = {
    id: number
    nome: number
    nacionalidade: number
    dataNascimento: number
    _all: number
  }


  export type AutorAvgAggregateInputType = {
    id?: true
  }

  export type AutorSumAggregateInputType = {
    id?: true
  }

  export type AutorMinAggregateInputType = {
    id?: true
    nome?: true
    nacionalidade?: true
    dataNascimento?: true
  }

  export type AutorMaxAggregateInputType = {
    id?: true
    nome?: true
    nacionalidade?: true
    dataNascimento?: true
  }

  export type AutorCountAggregateInputType = {
    id?: true
    nome?: true
    nacionalidade?: true
    dataNascimento?: true
    _all?: true
  }

  export type AutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which autor to aggregate.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned autors
    **/
    _count?: true | AutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorMaxAggregateInputType
  }

  export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
        [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutor[P]>
      : GetScalarType<T[P], AggregateAutor[P]>
  }




  export type autorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: autorWhereInput
    orderBy?: autorOrderByWithAggregationInput | autorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: autorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorCountAggregateInputType | true
    _avg?: AutorAvgAggregateInputType
    _sum?: AutorSumAggregateInputType
    _min?: AutorMinAggregateInputType
    _max?: AutorMaxAggregateInputType
  }

  export type AutorGroupByOutputType = {
    id: number
    nome: string
    nacionalidade: string
    dataNascimento: Date
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  type GetAutorGroupByPayload<T extends autorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorGroupByOutputType[P]>
            : GetScalarType<T[P], AutorGroupByOutputType[P]>
        }
      >
    >


  export type autorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nacionalidade?: boolean
    dataNascimento?: boolean
    livro?: boolean | autor$livroArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>



  export type autorSelectScalar = {
    id?: boolean
    nome?: boolean
    nacionalidade?: boolean
    dataNascimento?: boolean
  }

  export type autorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nacionalidade" | "dataNascimento", ExtArgs["result"]["autor"]>
  export type autorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | autor$livroArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $autorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "autor"
    objects: {
      livro: Prisma.$livroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nacionalidade: string
      dataNascimento: Date
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }

  type autorGetPayload<S extends boolean | null | undefined | autorDefaultArgs> = $Result.GetResult<Prisma.$autorPayload, S>

  type autorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<autorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface autorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['autor'], meta: { name: 'autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {autorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends autorFindUniqueArgs>(args: SelectSubset<T, autorFindUniqueArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {autorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends autorFindUniqueOrThrowArgs>(args: SelectSubset<T, autorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends autorFindFirstArgs>(args?: SelectSubset<T, autorFindFirstArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends autorFindFirstOrThrowArgs>(args?: SelectSubset<T, autorFindFirstOrThrowArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autor.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autorWithIdOnly = await prisma.autor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends autorFindManyArgs>(args?: SelectSubset<T, autorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autor.
     * @param {autorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
     */
    create<T extends autorCreateArgs>(args: SelectSubset<T, autorCreateArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {autorCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends autorCreateManyArgs>(args?: SelectSubset<T, autorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Autor.
     * @param {autorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
     */
    delete<T extends autorDeleteArgs>(args: SelectSubset<T, autorDeleteArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autor.
     * @param {autorUpdateArgs} args - Arguments to update one Autor.
     * @example
     * // Update one Autor
     * const autor = await prisma.autor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends autorUpdateArgs>(args: SelectSubset<T, autorUpdateArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {autorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends autorDeleteManyArgs>(args?: SelectSubset<T, autorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends autorUpdateManyArgs>(args: SelectSubset<T, autorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Autor.
     * @param {autorUpsertArgs} args - Arguments to update or create a Autor.
     * @example
     * // Update or create a Autor
     * const autor = await prisma.autor.upsert({
     *   create: {
     *     // ... data to create a Autor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autor we want to update
     *   }
     * })
     */
    upsert<T extends autorUpsertArgs>(args: SelectSubset<T, autorUpsertArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends autorCountArgs>(
      args?: Subset<T, autorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutorAggregateArgs>(args: Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>

    /**
     * Group by Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorGroupByArgs} args - Group by arguments.
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
      T extends autorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: autorGroupByArgs['orderBy'] }
        : { orderBy?: autorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, autorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the autor model
   */
  readonly fields: autorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__autorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends autor$livroArgs<ExtArgs> = {}>(args?: Subset<T, autor$livroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the autor model
   */
  interface autorFieldRefs {
    readonly id: FieldRef<"autor", 'Int'>
    readonly nome: FieldRef<"autor", 'String'>
    readonly nacionalidade: FieldRef<"autor", 'String'>
    readonly dataNascimento: FieldRef<"autor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * autor findUnique
   */
  export type autorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor findUniqueOrThrow
   */
  export type autorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor findFirst
   */
  export type autorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * autor findFirstOrThrow
   */
  export type autorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * autor findMany
   */
  export type autorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autors to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * autor create
   */
  export type autorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The data needed to create a autor.
     */
    data: XOR<autorCreateInput, autorUncheckedCreateInput>
  }

  /**
   * autor createMany
   */
  export type autorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many autors.
     */
    data: autorCreateManyInput | autorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * autor update
   */
  export type autorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The data needed to update a autor.
     */
    data: XOR<autorUpdateInput, autorUncheckedUpdateInput>
    /**
     * Choose, which autor to update.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor updateMany
   */
  export type autorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update autors.
     */
    data: XOR<autorUpdateManyMutationInput, autorUncheckedUpdateManyInput>
    /**
     * Filter which autors to update
     */
    where?: autorWhereInput
    /**
     * Limit how many autors to update.
     */
    limit?: number
  }

  /**
   * autor upsert
   */
  export type autorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The filter to search for the autor to update in case it exists.
     */
    where: autorWhereUniqueInput
    /**
     * In case the autor found by the `where` argument doesn't exist, create a new autor with this data.
     */
    create: XOR<autorCreateInput, autorUncheckedCreateInput>
    /**
     * In case the autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<autorUpdateInput, autorUncheckedUpdateInput>
  }

  /**
   * autor delete
   */
  export type autorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter which autor to delete.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor deleteMany
   */
  export type autorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which autors to delete
     */
    where?: autorWhereInput
    /**
     * Limit how many autors to delete.
     */
    limit?: number
  }

  /**
   * autor.livro
   */
  export type autor$livroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    where?: livroWhereInput
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    cursor?: livroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * autor without action
   */
  export type autorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
  }


  /**
   * Model editora
   */

  export type AggregateEditora = {
    _count: EditoraCountAggregateOutputType | null
    _avg: EditoraAvgAggregateOutputType | null
    _sum: EditoraSumAggregateOutputType | null
    _min: EditoraMinAggregateOutputType | null
    _max: EditoraMaxAggregateOutputType | null
  }

  export type EditoraAvgAggregateOutputType = {
    id: number | null
  }

  export type EditoraSumAggregateOutputType = {
    id: number | null
  }

  export type EditoraMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cidade: string | null
    dataFundacao: Date | null
    pais: string | null
    deletedAt: Date | null
  }

  export type EditoraMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cidade: string | null
    dataFundacao: Date | null
    pais: string | null
    deletedAt: Date | null
  }

  export type EditoraCountAggregateOutputType = {
    id: number
    nome: number
    cidade: number
    dataFundacao: number
    pais: number
    deletedAt: number
    _all: number
  }


  export type EditoraAvgAggregateInputType = {
    id?: true
  }

  export type EditoraSumAggregateInputType = {
    id?: true
  }

  export type EditoraMinAggregateInputType = {
    id?: true
    nome?: true
    cidade?: true
    dataFundacao?: true
    pais?: true
    deletedAt?: true
  }

  export type EditoraMaxAggregateInputType = {
    id?: true
    nome?: true
    cidade?: true
    dataFundacao?: true
    pais?: true
    deletedAt?: true
  }

  export type EditoraCountAggregateInputType = {
    id?: true
    nome?: true
    cidade?: true
    dataFundacao?: true
    pais?: true
    deletedAt?: true
    _all?: true
  }

  export type EditoraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which editora to aggregate.
     */
    where?: editoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editoras to fetch.
     */
    orderBy?: editoraOrderByWithRelationInput | editoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: editoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned editoras
    **/
    _count?: true | EditoraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EditoraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EditoraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditoraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditoraMaxAggregateInputType
  }

  export type GetEditoraAggregateType<T extends EditoraAggregateArgs> = {
        [P in keyof T & keyof AggregateEditora]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEditora[P]>
      : GetScalarType<T[P], AggregateEditora[P]>
  }




  export type editoraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: editoraWhereInput
    orderBy?: editoraOrderByWithAggregationInput | editoraOrderByWithAggregationInput[]
    by: EditoraScalarFieldEnum[] | EditoraScalarFieldEnum
    having?: editoraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditoraCountAggregateInputType | true
    _avg?: EditoraAvgAggregateInputType
    _sum?: EditoraSumAggregateInputType
    _min?: EditoraMinAggregateInputType
    _max?: EditoraMaxAggregateInputType
  }

  export type EditoraGroupByOutputType = {
    id: number
    nome: string
    cidade: string
    dataFundacao: Date
    pais: string
    deletedAt: Date | null
    _count: EditoraCountAggregateOutputType | null
    _avg: EditoraAvgAggregateOutputType | null
    _sum: EditoraSumAggregateOutputType | null
    _min: EditoraMinAggregateOutputType | null
    _max: EditoraMaxAggregateOutputType | null
  }

  type GetEditoraGroupByPayload<T extends editoraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditoraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditoraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditoraGroupByOutputType[P]>
            : GetScalarType<T[P], EditoraGroupByOutputType[P]>
        }
      >
    >


  export type editoraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cidade?: boolean
    dataFundacao?: boolean
    pais?: boolean
    deletedAt?: boolean
    livro?: boolean | editora$livroArgs<ExtArgs>
    _count?: boolean | EditoraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editora"]>



  export type editoraSelectScalar = {
    id?: boolean
    nome?: boolean
    cidade?: boolean
    dataFundacao?: boolean
    pais?: boolean
    deletedAt?: boolean
  }

  export type editoraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cidade" | "dataFundacao" | "pais" | "deletedAt", ExtArgs["result"]["editora"]>
  export type editoraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | editora$livroArgs<ExtArgs>
    _count?: boolean | EditoraCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $editoraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "editora"
    objects: {
      livro: Prisma.$livroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cidade: string
      dataFundacao: Date
      pais: string
      deletedAt: Date | null
    }, ExtArgs["result"]["editora"]>
    composites: {}
  }

  type editoraGetPayload<S extends boolean | null | undefined | editoraDefaultArgs> = $Result.GetResult<Prisma.$editoraPayload, S>

  type editoraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<editoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditoraCountAggregateInputType | true
    }

  export interface editoraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['editora'], meta: { name: 'editora' } }
    /**
     * Find zero or one Editora that matches the filter.
     * @param {editoraFindUniqueArgs} args - Arguments to find a Editora
     * @example
     * // Get one Editora
     * const editora = await prisma.editora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends editoraFindUniqueArgs>(args: SelectSubset<T, editoraFindUniqueArgs<ExtArgs>>): Prisma__editoraClient<$Result.GetResult<Prisma.$editoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Editora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {editoraFindUniqueOrThrowArgs} args - Arguments to find a Editora
     * @example
     * // Get one Editora
     * const editora = await prisma.editora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends editoraFindUniqueOrThrowArgs>(args: SelectSubset<T, editoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__editoraClient<$Result.GetResult<Prisma.$editoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Editora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editoraFindFirstArgs} args - Arguments to find a Editora
     * @example
     * // Get one Editora
     * const editora = await prisma.editora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends editoraFindFirstArgs>(args?: SelectSubset<T, editoraFindFirstArgs<ExtArgs>>): Prisma__editoraClient<$Result.GetResult<Prisma.$editoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Editora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editoraFindFirstOrThrowArgs} args - Arguments to find a Editora
     * @example
     * // Get one Editora
     * const editora = await prisma.editora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends editoraFindFirstOrThrowArgs>(args?: SelectSubset<T, editoraFindFirstOrThrowArgs<ExtArgs>>): Prisma__editoraClient<$Result.GetResult<Prisma.$editoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Editoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editoraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Editoras
     * const editoras = await prisma.editora.findMany()
     * 
     * // Get first 10 Editoras
     * const editoras = await prisma.editora.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const editoraWithIdOnly = await prisma.editora.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends editoraFindManyArgs>(args?: SelectSubset<T, editoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$editoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Editora.
     * @param {editoraCreateArgs} args - Arguments to create a Editora.
     * @example
     * // Create one Editora
     * const Editora = await prisma.editora.create({
     *   data: {
     *     // ... data to create a Editora
     *   }
     * })
     * 
     */
    create<T extends editoraCreateArgs>(args: SelectSubset<T, editoraCreateArgs<ExtArgs>>): Prisma__editoraClient<$Result.GetResult<Prisma.$editoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Editoras.
     * @param {editoraCreateManyArgs} args - Arguments to create many Editoras.
     * @example
     * // Create many Editoras
     * const editora = await prisma.editora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends editoraCreateManyArgs>(args?: SelectSubset<T, editoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Editora.
     * @param {editoraDeleteArgs} args - Arguments to delete one Editora.
     * @example
     * // Delete one Editora
     * const Editora = await prisma.editora.delete({
     *   where: {
     *     // ... filter to delete one Editora
     *   }
     * })
     * 
     */
    delete<T extends editoraDeleteArgs>(args: SelectSubset<T, editoraDeleteArgs<ExtArgs>>): Prisma__editoraClient<$Result.GetResult<Prisma.$editoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Editora.
     * @param {editoraUpdateArgs} args - Arguments to update one Editora.
     * @example
     * // Update one Editora
     * const editora = await prisma.editora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends editoraUpdateArgs>(args: SelectSubset<T, editoraUpdateArgs<ExtArgs>>): Prisma__editoraClient<$Result.GetResult<Prisma.$editoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Editoras.
     * @param {editoraDeleteManyArgs} args - Arguments to filter Editoras to delete.
     * @example
     * // Delete a few Editoras
     * const { count } = await prisma.editora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends editoraDeleteManyArgs>(args?: SelectSubset<T, editoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Editoras
     * const editora = await prisma.editora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends editoraUpdateManyArgs>(args: SelectSubset<T, editoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Editora.
     * @param {editoraUpsertArgs} args - Arguments to update or create a Editora.
     * @example
     * // Update or create a Editora
     * const editora = await prisma.editora.upsert({
     *   create: {
     *     // ... data to create a Editora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Editora we want to update
     *   }
     * })
     */
    upsert<T extends editoraUpsertArgs>(args: SelectSubset<T, editoraUpsertArgs<ExtArgs>>): Prisma__editoraClient<$Result.GetResult<Prisma.$editoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Editoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editoraCountArgs} args - Arguments to filter Editoras to count.
     * @example
     * // Count the number of Editoras
     * const count = await prisma.editora.count({
     *   where: {
     *     // ... the filter for the Editoras we want to count
     *   }
     * })
    **/
    count<T extends editoraCountArgs>(
      args?: Subset<T, editoraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditoraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Editora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EditoraAggregateArgs>(args: Subset<T, EditoraAggregateArgs>): Prisma.PrismaPromise<GetEditoraAggregateType<T>>

    /**
     * Group by Editora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editoraGroupByArgs} args - Group by arguments.
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
      T extends editoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: editoraGroupByArgs['orderBy'] }
        : { orderBy?: editoraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, editoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the editora model
   */
  readonly fields: editoraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for editora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__editoraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends editora$livroArgs<ExtArgs> = {}>(args?: Subset<T, editora$livroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the editora model
   */
  interface editoraFieldRefs {
    readonly id: FieldRef<"editora", 'Int'>
    readonly nome: FieldRef<"editora", 'String'>
    readonly cidade: FieldRef<"editora", 'String'>
    readonly dataFundacao: FieldRef<"editora", 'DateTime'>
    readonly pais: FieldRef<"editora", 'String'>
    readonly deletedAt: FieldRef<"editora", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * editora findUnique
   */
  export type editoraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editora
     */
    select?: editoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editora
     */
    omit?: editoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editoraInclude<ExtArgs> | null
    /**
     * Filter, which editora to fetch.
     */
    where: editoraWhereUniqueInput
  }

  /**
   * editora findUniqueOrThrow
   */
  export type editoraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editora
     */
    select?: editoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editora
     */
    omit?: editoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editoraInclude<ExtArgs> | null
    /**
     * Filter, which editora to fetch.
     */
    where: editoraWhereUniqueInput
  }

  /**
   * editora findFirst
   */
  export type editoraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editora
     */
    select?: editoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editora
     */
    omit?: editoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editoraInclude<ExtArgs> | null
    /**
     * Filter, which editora to fetch.
     */
    where?: editoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editoras to fetch.
     */
    orderBy?: editoraOrderByWithRelationInput | editoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for editoras.
     */
    cursor?: editoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of editoras.
     */
    distinct?: EditoraScalarFieldEnum | EditoraScalarFieldEnum[]
  }

  /**
   * editora findFirstOrThrow
   */
  export type editoraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editora
     */
    select?: editoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editora
     */
    omit?: editoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editoraInclude<ExtArgs> | null
    /**
     * Filter, which editora to fetch.
     */
    where?: editoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editoras to fetch.
     */
    orderBy?: editoraOrderByWithRelationInput | editoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for editoras.
     */
    cursor?: editoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of editoras.
     */
    distinct?: EditoraScalarFieldEnum | EditoraScalarFieldEnum[]
  }

  /**
   * editora findMany
   */
  export type editoraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editora
     */
    select?: editoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editora
     */
    omit?: editoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editoraInclude<ExtArgs> | null
    /**
     * Filter, which editoras to fetch.
     */
    where?: editoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editoras to fetch.
     */
    orderBy?: editoraOrderByWithRelationInput | editoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing editoras.
     */
    cursor?: editoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of editoras.
     */
    distinct?: EditoraScalarFieldEnum | EditoraScalarFieldEnum[]
  }

  /**
   * editora create
   */
  export type editoraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editora
     */
    select?: editoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editora
     */
    omit?: editoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editoraInclude<ExtArgs> | null
    /**
     * The data needed to create a editora.
     */
    data: XOR<editoraCreateInput, editoraUncheckedCreateInput>
  }

  /**
   * editora createMany
   */
  export type editoraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many editoras.
     */
    data: editoraCreateManyInput | editoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * editora update
   */
  export type editoraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editora
     */
    select?: editoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editora
     */
    omit?: editoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editoraInclude<ExtArgs> | null
    /**
     * The data needed to update a editora.
     */
    data: XOR<editoraUpdateInput, editoraUncheckedUpdateInput>
    /**
     * Choose, which editora to update.
     */
    where: editoraWhereUniqueInput
  }

  /**
   * editora updateMany
   */
  export type editoraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update editoras.
     */
    data: XOR<editoraUpdateManyMutationInput, editoraUncheckedUpdateManyInput>
    /**
     * Filter which editoras to update
     */
    where?: editoraWhereInput
    /**
     * Limit how many editoras to update.
     */
    limit?: number
  }

  /**
   * editora upsert
   */
  export type editoraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editora
     */
    select?: editoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editora
     */
    omit?: editoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editoraInclude<ExtArgs> | null
    /**
     * The filter to search for the editora to update in case it exists.
     */
    where: editoraWhereUniqueInput
    /**
     * In case the editora found by the `where` argument doesn't exist, create a new editora with this data.
     */
    create: XOR<editoraCreateInput, editoraUncheckedCreateInput>
    /**
     * In case the editora was found with the provided `where` argument, update it with this data.
     */
    update: XOR<editoraUpdateInput, editoraUncheckedUpdateInput>
  }

  /**
   * editora delete
   */
  export type editoraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editora
     */
    select?: editoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editora
     */
    omit?: editoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editoraInclude<ExtArgs> | null
    /**
     * Filter which editora to delete.
     */
    where: editoraWhereUniqueInput
  }

  /**
   * editora deleteMany
   */
  export type editoraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which editoras to delete
     */
    where?: editoraWhereInput
    /**
     * Limit how many editoras to delete.
     */
    limit?: number
  }

  /**
   * editora.livro
   */
  export type editora$livroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    where?: livroWhereInput
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    cursor?: livroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * editora without action
   */
  export type editoraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editora
     */
    select?: editoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editora
     */
    omit?: editoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editoraInclude<ExtArgs> | null
  }


  /**
   * Model generolivro
   */

  export type AggregateGenerolivro = {
    _count: GenerolivroCountAggregateOutputType | null
    _avg: GenerolivroAvgAggregateOutputType | null
    _sum: GenerolivroSumAggregateOutputType | null
    _min: GenerolivroMinAggregateOutputType | null
    _max: GenerolivroMaxAggregateOutputType | null
  }

  export type GenerolivroAvgAggregateOutputType = {
    id: number | null
  }

  export type GenerolivroSumAggregateOutputType = {
    id: number | null
  }

  export type GenerolivroMinAggregateOutputType = {
    id: number | null
    nome: string | null
    deleted: boolean | null
  }

  export type GenerolivroMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    deleted: boolean | null
  }

  export type GenerolivroCountAggregateOutputType = {
    id: number
    nome: number
    deleted: number
    _all: number
  }


  export type GenerolivroAvgAggregateInputType = {
    id?: true
  }

  export type GenerolivroSumAggregateInputType = {
    id?: true
  }

  export type GenerolivroMinAggregateInputType = {
    id?: true
    nome?: true
    deleted?: true
  }

  export type GenerolivroMaxAggregateInputType = {
    id?: true
    nome?: true
    deleted?: true
  }

  export type GenerolivroCountAggregateInputType = {
    id?: true
    nome?: true
    deleted?: true
    _all?: true
  }

  export type GenerolivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which generolivro to aggregate.
     */
    where?: generolivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generolivros to fetch.
     */
    orderBy?: generolivroOrderByWithRelationInput | generolivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: generolivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generolivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generolivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned generolivros
    **/
    _count?: true | GenerolivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenerolivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenerolivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenerolivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenerolivroMaxAggregateInputType
  }

  export type GetGenerolivroAggregateType<T extends GenerolivroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenerolivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenerolivro[P]>
      : GetScalarType<T[P], AggregateGenerolivro[P]>
  }




  export type generolivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: generolivroWhereInput
    orderBy?: generolivroOrderByWithAggregationInput | generolivroOrderByWithAggregationInput[]
    by: GenerolivroScalarFieldEnum[] | GenerolivroScalarFieldEnum
    having?: generolivroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenerolivroCountAggregateInputType | true
    _avg?: GenerolivroAvgAggregateInputType
    _sum?: GenerolivroSumAggregateInputType
    _min?: GenerolivroMinAggregateInputType
    _max?: GenerolivroMaxAggregateInputType
  }

  export type GenerolivroGroupByOutputType = {
    id: number
    nome: string
    deleted: boolean
    _count: GenerolivroCountAggregateOutputType | null
    _avg: GenerolivroAvgAggregateOutputType | null
    _sum: GenerolivroSumAggregateOutputType | null
    _min: GenerolivroMinAggregateOutputType | null
    _max: GenerolivroMaxAggregateOutputType | null
  }

  type GetGenerolivroGroupByPayload<T extends generolivroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenerolivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenerolivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenerolivroGroupByOutputType[P]>
            : GetScalarType<T[P], GenerolivroGroupByOutputType[P]>
        }
      >
    >


  export type generolivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    deleted?: boolean
    livro?: boolean | generolivro$livroArgs<ExtArgs>
    _count?: boolean | GenerolivroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generolivro"]>



  export type generolivroSelectScalar = {
    id?: boolean
    nome?: boolean
    deleted?: boolean
  }

  export type generolivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "deleted", ExtArgs["result"]["generolivro"]>
  export type generolivroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | generolivro$livroArgs<ExtArgs>
    _count?: boolean | GenerolivroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $generolivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "generolivro"
    objects: {
      livro: Prisma.$livroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      deleted: boolean
    }, ExtArgs["result"]["generolivro"]>
    composites: {}
  }

  type generolivroGetPayload<S extends boolean | null | undefined | generolivroDefaultArgs> = $Result.GetResult<Prisma.$generolivroPayload, S>

  type generolivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<generolivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenerolivroCountAggregateInputType | true
    }

  export interface generolivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['generolivro'], meta: { name: 'generolivro' } }
    /**
     * Find zero or one Generolivro that matches the filter.
     * @param {generolivroFindUniqueArgs} args - Arguments to find a Generolivro
     * @example
     * // Get one Generolivro
     * const generolivro = await prisma.generolivro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends generolivroFindUniqueArgs>(args: SelectSubset<T, generolivroFindUniqueArgs<ExtArgs>>): Prisma__generolivroClient<$Result.GetResult<Prisma.$generolivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Generolivro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {generolivroFindUniqueOrThrowArgs} args - Arguments to find a Generolivro
     * @example
     * // Get one Generolivro
     * const generolivro = await prisma.generolivro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends generolivroFindUniqueOrThrowArgs>(args: SelectSubset<T, generolivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__generolivroClient<$Result.GetResult<Prisma.$generolivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generolivro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generolivroFindFirstArgs} args - Arguments to find a Generolivro
     * @example
     * // Get one Generolivro
     * const generolivro = await prisma.generolivro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends generolivroFindFirstArgs>(args?: SelectSubset<T, generolivroFindFirstArgs<ExtArgs>>): Prisma__generolivroClient<$Result.GetResult<Prisma.$generolivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generolivro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generolivroFindFirstOrThrowArgs} args - Arguments to find a Generolivro
     * @example
     * // Get one Generolivro
     * const generolivro = await prisma.generolivro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends generolivroFindFirstOrThrowArgs>(args?: SelectSubset<T, generolivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__generolivroClient<$Result.GetResult<Prisma.$generolivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generolivros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generolivroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generolivros
     * const generolivros = await prisma.generolivro.findMany()
     * 
     * // Get first 10 Generolivros
     * const generolivros = await prisma.generolivro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generolivroWithIdOnly = await prisma.generolivro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends generolivroFindManyArgs>(args?: SelectSubset<T, generolivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$generolivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Generolivro.
     * @param {generolivroCreateArgs} args - Arguments to create a Generolivro.
     * @example
     * // Create one Generolivro
     * const Generolivro = await prisma.generolivro.create({
     *   data: {
     *     // ... data to create a Generolivro
     *   }
     * })
     * 
     */
    create<T extends generolivroCreateArgs>(args: SelectSubset<T, generolivroCreateArgs<ExtArgs>>): Prisma__generolivroClient<$Result.GetResult<Prisma.$generolivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generolivros.
     * @param {generolivroCreateManyArgs} args - Arguments to create many Generolivros.
     * @example
     * // Create many Generolivros
     * const generolivro = await prisma.generolivro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends generolivroCreateManyArgs>(args?: SelectSubset<T, generolivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Generolivro.
     * @param {generolivroDeleteArgs} args - Arguments to delete one Generolivro.
     * @example
     * // Delete one Generolivro
     * const Generolivro = await prisma.generolivro.delete({
     *   where: {
     *     // ... filter to delete one Generolivro
     *   }
     * })
     * 
     */
    delete<T extends generolivroDeleteArgs>(args: SelectSubset<T, generolivroDeleteArgs<ExtArgs>>): Prisma__generolivroClient<$Result.GetResult<Prisma.$generolivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Generolivro.
     * @param {generolivroUpdateArgs} args - Arguments to update one Generolivro.
     * @example
     * // Update one Generolivro
     * const generolivro = await prisma.generolivro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends generolivroUpdateArgs>(args: SelectSubset<T, generolivroUpdateArgs<ExtArgs>>): Prisma__generolivroClient<$Result.GetResult<Prisma.$generolivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generolivros.
     * @param {generolivroDeleteManyArgs} args - Arguments to filter Generolivros to delete.
     * @example
     * // Delete a few Generolivros
     * const { count } = await prisma.generolivro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends generolivroDeleteManyArgs>(args?: SelectSubset<T, generolivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generolivros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generolivroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generolivros
     * const generolivro = await prisma.generolivro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends generolivroUpdateManyArgs>(args: SelectSubset<T, generolivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Generolivro.
     * @param {generolivroUpsertArgs} args - Arguments to update or create a Generolivro.
     * @example
     * // Update or create a Generolivro
     * const generolivro = await prisma.generolivro.upsert({
     *   create: {
     *     // ... data to create a Generolivro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Generolivro we want to update
     *   }
     * })
     */
    upsert<T extends generolivroUpsertArgs>(args: SelectSubset<T, generolivroUpsertArgs<ExtArgs>>): Prisma__generolivroClient<$Result.GetResult<Prisma.$generolivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generolivros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generolivroCountArgs} args - Arguments to filter Generolivros to count.
     * @example
     * // Count the number of Generolivros
     * const count = await prisma.generolivro.count({
     *   where: {
     *     // ... the filter for the Generolivros we want to count
     *   }
     * })
    **/
    count<T extends generolivroCountArgs>(
      args?: Subset<T, generolivroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenerolivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Generolivro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerolivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenerolivroAggregateArgs>(args: Subset<T, GenerolivroAggregateArgs>): Prisma.PrismaPromise<GetGenerolivroAggregateType<T>>

    /**
     * Group by Generolivro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generolivroGroupByArgs} args - Group by arguments.
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
      T extends generolivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: generolivroGroupByArgs['orderBy'] }
        : { orderBy?: generolivroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, generolivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenerolivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the generolivro model
   */
  readonly fields: generolivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for generolivro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__generolivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends generolivro$livroArgs<ExtArgs> = {}>(args?: Subset<T, generolivro$livroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the generolivro model
   */
  interface generolivroFieldRefs {
    readonly id: FieldRef<"generolivro", 'Int'>
    readonly nome: FieldRef<"generolivro", 'String'>
    readonly deleted: FieldRef<"generolivro", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * generolivro findUnique
   */
  export type generolivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generolivro
     */
    select?: generolivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generolivro
     */
    omit?: generolivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generolivroInclude<ExtArgs> | null
    /**
     * Filter, which generolivro to fetch.
     */
    where: generolivroWhereUniqueInput
  }

  /**
   * generolivro findUniqueOrThrow
   */
  export type generolivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generolivro
     */
    select?: generolivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generolivro
     */
    omit?: generolivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generolivroInclude<ExtArgs> | null
    /**
     * Filter, which generolivro to fetch.
     */
    where: generolivroWhereUniqueInput
  }

  /**
   * generolivro findFirst
   */
  export type generolivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generolivro
     */
    select?: generolivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generolivro
     */
    omit?: generolivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generolivroInclude<ExtArgs> | null
    /**
     * Filter, which generolivro to fetch.
     */
    where?: generolivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generolivros to fetch.
     */
    orderBy?: generolivroOrderByWithRelationInput | generolivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generolivros.
     */
    cursor?: generolivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generolivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generolivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generolivros.
     */
    distinct?: GenerolivroScalarFieldEnum | GenerolivroScalarFieldEnum[]
  }

  /**
   * generolivro findFirstOrThrow
   */
  export type generolivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generolivro
     */
    select?: generolivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generolivro
     */
    omit?: generolivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generolivroInclude<ExtArgs> | null
    /**
     * Filter, which generolivro to fetch.
     */
    where?: generolivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generolivros to fetch.
     */
    orderBy?: generolivroOrderByWithRelationInput | generolivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generolivros.
     */
    cursor?: generolivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generolivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generolivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generolivros.
     */
    distinct?: GenerolivroScalarFieldEnum | GenerolivroScalarFieldEnum[]
  }

  /**
   * generolivro findMany
   */
  export type generolivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generolivro
     */
    select?: generolivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generolivro
     */
    omit?: generolivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generolivroInclude<ExtArgs> | null
    /**
     * Filter, which generolivros to fetch.
     */
    where?: generolivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generolivros to fetch.
     */
    orderBy?: generolivroOrderByWithRelationInput | generolivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing generolivros.
     */
    cursor?: generolivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generolivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generolivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generolivros.
     */
    distinct?: GenerolivroScalarFieldEnum | GenerolivroScalarFieldEnum[]
  }

  /**
   * generolivro create
   */
  export type generolivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generolivro
     */
    select?: generolivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generolivro
     */
    omit?: generolivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generolivroInclude<ExtArgs> | null
    /**
     * The data needed to create a generolivro.
     */
    data: XOR<generolivroCreateInput, generolivroUncheckedCreateInput>
  }

  /**
   * generolivro createMany
   */
  export type generolivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many generolivros.
     */
    data: generolivroCreateManyInput | generolivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * generolivro update
   */
  export type generolivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generolivro
     */
    select?: generolivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generolivro
     */
    omit?: generolivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generolivroInclude<ExtArgs> | null
    /**
     * The data needed to update a generolivro.
     */
    data: XOR<generolivroUpdateInput, generolivroUncheckedUpdateInput>
    /**
     * Choose, which generolivro to update.
     */
    where: generolivroWhereUniqueInput
  }

  /**
   * generolivro updateMany
   */
  export type generolivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update generolivros.
     */
    data: XOR<generolivroUpdateManyMutationInput, generolivroUncheckedUpdateManyInput>
    /**
     * Filter which generolivros to update
     */
    where?: generolivroWhereInput
    /**
     * Limit how many generolivros to update.
     */
    limit?: number
  }

  /**
   * generolivro upsert
   */
  export type generolivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generolivro
     */
    select?: generolivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generolivro
     */
    omit?: generolivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generolivroInclude<ExtArgs> | null
    /**
     * The filter to search for the generolivro to update in case it exists.
     */
    where: generolivroWhereUniqueInput
    /**
     * In case the generolivro found by the `where` argument doesn't exist, create a new generolivro with this data.
     */
    create: XOR<generolivroCreateInput, generolivroUncheckedCreateInput>
    /**
     * In case the generolivro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<generolivroUpdateInput, generolivroUncheckedUpdateInput>
  }

  /**
   * generolivro delete
   */
  export type generolivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generolivro
     */
    select?: generolivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generolivro
     */
    omit?: generolivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generolivroInclude<ExtArgs> | null
    /**
     * Filter which generolivro to delete.
     */
    where: generolivroWhereUniqueInput
  }

  /**
   * generolivro deleteMany
   */
  export type generolivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which generolivros to delete
     */
    where?: generolivroWhereInput
    /**
     * Limit how many generolivros to delete.
     */
    limit?: number
  }

  /**
   * generolivro.livro
   */
  export type generolivro$livroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    where?: livroWhereInput
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    cursor?: livroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * generolivro without action
   */
  export type generolivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generolivro
     */
    select?: generolivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generolivro
     */
    omit?: generolivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generolivroInclude<ExtArgs> | null
  }


  /**
   * Model livro
   */

  export type AggregateLivro = {
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  export type LivroAvgAggregateOutputType = {
    id: number | null
    numPaginas: number | null
    idGenero: number | null
    idEditora: number | null
    idAutor: number | null
  }

  export type LivroSumAggregateOutputType = {
    id: number | null
    numPaginas: number | null
    idGenero: number | null
    idEditora: number | null
    idAutor: number | null
  }

  export type LivroMinAggregateOutputType = {
    id: number | null
    nome: string | null
    isbn: string | null
    dataFundacao: Date | null
    numPaginas: number | null
    volume: string | null
    colecao: string | null
    edicao: string | null
    dataLancamento: Date | null
    idGenero: number | null
    idEditora: number | null
    idAutor: number | null
    deleted: boolean | null
  }

  export type LivroMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    isbn: string | null
    dataFundacao: Date | null
    numPaginas: number | null
    volume: string | null
    colecao: string | null
    edicao: string | null
    dataLancamento: Date | null
    idGenero: number | null
    idEditora: number | null
    idAutor: number | null
    deleted: boolean | null
  }

  export type LivroCountAggregateOutputType = {
    id: number
    nome: number
    isbn: number
    dataFundacao: number
    numPaginas: number
    volume: number
    colecao: number
    edicao: number
    dataLancamento: number
    idGenero: number
    idEditora: number
    idAutor: number
    deleted: number
    _all: number
  }


  export type LivroAvgAggregateInputType = {
    id?: true
    numPaginas?: true
    idGenero?: true
    idEditora?: true
    idAutor?: true
  }

  export type LivroSumAggregateInputType = {
    id?: true
    numPaginas?: true
    idGenero?: true
    idEditora?: true
    idAutor?: true
  }

  export type LivroMinAggregateInputType = {
    id?: true
    nome?: true
    isbn?: true
    dataFundacao?: true
    numPaginas?: true
    volume?: true
    colecao?: true
    edicao?: true
    dataLancamento?: true
    idGenero?: true
    idEditora?: true
    idAutor?: true
    deleted?: true
  }

  export type LivroMaxAggregateInputType = {
    id?: true
    nome?: true
    isbn?: true
    dataFundacao?: true
    numPaginas?: true
    volume?: true
    colecao?: true
    edicao?: true
    dataLancamento?: true
    idGenero?: true
    idEditora?: true
    idAutor?: true
    deleted?: true
  }

  export type LivroCountAggregateInputType = {
    id?: true
    nome?: true
    isbn?: true
    dataFundacao?: true
    numPaginas?: true
    volume?: true
    colecao?: true
    edicao?: true
    dataLancamento?: true
    idGenero?: true
    idEditora?: true
    idAutor?: true
    deleted?: true
    _all?: true
  }

  export type LivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which livro to aggregate.
     */
    where?: livroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: livroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned livros
    **/
    _count?: true | LivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivroMaxAggregateInputType
  }

  export type GetLivroAggregateType<T extends LivroAggregateArgs> = {
        [P in keyof T & keyof AggregateLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivro[P]>
      : GetScalarType<T[P], AggregateLivro[P]>
  }




  export type livroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livroWhereInput
    orderBy?: livroOrderByWithAggregationInput | livroOrderByWithAggregationInput[]
    by: LivroScalarFieldEnum[] | LivroScalarFieldEnum
    having?: livroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivroCountAggregateInputType | true
    _avg?: LivroAvgAggregateInputType
    _sum?: LivroSumAggregateInputType
    _min?: LivroMinAggregateInputType
    _max?: LivroMaxAggregateInputType
  }

  export type LivroGroupByOutputType = {
    id: number
    nome: string
    isbn: string
    dataFundacao: Date
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date
    idGenero: number
    idEditora: number
    idAutor: number
    deleted: boolean
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  type GetLivroGroupByPayload<T extends livroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivroGroupByOutputType[P]>
            : GetScalarType<T[P], LivroGroupByOutputType[P]>
        }
      >
    >


  export type livroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    isbn?: boolean
    dataFundacao?: boolean
    numPaginas?: boolean
    volume?: boolean
    colecao?: boolean
    edicao?: boolean
    dataLancamento?: boolean
    idGenero?: boolean
    idEditora?: boolean
    idAutor?: boolean
    deleted?: boolean
    autor?: boolean | autorDefaultArgs<ExtArgs>
    editora?: boolean | editoraDefaultArgs<ExtArgs>
    generolivro?: boolean | generolivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>



  export type livroSelectScalar = {
    id?: boolean
    nome?: boolean
    isbn?: boolean
    dataFundacao?: boolean
    numPaginas?: boolean
    volume?: boolean
    colecao?: boolean
    edicao?: boolean
    dataLancamento?: boolean
    idGenero?: boolean
    idEditora?: boolean
    idAutor?: boolean
    deleted?: boolean
  }

  export type livroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "isbn" | "dataFundacao" | "numPaginas" | "volume" | "colecao" | "edicao" | "dataLancamento" | "idGenero" | "idEditora" | "idAutor" | "deleted", ExtArgs["result"]["livro"]>
  export type livroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | autorDefaultArgs<ExtArgs>
    editora?: boolean | editoraDefaultArgs<ExtArgs>
    generolivro?: boolean | generolivroDefaultArgs<ExtArgs>
  }

  export type $livroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "livro"
    objects: {
      autor: Prisma.$autorPayload<ExtArgs>
      editora: Prisma.$editoraPayload<ExtArgs>
      generolivro: Prisma.$generolivroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      isbn: string
      dataFundacao: Date
      numPaginas: number
      volume: string
      colecao: string
      edicao: string
      dataLancamento: Date
      idGenero: number
      idEditora: number
      idAutor: number
      deleted: boolean
    }, ExtArgs["result"]["livro"]>
    composites: {}
  }

  type livroGetPayload<S extends boolean | null | undefined | livroDefaultArgs> = $Result.GetResult<Prisma.$livroPayload, S>

  type livroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<livroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroCountAggregateInputType | true
    }

  export interface livroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['livro'], meta: { name: 'livro' } }
    /**
     * Find zero or one Livro that matches the filter.
     * @param {livroFindUniqueArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends livroFindUniqueArgs>(args: SelectSubset<T, livroFindUniqueArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {livroFindUniqueOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends livroFindUniqueOrThrowArgs>(args: SelectSubset<T, livroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroFindFirstArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends livroFindFirstArgs>(args?: SelectSubset<T, livroFindFirstArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroFindFirstOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends livroFindFirstOrThrowArgs>(args?: SelectSubset<T, livroFindFirstOrThrowArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livro.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livroWithIdOnly = await prisma.livro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends livroFindManyArgs>(args?: SelectSubset<T, livroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livro.
     * @param {livroCreateArgs} args - Arguments to create a Livro.
     * @example
     * // Create one Livro
     * const Livro = await prisma.livro.create({
     *   data: {
     *     // ... data to create a Livro
     *   }
     * })
     * 
     */
    create<T extends livroCreateArgs>(args: SelectSubset<T, livroCreateArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {livroCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends livroCreateManyArgs>(args?: SelectSubset<T, livroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Livro.
     * @param {livroDeleteArgs} args - Arguments to delete one Livro.
     * @example
     * // Delete one Livro
     * const Livro = await prisma.livro.delete({
     *   where: {
     *     // ... filter to delete one Livro
     *   }
     * })
     * 
     */
    delete<T extends livroDeleteArgs>(args: SelectSubset<T, livroDeleteArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livro.
     * @param {livroUpdateArgs} args - Arguments to update one Livro.
     * @example
     * // Update one Livro
     * const livro = await prisma.livro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends livroUpdateArgs>(args: SelectSubset<T, livroUpdateArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {livroDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends livroDeleteManyArgs>(args?: SelectSubset<T, livroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends livroUpdateManyArgs>(args: SelectSubset<T, livroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Livro.
     * @param {livroUpsertArgs} args - Arguments to update or create a Livro.
     * @example
     * // Update or create a Livro
     * const livro = await prisma.livro.upsert({
     *   create: {
     *     // ... data to create a Livro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livro we want to update
     *   }
     * })
     */
    upsert<T extends livroUpsertArgs>(args: SelectSubset<T, livroUpsertArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livro.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends livroCountArgs>(
      args?: Subset<T, livroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LivroAggregateArgs>(args: Subset<T, LivroAggregateArgs>): Prisma.PrismaPromise<GetLivroAggregateType<T>>

    /**
     * Group by Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroGroupByArgs} args - Group by arguments.
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
      T extends livroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: livroGroupByArgs['orderBy'] }
        : { orderBy?: livroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, livroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the livro model
   */
  readonly fields: livroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for livro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__livroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends autorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, autorDefaultArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    editora<T extends editoraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, editoraDefaultArgs<ExtArgs>>): Prisma__editoraClient<$Result.GetResult<Prisma.$editoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generolivro<T extends generolivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, generolivroDefaultArgs<ExtArgs>>): Prisma__generolivroClient<$Result.GetResult<Prisma.$generolivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the livro model
   */
  interface livroFieldRefs {
    readonly id: FieldRef<"livro", 'Int'>
    readonly nome: FieldRef<"livro", 'String'>
    readonly isbn: FieldRef<"livro", 'String'>
    readonly dataFundacao: FieldRef<"livro", 'DateTime'>
    readonly numPaginas: FieldRef<"livro", 'Int'>
    readonly volume: FieldRef<"livro", 'String'>
    readonly colecao: FieldRef<"livro", 'String'>
    readonly edicao: FieldRef<"livro", 'String'>
    readonly dataLancamento: FieldRef<"livro", 'DateTime'>
    readonly idGenero: FieldRef<"livro", 'Int'>
    readonly idEditora: FieldRef<"livro", 'Int'>
    readonly idAutor: FieldRef<"livro", 'Int'>
    readonly deleted: FieldRef<"livro", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * livro findUnique
   */
  export type livroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter, which livro to fetch.
     */
    where: livroWhereUniqueInput
  }

  /**
   * livro findUniqueOrThrow
   */
  export type livroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter, which livro to fetch.
     */
    where: livroWhereUniqueInput
  }

  /**
   * livro findFirst
   */
  export type livroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter, which livro to fetch.
     */
    where?: livroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for livros.
     */
    cursor?: livroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * livro findFirstOrThrow
   */
  export type livroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter, which livro to fetch.
     */
    where?: livroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for livros.
     */
    cursor?: livroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * livro findMany
   */
  export type livroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter, which livros to fetch.
     */
    where?: livroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing livros.
     */
    cursor?: livroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * livro create
   */
  export type livroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * The data needed to create a livro.
     */
    data: XOR<livroCreateInput, livroUncheckedCreateInput>
  }

  /**
   * livro createMany
   */
  export type livroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many livros.
     */
    data: livroCreateManyInput | livroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * livro update
   */
  export type livroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * The data needed to update a livro.
     */
    data: XOR<livroUpdateInput, livroUncheckedUpdateInput>
    /**
     * Choose, which livro to update.
     */
    where: livroWhereUniqueInput
  }

  /**
   * livro updateMany
   */
  export type livroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update livros.
     */
    data: XOR<livroUpdateManyMutationInput, livroUncheckedUpdateManyInput>
    /**
     * Filter which livros to update
     */
    where?: livroWhereInput
    /**
     * Limit how many livros to update.
     */
    limit?: number
  }

  /**
   * livro upsert
   */
  export type livroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * The filter to search for the livro to update in case it exists.
     */
    where: livroWhereUniqueInput
    /**
     * In case the livro found by the `where` argument doesn't exist, create a new livro with this data.
     */
    create: XOR<livroCreateInput, livroUncheckedCreateInput>
    /**
     * In case the livro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<livroUpdateInput, livroUncheckedUpdateInput>
  }

  /**
   * livro delete
   */
  export type livroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter which livro to delete.
     */
    where: livroWhereUniqueInput
  }

  /**
   * livro deleteMany
   */
  export type livroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which livros to delete
     */
    where?: livroWhereInput
    /**
     * Limit how many livros to delete.
     */
    limit?: number
  }

  /**
   * livro without action
   */
  export type livroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
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


  export const AutorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nacionalidade: 'nacionalidade',
    dataNascimento: 'dataNascimento'
  };

  export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum]


  export const EditoraScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cidade: 'cidade',
    dataFundacao: 'dataFundacao',
    pais: 'pais',
    deletedAt: 'deletedAt'
  };

  export type EditoraScalarFieldEnum = (typeof EditoraScalarFieldEnum)[keyof typeof EditoraScalarFieldEnum]


  export const GenerolivroScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    deleted: 'deleted'
  };

  export type GenerolivroScalarFieldEnum = (typeof GenerolivroScalarFieldEnum)[keyof typeof GenerolivroScalarFieldEnum]


  export const LivroScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    isbn: 'isbn',
    dataFundacao: 'dataFundacao',
    numPaginas: 'numPaginas',
    volume: 'volume',
    colecao: 'colecao',
    edicao: 'edicao',
    dataLancamento: 'dataLancamento',
    idGenero: 'idGenero',
    idEditora: 'idEditora',
    idAutor: 'idAutor',
    deleted: 'deleted'
  };

  export type LivroScalarFieldEnum = (typeof LivroScalarFieldEnum)[keyof typeof LivroScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const autorOrderByRelevanceFieldEnum: {
    nome: 'nome',
    nacionalidade: 'nacionalidade'
  };

  export type autorOrderByRelevanceFieldEnum = (typeof autorOrderByRelevanceFieldEnum)[keyof typeof autorOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const editoraOrderByRelevanceFieldEnum: {
    nome: 'nome',
    cidade: 'cidade',
    pais: 'pais'
  };

  export type editoraOrderByRelevanceFieldEnum = (typeof editoraOrderByRelevanceFieldEnum)[keyof typeof editoraOrderByRelevanceFieldEnum]


  export const generolivroOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type generolivroOrderByRelevanceFieldEnum = (typeof generolivroOrderByRelevanceFieldEnum)[keyof typeof generolivroOrderByRelevanceFieldEnum]


  export const livroOrderByRelevanceFieldEnum: {
    nome: 'nome',
    isbn: 'isbn',
    volume: 'volume',
    colecao: 'colecao',
    edicao: 'edicao'
  };

  export type livroOrderByRelevanceFieldEnum = (typeof livroOrderByRelevanceFieldEnum)[keyof typeof livroOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


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


  export type autorWhereInput = {
    AND?: autorWhereInput | autorWhereInput[]
    OR?: autorWhereInput[]
    NOT?: autorWhereInput | autorWhereInput[]
    id?: IntFilter<"autor"> | number
    nome?: StringFilter<"autor"> | string
    nacionalidade?: StringFilter<"autor"> | string
    dataNascimento?: DateTimeFilter<"autor"> | Date | string
    livro?: LivroListRelationFilter
  }

  export type autorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
    livro?: livroOrderByRelationAggregateInput
    _relevance?: autorOrderByRelevanceInput
  }

  export type autorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: autorWhereInput | autorWhereInput[]
    OR?: autorWhereInput[]
    NOT?: autorWhereInput | autorWhereInput[]
    nome?: StringFilter<"autor"> | string
    nacionalidade?: StringFilter<"autor"> | string
    dataNascimento?: DateTimeFilter<"autor"> | Date | string
    livro?: LivroListRelationFilter
  }, "id">

  export type autorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
    _count?: autorCountOrderByAggregateInput
    _avg?: autorAvgOrderByAggregateInput
    _max?: autorMaxOrderByAggregateInput
    _min?: autorMinOrderByAggregateInput
    _sum?: autorSumOrderByAggregateInput
  }

  export type autorScalarWhereWithAggregatesInput = {
    AND?: autorScalarWhereWithAggregatesInput | autorScalarWhereWithAggregatesInput[]
    OR?: autorScalarWhereWithAggregatesInput[]
    NOT?: autorScalarWhereWithAggregatesInput | autorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"autor"> | number
    nome?: StringWithAggregatesFilter<"autor"> | string
    nacionalidade?: StringWithAggregatesFilter<"autor"> | string
    dataNascimento?: DateTimeWithAggregatesFilter<"autor"> | Date | string
  }

  export type editoraWhereInput = {
    AND?: editoraWhereInput | editoraWhereInput[]
    OR?: editoraWhereInput[]
    NOT?: editoraWhereInput | editoraWhereInput[]
    id?: IntFilter<"editora"> | number
    nome?: StringFilter<"editora"> | string
    cidade?: StringFilter<"editora"> | string
    dataFundacao?: DateTimeFilter<"editora"> | Date | string
    pais?: StringFilter<"editora"> | string
    deletedAt?: DateTimeNullableFilter<"editora"> | Date | string | null
    livro?: LivroListRelationFilter
  }

  export type editoraOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    dataFundacao?: SortOrder
    pais?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    livro?: livroOrderByRelationAggregateInput
    _relevance?: editoraOrderByRelevanceInput
  }

  export type editoraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: editoraWhereInput | editoraWhereInput[]
    OR?: editoraWhereInput[]
    NOT?: editoraWhereInput | editoraWhereInput[]
    cidade?: StringFilter<"editora"> | string
    dataFundacao?: DateTimeFilter<"editora"> | Date | string
    pais?: StringFilter<"editora"> | string
    deletedAt?: DateTimeNullableFilter<"editora"> | Date | string | null
    livro?: LivroListRelationFilter
  }, "id" | "nome">

  export type editoraOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    dataFundacao?: SortOrder
    pais?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: editoraCountOrderByAggregateInput
    _avg?: editoraAvgOrderByAggregateInput
    _max?: editoraMaxOrderByAggregateInput
    _min?: editoraMinOrderByAggregateInput
    _sum?: editoraSumOrderByAggregateInput
  }

  export type editoraScalarWhereWithAggregatesInput = {
    AND?: editoraScalarWhereWithAggregatesInput | editoraScalarWhereWithAggregatesInput[]
    OR?: editoraScalarWhereWithAggregatesInput[]
    NOT?: editoraScalarWhereWithAggregatesInput | editoraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"editora"> | number
    nome?: StringWithAggregatesFilter<"editora"> | string
    cidade?: StringWithAggregatesFilter<"editora"> | string
    dataFundacao?: DateTimeWithAggregatesFilter<"editora"> | Date | string
    pais?: StringWithAggregatesFilter<"editora"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"editora"> | Date | string | null
  }

  export type generolivroWhereInput = {
    AND?: generolivroWhereInput | generolivroWhereInput[]
    OR?: generolivroWhereInput[]
    NOT?: generolivroWhereInput | generolivroWhereInput[]
    id?: IntFilter<"generolivro"> | number
    nome?: StringFilter<"generolivro"> | string
    deleted?: BoolFilter<"generolivro"> | boolean
    livro?: LivroListRelationFilter
  }

  export type generolivroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    deleted?: SortOrder
    livro?: livroOrderByRelationAggregateInput
    _relevance?: generolivroOrderByRelevanceInput
  }

  export type generolivroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: generolivroWhereInput | generolivroWhereInput[]
    OR?: generolivroWhereInput[]
    NOT?: generolivroWhereInput | generolivroWhereInput[]
    nome?: StringFilter<"generolivro"> | string
    deleted?: BoolFilter<"generolivro"> | boolean
    livro?: LivroListRelationFilter
  }, "id">

  export type generolivroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    deleted?: SortOrder
    _count?: generolivroCountOrderByAggregateInput
    _avg?: generolivroAvgOrderByAggregateInput
    _max?: generolivroMaxOrderByAggregateInput
    _min?: generolivroMinOrderByAggregateInput
    _sum?: generolivroSumOrderByAggregateInput
  }

  export type generolivroScalarWhereWithAggregatesInput = {
    AND?: generolivroScalarWhereWithAggregatesInput | generolivroScalarWhereWithAggregatesInput[]
    OR?: generolivroScalarWhereWithAggregatesInput[]
    NOT?: generolivroScalarWhereWithAggregatesInput | generolivroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"generolivro"> | number
    nome?: StringWithAggregatesFilter<"generolivro"> | string
    deleted?: BoolWithAggregatesFilter<"generolivro"> | boolean
  }

  export type livroWhereInput = {
    AND?: livroWhereInput | livroWhereInput[]
    OR?: livroWhereInput[]
    NOT?: livroWhereInput | livroWhereInput[]
    id?: IntFilter<"livro"> | number
    nome?: StringFilter<"livro"> | string
    isbn?: StringFilter<"livro"> | string
    dataFundacao?: DateTimeFilter<"livro"> | Date | string
    numPaginas?: IntFilter<"livro"> | number
    volume?: StringFilter<"livro"> | string
    colecao?: StringFilter<"livro"> | string
    edicao?: StringFilter<"livro"> | string
    dataLancamento?: DateTimeFilter<"livro"> | Date | string
    idGenero?: IntFilter<"livro"> | number
    idEditora?: IntFilter<"livro"> | number
    idAutor?: IntFilter<"livro"> | number
    deleted?: BoolFilter<"livro"> | boolean
    autor?: XOR<AutorScalarRelationFilter, autorWhereInput>
    editora?: XOR<EditoraScalarRelationFilter, editoraWhereInput>
    generolivro?: XOR<GenerolivroScalarRelationFilter, generolivroWhereInput>
  }

  export type livroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    isbn?: SortOrder
    dataFundacao?: SortOrder
    numPaginas?: SortOrder
    volume?: SortOrder
    colecao?: SortOrder
    edicao?: SortOrder
    dataLancamento?: SortOrder
    idGenero?: SortOrder
    idEditora?: SortOrder
    idAutor?: SortOrder
    deleted?: SortOrder
    autor?: autorOrderByWithRelationInput
    editora?: editoraOrderByWithRelationInput
    generolivro?: generolivroOrderByWithRelationInput
    _relevance?: livroOrderByRelevanceInput
  }

  export type livroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    isbn?: string
    AND?: livroWhereInput | livroWhereInput[]
    OR?: livroWhereInput[]
    NOT?: livroWhereInput | livroWhereInput[]
    dataFundacao?: DateTimeFilter<"livro"> | Date | string
    numPaginas?: IntFilter<"livro"> | number
    volume?: StringFilter<"livro"> | string
    colecao?: StringFilter<"livro"> | string
    edicao?: StringFilter<"livro"> | string
    dataLancamento?: DateTimeFilter<"livro"> | Date | string
    idGenero?: IntFilter<"livro"> | number
    idEditora?: IntFilter<"livro"> | number
    idAutor?: IntFilter<"livro"> | number
    deleted?: BoolFilter<"livro"> | boolean
    autor?: XOR<AutorScalarRelationFilter, autorWhereInput>
    editora?: XOR<EditoraScalarRelationFilter, editoraWhereInput>
    generolivro?: XOR<GenerolivroScalarRelationFilter, generolivroWhereInput>
  }, "id" | "nome" | "isbn">

  export type livroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    isbn?: SortOrder
    dataFundacao?: SortOrder
    numPaginas?: SortOrder
    volume?: SortOrder
    colecao?: SortOrder
    edicao?: SortOrder
    dataLancamento?: SortOrder
    idGenero?: SortOrder
    idEditora?: SortOrder
    idAutor?: SortOrder
    deleted?: SortOrder
    _count?: livroCountOrderByAggregateInput
    _avg?: livroAvgOrderByAggregateInput
    _max?: livroMaxOrderByAggregateInput
    _min?: livroMinOrderByAggregateInput
    _sum?: livroSumOrderByAggregateInput
  }

  export type livroScalarWhereWithAggregatesInput = {
    AND?: livroScalarWhereWithAggregatesInput | livroScalarWhereWithAggregatesInput[]
    OR?: livroScalarWhereWithAggregatesInput[]
    NOT?: livroScalarWhereWithAggregatesInput | livroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"livro"> | number
    nome?: StringWithAggregatesFilter<"livro"> | string
    isbn?: StringWithAggregatesFilter<"livro"> | string
    dataFundacao?: DateTimeWithAggregatesFilter<"livro"> | Date | string
    numPaginas?: IntWithAggregatesFilter<"livro"> | number
    volume?: StringWithAggregatesFilter<"livro"> | string
    colecao?: StringWithAggregatesFilter<"livro"> | string
    edicao?: StringWithAggregatesFilter<"livro"> | string
    dataLancamento?: DateTimeWithAggregatesFilter<"livro"> | Date | string
    idGenero?: IntWithAggregatesFilter<"livro"> | number
    idEditora?: IntWithAggregatesFilter<"livro"> | number
    idAutor?: IntWithAggregatesFilter<"livro"> | number
    deleted?: BoolWithAggregatesFilter<"livro"> | boolean
  }

  export type autorCreateInput = {
    nome: string
    nacionalidade: string
    dataNascimento: Date | string
    livro?: livroCreateNestedManyWithoutAutorInput
  }

  export type autorUncheckedCreateInput = {
    id?: number
    nome: string
    nacionalidade: string
    dataNascimento: Date | string
    livro?: livroUncheckedCreateNestedManyWithoutAutorInput
  }

  export type autorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    livro?: livroUpdateManyWithoutAutorNestedInput
  }

  export type autorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    livro?: livroUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type autorCreateManyInput = {
    id?: number
    nome: string
    nacionalidade: string
    dataNascimento: Date | string
  }

  export type autorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type autorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type editoraCreateInput = {
    nome: string
    cidade: string
    dataFundacao: Date | string
    pais: string
    deletedAt?: Date | string | null
    livro?: livroCreateNestedManyWithoutEditoraInput
  }

  export type editoraUncheckedCreateInput = {
    id?: number
    nome: string
    cidade: string
    dataFundacao: Date | string
    pais: string
    deletedAt?: Date | string | null
    livro?: livroUncheckedCreateNestedManyWithoutEditoraInput
  }

  export type editoraUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    livro?: livroUpdateManyWithoutEditoraNestedInput
  }

  export type editoraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    livro?: livroUncheckedUpdateManyWithoutEditoraNestedInput
  }

  export type editoraCreateManyInput = {
    id?: number
    nome: string
    cidade: string
    dataFundacao: Date | string
    pais: string
    deletedAt?: Date | string | null
  }

  export type editoraUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type editoraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type generolivroCreateInput = {
    nome: string
    deleted?: boolean
    livro?: livroCreateNestedManyWithoutGenerolivroInput
  }

  export type generolivroUncheckedCreateInput = {
    id?: number
    nome: string
    deleted?: boolean
    livro?: livroUncheckedCreateNestedManyWithoutGenerolivroInput
  }

  export type generolivroUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    livro?: livroUpdateManyWithoutGenerolivroNestedInput
  }

  export type generolivroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    livro?: livroUncheckedUpdateManyWithoutGenerolivroNestedInput
  }

  export type generolivroCreateManyInput = {
    id?: number
    nome: string
    deleted?: boolean
  }

  export type generolivroUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type generolivroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type livroCreateInput = {
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    deleted?: boolean
    autor: autorCreateNestedOneWithoutLivroInput
    editora: editoraCreateNestedOneWithoutLivroInput
    generolivro: generolivroCreateNestedOneWithoutLivroInput
  }

  export type livroUncheckedCreateInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idEditora: number
    idAutor: number
    deleted?: boolean
  }

  export type livroUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    autor?: autorUpdateOneRequiredWithoutLivroNestedInput
    editora?: editoraUpdateOneRequiredWithoutLivroNestedInput
    generolivro?: generolivroUpdateOneRequiredWithoutLivroNestedInput
  }

  export type livroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idEditora?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type livroCreateManyInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idEditora: number
    idAutor: number
    deleted?: boolean
  }

  export type livroUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type livroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idEditora?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
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

  export type LivroListRelationFilter = {
    every?: livroWhereInput
    some?: livroWhereInput
    none?: livroWhereInput
  }

  export type livroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type autorOrderByRelevanceInput = {
    fields: autorOrderByRelevanceFieldEnum | autorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type autorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
  }

  export type autorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type autorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
  }

  export type autorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
  }

  export type autorSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type editoraOrderByRelevanceInput = {
    fields: editoraOrderByRelevanceFieldEnum | editoraOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type editoraCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    dataFundacao?: SortOrder
    pais?: SortOrder
    deletedAt?: SortOrder
  }

  export type editoraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type editoraMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    dataFundacao?: SortOrder
    pais?: SortOrder
    deletedAt?: SortOrder
  }

  export type editoraMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    dataFundacao?: SortOrder
    pais?: SortOrder
    deletedAt?: SortOrder
  }

  export type editoraSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type generolivroOrderByRelevanceInput = {
    fields: generolivroOrderByRelevanceFieldEnum | generolivroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type generolivroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    deleted?: SortOrder
  }

  export type generolivroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type generolivroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    deleted?: SortOrder
  }

  export type generolivroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    deleted?: SortOrder
  }

  export type generolivroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AutorScalarRelationFilter = {
    is?: autorWhereInput
    isNot?: autorWhereInput
  }

  export type EditoraScalarRelationFilter = {
    is?: editoraWhereInput
    isNot?: editoraWhereInput
  }

  export type GenerolivroScalarRelationFilter = {
    is?: generolivroWhereInput
    isNot?: generolivroWhereInput
  }

  export type livroOrderByRelevanceInput = {
    fields: livroOrderByRelevanceFieldEnum | livroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type livroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    isbn?: SortOrder
    dataFundacao?: SortOrder
    numPaginas?: SortOrder
    volume?: SortOrder
    colecao?: SortOrder
    edicao?: SortOrder
    dataLancamento?: SortOrder
    idGenero?: SortOrder
    idEditora?: SortOrder
    idAutor?: SortOrder
    deleted?: SortOrder
  }

  export type livroAvgOrderByAggregateInput = {
    id?: SortOrder
    numPaginas?: SortOrder
    idGenero?: SortOrder
    idEditora?: SortOrder
    idAutor?: SortOrder
  }

  export type livroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    isbn?: SortOrder
    dataFundacao?: SortOrder
    numPaginas?: SortOrder
    volume?: SortOrder
    colecao?: SortOrder
    edicao?: SortOrder
    dataLancamento?: SortOrder
    idGenero?: SortOrder
    idEditora?: SortOrder
    idAutor?: SortOrder
    deleted?: SortOrder
  }

  export type livroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    isbn?: SortOrder
    dataFundacao?: SortOrder
    numPaginas?: SortOrder
    volume?: SortOrder
    colecao?: SortOrder
    edicao?: SortOrder
    dataLancamento?: SortOrder
    idGenero?: SortOrder
    idEditora?: SortOrder
    idAutor?: SortOrder
    deleted?: SortOrder
  }

  export type livroSumOrderByAggregateInput = {
    id?: SortOrder
    numPaginas?: SortOrder
    idGenero?: SortOrder
    idEditora?: SortOrder
    idAutor?: SortOrder
  }

  export type livroCreateNestedManyWithoutAutorInput = {
    create?: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput> | livroCreateWithoutAutorInput[] | livroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: livroCreateOrConnectWithoutAutorInput | livroCreateOrConnectWithoutAutorInput[]
    createMany?: livroCreateManyAutorInputEnvelope
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
  }

  export type livroUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput> | livroCreateWithoutAutorInput[] | livroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: livroCreateOrConnectWithoutAutorInput | livroCreateOrConnectWithoutAutorInput[]
    createMany?: livroCreateManyAutorInputEnvelope
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type livroUpdateManyWithoutAutorNestedInput = {
    create?: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput> | livroCreateWithoutAutorInput[] | livroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: livroCreateOrConnectWithoutAutorInput | livroCreateOrConnectWithoutAutorInput[]
    upsert?: livroUpsertWithWhereUniqueWithoutAutorInput | livroUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: livroCreateManyAutorInputEnvelope
    set?: livroWhereUniqueInput | livroWhereUniqueInput[]
    disconnect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    delete?: livroWhereUniqueInput | livroWhereUniqueInput[]
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    update?: livroUpdateWithWhereUniqueWithoutAutorInput | livroUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: livroUpdateManyWithWhereWithoutAutorInput | livroUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: livroScalarWhereInput | livroScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type livroUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput> | livroCreateWithoutAutorInput[] | livroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: livroCreateOrConnectWithoutAutorInput | livroCreateOrConnectWithoutAutorInput[]
    upsert?: livroUpsertWithWhereUniqueWithoutAutorInput | livroUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: livroCreateManyAutorInputEnvelope
    set?: livroWhereUniqueInput | livroWhereUniqueInput[]
    disconnect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    delete?: livroWhereUniqueInput | livroWhereUniqueInput[]
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    update?: livroUpdateWithWhereUniqueWithoutAutorInput | livroUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: livroUpdateManyWithWhereWithoutAutorInput | livroUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: livroScalarWhereInput | livroScalarWhereInput[]
  }

  export type livroCreateNestedManyWithoutEditoraInput = {
    create?: XOR<livroCreateWithoutEditoraInput, livroUncheckedCreateWithoutEditoraInput> | livroCreateWithoutEditoraInput[] | livroUncheckedCreateWithoutEditoraInput[]
    connectOrCreate?: livroCreateOrConnectWithoutEditoraInput | livroCreateOrConnectWithoutEditoraInput[]
    createMany?: livroCreateManyEditoraInputEnvelope
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
  }

  export type livroUncheckedCreateNestedManyWithoutEditoraInput = {
    create?: XOR<livroCreateWithoutEditoraInput, livroUncheckedCreateWithoutEditoraInput> | livroCreateWithoutEditoraInput[] | livroUncheckedCreateWithoutEditoraInput[]
    connectOrCreate?: livroCreateOrConnectWithoutEditoraInput | livroCreateOrConnectWithoutEditoraInput[]
    createMany?: livroCreateManyEditoraInputEnvelope
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type livroUpdateManyWithoutEditoraNestedInput = {
    create?: XOR<livroCreateWithoutEditoraInput, livroUncheckedCreateWithoutEditoraInput> | livroCreateWithoutEditoraInput[] | livroUncheckedCreateWithoutEditoraInput[]
    connectOrCreate?: livroCreateOrConnectWithoutEditoraInput | livroCreateOrConnectWithoutEditoraInput[]
    upsert?: livroUpsertWithWhereUniqueWithoutEditoraInput | livroUpsertWithWhereUniqueWithoutEditoraInput[]
    createMany?: livroCreateManyEditoraInputEnvelope
    set?: livroWhereUniqueInput | livroWhereUniqueInput[]
    disconnect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    delete?: livroWhereUniqueInput | livroWhereUniqueInput[]
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    update?: livroUpdateWithWhereUniqueWithoutEditoraInput | livroUpdateWithWhereUniqueWithoutEditoraInput[]
    updateMany?: livroUpdateManyWithWhereWithoutEditoraInput | livroUpdateManyWithWhereWithoutEditoraInput[]
    deleteMany?: livroScalarWhereInput | livroScalarWhereInput[]
  }

  export type livroUncheckedUpdateManyWithoutEditoraNestedInput = {
    create?: XOR<livroCreateWithoutEditoraInput, livroUncheckedCreateWithoutEditoraInput> | livroCreateWithoutEditoraInput[] | livroUncheckedCreateWithoutEditoraInput[]
    connectOrCreate?: livroCreateOrConnectWithoutEditoraInput | livroCreateOrConnectWithoutEditoraInput[]
    upsert?: livroUpsertWithWhereUniqueWithoutEditoraInput | livroUpsertWithWhereUniqueWithoutEditoraInput[]
    createMany?: livroCreateManyEditoraInputEnvelope
    set?: livroWhereUniqueInput | livroWhereUniqueInput[]
    disconnect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    delete?: livroWhereUniqueInput | livroWhereUniqueInput[]
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    update?: livroUpdateWithWhereUniqueWithoutEditoraInput | livroUpdateWithWhereUniqueWithoutEditoraInput[]
    updateMany?: livroUpdateManyWithWhereWithoutEditoraInput | livroUpdateManyWithWhereWithoutEditoraInput[]
    deleteMany?: livroScalarWhereInput | livroScalarWhereInput[]
  }

  export type livroCreateNestedManyWithoutGenerolivroInput = {
    create?: XOR<livroCreateWithoutGenerolivroInput, livroUncheckedCreateWithoutGenerolivroInput> | livroCreateWithoutGenerolivroInput[] | livroUncheckedCreateWithoutGenerolivroInput[]
    connectOrCreate?: livroCreateOrConnectWithoutGenerolivroInput | livroCreateOrConnectWithoutGenerolivroInput[]
    createMany?: livroCreateManyGenerolivroInputEnvelope
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
  }

  export type livroUncheckedCreateNestedManyWithoutGenerolivroInput = {
    create?: XOR<livroCreateWithoutGenerolivroInput, livroUncheckedCreateWithoutGenerolivroInput> | livroCreateWithoutGenerolivroInput[] | livroUncheckedCreateWithoutGenerolivroInput[]
    connectOrCreate?: livroCreateOrConnectWithoutGenerolivroInput | livroCreateOrConnectWithoutGenerolivroInput[]
    createMany?: livroCreateManyGenerolivroInputEnvelope
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type livroUpdateManyWithoutGenerolivroNestedInput = {
    create?: XOR<livroCreateWithoutGenerolivroInput, livroUncheckedCreateWithoutGenerolivroInput> | livroCreateWithoutGenerolivroInput[] | livroUncheckedCreateWithoutGenerolivroInput[]
    connectOrCreate?: livroCreateOrConnectWithoutGenerolivroInput | livroCreateOrConnectWithoutGenerolivroInput[]
    upsert?: livroUpsertWithWhereUniqueWithoutGenerolivroInput | livroUpsertWithWhereUniqueWithoutGenerolivroInput[]
    createMany?: livroCreateManyGenerolivroInputEnvelope
    set?: livroWhereUniqueInput | livroWhereUniqueInput[]
    disconnect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    delete?: livroWhereUniqueInput | livroWhereUniqueInput[]
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    update?: livroUpdateWithWhereUniqueWithoutGenerolivroInput | livroUpdateWithWhereUniqueWithoutGenerolivroInput[]
    updateMany?: livroUpdateManyWithWhereWithoutGenerolivroInput | livroUpdateManyWithWhereWithoutGenerolivroInput[]
    deleteMany?: livroScalarWhereInput | livroScalarWhereInput[]
  }

  export type livroUncheckedUpdateManyWithoutGenerolivroNestedInput = {
    create?: XOR<livroCreateWithoutGenerolivroInput, livroUncheckedCreateWithoutGenerolivroInput> | livroCreateWithoutGenerolivroInput[] | livroUncheckedCreateWithoutGenerolivroInput[]
    connectOrCreate?: livroCreateOrConnectWithoutGenerolivroInput | livroCreateOrConnectWithoutGenerolivroInput[]
    upsert?: livroUpsertWithWhereUniqueWithoutGenerolivroInput | livroUpsertWithWhereUniqueWithoutGenerolivroInput[]
    createMany?: livroCreateManyGenerolivroInputEnvelope
    set?: livroWhereUniqueInput | livroWhereUniqueInput[]
    disconnect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    delete?: livroWhereUniqueInput | livroWhereUniqueInput[]
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    update?: livroUpdateWithWhereUniqueWithoutGenerolivroInput | livroUpdateWithWhereUniqueWithoutGenerolivroInput[]
    updateMany?: livroUpdateManyWithWhereWithoutGenerolivroInput | livroUpdateManyWithWhereWithoutGenerolivroInput[]
    deleteMany?: livroScalarWhereInput | livroScalarWhereInput[]
  }

  export type autorCreateNestedOneWithoutLivroInput = {
    create?: XOR<autorCreateWithoutLivroInput, autorUncheckedCreateWithoutLivroInput>
    connectOrCreate?: autorCreateOrConnectWithoutLivroInput
    connect?: autorWhereUniqueInput
  }

  export type editoraCreateNestedOneWithoutLivroInput = {
    create?: XOR<editoraCreateWithoutLivroInput, editoraUncheckedCreateWithoutLivroInput>
    connectOrCreate?: editoraCreateOrConnectWithoutLivroInput
    connect?: editoraWhereUniqueInput
  }

  export type generolivroCreateNestedOneWithoutLivroInput = {
    create?: XOR<generolivroCreateWithoutLivroInput, generolivroUncheckedCreateWithoutLivroInput>
    connectOrCreate?: generolivroCreateOrConnectWithoutLivroInput
    connect?: generolivroWhereUniqueInput
  }

  export type autorUpdateOneRequiredWithoutLivroNestedInput = {
    create?: XOR<autorCreateWithoutLivroInput, autorUncheckedCreateWithoutLivroInput>
    connectOrCreate?: autorCreateOrConnectWithoutLivroInput
    upsert?: autorUpsertWithoutLivroInput
    connect?: autorWhereUniqueInput
    update?: XOR<XOR<autorUpdateToOneWithWhereWithoutLivroInput, autorUpdateWithoutLivroInput>, autorUncheckedUpdateWithoutLivroInput>
  }

  export type editoraUpdateOneRequiredWithoutLivroNestedInput = {
    create?: XOR<editoraCreateWithoutLivroInput, editoraUncheckedCreateWithoutLivroInput>
    connectOrCreate?: editoraCreateOrConnectWithoutLivroInput
    upsert?: editoraUpsertWithoutLivroInput
    connect?: editoraWhereUniqueInput
    update?: XOR<XOR<editoraUpdateToOneWithWhereWithoutLivroInput, editoraUpdateWithoutLivroInput>, editoraUncheckedUpdateWithoutLivroInput>
  }

  export type generolivroUpdateOneRequiredWithoutLivroNestedInput = {
    create?: XOR<generolivroCreateWithoutLivroInput, generolivroUncheckedCreateWithoutLivroInput>
    connectOrCreate?: generolivroCreateOrConnectWithoutLivroInput
    upsert?: generolivroUpsertWithoutLivroInput
    connect?: generolivroWhereUniqueInput
    update?: XOR<XOR<generolivroUpdateToOneWithWhereWithoutLivroInput, generolivroUpdateWithoutLivroInput>, generolivroUncheckedUpdateWithoutLivroInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type livroCreateWithoutAutorInput = {
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    deleted?: boolean
    editora: editoraCreateNestedOneWithoutLivroInput
    generolivro: generolivroCreateNestedOneWithoutLivroInput
  }

  export type livroUncheckedCreateWithoutAutorInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idEditora: number
    deleted?: boolean
  }

  export type livroCreateOrConnectWithoutAutorInput = {
    where: livroWhereUniqueInput
    create: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput>
  }

  export type livroCreateManyAutorInputEnvelope = {
    data: livroCreateManyAutorInput | livroCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type livroUpsertWithWhereUniqueWithoutAutorInput = {
    where: livroWhereUniqueInput
    update: XOR<livroUpdateWithoutAutorInput, livroUncheckedUpdateWithoutAutorInput>
    create: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput>
  }

  export type livroUpdateWithWhereUniqueWithoutAutorInput = {
    where: livroWhereUniqueInput
    data: XOR<livroUpdateWithoutAutorInput, livroUncheckedUpdateWithoutAutorInput>
  }

  export type livroUpdateManyWithWhereWithoutAutorInput = {
    where: livroScalarWhereInput
    data: XOR<livroUpdateManyMutationInput, livroUncheckedUpdateManyWithoutAutorInput>
  }

  export type livroScalarWhereInput = {
    AND?: livroScalarWhereInput | livroScalarWhereInput[]
    OR?: livroScalarWhereInput[]
    NOT?: livroScalarWhereInput | livroScalarWhereInput[]
    id?: IntFilter<"livro"> | number
    nome?: StringFilter<"livro"> | string
    isbn?: StringFilter<"livro"> | string
    dataFundacao?: DateTimeFilter<"livro"> | Date | string
    numPaginas?: IntFilter<"livro"> | number
    volume?: StringFilter<"livro"> | string
    colecao?: StringFilter<"livro"> | string
    edicao?: StringFilter<"livro"> | string
    dataLancamento?: DateTimeFilter<"livro"> | Date | string
    idGenero?: IntFilter<"livro"> | number
    idEditora?: IntFilter<"livro"> | number
    idAutor?: IntFilter<"livro"> | number
    deleted?: BoolFilter<"livro"> | boolean
  }

  export type livroCreateWithoutEditoraInput = {
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    deleted?: boolean
    autor: autorCreateNestedOneWithoutLivroInput
    generolivro: generolivroCreateNestedOneWithoutLivroInput
  }

  export type livroUncheckedCreateWithoutEditoraInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idAutor: number
    deleted?: boolean
  }

  export type livroCreateOrConnectWithoutEditoraInput = {
    where: livroWhereUniqueInput
    create: XOR<livroCreateWithoutEditoraInput, livroUncheckedCreateWithoutEditoraInput>
  }

  export type livroCreateManyEditoraInputEnvelope = {
    data: livroCreateManyEditoraInput | livroCreateManyEditoraInput[]
    skipDuplicates?: boolean
  }

  export type livroUpsertWithWhereUniqueWithoutEditoraInput = {
    where: livroWhereUniqueInput
    update: XOR<livroUpdateWithoutEditoraInput, livroUncheckedUpdateWithoutEditoraInput>
    create: XOR<livroCreateWithoutEditoraInput, livroUncheckedCreateWithoutEditoraInput>
  }

  export type livroUpdateWithWhereUniqueWithoutEditoraInput = {
    where: livroWhereUniqueInput
    data: XOR<livroUpdateWithoutEditoraInput, livroUncheckedUpdateWithoutEditoraInput>
  }

  export type livroUpdateManyWithWhereWithoutEditoraInput = {
    where: livroScalarWhereInput
    data: XOR<livroUpdateManyMutationInput, livroUncheckedUpdateManyWithoutEditoraInput>
  }

  export type livroCreateWithoutGenerolivroInput = {
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    deleted?: boolean
    autor: autorCreateNestedOneWithoutLivroInput
    editora: editoraCreateNestedOneWithoutLivroInput
  }

  export type livroUncheckedCreateWithoutGenerolivroInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idEditora: number
    idAutor: number
    deleted?: boolean
  }

  export type livroCreateOrConnectWithoutGenerolivroInput = {
    where: livroWhereUniqueInput
    create: XOR<livroCreateWithoutGenerolivroInput, livroUncheckedCreateWithoutGenerolivroInput>
  }

  export type livroCreateManyGenerolivroInputEnvelope = {
    data: livroCreateManyGenerolivroInput | livroCreateManyGenerolivroInput[]
    skipDuplicates?: boolean
  }

  export type livroUpsertWithWhereUniqueWithoutGenerolivroInput = {
    where: livroWhereUniqueInput
    update: XOR<livroUpdateWithoutGenerolivroInput, livroUncheckedUpdateWithoutGenerolivroInput>
    create: XOR<livroCreateWithoutGenerolivroInput, livroUncheckedCreateWithoutGenerolivroInput>
  }

  export type livroUpdateWithWhereUniqueWithoutGenerolivroInput = {
    where: livroWhereUniqueInput
    data: XOR<livroUpdateWithoutGenerolivroInput, livroUncheckedUpdateWithoutGenerolivroInput>
  }

  export type livroUpdateManyWithWhereWithoutGenerolivroInput = {
    where: livroScalarWhereInput
    data: XOR<livroUpdateManyMutationInput, livroUncheckedUpdateManyWithoutGenerolivroInput>
  }

  export type autorCreateWithoutLivroInput = {
    nome: string
    nacionalidade: string
    dataNascimento: Date | string
  }

  export type autorUncheckedCreateWithoutLivroInput = {
    id?: number
    nome: string
    nacionalidade: string
    dataNascimento: Date | string
  }

  export type autorCreateOrConnectWithoutLivroInput = {
    where: autorWhereUniqueInput
    create: XOR<autorCreateWithoutLivroInput, autorUncheckedCreateWithoutLivroInput>
  }

  export type editoraCreateWithoutLivroInput = {
    nome: string
    cidade: string
    dataFundacao: Date | string
    pais: string
    deletedAt?: Date | string | null
  }

  export type editoraUncheckedCreateWithoutLivroInput = {
    id?: number
    nome: string
    cidade: string
    dataFundacao: Date | string
    pais: string
    deletedAt?: Date | string | null
  }

  export type editoraCreateOrConnectWithoutLivroInput = {
    where: editoraWhereUniqueInput
    create: XOR<editoraCreateWithoutLivroInput, editoraUncheckedCreateWithoutLivroInput>
  }

  export type generolivroCreateWithoutLivroInput = {
    nome: string
    deleted?: boolean
  }

  export type generolivroUncheckedCreateWithoutLivroInput = {
    id?: number
    nome: string
    deleted?: boolean
  }

  export type generolivroCreateOrConnectWithoutLivroInput = {
    where: generolivroWhereUniqueInput
    create: XOR<generolivroCreateWithoutLivroInput, generolivroUncheckedCreateWithoutLivroInput>
  }

  export type autorUpsertWithoutLivroInput = {
    update: XOR<autorUpdateWithoutLivroInput, autorUncheckedUpdateWithoutLivroInput>
    create: XOR<autorCreateWithoutLivroInput, autorUncheckedCreateWithoutLivroInput>
    where?: autorWhereInput
  }

  export type autorUpdateToOneWithWhereWithoutLivroInput = {
    where?: autorWhereInput
    data: XOR<autorUpdateWithoutLivroInput, autorUncheckedUpdateWithoutLivroInput>
  }

  export type autorUpdateWithoutLivroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type autorUncheckedUpdateWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type editoraUpsertWithoutLivroInput = {
    update: XOR<editoraUpdateWithoutLivroInput, editoraUncheckedUpdateWithoutLivroInput>
    create: XOR<editoraCreateWithoutLivroInput, editoraUncheckedCreateWithoutLivroInput>
    where?: editoraWhereInput
  }

  export type editoraUpdateToOneWithWhereWithoutLivroInput = {
    where?: editoraWhereInput
    data: XOR<editoraUpdateWithoutLivroInput, editoraUncheckedUpdateWithoutLivroInput>
  }

  export type editoraUpdateWithoutLivroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type editoraUncheckedUpdateWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type generolivroUpsertWithoutLivroInput = {
    update: XOR<generolivroUpdateWithoutLivroInput, generolivroUncheckedUpdateWithoutLivroInput>
    create: XOR<generolivroCreateWithoutLivroInput, generolivroUncheckedCreateWithoutLivroInput>
    where?: generolivroWhereInput
  }

  export type generolivroUpdateToOneWithWhereWithoutLivroInput = {
    where?: generolivroWhereInput
    data: XOR<generolivroUpdateWithoutLivroInput, generolivroUncheckedUpdateWithoutLivroInput>
  }

  export type generolivroUpdateWithoutLivroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type generolivroUncheckedUpdateWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type livroCreateManyAutorInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idEditora: number
    deleted?: boolean
  }

  export type livroUpdateWithoutAutorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    editora?: editoraUpdateOneRequiredWithoutLivroNestedInput
    generolivro?: generolivroUpdateOneRequiredWithoutLivroNestedInput
  }

  export type livroUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idEditora?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type livroUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idEditora?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type livroCreateManyEditoraInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idAutor: number
    deleted?: boolean
  }

  export type livroUpdateWithoutEditoraInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    autor?: autorUpdateOneRequiredWithoutLivroNestedInput
    generolivro?: generolivroUpdateOneRequiredWithoutLivroNestedInput
  }

  export type livroUncheckedUpdateWithoutEditoraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type livroUncheckedUpdateManyWithoutEditoraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type livroCreateManyGenerolivroInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: string
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idEditora: number
    idAutor: number
    deleted?: boolean
  }

  export type livroUpdateWithoutGenerolivroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    autor?: autorUpdateOneRequiredWithoutLivroNestedInput
    editora?: editoraUpdateOneRequiredWithoutLivroNestedInput
  }

  export type livroUncheckedUpdateWithoutGenerolivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idEditora?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type livroUncheckedUpdateManyWithoutGenerolivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: StringFieldUpdateOperationsInput | string
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idEditora?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
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