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
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      description
      photos {
        items {
          id
          albumId
          bucket
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      spaceId
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
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        photos {
          nextToken
        }
        spaceId
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
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      albumId
      album {
        id
        name
        description
        photos {
          nextToken
        }
        spaceId
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
      bucket
      fullsize {
        s3key
        width
        height
      }
      thumbnail {
        s3key
        width
        height
      }
      createdAt
      updatedAt
      owner
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
        albumId
        album {
          id
          name
          description
          spaceId
          createdAt
          updatedAt
          owner
        }
        bucket
        fullsize {
          s3key
          width
          height
        }
        thumbnail {
          s3key
          width
          height
        }
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
export const listAlbumsBySpace = /* GraphQL */ `
  query ListAlbumsBySpace(
    $spaceId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbumsBySpace(
      spaceId: $spaceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        photos {
          nextToken
        }
        spaceId
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
export const listPhotosByAlbum = /* GraphQL */ `
  query ListPhotosByAlbum(
    $albumId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotosByAlbum(
      albumId: $albumId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        albumId
        album {
          id
          name
          description
          spaceId
          createdAt
          updatedAt
          owner
        }
        bucket
        fullsize {
          s3key
          width
          height
        }
        thumbnail {
          s3key
          width
          height
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
