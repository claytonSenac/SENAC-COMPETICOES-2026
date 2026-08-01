
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
 * Model Autor
 * 
 */
export type Autor = $Result.DefaultSelection<Prisma.$AutorPayload>
/**
 * Model Editora
 * 
 */
export type Editora = $Result.DefaultSelection<Prisma.$EditoraPayload>
/**
 * Model Livro
 * 
 */
export type Livro = $Result.DefaultSelection<Prisma.$LivroPayload>
/**
 * Model GeneroLivro
 * 
 */
export type GeneroLivro = $Result.DefaultSelection<Prisma.$GeneroLivroPayload>

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
   * `prisma.autor`: Exposes CRUD operations for the **Autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.AutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.editora`: Exposes CRUD operations for the **Editora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Editoras
    * const editoras = await prisma.editora.findMany()
    * ```
    */
  get editora(): Prisma.EditoraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livro`: Exposes CRUD operations for the **Livro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livro.findMany()
    * ```
    */
  get livro(): Prisma.LivroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generoLivro`: Exposes CRUD operations for the **GeneroLivro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneroLivros
    * const generoLivros = await prisma.generoLivro.findMany()
    * ```
    */
  get generoLivro(): Prisma.GeneroLivroDelegate<ExtArgs, ClientOptions>;
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
    Autor: 'Autor',
    Editora: 'Editora',
    Livro: 'Livro',
    GeneroLivro: 'GeneroLivro'
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
      modelProps: "autor" | "editora" | "livro" | "generoLivro"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Autor: {
        payload: Prisma.$AutorPayload<ExtArgs>
        fields: Prisma.AutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findFirst: {
            args: Prisma.AutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findMany: {
            args: Prisma.AutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          create: {
            args: Prisma.AutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          createMany: {
            args: Prisma.AutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          update: {
            args: Prisma.AutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          deleteMany: {
            args: Prisma.AutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.AutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutorCountArgs<ExtArgs>
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
      Editora: {
        payload: Prisma.$EditoraPayload<ExtArgs>
        fields: Prisma.EditoraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EditoraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditoraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EditoraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditoraPayload>
          }
          findFirst: {
            args: Prisma.EditoraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditoraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EditoraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditoraPayload>
          }
          findMany: {
            args: Prisma.EditoraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditoraPayload>[]
          }
          create: {
            args: Prisma.EditoraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditoraPayload>
          }
          createMany: {
            args: Prisma.EditoraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EditoraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditoraPayload>
          }
          update: {
            args: Prisma.EditoraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditoraPayload>
          }
          deleteMany: {
            args: Prisma.EditoraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EditoraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EditoraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditoraPayload>
          }
          aggregate: {
            args: Prisma.EditoraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEditora>
          }
          groupBy: {
            args: Prisma.EditoraGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditoraGroupByOutputType>[]
          }
          count: {
            args: Prisma.EditoraCountArgs<ExtArgs>
            result: $Utils.Optional<EditoraCountAggregateOutputType> | number
          }
        }
      }
      Livro: {
        payload: Prisma.$LivroPayload<ExtArgs>
        fields: Prisma.LivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findFirst: {
            args: Prisma.LivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findMany: {
            args: Prisma.LivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          create: {
            args: Prisma.LivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          createMany: {
            args: Prisma.LivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          update: {
            args: Prisma.LivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          deleteMany: {
            args: Prisma.LivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          aggregate: {
            args: Prisma.LivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivro>
          }
          groupBy: {
            args: Prisma.LivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivroCountArgs<ExtArgs>
            result: $Utils.Optional<LivroCountAggregateOutputType> | number
          }
        }
      }
      GeneroLivro: {
        payload: Prisma.$GeneroLivroPayload<ExtArgs>
        fields: Prisma.GeneroLivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneroLivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroLivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneroLivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroLivroPayload>
          }
          findFirst: {
            args: Prisma.GeneroLivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroLivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneroLivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroLivroPayload>
          }
          findMany: {
            args: Prisma.GeneroLivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroLivroPayload>[]
          }
          create: {
            args: Prisma.GeneroLivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroLivroPayload>
          }
          createMany: {
            args: Prisma.GeneroLivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneroLivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroLivroPayload>
          }
          update: {
            args: Prisma.GeneroLivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroLivroPayload>
          }
          deleteMany: {
            args: Prisma.GeneroLivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneroLivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneroLivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroLivroPayload>
          }
          aggregate: {
            args: Prisma.GeneroLivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneroLivro>
          }
          groupBy: {
            args: Prisma.GeneroLivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroLivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneroLivroCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroLivroCountAggregateOutputType> | number
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
    autor?: AutorOmit
    editora?: EditoraOmit
    livro?: LivroOmit
    generoLivro?: GeneroLivroOmit
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
    livros: number
  }

  export type AutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | AutorCountOutputTypeCountLivrosArgs
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
  export type AutorCountOutputTypeCountLivrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
  }


  /**
   * Count Type EditoraCountOutputType
   */

  export type EditoraCountOutputType = {
    livros: number
  }

  export type EditoraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | EditoraCountOutputTypeCountLivrosArgs
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
  export type EditoraCountOutputTypeCountLivrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
  }


  /**
   * Count Type GeneroLivroCountOutputType
   */

  export type GeneroLivroCountOutputType = {
    livros: number
  }

  export type GeneroLivroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | GeneroLivroCountOutputTypeCountLivrosArgs
  }

  // Custom InputTypes
  /**
   * GeneroLivroCountOutputType without action
   */
  export type GeneroLivroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivroCountOutputType
     */
    select?: GeneroLivroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroLivroCountOutputType without action
   */
  export type GeneroLivroCountOutputTypeCountLivrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Autor
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
     * Filter which Autor to aggregate.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autors
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




  export type AutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutorWhereInput
    orderBy?: AutorOrderByWithAggregationInput | AutorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: AutorScalarWhereWithAggregatesInput
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

  type GetAutorGroupByPayload<T extends AutorGroupByArgs> = Prisma.PrismaPromise<
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


  export type AutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nacionalidade?: boolean
    dataNascimento?: boolean
    livros?: boolean | Autor$livrosArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>



  export type AutorSelectScalar = {
    id?: boolean
    nome?: boolean
    nacionalidade?: boolean
    dataNascimento?: boolean
  }

  export type AutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nacionalidade" | "dataNascimento", ExtArgs["result"]["autor"]>
  export type AutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | Autor$livrosArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Autor"
    objects: {
      livros: Prisma.$LivroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nacionalidade: string
      dataNascimento: Date
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }

  type AutorGetPayload<S extends boolean | null | undefined | AutorDefaultArgs> = $Result.GetResult<Prisma.$AutorPayload, S>

  type AutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface AutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Autor'], meta: { name: 'Autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {AutorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutorFindUniqueArgs>(args: SelectSubset<T, AutorFindUniqueArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutorFindUniqueOrThrowArgs>(args: SelectSubset<T, AutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutorFindFirstArgs>(args?: SelectSubset<T, AutorFindFirstArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutorFindFirstOrThrowArgs>(args?: SelectSubset<T, AutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends AutorFindManyArgs>(args?: SelectSubset<T, AutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autor.
     * @param {AutorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
     */
    create<T extends AutorCreateArgs>(args: SelectSubset<T, AutorCreateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {AutorCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutorCreateManyArgs>(args?: SelectSubset<T, AutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Autor.
     * @param {AutorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
     */
    delete<T extends AutorDeleteArgs>(args: SelectSubset<T, AutorDeleteArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autor.
     * @param {AutorUpdateArgs} args - Arguments to update one Autor.
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
    update<T extends AutorUpdateArgs>(args: SelectSubset<T, AutorUpdateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {AutorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutorDeleteManyArgs>(args?: SelectSubset<T, AutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends AutorUpdateManyArgs>(args: SelectSubset<T, AutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Autor.
     * @param {AutorUpsertArgs} args - Arguments to update or create a Autor.
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
    upsert<T extends AutorUpsertArgs>(args: SelectSubset<T, AutorUpsertArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends AutorCountArgs>(
      args?: Subset<T, AutorCountArgs>,
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
     * @param {AutorGroupByArgs} args - Group by arguments.
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
      T extends AutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutorGroupByArgs['orderBy'] }
        : { orderBy?: AutorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Autor model
   */
  readonly fields: AutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livros<T extends Autor$livrosArgs<ExtArgs> = {}>(args?: Subset<T, Autor$livrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Autor model
   */
  interface AutorFieldRefs {
    readonly id: FieldRef<"Autor", 'Int'>
    readonly nome: FieldRef<"Autor", 'String'>
    readonly nacionalidade: FieldRef<"Autor", 'String'>
    readonly dataNascimento: FieldRef<"Autor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Autor findUnique
   */
  export type AutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findUniqueOrThrow
   */
  export type AutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findFirst
   */
  export type AutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findFirstOrThrow
   */
  export type AutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findMany
   */
  export type AutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor create
   */
  export type AutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Autor.
     */
    data: XOR<AutorCreateInput, AutorUncheckedCreateInput>
  }

  /**
   * Autor createMany
   */
  export type AutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor update
   */
  export type AutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Autor.
     */
    data: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
    /**
     * Choose, which Autor to update.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor updateMany
   */
  export type AutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor upsert
   */
  export type AutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Autor to update in case it exists.
     */
    where: AutorWhereUniqueInput
    /**
     * In case the Autor found by the `where` argument doesn't exist, create a new Autor with this data.
     */
    create: XOR<AutorCreateInput, AutorUncheckedCreateInput>
    /**
     * In case the Autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
  }

  /**
   * Autor delete
   */
  export type AutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter which Autor to delete.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor deleteMany
   */
  export type AutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autors to delete
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to delete.
     */
    limit?: number
  }

  /**
   * Autor.livros
   */
  export type Autor$livrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    cursor?: LivroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Autor without action
   */
  export type AutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
  }


  /**
   * Model Editora
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
     * Filter which Editora to aggregate.
     */
    where?: EditoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editoras to fetch.
     */
    orderBy?: EditoraOrderByWithRelationInput | EditoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EditoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Editoras
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




  export type EditoraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditoraWhereInput
    orderBy?: EditoraOrderByWithAggregationInput | EditoraOrderByWithAggregationInput[]
    by: EditoraScalarFieldEnum[] | EditoraScalarFieldEnum
    having?: EditoraScalarWhereWithAggregatesInput
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

  type GetEditoraGroupByPayload<T extends EditoraGroupByArgs> = Prisma.PrismaPromise<
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


  export type EditoraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cidade?: boolean
    dataFundacao?: boolean
    pais?: boolean
    deletedAt?: boolean
    livros?: boolean | Editora$livrosArgs<ExtArgs>
    _count?: boolean | EditoraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editora"]>



  export type EditoraSelectScalar = {
    id?: boolean
    nome?: boolean
    cidade?: boolean
    dataFundacao?: boolean
    pais?: boolean
    deletedAt?: boolean
  }

  export type EditoraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cidade" | "dataFundacao" | "pais" | "deletedAt", ExtArgs["result"]["editora"]>
  export type EditoraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | Editora$livrosArgs<ExtArgs>
    _count?: boolean | EditoraCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EditoraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Editora"
    objects: {
      livros: Prisma.$LivroPayload<ExtArgs>[]
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

  type EditoraGetPayload<S extends boolean | null | undefined | EditoraDefaultArgs> = $Result.GetResult<Prisma.$EditoraPayload, S>

  type EditoraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EditoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditoraCountAggregateInputType | true
    }

  export interface EditoraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Editora'], meta: { name: 'Editora' } }
    /**
     * Find zero or one Editora that matches the filter.
     * @param {EditoraFindUniqueArgs} args - Arguments to find a Editora
     * @example
     * // Get one Editora
     * const editora = await prisma.editora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EditoraFindUniqueArgs>(args: SelectSubset<T, EditoraFindUniqueArgs<ExtArgs>>): Prisma__EditoraClient<$Result.GetResult<Prisma.$EditoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Editora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EditoraFindUniqueOrThrowArgs} args - Arguments to find a Editora
     * @example
     * // Get one Editora
     * const editora = await prisma.editora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EditoraFindUniqueOrThrowArgs>(args: SelectSubset<T, EditoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EditoraClient<$Result.GetResult<Prisma.$EditoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Editora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditoraFindFirstArgs} args - Arguments to find a Editora
     * @example
     * // Get one Editora
     * const editora = await prisma.editora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EditoraFindFirstArgs>(args?: SelectSubset<T, EditoraFindFirstArgs<ExtArgs>>): Prisma__EditoraClient<$Result.GetResult<Prisma.$EditoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Editora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditoraFindFirstOrThrowArgs} args - Arguments to find a Editora
     * @example
     * // Get one Editora
     * const editora = await prisma.editora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EditoraFindFirstOrThrowArgs>(args?: SelectSubset<T, EditoraFindFirstOrThrowArgs<ExtArgs>>): Prisma__EditoraClient<$Result.GetResult<Prisma.$EditoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Editoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditoraFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends EditoraFindManyArgs>(args?: SelectSubset<T, EditoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Editora.
     * @param {EditoraCreateArgs} args - Arguments to create a Editora.
     * @example
     * // Create one Editora
     * const Editora = await prisma.editora.create({
     *   data: {
     *     // ... data to create a Editora
     *   }
     * })
     * 
     */
    create<T extends EditoraCreateArgs>(args: SelectSubset<T, EditoraCreateArgs<ExtArgs>>): Prisma__EditoraClient<$Result.GetResult<Prisma.$EditoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Editoras.
     * @param {EditoraCreateManyArgs} args - Arguments to create many Editoras.
     * @example
     * // Create many Editoras
     * const editora = await prisma.editora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EditoraCreateManyArgs>(args?: SelectSubset<T, EditoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Editora.
     * @param {EditoraDeleteArgs} args - Arguments to delete one Editora.
     * @example
     * // Delete one Editora
     * const Editora = await prisma.editora.delete({
     *   where: {
     *     // ... filter to delete one Editora
     *   }
     * })
     * 
     */
    delete<T extends EditoraDeleteArgs>(args: SelectSubset<T, EditoraDeleteArgs<ExtArgs>>): Prisma__EditoraClient<$Result.GetResult<Prisma.$EditoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Editora.
     * @param {EditoraUpdateArgs} args - Arguments to update one Editora.
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
    update<T extends EditoraUpdateArgs>(args: SelectSubset<T, EditoraUpdateArgs<ExtArgs>>): Prisma__EditoraClient<$Result.GetResult<Prisma.$EditoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Editoras.
     * @param {EditoraDeleteManyArgs} args - Arguments to filter Editoras to delete.
     * @example
     * // Delete a few Editoras
     * const { count } = await prisma.editora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EditoraDeleteManyArgs>(args?: SelectSubset<T, EditoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditoraUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends EditoraUpdateManyArgs>(args: SelectSubset<T, EditoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Editora.
     * @param {EditoraUpsertArgs} args - Arguments to update or create a Editora.
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
    upsert<T extends EditoraUpsertArgs>(args: SelectSubset<T, EditoraUpsertArgs<ExtArgs>>): Prisma__EditoraClient<$Result.GetResult<Prisma.$EditoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Editoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditoraCountArgs} args - Arguments to filter Editoras to count.
     * @example
     * // Count the number of Editoras
     * const count = await prisma.editora.count({
     *   where: {
     *     // ... the filter for the Editoras we want to count
     *   }
     * })
    **/
    count<T extends EditoraCountArgs>(
      args?: Subset<T, EditoraCountArgs>,
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
     * @param {EditoraGroupByArgs} args - Group by arguments.
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
      T extends EditoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EditoraGroupByArgs['orderBy'] }
        : { orderBy?: EditoraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EditoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Editora model
   */
  readonly fields: EditoraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Editora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EditoraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livros<T extends Editora$livrosArgs<ExtArgs> = {}>(args?: Subset<T, Editora$livrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Editora model
   */
  interface EditoraFieldRefs {
    readonly id: FieldRef<"Editora", 'Int'>
    readonly nome: FieldRef<"Editora", 'String'>
    readonly cidade: FieldRef<"Editora", 'String'>
    readonly dataFundacao: FieldRef<"Editora", 'DateTime'>
    readonly pais: FieldRef<"Editora", 'String'>
    readonly deletedAt: FieldRef<"Editora", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Editora findUnique
   */
  export type EditoraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editora
     */
    select?: EditoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editora
     */
    omit?: EditoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditoraInclude<ExtArgs> | null
    /**
     * Filter, which Editora to fetch.
     */
    where: EditoraWhereUniqueInput
  }

  /**
   * Editora findUniqueOrThrow
   */
  export type EditoraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editora
     */
    select?: EditoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editora
     */
    omit?: EditoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditoraInclude<ExtArgs> | null
    /**
     * Filter, which Editora to fetch.
     */
    where: EditoraWhereUniqueInput
  }

  /**
   * Editora findFirst
   */
  export type EditoraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editora
     */
    select?: EditoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editora
     */
    omit?: EditoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditoraInclude<ExtArgs> | null
    /**
     * Filter, which Editora to fetch.
     */
    where?: EditoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editoras to fetch.
     */
    orderBy?: EditoraOrderByWithRelationInput | EditoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Editoras.
     */
    cursor?: EditoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editoras.
     */
    distinct?: EditoraScalarFieldEnum | EditoraScalarFieldEnum[]
  }

  /**
   * Editora findFirstOrThrow
   */
  export type EditoraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editora
     */
    select?: EditoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editora
     */
    omit?: EditoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditoraInclude<ExtArgs> | null
    /**
     * Filter, which Editora to fetch.
     */
    where?: EditoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editoras to fetch.
     */
    orderBy?: EditoraOrderByWithRelationInput | EditoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Editoras.
     */
    cursor?: EditoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editoras.
     */
    distinct?: EditoraScalarFieldEnum | EditoraScalarFieldEnum[]
  }

  /**
   * Editora findMany
   */
  export type EditoraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editora
     */
    select?: EditoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editora
     */
    omit?: EditoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditoraInclude<ExtArgs> | null
    /**
     * Filter, which Editoras to fetch.
     */
    where?: EditoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editoras to fetch.
     */
    orderBy?: EditoraOrderByWithRelationInput | EditoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Editoras.
     */
    cursor?: EditoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editoras.
     */
    distinct?: EditoraScalarFieldEnum | EditoraScalarFieldEnum[]
  }

  /**
   * Editora create
   */
  export type EditoraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editora
     */
    select?: EditoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editora
     */
    omit?: EditoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditoraInclude<ExtArgs> | null
    /**
     * The data needed to create a Editora.
     */
    data: XOR<EditoraCreateInput, EditoraUncheckedCreateInput>
  }

  /**
   * Editora createMany
   */
  export type EditoraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Editoras.
     */
    data: EditoraCreateManyInput | EditoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Editora update
   */
  export type EditoraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editora
     */
    select?: EditoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editora
     */
    omit?: EditoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditoraInclude<ExtArgs> | null
    /**
     * The data needed to update a Editora.
     */
    data: XOR<EditoraUpdateInput, EditoraUncheckedUpdateInput>
    /**
     * Choose, which Editora to update.
     */
    where: EditoraWhereUniqueInput
  }

  /**
   * Editora updateMany
   */
  export type EditoraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Editoras.
     */
    data: XOR<EditoraUpdateManyMutationInput, EditoraUncheckedUpdateManyInput>
    /**
     * Filter which Editoras to update
     */
    where?: EditoraWhereInput
    /**
     * Limit how many Editoras to update.
     */
    limit?: number
  }

  /**
   * Editora upsert
   */
  export type EditoraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editora
     */
    select?: EditoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editora
     */
    omit?: EditoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditoraInclude<ExtArgs> | null
    /**
     * The filter to search for the Editora to update in case it exists.
     */
    where: EditoraWhereUniqueInput
    /**
     * In case the Editora found by the `where` argument doesn't exist, create a new Editora with this data.
     */
    create: XOR<EditoraCreateInput, EditoraUncheckedCreateInput>
    /**
     * In case the Editora was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EditoraUpdateInput, EditoraUncheckedUpdateInput>
  }

  /**
   * Editora delete
   */
  export type EditoraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editora
     */
    select?: EditoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editora
     */
    omit?: EditoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditoraInclude<ExtArgs> | null
    /**
     * Filter which Editora to delete.
     */
    where: EditoraWhereUniqueInput
  }

  /**
   * Editora deleteMany
   */
  export type EditoraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Editoras to delete
     */
    where?: EditoraWhereInput
    /**
     * Limit how many Editoras to delete.
     */
    limit?: number
  }

  /**
   * Editora.livros
   */
  export type Editora$livrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    cursor?: LivroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Editora without action
   */
  export type EditoraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editora
     */
    select?: EditoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editora
     */
    omit?: EditoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditoraInclude<ExtArgs> | null
  }


  /**
   * Model Livro
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
    volume: number | null
    idGenero: number | null
    idEditora: number | null
    idAutor: number | null
  }

  export type LivroSumAggregateOutputType = {
    id: number | null
    numPaginas: number | null
    volume: number | null
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
    volume: number | null
    colecao: string | null
    edicao: string | null
    dataLancamento: Date | null
    idGenero: number | null
    idEditora: number | null
    idAutor: number | null
  }

  export type LivroMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    isbn: string | null
    dataFundacao: Date | null
    numPaginas: number | null
    volume: number | null
    colecao: string | null
    edicao: string | null
    dataLancamento: Date | null
    idGenero: number | null
    idEditora: number | null
    idAutor: number | null
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
    _all: number
  }


  export type LivroAvgAggregateInputType = {
    id?: true
    numPaginas?: true
    volume?: true
    idGenero?: true
    idEditora?: true
    idAutor?: true
  }

  export type LivroSumAggregateInputType = {
    id?: true
    numPaginas?: true
    volume?: true
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
    _all?: true
  }

  export type LivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livro to aggregate.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livros
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




  export type LivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithAggregationInput | LivroOrderByWithAggregationInput[]
    by: LivroScalarFieldEnum[] | LivroScalarFieldEnum
    having?: LivroScalarWhereWithAggregatesInput
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
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date
    idGenero: number
    idEditora: number
    idAutor: number
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  type GetLivroGroupByPayload<T extends LivroGroupByArgs> = Prisma.PrismaPromise<
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


  export type LivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    genero?: boolean | GeneroLivroDefaultArgs<ExtArgs>
    editora?: boolean | EditoraDefaultArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>



  export type LivroSelectScalar = {
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
  }

  export type LivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "isbn" | "dataFundacao" | "numPaginas" | "volume" | "colecao" | "edicao" | "dataLancamento" | "idGenero" | "idEditora" | "idAutor", ExtArgs["result"]["livro"]>
  export type LivroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroLivroDefaultArgs<ExtArgs>
    editora?: boolean | EditoraDefaultArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }

  export type $LivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livro"
    objects: {
      genero: Prisma.$GeneroLivroPayload<ExtArgs>
      editora: Prisma.$EditoraPayload<ExtArgs>
      autor: Prisma.$AutorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      isbn: string
      dataFundacao: Date
      numPaginas: number
      volume: number
      colecao: string
      edicao: string
      dataLancamento: Date
      idGenero: number
      idEditora: number
      idAutor: number
    }, ExtArgs["result"]["livro"]>
    composites: {}
  }

  type LivroGetPayload<S extends boolean | null | undefined | LivroDefaultArgs> = $Result.GetResult<Prisma.$LivroPayload, S>

  type LivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroCountAggregateInputType | true
    }

  export interface LivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livro'], meta: { name: 'Livro' } }
    /**
     * Find zero or one Livro that matches the filter.
     * @param {LivroFindUniqueArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivroFindUniqueArgs>(args: SelectSubset<T, LivroFindUniqueArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivroFindUniqueOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivroFindUniqueOrThrowArgs>(args: SelectSubset<T, LivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivroFindFirstArgs>(args?: SelectSubset<T, LivroFindFirstArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivroFindFirstOrThrowArgs>(args?: SelectSubset<T, LivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends LivroFindManyArgs>(args?: SelectSubset<T, LivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livro.
     * @param {LivroCreateArgs} args - Arguments to create a Livro.
     * @example
     * // Create one Livro
     * const Livro = await prisma.livro.create({
     *   data: {
     *     // ... data to create a Livro
     *   }
     * })
     * 
     */
    create<T extends LivroCreateArgs>(args: SelectSubset<T, LivroCreateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {LivroCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivroCreateManyArgs>(args?: SelectSubset<T, LivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Livro.
     * @param {LivroDeleteArgs} args - Arguments to delete one Livro.
     * @example
     * // Delete one Livro
     * const Livro = await prisma.livro.delete({
     *   where: {
     *     // ... filter to delete one Livro
     *   }
     * })
     * 
     */
    delete<T extends LivroDeleteArgs>(args: SelectSubset<T, LivroDeleteArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livro.
     * @param {LivroUpdateArgs} args - Arguments to update one Livro.
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
    update<T extends LivroUpdateArgs>(args: SelectSubset<T, LivroUpdateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {LivroDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivroDeleteManyArgs>(args?: SelectSubset<T, LivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends LivroUpdateManyArgs>(args: SelectSubset<T, LivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Livro.
     * @param {LivroUpsertArgs} args - Arguments to update or create a Livro.
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
    upsert<T extends LivroUpsertArgs>(args: SelectSubset<T, LivroUpsertArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livro.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends LivroCountArgs>(
      args?: Subset<T, LivroCountArgs>,
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
     * @param {LivroGroupByArgs} args - Group by arguments.
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
      T extends LivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivroGroupByArgs['orderBy'] }
        : { orderBy?: LivroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livro model
   */
  readonly fields: LivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genero<T extends GeneroLivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneroLivroDefaultArgs<ExtArgs>>): Prisma__GeneroLivroClient<$Result.GetResult<Prisma.$GeneroLivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    editora<T extends EditoraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EditoraDefaultArgs<ExtArgs>>): Prisma__EditoraClient<$Result.GetResult<Prisma.$EditoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    autor<T extends AutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutorDefaultArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Livro model
   */
  interface LivroFieldRefs {
    readonly id: FieldRef<"Livro", 'Int'>
    readonly nome: FieldRef<"Livro", 'String'>
    readonly isbn: FieldRef<"Livro", 'String'>
    readonly dataFundacao: FieldRef<"Livro", 'DateTime'>
    readonly numPaginas: FieldRef<"Livro", 'Int'>
    readonly volume: FieldRef<"Livro", 'Int'>
    readonly colecao: FieldRef<"Livro", 'String'>
    readonly edicao: FieldRef<"Livro", 'String'>
    readonly dataLancamento: FieldRef<"Livro", 'DateTime'>
    readonly idGenero: FieldRef<"Livro", 'Int'>
    readonly idEditora: FieldRef<"Livro", 'Int'>
    readonly idAutor: FieldRef<"Livro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Livro findUnique
   */
  export type LivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findUniqueOrThrow
   */
  export type LivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findFirst
   */
  export type LivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findFirstOrThrow
   */
  export type LivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findMany
   */
  export type LivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro create
   */
  export type LivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to create a Livro.
     */
    data: XOR<LivroCreateInput, LivroUncheckedCreateInput>
  }

  /**
   * Livro createMany
   */
  export type LivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro update
   */
  export type LivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to update a Livro.
     */
    data: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
    /**
     * Choose, which Livro to update.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro updateMany
   */
  export type LivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro upsert
   */
  export type LivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The filter to search for the Livro to update in case it exists.
     */
    where: LivroWhereUniqueInput
    /**
     * In case the Livro found by the `where` argument doesn't exist, create a new Livro with this data.
     */
    create: XOR<LivroCreateInput, LivroUncheckedCreateInput>
    /**
     * In case the Livro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
  }

  /**
   * Livro delete
   */
  export type LivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter which Livro to delete.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro deleteMany
   */
  export type LivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livros to delete
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to delete.
     */
    limit?: number
  }

  /**
   * Livro without action
   */
  export type LivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
  }


  /**
   * Model GeneroLivro
   */

  export type AggregateGeneroLivro = {
    _count: GeneroLivroCountAggregateOutputType | null
    _avg: GeneroLivroAvgAggregateOutputType | null
    _sum: GeneroLivroSumAggregateOutputType | null
    _min: GeneroLivroMinAggregateOutputType | null
    _max: GeneroLivroMaxAggregateOutputType | null
  }

  export type GeneroLivroAvgAggregateOutputType = {
    id: number | null
  }

  export type GeneroLivroSumAggregateOutputType = {
    id: number | null
  }

  export type GeneroLivroMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type GeneroLivroMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type GeneroLivroCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type GeneroLivroAvgAggregateInputType = {
    id?: true
  }

  export type GeneroLivroSumAggregateInputType = {
    id?: true
  }

  export type GeneroLivroMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type GeneroLivroMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type GeneroLivroCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type GeneroLivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneroLivro to aggregate.
     */
    where?: GeneroLivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneroLivros to fetch.
     */
    orderBy?: GeneroLivroOrderByWithRelationInput | GeneroLivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneroLivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneroLivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneroLivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneroLivros
    **/
    _count?: true | GeneroLivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroLivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroLivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroLivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroLivroMaxAggregateInputType
  }

  export type GetGeneroLivroAggregateType<T extends GeneroLivroAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneroLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneroLivro[P]>
      : GetScalarType<T[P], AggregateGeneroLivro[P]>
  }




  export type GeneroLivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroLivroWhereInput
    orderBy?: GeneroLivroOrderByWithAggregationInput | GeneroLivroOrderByWithAggregationInput[]
    by: GeneroLivroScalarFieldEnum[] | GeneroLivroScalarFieldEnum
    having?: GeneroLivroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroLivroCountAggregateInputType | true
    _avg?: GeneroLivroAvgAggregateInputType
    _sum?: GeneroLivroSumAggregateInputType
    _min?: GeneroLivroMinAggregateInputType
    _max?: GeneroLivroMaxAggregateInputType
  }

  export type GeneroLivroGroupByOutputType = {
    id: number
    nome: string
    _count: GeneroLivroCountAggregateOutputType | null
    _avg: GeneroLivroAvgAggregateOutputType | null
    _sum: GeneroLivroSumAggregateOutputType | null
    _min: GeneroLivroMinAggregateOutputType | null
    _max: GeneroLivroMaxAggregateOutputType | null
  }

  type GetGeneroLivroGroupByPayload<T extends GeneroLivroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroLivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroLivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroLivroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroLivroGroupByOutputType[P]>
        }
      >
    >


  export type GeneroLivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    livros?: boolean | GeneroLivro$livrosArgs<ExtArgs>
    _count?: boolean | GeneroLivroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generoLivro"]>



  export type GeneroLivroSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type GeneroLivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["generoLivro"]>
  export type GeneroLivroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | GeneroLivro$livrosArgs<ExtArgs>
    _count?: boolean | GeneroLivroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeneroLivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneroLivro"
    objects: {
      livros: Prisma.$LivroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["generoLivro"]>
    composites: {}
  }

  type GeneroLivroGetPayload<S extends boolean | null | undefined | GeneroLivroDefaultArgs> = $Result.GetResult<Prisma.$GeneroLivroPayload, S>

  type GeneroLivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneroLivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroLivroCountAggregateInputType | true
    }

  export interface GeneroLivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneroLivro'], meta: { name: 'GeneroLivro' } }
    /**
     * Find zero or one GeneroLivro that matches the filter.
     * @param {GeneroLivroFindUniqueArgs} args - Arguments to find a GeneroLivro
     * @example
     * // Get one GeneroLivro
     * const generoLivro = await prisma.generoLivro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneroLivroFindUniqueArgs>(args: SelectSubset<T, GeneroLivroFindUniqueArgs<ExtArgs>>): Prisma__GeneroLivroClient<$Result.GetResult<Prisma.$GeneroLivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneroLivro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneroLivroFindUniqueOrThrowArgs} args - Arguments to find a GeneroLivro
     * @example
     * // Get one GeneroLivro
     * const generoLivro = await prisma.generoLivro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneroLivroFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneroLivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneroLivroClient<$Result.GetResult<Prisma.$GeneroLivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneroLivro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroLivroFindFirstArgs} args - Arguments to find a GeneroLivro
     * @example
     * // Get one GeneroLivro
     * const generoLivro = await prisma.generoLivro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneroLivroFindFirstArgs>(args?: SelectSubset<T, GeneroLivroFindFirstArgs<ExtArgs>>): Prisma__GeneroLivroClient<$Result.GetResult<Prisma.$GeneroLivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneroLivro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroLivroFindFirstOrThrowArgs} args - Arguments to find a GeneroLivro
     * @example
     * // Get one GeneroLivro
     * const generoLivro = await prisma.generoLivro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneroLivroFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneroLivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneroLivroClient<$Result.GetResult<Prisma.$GeneroLivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneroLivros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroLivroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneroLivros
     * const generoLivros = await prisma.generoLivro.findMany()
     * 
     * // Get first 10 GeneroLivros
     * const generoLivros = await prisma.generoLivro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generoLivroWithIdOnly = await prisma.generoLivro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneroLivroFindManyArgs>(args?: SelectSubset<T, GeneroLivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroLivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneroLivro.
     * @param {GeneroLivroCreateArgs} args - Arguments to create a GeneroLivro.
     * @example
     * // Create one GeneroLivro
     * const GeneroLivro = await prisma.generoLivro.create({
     *   data: {
     *     // ... data to create a GeneroLivro
     *   }
     * })
     * 
     */
    create<T extends GeneroLivroCreateArgs>(args: SelectSubset<T, GeneroLivroCreateArgs<ExtArgs>>): Prisma__GeneroLivroClient<$Result.GetResult<Prisma.$GeneroLivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneroLivros.
     * @param {GeneroLivroCreateManyArgs} args - Arguments to create many GeneroLivros.
     * @example
     * // Create many GeneroLivros
     * const generoLivro = await prisma.generoLivro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneroLivroCreateManyArgs>(args?: SelectSubset<T, GeneroLivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeneroLivro.
     * @param {GeneroLivroDeleteArgs} args - Arguments to delete one GeneroLivro.
     * @example
     * // Delete one GeneroLivro
     * const GeneroLivro = await prisma.generoLivro.delete({
     *   where: {
     *     // ... filter to delete one GeneroLivro
     *   }
     * })
     * 
     */
    delete<T extends GeneroLivroDeleteArgs>(args: SelectSubset<T, GeneroLivroDeleteArgs<ExtArgs>>): Prisma__GeneroLivroClient<$Result.GetResult<Prisma.$GeneroLivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneroLivro.
     * @param {GeneroLivroUpdateArgs} args - Arguments to update one GeneroLivro.
     * @example
     * // Update one GeneroLivro
     * const generoLivro = await prisma.generoLivro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneroLivroUpdateArgs>(args: SelectSubset<T, GeneroLivroUpdateArgs<ExtArgs>>): Prisma__GeneroLivroClient<$Result.GetResult<Prisma.$GeneroLivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneroLivros.
     * @param {GeneroLivroDeleteManyArgs} args - Arguments to filter GeneroLivros to delete.
     * @example
     * // Delete a few GeneroLivros
     * const { count } = await prisma.generoLivro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneroLivroDeleteManyArgs>(args?: SelectSubset<T, GeneroLivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneroLivros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroLivroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneroLivros
     * const generoLivro = await prisma.generoLivro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneroLivroUpdateManyArgs>(args: SelectSubset<T, GeneroLivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeneroLivro.
     * @param {GeneroLivroUpsertArgs} args - Arguments to update or create a GeneroLivro.
     * @example
     * // Update or create a GeneroLivro
     * const generoLivro = await prisma.generoLivro.upsert({
     *   create: {
     *     // ... data to create a GeneroLivro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneroLivro we want to update
     *   }
     * })
     */
    upsert<T extends GeneroLivroUpsertArgs>(args: SelectSubset<T, GeneroLivroUpsertArgs<ExtArgs>>): Prisma__GeneroLivroClient<$Result.GetResult<Prisma.$GeneroLivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneroLivros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroLivroCountArgs} args - Arguments to filter GeneroLivros to count.
     * @example
     * // Count the number of GeneroLivros
     * const count = await prisma.generoLivro.count({
     *   where: {
     *     // ... the filter for the GeneroLivros we want to count
     *   }
     * })
    **/
    count<T extends GeneroLivroCountArgs>(
      args?: Subset<T, GeneroLivroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroLivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneroLivro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroLivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneroLivroAggregateArgs>(args: Subset<T, GeneroLivroAggregateArgs>): Prisma.PrismaPromise<GetGeneroLivroAggregateType<T>>

    /**
     * Group by GeneroLivro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroLivroGroupByArgs} args - Group by arguments.
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
      T extends GeneroLivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneroLivroGroupByArgs['orderBy'] }
        : { orderBy?: GeneroLivroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneroLivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneroLivro model
   */
  readonly fields: GeneroLivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneroLivro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneroLivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livros<T extends GeneroLivro$livrosArgs<ExtArgs> = {}>(args?: Subset<T, GeneroLivro$livrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GeneroLivro model
   */
  interface GeneroLivroFieldRefs {
    readonly id: FieldRef<"GeneroLivro", 'Int'>
    readonly nome: FieldRef<"GeneroLivro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GeneroLivro findUnique
   */
  export type GeneroLivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivro
     */
    select?: GeneroLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroLivro
     */
    omit?: GeneroLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroLivroInclude<ExtArgs> | null
    /**
     * Filter, which GeneroLivro to fetch.
     */
    where: GeneroLivroWhereUniqueInput
  }

  /**
   * GeneroLivro findUniqueOrThrow
   */
  export type GeneroLivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivro
     */
    select?: GeneroLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroLivro
     */
    omit?: GeneroLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroLivroInclude<ExtArgs> | null
    /**
     * Filter, which GeneroLivro to fetch.
     */
    where: GeneroLivroWhereUniqueInput
  }

  /**
   * GeneroLivro findFirst
   */
  export type GeneroLivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivro
     */
    select?: GeneroLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroLivro
     */
    omit?: GeneroLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroLivroInclude<ExtArgs> | null
    /**
     * Filter, which GeneroLivro to fetch.
     */
    where?: GeneroLivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneroLivros to fetch.
     */
    orderBy?: GeneroLivroOrderByWithRelationInput | GeneroLivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneroLivros.
     */
    cursor?: GeneroLivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneroLivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneroLivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneroLivros.
     */
    distinct?: GeneroLivroScalarFieldEnum | GeneroLivroScalarFieldEnum[]
  }

  /**
   * GeneroLivro findFirstOrThrow
   */
  export type GeneroLivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivro
     */
    select?: GeneroLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroLivro
     */
    omit?: GeneroLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroLivroInclude<ExtArgs> | null
    /**
     * Filter, which GeneroLivro to fetch.
     */
    where?: GeneroLivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneroLivros to fetch.
     */
    orderBy?: GeneroLivroOrderByWithRelationInput | GeneroLivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneroLivros.
     */
    cursor?: GeneroLivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneroLivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneroLivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneroLivros.
     */
    distinct?: GeneroLivroScalarFieldEnum | GeneroLivroScalarFieldEnum[]
  }

  /**
   * GeneroLivro findMany
   */
  export type GeneroLivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivro
     */
    select?: GeneroLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroLivro
     */
    omit?: GeneroLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroLivroInclude<ExtArgs> | null
    /**
     * Filter, which GeneroLivros to fetch.
     */
    where?: GeneroLivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneroLivros to fetch.
     */
    orderBy?: GeneroLivroOrderByWithRelationInput | GeneroLivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneroLivros.
     */
    cursor?: GeneroLivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneroLivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneroLivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneroLivros.
     */
    distinct?: GeneroLivroScalarFieldEnum | GeneroLivroScalarFieldEnum[]
  }

  /**
   * GeneroLivro create
   */
  export type GeneroLivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivro
     */
    select?: GeneroLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroLivro
     */
    omit?: GeneroLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroLivroInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneroLivro.
     */
    data: XOR<GeneroLivroCreateInput, GeneroLivroUncheckedCreateInput>
  }

  /**
   * GeneroLivro createMany
   */
  export type GeneroLivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneroLivros.
     */
    data: GeneroLivroCreateManyInput | GeneroLivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneroLivro update
   */
  export type GeneroLivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivro
     */
    select?: GeneroLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroLivro
     */
    omit?: GeneroLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroLivroInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneroLivro.
     */
    data: XOR<GeneroLivroUpdateInput, GeneroLivroUncheckedUpdateInput>
    /**
     * Choose, which GeneroLivro to update.
     */
    where: GeneroLivroWhereUniqueInput
  }

  /**
   * GeneroLivro updateMany
   */
  export type GeneroLivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneroLivros.
     */
    data: XOR<GeneroLivroUpdateManyMutationInput, GeneroLivroUncheckedUpdateManyInput>
    /**
     * Filter which GeneroLivros to update
     */
    where?: GeneroLivroWhereInput
    /**
     * Limit how many GeneroLivros to update.
     */
    limit?: number
  }

  /**
   * GeneroLivro upsert
   */
  export type GeneroLivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivro
     */
    select?: GeneroLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroLivro
     */
    omit?: GeneroLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroLivroInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneroLivro to update in case it exists.
     */
    where: GeneroLivroWhereUniqueInput
    /**
     * In case the GeneroLivro found by the `where` argument doesn't exist, create a new GeneroLivro with this data.
     */
    create: XOR<GeneroLivroCreateInput, GeneroLivroUncheckedCreateInput>
    /**
     * In case the GeneroLivro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneroLivroUpdateInput, GeneroLivroUncheckedUpdateInput>
  }

  /**
   * GeneroLivro delete
   */
  export type GeneroLivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivro
     */
    select?: GeneroLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroLivro
     */
    omit?: GeneroLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroLivroInclude<ExtArgs> | null
    /**
     * Filter which GeneroLivro to delete.
     */
    where: GeneroLivroWhereUniqueInput
  }

  /**
   * GeneroLivro deleteMany
   */
  export type GeneroLivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneroLivros to delete
     */
    where?: GeneroLivroWhereInput
    /**
     * Limit how many GeneroLivros to delete.
     */
    limit?: number
  }

  /**
   * GeneroLivro.livros
   */
  export type GeneroLivro$livrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    cursor?: LivroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * GeneroLivro without action
   */
  export type GeneroLivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroLivro
     */
    select?: GeneroLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroLivro
     */
    omit?: GeneroLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroLivroInclude<ExtArgs> | null
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
    idAutor: 'idAutor'
  };

  export type LivroScalarFieldEnum = (typeof LivroScalarFieldEnum)[keyof typeof LivroScalarFieldEnum]


  export const GeneroLivroScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type GeneroLivroScalarFieldEnum = (typeof GeneroLivroScalarFieldEnum)[keyof typeof GeneroLivroScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AutorOrderByRelevanceFieldEnum: {
    nome: 'nome',
    nacionalidade: 'nacionalidade'
  };

  export type AutorOrderByRelevanceFieldEnum = (typeof AutorOrderByRelevanceFieldEnum)[keyof typeof AutorOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EditoraOrderByRelevanceFieldEnum: {
    nome: 'nome',
    cidade: 'cidade',
    pais: 'pais'
  };

  export type EditoraOrderByRelevanceFieldEnum = (typeof EditoraOrderByRelevanceFieldEnum)[keyof typeof EditoraOrderByRelevanceFieldEnum]


  export const LivroOrderByRelevanceFieldEnum: {
    nome: 'nome',
    isbn: 'isbn',
    colecao: 'colecao',
    edicao: 'edicao'
  };

  export type LivroOrderByRelevanceFieldEnum = (typeof LivroOrderByRelevanceFieldEnum)[keyof typeof LivroOrderByRelevanceFieldEnum]


  export const GeneroLivroOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type GeneroLivroOrderByRelevanceFieldEnum = (typeof GeneroLivroOrderByRelevanceFieldEnum)[keyof typeof GeneroLivroOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AutorWhereInput = {
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    id?: IntFilter<"Autor"> | number
    nome?: StringFilter<"Autor"> | string
    nacionalidade?: StringFilter<"Autor"> | string
    dataNascimento?: DateTimeFilter<"Autor"> | Date | string
    livros?: LivroListRelationFilter
  }

  export type AutorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
    livros?: LivroOrderByRelationAggregateInput
    _relevance?: AutorOrderByRelevanceInput
  }

  export type AutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    nome?: StringFilter<"Autor"> | string
    nacionalidade?: StringFilter<"Autor"> | string
    dataNascimento?: DateTimeFilter<"Autor"> | Date | string
    livros?: LivroListRelationFilter
  }, "id">

  export type AutorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
    _count?: AutorCountOrderByAggregateInput
    _avg?: AutorAvgOrderByAggregateInput
    _max?: AutorMaxOrderByAggregateInput
    _min?: AutorMinOrderByAggregateInput
    _sum?: AutorSumOrderByAggregateInput
  }

  export type AutorScalarWhereWithAggregatesInput = {
    AND?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    OR?: AutorScalarWhereWithAggregatesInput[]
    NOT?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Autor"> | number
    nome?: StringWithAggregatesFilter<"Autor"> | string
    nacionalidade?: StringWithAggregatesFilter<"Autor"> | string
    dataNascimento?: DateTimeWithAggregatesFilter<"Autor"> | Date | string
  }

  export type EditoraWhereInput = {
    AND?: EditoraWhereInput | EditoraWhereInput[]
    OR?: EditoraWhereInput[]
    NOT?: EditoraWhereInput | EditoraWhereInput[]
    id?: IntFilter<"Editora"> | number
    nome?: StringFilter<"Editora"> | string
    cidade?: StringFilter<"Editora"> | string
    dataFundacao?: DateTimeFilter<"Editora"> | Date | string
    pais?: StringFilter<"Editora"> | string
    deletedAt?: DateTimeNullableFilter<"Editora"> | Date | string | null
    livros?: LivroListRelationFilter
  }

  export type EditoraOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    dataFundacao?: SortOrder
    pais?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    livros?: LivroOrderByRelationAggregateInput
    _relevance?: EditoraOrderByRelevanceInput
  }

  export type EditoraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: EditoraWhereInput | EditoraWhereInput[]
    OR?: EditoraWhereInput[]
    NOT?: EditoraWhereInput | EditoraWhereInput[]
    cidade?: StringFilter<"Editora"> | string
    dataFundacao?: DateTimeFilter<"Editora"> | Date | string
    pais?: StringFilter<"Editora"> | string
    deletedAt?: DateTimeNullableFilter<"Editora"> | Date | string | null
    livros?: LivroListRelationFilter
  }, "id" | "nome">

  export type EditoraOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    dataFundacao?: SortOrder
    pais?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EditoraCountOrderByAggregateInput
    _avg?: EditoraAvgOrderByAggregateInput
    _max?: EditoraMaxOrderByAggregateInput
    _min?: EditoraMinOrderByAggregateInput
    _sum?: EditoraSumOrderByAggregateInput
  }

  export type EditoraScalarWhereWithAggregatesInput = {
    AND?: EditoraScalarWhereWithAggregatesInput | EditoraScalarWhereWithAggregatesInput[]
    OR?: EditoraScalarWhereWithAggregatesInput[]
    NOT?: EditoraScalarWhereWithAggregatesInput | EditoraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Editora"> | number
    nome?: StringWithAggregatesFilter<"Editora"> | string
    cidade?: StringWithAggregatesFilter<"Editora"> | string
    dataFundacao?: DateTimeWithAggregatesFilter<"Editora"> | Date | string
    pais?: StringWithAggregatesFilter<"Editora"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Editora"> | Date | string | null
  }

  export type LivroWhereInput = {
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    id?: IntFilter<"Livro"> | number
    nome?: StringFilter<"Livro"> | string
    isbn?: StringFilter<"Livro"> | string
    dataFundacao?: DateTimeFilter<"Livro"> | Date | string
    numPaginas?: IntFilter<"Livro"> | number
    volume?: IntFilter<"Livro"> | number
    colecao?: StringFilter<"Livro"> | string
    edicao?: StringFilter<"Livro"> | string
    dataLancamento?: DateTimeFilter<"Livro"> | Date | string
    idGenero?: IntFilter<"Livro"> | number
    idEditora?: IntFilter<"Livro"> | number
    idAutor?: IntFilter<"Livro"> | number
    genero?: XOR<GeneroLivroScalarRelationFilter, GeneroLivroWhereInput>
    editora?: XOR<EditoraScalarRelationFilter, EditoraWhereInput>
    autor?: XOR<AutorScalarRelationFilter, AutorWhereInput>
  }

  export type LivroOrderByWithRelationInput = {
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
    genero?: GeneroLivroOrderByWithRelationInput
    editora?: EditoraOrderByWithRelationInput
    autor?: AutorOrderByWithRelationInput
    _relevance?: LivroOrderByRelevanceInput
  }

  export type LivroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    isbn?: StringFilter<"Livro"> | string
    dataFundacao?: DateTimeFilter<"Livro"> | Date | string
    numPaginas?: IntFilter<"Livro"> | number
    volume?: IntFilter<"Livro"> | number
    colecao?: StringFilter<"Livro"> | string
    edicao?: StringFilter<"Livro"> | string
    dataLancamento?: DateTimeFilter<"Livro"> | Date | string
    idGenero?: IntFilter<"Livro"> | number
    idEditora?: IntFilter<"Livro"> | number
    idAutor?: IntFilter<"Livro"> | number
    genero?: XOR<GeneroLivroScalarRelationFilter, GeneroLivroWhereInput>
    editora?: XOR<EditoraScalarRelationFilter, EditoraWhereInput>
    autor?: XOR<AutorScalarRelationFilter, AutorWhereInput>
  }, "id" | "nome">

  export type LivroOrderByWithAggregationInput = {
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
    _count?: LivroCountOrderByAggregateInput
    _avg?: LivroAvgOrderByAggregateInput
    _max?: LivroMaxOrderByAggregateInput
    _min?: LivroMinOrderByAggregateInput
    _sum?: LivroSumOrderByAggregateInput
  }

  export type LivroScalarWhereWithAggregatesInput = {
    AND?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    OR?: LivroScalarWhereWithAggregatesInput[]
    NOT?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Livro"> | number
    nome?: StringWithAggregatesFilter<"Livro"> | string
    isbn?: StringWithAggregatesFilter<"Livro"> | string
    dataFundacao?: DateTimeWithAggregatesFilter<"Livro"> | Date | string
    numPaginas?: IntWithAggregatesFilter<"Livro"> | number
    volume?: IntWithAggregatesFilter<"Livro"> | number
    colecao?: StringWithAggregatesFilter<"Livro"> | string
    edicao?: StringWithAggregatesFilter<"Livro"> | string
    dataLancamento?: DateTimeWithAggregatesFilter<"Livro"> | Date | string
    idGenero?: IntWithAggregatesFilter<"Livro"> | number
    idEditora?: IntWithAggregatesFilter<"Livro"> | number
    idAutor?: IntWithAggregatesFilter<"Livro"> | number
  }

  export type GeneroLivroWhereInput = {
    AND?: GeneroLivroWhereInput | GeneroLivroWhereInput[]
    OR?: GeneroLivroWhereInput[]
    NOT?: GeneroLivroWhereInput | GeneroLivroWhereInput[]
    id?: IntFilter<"GeneroLivro"> | number
    nome?: StringFilter<"GeneroLivro"> | string
    livros?: LivroListRelationFilter
  }

  export type GeneroLivroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    livros?: LivroOrderByRelationAggregateInput
    _relevance?: GeneroLivroOrderByRelevanceInput
  }

  export type GeneroLivroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GeneroLivroWhereInput | GeneroLivroWhereInput[]
    OR?: GeneroLivroWhereInput[]
    NOT?: GeneroLivroWhereInput | GeneroLivroWhereInput[]
    nome?: StringFilter<"GeneroLivro"> | string
    livros?: LivroListRelationFilter
  }, "id">

  export type GeneroLivroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: GeneroLivroCountOrderByAggregateInput
    _avg?: GeneroLivroAvgOrderByAggregateInput
    _max?: GeneroLivroMaxOrderByAggregateInput
    _min?: GeneroLivroMinOrderByAggregateInput
    _sum?: GeneroLivroSumOrderByAggregateInput
  }

  export type GeneroLivroScalarWhereWithAggregatesInput = {
    AND?: GeneroLivroScalarWhereWithAggregatesInput | GeneroLivroScalarWhereWithAggregatesInput[]
    OR?: GeneroLivroScalarWhereWithAggregatesInput[]
    NOT?: GeneroLivroScalarWhereWithAggregatesInput | GeneroLivroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GeneroLivro"> | number
    nome?: StringWithAggregatesFilter<"GeneroLivro"> | string
  }

  export type AutorCreateInput = {
    nome: string
    nacionalidade: string
    dataNascimento: Date | string
    livros?: LivroCreateNestedManyWithoutAutorInput
  }

  export type AutorUncheckedCreateInput = {
    id?: number
    nome: string
    nacionalidade: string
    dataNascimento: Date | string
    livros?: LivroUncheckedCreateNestedManyWithoutAutorInput
  }

  export type AutorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    livros?: LivroUpdateManyWithoutAutorNestedInput
  }

  export type AutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    livros?: LivroUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type AutorCreateManyInput = {
    id?: number
    nome: string
    nacionalidade: string
    dataNascimento: Date | string
  }

  export type AutorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditoraCreateInput = {
    nome: string
    cidade: string
    dataFundacao: Date | string
    pais: string
    deletedAt?: Date | string | null
    livros?: LivroCreateNestedManyWithoutEditoraInput
  }

  export type EditoraUncheckedCreateInput = {
    id?: number
    nome: string
    cidade: string
    dataFundacao: Date | string
    pais: string
    deletedAt?: Date | string | null
    livros?: LivroUncheckedCreateNestedManyWithoutEditoraInput
  }

  export type EditoraUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    livros?: LivroUpdateManyWithoutEditoraNestedInput
  }

  export type EditoraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    livros?: LivroUncheckedUpdateManyWithoutEditoraNestedInput
  }

  export type EditoraCreateManyInput = {
    id?: number
    nome: string
    cidade: string
    dataFundacao: Date | string
    pais: string
    deletedAt?: Date | string | null
  }

  export type EditoraUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EditoraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LivroCreateInput = {
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    genero: GeneroLivroCreateNestedOneWithoutLivrosInput
    editora: EditoraCreateNestedOneWithoutLivrosInput
    autor: AutorCreateNestedOneWithoutLivrosInput
  }

  export type LivroUncheckedCreateInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idEditora: number
    idAutor: number
  }

  export type LivroUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroLivroUpdateOneRequiredWithoutLivrosNestedInput
    editora?: EditoraUpdateOneRequiredWithoutLivrosNestedInput
    autor?: AutorUpdateOneRequiredWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idEditora?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
  }

  export type LivroCreateManyInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idEditora: number
    idAutor: number
  }

  export type LivroUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LivroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idEditora?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
  }

  export type GeneroLivroCreateInput = {
    nome: string
    livros?: LivroCreateNestedManyWithoutGeneroInput
  }

  export type GeneroLivroUncheckedCreateInput = {
    id?: number
    nome: string
    livros?: LivroUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroLivroUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    livros?: LivroUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroLivroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    livros?: LivroUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroLivroCreateManyInput = {
    id?: number
    nome: string
  }

  export type GeneroLivroUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroLivroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
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
    every?: LivroWhereInput
    some?: LivroWhereInput
    none?: LivroWhereInput
  }

  export type LivroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutorOrderByRelevanceInput = {
    fields: AutorOrderByRelevanceFieldEnum | AutorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AutorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
  }

  export type AutorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AutorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
  }

  export type AutorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nacionalidade?: SortOrder
    dataNascimento?: SortOrder
  }

  export type AutorSumOrderByAggregateInput = {
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

  export type EditoraOrderByRelevanceInput = {
    fields: EditoraOrderByRelevanceFieldEnum | EditoraOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EditoraCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    dataFundacao?: SortOrder
    pais?: SortOrder
    deletedAt?: SortOrder
  }

  export type EditoraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EditoraMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    dataFundacao?: SortOrder
    pais?: SortOrder
    deletedAt?: SortOrder
  }

  export type EditoraMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cidade?: SortOrder
    dataFundacao?: SortOrder
    pais?: SortOrder
    deletedAt?: SortOrder
  }

  export type EditoraSumOrderByAggregateInput = {
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

  export type GeneroLivroScalarRelationFilter = {
    is?: GeneroLivroWhereInput
    isNot?: GeneroLivroWhereInput
  }

  export type EditoraScalarRelationFilter = {
    is?: EditoraWhereInput
    isNot?: EditoraWhereInput
  }

  export type AutorScalarRelationFilter = {
    is?: AutorWhereInput
    isNot?: AutorWhereInput
  }

  export type LivroOrderByRelevanceInput = {
    fields: LivroOrderByRelevanceFieldEnum | LivroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LivroCountOrderByAggregateInput = {
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
  }

  export type LivroAvgOrderByAggregateInput = {
    id?: SortOrder
    numPaginas?: SortOrder
    volume?: SortOrder
    idGenero?: SortOrder
    idEditora?: SortOrder
    idAutor?: SortOrder
  }

  export type LivroMaxOrderByAggregateInput = {
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
  }

  export type LivroMinOrderByAggregateInput = {
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
  }

  export type LivroSumOrderByAggregateInput = {
    id?: SortOrder
    numPaginas?: SortOrder
    volume?: SortOrder
    idGenero?: SortOrder
    idEditora?: SortOrder
    idAutor?: SortOrder
  }

  export type GeneroLivroOrderByRelevanceInput = {
    fields: GeneroLivroOrderByRelevanceFieldEnum | GeneroLivroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeneroLivroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type GeneroLivroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneroLivroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type GeneroLivroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type GeneroLivroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LivroCreateNestedManyWithoutAutorInput = {
    create?: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput> | LivroCreateWithoutAutorInput[] | LivroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutorInput | LivroCreateOrConnectWithoutAutorInput[]
    createMany?: LivroCreateManyAutorInputEnvelope
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type LivroUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput> | LivroCreateWithoutAutorInput[] | LivroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutorInput | LivroCreateOrConnectWithoutAutorInput[]
    createMany?: LivroCreateManyAutorInputEnvelope
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LivroUpdateManyWithoutAutorNestedInput = {
    create?: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput> | LivroCreateWithoutAutorInput[] | LivroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutorInput | LivroCreateOrConnectWithoutAutorInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutAutorInput | LivroUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: LivroCreateManyAutorInputEnvelope
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutAutorInput | LivroUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutAutorInput | LivroUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LivroUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput> | LivroCreateWithoutAutorInput[] | LivroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutorInput | LivroCreateOrConnectWithoutAutorInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutAutorInput | LivroUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: LivroCreateManyAutorInputEnvelope
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutAutorInput | LivroUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutAutorInput | LivroUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type LivroCreateNestedManyWithoutEditoraInput = {
    create?: XOR<LivroCreateWithoutEditoraInput, LivroUncheckedCreateWithoutEditoraInput> | LivroCreateWithoutEditoraInput[] | LivroUncheckedCreateWithoutEditoraInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutEditoraInput | LivroCreateOrConnectWithoutEditoraInput[]
    createMany?: LivroCreateManyEditoraInputEnvelope
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type LivroUncheckedCreateNestedManyWithoutEditoraInput = {
    create?: XOR<LivroCreateWithoutEditoraInput, LivroUncheckedCreateWithoutEditoraInput> | LivroCreateWithoutEditoraInput[] | LivroUncheckedCreateWithoutEditoraInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutEditoraInput | LivroCreateOrConnectWithoutEditoraInput[]
    createMany?: LivroCreateManyEditoraInputEnvelope
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LivroUpdateManyWithoutEditoraNestedInput = {
    create?: XOR<LivroCreateWithoutEditoraInput, LivroUncheckedCreateWithoutEditoraInput> | LivroCreateWithoutEditoraInput[] | LivroUncheckedCreateWithoutEditoraInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutEditoraInput | LivroCreateOrConnectWithoutEditoraInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutEditoraInput | LivroUpsertWithWhereUniqueWithoutEditoraInput[]
    createMany?: LivroCreateManyEditoraInputEnvelope
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutEditoraInput | LivroUpdateWithWhereUniqueWithoutEditoraInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutEditoraInput | LivroUpdateManyWithWhereWithoutEditoraInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type LivroUncheckedUpdateManyWithoutEditoraNestedInput = {
    create?: XOR<LivroCreateWithoutEditoraInput, LivroUncheckedCreateWithoutEditoraInput> | LivroCreateWithoutEditoraInput[] | LivroUncheckedCreateWithoutEditoraInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutEditoraInput | LivroCreateOrConnectWithoutEditoraInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutEditoraInput | LivroUpsertWithWhereUniqueWithoutEditoraInput[]
    createMany?: LivroCreateManyEditoraInputEnvelope
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutEditoraInput | LivroUpdateWithWhereUniqueWithoutEditoraInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutEditoraInput | LivroUpdateManyWithWhereWithoutEditoraInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type GeneroLivroCreateNestedOneWithoutLivrosInput = {
    create?: XOR<GeneroLivroCreateWithoutLivrosInput, GeneroLivroUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: GeneroLivroCreateOrConnectWithoutLivrosInput
    connect?: GeneroLivroWhereUniqueInput
  }

  export type EditoraCreateNestedOneWithoutLivrosInput = {
    create?: XOR<EditoraCreateWithoutLivrosInput, EditoraUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: EditoraCreateOrConnectWithoutLivrosInput
    connect?: EditoraWhereUniqueInput
  }

  export type AutorCreateNestedOneWithoutLivrosInput = {
    create?: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: AutorCreateOrConnectWithoutLivrosInput
    connect?: AutorWhereUniqueInput
  }

  export type GeneroLivroUpdateOneRequiredWithoutLivrosNestedInput = {
    create?: XOR<GeneroLivroCreateWithoutLivrosInput, GeneroLivroUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: GeneroLivroCreateOrConnectWithoutLivrosInput
    upsert?: GeneroLivroUpsertWithoutLivrosInput
    connect?: GeneroLivroWhereUniqueInput
    update?: XOR<XOR<GeneroLivroUpdateToOneWithWhereWithoutLivrosInput, GeneroLivroUpdateWithoutLivrosInput>, GeneroLivroUncheckedUpdateWithoutLivrosInput>
  }

  export type EditoraUpdateOneRequiredWithoutLivrosNestedInput = {
    create?: XOR<EditoraCreateWithoutLivrosInput, EditoraUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: EditoraCreateOrConnectWithoutLivrosInput
    upsert?: EditoraUpsertWithoutLivrosInput
    connect?: EditoraWhereUniqueInput
    update?: XOR<XOR<EditoraUpdateToOneWithWhereWithoutLivrosInput, EditoraUpdateWithoutLivrosInput>, EditoraUncheckedUpdateWithoutLivrosInput>
  }

  export type AutorUpdateOneRequiredWithoutLivrosNestedInput = {
    create?: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: AutorCreateOrConnectWithoutLivrosInput
    upsert?: AutorUpsertWithoutLivrosInput
    connect?: AutorWhereUniqueInput
    update?: XOR<XOR<AutorUpdateToOneWithWhereWithoutLivrosInput, AutorUpdateWithoutLivrosInput>, AutorUncheckedUpdateWithoutLivrosInput>
  }

  export type LivroCreateNestedManyWithoutGeneroInput = {
    create?: XOR<LivroCreateWithoutGeneroInput, LivroUncheckedCreateWithoutGeneroInput> | LivroCreateWithoutGeneroInput[] | LivroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutGeneroInput | LivroCreateOrConnectWithoutGeneroInput[]
    createMany?: LivroCreateManyGeneroInputEnvelope
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type LivroUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<LivroCreateWithoutGeneroInput, LivroUncheckedCreateWithoutGeneroInput> | LivroCreateWithoutGeneroInput[] | LivroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutGeneroInput | LivroCreateOrConnectWithoutGeneroInput[]
    createMany?: LivroCreateManyGeneroInputEnvelope
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type LivroUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<LivroCreateWithoutGeneroInput, LivroUncheckedCreateWithoutGeneroInput> | LivroCreateWithoutGeneroInput[] | LivroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutGeneroInput | LivroCreateOrConnectWithoutGeneroInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutGeneroInput | LivroUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: LivroCreateManyGeneroInputEnvelope
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutGeneroInput | LivroUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutGeneroInput | LivroUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type LivroUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<LivroCreateWithoutGeneroInput, LivroUncheckedCreateWithoutGeneroInput> | LivroCreateWithoutGeneroInput[] | LivroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutGeneroInput | LivroCreateOrConnectWithoutGeneroInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutGeneroInput | LivroUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: LivroCreateManyGeneroInputEnvelope
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutGeneroInput | LivroUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutGeneroInput | LivroUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
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

  export type LivroCreateWithoutAutorInput = {
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    genero: GeneroLivroCreateNestedOneWithoutLivrosInput
    editora: EditoraCreateNestedOneWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutAutorInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idEditora: number
  }

  export type LivroCreateOrConnectWithoutAutorInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput>
  }

  export type LivroCreateManyAutorInputEnvelope = {
    data: LivroCreateManyAutorInput | LivroCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type LivroUpsertWithWhereUniqueWithoutAutorInput = {
    where: LivroWhereUniqueInput
    update: XOR<LivroUpdateWithoutAutorInput, LivroUncheckedUpdateWithoutAutorInput>
    create: XOR<LivroCreateWithoutAutorInput, LivroUncheckedCreateWithoutAutorInput>
  }

  export type LivroUpdateWithWhereUniqueWithoutAutorInput = {
    where: LivroWhereUniqueInput
    data: XOR<LivroUpdateWithoutAutorInput, LivroUncheckedUpdateWithoutAutorInput>
  }

  export type LivroUpdateManyWithWhereWithoutAutorInput = {
    where: LivroScalarWhereInput
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyWithoutAutorInput>
  }

  export type LivroScalarWhereInput = {
    AND?: LivroScalarWhereInput | LivroScalarWhereInput[]
    OR?: LivroScalarWhereInput[]
    NOT?: LivroScalarWhereInput | LivroScalarWhereInput[]
    id?: IntFilter<"Livro"> | number
    nome?: StringFilter<"Livro"> | string
    isbn?: StringFilter<"Livro"> | string
    dataFundacao?: DateTimeFilter<"Livro"> | Date | string
    numPaginas?: IntFilter<"Livro"> | number
    volume?: IntFilter<"Livro"> | number
    colecao?: StringFilter<"Livro"> | string
    edicao?: StringFilter<"Livro"> | string
    dataLancamento?: DateTimeFilter<"Livro"> | Date | string
    idGenero?: IntFilter<"Livro"> | number
    idEditora?: IntFilter<"Livro"> | number
    idAutor?: IntFilter<"Livro"> | number
  }

  export type LivroCreateWithoutEditoraInput = {
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    genero: GeneroLivroCreateNestedOneWithoutLivrosInput
    autor: AutorCreateNestedOneWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutEditoraInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idAutor: number
  }

  export type LivroCreateOrConnectWithoutEditoraInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutEditoraInput, LivroUncheckedCreateWithoutEditoraInput>
  }

  export type LivroCreateManyEditoraInputEnvelope = {
    data: LivroCreateManyEditoraInput | LivroCreateManyEditoraInput[]
    skipDuplicates?: boolean
  }

  export type LivroUpsertWithWhereUniqueWithoutEditoraInput = {
    where: LivroWhereUniqueInput
    update: XOR<LivroUpdateWithoutEditoraInput, LivroUncheckedUpdateWithoutEditoraInput>
    create: XOR<LivroCreateWithoutEditoraInput, LivroUncheckedCreateWithoutEditoraInput>
  }

  export type LivroUpdateWithWhereUniqueWithoutEditoraInput = {
    where: LivroWhereUniqueInput
    data: XOR<LivroUpdateWithoutEditoraInput, LivroUncheckedUpdateWithoutEditoraInput>
  }

  export type LivroUpdateManyWithWhereWithoutEditoraInput = {
    where: LivroScalarWhereInput
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyWithoutEditoraInput>
  }

  export type GeneroLivroCreateWithoutLivrosInput = {
    nome: string
  }

  export type GeneroLivroUncheckedCreateWithoutLivrosInput = {
    id?: number
    nome: string
  }

  export type GeneroLivroCreateOrConnectWithoutLivrosInput = {
    where: GeneroLivroWhereUniqueInput
    create: XOR<GeneroLivroCreateWithoutLivrosInput, GeneroLivroUncheckedCreateWithoutLivrosInput>
  }

  export type EditoraCreateWithoutLivrosInput = {
    nome: string
    cidade: string
    dataFundacao: Date | string
    pais: string
    deletedAt?: Date | string | null
  }

  export type EditoraUncheckedCreateWithoutLivrosInput = {
    id?: number
    nome: string
    cidade: string
    dataFundacao: Date | string
    pais: string
    deletedAt?: Date | string | null
  }

  export type EditoraCreateOrConnectWithoutLivrosInput = {
    where: EditoraWhereUniqueInput
    create: XOR<EditoraCreateWithoutLivrosInput, EditoraUncheckedCreateWithoutLivrosInput>
  }

  export type AutorCreateWithoutLivrosInput = {
    nome: string
    nacionalidade: string
    dataNascimento: Date | string
  }

  export type AutorUncheckedCreateWithoutLivrosInput = {
    id?: number
    nome: string
    nacionalidade: string
    dataNascimento: Date | string
  }

  export type AutorCreateOrConnectWithoutLivrosInput = {
    where: AutorWhereUniqueInput
    create: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
  }

  export type GeneroLivroUpsertWithoutLivrosInput = {
    update: XOR<GeneroLivroUpdateWithoutLivrosInput, GeneroLivroUncheckedUpdateWithoutLivrosInput>
    create: XOR<GeneroLivroCreateWithoutLivrosInput, GeneroLivroUncheckedCreateWithoutLivrosInput>
    where?: GeneroLivroWhereInput
  }

  export type GeneroLivroUpdateToOneWithWhereWithoutLivrosInput = {
    where?: GeneroLivroWhereInput
    data: XOR<GeneroLivroUpdateWithoutLivrosInput, GeneroLivroUncheckedUpdateWithoutLivrosInput>
  }

  export type GeneroLivroUpdateWithoutLivrosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroLivroUncheckedUpdateWithoutLivrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EditoraUpsertWithoutLivrosInput = {
    update: XOR<EditoraUpdateWithoutLivrosInput, EditoraUncheckedUpdateWithoutLivrosInput>
    create: XOR<EditoraCreateWithoutLivrosInput, EditoraUncheckedCreateWithoutLivrosInput>
    where?: EditoraWhereInput
  }

  export type EditoraUpdateToOneWithWhereWithoutLivrosInput = {
    where?: EditoraWhereInput
    data: XOR<EditoraUpdateWithoutLivrosInput, EditoraUncheckedUpdateWithoutLivrosInput>
  }

  export type EditoraUpdateWithoutLivrosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EditoraUncheckedUpdateWithoutLivrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AutorUpsertWithoutLivrosInput = {
    update: XOR<AutorUpdateWithoutLivrosInput, AutorUncheckedUpdateWithoutLivrosInput>
    create: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
    where?: AutorWhereInput
  }

  export type AutorUpdateToOneWithWhereWithoutLivrosInput = {
    where?: AutorWhereInput
    data: XOR<AutorUpdateWithoutLivrosInput, AutorUncheckedUpdateWithoutLivrosInput>
  }

  export type AutorUpdateWithoutLivrosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutorUncheckedUpdateWithoutLivrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nacionalidade?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LivroCreateWithoutGeneroInput = {
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    editora: EditoraCreateNestedOneWithoutLivrosInput
    autor: AutorCreateNestedOneWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutGeneroInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idEditora: number
    idAutor: number
  }

  export type LivroCreateOrConnectWithoutGeneroInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutGeneroInput, LivroUncheckedCreateWithoutGeneroInput>
  }

  export type LivroCreateManyGeneroInputEnvelope = {
    data: LivroCreateManyGeneroInput | LivroCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type LivroUpsertWithWhereUniqueWithoutGeneroInput = {
    where: LivroWhereUniqueInput
    update: XOR<LivroUpdateWithoutGeneroInput, LivroUncheckedUpdateWithoutGeneroInput>
    create: XOR<LivroCreateWithoutGeneroInput, LivroUncheckedCreateWithoutGeneroInput>
  }

  export type LivroUpdateWithWhereUniqueWithoutGeneroInput = {
    where: LivroWhereUniqueInput
    data: XOR<LivroUpdateWithoutGeneroInput, LivroUncheckedUpdateWithoutGeneroInput>
  }

  export type LivroUpdateManyWithWhereWithoutGeneroInput = {
    where: LivroScalarWhereInput
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyWithoutGeneroInput>
  }

  export type LivroCreateManyAutorInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idEditora: number
  }

  export type LivroUpdateWithoutAutorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroLivroUpdateOneRequiredWithoutLivrosNestedInput
    editora?: EditoraUpdateOneRequiredWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idEditora?: IntFieldUpdateOperationsInput | number
  }

  export type LivroUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idEditora?: IntFieldUpdateOperationsInput | number
  }

  export type LivroCreateManyEditoraInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idGenero: number
    idAutor: number
  }

  export type LivroUpdateWithoutEditoraInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroLivroUpdateOneRequiredWithoutLivrosNestedInput
    autor?: AutorUpdateOneRequiredWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutEditoraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
  }

  export type LivroUncheckedUpdateManyWithoutEditoraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idGenero?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
  }

  export type LivroCreateManyGeneroInput = {
    id?: number
    nome: string
    isbn: string
    dataFundacao: Date | string
    numPaginas: number
    volume: number
    colecao: string
    edicao: string
    dataLancamento: Date | string
    idEditora: number
    idAutor: number
  }

  export type LivroUpdateWithoutGeneroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    editora?: EditoraUpdateOneRequiredWithoutLivrosNestedInput
    autor?: AutorUpdateOneRequiredWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idEditora?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
  }

  export type LivroUncheckedUpdateManyWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    dataFundacao?: DateTimeFieldUpdateOperationsInput | Date | string
    numPaginas?: IntFieldUpdateOperationsInput | number
    volume?: IntFieldUpdateOperationsInput | number
    colecao?: StringFieldUpdateOperationsInput | string
    edicao?: StringFieldUpdateOperationsInput | string
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    idEditora?: IntFieldUpdateOperationsInput | number
    idAutor?: IntFieldUpdateOperationsInput | number
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