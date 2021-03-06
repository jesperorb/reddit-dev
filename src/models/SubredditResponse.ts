export interface SubredditResponse {
  kind: string;
  data: SubredditData;
}

export interface SubredditData {
  modhash: string;
  dist: number;
  children: IRedditPost[];
  after: string;
  before: null;
}

export interface IRedditPost {
  kind: string;
  data: RedditPostData;
}

export interface RedditPostData {
  approved_at_utc: null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: FlairRichtext[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: null | string;
  downs: number;
  thumbnail_height?: number | null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  author_flair_background_color: null | string;
  subreddit_type: string;
  ups: number;
  domain: string;
  media_embed: MediaEmbed;
  thumbnail_width?: number | null;
  author_flair_template_id: null | string;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: MediaEmbed;
  link_flair_text: null | string;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  thumbnail: string;
  edited: boolean | number;
  author_flair_css_class: null | string;
  author_flair_richtext: FlairRichtext[];
  gildings: Gildings;
  post_hint?: string;
  content_categories: null;
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: string;
  wls: number;
  banned_by: null;
  author_flair_type: string;
  contest_mode: boolean;
  selftext_html: null | string;
  likes: null;
  suggested_sort: null | string;
  banned_at_utc: null;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview?: Preview;
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null | string;
  visited: boolean;
  num_reports: null;
  distinguished: null;
  subreddit_id: string;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  num_crossposts: number;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: string | null;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  media: null;
  is_video: boolean;
  link_flair_template_id?: string;
  media_metadata?: MediaMetadata;
  crosspost_parent_list?: CrosspostParentList[];
  crosspost_parent?: string;
}

export interface FlairRichtext {
  e: string;
  t: string;
}

export interface CrosspostParentList {
  approved_at_utc: null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: null;
  downs: number;
  thumbnail_height?: number | null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  author_flair_background_color: null;
  subreddit_type: string;
  ups: number;
  domain: string;
  media_embed: MediaEmbed;
  thumbnail_width?: number | null;
  author_flair_template_id: null;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: MediaEmbed;
  link_flair_text: null;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: null;
  author_flair_richtext: any[];
  gildings: Gildings;
  content_categories: null;
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: string;
  wls: number;
  banned_by: null;
  author_flair_type: string;
  contest_mode: boolean;
  selftext_html: null | string;
  likes: null;
  suggested_sort: null;
  banned_at_utc: null;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null;
  visited: boolean;
  num_reports: null;
  distinguished: null;
  subreddit_id: string;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  num_crossposts: number;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: null;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  media: null;
  is_video: boolean;
  post_hint?: string;
  preview?: Preview;
}

export interface Gildings {
  gid_1: number;
  gid_2: number;
  gid_3: number;
}

export interface MediaEmbed {}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface Image {
  source: Source;
  resolutions: Source[];
  variants: MediaEmbed;
  id: string;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface MediaMetadata {
  status: string;
  e: string;
  s: S;
  m: string;
  id: string;
}

export interface S {
  y: number;
  x: number;
  u: string;
}
