/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpace = /* GraphQL */ `
  query GetSpace($id: ID!) {
    getSpace(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
      photos {
        items {
          id
          spaceId
          ownerId
          owner
          bucket
          createdAt
          updatedAt
        }
        nextToken
      }
      contentfulImports {
        items {
          id
          spaceId
          ownerId
          owner
          bucket
          key
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listSpaces = /* GraphQL */ `
  query ListSpaces(
    $filter: ModelSpaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
        photos {
          nextToken
        }
        contentfulImports {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getLocale = /* GraphQL */ `
  query GetLocale($id: ID!, $environment: String!, $code: String!) {
    getLocale(id: $id, environment: $environment, code: $code) {
      id
      name
      code
      spaceId
      ownerId
      owner
      fallbackCode
      default
      contentManagementApi
      contentDeliveryApi
      optional
      sys {
        id
        type
        version
        createdAt
        updatedAt
      }
      environment
      createdAt
      updatedAt
    }
  }
`;
export const listLocales = /* GraphQL */ `
  query ListLocales(
    $id: ID
    $environmentCode: ModelLocalePrimaryCompositeKeyConditionInput
    $filter: ModelLocaleFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLocales(
      id: $id
      environmentCode: $environmentCode
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        code
        spaceId
        ownerId
        owner
        fallbackCode
        default
        contentManagementApi
        contentDeliveryApi
        optional
        sys {
          id
          type
          version
          createdAt
          updatedAt
        }
        environment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLocalesBySpace = /* GraphQL */ `
  query ListLocalesBySpace(
    $spaceId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelLocaleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocalesBySpace(
      spaceId: $spaceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        code
        spaceId
        ownerId
        owner
        fallbackCode
        default
        contentManagementApi
        contentDeliveryApi
        optional
        sys {
          id
          type
          version
          createdAt
          updatedAt
        }
        environment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContentSchema = /* GraphQL */ `
  query GetContentSchema($id: ID!, $environment: String!, $code: String!) {
    getContentSchema(id: $id, environment: $environment, code: $code) {
      id
      spaceId
      ownerId
      owner
      name
      displayField
      description
      sys {
        id
        type
        createdAt
        updatedAt
        publishedVersion
        publishedAt
        firstPublishedAt
        publishedCounter
        version
      }
      fields
      space {
        id
        name
        description
        createdAt
        updatedAt
        owner
        photos {
          nextToken
        }
        contentfulImports {
          nextToken
        }
      }
      environment
      code
      createdAt
      updatedAt
    }
  }
`;
export const listContentSchemas = /* GraphQL */ `
  query ListContentSchemas(
    $id: ID
    $environmentCode: ModelContentSchemaPrimaryCompositeKeyConditionInput
    $filter: ModelContentSchemaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContentSchemas(
      id: $id
      environmentCode: $environmentCode
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        spaceId
        ownerId
        owner
        name
        displayField
        description
        sys {
          id
          type
          createdAt
          updatedAt
          publishedVersion
          publishedAt
          firstPublishedAt
          publishedCounter
          version
        }
        fields
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        environment
        code
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listContentSchemaBySpace = /* GraphQL */ `
  query ListContentSchemaBySpace(
    $spaceId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelContentSchemaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentSchemaBySpace(
      spaceId: $spaceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        spaceId
        ownerId
        owner
        name
        displayField
        description
        sys {
          id
          type
          createdAt
          updatedAt
          publishedVersion
          publishedAt
          firstPublishedAt
          publishedCounter
          version
        }
        fields
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        environment
        code
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!, $environment: String!) {
    getEntry(id: $id, environment: $environment) {
      id
      spaceId
      ownerId
      owner
      contentSchema
      sys {
        id
        type
        createdAt
        updatedAt
        publishedVersion
        publishedAt
        firstPublishedAt
        publishedCounter
        version
      }
      fields
      environment
      createdAt
      updatedAt
    }
  }
`;
export const listEntrys = /* GraphQL */ `
  query ListEntrys(
    $id: ID
    $environment: ModelStringKeyConditionInput
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEntrys(
      id: $id
      environment: $environment
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        spaceId
        ownerId
        owner
        contentSchema
        sys {
          id
          type
          createdAt
          updatedAt
          publishedVersion
          publishedAt
          firstPublishedAt
          publishedCounter
          version
        }
        fields
        environment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listEntrysBySpace = /* GraphQL */ `
  query ListEntrysBySpace(
    $spaceId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntrysBySpace(
      spaceId: $spaceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        spaceId
        ownerId
        owner
        contentSchema
        sys {
          id
          type
          createdAt
          updatedAt
          publishedVersion
          publishedAt
          firstPublishedAt
          publishedCounter
          version
        }
        fields
        environment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      spaceId
      space {
        id
        name
        description
        createdAt
        updatedAt
        owner
        photos {
          nextToken
        }
        contentfulImports {
          nextToken
        }
      }
      ownerId
      owner
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        spaceId
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        ownerId
        owner
        bucket
        fullsize {
          key
          width
          height
        }
        thumbnail {
          key
          width
          height
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listPhotosBySpace = /* GraphQL */ `
  query ListPhotosBySpace(
    $spaceId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotosBySpace(
      spaceId: $spaceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        spaceId
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        ownerId
        owner
        bucket
        fullsize {
          key
          width
          height
        }
        thumbnail {
          key
          width
          height
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContentfulImport = /* GraphQL */ `
  query GetContentfulImport($id: ID!) {
    getContentfulImport(id: $id) {
      id
      spaceId
      space {
        id
        name
        description
        createdAt
        updatedAt
        owner
        photos {
          nextToken
        }
        contentfulImports {
          nextToken
        }
      }
      ownerId
      owner
      bucket
      key
      createdAt
      updatedAt
    }
  }
`;
export const listContentfulImports = /* GraphQL */ `
  query ListContentfulImports(
    $filter: ModelContentfulImportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentfulImports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        spaceId
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        ownerId
        owner
        bucket
        key
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listContentfulImportsBySpace = /* GraphQL */ `
  query ListContentfulImportsBySpace(
    $spaceId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelContentfulImportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentfulImportsBySpace(
      spaceId: $spaceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        spaceId
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        ownerId
        owner
        bucket
        key
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
