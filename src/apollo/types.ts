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
  date: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
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

/** columns and relationships of "cleaners" */
export type Cleaners = {
  __typename?: 'cleaners';
  /** An object relationship */
  admin: Users;
  adminId: Scalars['uuid'];
  /** An object relationship */
  cleaner: Users;
  cleanerId: Scalars['uuid'];
};

/** aggregated selection of "cleaners" */
export type Cleaners_Aggregate = {
  __typename?: 'cleaners_aggregate';
  aggregate?: Maybe<Cleaners_Aggregate_Fields>;
  nodes: Array<Cleaners>;
};

export type Cleaners_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cleaners_Aggregate_Bool_Exp_Count>;
};

export type Cleaners_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cleaners_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Cleaners_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cleaners" */
export type Cleaners_Aggregate_Fields = {
  __typename?: 'cleaners_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cleaners_Max_Fields>;
  min?: Maybe<Cleaners_Min_Fields>;
};


/** aggregate fields of "cleaners" */
export type Cleaners_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cleaners_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cleaners" */
export type Cleaners_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cleaners_Max_Order_By>;
  min?: InputMaybe<Cleaners_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cleaners" */
export type Cleaners_Arr_Rel_Insert_Input = {
  data: Array<Cleaners_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cleaners_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cleaners". All fields are combined with a logical 'AND'. */
export type Cleaners_Bool_Exp = {
  _and?: InputMaybe<Array<Cleaners_Bool_Exp>>;
  _not?: InputMaybe<Cleaners_Bool_Exp>;
  _or?: InputMaybe<Array<Cleaners_Bool_Exp>>;
  admin?: InputMaybe<Users_Bool_Exp>;
  adminId?: InputMaybe<Uuid_Comparison_Exp>;
  cleaner?: InputMaybe<Users_Bool_Exp>;
  cleanerId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cleaners" */
export enum Cleaners_Constraint {
  /** unique or primary key constraint on columns "adminId", "cleanerId" */
  CleanersPkey = 'cleaners_pkey'
}

/** input type for inserting data into table "cleaners" */
export type Cleaners_Insert_Input = {
  admin?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  adminId?: InputMaybe<Scalars['uuid']>;
  cleaner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  cleanerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Cleaners_Max_Fields = {
  __typename?: 'cleaners_max_fields';
  adminId?: Maybe<Scalars['uuid']>;
  cleanerId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "cleaners" */
export type Cleaners_Max_Order_By = {
  adminId?: InputMaybe<Order_By>;
  cleanerId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cleaners_Min_Fields = {
  __typename?: 'cleaners_min_fields';
  adminId?: Maybe<Scalars['uuid']>;
  cleanerId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "cleaners" */
export type Cleaners_Min_Order_By = {
  adminId?: InputMaybe<Order_By>;
  cleanerId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cleaners" */
export type Cleaners_Mutation_Response = {
  __typename?: 'cleaners_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cleaners>;
};

/** on_conflict condition type for table "cleaners" */
export type Cleaners_On_Conflict = {
  constraint: Cleaners_Constraint;
  update_columns?: Array<Cleaners_Update_Column>;
  where?: InputMaybe<Cleaners_Bool_Exp>;
};

/** Ordering options when selecting data from "cleaners". */
export type Cleaners_Order_By = {
  admin?: InputMaybe<Users_Order_By>;
  adminId?: InputMaybe<Order_By>;
  cleaner?: InputMaybe<Users_Order_By>;
  cleanerId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cleaners */
export type Cleaners_Pk_Columns_Input = {
  adminId: Scalars['uuid'];
  cleanerId: Scalars['uuid'];
};

/** select columns of table "cleaners" */
export enum Cleaners_Select_Column {
  /** column name */
  AdminId = 'adminId',
  /** column name */
  CleanerId = 'cleanerId'
}

/** input type for updating data in table "cleaners" */
export type Cleaners_Set_Input = {
  adminId?: InputMaybe<Scalars['uuid']>;
  cleanerId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "cleaners" */
export type Cleaners_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cleaners_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cleaners_Stream_Cursor_Value_Input = {
  adminId?: InputMaybe<Scalars['uuid']>;
  cleanerId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "cleaners" */
export enum Cleaners_Update_Column {
  /** column name */
  AdminId = 'adminId',
  /** column name */
  CleanerId = 'cleanerId'
}

export type Cleaners_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cleaners_Set_Input>;
  where: Cleaners_Bool_Exp;
};

/** columns and relationships of "cleans" */
export type Cleans = {
  __typename?: 'cleans';
  /** An object relationship */
  cleaner: Users;
  cleanerId: Scalars['uuid'];
  date: Scalars['String'];
  /** An object relationship */
  reservation: Reservations;
  reservationId: Scalars['String'];
  started?: Maybe<Scalars['date']>;
};

/** aggregated selection of "cleans" */
export type Cleans_Aggregate = {
  __typename?: 'cleans_aggregate';
  aggregate?: Maybe<Cleans_Aggregate_Fields>;
  nodes: Array<Cleans>;
};

export type Cleans_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cleans_Aggregate_Bool_Exp_Count>;
};

export type Cleans_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cleans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Cleans_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cleans" */
export type Cleans_Aggregate_Fields = {
  __typename?: 'cleans_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cleans_Max_Fields>;
  min?: Maybe<Cleans_Min_Fields>;
};


/** aggregate fields of "cleans" */
export type Cleans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cleans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cleans" */
export type Cleans_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cleans_Max_Order_By>;
  min?: InputMaybe<Cleans_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cleans" */
export type Cleans_Arr_Rel_Insert_Input = {
  data: Array<Cleans_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cleans_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cleans". All fields are combined with a logical 'AND'. */
export type Cleans_Bool_Exp = {
  _and?: InputMaybe<Array<Cleans_Bool_Exp>>;
  _not?: InputMaybe<Cleans_Bool_Exp>;
  _or?: InputMaybe<Array<Cleans_Bool_Exp>>;
  cleaner?: InputMaybe<Users_Bool_Exp>;
  cleanerId?: InputMaybe<Uuid_Comparison_Exp>;
  date?: InputMaybe<String_Comparison_Exp>;
  reservation?: InputMaybe<Reservations_Bool_Exp>;
  reservationId?: InputMaybe<String_Comparison_Exp>;
  started?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "cleans" */
export enum Cleans_Constraint {
  /** unique or primary key constraint on columns "reservationId" */
  CleansPkey = 'cleans_pkey'
}

/** input type for inserting data into table "cleans" */
export type Cleans_Insert_Input = {
  cleaner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  cleanerId?: InputMaybe<Scalars['uuid']>;
  date?: InputMaybe<Scalars['String']>;
  reservation?: InputMaybe<Reservations_Obj_Rel_Insert_Input>;
  reservationId?: InputMaybe<Scalars['String']>;
  started?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Cleans_Max_Fields = {
  __typename?: 'cleans_max_fields';
  cleanerId?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['String']>;
  reservationId?: Maybe<Scalars['String']>;
  started?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "cleans" */
export type Cleans_Max_Order_By = {
  cleanerId?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  reservationId?: InputMaybe<Order_By>;
  started?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cleans_Min_Fields = {
  __typename?: 'cleans_min_fields';
  cleanerId?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['String']>;
  reservationId?: Maybe<Scalars['String']>;
  started?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "cleans" */
export type Cleans_Min_Order_By = {
  cleanerId?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  reservationId?: InputMaybe<Order_By>;
  started?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cleans" */
export type Cleans_Mutation_Response = {
  __typename?: 'cleans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cleans>;
};

/** input type for inserting object relation for remote table "cleans" */
export type Cleans_Obj_Rel_Insert_Input = {
  data: Cleans_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cleans_On_Conflict>;
};

/** on_conflict condition type for table "cleans" */
export type Cleans_On_Conflict = {
  constraint: Cleans_Constraint;
  update_columns?: Array<Cleans_Update_Column>;
  where?: InputMaybe<Cleans_Bool_Exp>;
};

/** Ordering options when selecting data from "cleans". */
export type Cleans_Order_By = {
  cleaner?: InputMaybe<Users_Order_By>;
  cleanerId?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  reservation?: InputMaybe<Reservations_Order_By>;
  reservationId?: InputMaybe<Order_By>;
  started?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cleans */
export type Cleans_Pk_Columns_Input = {
  reservationId: Scalars['String'];
};

/** select columns of table "cleans" */
export enum Cleans_Select_Column {
  /** column name */
  CleanerId = 'cleanerId',
  /** column name */
  Date = 'date',
  /** column name */
  ReservationId = 'reservationId',
  /** column name */
  Started = 'started'
}

/** input type for updating data in table "cleans" */
export type Cleans_Set_Input = {
  cleanerId?: InputMaybe<Scalars['uuid']>;
  date?: InputMaybe<Scalars['String']>;
  reservationId?: InputMaybe<Scalars['String']>;
  started?: InputMaybe<Scalars['date']>;
};

/** Streaming cursor of the table "cleans" */
export type Cleans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cleans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cleans_Stream_Cursor_Value_Input = {
  cleanerId?: InputMaybe<Scalars['uuid']>;
  date?: InputMaybe<Scalars['String']>;
  reservationId?: InputMaybe<Scalars['String']>;
  started?: InputMaybe<Scalars['date']>;
};

/** update columns of table "cleans" */
export enum Cleans_Update_Column {
  /** column name */
  CleanerId = 'cleanerId',
  /** column name */
  Date = 'date',
  /** column name */
  ReservationId = 'reservationId',
  /** column name */
  Started = 'started'
}

export type Cleans_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cleans_Set_Input>;
  where: Cleans_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "locations" */
export type Locations = {
  __typename?: 'locations';
  airbnbIcs?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  reservations: Array<Reservations>;
  /** An aggregate relationship */
  reservations_aggregate: Reservations_Aggregate;
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregate relationship */
  roles_aggregate: Roles_Aggregate;
  wheelhouseApiKey?: Maybe<Scalars['String']>;
  wheelhouseId?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "locations" */
export type LocationsReservationsArgs = {
  distinct_on?: InputMaybe<Array<Reservations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservations_Order_By>>;
  where?: InputMaybe<Reservations_Bool_Exp>;
};


/** columns and relationships of "locations" */
export type LocationsReservations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservations_Order_By>>;
  where?: InputMaybe<Reservations_Bool_Exp>;
};


/** columns and relationships of "locations" */
export type LocationsRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


/** columns and relationships of "locations" */
export type LocationsRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** aggregated selection of "locations" */
export type Locations_Aggregate = {
  __typename?: 'locations_aggregate';
  aggregate?: Maybe<Locations_Aggregate_Fields>;
  nodes: Array<Locations>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_Fields = {
  __typename?: 'locations_aggregate_fields';
  avg?: Maybe<Locations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Locations_Max_Fields>;
  min?: Maybe<Locations_Min_Fields>;
  stddev?: Maybe<Locations_Stddev_Fields>;
  stddev_pop?: Maybe<Locations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Locations_Stddev_Samp_Fields>;
  sum?: Maybe<Locations_Sum_Fields>;
  var_pop?: Maybe<Locations_Var_Pop_Fields>;
  var_samp?: Maybe<Locations_Var_Samp_Fields>;
  variance?: Maybe<Locations_Variance_Fields>;
};


/** aggregate fields of "locations" */
export type Locations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Locations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Locations_Avg_Fields = {
  __typename?: 'locations_avg_fields';
  wheelhouseId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "locations". All fields are combined with a logical 'AND'. */
export type Locations_Bool_Exp = {
  _and?: InputMaybe<Array<Locations_Bool_Exp>>;
  _not?: InputMaybe<Locations_Bool_Exp>;
  _or?: InputMaybe<Array<Locations_Bool_Exp>>;
  airbnbIcs?: InputMaybe<String_Comparison_Exp>;
  enabled?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  reservations?: InputMaybe<Reservations_Bool_Exp>;
  reservations_aggregate?: InputMaybe<Reservations_Aggregate_Bool_Exp>;
  roles?: InputMaybe<Roles_Bool_Exp>;
  roles_aggregate?: InputMaybe<Roles_Aggregate_Bool_Exp>;
  wheelhouseApiKey?: InputMaybe<String_Comparison_Exp>;
  wheelhouseId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "locations" */
export enum Locations_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocationsPkey = 'locations_pkey'
}

/** input type for incrementing numeric columns in table "locations" */
export type Locations_Inc_Input = {
  wheelhouseId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "locations" */
export type Locations_Insert_Input = {
  airbnbIcs?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  reservations?: InputMaybe<Reservations_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<Roles_Arr_Rel_Insert_Input>;
  wheelhouseApiKey?: InputMaybe<Scalars['String']>;
  wheelhouseId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Locations_Max_Fields = {
  __typename?: 'locations_max_fields';
  airbnbIcs?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  wheelhouseApiKey?: Maybe<Scalars['String']>;
  wheelhouseId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Locations_Min_Fields = {
  __typename?: 'locations_min_fields';
  airbnbIcs?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  wheelhouseApiKey?: Maybe<Scalars['String']>;
  wheelhouseId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "locations" */
export type Locations_Mutation_Response = {
  __typename?: 'locations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Locations>;
};

/** input type for inserting object relation for remote table "locations" */
export type Locations_Obj_Rel_Insert_Input = {
  data: Locations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** on_conflict condition type for table "locations" */
export type Locations_On_Conflict = {
  constraint: Locations_Constraint;
  update_columns?: Array<Locations_Update_Column>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

/** Ordering options when selecting data from "locations". */
export type Locations_Order_By = {
  airbnbIcs?: InputMaybe<Order_By>;
  enabled?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  reservations_aggregate?: InputMaybe<Reservations_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<Roles_Aggregate_Order_By>;
  wheelhouseApiKey?: InputMaybe<Order_By>;
  wheelhouseId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: locations */
export type Locations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "locations" */
export enum Locations_Select_Column {
  /** column name */
  AirbnbIcs = 'airbnbIcs',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  WheelhouseApiKey = 'wheelhouseApiKey',
  /** column name */
  WheelhouseId = 'wheelhouseId'
}

/** input type for updating data in table "locations" */
export type Locations_Set_Input = {
  airbnbIcs?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  wheelhouseApiKey?: InputMaybe<Scalars['String']>;
  wheelhouseId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Locations_Stddev_Fields = {
  __typename?: 'locations_stddev_fields';
  wheelhouseId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Locations_Stddev_Pop_Fields = {
  __typename?: 'locations_stddev_pop_fields';
  wheelhouseId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Locations_Stddev_Samp_Fields = {
  __typename?: 'locations_stddev_samp_fields';
  wheelhouseId?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "locations" */
export type Locations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Locations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Locations_Stream_Cursor_Value_Input = {
  airbnbIcs?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  wheelhouseApiKey?: InputMaybe<Scalars['String']>;
  wheelhouseId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Locations_Sum_Fields = {
  __typename?: 'locations_sum_fields';
  wheelhouseId?: Maybe<Scalars['Int']>;
};

/** update columns of table "locations" */
export enum Locations_Update_Column {
  /** column name */
  AirbnbIcs = 'airbnbIcs',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  WheelhouseApiKey = 'wheelhouseApiKey',
  /** column name */
  WheelhouseId = 'wheelhouseId'
}

export type Locations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Locations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Locations_Var_Pop_Fields = {
  __typename?: 'locations_var_pop_fields';
  wheelhouseId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Locations_Var_Samp_Fields = {
  __typename?: 'locations_var_samp_fields';
  wheelhouseId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Locations_Variance_Fields = {
  __typename?: 'locations_variance_fields';
  wheelhouseId?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "cleaners" */
  delete_cleaners?: Maybe<Cleaners_Mutation_Response>;
  /** delete single row from the table: "cleaners" */
  delete_cleaners_by_pk?: Maybe<Cleaners>;
  /** delete data from the table: "cleans" */
  delete_cleans?: Maybe<Cleans_Mutation_Response>;
  /** delete single row from the table: "cleans" */
  delete_cleans_by_pk?: Maybe<Cleans>;
  /** delete data from the table: "locations" */
  delete_locations?: Maybe<Locations_Mutation_Response>;
  /** delete single row from the table: "locations" */
  delete_locations_by_pk?: Maybe<Locations>;
  /** delete data from the table: "notification" */
  delete_notification?: Maybe<Notification_Mutation_Response>;
  /** delete single row from the table: "notification" */
  delete_notification_by_pk?: Maybe<Notification>;
  /** delete data from the table: "notifications" */
  delete_notifications?: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "providers" */
  delete_providers?: Maybe<Providers_Mutation_Response>;
  /** delete single row from the table: "providers" */
  delete_providers_by_pk?: Maybe<Providers>;
  /** delete data from the table: "reservations" */
  delete_reservations?: Maybe<Reservations_Mutation_Response>;
  /** delete single row from the table: "reservations" */
  delete_reservations_by_pk?: Maybe<Reservations>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "source" */
  delete_source?: Maybe<Source_Mutation_Response>;
  /** delete single row from the table: "source" */
  delete_source_by_pk?: Maybe<Source>;
  /** delete data from the table: "tokens" */
  delete_tokens?: Maybe<Tokens_Mutation_Response>;
  /** delete single row from the table: "tokens" */
  delete_tokens_by_pk?: Maybe<Tokens>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "cleaners" */
  insert_cleaners?: Maybe<Cleaners_Mutation_Response>;
  /** insert a single row into the table: "cleaners" */
  insert_cleaners_one?: Maybe<Cleaners>;
  /** insert data into the table: "cleans" */
  insert_cleans?: Maybe<Cleans_Mutation_Response>;
  /** insert a single row into the table: "cleans" */
  insert_cleans_one?: Maybe<Cleans>;
  /** insert data into the table: "locations" */
  insert_locations?: Maybe<Locations_Mutation_Response>;
  /** insert a single row into the table: "locations" */
  insert_locations_one?: Maybe<Locations>;
  /** insert data into the table: "notification" */
  insert_notification?: Maybe<Notification_Mutation_Response>;
  /** insert a single row into the table: "notification" */
  insert_notification_one?: Maybe<Notification>;
  /** insert data into the table: "notifications" */
  insert_notifications?: Maybe<Notifications_Mutation_Response>;
  /** insert a single row into the table: "notifications" */
  insert_notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "providers" */
  insert_providers?: Maybe<Providers_Mutation_Response>;
  /** insert a single row into the table: "providers" */
  insert_providers_one?: Maybe<Providers>;
  /** insert data into the table: "reservations" */
  insert_reservations?: Maybe<Reservations_Mutation_Response>;
  /** insert a single row into the table: "reservations" */
  insert_reservations_one?: Maybe<Reservations>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "source" */
  insert_source?: Maybe<Source_Mutation_Response>;
  /** insert a single row into the table: "source" */
  insert_source_one?: Maybe<Source>;
  /** insert data into the table: "tokens" */
  insert_tokens?: Maybe<Tokens_Mutation_Response>;
  /** insert a single row into the table: "tokens" */
  insert_tokens_one?: Maybe<Tokens>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "cleaners" */
  update_cleaners?: Maybe<Cleaners_Mutation_Response>;
  /** update single row of the table: "cleaners" */
  update_cleaners_by_pk?: Maybe<Cleaners>;
  /** update multiples rows of table: "cleaners" */
  update_cleaners_many?: Maybe<Array<Maybe<Cleaners_Mutation_Response>>>;
  /** update data of the table: "cleans" */
  update_cleans?: Maybe<Cleans_Mutation_Response>;
  /** update single row of the table: "cleans" */
  update_cleans_by_pk?: Maybe<Cleans>;
  /** update multiples rows of table: "cleans" */
  update_cleans_many?: Maybe<Array<Maybe<Cleans_Mutation_Response>>>;
  /** update data of the table: "locations" */
  update_locations?: Maybe<Locations_Mutation_Response>;
  /** update single row of the table: "locations" */
  update_locations_by_pk?: Maybe<Locations>;
  /** update multiples rows of table: "locations" */
  update_locations_many?: Maybe<Array<Maybe<Locations_Mutation_Response>>>;
  /** update data of the table: "notification" */
  update_notification?: Maybe<Notification_Mutation_Response>;
  /** update single row of the table: "notification" */
  update_notification_by_pk?: Maybe<Notification>;
  /** update multiples rows of table: "notification" */
  update_notification_many?: Maybe<Array<Maybe<Notification_Mutation_Response>>>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update multiples rows of table: "notifications" */
  update_notifications_many?: Maybe<Array<Maybe<Notifications_Mutation_Response>>>;
  /** update data of the table: "providers" */
  update_providers?: Maybe<Providers_Mutation_Response>;
  /** update single row of the table: "providers" */
  update_providers_by_pk?: Maybe<Providers>;
  /** update multiples rows of table: "providers" */
  update_providers_many?: Maybe<Array<Maybe<Providers_Mutation_Response>>>;
  /** update data of the table: "reservations" */
  update_reservations?: Maybe<Reservations_Mutation_Response>;
  /** update single row of the table: "reservations" */
  update_reservations_by_pk?: Maybe<Reservations>;
  /** update multiples rows of table: "reservations" */
  update_reservations_many?: Maybe<Array<Maybe<Reservations_Mutation_Response>>>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "role" */
  update_role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  update_roles_many?: Maybe<Array<Maybe<Roles_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "source" */
  update_source?: Maybe<Source_Mutation_Response>;
  /** update single row of the table: "source" */
  update_source_by_pk?: Maybe<Source>;
  /** update multiples rows of table: "source" */
  update_source_many?: Maybe<Array<Maybe<Source_Mutation_Response>>>;
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
export type Mutation_RootDelete_CleanersArgs = {
  where: Cleaners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cleaners_By_PkArgs = {
  adminId: Scalars['uuid'];
  cleanerId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CleansArgs = {
  where: Cleans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cleans_By_PkArgs = {
  reservationId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_LocationsArgs = {
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Locations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationArgs = {
  where: Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notification_By_PkArgs = {
  notification: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  notification: Notification_Enum;
  reservationId: Scalars['String'];
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
export type Mutation_RootDelete_ReservationsArgs = {
  where: Reservations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reservations_By_PkArgs = {
  id: Scalars['String'];
  source: Source_Enum;
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  locationId: Scalars['uuid'];
  role: Role_Enum;
  userId: Scalars['uuid'];
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
export type Mutation_RootDelete_SourceArgs = {
  where: Source_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Source_By_PkArgs = {
  source: Scalars['String'];
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
export type Mutation_RootInsert_CleanersArgs = {
  objects: Array<Cleaners_Insert_Input>;
  on_conflict?: InputMaybe<Cleaners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cleaners_OneArgs = {
  object: Cleaners_Insert_Input;
  on_conflict?: InputMaybe<Cleaners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CleansArgs = {
  objects: Array<Cleans_Insert_Input>;
  on_conflict?: InputMaybe<Cleans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cleans_OneArgs = {
  object: Cleans_Insert_Input;
  on_conflict?: InputMaybe<Cleans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocationsArgs = {
  objects: Array<Locations_Insert_Input>;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Locations_OneArgs = {
  object: Locations_Insert_Input;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationArgs = {
  objects: Array<Notification_Insert_Input>;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notification_OneArgs = {
  object: Notification_Insert_Input;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationsArgs = {
  objects: Array<Notifications_Insert_Input>;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_OneArgs = {
  object: Notifications_Insert_Input;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
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
export type Mutation_RootInsert_ReservationsArgs = {
  objects: Array<Reservations_Insert_Input>;
  on_conflict?: InputMaybe<Reservations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reservations_OneArgs = {
  object: Reservations_Insert_Input;
  on_conflict?: InputMaybe<Reservations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
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
export type Mutation_RootInsert_SourceArgs = {
  objects: Array<Source_Insert_Input>;
  on_conflict?: InputMaybe<Source_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Source_OneArgs = {
  object: Source_Insert_Input;
  on_conflict?: InputMaybe<Source_On_Conflict>;
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
export type Mutation_RootUpdate_CleanersArgs = {
  _set?: InputMaybe<Cleaners_Set_Input>;
  where: Cleaners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cleaners_By_PkArgs = {
  _set?: InputMaybe<Cleaners_Set_Input>;
  pk_columns: Cleaners_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cleaners_ManyArgs = {
  updates: Array<Cleaners_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CleansArgs = {
  _set?: InputMaybe<Cleans_Set_Input>;
  where: Cleans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cleans_By_PkArgs = {
  _set?: InputMaybe<Cleans_Set_Input>;
  pk_columns: Cleans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cleans_ManyArgs = {
  updates: Array<Cleans_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LocationsArgs = {
  _inc?: InputMaybe<Locations_Inc_Input>;
  _set?: InputMaybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Locations_By_PkArgs = {
  _inc?: InputMaybe<Locations_Inc_Input>;
  _set?: InputMaybe<Locations_Set_Input>;
  pk_columns: Locations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Locations_ManyArgs = {
  updates: Array<Locations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationArgs = {
  _set?: InputMaybe<Notification_Set_Input>;
  where: Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notification_By_PkArgs = {
  _set?: InputMaybe<Notification_Set_Input>;
  pk_columns: Notification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notification_ManyArgs = {
  updates: Array<Notification_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_ManyArgs = {
  updates: Array<Notifications_Updates>;
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
export type Mutation_RootUpdate_ReservationsArgs = {
  _inc?: InputMaybe<Reservations_Inc_Input>;
  _set?: InputMaybe<Reservations_Set_Input>;
  where: Reservations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reservations_By_PkArgs = {
  _inc?: InputMaybe<Reservations_Inc_Input>;
  _set?: InputMaybe<Reservations_Set_Input>;
  pk_columns: Reservations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reservations_ManyArgs = {
  updates: Array<Reservations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_ManyArgs = {
  updates: Array<Roles_Updates>;
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
export type Mutation_RootUpdate_SourceArgs = {
  _set?: InputMaybe<Source_Set_Input>;
  where: Source_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Source_By_PkArgs = {
  _set?: InputMaybe<Source_Set_Input>;
  pk_columns: Source_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Source_ManyArgs = {
  updates: Array<Source_Updates>;
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

/** columns and relationships of "notification" */
export type Notification = {
  __typename?: 'notification';
  notification: Scalars['String'];
};

/** aggregated selection of "notification" */
export type Notification_Aggregate = {
  __typename?: 'notification_aggregate';
  aggregate?: Maybe<Notification_Aggregate_Fields>;
  nodes: Array<Notification>;
};

/** aggregate fields of "notification" */
export type Notification_Aggregate_Fields = {
  __typename?: 'notification_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Notification_Max_Fields>;
  min?: Maybe<Notification_Min_Fields>;
};


/** aggregate fields of "notification" */
export type Notification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export type Notification_Bool_Exp = {
  _and?: InputMaybe<Array<Notification_Bool_Exp>>;
  _not?: InputMaybe<Notification_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Bool_Exp>>;
  notification?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notification" */
export enum Notification_Constraint {
  /** unique or primary key constraint on columns "notification" */
  NotificationPkey = 'notification_pkey'
}

export enum Notification_Enum {
  Cancelled = 'Cancelled',
  Checkout = 'Checkout',
  CleanCancelled = 'Clean_Cancelled',
  CleanScheduled = 'Clean_Scheduled',
  CleanToday = 'Clean_Today',
  DetailsSummer = 'Details_Summer',
  DetailsWinter = 'Details_Winter',
  LeaveReview = 'Leave_Review',
  Manual = 'Manual',
  NewBookingDetails = 'New_Booking_Details',
  NewBookingScheduleClean = 'New_Booking_Schedule_Clean',
  NotStartedWarningCleaner = 'Not_Started_Warning_Cleaner',
  NotStartedWarningHost = 'Not_Started_Warning_Host',
  ReviewClean = 'Review_Clean',
  ReviewDanger = 'Review_Danger',
  ReviewWarning = 'Review_Warning',
  ScheduleDanger = 'Schedule_Danger',
  ScheduleWarn = 'Schedule_Warn',
  Welcome = 'Welcome'
}

/** Boolean expression to compare columns of type "notification_enum". All fields are combined with logical 'AND'. */
export type Notification_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Notification_Enum>;
  _in?: InputMaybe<Array<Notification_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Notification_Enum>;
  _nin?: InputMaybe<Array<Notification_Enum>>;
};

/** input type for inserting data into table "notification" */
export type Notification_Insert_Input = {
  notification?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Notification_Max_Fields = {
  __typename?: 'notification_max_fields';
  notification?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Notification_Min_Fields = {
  __typename?: 'notification_min_fields';
  notification?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "notification" */
export type Notification_Mutation_Response = {
  __typename?: 'notification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification>;
};

/** on_conflict condition type for table "notification" */
export type Notification_On_Conflict = {
  constraint: Notification_Constraint;
  update_columns?: Array<Notification_Update_Column>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** Ordering options when selecting data from "notification". */
export type Notification_Order_By = {
  notification?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notification */
export type Notification_Pk_Columns_Input = {
  notification: Scalars['String'];
};

/** select columns of table "notification" */
export enum Notification_Select_Column {
  /** column name */
  Notification = 'notification'
}

/** input type for updating data in table "notification" */
export type Notification_Set_Input = {
  notification?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "notification" */
export type Notification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notification_Stream_Cursor_Value_Input = {
  notification?: InputMaybe<Scalars['String']>;
};

/** update columns of table "notification" */
export enum Notification_Update_Column {
  /** column name */
  Notification = 'notification'
}

export type Notification_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notification_Set_Input>;
  where: Notification_Bool_Exp;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  notification: Notification_Enum;
  /** An object relationship */
  reservation: Reservations;
  reservationId: Scalars['String'];
};

/** aggregated selection of "notifications" */
export type Notifications_Aggregate = {
  __typename?: 'notifications_aggregate';
  aggregate?: Maybe<Notifications_Aggregate_Fields>;
  nodes: Array<Notifications>;
};

export type Notifications_Aggregate_Bool_Exp = {
  count?: InputMaybe<Notifications_Aggregate_Bool_Exp_Count>;
};

export type Notifications_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Notifications_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "notifications" */
export type Notifications_Aggregate_Fields = {
  __typename?: 'notifications_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Notifications_Max_Fields>;
  min?: Maybe<Notifications_Min_Fields>;
};


/** aggregate fields of "notifications" */
export type Notifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notifications" */
export type Notifications_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notifications_Max_Order_By>;
  min?: InputMaybe<Notifications_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notifications" */
export type Notifications_Arr_Rel_Insert_Input = {
  data: Array<Notifications_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  notification?: InputMaybe<Notification_Enum_Comparison_Exp>;
  reservation?: InputMaybe<Reservations_Bool_Exp>;
  reservationId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notifications" */
export enum Notifications_Constraint {
  /** unique or primary key constraint on columns "notification", "reservationId" */
  NotificationsPkey = 'notifications_pkey'
}

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  notification?: InputMaybe<Notification_Enum>;
  reservation?: InputMaybe<Reservations_Obj_Rel_Insert_Input>;
  reservationId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  __typename?: 'notifications_max_fields';
  reservationId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "notifications" */
export type Notifications_Max_Order_By = {
  reservationId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  __typename?: 'notifications_min_fields';
  reservationId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "notifications" */
export type Notifications_Min_Order_By = {
  reservationId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on_conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  notification?: InputMaybe<Order_By>;
  reservation?: InputMaybe<Reservations_Order_By>;
  reservationId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notifications */
export type Notifications_Pk_Columns_Input = {
  notification: Notification_Enum;
  reservationId: Scalars['String'];
};

/** select columns of table "notifications" */
export enum Notifications_Select_Column {
  /** column name */
  Notification = 'notification',
  /** column name */
  ReservationId = 'reservationId'
}

/** input type for updating data in table "notifications" */
export type Notifications_Set_Input = {
  notification?: InputMaybe<Notification_Enum>;
  reservationId?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "notifications" */
export type Notifications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notifications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notifications_Stream_Cursor_Value_Input = {
  notification?: InputMaybe<Notification_Enum>;
  reservationId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "notifications" */
export enum Notifications_Update_Column {
  /** column name */
  Notification = 'notification',
  /** column name */
  ReservationId = 'reservationId'
}

export type Notifications_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
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
  /** An array relationship */
  cleaners: Array<Cleaners>;
  /** An aggregate relationship */
  cleaners_aggregate: Cleaners_Aggregate;
  /** fetch data from the table: "cleaners" using primary key columns */
  cleaners_by_pk?: Maybe<Cleaners>;
  /** An array relationship */
  cleans: Array<Cleans>;
  /** An aggregate relationship */
  cleans_aggregate: Cleans_Aggregate;
  /** fetch data from the table: "cleans" using primary key columns */
  cleans_by_pk?: Maybe<Cleans>;
  /** fetch data from the table: "locations" */
  locations: Array<Locations>;
  /** fetch aggregated fields from the table: "locations" */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** An array relationship */
  reservations: Array<Reservations>;
  /** An aggregate relationship */
  reservations_aggregate: Reservations_Aggregate;
  /** fetch data from the table: "reservations" using primary key columns */
  reservations_by_pk?: Maybe<Reservations>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregate relationship */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "source" */
  source: Array<Source>;
  /** fetch aggregated fields from the table: "source" */
  source_aggregate: Source_Aggregate;
  /** fetch data from the table: "source" using primary key columns */
  source_by_pk?: Maybe<Source>;
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


export type Query_RootCleanersArgs = {
  distinct_on?: InputMaybe<Array<Cleaners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleaners_Order_By>>;
  where?: InputMaybe<Cleaners_Bool_Exp>;
};


export type Query_RootCleaners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cleaners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleaners_Order_By>>;
  where?: InputMaybe<Cleaners_Bool_Exp>;
};


export type Query_RootCleaners_By_PkArgs = {
  adminId: Scalars['uuid'];
  cleanerId: Scalars['uuid'];
};


export type Query_RootCleansArgs = {
  distinct_on?: InputMaybe<Array<Cleans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleans_Order_By>>;
  where?: InputMaybe<Cleans_Bool_Exp>;
};


export type Query_RootCleans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cleans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleans_Order_By>>;
  where?: InputMaybe<Cleans_Bool_Exp>;
};


export type Query_RootCleans_By_PkArgs = {
  reservationId: Scalars['String'];
};


export type Query_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Query_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Query_RootLocations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


export type Query_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


export type Query_RootNotification_By_PkArgs = {
  notification: Scalars['String'];
};


export type Query_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_By_PkArgs = {
  notification: Notification_Enum;
  reservationId: Scalars['String'];
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


export type Query_RootReservationsArgs = {
  distinct_on?: InputMaybe<Array<Reservations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservations_Order_By>>;
  where?: InputMaybe<Reservations_Bool_Exp>;
};


export type Query_RootReservations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservations_Order_By>>;
  where?: InputMaybe<Reservations_Bool_Exp>;
};


export type Query_RootReservations_By_PkArgs = {
  id: Scalars['String'];
  source: Source_Enum;
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  locationId: Scalars['uuid'];
  role: Role_Enum;
  userId: Scalars['uuid'];
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


export type Query_RootSourceArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Query_RootSource_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Query_RootSource_By_PkArgs = {
  source: Scalars['String'];
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

/** columns and relationships of "reservations" */
export type Reservations = {
  __typename?: 'reservations';
  airbnbIdentifier?: Maybe<Scalars['String']>;
  cancelled: Scalars['Boolean'];
  checkin: Scalars['String'];
  checkinTime: Scalars['Int'];
  checkout: Scalars['String'];
  checkoutOnTime?: Maybe<Scalars['Boolean']>;
  checkoutTime: Scalars['Int'];
  /** An object relationship */
  clean?: Maybe<Cleans>;
  cleanDetails?: Maybe<Scalars['String']>;
  cleanScore?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  /** An object relationship */
  guest?: Maybe<Users>;
  guestId?: Maybe<Scalars['uuid']>;
  guestName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** An object relationship */
  location: Locations;
  locationId: Scalars['uuid'];
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  phone?: Maybe<Scalars['String']>;
  source: Source_Enum;
};


/** columns and relationships of "reservations" */
export type ReservationsNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


/** columns and relationships of "reservations" */
export type ReservationsNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

/** aggregated selection of "reservations" */
export type Reservations_Aggregate = {
  __typename?: 'reservations_aggregate';
  aggregate?: Maybe<Reservations_Aggregate_Fields>;
  nodes: Array<Reservations>;
};

export type Reservations_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Reservations_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Reservations_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Reservations_Aggregate_Bool_Exp_Count>;
};

export type Reservations_Aggregate_Bool_Exp_Bool_And = {
  arguments: Reservations_Select_Column_Reservations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Reservations_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Reservations_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Reservations_Select_Column_Reservations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Reservations_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Reservations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Reservations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Reservations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "reservations" */
export type Reservations_Aggregate_Fields = {
  __typename?: 'reservations_aggregate_fields';
  avg?: Maybe<Reservations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Reservations_Max_Fields>;
  min?: Maybe<Reservations_Min_Fields>;
  stddev?: Maybe<Reservations_Stddev_Fields>;
  stddev_pop?: Maybe<Reservations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reservations_Stddev_Samp_Fields>;
  sum?: Maybe<Reservations_Sum_Fields>;
  var_pop?: Maybe<Reservations_Var_Pop_Fields>;
  var_samp?: Maybe<Reservations_Var_Samp_Fields>;
  variance?: Maybe<Reservations_Variance_Fields>;
};


/** aggregate fields of "reservations" */
export type Reservations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reservations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reservations" */
export type Reservations_Aggregate_Order_By = {
  avg?: InputMaybe<Reservations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reservations_Max_Order_By>;
  min?: InputMaybe<Reservations_Min_Order_By>;
  stddev?: InputMaybe<Reservations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Reservations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Reservations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Reservations_Sum_Order_By>;
  var_pop?: InputMaybe<Reservations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Reservations_Var_Samp_Order_By>;
  variance?: InputMaybe<Reservations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reservations" */
export type Reservations_Arr_Rel_Insert_Input = {
  data: Array<Reservations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Reservations_On_Conflict>;
};

/** aggregate avg on columns */
export type Reservations_Avg_Fields = {
  __typename?: 'reservations_avg_fields';
  checkinTime?: Maybe<Scalars['Float']>;
  checkoutTime?: Maybe<Scalars['Float']>;
  cleanScore?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reservations" */
export type Reservations_Avg_Order_By = {
  checkinTime?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reservations". All fields are combined with a logical 'AND'. */
export type Reservations_Bool_Exp = {
  _and?: InputMaybe<Array<Reservations_Bool_Exp>>;
  _not?: InputMaybe<Reservations_Bool_Exp>;
  _or?: InputMaybe<Array<Reservations_Bool_Exp>>;
  airbnbIdentifier?: InputMaybe<String_Comparison_Exp>;
  cancelled?: InputMaybe<Boolean_Comparison_Exp>;
  checkin?: InputMaybe<String_Comparison_Exp>;
  checkinTime?: InputMaybe<Int_Comparison_Exp>;
  checkout?: InputMaybe<String_Comparison_Exp>;
  checkoutOnTime?: InputMaybe<Boolean_Comparison_Exp>;
  checkoutTime?: InputMaybe<Int_Comparison_Exp>;
  clean?: InputMaybe<Cleans_Bool_Exp>;
  cleanDetails?: InputMaybe<String_Comparison_Exp>;
  cleanScore?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  guest?: InputMaybe<Users_Bool_Exp>;
  guestId?: InputMaybe<Uuid_Comparison_Exp>;
  guestName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<Locations_Bool_Exp>;
  locationId?: InputMaybe<Uuid_Comparison_Exp>;
  notifications?: InputMaybe<Notifications_Bool_Exp>;
  notifications_aggregate?: InputMaybe<Notifications_Aggregate_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  source?: InputMaybe<Source_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "reservations" */
export enum Reservations_Constraint {
  /** unique or primary key constraint on columns "airbnbIdentifier" */
  ReservationsAirbnbIdentifierKey = 'reservations_airbnbIdentifier_key',
  /** unique or primary key constraint on columns "id" */
  ReservationsIdKey = 'reservations_id_key',
  /** unique or primary key constraint on columns "id", "source" */
  ReservationsPkey = 'reservations_pkey'
}

/** input type for incrementing numeric columns in table "reservations" */
export type Reservations_Inc_Input = {
  checkinTime?: InputMaybe<Scalars['Int']>;
  checkoutTime?: InputMaybe<Scalars['Int']>;
  cleanScore?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "reservations" */
export type Reservations_Insert_Input = {
  airbnbIdentifier?: InputMaybe<Scalars['String']>;
  cancelled?: InputMaybe<Scalars['Boolean']>;
  checkin?: InputMaybe<Scalars['String']>;
  checkinTime?: InputMaybe<Scalars['Int']>;
  checkout?: InputMaybe<Scalars['String']>;
  checkoutOnTime?: InputMaybe<Scalars['Boolean']>;
  checkoutTime?: InputMaybe<Scalars['Int']>;
  clean?: InputMaybe<Cleans_Obj_Rel_Insert_Input>;
  cleanDetails?: InputMaybe<Scalars['String']>;
  cleanScore?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  guest?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  guestId?: InputMaybe<Scalars['uuid']>;
  guestName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Locations_Obj_Rel_Insert_Input>;
  locationId?: InputMaybe<Scalars['uuid']>;
  notifications?: InputMaybe<Notifications_Arr_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Source_Enum>;
};

/** aggregate max on columns */
export type Reservations_Max_Fields = {
  __typename?: 'reservations_max_fields';
  airbnbIdentifier?: Maybe<Scalars['String']>;
  checkin?: Maybe<Scalars['String']>;
  checkinTime?: Maybe<Scalars['Int']>;
  checkout?: Maybe<Scalars['String']>;
  checkoutTime?: Maybe<Scalars['Int']>;
  cleanDetails?: Maybe<Scalars['String']>;
  cleanScore?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  guestId?: Maybe<Scalars['uuid']>;
  guestName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['uuid']>;
  phone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reservations" */
export type Reservations_Max_Order_By = {
  airbnbIdentifier?: InputMaybe<Order_By>;
  checkin?: InputMaybe<Order_By>;
  checkinTime?: InputMaybe<Order_By>;
  checkout?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  cleanDetails?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  guestId?: InputMaybe<Order_By>;
  guestName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locationId?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reservations_Min_Fields = {
  __typename?: 'reservations_min_fields';
  airbnbIdentifier?: Maybe<Scalars['String']>;
  checkin?: Maybe<Scalars['String']>;
  checkinTime?: Maybe<Scalars['Int']>;
  checkout?: Maybe<Scalars['String']>;
  checkoutTime?: Maybe<Scalars['Int']>;
  cleanDetails?: Maybe<Scalars['String']>;
  cleanScore?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  guestId?: Maybe<Scalars['uuid']>;
  guestName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['uuid']>;
  phone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reservations" */
export type Reservations_Min_Order_By = {
  airbnbIdentifier?: InputMaybe<Order_By>;
  checkin?: InputMaybe<Order_By>;
  checkinTime?: InputMaybe<Order_By>;
  checkout?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  cleanDetails?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  guestId?: InputMaybe<Order_By>;
  guestName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locationId?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "reservations" */
export type Reservations_Mutation_Response = {
  __typename?: 'reservations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Reservations>;
};

/** input type for inserting object relation for remote table "reservations" */
export type Reservations_Obj_Rel_Insert_Input = {
  data: Reservations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Reservations_On_Conflict>;
};

/** on_conflict condition type for table "reservations" */
export type Reservations_On_Conflict = {
  constraint: Reservations_Constraint;
  update_columns?: Array<Reservations_Update_Column>;
  where?: InputMaybe<Reservations_Bool_Exp>;
};

/** Ordering options when selecting data from "reservations". */
export type Reservations_Order_By = {
  airbnbIdentifier?: InputMaybe<Order_By>;
  cancelled?: InputMaybe<Order_By>;
  checkin?: InputMaybe<Order_By>;
  checkinTime?: InputMaybe<Order_By>;
  checkout?: InputMaybe<Order_By>;
  checkoutOnTime?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  clean?: InputMaybe<Cleans_Order_By>;
  cleanDetails?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  guest?: InputMaybe<Users_Order_By>;
  guestId?: InputMaybe<Order_By>;
  guestName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Locations_Order_By>;
  locationId?: InputMaybe<Order_By>;
  notifications_aggregate?: InputMaybe<Notifications_Aggregate_Order_By>;
  phone?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reservations */
export type Reservations_Pk_Columns_Input = {
  id: Scalars['String'];
  source: Source_Enum;
};

/** select columns of table "reservations" */
export enum Reservations_Select_Column {
  /** column name */
  AirbnbIdentifier = 'airbnbIdentifier',
  /** column name */
  Cancelled = 'cancelled',
  /** column name */
  Checkin = 'checkin',
  /** column name */
  CheckinTime = 'checkinTime',
  /** column name */
  Checkout = 'checkout',
  /** column name */
  CheckoutOnTime = 'checkoutOnTime',
  /** column name */
  CheckoutTime = 'checkoutTime',
  /** column name */
  CleanDetails = 'cleanDetails',
  /** column name */
  CleanScore = 'cleanScore',
  /** column name */
  Description = 'description',
  /** column name */
  GuestId = 'guestId',
  /** column name */
  GuestName = 'guestName',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'locationId',
  /** column name */
  Phone = 'phone',
  /** column name */
  Source = 'source'
}

/** select "reservations_aggregate_bool_exp_bool_and_arguments_columns" columns of table "reservations" */
export enum Reservations_Select_Column_Reservations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Cancelled = 'cancelled',
  /** column name */
  CheckoutOnTime = 'checkoutOnTime'
}

/** select "reservations_aggregate_bool_exp_bool_or_arguments_columns" columns of table "reservations" */
export enum Reservations_Select_Column_Reservations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Cancelled = 'cancelled',
  /** column name */
  CheckoutOnTime = 'checkoutOnTime'
}

/** input type for updating data in table "reservations" */
export type Reservations_Set_Input = {
  airbnbIdentifier?: InputMaybe<Scalars['String']>;
  cancelled?: InputMaybe<Scalars['Boolean']>;
  checkin?: InputMaybe<Scalars['String']>;
  checkinTime?: InputMaybe<Scalars['Int']>;
  checkout?: InputMaybe<Scalars['String']>;
  checkoutOnTime?: InputMaybe<Scalars['Boolean']>;
  checkoutTime?: InputMaybe<Scalars['Int']>;
  cleanDetails?: InputMaybe<Scalars['String']>;
  cleanScore?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  guestId?: InputMaybe<Scalars['uuid']>;
  guestName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['uuid']>;
  phone?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Source_Enum>;
};

/** aggregate stddev on columns */
export type Reservations_Stddev_Fields = {
  __typename?: 'reservations_stddev_fields';
  checkinTime?: Maybe<Scalars['Float']>;
  checkoutTime?: Maybe<Scalars['Float']>;
  cleanScore?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reservations" */
export type Reservations_Stddev_Order_By = {
  checkinTime?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reservations_Stddev_Pop_Fields = {
  __typename?: 'reservations_stddev_pop_fields';
  checkinTime?: Maybe<Scalars['Float']>;
  checkoutTime?: Maybe<Scalars['Float']>;
  cleanScore?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reservations" */
export type Reservations_Stddev_Pop_Order_By = {
  checkinTime?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reservations_Stddev_Samp_Fields = {
  __typename?: 'reservations_stddev_samp_fields';
  checkinTime?: Maybe<Scalars['Float']>;
  checkoutTime?: Maybe<Scalars['Float']>;
  cleanScore?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reservations" */
export type Reservations_Stddev_Samp_Order_By = {
  checkinTime?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "reservations" */
export type Reservations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reservations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reservations_Stream_Cursor_Value_Input = {
  airbnbIdentifier?: InputMaybe<Scalars['String']>;
  cancelled?: InputMaybe<Scalars['Boolean']>;
  checkin?: InputMaybe<Scalars['String']>;
  checkinTime?: InputMaybe<Scalars['Int']>;
  checkout?: InputMaybe<Scalars['String']>;
  checkoutOnTime?: InputMaybe<Scalars['Boolean']>;
  checkoutTime?: InputMaybe<Scalars['Int']>;
  cleanDetails?: InputMaybe<Scalars['String']>;
  cleanScore?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  guestId?: InputMaybe<Scalars['uuid']>;
  guestName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['uuid']>;
  phone?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Source_Enum>;
};

/** aggregate sum on columns */
export type Reservations_Sum_Fields = {
  __typename?: 'reservations_sum_fields';
  checkinTime?: Maybe<Scalars['Int']>;
  checkoutTime?: Maybe<Scalars['Int']>;
  cleanScore?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "reservations" */
export type Reservations_Sum_Order_By = {
  checkinTime?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
};

/** update columns of table "reservations" */
export enum Reservations_Update_Column {
  /** column name */
  AirbnbIdentifier = 'airbnbIdentifier',
  /** column name */
  Cancelled = 'cancelled',
  /** column name */
  Checkin = 'checkin',
  /** column name */
  CheckinTime = 'checkinTime',
  /** column name */
  Checkout = 'checkout',
  /** column name */
  CheckoutOnTime = 'checkoutOnTime',
  /** column name */
  CheckoutTime = 'checkoutTime',
  /** column name */
  CleanDetails = 'cleanDetails',
  /** column name */
  CleanScore = 'cleanScore',
  /** column name */
  Description = 'description',
  /** column name */
  GuestId = 'guestId',
  /** column name */
  GuestName = 'guestName',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'locationId',
  /** column name */
  Phone = 'phone',
  /** column name */
  Source = 'source'
}

export type Reservations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Reservations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reservations_Set_Input>;
  where: Reservations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Reservations_Var_Pop_Fields = {
  __typename?: 'reservations_var_pop_fields';
  checkinTime?: Maybe<Scalars['Float']>;
  checkoutTime?: Maybe<Scalars['Float']>;
  cleanScore?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reservations" */
export type Reservations_Var_Pop_Order_By = {
  checkinTime?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reservations_Var_Samp_Fields = {
  __typename?: 'reservations_var_samp_fields';
  checkinTime?: Maybe<Scalars['Float']>;
  checkoutTime?: Maybe<Scalars['Float']>;
  cleanScore?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reservations" */
export type Reservations_Var_Samp_Order_By = {
  checkinTime?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Reservations_Variance_Fields = {
  __typename?: 'reservations_variance_fields';
  checkinTime?: Maybe<Scalars['Float']>;
  checkoutTime?: Maybe<Scalars['Float']>;
  cleanScore?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reservations" */
export type Reservations_Variance_Order_By = {
  checkinTime?: InputMaybe<Order_By>;
  checkoutTime?: InputMaybe<Order_By>;
  cleanScore?: InputMaybe<Order_By>;
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  role: Scalars['String'];
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolePkey = 'role_pkey'
}

export enum Role_Enum {
  Admin = 'Admin',
  Cleaner = 'Cleaner',
  CleanerAdmin = 'Cleaner_Admin',
  Friend = 'Friend',
  Guest = 'Guest',
  Host = 'Host'
}

/** Boolean expression to compare columns of type "role_enum". All fields are combined with logical 'AND'. */
export type Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Role_Enum>;
  _in?: InputMaybe<Array<Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Role_Enum>;
  _nin?: InputMaybe<Array<Role_Enum>>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Role = 'role'
}

export type Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  /** An object relationship */
  location: Locations;
  locationId: Scalars['uuid'];
  role: Role_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

export type Roles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Roles_Aggregate_Bool_Exp_Count>;
};

export type Roles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Roles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Roles_Max_Order_By>;
  min?: InputMaybe<Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  location?: InputMaybe<Locations_Bool_Exp>;
  locationId?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Role_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint on columns "userId", "role", "locationId" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  location?: InputMaybe<Locations_Obj_Rel_Insert_Input>;
  locationId?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Role_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  locationId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  locationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  locationId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  locationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  location?: InputMaybe<Locations_Order_By>;
  locationId?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  locationId: Scalars['uuid'];
  role: Role_Enum;
  userId: Scalars['uuid'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  LocationId = 'locationId',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  locationId?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Role_Enum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "roles" */
export type Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Roles_Stream_Cursor_Value_Input = {
  locationId?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Role_Enum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  LocationId = 'locationId',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
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

/** columns and relationships of "source" */
export type Source = {
  __typename?: 'source';
  source: Scalars['String'];
};

/** aggregated selection of "source" */
export type Source_Aggregate = {
  __typename?: 'source_aggregate';
  aggregate?: Maybe<Source_Aggregate_Fields>;
  nodes: Array<Source>;
};

/** aggregate fields of "source" */
export type Source_Aggregate_Fields = {
  __typename?: 'source_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Source_Max_Fields>;
  min?: Maybe<Source_Min_Fields>;
};


/** aggregate fields of "source" */
export type Source_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Source_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "source". All fields are combined with a logical 'AND'. */
export type Source_Bool_Exp = {
  _and?: InputMaybe<Array<Source_Bool_Exp>>;
  _not?: InputMaybe<Source_Bool_Exp>;
  _or?: InputMaybe<Array<Source_Bool_Exp>>;
  source?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "source" */
export enum Source_Constraint {
  /** unique or primary key constraint on columns "source" */
  SourcePkey = 'source_pkey'
}

export enum Source_Enum {
  AirBnb = 'AirBNB',
  Blocked = 'Blocked',
  Friend = 'Friend',
  Host4 = 'Host4',
  Ignore = 'Ignore',
  Maintenance = 'Maintenance',
  Owner = 'Owner',
  Unknown = 'Unknown'
}

/** Boolean expression to compare columns of type "source_enum". All fields are combined with logical 'AND'. */
export type Source_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Source_Enum>;
  _in?: InputMaybe<Array<Source_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Source_Enum>;
  _nin?: InputMaybe<Array<Source_Enum>>;
};

/** input type for inserting data into table "source" */
export type Source_Insert_Input = {
  source?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Source_Max_Fields = {
  __typename?: 'source_max_fields';
  source?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Source_Min_Fields = {
  __typename?: 'source_min_fields';
  source?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "source" */
export type Source_Mutation_Response = {
  __typename?: 'source_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Source>;
};

/** on_conflict condition type for table "source" */
export type Source_On_Conflict = {
  constraint: Source_Constraint;
  update_columns?: Array<Source_Update_Column>;
  where?: InputMaybe<Source_Bool_Exp>;
};

/** Ordering options when selecting data from "source". */
export type Source_Order_By = {
  source?: InputMaybe<Order_By>;
};

/** primary key columns input for table: source */
export type Source_Pk_Columns_Input = {
  source: Scalars['String'];
};

/** select columns of table "source" */
export enum Source_Select_Column {
  /** column name */
  Source = 'source'
}

/** input type for updating data in table "source" */
export type Source_Set_Input = {
  source?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "source" */
export type Source_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Source_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Source_Stream_Cursor_Value_Input = {
  source?: InputMaybe<Scalars['String']>;
};

/** update columns of table "source" */
export enum Source_Update_Column {
  /** column name */
  Source = 'source'
}

export type Source_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Source_Set_Input>;
  where: Source_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  cleaners: Array<Cleaners>;
  /** An aggregate relationship */
  cleaners_aggregate: Cleaners_Aggregate;
  /** fetch data from the table: "cleaners" using primary key columns */
  cleaners_by_pk?: Maybe<Cleaners>;
  /** fetch data from the table in a streaming manner: "cleaners" */
  cleaners_stream: Array<Cleaners>;
  /** An array relationship */
  cleans: Array<Cleans>;
  /** An aggregate relationship */
  cleans_aggregate: Cleans_Aggregate;
  /** fetch data from the table: "cleans" using primary key columns */
  cleans_by_pk?: Maybe<Cleans>;
  /** fetch data from the table in a streaming manner: "cleans" */
  cleans_stream: Array<Cleans>;
  /** fetch data from the table: "locations" */
  locations: Array<Locations>;
  /** fetch aggregated fields from the table: "locations" */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table in a streaming manner: "locations" */
  locations_stream: Array<Locations>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table in a streaming manner: "notification" */
  notification_stream: Array<Notification>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table in a streaming manner: "notifications" */
  notifications_stream: Array<Notifications>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** fetch data from the table in a streaming manner: "providers" */
  providers_stream: Array<Providers>;
  /** An array relationship */
  reservations: Array<Reservations>;
  /** An aggregate relationship */
  reservations_aggregate: Reservations_Aggregate;
  /** fetch data from the table: "reservations" using primary key columns */
  reservations_by_pk?: Maybe<Reservations>;
  /** fetch data from the table in a streaming manner: "reservations" */
  reservations_stream: Array<Reservations>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "role" */
  role_stream: Array<Role>;
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregate relationship */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table in a streaming manner: "roles" */
  roles_stream: Array<Roles>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "source" */
  source: Array<Source>;
  /** fetch aggregated fields from the table: "source" */
  source_aggregate: Source_Aggregate;
  /** fetch data from the table: "source" using primary key columns */
  source_by_pk?: Maybe<Source>;
  /** fetch data from the table in a streaming manner: "source" */
  source_stream: Array<Source>;
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


export type Subscription_RootCleanersArgs = {
  distinct_on?: InputMaybe<Array<Cleaners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleaners_Order_By>>;
  where?: InputMaybe<Cleaners_Bool_Exp>;
};


export type Subscription_RootCleaners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cleaners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleaners_Order_By>>;
  where?: InputMaybe<Cleaners_Bool_Exp>;
};


export type Subscription_RootCleaners_By_PkArgs = {
  adminId: Scalars['uuid'];
  cleanerId: Scalars['uuid'];
};


export type Subscription_RootCleaners_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cleaners_Stream_Cursor_Input>>;
  where?: InputMaybe<Cleaners_Bool_Exp>;
};


export type Subscription_RootCleansArgs = {
  distinct_on?: InputMaybe<Array<Cleans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleans_Order_By>>;
  where?: InputMaybe<Cleans_Bool_Exp>;
};


export type Subscription_RootCleans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cleans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleans_Order_By>>;
  where?: InputMaybe<Cleans_Bool_Exp>;
};


export type Subscription_RootCleans_By_PkArgs = {
  reservationId: Scalars['String'];
};


export type Subscription_RootCleans_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cleans_Stream_Cursor_Input>>;
  where?: InputMaybe<Cleans_Bool_Exp>;
};


export type Subscription_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootLocations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLocations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Locations_Stream_Cursor_Input>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


export type Subscription_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


export type Subscription_RootNotification_By_PkArgs = {
  notification: Scalars['String'];
};


export type Subscription_RootNotification_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Notification_Stream_Cursor_Input>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};


export type Subscription_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_By_PkArgs = {
  notification: Notification_Enum;
  reservationId: Scalars['String'];
};


export type Subscription_RootNotifications_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Notifications_Stream_Cursor_Input>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
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


export type Subscription_RootReservationsArgs = {
  distinct_on?: InputMaybe<Array<Reservations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservations_Order_By>>;
  where?: InputMaybe<Reservations_Bool_Exp>;
};


export type Subscription_RootReservations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservations_Order_By>>;
  where?: InputMaybe<Reservations_Bool_Exp>;
};


export type Subscription_RootReservations_By_PkArgs = {
  id: Scalars['String'];
  source: Source_Enum;
};


export type Subscription_RootReservations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Reservations_Stream_Cursor_Input>>;
  where?: InputMaybe<Reservations_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  locationId: Scalars['uuid'];
  role: Role_Enum;
  userId: Scalars['uuid'];
};


export type Subscription_RootRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Roles_Bool_Exp>;
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


export type Subscription_RootSourceArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Subscription_RootSource_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Subscription_RootSource_By_PkArgs = {
  source: Scalars['String'];
};


export type Subscription_RootSource_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Source_Stream_Cursor_Input>>;
  where?: InputMaybe<Source_Bool_Exp>;
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
  /** An array relationship */
  cleaners: Array<Cleaners>;
  /** An aggregate relationship */
  cleaners_aggregate: Cleaners_Aggregate;
  /** An array relationship */
  cleaning: Array<Cleaners>;
  /** An aggregate relationship */
  cleaning_aggregate: Cleaners_Aggregate;
  /** An array relationship */
  cleans: Array<Cleans>;
  /** An aggregate relationship */
  cleans_aggregate: Cleans_Aggregate;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  reservations: Array<Reservations>;
  /** An aggregate relationship */
  reservations_aggregate: Reservations_Aggregate;
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregate relationship */
  roles_aggregate: Roles_Aggregate;
};


/** columns and relationships of "users" */
export type UsersCleanersArgs = {
  distinct_on?: InputMaybe<Array<Cleaners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleaners_Order_By>>;
  where?: InputMaybe<Cleaners_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCleaners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cleaners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleaners_Order_By>>;
  where?: InputMaybe<Cleaners_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCleaningArgs = {
  distinct_on?: InputMaybe<Array<Cleaners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleaners_Order_By>>;
  where?: InputMaybe<Cleaners_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCleaning_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cleaners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleaners_Order_By>>;
  where?: InputMaybe<Cleaners_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCleansArgs = {
  distinct_on?: InputMaybe<Array<Cleans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleans_Order_By>>;
  where?: InputMaybe<Cleans_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCleans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cleans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cleans_Order_By>>;
  where?: InputMaybe<Cleans_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReservationsArgs = {
  distinct_on?: InputMaybe<Array<Reservations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservations_Order_By>>;
  where?: InputMaybe<Reservations_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReservations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservations_Order_By>>;
  where?: InputMaybe<Reservations_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
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
  cleaners?: InputMaybe<Cleaners_Bool_Exp>;
  cleaners_aggregate?: InputMaybe<Cleaners_Aggregate_Bool_Exp>;
  cleaning?: InputMaybe<Cleaners_Bool_Exp>;
  cleaning_aggregate?: InputMaybe<Cleaners_Aggregate_Bool_Exp>;
  cleans?: InputMaybe<Cleans_Bool_Exp>;
  cleans_aggregate?: InputMaybe<Cleans_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  reservations?: InputMaybe<Reservations_Bool_Exp>;
  reservations_aggregate?: InputMaybe<Reservations_Aggregate_Bool_Exp>;
  roles?: InputMaybe<Roles_Bool_Exp>;
  roles_aggregate?: InputMaybe<Roles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  cleaners?: InputMaybe<Cleaners_Arr_Rel_Insert_Input>;
  cleaning?: InputMaybe<Cleaners_Arr_Rel_Insert_Input>;
  cleans?: InputMaybe<Cleans_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  reservations?: InputMaybe<Reservations_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<Roles_Arr_Rel_Insert_Input>;
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
  cleaners_aggregate?: InputMaybe<Cleaners_Aggregate_Order_By>;
  cleaning_aggregate?: InputMaybe<Cleaners_Aggregate_Order_By>;
  cleans_aggregate?: InputMaybe<Cleans_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  reservations_aggregate?: InputMaybe<Reservations_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<Roles_Aggregate_Order_By>;
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


export type UserByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name?: string | null, email: string, emailVerified?: any | null }> };

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


export type VerifyEmailByEmailMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', emailVerified?: any | null, id: any, name?: string | null, email: string }> } | null };

export type AdapterUserFragment = { __typename?: 'users', email: string, emailVerified?: any | null, id: any, name?: string | null };

export type GetSessionAndUserQueryVariables = Exact<{
  sessionToken: Scalars['String'];
}>;


export type GetSessionAndUserQuery = { __typename?: 'query_root', sessions_by_pk?: { __typename?: 'sessions', expires: any, id: any, user: { __typename?: 'users', email: string, emailVerified?: any | null, id: any, name?: string | null } } | null };

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


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', email: string, emailVerified?: any | null, id: any, name?: string | null } | null };

export type GetUserByAccountQueryVariables = Exact<{
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
}>;


export type GetUserByAccountQuery = { __typename?: 'query_root', providers_by_pk?: { __typename?: 'providers', user: { __typename?: 'users', email: string, emailVerified?: any | null, id: any, name?: string | null } } | null };

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