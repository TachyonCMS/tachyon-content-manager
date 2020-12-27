/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpace = /* GraphQL */ `
  query GetSpace($id: ID!) {
    getSpace(id: $id) {
      id
      name
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
      spaceId
      space {
        id
        name
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
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
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
        photos {
          nextToken
        }
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
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
        photos {
          nextToken
        }
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
        spaceId
        space {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
        photos {
          nextToken
        }
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
