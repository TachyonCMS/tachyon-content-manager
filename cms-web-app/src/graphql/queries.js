/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpace = /* GraphQL */ `
  query GetSpace($id: ID!) {
    getSpace(id: $id) {
      id
      name
      albums {
        items {
          id
          spaceId
          name
          description
          location
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      contentTypes {
        items {
          id
          spaceId
          name
          description
          displayField
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      locales {
        items {
          id
          spaceId
          name
          code
          fallbackCode
          default
          contentManagementApi
          contentDeliveryApi
          optional
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      entries {
        items {
          id
          spaceId
          contentTypeId
          contentType
          entryId
          fields
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
        albums {
          nextToken
        }
        contentTypes {
          nextToken
        }
        locales {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getContentType = /* GraphQL */ `
  query GetContentType($id: ID!) {
    getContentType(id: $id) {
      id
      spaceId
      space {
        id
        name
        albums {
          nextToken
        }
        contentTypes {
          nextToken
        }
        locales {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      description
      displayField
      sys {
        space {
          id
          type
          linkType
        }
        id
        type
        createdAt
        updatedAt
        environment {
          id
          type
          linkType
        }
        publishedVersion
        publishedAt
        firstPublishedAt
        createdBy {
          id
          type
          linkType
        }
        updatedBy {
          id
          type
          linkType
        }
        publishedCounter
        version
        publishedBy {
          id
          type
          linkType
        }
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listContentTypes = /* GraphQL */ `
  query ListContentTypes(
    $filter: ModelContentTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        name
        description
        displayField
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
      spaceId
      space {
        id
        name
        albums {
          nextToken
        }
        contentTypes {
          nextToken
        }
        locales {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      code
      fallbackCode
      default
      contentManagementApi
      contentDeliveryApi
      optional
      sys {
        type
        id
        version
        space {
          id
          type
          linkType
        }
        environment {
          id
          type
          linkType
        }
        createdBy {
          id
          type
          linkType
        }
        createdAt
        updatedBy {
          id
          type
          linkType
        }
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
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        name
        code
        fallbackCode
        default
        contentManagementApi
        contentDeliveryApi
        optional
        sys {
          type
          id
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
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
      id
      spaceId
      space {
        id
        name
        albums {
          nextToken
        }
        contentTypes {
          nextToken
        }
        locales {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      contentTypeId
      contentType
      contentTypeModel {
        id
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        name
        description
        displayField
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
        createdAt
        updatedAt
        owner
      }
      entryId
      sys {
        space
        id
        type
        createdAt
        updatedAt
        environment {
          id
          type
          linkType
        }
        publishedVersion
        publishedAt
        firstPublishedAt
        createdBy {
          id
          type
          linkType
        }
        updatedBy {
          id
          type
          linkType
        }
        publishedCounter
        version
        publishedBy {
          id
          type
          linkType
        }
        contentType {
          id
          type
          linkType
        }
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
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        contentTypeId
        contentType
        contentTypeModel {
          id
          spaceId
          name
          description
          displayField
          createdAt
          updatedAt
          owner
        }
        entryId
        sys {
          space
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
      spaceId
      space {
        id
        name
        albums {
          nextToken
        }
        contentTypes {
          nextToken
        }
        locales {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      description
      location
      photos {
        items {
          id
          albumId
          bucket
          location
          createdAt
          updatedAt
          owner
        }
        nextToken
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
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        name
        description
        location
        photos {
          nextToken
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
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        name
        description
        location
        photos {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
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
      location
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
          spaceId
          name
          description
          location
          createdAt
          updatedAt
          owner
        }
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
        location
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listContentTypesBySpace = /* GraphQL */ `
  query ListContentTypesBySpace(
    $spaceId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelContentTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentTypesBySpace(
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
          createdAt
          updatedAt
          owner
        }
        name
        description
        displayField
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
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        name
        code
        fallbackCode
        default
        contentManagementApi
        contentDeliveryApi
        optional
        sys {
          type
          id
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
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        contentTypeId
        contentType
        contentTypeModel {
          id
          spaceId
          name
          description
          displayField
          createdAt
          updatedAt
          owner
        }
        entryId
        sys {
          space
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
export const listEntriesBySpaceContentType = /* GraphQL */ `
  query ListEntriesBySpaceContentType(
    $spaceId: ID
    $contentType: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntriesBySpaceContentType(
      spaceId: $spaceId
      contentType: $contentType
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
          createdAt
          updatedAt
          owner
        }
        contentTypeId
        contentType
        contentTypeModel {
          id
          spaceId
          name
          description
          displayField
          createdAt
          updatedAt
          owner
        }
        entryId
        sys {
          space
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
export const listEntriesBySpaceEntry = /* GraphQL */ `
  query ListEntriesBySpaceEntry(
    $spaceId: ID
    $entryId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntriesBySpaceEntry(
      spaceId: $spaceId
      entryId: $entryId
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
          createdAt
          updatedAt
          owner
        }
        contentTypeId
        contentType
        contentTypeModel {
          id
          spaceId
          name
          description
          displayField
          createdAt
          updatedAt
          owner
        }
        entryId
        sys {
          space
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
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        name
        description
        location
        photos {
          nextToken
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
          spaceId
          name
          description
          location
          createdAt
          updatedAt
          owner
        }
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
        location
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
