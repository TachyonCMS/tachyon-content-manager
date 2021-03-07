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
export const onUpdateSpace = /* GraphQL */ `
  subscription OnUpdateSpace($owner: String!) {
    onUpdateSpace(owner: $owner) {
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
export const onDeleteSpace = /* GraphQL */ `
  subscription OnDeleteSpace($owner: String!) {
    onDeleteSpace(owner: $owner) {
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
export const onCreateLocale = /* GraphQL */ `
  subscription OnCreateLocale($owner: String) {
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
        id
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
  subscription OnUpdateLocale($owner: String) {
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
        id
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
  subscription OnDeleteLocale($owner: String) {
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
        id
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
  subscription OnCreateContentSchema($owner: String) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateContentSchema = /* GraphQL */ `
  subscription OnUpdateContentSchema($owner: String) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteContentSchema = /* GraphQL */ `
  subscription OnDeleteContentSchema($owner: String) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry($owner: String) {
    onCreateEntry(owner: $owner) {
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
  subscription OnUpdateEntry($owner: String) {
    onUpdateEntry(owner: $owner) {
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
  subscription OnDeleteEntry($owner: String) {
    onDeleteEntry(owner: $owner) {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto($owner: String) {
    onCreatePhoto(owner: $owner) {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto($owner: String) {
    onUpdatePhoto(owner: $owner) {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto($owner: String) {
    onDeletePhoto(owner: $owner) {
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
export const onCreateContentfulImport = /* GraphQL */ `
  subscription OnCreateContentfulImport($owner: String) {
    onCreateContentfulImport(owner: $owner) {
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
export const onUpdateContentfulImport = /* GraphQL */ `
  subscription OnUpdateContentfulImport($owner: String) {
    onUpdateContentfulImport(owner: $owner) {
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
export const onDeleteContentfulImport = /* GraphQL */ `
  subscription OnDeleteContentfulImport($owner: String) {
    onDeleteContentfulImport(owner: $owner) {
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
