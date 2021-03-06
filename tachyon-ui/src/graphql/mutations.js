/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSpace = /* GraphQL */ `
  mutation CreateSpace(
    $input: CreateSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    createSpace(input: $input, condition: $condition) {
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
export const updateSpace = /* GraphQL */ `
  mutation UpdateSpace(
    $input: UpdateSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    updateSpace(input: $input, condition: $condition) {
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
export const deleteSpace = /* GraphQL */ `
  mutation DeleteSpace(
    $input: DeleteSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    deleteSpace(input: $input, condition: $condition) {
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
export const createLocale = /* GraphQL */ `
  mutation CreateLocale(
    $input: CreateLocaleInput!
    $condition: ModelLocaleConditionInput
  ) {
    createLocale(input: $input, condition: $condition) {
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
export const updateLocale = /* GraphQL */ `
  mutation UpdateLocale(
    $input: UpdateLocaleInput!
    $condition: ModelLocaleConditionInput
  ) {
    updateLocale(input: $input, condition: $condition) {
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
export const deleteLocale = /* GraphQL */ `
  mutation DeleteLocale(
    $input: DeleteLocaleInput!
    $condition: ModelLocaleConditionInput
  ) {
    deleteLocale(input: $input, condition: $condition) {
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
export const createContentSchema = /* GraphQL */ `
  mutation CreateContentSchema(
    $input: CreateContentSchemaInput!
    $condition: ModelContentSchemaConditionInput
  ) {
    createContentSchema(input: $input, condition: $condition) {
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
export const updateContentSchema = /* GraphQL */ `
  mutation UpdateContentSchema(
    $input: UpdateContentSchemaInput!
    $condition: ModelContentSchemaConditionInput
  ) {
    updateContentSchema(input: $input, condition: $condition) {
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
export const deleteContentSchema = /* GraphQL */ `
  mutation DeleteContentSchema(
    $input: DeleteContentSchemaInput!
    $condition: ModelContentSchemaConditionInput
  ) {
    deleteContentSchema(input: $input, condition: $condition) {
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
export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
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
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
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
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
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
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
export const createContentfulImport = /* GraphQL */ `
  mutation CreateContentfulImport(
    $input: CreateContentfulImportInput!
    $condition: ModelContentfulImportConditionInput
  ) {
    createContentfulImport(input: $input, condition: $condition) {
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
export const updateContentfulImport = /* GraphQL */ `
  mutation UpdateContentfulImport(
    $input: UpdateContentfulImportInput!
    $condition: ModelContentfulImportConditionInput
  ) {
    updateContentfulImport(input: $input, condition: $condition) {
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
export const deleteContentfulImport = /* GraphQL */ `
  mutation DeleteContentfulImport(
    $input: DeleteContentfulImportInput!
    $condition: ModelContentfulImportConditionInput
  ) {
    deleteContentfulImport(input: $input, condition: $condition) {
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
