// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *about → about text block*
 */
export interface AboutDocumentDataAboutTextBlockItem {
  /**
   * about text field in *about → about text block*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.about_text_block[].about_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about_text: prismic.RichTextField;
}

/**
 * Item in *about → hobbies*
 */
export interface AboutDocumentDataHobbiesItem {
  /**
   * hobbies text field in *about → hobbies*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.hobbies[].hobbies_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hobbies_text: prismic.RichTextField;

  /**
   * hobbies title field in *about → hobbies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.hobbies[].hobbies_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hobbies_title: prismic.KeyTextField;
}

/**
 * Item in *about → resume*
 */
export interface AboutDocumentDataResumeItem {
  /**
   * url field in *about → resume*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about.resume[].url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * title field in *about → resume*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.resume[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *about → resume*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.resume[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * starting year field in *about → resume*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.resume[].starting_year
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  starting_year: prismic.KeyTextField;

  /**
   * ending year field in *about → resume*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.resume[].ending_year
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  ending_year: prismic.KeyTextField;

  /**
   * location field in *about → resume*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.resume[].location
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location: prismic.KeyTextField;

  /**
   * resume portion field in *about → resume*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.resume[].resume_portion
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  resume_portion: prismic.KeyTextField;

  /**
   * resume image field in *about → resume*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.resume[].resume_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  resume_image: prismic.ImageField<never>;
}

type AboutDocumentDataSlicesSlice = never;

/**
 * Content for about documents
 */
interface AboutDocumentData {
  /**
   * about image field in *about*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.about_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  about_image: prismic.ImageField<never>;

  /**
   * about text block field in *about*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.about_text_block[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  about_text_block: prismic.GroupField<
    Simplify<AboutDocumentDataAboutTextBlockItem>
  >;

  /**
   * hobbies field in *about*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.hobbies[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  hobbies: prismic.GroupField<Simplify<AboutDocumentDataHobbiesItem>>;

  /**
   * resume field in *about*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.resume[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  resume: prismic.GroupField<Simplify<AboutDocumentDataResumeItem>>;

  /**
   * Slice Zone field in *about*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Title field in *about*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *about*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *about*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * about document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

type CaseStudiesDocumentDataSlicesSlice = never;

/**
 * Content for case studies documents
 */
interface CaseStudiesDocumentData {
  /**
   * Slice Zone field in *case studies*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CaseStudiesDocumentDataSlicesSlice> /**
   * Meta Title field in *case studies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: case_studies.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *case studies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: case_studies.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *case studies*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_studies.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * case studies document from Prismic
 *
 * - **API ID**: `case_studies`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CaseStudiesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CaseStudiesDocumentData>,
    "case_studies",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = never;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * display field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.display
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  display: prismic.ImageField<never>;

  /**
   * Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *photos → photos gallery*
 */
export interface PhotosDocumentDataPhotosGalleryItem {
  /**
   * pic field in *photos → photos gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: photos.photos_gallery[].pic
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  pic: prismic.ImageField<never>;
}

type PhotosDocumentDataSlicesSlice = never;

/**
 * Content for photos documents
 */
interface PhotosDocumentData {
  /**
   * photos gallery field in *photos*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: photos.photos_gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  photos_gallery: prismic.GroupField<
    Simplify<PhotosDocumentDataPhotosGalleryItem>
  >;

  /**
   * album heading field in *photos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: photos.album_heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  album_heading: prismic.KeyTextField;

  /**
   * Slice Zone field in *photos*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: photos.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PhotosDocumentDataSlicesSlice> /**
   * Meta Title field in *photos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: photos.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *photos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: photos.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *photos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: photos.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * photos document from Prismic
 *
 * - **API ID**: `photos`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PhotosDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PhotosDocumentData>, "photos", Lang>;

/**
 * Item in *project detail → project image*
 */
export interface ProjectDetailDocumentDataProjectImageItem {
  /**
   * project detail images field in *project detail → project image*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.project_image[].project_detail_images
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_detail_images: prismic.ImageField<never>;
}

/**
 * Item in *project detail → project image 2*
 */
export interface ProjectDetailDocumentDataProjectImage2Item {
  /**
   * project detail image 2 field in *project detail → project image 2*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.project_image_2[].project_detail_image_2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_detail_image_2: prismic.ImageField<never>;
}

/**
 * Item in *project detail → results*
 */
export interface ProjectDetailDocumentDataResultsItem {
  /**
   * results_text field in *project detail → results*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.results[].results_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  results_text: prismic.KeyTextField;
}

type ProjectDetailDocumentDataSlicesSlice = never;

/**
 * Content for project detail documents
 */
interface ProjectDetailDocumentData {
  /**
   * project intro field in *project detail*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.project_intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project_intro: prismic.ContentRelationshipField<"projects">;

  /**
   * client name field in *project detail*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.client_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  client_name: prismic.KeyTextField;

  /**
   * year field in *project detail*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.year
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;

  /**
   * text block 1 field in *project detail*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.text_block_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_block_1: prismic.RichTextField;

  /**
   * project image field in *project detail*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.project_image[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  project_image: prismic.GroupField<
    Simplify<ProjectDetailDocumentDataProjectImageItem>
  >;

  /**
   * project image 2 field in *project detail*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.project_image_2[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  project_image_2: prismic.GroupField<
    Simplify<ProjectDetailDocumentDataProjectImage2Item>
  >;

  /**
   * results field in *project detail*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.results[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  results: prismic.GroupField<Simplify<ProjectDetailDocumentDataResultsItem>>;

  /**
   * Slice Zone field in *project detail*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDetailDocumentDataSlicesSlice> /**
   * Meta Title field in *project detail*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project_detail.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *project detail*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project_detail.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *project detail*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_detail.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * project detail document from Prismic
 *
 * - **API ID**: `project_detail`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDetailDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDetailDocumentData>,
    "project_detail",
    Lang
  >;

/**
 * Item in *projects → project images*
 */
export interface ProjectsDocumentDataProjectImagesItem {
  /**
   * project gallery field in *projects → project images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.project_images[].project_gallery
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_gallery: prismic.ImageField<never>;
}

type ProjectsDocumentDataSlicesSlice = never;

/**
 * Content for projects documents
 */
interface ProjectsDocumentData {
  /**
   * Thumbnail field in *projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail: prismic.ImageField<never>;

  /**
   * Title field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *projects*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * industry field in *projects*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.industry
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  industry: prismic.RichTextField;

  /**
   * scope field in *projects*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.scope
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  scope: prismic.RichTextField;

  /**
   * Image Background field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.image_background
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  image_background: prismic.KeyTextField;

  /**
   * project logo field in *projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.project_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_logo: prismic.ImageField<never>;

  /**
   * Image Shadow field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.image_shadow
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  image_shadow: prismic.KeyTextField;

  /**
   * client name field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.client_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  client_name: prismic.KeyTextField;

  /**
   * year field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.year
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;

  /**
   * project images field in *projects*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.project_images[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  project_images: prismic.GroupField<
    Simplify<ProjectsDocumentDataProjectImagesItem>
  >;

  /**
   * Slice Zone field in *projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice> /**
   * Meta Title field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | CaseStudiesDocument
  | HomepageDocument
  | PhotosDocument
  | ProjectDetailDocument
  | ProjectsDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataAboutTextBlockItem,
      AboutDocumentDataHobbiesItem,
      AboutDocumentDataResumeItem,
      AboutDocumentDataSlicesSlice,
      CaseStudiesDocument,
      CaseStudiesDocumentData,
      CaseStudiesDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PhotosDocument,
      PhotosDocumentData,
      PhotosDocumentDataPhotosGalleryItem,
      PhotosDocumentDataSlicesSlice,
      ProjectDetailDocument,
      ProjectDetailDocumentData,
      ProjectDetailDocumentDataProjectImageItem,
      ProjectDetailDocumentDataProjectImage2Item,
      ProjectDetailDocumentDataResultsItem,
      ProjectDetailDocumentDataSlicesSlice,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataProjectImagesItem,
      ProjectsDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
