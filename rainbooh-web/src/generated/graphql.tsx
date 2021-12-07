import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Campaign = {
  __typename?: 'Campaign';
  companyName: Scalars['String'];
  createdAt: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  endDate: Scalars['String'];
  id: Scalars['Int'];
  startDate: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  adAdd: Campaign;
  adDelete: Scalars['Boolean'];
  adUpdate?: Maybe<Campaign>;
  login: UserResponse;
  register: UserResponse;
};


export type MutationAdAddArgs = {
  desc: Scalars['String'];
  name: Scalars['String'];
};


export type MutationAdDeleteArgs = {
  id: Scalars['Float'];
};


export type MutationAdUpdateArgs = {
  desc?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  adDisplay: Array<Campaign>;
  adSingle?: Maybe<Campaign>;
  hello: Scalars['String'];
  me?: Maybe<User>;
  showUser: User;
  showUsers: Array<User>;
};


export type QueryAdSingleArgs = {
  id: Scalars['Int'];
};


export type QueryShowUserArgs = {
  id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type RegisterMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type AdSingleQueryVariables = Exact<{
  adSingleId: Scalars['Int'];
}>;


export type AdSingleQuery = { __typename?: 'Query', adSingle?: { __typename?: 'Campaign', id: number, companyName: string, desc?: string | null | undefined, startDate: string } | null | undefined };

export type AdDisplayQueryVariables = Exact<{ [key: string]: never; }>;


export type AdDisplayQuery = { __typename?: 'Query', adDisplay: Array<{ __typename?: 'Campaign', id: number, companyName: string, desc?: string | null | undefined, startDate: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string } | null | undefined };


export const LoginDocument = gql`
    mutation Login($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($password: String!, $username: String!) {
  register(password: $password, username: $username) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const AdSingleDocument = gql`
    query AdSingle($adSingleId: Int!) {
  adSingle(id: $adSingleId) {
    id
    companyName
    desc
    startDate
  }
}
    `;

export function useAdSingleQuery(options: Omit<Urql.UseQueryArgs<AdSingleQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AdSingleQuery>({ query: AdSingleDocument, ...options });
};
export const AdDisplayDocument = gql`
    query AdDisplay {
  adDisplay {
    id
    companyName
    desc
    startDate
  }
}
    `;

export function useAdDisplayQuery(options: Omit<Urql.UseQueryArgs<AdDisplayQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AdDisplayQuery>({ query: AdDisplayDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};