/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSpace = /* GraphQL */ `
  subscription OnCreateSpace($owner: String!) {
    onCreateSpace(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSpace = /* GraphQL */ `
  subscription OnUpdateSpace($owner: String!) {
    onUpdateSpace(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSpace = /* GraphQL */ `
  subscription OnDeleteSpace($owner: String!) {
    onDeleteSpace(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateLocale = /* GraphQL */ `
  subscription OnCreateLocale($owner: String!) {
    onCreateLocale(owner: $owner) {
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
export const onUpdateLocale = /* GraphQL */ `
  subscription OnUpdateLocale($owner: String!) {
    onUpdateLocale(owner: $owner) {
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
export const onDeleteLocale = /* GraphQL */ `
  subscription OnDeleteLocale($owner: String!) {
    onDeleteLocale(owner: $owner) {
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
export const onCreateContentSchema = /* GraphQL */ `
  subscription OnCreateContentSchema($owner: String!) {
    onCreateContentSchema(owner: $owner) {
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
export const onUpdateContentSchema = /* GraphQL */ `
  subscription OnUpdateContentSchema($owner: String!) {
    onUpdateContentSchema(owner: $owner) {
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
export const onDeleteContentSchema = /* GraphQL */ `
  subscription OnDeleteContentSchema($owner: String!) {
    onDeleteContentSchema(owner: $owner) {
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
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry($owner: String!) {
    onCreateEntry(owner: $owner) {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry($owner: String!) {
    onUpdateEntry(owner: $owner) {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry($owner: String!) {
    onDeleteEntry(owner: $owner) {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($owner: String!) {
    onCreateAlbum(owner: $owner) {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($owner: String!) {
    onUpdateAlbum(owner: $owner) {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($owner: String!) {
    onDeleteAlbum(owner: $owner) {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
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
