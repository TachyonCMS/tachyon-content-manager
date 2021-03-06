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
  query GetLocale($id: ID!) {
    getLocale(id: $id) {
      id
      name
      code
      spaceId
      fallbackCode
      default
      contentManagementApi
      contentDeliveryApi
      optional
      sys {
        type
        version
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLocales = /* GraphQL */ `
  query ListLocales(
    $filter: ModelLocaleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocales(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        code
        spaceId
        fallbackCode
        default
        contentManagementApi
        contentDeliveryApi
        optional
        sys {
          type
          version
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getContentSchema = /* GraphQL */ `
  query GetContentSchema($id: ID!) {
    getContentSchema(id: $id) {
      id
      spaceId
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
      fields {
        id
        name
        type
        localized
        required
        validations
        disabled
        omitted
      }
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listContentSchemas = /* GraphQL */ `
  query ListContentSchemas(
    $filter: ModelContentSchemaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentSchemas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        spaceId
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
        fields {
          id
          name
          type
          localized
          required
          validations
          disabled
          omitted
        }
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
      id
      name
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEntrys = /* GraphQL */ `
  query ListEntrys(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        spaceId
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
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
        createdAt
        updatedAt
        owner
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
        fallbackCode
        default
        contentManagementApi
        contentDeliveryApi
        optional
        sys {
          type
          version
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
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
        fields {
          id
          name
          type
          localized
          required
          validations
          disabled
          omitted
        }
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listEntriesBySpace = /* GraphQL */ `
  query ListEntriesBySpace(
    $spaceId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntriesBySpace(
      spaceId: $spaceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        spaceId
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listEntriesByContentSchema = /* GraphQL */ `
  query ListEntriesByContentSchema(
    $contentSchema: String
    $sortDirection: ModelSortDirection
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntriesByContentSchema(
      contentSchema: $contentSchema
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        spaceId
        space {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
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
        createdAt
        updatedAt
        owner
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
