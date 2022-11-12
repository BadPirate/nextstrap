import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "providers" */
  delete_providers?: Maybe<Providers_Mutation_Response>;
  /** delete single row from the table: "providers" */
  delete_providers_by_pk?: Maybe<Providers>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "tokens" */
  delete_tokens?: Maybe<Tokens_Mutation_Response>;
  /** delete single row from the table: "tokens" */
  delete_tokens_by_pk?: Maybe<Tokens>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "providers" */
  insert_providers?: Maybe<Providers_Mutation_Response>;
  /** insert a single row into the table: "providers" */
  insert_providers_one?: Maybe<Providers>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "tokens" */
  insert_tokens?: Maybe<Tokens_Mutation_Response>;
  /** insert a single row into the table: "tokens" */
  insert_tokens_one?: Maybe<Tokens>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "providers" */
  update_providers?: Maybe<Providers_Mutation_Response>;
  /** update single row of the table: "providers" */
  update_providers_by_pk?: Maybe<Providers>;
  /** update multiples rows of table: "providers" */
  update_providers_many?: Maybe<Array<Maybe<Providers_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "tokens" */
  update_tokens?: Maybe<Tokens_Mutation_Response>;
  /** update single row of the table: "tokens" */
  update_tokens_by_pk?: Maybe<Tokens>;
  /** update multiples rows of table: "tokens" */
  update_tokens_many?: Maybe<Array<Maybe<Tokens_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ProvidersArgs = {
  where: Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Providers_By_PkArgs = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  sessionToken: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TokensArgs = {
  where: Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tokens_By_PkArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ProvidersArgs = {
  objects: Array<Providers_Insert_Input>;
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Providers_OneArgs = {
  object: Providers_Insert_Input;
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TokensArgs = {
  objects: Array<Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tokens_OneArgs = {
  object: Tokens_Insert_Input;
  on_conflict?: InputMaybe<Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ProvidersArgs = {
  _set?: InputMaybe<Providers_Set_Input>;
  where: Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Providers_By_PkArgs = {
  _set?: InputMaybe<Providers_Set_Input>;
  pk_columns: Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Providers_ManyArgs = {
  updates: Array<Providers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TokensArgs = {
  _set?: InputMaybe<Tokens_Set_Input>;
  where: Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tokens_By_PkArgs = {
  _set?: InputMaybe<Tokens_Set_Input>;
  pk_columns: Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tokens_ManyArgs = {
  updates: Array<Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "providers" */
export type Providers = {
  __typename?: 'providers';
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "providers" */
export type Providers_Aggregate = {
  __typename?: 'providers_aggregate';
  aggregate?: Maybe<Providers_Aggregate_Fields>;
  nodes: Array<Providers>;
};

/** aggregate fields of "providers" */
export type Providers_Aggregate_Fields = {
  __typename?: 'providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Providers_Max_Fields>;
  min?: Maybe<Providers_Min_Fields>;
};


/** aggregate fields of "providers" */
export type Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "providers". All fields are combined with a logical 'AND'. */
export type Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Providers_Bool_Exp>>;
  _not?: InputMaybe<Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Providers_Bool_Exp>>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "providers" */
export enum Providers_Constraint {
  /** unique or primary key constraint on columns "provider", "providerAccountId" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "providers" */
export type Providers_Insert_Input = {
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Providers_Max_Fields = {
  __typename?: 'providers_max_fields';
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Providers_Min_Fields = {
  __typename?: 'providers_min_fields';
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "providers" */
export type Providers_Mutation_Response = {
  __typename?: 'providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Providers>;
};

/** on_conflict condition type for table "providers" */
export type Providers_On_Conflict = {
  constraint: Providers_Constraint;
  update_columns?: Array<Providers_Update_Column>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "providers". */
export type Providers_Order_By = {
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: providers */
export type Providers_Pk_Columns_Input = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};

/** select columns of table "providers" */
export enum Providers_Select_Column {
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "providers" */
export type Providers_Set_Input = {
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "providers" */
export type Providers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Providers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Providers_Stream_Cursor_Value_Input = {
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "providers" */
export enum Providers_Update_Column {
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  UserId = 'userId'
}

export type Providers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Providers_Set_Input>;
  where: Providers_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "tokens" */
  tokens: Array<Tokens>;
  /** fetch aggregated fields from the table: "tokens" */
  tokens_aggregate: Tokens_Aggregate;
  /** fetch data from the table: "tokens" using primary key columns */
  tokens_by_pk?: Maybe<Tokens>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Query_RootProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Query_RootProviders_By_PkArgs = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
  sessionToken: Scalars['String'];
};


export type Query_RootTokensArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tokens_Order_By>>;
  where?: InputMaybe<Tokens_Bool_Exp>;
};


export type Query_RootTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tokens_Order_By>>;
  where?: InputMaybe<Tokens_Bool_Exp>;
};


export type Query_RootTokens_By_PkArgs = {
  token: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  expires: Scalars['timestamptz'];
  id: Scalars['uuid'];
  sessionToken: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "sessionToken" */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  sessionToken: Scalars['String'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** fetch data from the table in a streaming manner: "providers" */
  providers_stream: Array<Providers>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "tokens" */
  tokens: Array<Tokens>;
  /** fetch aggregated fields from the table: "tokens" */
  tokens_aggregate: Tokens_Aggregate;
  /** fetch data from the table: "tokens" using primary key columns */
  tokens_by_pk?: Maybe<Tokens>;
  /** fetch data from the table in a streaming manner: "tokens" */
  tokens_stream: Array<Tokens>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Subscription_RootProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Subscription_RootProviders_By_PkArgs = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};


export type Subscription_RootProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Providers_Stream_Cursor_Input>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
  sessionToken: Scalars['String'];
};


export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootTokensArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tokens_Order_By>>;
  where?: InputMaybe<Tokens_Bool_Exp>;
};


export type Subscription_RootTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tokens_Order_By>>;
  where?: InputMaybe<Tokens_Bool_Exp>;
};


export type Subscription_RootTokens_By_PkArgs = {
  token: Scalars['String'];
};


export type Subscription_RootTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Tokens_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "tokens" */
export type Tokens = {
  __typename?: 'tokens';
  email: Scalars['String'];
  expires: Scalars['timestamptz'];
  token: Scalars['String'];
};

/** aggregated selection of "tokens" */
export type Tokens_Aggregate = {
  __typename?: 'tokens_aggregate';
  aggregate?: Maybe<Tokens_Aggregate_Fields>;
  nodes: Array<Tokens>;
};

/** aggregate fields of "tokens" */
export type Tokens_Aggregate_Fields = {
  __typename?: 'tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tokens_Max_Fields>;
  min?: Maybe<Tokens_Min_Fields>;
};


/** aggregate fields of "tokens" */
export type Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tokens". All fields are combined with a logical 'AND'. */
export type Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Tokens_Bool_Exp>>;
  _not?: InputMaybe<Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Tokens_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tokens" */
export enum Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  TokensPkey = 'tokens_pkey'
}

/** input type for inserting data into table "tokens" */
export type Tokens_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tokens_Max_Fields = {
  __typename?: 'tokens_max_fields';
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['timestamptz']>;
  token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tokens_Min_Fields = {
  __typename?: 'tokens_min_fields';
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['timestamptz']>;
  token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tokens" */
export type Tokens_Mutation_Response = {
  __typename?: 'tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tokens>;
};

/** on_conflict condition type for table "tokens" */
export type Tokens_On_Conflict = {
  constraint: Tokens_Constraint;
  update_columns?: Array<Tokens_Update_Column>;
  where?: InputMaybe<Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "tokens". */
export type Tokens_Order_By = {
  email?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tokens */
export type Tokens_Pk_Columns_Input = {
  token: Scalars['String'];
};

/** select columns of table "tokens" */
export enum Tokens_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Expires = 'expires',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "tokens" */
export type Tokens_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  token?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tokens" */
export type Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tokens_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  token?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tokens" */
export enum Tokens_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Expires = 'expires',
  /** column name */
  Token = 'token'
}

export type Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tokens_Set_Input>;
  where: Tokens_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String'];
  emailVerified: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type UserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name?: string | null, email: string, emailVerified: any }> };

export type CreateVerificationTokenMutationVariables = Exact<{
  expires: Scalars['timestamptz'];
  email: Scalars['String'];
  token: Scalars['String'];
}>;


export type CreateVerificationTokenMutation = { __typename?: 'mutation_root', insert_tokens_one?: { __typename?: 'tokens', email: string } | null };

export type UseVerificationTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type UseVerificationTokenMutation = { __typename?: 'mutation_root', delete_tokens?: { __typename?: 'tokens_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'tokens', expires: any }> } | null };

export type VerifyEmailByEmailMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
}>;


export type VerifyEmailByEmailMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', emailVerified: any, id: any, name?: string | null, email: string }> } | null };

export type AdapterUserFragment = { __typename?: 'users', email: string, emailVerified: any, id: any, name?: string | null };

export type GetSessionAndUserQueryVariables = Exact<{
  sessionToken: Scalars['String'];
}>;


export type GetSessionAndUserQuery = { __typename?: 'query_root', sessions_by_pk?: { __typename?: 'sessions', expires: any, id: any, user: { __typename?: 'users', email: string, emailVerified: any, id: any, name?: string | null } } | null };

export type DeleteSessionMutationVariables = Exact<{
  sessionToken: Scalars['String'];
}>;


export type DeleteSessionMutation = { __typename?: 'mutation_root', delete_sessions_by_pk?: { __typename?: 'sessions', expires: any, id: any, userId: any } | null };

export type CreateSessionMutationVariables = Exact<{
  sessionToken: Scalars['String'];
  userId: Scalars['uuid'];
  expires: Scalars['timestamptz'];
}>;


export type CreateSessionMutation = { __typename?: 'mutation_root', insert_sessions_one?: { __typename?: 'sessions', id: any } | null };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: any } | null };

export type GetUserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', email: string, emailVerified: any, id: any, name?: string | null } | null };

export type GetUserByAccountQueryVariables = Exact<{
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
}>;


export type GetUserByAccountQuery = { __typename?: 'query_root', providers_by_pk?: { __typename?: 'providers', user: { __typename?: 'users', email: string, emailVerified: any, id: any, name?: string | null } } | null };

export type LinkAccountMutationVariables = Exact<{
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  userId: Scalars['uuid'];
}>;


export type LinkAccountMutation = { __typename?: 'mutation_root', insert_providers_one?: { __typename?: 'providers', userId: any } | null };

export type UpdateSessionQueryVariables = Exact<{
  sessionToken: Scalars['String'];
}>;


export type UpdateSessionQuery = { __typename?: 'query_root', sessions_by_pk?: { __typename?: 'sessions', expires: any, id: any, sessionToken: string, userId: any } | null };

export type UserCountSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserCountSubscription = { __typename?: 'subscription_root', users_aggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export const AdapterUserFragmentDoc = gql`
    fragment AdapterUser on users {
  email
  emailVerified
  id
  name
}
    `;
export const UserByEmailDocument = gql`
    query UserByEmail($email: String!) {
  users(limit: 1, where: {email: {_eq: $email}}) {
    id
    name
    email
    emailVerified
  }
}
    `;

/**
 * __useUserByEmailQuery__
 *
 * To run a query within a React component, call `useUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByEmailQuery, UserByEmailQueryVariables>(UserByEmailDocument, options);
      }
export function useUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByEmailQuery, UserByEmailQueryVariables>(UserByEmailDocument, options);
        }
export type UserByEmailQueryHookResult = ReturnType<typeof useUserByEmailQuery>;
export type UserByEmailLazyQueryHookResult = ReturnType<typeof useUserByEmailLazyQuery>;
export type UserByEmailQueryResult = Apollo.QueryResult<UserByEmailQuery, UserByEmailQueryVariables>;
export const CreateVerificationTokenDocument = gql`
    mutation CreateVerificationToken($expires: timestamptz!, $email: String!, $token: String!) {
  insert_tokens_one(object: {expires: $expires, email: $email, token: $token}) {
    email
  }
}
    `;
export type CreateVerificationTokenMutationFn = Apollo.MutationFunction<CreateVerificationTokenMutation, CreateVerificationTokenMutationVariables>;

/**
 * __useCreateVerificationTokenMutation__
 *
 * To run a mutation, you first call `useCreateVerificationTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVerificationTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVerificationTokenMutation, { data, loading, error }] = useCreateVerificationTokenMutation({
 *   variables: {
 *      expires: // value for 'expires'
 *      email: // value for 'email'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCreateVerificationTokenMutation(baseOptions?: Apollo.MutationHookOptions<CreateVerificationTokenMutation, CreateVerificationTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVerificationTokenMutation, CreateVerificationTokenMutationVariables>(CreateVerificationTokenDocument, options);
      }
export type CreateVerificationTokenMutationHookResult = ReturnType<typeof useCreateVerificationTokenMutation>;
export type CreateVerificationTokenMutationResult = Apollo.MutationResult<CreateVerificationTokenMutation>;
export type CreateVerificationTokenMutationOptions = Apollo.BaseMutationOptions<CreateVerificationTokenMutation, CreateVerificationTokenMutationVariables>;
export const UseVerificationTokenDocument = gql`
    mutation UseVerificationToken($token: String!) {
  delete_tokens(where: {token: {_eq: $token}}) {
    affected_rows
    returning {
      expires
    }
  }
}
    `;
export type UseVerificationTokenMutationFn = Apollo.MutationFunction<UseVerificationTokenMutation, UseVerificationTokenMutationVariables>;

/**
 * __useUseVerificationTokenMutation__
 *
 * To run a mutation, you first call `useUseVerificationTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUseVerificationTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [useVerificationTokenMutation, { data, loading, error }] = useUseVerificationTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUseVerificationTokenMutation(baseOptions?: Apollo.MutationHookOptions<UseVerificationTokenMutation, UseVerificationTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UseVerificationTokenMutation, UseVerificationTokenMutationVariables>(UseVerificationTokenDocument, options);
      }
export type UseVerificationTokenMutationHookResult = ReturnType<typeof useUseVerificationTokenMutation>;
export type UseVerificationTokenMutationResult = Apollo.MutationResult<UseVerificationTokenMutation>;
export type UseVerificationTokenMutationOptions = Apollo.BaseMutationOptions<UseVerificationTokenMutation, UseVerificationTokenMutationVariables>;
export const VerifyEmailByEmailDocument = gql`
    mutation VerifyEmailByEmail($email: String = "", $id: uuid = "") {
  update_users(
    where: {_or: [{email: {_eq: $email}}, {id: {_eq: $id}}]}
    _set: {emailVerified: "now()"}
  ) {
    returning {
      emailVerified
      id
      name
      email
    }
  }
}
    `;
export type VerifyEmailByEmailMutationFn = Apollo.MutationFunction<VerifyEmailByEmailMutation, VerifyEmailByEmailMutationVariables>;

/**
 * __useVerifyEmailByEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailByEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailByEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailByEmailMutation, { data, loading, error }] = useVerifyEmailByEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVerifyEmailByEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailByEmailMutation, VerifyEmailByEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyEmailByEmailMutation, VerifyEmailByEmailMutationVariables>(VerifyEmailByEmailDocument, options);
      }
export type VerifyEmailByEmailMutationHookResult = ReturnType<typeof useVerifyEmailByEmailMutation>;
export type VerifyEmailByEmailMutationResult = Apollo.MutationResult<VerifyEmailByEmailMutation>;
export type VerifyEmailByEmailMutationOptions = Apollo.BaseMutationOptions<VerifyEmailByEmailMutation, VerifyEmailByEmailMutationVariables>;
export const GetSessionAndUserDocument = gql`
    query GetSessionAndUser($sessionToken: String!) {
  sessions_by_pk(sessionToken: $sessionToken) {
    user {
      ...AdapterUser
    }
    expires
    id
  }
}
    ${AdapterUserFragmentDoc}`;

/**
 * __useGetSessionAndUserQuery__
 *
 * To run a query within a React component, call `useGetSessionAndUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionAndUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionAndUserQuery({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *   },
 * });
 */
export function useGetSessionAndUserQuery(baseOptions: Apollo.QueryHookOptions<GetSessionAndUserQuery, GetSessionAndUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSessionAndUserQuery, GetSessionAndUserQueryVariables>(GetSessionAndUserDocument, options);
      }
export function useGetSessionAndUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSessionAndUserQuery, GetSessionAndUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSessionAndUserQuery, GetSessionAndUserQueryVariables>(GetSessionAndUserDocument, options);
        }
export type GetSessionAndUserQueryHookResult = ReturnType<typeof useGetSessionAndUserQuery>;
export type GetSessionAndUserLazyQueryHookResult = ReturnType<typeof useGetSessionAndUserLazyQuery>;
export type GetSessionAndUserQueryResult = Apollo.QueryResult<GetSessionAndUserQuery, GetSessionAndUserQueryVariables>;
export const DeleteSessionDocument = gql`
    mutation DeleteSession($sessionToken: String!) {
  delete_sessions_by_pk(sessionToken: $sessionToken) {
    expires
    id
    userId
  }
}
    `;
export type DeleteSessionMutationFn = Apollo.MutationFunction<DeleteSessionMutation, DeleteSessionMutationVariables>;

/**
 * __useDeleteSessionMutation__
 *
 * To run a mutation, you first call `useDeleteSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSessionMutation, { data, loading, error }] = useDeleteSessionMutation({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *   },
 * });
 */
export function useDeleteSessionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSessionMutation, DeleteSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSessionMutation, DeleteSessionMutationVariables>(DeleteSessionDocument, options);
      }
export type DeleteSessionMutationHookResult = ReturnType<typeof useDeleteSessionMutation>;
export type DeleteSessionMutationResult = Apollo.MutationResult<DeleteSessionMutation>;
export type DeleteSessionMutationOptions = Apollo.BaseMutationOptions<DeleteSessionMutation, DeleteSessionMutationVariables>;
export const CreateSessionDocument = gql`
    mutation CreateSession($sessionToken: String!, $userId: uuid!, $expires: timestamptz!) {
  insert_sessions_one(
    object: {sessionToken: $sessionToken, expires: $expires, userId: $userId}
  ) {
    id
  }
}
    `;
export type CreateSessionMutationFn = Apollo.MutationFunction<CreateSessionMutation, CreateSessionMutationVariables>;

/**
 * __useCreateSessionMutation__
 *
 * To run a mutation, you first call `useCreateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionMutation, { data, loading, error }] = useCreateSessionMutation({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *      userId: // value for 'userId'
 *      expires: // value for 'expires'
 *   },
 * });
 */
export function useCreateSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSessionMutation, CreateSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSessionMutation, CreateSessionMutationVariables>(CreateSessionDocument, options);
      }
export type CreateSessionMutationHookResult = ReturnType<typeof useCreateSessionMutation>;
export type CreateSessionMutationResult = Apollo.MutationResult<CreateSessionMutation>;
export type CreateSessionMutationOptions = Apollo.BaseMutationOptions<CreateSessionMutation, CreateSessionMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $name: String) {
  insert_users_one(object: {email: $email, name: $name}) {
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetUserDocument = gql`
    query GetUser($id: uuid!) {
  users_by_pk(id: $id) {
    ...AdapterUser
  }
}
    ${AdapterUserFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUserByAccountDocument = gql`
    query GetUserByAccount($provider: String!, $providerAccountId: String!) {
  providers_by_pk(provider: $provider, providerAccountId: $providerAccountId) {
    user {
      ...AdapterUser
    }
  }
}
    ${AdapterUserFragmentDoc}`;

/**
 * __useGetUserByAccountQuery__
 *
 * To run a query within a React component, call `useGetUserByAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByAccountQuery({
 *   variables: {
 *      provider: // value for 'provider'
 *      providerAccountId: // value for 'providerAccountId'
 *   },
 * });
 */
export function useGetUserByAccountQuery(baseOptions: Apollo.QueryHookOptions<GetUserByAccountQuery, GetUserByAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByAccountQuery, GetUserByAccountQueryVariables>(GetUserByAccountDocument, options);
      }
export function useGetUserByAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByAccountQuery, GetUserByAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByAccountQuery, GetUserByAccountQueryVariables>(GetUserByAccountDocument, options);
        }
export type GetUserByAccountQueryHookResult = ReturnType<typeof useGetUserByAccountQuery>;
export type GetUserByAccountLazyQueryHookResult = ReturnType<typeof useGetUserByAccountLazyQuery>;
export type GetUserByAccountQueryResult = Apollo.QueryResult<GetUserByAccountQuery, GetUserByAccountQueryVariables>;
export const LinkAccountDocument = gql`
    mutation LinkAccount($provider: String!, $providerAccountId: String!, $userId: uuid!) {
  insert_providers_one(
    object: {provider: $provider, providerAccountId: $providerAccountId, userId: $userId}
    on_conflict: {constraint: providers_pkey, update_columns: providerAccountId}
  ) {
    userId
  }
}
    `;
export type LinkAccountMutationFn = Apollo.MutationFunction<LinkAccountMutation, LinkAccountMutationVariables>;

/**
 * __useLinkAccountMutation__
 *
 * To run a mutation, you first call `useLinkAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLinkAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [linkAccountMutation, { data, loading, error }] = useLinkAccountMutation({
 *   variables: {
 *      provider: // value for 'provider'
 *      providerAccountId: // value for 'providerAccountId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLinkAccountMutation(baseOptions?: Apollo.MutationHookOptions<LinkAccountMutation, LinkAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LinkAccountMutation, LinkAccountMutationVariables>(LinkAccountDocument, options);
      }
export type LinkAccountMutationHookResult = ReturnType<typeof useLinkAccountMutation>;
export type LinkAccountMutationResult = Apollo.MutationResult<LinkAccountMutation>;
export type LinkAccountMutationOptions = Apollo.BaseMutationOptions<LinkAccountMutation, LinkAccountMutationVariables>;
export const UpdateSessionDocument = gql`
    query UpdateSession($sessionToken: String!) {
  sessions_by_pk(sessionToken: $sessionToken) {
    expires
    id
    sessionToken
    userId
  }
}
    `;

/**
 * __useUpdateSessionQuery__
 *
 * To run a query within a React component, call `useUpdateSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpdateSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateSessionQuery({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *   },
 * });
 */
export function useUpdateSessionQuery(baseOptions: Apollo.QueryHookOptions<UpdateSessionQuery, UpdateSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UpdateSessionQuery, UpdateSessionQueryVariables>(UpdateSessionDocument, options);
      }
export function useUpdateSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UpdateSessionQuery, UpdateSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UpdateSessionQuery, UpdateSessionQueryVariables>(UpdateSessionDocument, options);
        }
export type UpdateSessionQueryHookResult = ReturnType<typeof useUpdateSessionQuery>;
export type UpdateSessionLazyQueryHookResult = ReturnType<typeof useUpdateSessionLazyQuery>;
export type UpdateSessionQueryResult = Apollo.QueryResult<UpdateSessionQuery, UpdateSessionQueryVariables>;
export const UserCountDocument = gql`
    subscription UserCount {
  users_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useUserCountSubscription__
 *
 * To run a query within a React component, call `useUserCountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserCountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCountSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUserCountSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UserCountSubscription, UserCountSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UserCountSubscription, UserCountSubscriptionVariables>(UserCountDocument, options);
      }
export type UserCountSubscriptionHookResult = ReturnType<typeof useUserCountSubscription>;
export type UserCountSubscriptionResult = Apollo.SubscriptionResult<UserCountSubscription>;