/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSpace = /* GraphQL */ `
  subscription OnCreateSpace {
    onCreateSpace {
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
export const onUpdateSpace = /* GraphQL */ `
  subscription OnUpdateSpace {
    onUpdateSpace {
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
export const onDeleteSpace = /* GraphQL */ `
  subscription OnDeleteSpace {
    onDeleteSpace {
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
export const onCreateContentType = /* GraphQL */ `
  subscription OnCreateContentType {
    onCreateContentType {
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
export const onUpdateContentType = /* GraphQL */ `
  subscription OnUpdateContentType {
    onUpdateContentType {
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
export const onDeleteContentType = /* GraphQL */ `
  subscription OnDeleteContentType {
    onDeleteContentType {
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
export const onCreateLocale = /* GraphQL */ `
  subscription OnCreateLocale {
    onCreateLocale {
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
export const onUpdateLocale = /* GraphQL */ `
  subscription OnUpdateLocale {
    onUpdateLocale {
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
export const onDeleteLocale = /* GraphQL */ `
  subscription OnDeleteLocale {
    onDeleteLocale {
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
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry {
    onCreateEntry {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry {
    onUpdateEntry {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry {
    onDeleteEntry {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
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
