/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as ProfileImport } from './routes/profile'
import { Route as FormImport } from './routes/form'
import { Route as FolderImport } from './routes/folder'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as PokemonIndexImport } from './routes/pokemon/index'
import { Route as PokemonIdImport } from './routes/pokemon/$id'

// Create/Update Routes

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const FormRoute = FormImport.update({
  id: '/form',
  path: '/form',
  getParentRoute: () => rootRoute,
} as any)

const FolderRoute = FolderImport.update({
  id: '/folder',
  path: '/folder',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIndexRoute = PokemonIndexImport.update({
  id: '/pokemon/',
  path: '/pokemon/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIdRoute = PokemonIdImport.update({
  id: '/pokemon/$id',
  path: '/pokemon/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/folder': {
      id: '/folder'
      path: '/folder'
      fullPath: '/folder'
      preLoaderRoute: typeof FolderImport
      parentRoute: typeof rootRoute
    }
    '/form': {
      id: '/form'
      path: '/form'
      fullPath: '/form'
      preLoaderRoute: typeof FormImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/$id': {
      id: '/pokemon/$id'
      path: '/pokemon/$id'
      fullPath: '/pokemon/$id'
      preLoaderRoute: typeof PokemonIdImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/': {
      id: '/pokemon/'
      path: '/pokemon'
      fullPath: '/pokemon'
      preLoaderRoute: typeof PokemonIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/folder': typeof FolderRoute
  '/form': typeof FormRoute
  '/profile': typeof ProfileRoute
  '/search': typeof SearchRoute
  '/pokemon/$id': typeof PokemonIdRoute
  '/pokemon': typeof PokemonIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/folder': typeof FolderRoute
  '/form': typeof FormRoute
  '/profile': typeof ProfileRoute
  '/search': typeof SearchRoute
  '/pokemon/$id': typeof PokemonIdRoute
  '/pokemon': typeof PokemonIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/folder': typeof FolderRoute
  '/form': typeof FormRoute
  '/profile': typeof ProfileRoute
  '/search': typeof SearchRoute
  '/pokemon/$id': typeof PokemonIdRoute
  '/pokemon/': typeof PokemonIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/folder'
    | '/form'
    | '/profile'
    | '/search'
    | '/pokemon/$id'
    | '/pokemon'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/folder'
    | '/form'
    | '/profile'
    | '/search'
    | '/pokemon/$id'
    | '/pokemon'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/folder'
    | '/form'
    | '/profile'
    | '/search'
    | '/pokemon/$id'
    | '/pokemon/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  FolderRoute: typeof FolderRoute
  FormRoute: typeof FormRoute
  ProfileRoute: typeof ProfileRoute
  SearchRoute: typeof SearchRoute
  PokemonIdRoute: typeof PokemonIdRoute
  PokemonIndexRoute: typeof PokemonIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  FolderRoute: FolderRoute,
  FormRoute: FormRoute,
  ProfileRoute: ProfileRoute,
  SearchRoute: SearchRoute,
  PokemonIdRoute: PokemonIdRoute,
  PokemonIndexRoute: PokemonIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/folder",
        "/form",
        "/profile",
        "/search",
        "/pokemon/$id",
        "/pokemon/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/folder": {
      "filePath": "folder.tsx"
    },
    "/form": {
      "filePath": "form.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/pokemon/$id": {
      "filePath": "pokemon/$id.tsx"
    },
    "/pokemon/": {
      "filePath": "pokemon/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
