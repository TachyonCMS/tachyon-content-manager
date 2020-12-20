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
export const updateSpace = /* GraphQL */ `
  mutation UpdateSpace(
    $input: UpdateSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    updateSpace(input: $input, condition: $condition) {
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
export const deleteSpace = /* GraphQL */ `
  mutation DeleteSpace(
    $input: DeleteSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    deleteSpace(input: $input, condition: $condition) {
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
export const createContentType = /* GraphQL */ `
  mutation CreateContentType(
    $input: CreateContentTypeInput!
    $condition: ModelContentTypeConditionInput
  ) {
    createContentType(input: $input, condition: $condition) {
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
export const updateContentType = /* GraphQL */ `
  mutation UpdateContentType(
    $input: UpdateContentTypeInput!
    $condition: ModelContentTypeConditionInput
  ) {
    updateContentType(input: $input, condition: $condition) {
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
export const deleteContentType = /* GraphQL */ `
  mutation DeleteContentType(
    $input: DeleteContentTypeInput!
    $condition: ModelContentTypeConditionInput
  ) {
    deleteContentType(input: $input, condition: $condition) {
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
export const createLocale = /* GraphQL */ `
  mutation CreateLocale(
    $input: CreateLocaleInput!
    $condition: ModelLocaleConditionInput
  ) {
    createLocale(input: $input, condition: $condition) {
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
export const updateLocale = /* GraphQL */ `
  mutation UpdateLocale(
    $input: UpdateLocaleInput!
    $condition: ModelLocaleConditionInput
  ) {
    updateLocale(input: $input, condition: $condition) {
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
export const deleteLocale = /* GraphQL */ `
  mutation DeleteLocale(
    $input: DeleteLocaleInput!
    $condition: ModelLocaleConditionInput
  ) {
    deleteLocale(input: $input, condition: $condition) {
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
export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
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
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
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
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
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
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
